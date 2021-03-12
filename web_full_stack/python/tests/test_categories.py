from app import app

import pytest
from tests.helpers import parse_html
from unittest.mock import patch

@pytest.fixture
def client():
  app.config['TESTING'] = True

  mock_get = patch('reverb_client.requests.get').start()
  mock_get.return_value.json.return_value = {
    'categories': [
      { 'full_name': 'Guitars' },
      { 'full_name': 'Geetars' },
    ],
  }

  with app.test_client() as client:
    yield client

def test_displays_full_name_of_matching_categories(client):
  res = client.get('/categories', query_string={'query': 'guitar'})
  html = parse_html(res)

  assert 'Guitars' in html.body.select_one('ul.list-group').li.text

def test_displays_nothing_if_no_matching_categories(client):
  res = client.get('/categories', query_string={'query': 'didgeridoo'})
  html = parse_html(res)

  assert len(html.body.find_all('ul.list-group')) == 0
