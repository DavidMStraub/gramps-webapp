"""Flask web app providing a REST API to a gramps family tree."""


import datetime
import json
import logging
import os
import secrets

import click
from flask import (Flask, current_app, g, jsonify, request, send_file,
                   send_from_directory, Response)
from flask.cli import FlaskGroup, AppGroup
from flask_caching import Cache
from flask_cors import CORS
from flask_compress import Compress
from flask_jwt_extended import (JWTManager, create_access_token, create_refresh_token,
                                jwt_required, jwt_refresh_token_required,
                                get_jwt_identity)
from flask_restful import Api, Resource, reqparse

from .auth import SingleUser, SQLAuth
from .db import Db
from .gramps import (get_db_info, get_events, get_families, get_media_info,
                     get_people, get_places, get_translation,
                     get_citations, get_sources, get_repositories,
                     get_note, get_media)
from .image import get_thumbnail, get_thumbnail_cropped
from .media import FileHandler, S3Handler


def Boolean(v):
    """Coerce value `v` to boolean."""
    if isinstance(v, str):
        if v.lower() in ['yes', 'y', 'true']:
            return True
        elif v.lower() in ['no', 'n', 'false']:
            return False
        raise ValueError("Cannot corce string {} to boolean".format(v))
    else:
        return bool(v)


def get_db():
    """Get a new `Db` instance. Called before every request. Cached on first call."""
    if 'db' not in g:
        g.db = Db(current_app.config['TREE'],
                  include_private=not current_app.config['GRAMPS_EXCLUDE_PRIVATE'],
                  include_living=not current_app.config['GRAMPS_EXCLUDE_LIVING'])
    return g.db


def close_db(e=None):
    """Close the Database. Called after every request."""
    db = g.pop('db', None)
    if db is not None:
        db.close(False)


def get_jwt_secret_key(store=True):
    """Return the JWT secret key.
    
    If there is no environment variable 'JWT_SECRET_KEY',
    a key will be reat from the file 'jwt_secret_key'.
    If this does not exist, a safe token will be randomly
    generated. If `store` is True, this generated token
    will be safed to a file."""
    jwt_secret_key = os.getenv('JWT_SECRET_KEY')
    if not jwt_secret_key:
        if os.path.exists('jwt_secret_key'):
            with open('jwt_secret_key', 'r') as f:
                jwt_secret_key = f.read()
        else:
            jwt_secret_key = secrets.token_urlsafe(64)
        if store:
            with open('jwt_secret_key', 'w') as f:
                f.write(jwt_secret_key)
    return jwt_secret_key


