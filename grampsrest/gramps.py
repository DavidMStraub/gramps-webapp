"""Functions using the Gramps Python package to access the family tree."""


import io
import os

from gramps.gen.const import GRAMPS_LOCALE
from gramps.gen.display.name import NameDisplay
from gramps.gen.display.place import displayer as place_displayer
from gramps.gen.utils.db import get_marriage_or_fallback
from gramps.gen.utils.location import get_main_location
from gramps.gen.utils.place import conv_lat_lon
from PIL import Image, ImageOps


nd = NameDisplay()
dd = GRAMPS_LOCALE.date_displayer
_ = GRAMPS_LOCALE.translation.sgettext


def get_birthplace(db, p):
    birth_ref = p.get_birth_ref()
    if not birth_ref:
        return ''
    return get_event_place_from_handle(db, birth_ref.ref)


def get_birthdate(db, p):
    birth_ref = p.get_birth_ref()
    if not birth_ref:
        return ''
    return get_event_date_from_handle(db, birth_ref.ref)


def get_deathdate(db, p):
    death_ref = p.get_death_ref()
    if not death_ref:
        return ''
    return get_event_date_from_handle(db, death_ref.ref)


def get_deathplace(db, p):
    death_ref = p.get_death_ref()
    if not death_ref:
        return ''
    return get_event_place_from_handle(db, death_ref.ref)


def display_date(date):
    if not date:
        return ''
    return dd.display(date)


def get_event_date_from_handle(db, handle):
    ev = db.get_event_from_handle(handle)
    date = ev.get_date_object()
    return display_date(date)


def display_place(db, place):
    if not place:
        return ''
    return place_displayer.display(db, place)


def get_event_place_from_handle(db, handle):
    ev = db.get_event_from_handle(handle)
    return get_event_place(db, ev)


def get_event_place(db, ev):
    if not ev or not ev.place:
        return ''
    place = db.get_place_from_handle(ev.place)
    return place.gramps_id


def get_marriageplace(db, f):
    ev = get_marriage_or_fallback(db, f)
    if not ev:
        return ''
    return get_event_place_from_handle(db, ev.handle)


def get_marriagedate(db, f):
    ev = get_marriage_or_fallback(db, f)
    if not ev:
        return ''
    return get_event_date_from_handle(db, ev.handle)


def get_father_id(db, f):
    handle = f.father_handle
    if not handle:
        return ''
    return db.get_person_from_handle(handle).gramps_id


def get_name_from_handle(db, handle):
    p = db.get_person_from_handle(handle)
    sn = p.primary_name.get_surname()
    gn = nd.display_given(p)
    return '{}, {}'.format(sn, gn)


def get_father_name(db, f):
    handle = f.father_handle
    if not handle:
        return ''
    return get_name_from_handle(db, handle)


def get_mother_id(db, f):
    handle = f.mother_handle
    if not handle:
        return ''
    return db.get_person_from_handle(handle).gramps_id


def get_mother_name(db, f):
    handle = f.mother_handle
    if not handle:
        return ''
    return get_name_from_handle(db, handle)


def get_children_id(db, f):
    refs = f.child_ref_list
    if not refs:
        return []
    return [db.get_person_from_handle(r.ref).gramps_id for r in refs]


def get_parents_id(db, p):
    ref = p.get_main_parents_family_handle()
    if not ref:
        return ''
    return db.get_family_from_handle(ref).gramps_id


def get_families_id(db, p):
    refs = p.get_family_handle_list()
    if not refs:
        return []
    return [db.get_family_from_handle(r).gramps_id for r in refs]


def get_event_participants(db, handle):
    participant = {}
    try:
        result_list = list(db.find_backlink_handles(handle,
                                 include_classes=['Person', 'Family']))
    except:
        return {}

    people = set([x[1] for x in result_list if x[0] == 'Person'])
    for personhandle in people:
        person = db.get_person_from_handle(personhandle)
        if not person:
            continue
        for event_ref in person.get_event_ref_list():
            if handle == event_ref.ref:
                role = event_ref.get_role().string
                if role not in participant:
                    participant[role] = []
                participant[role].append({'type': 'Person', 'gramps_id': person.gramps_id})

    families = set([x[1] for x in result_list if x[0] == 'Family'])
    for familyhandle in families:
        family = db.get_family_from_handle(familyhandle)
        if not family:
            continue
        for event_ref in family.get_event_ref_list():
            if handle == event_ref.ref:
                role = event_ref.get_role().string
                if role not in participant:
                    participant[role] = []
                participant[role].append({'type': 'Family', 'gramps_id': family.gramps_id})

    return participant


