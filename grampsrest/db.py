from gramps.cli.clidbman import CLIDbManager
from gramps.gen.dbstate import DbState
from gramps.cli.grampscli import CLIManager
from gramps.cli.user import User
import os


class Db():
    def __init__(self, name):
        self.dbstate = DbState()
        self.dbman = CLIDbManager(self.dbstate)
        self.user = User()
        self.smgr = CLIManager(self.dbstate, True, self.user)
        self.path = self.dbman.get_family_tree_path('Straub')

    def is_locked(self):
        return os.path.isfile(os.path.join(self.path, "lock"))

    def open(self):
        # self.dbman.break_lock(self.path)
        return self.smgr.open_activate(self.path)

    def close(self, *args, **kwargs):
        if self.dbstate.is_open():
            return self.dbstate.db.close(*args, **kwargs)
