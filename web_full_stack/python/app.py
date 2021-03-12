from flask import Flask, request, render_template
from reverb_client import ReverbClient
app = Flask(__name__)

@app.route('/')
@app.route('/categories')
def categories():
  categories = _search_categories(request.args.get('query'))
  return render_template('categories.html', categories=categories)

@app.route('/listings')
def listings():
  return render_template('listings.html', listings=ReverbClient().listings())

def _search_categories(query):
  if not query: return []

  categories = _load_categories()
  return filter(lambda c: query.lower() in c['full_name'].lower(), categories)

def _load_categories():
  return ReverbClient().categories()
