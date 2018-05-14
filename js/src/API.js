const CATEGORIES_URL = 'https://api.reverb.com/api/categories/flat';
const LISTINGS_URL = 'https://api.reverb.com/api/listings';

const HEADERS = {
  Accept: 'application/json',
  'Accept-Version': '3.0',
  'Content-Type': 'application/json'
}

export async function fetchCategories() {
  return getJSON(CATEGORIES_URL);
}

export async function fetchListings() {
  return getJSON(LISTINGS_URL);
}

async function getJSON(url) {
  const response = await fetch(url, { headers: HEADERS });
  return await response.json();
};
