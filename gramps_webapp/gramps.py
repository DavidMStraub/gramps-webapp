"""Functions using the Gramps Python package to access the family tree."""


import os

import bleach
from gramps.gen.const import GRAMPS_LOCALE
from gramps.gen.display.name import NameDisplay
from gramps.gen.display.place import displayer as place_displayer
from gramps.gen.lib import NoteType
from gramps.gen.utils.db import get_marriage_or_fallback
from gramps.gen.utils.file import expand_media_path
from gramps.gen.utils.grampslocale import _LOCALE_NAMES, GrampsLocale
from gramps.gen.utils.location import get_main_location
from gramps.gen.utils.place import conv_lat_lon
from gramps.plugins.lib.libhtml import Html
from gramps.plugins.lib.libhtmlbackend import HtmlBackend, process_spaces

nd = NameDisplay()
dd = GRAMPS_LOCALE.date_displayer


ALLOWED_TAGS = [
    "a",
    "abbr",
    "acronym",
    "b",
    "blockquote",
    "code",
    "em",
    "i",
    "li",
    "ol",
    "strong",
    "ul",
    "span",
    "p",
    "br",
    "div",
]
ALLOWED_ATTRIBUTES = {
    "a": ["href", "title", "style"],
    "abbr": ["title", "style"],
    "acronym": ["title", "style"],
    "p": ["style"],
    "div": ["style"],
    "span": ["style"],
}
ALLOWED_STYLES = [
    "color",
    "background-color",
    "font-family",
    "font-weight",
    "font-size",
    "font-style",
    "text-decoration",
]


def sanitize(s):
    """Sanitize an HTML string by keeping only a couple of allowed
    tags/attributes."""
    if isinstance(s, str):
        return bleach.clean(
            s,
            tags=ALLOWED_TAGS,
            attributes=ALLOWED_ATTRIBUTES,
            styles=ALLOWED_STYLES,
            strip=True,
        )
    return s


def strip_tags(s):
    """Strip all HTML tags from a string."""
    if isinstance(s, str):
        return bleach.clean(s, tags=[], attributes=[], strip=True)
    return s


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


def get_note_ids(db, x):
    """Get the Gramps IDs of direct notes of object x
    (e.g. person, event, family, place)"""
    return [db.get_note_from_handle(h).gramps_id for h in x.get_note_list()]


def get_event_ids(db, x):
    """Get the Gramps IDs of events of object x
    (e.g. person, family, place)"""
    return [db.get_event_from_handle(r.ref).gramps_id for r in x.get_event_ref_list()]


def get_event_ids_roles(db, x):
    """Get the Gramps ID and role of events of object x"""
    return [{'gramps_id': db.get_event_from_handle(r.ref).gramps_id,
             'role': r.get_role().string}
            for r in x.get_event_ref_list()]


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
    'events': get_event_ids(db, f),
    'media': [r.ref for r in f.get_media_list()],
    'citations': get_citation_ids(db, f),
    'notes': get_note_ids(db, f),
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
    'events': get_event_ids_roles(db, p),
    'media': [{'ref': r.ref, 'rect': r.rect} for r in p.get_media_list()],
    'citations': get_citation_ids(db, p),
    'notes': get_note_ids(db, p),
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
    'notes': get_note_ids(db, p),
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
    'notes': get_note_ids(db, e),
    }


def citation_to_dict(db, c):
    """Return a dictionary with information about the citation."""
    return {
    'gramps_id': c.gramps_id,
    'source': db.get_source_from_handle(c.get_reference_handle()).gramps_id,
    'media': [{'ref': r.ref, 'rect': r.rect} for r in c.get_media_list()],
    'date': dd.display(c.date),
    'page': c.page,
    'notes': get_note_ids(db, c),
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
    'notes': get_note_ids(db, s),
    }


def repository_to_dict(db, r):
    """Return a dictionary with information about the repository."""
    return {
    'gramps_id': r.gramps_id,
    'title': r.name,
    'type': r.get_type().string,
    'notes': get_note_ids(db, r),
    }


def media_to_dict(db, m):
    """Return a dictionary with information about the media object."""
    return {
    'gramps_id': m.gramps_id,
    'desc': m.get_description(),
    'notes': get_note_ids(db, m),
    'citations': get_citation_ids(db, m),
    'mime': m.get_mime_type(),
    'date': dd.display(m.date),
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
    return {e.gramps_id: event_to_dict(db, e) for e in db.iter_events()}

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

def get_media(tree):
    """Return a nested dictionary with information about all the media objects."""
    db = tree.db
    return {m.handle: media_to_dict(db, m) for m in db.iter_media()}


def get_translation(strings, lang=None):
    """Return the translation of all the given strings for the current locale."""
    if lang is not None:
        gramps_locale = GrampsLocale(lang=lang)
    else:
        gramps_locale = GRAMPS_LOCALE
    return {s: gramps_locale.translation.sgettext(s) for s in strings}

def get_languages():
    return _LOCALE_NAMES

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
        return strip_tags(str(note.text))
    elif fmt == 'html':
        htmlnotetext = styled_note(note.get_styledtext(),
                                note.get_format(),
                                contains_html=(note.get_type() == NoteType.HTML_CODE))
        return {'type': note_type, 'content': sanitize(htmlnotetext), 'gramps_id': gramps_id}
    raise ValueError("Format {} not recognized.".format(fmt))


def styled_note(styledtext, format, contains_html=False):
    """Return the note in HTML format.

    Adapted from DynamicWeb.
    """
    _backend = HtmlBackend()

    text = str(styledtext)

    if (not text): return('')

    s_tags = styledtext.get_tags()
    htmllist = Html("div", class_="grampsstylednote")
    if contains_html:
        markuptext = _backend.add_markup_from_styled(text,
                                                            s_tags,
                                                            split='\n',
                                                            escape=False)
        htmllist += markuptext
    else:
        markuptext = _backend.add_markup_from_styled(text,
                                                            s_tags,
                                                            split='\n')
        linelist = []
        linenb = 1
        sigcount = 0
        for line in markuptext.split('\n'):
            [line, sigcount] = process_spaces(line, format)
            if sigcount == 0:
                # The rendering of an empty paragraph '<p></p>'
                # is undefined so we use a non-breaking space
                if linenb == 1:
                    linelist.append('&nbsp;')
                htmllist.extend(Html('p') + linelist)
                linelist = []
                linenb = 1
            else:
                if linenb > 1:
                    linelist[-1] += '<br />'
                linelist.append(line)
                linenb += 1
        if linenb > 1:
            htmllist.extend(Html('p') + linelist)
        # if the last line was blank, then as well as outputting the previous para,
        # which we have just done,
        # we also output a new blank para
        if sigcount == 0:
            linelist = ["&nbsp;"]
            htmllist.extend(Html('p') + linelist)
    return '\n'.join(htmllist)
