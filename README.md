# Gramps Web App

This package provides a web frontend to the genealogical database of
the [Gramps](https://gramps-project.org) software. It allows to share
your genalogical research with family members or provides an alternative
way of browsing your records on your local computer.

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

