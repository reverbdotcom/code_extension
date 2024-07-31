# Python Code Extension

This is the Python/Flask part of the code extension. Tests are written using Pytest.

## Setup

**During the interview, this application will run in a cloud-based IDE, so don't worry about running it locally. These setup instructions are purely for documentation purposes only.**

You'll need [pipenv](https://pypi.org/project/pipenv/) to use this project. If you're using homebrew, you can `brew install pipenv`. After pipenv is installed, do the following:

1. `pipenv install`

## Running the server

`pipenv run flask run --reload` will start a server on port 5000. You can then see the site at http://localhost:5000.

## Running the tests

`pipenv run pytest -vs` runs the test suite

