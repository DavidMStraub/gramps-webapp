from gramps.gen.display.name import NameDisplay
from gramps.gen.const import GRAMPS_LOCALE as locale
from gramps.gen.display.place import displayer as place_displayer
from gramps.gen.const import GRAMPS_LOCALE as glocale


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
    if not tree.dbstate.is_open():
        tree.open()
    db = tree.dbstate.db
    return {p.gramps_id: person_to_dict(db, p) for p in db.iter_people()}


def get_translation(strings):
    return {s: _(s) for s in strings}
