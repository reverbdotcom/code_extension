import pytest
from unittest.mock import patch
from reverb_client import ReverbClient

def test_fetches_categories():
  mock_get = patch('reverb_client.requests.get').start()
  mock_get.return_value.json.return_value = {
    'categories': [
      { 'full_name': 'Guitars' },
      { 'full_name': 'Geetars' },
    ],
  }

  categories = ReverbClient().categories()

  assert len(categories) == 2

  names = [c['full_name'] for c in categories]
  assert names == ['Guitars', 'Geetars']

def test_fetches_listings():
  mock_get = patch('reverb_client.requests.get').start()
  mock_get.return_value.json.return_value = {
    'listings': [{ 'title': 'Some Cool Instrument' }],
  }

  listings = ReverbClient().listings()

  assert len(listings) == 1
  assert listings[0]['title'] == 'Some Cool Instrument'
