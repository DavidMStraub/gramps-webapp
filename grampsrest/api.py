from flask import Flask, send_file
from flask_cors import CORS
from flask_restful import reqparse,  Api, Resource
from flask_caching import Cache
import json
from .db import Db
from .gramps import get_people, get_translation, get_families, get_events, \
    get_db_info, get_media_info, get_thumbnail, get_thumbnail_cropped


app = Flask(__name__)
CORS(app)
api = Api(app)
cache = Cache(app, config={'CACHE_TYPE': 'filesystem',
                           'CACHE_DIR': 'appcache'})

parser = reqparse.RequestParser()
parser.add_argument('strings', type=str)

tree = Db('Straub')


@app.before_request
def before_request():
    if not tree.dbstate.is_open():
        tree.open()


@app.teardown_appcontext
def shutdown_session(exception=None):
    tree.close(False)


class People(Resource):
    @cache.cached()
    def get(self):
        return get_people(tree)


class Families(Resource):
    @cache.cached()
    def get(self):
        return get_families(tree)


class Events(Resource):
    @cache.cached()
    def get(self):
        return get_events(tree)


class DbInfo(Resource):
    @cache.cached()
    def get(self):
        return get_db_info(tree)


class Translate(Resource):
    @cache.cached()
    def get(self):
        args = parser.parse_args()
        try:
            strings = json.loads(args['strings'])
        except (json.decoder.JSONDecodeError, TypeError, ValueError) as e:
            return {"error": str(e)}
        return {"data": get_translation(strings)}


api.add_resource(People, '/people')
api.add_resource(Families, '/families')
api.add_resource(Events, '/events')
api.add_resource(Translate, '/translate')
api.add_resource(DbInfo, '/dbinfo')


@app.route('/media/<string:handle>')
def show_image(handle):
    path = get_media_info(tree, handle)['path']
    return send_file(path)


@app.route('/thumbnail/<string:handle>/<int:size>')
@cache.cached()
def show_thumbnail(handle, size):
    info = get_media_info(tree, handle)
    tn = get_thumbnail(info['path'], size)
    return send_file(tn, info['mime'])

@app.route('/thumbnail/<string:handle>/<int:size>/<int:x1>/<int:y1>/<int:x2>/<int:y2>')
@cache.cached()
def show_thumbnail_cropped(handle, size, x1, y1, x2, y2):
    info = get_media_info(tree, handle)
    tn = get_thumbnail_cropped(info['path'], size, x1, y1, x2, y2)
    return send_file(tn, info['mime'])
