from app import app

import pytest
from tests.helpers import parse_html
from unittest.mock import patch

@pytest.fixture
def client():
  app.config['TESTING'] = True

  mock_get = patch('reverb_client.requests.get').start()
  mock_get.return_value.json.return_value = {
    'listings': [{
      'title': 'Some Cool Instrument',
      'photos': [{
        '_links': {
          'thumbnail': {
            'href': 'https://image.com'
          }
        }
      }]
    }]
  }

  with app.test_client() as client:
    yield client

def test_displays_listings(client):
  res = client.get('/listings')
  html = parse_html(res)

  li = html.body.select_one('ul.list-group').li

  assert 'Some Cool Instrument' in li.h2.text
  assert 'https://image.com' == li.img['src']
