from flask import Flask
from flask_cors import CORS
from flask_restful import reqparse,  Api, Resource
from .db import Db

app = Flask(__name__)
CORS(app)
api = Api(app)

tree = Db('Straub')


parser = reqparse.RequestParser()
parser.add_argument('fields', type=str)


from gramps.gen.display.name import NameDisplay
nd = NameDisplay()


def person_to_dict(p):
    return {
    'gramps_id': p.gramps_id,
    'name_given': nd.display_given(p),
    'name_surname': p.primary_name.get_surname(),
    }


def get_people(gids=None):
    if not tree.dbstate.open:
        tree.open()
    db = tree.dbstate.db
    if gids is None:
        return [person_to_dict(p) for p in db.iter_people()]
    return [person_to_dict(db.get_person_from_gramps_id(gid)) for gid in gids]


class Person(Resource):
    def get(self, gid):
        gids = gid.split(',')
        return get_people(gids)


class People(Resource):
    def get(self):
        return get_people()


api.add_resource(People, '/people')
api.add_resource(Person, '/people/<gid>')
