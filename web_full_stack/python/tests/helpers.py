from bs4 import BeautifulSoup

def parse_html(res):
  return BeautifulSoup(res.data.decode(), 'html.parser')
