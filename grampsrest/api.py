from flask import Flask
from flask_cors import CORS
from flask_restful import reqparse,  Api, Resource
from .db import Db

app = Flask(__name__)
CORS(app)
api = Api(app)

tree = Db('Straub')
tree.open()


parser = reqparse.RequestParser()
parser.add_argument('fields', type=str)


from gramps.gen.display.name import NameDisplay
nd = NameDisplay()


def person_to_dict(p):
    return {
    'gramps_id': p.gramps_id,
    'name_display': nd.display(p),
    'name_given': nd.display_given(p),
    'name_surname': p.primary_name.get_surname(),
    }


def get_people(db, gids=None):
    db = tree.dbstate.db
    if gids is None:
        return [person_to_dict(p) for p in db.iter_people()]
    return [person_to_dict(db.get_person_from_gramps_id(gid)) for gid in gids]


class Person(Resource):
    def get(self, gid):
        args = parser.parse_args()
        gids = gid.split(',')
        db = tree.dbstate.db
        return get_people(db, gids)


class People(Resource):
    def get(self):
        db = tree.dbstate.db
        return get_people(db)


api.add_resource(People, '/people')
api.add_resource(Person, '/people/<gid>')
