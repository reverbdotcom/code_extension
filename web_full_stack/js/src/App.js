import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  NavLink,
} from "react-router-dom";

import CategoriesPage from './CategoriesPage';
import ListingsPage from './ListingsPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul className="navigation">
            <li className="navigation__link">
              <NavLink
                activeClassName="navigation__link--active"
                to="/categories"
              >
                Categories
              </NavLink>
            </li>
            <li className="navigation__link">
              <NavLink
                to="/listings"
                activeClassName="navigation__link--active"
              >
                Listings
              </NavLink>
            </li>
          </ul>

          <hr />

          <Switch>
            <Route exact path="/categories" component={CategoriesPage} />
            <Route exact path="/listings" component={ListingsPage} />
            <Redirect to="/categories" />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
