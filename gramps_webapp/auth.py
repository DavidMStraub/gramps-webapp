"""Define methods of providing authentication for users."""


class AuthProvider:
    """Base class. not meant ot be used directly."""

    def __init__(self):
        pass


class SingleUser(AuthProvider):
    """Single user with hard coded password. Username is ignored."""

    def __init__(self, password):
        super().__init__()
        self.password = password

    def authorized(self, username, password):
        if password == self.password:
            return True
        return False
