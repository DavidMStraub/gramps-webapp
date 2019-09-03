"""Functions using the Gramps Python package to access the family tree."""


import os

from gramps.gen.const import GRAMPS_LOCALE
from gramps.gen.display.name import NameDisplay
from gramps.gen.display.place import displayer as place_displayer
from gramps.gen.utils.db import get_marriage_or_fallback
from gramps.gen.utils.file import expand_media_path
from gramps.gen.utils.location import get_main_location
from gramps.gen.utils.place import conv_lat_lon
from gramps.plugins.lib.libhtmlbackend import HtmlBackend


nd = NameDisplay()
dd = GRAMPS_LOCALE.date_displayer
_ = GRAMPS_LOCALE.translation.sgettext


def get_birthplace(db, p):
    """Return the name of the birth place."""
    birth_ref = p.get_birth_ref()
    if not birth_ref:
        return ''
    return get_event_place_from_handle(db, birth_ref.ref)


def get_birthdate(db, p):
    """Return the formatted birth date."""
    birth_ref = p.get_birth_ref()
    if not birth_ref:
        return ''
    return get_event_date_from_handle(db, birth_ref.ref)


def get_deathdate(db, p):
    """Return the formatted death date."""
    death_ref = p.get_death_ref()
    if not death_ref:
        return ''
    return get_event_date_from_handle(db, death_ref.ref)


def get_deathplace(db, p):
    """Return the name of the death place."""
    death_ref = p.get_death_ref()
    if not death_ref:
        return ''
    return get_event_place_from_handle(db, death_ref.ref)


def display_date(date):
    """Format the date object."""
    if not date:
        return ''
    return dd.display(date)


def get_event_date_from_handle(db, handle):
    """Return a formatted date for the event."""
    ev = db.get_event_from_handle(handle)
    if not ev:
        return ''
    date = ev.get_date_object()
    return display_date(date)


def display_place(db, place):
    """Return the formatted place name."""
    if not place:
        return ''
    return place_displayer.display(db, place)


def get_event_place_from_handle(db, handle):
    """Get the event's place."""
    ev = db.get_event_from_handle(handle)
    if not ev:
        return ''
    return get_event_place(db, ev)


def get_event_place(db, ev):
    """Get the event's place."""
    if not ev or not ev.place:
        return ''
    place = db.get_place_from_handle(ev.place)
    return place.gramps_id


def get_marriageplace(db, f):
    """Get the marriage event's place."""
    ev = get_marriage_or_fallback(db, f)
    if not ev:
        return ''
    return get_event_place_from_handle(db, ev.handle)


def get_marriagedate(db, f):
    """Get the marriage event's date."""
    ev = get_marriage_or_fallback(db, f)
    if not ev:
        return ''
    return get_event_date_from_handle(db, ev.handle)


def get_father_id(db, f):
    """Get the Gramps ID of the family's father."""
    handle = f.father_handle
    if not handle:
        return ''
    return db.get_person_from_handle(handle).gramps_id


def get_name_from_handle(db, handle):
    """Get the name of the person."""
    p = db.get_person_from_handle(handle)
    if not p:
        return ''
    sn = p.primary_name.get_surname()
    gn = nd.display_given(p)
    return '{}, {}'.format(sn, gn)


def get_father_name(db, f):
    """Get the name of the family's father."""
    handle = f.father_handle
    if not handle:
        return ''
    return get_name_from_handle(db, handle)


def get_mother_id(db, f):
    """Get the Gramps ID of the family's mother."""
    handle = f.mother_handle
    if not handle:
        return ''
    return db.get_person_from_handle(handle).gramps_id


def get_mother_name(db, f):
    """Get the name of the family's mother."""
    handle = f.mother_handle
    if not handle:
        return ''
    return get_name_from_handle(db, handle)


def get_children_id(db, f):
    """Get the Gramps IDs of all the family's children."""
    refs = f.child_ref_list
    if not refs:
        return []
    return [db.get_person_from_handle(r.ref).gramps_id for r in refs]


def get_parents_id(db, p):
    """Get the Gramps IDs of the family's parents."""
    ref = p.get_main_parents_family_handle()
    if not ref:
        return ''
    return db.get_family_from_handle(ref).gramps_id


def get_families_id(db, p):
    """Get the Gramps IDs of all the person's families."""
    refs = p.get_family_handle_list()
    if not refs:
        return []
    return [db.get_family_from_handle(r).gramps_id for r in refs]


def get_event_participants(db, handle):
    """Get a list of dictionaries with the roles and Gramps IDs of all of the
    event's participants, and whether they are a family or person."""
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
    """Get the latitude and longitude of a place."""
    lat, lon = p.get_latitude(), p.get_longitude()
    if lat is None or lon is None:
        return None
    return conv_lat_lon(lat, lon)


def get_citation_ids(db, x):
    """Get the Gramps IDs of direct citations of object x
    (e.g. person, event, family, place)"""
    return [db.get_citation_from_handle(h).gramps_id for h in x.get_citation_list()]


def family_to_dict(db, f):
    """Return a dictionary with information about the family."""
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
    'citations': get_citation_ids(db, f),
    }


