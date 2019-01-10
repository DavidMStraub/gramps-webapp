from flask import Flask
from flask_cors import CORS
from flask_restful import reqparse,  Api, Resource
import json
from .db import Db
from .gramps import get_people, get_translation


app = Flask(__name__)
CORS(app)
api = Api(app)


parser = reqparse.RequestParser()
parser.add_argument('strings', type=str)


tree = Db('Straub')


@app.teardown_appcontext
def shutdown_session(exception=None):
    tree.close()


class People(Resource):
    def get(self):
        return get_people(tree)


class Translate(Resource):
    def get(self):
        args = parser.parse_args()
        try:
            strings = json.loads(args['strings'])
        except (json.decoder.JSONDecodeError, TypeError, ValueError) as e:
            return {"error": str(e)}
        return {"data": get_translation(strings)}


api.add_resource(People, '/people')
api.add_resource(Translate, '/translate')
