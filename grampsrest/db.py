from gramps.gen.dbstate import DbState
from gramps.gen.db.utils import get_dbid_from_path
from gramps.cli.clidbman import CLIDbManager
from gramps.cli.grampscli import CLIManager
from gramps.cli.user import User
from gramps.plugins.db.dbapi.dbapi import DBAPI
import os


ALLOWED_DB_BACKENDS = [
    'sqlite',
]


class Db():
    def __init__(self, name):
        self.dbstate = DbState()
        self.dbman = CLIDbManager(self.dbstate)
        self.user = User()
        self.smgr = CLIManager(self.dbstate, True, self.user)
        self.path = self.dbman.get_family_tree_path(name)
        self.db_backend = self.get_dbid()
        if self.db_backend not in ALLOWED_DB_BACKENDS:
            raise ValueError("Database backend '{}' of tree '{}' not supported."
                             .format(self.db_backend, name))

    def get_dbid(self):
        return get_dbid_from_path(self.path)

    def is_locked(self):
        return os.path.isfile(os.path.join(self.path, "lock"))

    def open(self, force=False):
        if force:
            self.dbman.break_lock(self.path)
        return self.smgr.open_activate(self.path)

    def close(self, *args, **kwargs):
        if self.dbstate.is_open():
            return self.dbstate.db.close(*args, **kwargs)
