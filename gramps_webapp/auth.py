"""Define methods of providing authentication for users."""

import hashlib
import os
import uuid

import sqlalchemy
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

from .sql_guid import GUID


class AuthProvider:
    """Base class. not meant to be used directly."""

    def __init__(self):
        pass

    def authorized(self, username, password):
        """Return true if the username is authorized. Must be implemented
        by child classes."""
        return False


class SingleUser(AuthProvider):
    """Single user with hard coded password. Username is ignored."""

    def __init__(self, password):
        super().__init__()
        self.password = password

    def authorized(self, username, password):
        """Return true if the username is authorized."""
        if password == self.password:
            return True
        return False


Base = declarative_base()


class SQLAuth(AuthProvider):
    """SQL Alchemy user database."""

    def __init__(self, db_uri, logging=False):
        super().__init__()
        self.db_uri = db_uri
        self.engine = sqlalchemy.create_engine(db_uri, echo=logging)
        Session = sessionmaker(bind=self.engine)
        self.session = Session()

    def add_user(self, name, password, fullname="", email=None, commit=True):
        """Add a user."""
        Base.metadata.create_all(bind=self.engine)  # create table if not exists
        if password == "":
            raise ValueError("Password must not be empty")
        if name == "":
            raise ValueError("Username must not be empty")
        pwhash = self.hash_password(password)
        user = User(id=uuid.uuid4(), name=name, fullname=fullname, email=email, pwhash=pwhash)
        if self.session.query(sqlalchemy.exists().where(User.name == name)).scalar():
            raise ValueError("Username {} already exists".format(name))
        if email and self.session.query(sqlalchemy.exists().where(User.email == email)).scalar():
            raise ValueError("A user with this e-mail address already exists")
        self.session.add(user)
        if commit:
            self.session.commit()

    def get_guid(self, name):
        """Get the GUID of an existing user by username."""
        user = self.session.query(User).filter_by(name=name).scalar()
        if user is None:
            raise ValueError("User {} not found".format(name))
        return user.id

    def delete_user(self, name, commit=True):
        """Delete an existing user."""
        user = self.session.query(User).filter_by(name=name).scalar()
        if user is None:
            raise ValueError("User {} not found".format(name))
        self.session.delete(user)
        if commit:
            self.session.commit()

    def modify_user(
        self, name, name_new=None, password=None, fullname=None, email=None, commit=True
    ):
        """Modify an existing user."""
        user = self.session.query(User).filter_by(name=name).scalar()
        if user is None:
            raise ValueError("User {} not found".format(name))
        if name_new is not None:
            user.name = name_new
        if password is not None:
            user.pwhash = self.hash_password(password)
        if fullname is not None:
            user.fullname = fullname
        user.email = email  # also for None since nullable
        if commit:
            self.session.commit()

    @staticmethod
    def _salt():
        """Return a random salt."""
        return hashlib.sha256(os.urandom(60)).hexdigest().encode("ascii")

    @staticmethod
    def _hash(password, salt):
        """Compute a password hash."""
        return hashlib.pbkdf2_hmac("sha512", password.encode("utf-8"), salt, 100000)

    def hash_password(self, password):
        """Compute salted password hash."""
        salt = self._salt()
        pw_hash = self._hash(password, salt)
        return salt.decode("ascii") + pw_hash.hex()

    def verify_password(self, password, salt_hash):
        """Verify a stored password against one provided by user"""
        salt = salt_hash[:64].encode("ascii")
        stored_pw_hash = salt_hash[64:]
        pw_hash = self._hash(password, salt)
        pw_hash = pw_hash.hex()
        return pw_hash == stored_pw_hash

    def authorized(self, username, password):
        """Return true if the username is authorized."""
        user = self.session.query(User).filter_by(name=username).scalar()
        if user is None:
            return False
        return self.verify_password(password, user.pwhash)


class User(Base):
    """User table class for SQLAlchemy."""

    __tablename__ = "users"

    id = sqlalchemy.Column(GUID, primary_key=True)
    name = sqlalchemy.Column(sqlalchemy.String, unique=True)
    email = sqlalchemy.Column(sqlalchemy.String, unique=True, nullable=True)
    fullname = sqlalchemy.Column(sqlalchemy.String)
    pwhash = sqlalchemy.Column(sqlalchemy.String)

    def __repr__(self):
        return "<User(name='%s', fullname='%s')>" % (self.name, self.fullname)
