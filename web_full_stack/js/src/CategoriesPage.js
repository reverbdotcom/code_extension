import React, { Fragment, useState, useEffect } from 'react';
import { fetchCategories } from './API';

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [query, setQuery] = useState();

  useEffect(() => {
    fetchCategories().then((response) => {
      setCategories(response.categories)
    });
  }, []);

  function onChange(event) {
    setQuery(event.target.value)
  }

  function filteredCategories() {
    if (!query) { return categories };

    return categories.filter((category) => {
      return category.full_name.match(new RegExp(query, 'i'));
    });
  }

  return (
    <Fragment>
      <div className="categories__list-filter">
        <label name="category-filter">
          Filter Categories by Name
        </label>
        <input
          id="category-filter"
          type="text"
          onChange={onChange}
          placeholder="Enter a category name"
        />
      </div>
      <ul className="categories__list">
        {filteredCategories().map((category) => (
          <li key={category.uuid} className="categories__list-item">
            {category.full_name}
          </li>
        ))}
      </ul>
    </Fragment>
  )
}
