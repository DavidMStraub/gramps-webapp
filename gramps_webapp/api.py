"""Flask web app providing a REST API to a gramps family tree."""


import datetime
import json
import logging
import os
import secrets

import click
from flask import (Flask, current_app, g, jsonify, request, send_file,
                   send_from_directory, Response)
from flask.cli import FlaskGroup
from flask_caching import Cache
from flask_cors import CORS
from flask_compress import Compress
from flask_jwt_extended import JWTManager, create_access_token, jwt_required
from flask_restful import Api, Resource, reqparse

from .db import Db
from .gramps import (get_db_info, get_events, get_families, get_media_info,
                     get_people, get_places, get_translation,
                     get_citations, get_sources, get_repositories,
                     get_note, get_media)
from .image import get_thumbnail, get_thumbnail_cropped


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
    app.config['PASSWORD'] = os.getenv('PASSWORD') or ''
    if not app.config['PASSWORD']:
        logging.warn("The password is empty! The app will not be protected.")

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

    jwt_secret_key = os.getenv('JWT_SECRET_KEY')
    if jwt_secret_key is None:
        if os.path.exists('jwt_secret_key'):
            with open('jwt_secret_key', 'r') as f:
                jwt_secret_key = f.read()
        else:
            jwt_secret_key = secrets.token_urlsafe(64)
    with open('jwt_secret_key', 'w') as f:
        f.write(jwt_secret_key)
    app.config['JWT_SECRET_KEY'] = jwt_secret_key

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
        password = request.json.get('password', None)
        if password != app.config['PASSWORD']:
            return jsonify({"msg": "Wrong password"}), 401
        expires = datetime.timedelta(days=365)
        access_token = create_access_token(identity='user', expires_delta=expires)
        return jsonify(access_token=access_token), 200


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


    @app.route('/api/media/<string:handle>')
    @jwt_required
    def show_image(handle):
        path = get_media_info(get_db(), handle)['full_path']
        return send_file(path)


    @app.route('/api/thumbnail/<string:handle>/<int:size>')
    @jwt_required
    @cache.cached()
    def show_thumbnail_square(handle, size):
        info = get_media_info(get_db(), handle)
        tn = get_thumbnail(info['full_path'], size,
                           square=True, mime=info['mime'])
        return send_file(tn, info['mime'])


    @app.route('/api/thumbnail/<string:handle>/<int:size>/<int:x1>/<int:y1>/<int:x2>/<int:y2>')
    @jwt_required
    @cache.cached()
    def show_thumbnail_square_cropped(handle, size, x1, y1, x2, y2):
        info = get_media_info(get_db(), handle)
        tn = get_thumbnail_cropped(info['full_path'], size, x1, y1, x2, y2,
                                   square=True, mime=info['mime'])
        return send_file(tn, info['mime'])

    return app


@click.group(cls=FlaskGroup, create_app=create_app)
@click.option('-O', '--open', help='Family tree to use')
def cli(open):
    """Custom CLI command."""
    if open:
        os.environ['TREE'] = open
