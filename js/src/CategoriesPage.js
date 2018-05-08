import React, { Component, Fragment } from 'react';
import { fetchCategories } from './API';

export default class CategoriesPage extends Component {
  state = {
    categories: [],
  }

  async componentDidMount() {
    const resp = await fetchCategories();

    this.setState({
      categories: resp.categories,
    });
  }

  onChange = (evt) => {
    this.setState({ query: evt.target.value });
  }

  filteredCategories = () => {
    if (!this.state.query) { return this.state.categories };

    return this.state.categories.filter((category) => {
      return category.full_name.match(new RegExp(this.state.query, 'i'));
    });
  }

  render() {
    return (
      <Fragment>
        <div className="categories__list-filter">
          <label name="category-filter">
            Filter Categories by Name
          </label>
          <input
            id="category-filter"
            type="text"
            onChange={this.onChange}
            placeholder="Enter a category name"
          />
        </div>
        <ul className="categories__list">
          {this.filteredCategories().map((category) => (
            <li key={category.uuid} className="categories__list-item">
              {category.full_name}
            </li>
          ))}
        </ul>
      </Fragment>
    )
  }
}
