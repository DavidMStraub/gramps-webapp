# Gramps Web App

This package provides a web frontend to the genealogical database of
the [Gramps](https://gramps-project.org) software. It allows to share
your genalogical research with family members or provides an alternative
way of browsing your records on your local computer.

## Demo

There is a [demo instance](https://agile-bayou-66821.herokuapp.com) using Gramps's example family tree database. Use the password "test".

## Disclaimers

**:warning: This is experimental software. Back up your data before using this on your own database! :warning:**

The project is still in an early stage. Please use the issue system to report problems or suggest enhancements.

**This package is not an official part of the Gramps project.**

## Technologies used

- REST API to the Gramps database based on [Flask](https://palletsprojects.com/p/flask/) and [Flask-RESTful](https://flask-restful.readthedocs.io/) and directly using the Gramps Python package
- Password protection using JSON web tokens (using [Flask-JWT-Extended](https://flask-jwt-extended.readthedocs.io/))
- Progressive web app frontend based on [PWA Starter Kit](https://pwa-starter-kit.polymer-project.org/)

## Features

- Sortable and filtrable person, family, event, and place list views
- Map view (based on [Leaflet](https://leafletjs.com/))
- Ancestor tree view
- Galleries with full-size previews and linked person tags
- Most of the family tree data are cached in the browser, making the app fast after the initial loading

## Installation

At present, the simplest method to install the latest version of the package directly from the repository is

```python
python3 -m pip install --user git+https://github.com/DavidMStraub/gramps-webapp.git --upgrade
```

## Running locally

You can try out the web app locally with an existing Gramps database.

**:warning: This is experimental software. Back up your data before trying this! :warning:**

It will only work with SQLite databases (not with BSDDB).
After installation, run

```
gramps_webapp -O 'My family tree' run --without-threads
```

You can find the names of the existing databases and their backends with `gramps -L`.

(NB: single-threaded running is currently necessary because of Gramps's restrictive database locking.)

## Deploying to the web

Instructions will follow.