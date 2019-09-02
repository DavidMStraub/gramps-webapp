"""Functions for database access."""


import os

from gramps.cli.clidbman import CLIDbManager
from gramps.cli.grampscli import CLIManager
from gramps.cli.user import User
from gramps.gen.db.utils import get_dbid_from_path
from gramps.gen.dbstate import DbState
from gramps.gen.proxy import LivingProxyDb, PrivateProxyDb


ALLOWED_DB_BACKENDS = [
    'sqlite',
]


class Db():
    """Class for database handling."""

    def __init__(self, name,
                 include_private=True, include_living=True):
        """Initialize the database object for family tree `name`.

        This will raise if the database backend is not `sqlite`.
        The constructor does not open/lock the database yet.
        
        Parameters:

        - `include_private`: include records marked as private. Default True
        - `include_living`: include living people. Default True
        """
        self.name = name
        self.include_private = include_private
        self.include_living = include_living
        self.dbstate = DbState()
        self.dbman = CLIDbManager(self.dbstate)
        self.user = User()
        self.smgr = CLIManager(self.dbstate, True, self.user)
        self.path = self.dbman.get_family_tree_path(name)
        if not self.path:
            raise ValueError("Family tree {} not found. Known trees: {}"
                             .format(name, self.dbman.family_tree_list()))
        self.db_backend = self.get_dbid()
        if self.db_backend not in ALLOWED_DB_BACKENDS:
            raise ValueError("Database backend '{}' of tree '{}' not supported."
                             .format(self.db_backend, name))


    @property
    def db(self):
        """Return the database or a proxy database."""
        _db = self.dbstate.db
        if not self.include_private:
            _db = PrivateProxyDb(_db)
        if not self.include_living:
            _db = LivingProxyDb(_db,
                                LivingProxyDb.MODE_INCLUDE_FULL_NAME_ONLY)
        return _db

    def get_dbid(self):
        """Get the database backend."""
        return get_dbid_from_path(self.path)

    def is_locked(self):
        """Returns a boolean whether the database is locked."""
        return os.path.isfile(os.path.join(self.path, "lock"))

    def open(self, force=False):
        """Open the database.

        If `force` is `True`, will break an existing lock (use with care!).
        """
        if force:
            self.dbman.break_lock(self.path)
        return self.smgr.open_activate(self.path)

    def close(self, *args, **kwargs):
        """Close the database (if it is open)."""
        if self.dbstate.is_open():
            return self.dbstate.db.close(*args, **kwargs)