def person_to_dict(db, p):
    """Return a dictionary with information about the person."""
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
    'citations': get_citation_ids(db, p),
    }


def place_to_dict(db, p):
    """Return a dictionary with information about the place."""
    return {
    'handle': p.handle,
    'name': p.name.value,
    'geolocation': geolocation(p),
    'gramps_id': p.gramps_id,
    'type_string': p.place_type.string,
    'type_value': p.place_type.value,
    'media': [{'ref': r.ref, 'rect': r.rect} for r in p.get_media_list()],
    'hierarchy': get_main_location(db, p),
    'citations': get_citation_ids(db, p),
    }


def event_to_dict(db, e):
    """Return a dictionary with information about the event."""
    return {
    'handle': e.handle,
    'gramps_id': e.gramps_id,
    'type': e.get_type().string,
    'place': get_event_place(db, e),
    'date': display_date(e.date),
    'date_sortval': e.date.get_sort_value(),
    'description': e.get_description(),
    'media': [{'ref': r.ref, 'rect': r.rect} for r in e.get_media_list()],
    'participants': get_event_participants(db, e.handle),
    'citations': get_citation_ids(db, e),
    }


def citation_to_dict(db, c):
    """Return a dictionary with information about the citation."""
    return {
    'gramps_id': c.gramps_id,
    'source': db.get_source_from_handle(c.get_reference_handle()).gramps_id,
    'media': [{'ref': r.ref, 'rect': r.rect} for r in c.get_media_list()],
    'date': dd.display(c.date),
    'page': c.page
    }


def source_to_dict(db, s):
    """Return a dictionary with information about the source."""
    return {
    'gramps_id': s.gramps_id,
    'title': s.get_title(),
    'media': [{'ref': r.ref, 'rect': r.rect} for r in s.get_media_list()],
    'repositories': [db.get_repository_from_handle(r.ref).gramps_id for r in s.get_reporef_list()],
    'author': s.author,
    'pubinfo': s.pubinfo,
    }


def repository_to_dict(db, r):
    """Return a dictionary with information about the repository."""
    return {
    'gramps_id': r.gramps_id,
    'title': r.name,
    'type': r.get_type().string,
    }


def get_default_person_gramps_id(db):
    p = db.get_default_person()
    if p is None:
        return ''
    return p.gramps_id


def get_db_info(tree):
    """Return a dictionary with information about the database."""
    db = tree.db
    full_db = tree.dbstate.db
    return {
    'name': full_db.get_dbname(),
    'default_person': get_default_person_gramps_id(db),
    'researcher': db.get_researcher().get_name(),
    'number_people': db.get_number_of_people(),
    'number_events': db.get_number_of_events(),
    'number_families': db.get_number_of_families(),
    'number_places': db.get_number_of_places(),
    }


def get_people(tree):
    """Return a nested dictionary with information about all the people."""
    db = tree.db
    return {p.gramps_id: person_to_dict(db, p) for p in db.iter_people()}


def get_families(tree):
    """Return a nested dictionary with information about all the families."""
    db = tree.db
    return {f.gramps_id: family_to_dict(db, f) for f in db.iter_families()}


def get_events(tree):
    """Return a nested dictionary with information about all the events."""
    db = tree.db
    return {e.handle: event_to_dict(db, e) for e in db.iter_events()}

def get_places(tree):
    """Return a nested dictionary with information about all the places."""
    db = tree.db
    return {p.gramps_id: place_to_dict(db, p) for p in db.iter_places()}


def get_citations(tree):
    """Return a nested dictionary with information about all the citations."""
    db = tree.db
    return {c.gramps_id: citation_to_dict(db, c) for c in db.iter_citations()}


def get_sources(tree):
    """Return a nested dictionary with information about all the sources."""
    db = tree.db
    return {s.gramps_id: source_to_dict(db, s) for s in db.iter_sources()}


def get_repositories(tree):
    """Return a nested dictionary with information about all the repositories."""
    db = tree.db
    return {r.gramps_id: repository_to_dict(db, r) for r in db.iter_repositories()}


def get_translation(strings):
    """Return the translation of all the given strings for the current locale."""
    return {s: _(s) for s in strings}


def get_media_info(tree, handle):
    """Return a dictionary with information about the media object."""
    db = tree.db
    m = db.get_media_from_handle(handle)
    base_path = expand_media_path(db.get_mediapath(), db)
    return {
        'mime': m.mime,
        'path': m.path,
        'full_path': os.path.join(base_path, m.path),

    }


def get_note(tree, gramps_id, fmt='html'):
    """Return the type and content of a note.
    
    By default, the format of the content is HTML.
    If `fmt` is 'text' or None, it is returned as pure text instead."""
    db = tree.db
    note = db.get_note_from_gramps_id(gramps_id)
    note_type = note.type.string
    if fmt == 'text' or fmt is None:
        return str(note.text)
    elif fmt == 'html':
        _backend = HtmlBackend()
    else:
        raise ValueError("Format {} not recognized.".format(fmt))
    note_markup = _backend.add_markup_from_styled(note.text, note.text.get_tags())
    return {'type': note_type, 'content': note_markup}
