"""Flask web app providing a REST API to a gramps family tree."""


import datetime
import json
import logging
import os
import secrets

import click
from flask import (Flask, current_app, g, jsonify, request, send_file,
                   send_from_directory)
from flask.cli import FlaskGroup
from flask_caching import Cache
from flask_cors import CORS
from flask_jwt_extended import JWTManager, create_access_token, jwt_required
from flask_restful import Api, Resource, reqparse

from .db import Db
from .gramps import (get_db_info, get_events, get_families, get_media_info,
                     get_people, get_places, get_translation)
from .image import get_thumbnail, get_thumbnail_cropped


def get_db():
    """Get a new `Db` instance. Called before every request. Cached on first call."""
    if 'db' not in g:
        g.db = Db(current_app.config['TREE'])
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
    app.config['TREE'] = os.environ.get('TREE')
    if app.config['TREE'] is None or app.config['TREE'] == '':
        raise ValueError("You have to set the `TREE` environment variable.")
    app.config['PASSWORD'] = os.environ.get('PASSWORD') or ''
    if not app.config['PASSWORD']:
        logging.warn("The password is empty! The app will not be protected.")

    app.logger.setLevel(logging.INFO)
    app.logger.info("Opening family tree '{}'".format(app.config['TREE']))

    # called once here in case Db's constructor raises
    Db(app.config['TREE'])

    CORS(app)
    api = Api(app)
    cache = Cache(app, config={'CACHE_TYPE': 'filesystem',
                               'CACHE_DIR': 'appcache'})

    app.config['JWT_TOKEN_LOCATION'] = ['headers', 'query_string']

    jwt_secret_key = os.environ.get('JWT_SECRET_KEY')
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


    api.add_resource(People, '/api/people')
    api.add_resource(Families, '/api/families')
    api.add_resource(Events, '/api/events')
    api.add_resource(Places, '/api/places')
    api.add_resource(Translate, '/api/translate')
    api.add_resource(DbInfo, '/api/dbinfo')
    api.add_resource(FullTree, '/api/tree')


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
        tn = get_thumbnail(info['full_path'], size, square=True)
        return send_file(tn, info['mime'])


    @app.route('/api/thumbnail/<string:handle>/<int:size>/<int:x1>/<int:y1>/<int:x2>/<int:y2>')
    @jwt_required
    @cache.cached()
    def show_thumbnail_square_cropped(handle, size, x1, y1, x2, y2):
        info = get_media_info(get_db(), handle)
        tn = get_thumbnail_cropped(info['full_path'], size, x1, y1, x2, y2, square=True)
        return send_file(tn, info['mime'])

    return app


@click.group(cls=FlaskGroup, create_app=create_app)
@click.option('-O', '--open', help='Family tree to use')
def cli(open):
    """Custom CLI command."""
    if open:
        os.environ['TREE'] = open
