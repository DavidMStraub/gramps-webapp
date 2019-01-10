from gramps.gen.display.name import NameDisplay
from gramps.gen.const import GRAMPS_LOCALE as locale
from gramps.gen.display.place import displayer as place_displayer
from gramps.gen.const import GRAMPS_LOCALE as glocale
from gramps.gen.utils.db import get_marriage_or_fallback


nd = NameDisplay()
dd = locale.date_displayer
_ = glocale.translation.sgettext


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


def get_event_date_from_handle(db, handle):
    ev = db.get_event_from_handle(handle)
    date = ev.get_date_object()
    if  not date:
        return ''
    return dd.display(date)


def get_event_place_from_handle(db, handle):
    ev = db.get_event_from_handle(handle)
    if not ev or not ev.place:
        return ''
    place = db.get_place_from_handle(ev.place)
    if not place:
        return ''
    return place_displayer.display(db, place)


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
    }


def person_to_dict(db, p):
    return {
    'gramps_id': p.gramps_id,
    'name_given': nd.display_given(p),
    'name_surname': p.primary_name.get_surname(),
    'birthdate': get_birthdate(db, p),
    'deathdate': get_deathdate(db, p),
    'birthplace': get_birthplace(db, p),
    'deathplace': get_deathplace(db, p),
    }


def get_people(tree):
    db = tree.dbstate.db
    return {p.gramps_id: person_to_dict(db, p) for p in db.iter_people()}


def get_families(tree):
    db = tree.dbstate.db
    return {f.gramps_id: family_to_dict(db, f) for f in db.iter_families()}


def get_translation(strings):
    return {s: _(s) for s in strings}
