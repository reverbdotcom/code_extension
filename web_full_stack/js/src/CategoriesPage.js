import React, { Fragment, useState, useEffect } from 'react';
import { fetchCategories } from './API';

function useCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories().then((response) => {
      setCategories(response.categories)
    });
  }, []);

  return categories;
}

function filteredCategories(categories, query) {
  if (!query) { return categories };

  return categories.filter((category) => {
    return category.full_name.match(new RegExp(query, 'i'));
  });
}

function onChange(setQuery) {
  return function(event) {
    setQuery(event.target.value);
  }
}

export default function CategoriesPage() {
  const categories = useCategories();
  const [query, setQuery] = useState();

  return (
    <Fragment>
      <div className="categories__list-filter">
        <label name="category-filter">
          Filter Categories by Name
        </label>
        <input
          id="category-filter"
          type="text"
          onChange={onChange(setQuery)}
          placeholder="Enter a category name"
        />
      </div>
      <ul className="categories__list">
        {filteredCategories(categories, query).map((category) => (
          <li key={category.uuid} className="categories__list-item">
            {category.full_name}
          </li>
        ))}
      </ul>
    </Fragment>
  )
}