def create_app():
    """Flask application factory."""
    app = Flask(__name__, static_folder='js')
    app.config['PROPAGATE_EXCEPTIONS'] = True
    app.config['TREE'] = os.getenv('TREE')
    app.config['GRAMPS_EXCLUDE_PRIVATE'] = Boolean(os.getenv('GRAMPS_EXCLUDE_PRIVATE'))
    app.config['GRAMPS_EXCLUDE_LIVING'] = Boolean(os.getenv('GRAMPS_EXCLUDE_LIVING'))
    app.config['TREE'] = os.getenv('TREE')
    if app.config['TREE'] is None or app.config['TREE'] == '':
        raise ValueError("You have to set the `TREE` environment variable.")
    app.config['GRAMPS_S3_BUCKET_NAME'] = os.getenv('GRAMPS_S3_BUCKET_NAME')
    app.config['PASSWORD'] = os.getenv('PASSWORD', '')
    app.config['GRAMPS_USER_DB_URI'] = os.getenv('GRAMPS_USER_DB_URI', '')

    if os.getenv('GRAMPS_AUTH_PROVIDER') == 'password':
        auth_provider = SingleUser(password=app.config['PASSWORD'])
    else:
        auth_provider = SQLAuth(db_uri=app.config['GRAMPS_USER_DB_URI'])

    app.logger.setLevel(logging.INFO)
    app.logger.info("Opening family tree '{}'".format(app.config['TREE']))

    # called once here in case Db's constructor raises
    Db(app.config['TREE'])

    CORS(app)
    Compress(app)
    api = Api(app)
    cache = Cache(app, config={'CACHE_TYPE': 'filesystem',
                               'CACHE_DIR': 'appcache'})

    app.config['JWT_TOKEN_LOCATION'] = ['headers', 'query_string']
    app.config['JWT_ACCESS_TOKEN_EXPIRES'] = datetime.timedelta(minutes=15)
    app.config['JWT_REFRESH_TOKEN_EXPIRES'] = datetime.timedelta(days=30)
    app.config['JWT_SECRET_KEY'] = get_jwt_secret_key()

    jwt = JWTManager(app)

    @app.route('/')
    def send_js_index():
        return send_from_directory(app.static_folder, 'index.html')

    @app.route('/env.js')
    def show_env_js():
        return Response("window.APIHOST = '';\n", content_type='text/javascript')

    @app.route('/<path:path>')
    def send_js(path):
        if path and os.path.exists(os.path.join(app.static_folder, path)):
            return send_from_directory(app.static_folder, path)
        else:
            return send_from_directory(app.static_folder, 'index.html')


    @app.route('/api/login', methods=['POST'])
    def login():
        if not request.is_json:
            return jsonify({"msg": "Missing JSON in request"}), 400
        username = request.json.get('username', None)
        password = request.json.get('password', None)
        from .auth import User
        logging.error(auth_provider.session.query(User).all())
        if not auth_provider.authorized(username, password):
            return jsonify({"msg": "Wrong username or password"}), 401
        ret = {
            'access_token': create_access_token(identity=username),
            'refresh_token': create_refresh_token(identity=username)
        }
        return jsonify(ret), 200

    @app.route('/api/refresh', methods=['POST'])
    @jwt_refresh_token_required
    def refresh():
        current_user = get_jwt_identity()
        ret = {
            'access_token': create_access_token(identity=current_user)
        }
        return jsonify(ret), 200

    parser = reqparse.RequestParser()
    parser.add_argument('strings', type=str)
    parser.add_argument('fmt', type=str)


    @app.before_request
    def before_request():
        if not get_db().dbstate.is_open():
            get_db().open()


    app.teardown_appcontext(close_db)


    class ProtectedResource(Resource):
        method_decorators = [jwt_required]


    class People(ProtectedResource):
        @cache.cached()
        def get(self):
            return get_people(get_db())


    class Families(ProtectedResource):
        @cache.cached()
        def get(self):
            return get_families(get_db())


    class Events(ProtectedResource):
        @cache.cached()
        def get(self):
            return get_events(get_db())


    class Places(ProtectedResource):
        @cache.cached()
        def get(self):
            return get_places(get_db())

    class Citations(ProtectedResource):
        @cache.cached()
        def get(self):
            return get_citations(get_db())

    class Sources(ProtectedResource):
        @cache.cached()
        def get(self):
            return get_sources(get_db())

    class Repositories(ProtectedResource):
        @cache.cached()
        def get(self):
            return get_repositories(get_db())

    class MediaObjects(ProtectedResource):
        @cache.cached()
        def get(self):
            return get_media(get_db())


    class DbInfo(ProtectedResource):
        @cache.cached()
        def get(self):
            return get_db_info(get_db())


    class FullTree(ProtectedResource):
        @cache.cached()        
        def get(self):
            return {
                'people': get_people(get_db()),
                'families': get_families(get_db()),
                'events': get_events(get_db()),
                'places': get_places(get_db()),
                'citations': get_citations(get_db()),
                'sources': get_sources(get_db()),
                'repositories': get_repositories(get_db()),
                'media': get_media(get_db()),
                'dbinfo': get_db_info(get_db()),
            } 

    class Translate(Resource):
        @cache.cached()
        def get(self):
            args = parser.parse_args()
            try:
                strings = json.loads(args['strings'])
            except (json.decoder.JSONDecodeError, TypeError, ValueError) as e:
                return {"error": str(e)}
            return {"data": get_translation(strings)}

    class Note(ProtectedResource):
        @cache.cached(query_string=True)
        def get(self, gramps_id):
            args = parser.parse_args()
            fmt = args.get('fmt') or 'html'
            return get_note(get_db(), gramps_id, fmt=fmt)

    api.add_resource(People, '/api/people')
    api.add_resource(Families, '/api/families')
    api.add_resource(Events, '/api/events')
    api.add_resource(Places, '/api/places')
    api.add_resource(Citations, '/api/citations')
    api.add_resource(Sources, '/api/sources')
    api.add_resource(MediaObjects, '/api/mediaobjects')
    api.add_resource(Repositories, '/api/repositories')
    api.add_resource(Translate, '/api/translate')
    api.add_resource(DbInfo, '/api/dbinfo')
    api.add_resource(FullTree, '/api/tree')
    api.add_resource(Note, '/api/note/<string:gramps_id>')

    def get_media_handler(handle):
        info = get_media_info(get_db(), handle)
        if app.config['GRAMPS_S3_BUCKET_NAME']:
            return S3Handler(handle, info, bucket_name=app.config['GRAMPS_S3_BUCKET_NAME'])
        else:
            return FileHandler(handle, info)

    @app.route('/api/media/<string:handle>')
    @jwt_required
    def show_image(handle):
        handler = get_media_handler(handle)
        return handler.send_file()

    @app.route('/api/thumbnail/<string:handle>/<int:size>')
    @jwt_required
    @cache.cached()
    def show_thumbnail_square(handle, size):
        handler = get_media_handler(handle)
        return handler.send_thumbnail_square(size)


    @app.route('/api/thumbnail/<string:handle>/<int:size>/<int:x1>/<int:y1>/<int:x2>/<int:y2>')
    @jwt_required
    @cache.cached()
    def show_thumbnail_square_cropped(handle, size, x1, y1, x2, y2):
        handler = get_media_handler(handle)
        return handler.send_thumbnail_square_cropped(size, x1, y1, x2, y2)

    return app