def geolocation(p):
    lat, lon = p.get_latitude(), p.get_longitude()
    if lat is None or lon is None:
        return None
    return conv_lat_lon(lat, lon)


def family_to_dict(db, f):
    return {
    'gramps_id': f.gramps_id,
    'marriagedate': get_marriagedate(db, f),
    'marriageplace': get_marriageplace(db, f),
    'father_id': get_father_id(db, f),
    'mother_id': get_mother_id(db, f),
    'father_name': get_father_name(db, f),
    'mother_name': get_mother_name(db, f),
    'children': get_children_id(db, f),
    'events': [r.ref for r in f.get_event_ref_list()],
    'media': [r.ref for r in f.get_media_list()],
    }


def person_to_dict(db, p):
    return {
    'gramps_id': p.gramps_id,
    'name_given': nd.display_given(p),
    'name_surname': p.primary_name.get_surname(),
    'gender': p.gender,
    'birthdate': get_birthdate(db, p),
    'deathdate': get_deathdate(db, p),
    'birthplace': get_birthplace(db, p),
    'deathplace': get_deathplace(db, p),
    'parents': get_parents_id(db, p),
    'families': get_families_id(db, p),
    'events': [{'ref': r.ref, 'role': r.get_role().string} for r in p.get_event_ref_list()],
    'media': [{'ref': r.ref, 'rect': r.rect} for r in p.get_media_list()],
    }


def place_to_dict(db, p):
    return {
    'handle': p.handle,
    'name': p.name.value,
    'geolocation': geolocation(p),
    'gramps_id': p.gramps_id,
    'type_string': p.place_type.string,
    'type_value': p.place_type.value,
    'media': [{'ref': r.ref, 'rect': r.rect} for r in p.get_media_list()],
    'hierarchy': get_main_location(db, p)
    }


def event_to_dict(db, e):
    return {
    'handle': e.handle,
    'gramps_id': e.gramps_id,
    'type': e.get_type().string,
    'place': get_event_place(db, e),
    'date': display_date(e.date),
    'description': e.get_description(),
    'media': [{'ref': r.ref, 'rect': r.rect} for r in e.get_media_list()],
    'participants': get_event_participants(db, e.handle),
    }


def get_db_info(tree):
    db = tree.dbstate.db
    return {
    'name': db.get_dbname(),
    'default_person': db.get_default_person().gramps_id,
    'researcher': db.get_researcher().get_name(),
    'number_people': db.get_number_of_people(),
    'number_events': db.get_number_of_events(),
    'number_families': db.get_number_of_families(),
    'number_places': db.get_number_of_places(),
    }


def get_people(tree):
    db = tree.dbstate.db
    return {p.gramps_id: person_to_dict(db, p) for p in db.iter_people()}


def get_families(tree):
    db = tree.dbstate.db
    return {f.gramps_id: family_to_dict(db, f) for f in db.iter_families()}


def get_events(tree):
    db = tree.dbstate.db
    return {e.handle: event_to_dict(db, e) for e in db.iter_events()}

def get_places(tree):
    db = tree.dbstate.db
    return {p.gramps_id: place_to_dict(db, p) for p in db.iter_places()}


def get_translation(strings):
    return {s: _(s) for s in strings}


def get_media_info(tree, handle):
    db = tree.dbstate.db
    m = db.get_media_from_handle(handle)
    base_path = db.get_mediapath()
    return {
        'mime': m.mime,
        'path': m.path,
        'full_path': os.path.join(base_path, m.path),

    }


def get_thumbnail(path, size, square=False):
    im = Image.open(path)
    if square:
        im = ImageOps.fit(im, (size, size), bleed=0.0, centering=(0.0, 0.5), method=Image.BICUBIC)
    else:
        im.thumbnail((size, size))
    f = io.BytesIO()
    im.save(f, format='JPEG')
    f.seek(0)
    return f


def get_thumbnail_cropped(path, size, x1, y1, x2, y2, square=False):
    im = Image.open(path)
    w, h = im.size
    im = im.crop((x1 * w / 100, y1 * h / 100, x2 * w / 100, y2 * h / 100))
    im.thumbnail((size, size))
    if square:
        im = ImageOps.fit(im, (size, size), bleed=0.0, centering=(0.0, 0.5), method=Image.BICUBIC)
    else:
        im.thumbnail((size, size))
    f = io.BytesIO()
    im.save(f, format='JPEG')
    f.seek(0)
    return f
