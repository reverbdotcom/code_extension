import requests

class ReverbClient:
  HEADERS = {
    'Accept': 'application/json',
    'Accept-Version': '3.0',
    'Content-Type': 'application/json'
  }

  def __init__(self, base_uri='https://api.reverb.com/api'):
    self._base_uri = base_uri

  def listings(self, per_page=10):
    return self._get('/listings/all', { 'per_page': per_page })['listings']

  def categories(self):
    return self._get('/categories/flat')['categories']

  def _get(self, path, params={}):
    return requests.get(
      self._base_uri + path,
      headers=self.HEADERS,
      params=params
    ).json()
