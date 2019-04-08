import React, { Component } from 'react';
import { fetchListings } from './API';

export default class ListingsPage extends Component {
  state = {
    listings: [],
  }

  async componentDidMount() {
    const resp = await fetchListings();

    this.setState({
      listings: resp.listings,
    });
  }

  render() {
    return (
      <ul className="listings__list">
        {this.state.listings.map((listing) => (
          <li key={listing.id} className="listings__list-item">
            <img
              alt={listing.title}
              src={listing.photos[0]._links.small_crop.href}
            />
            <div className="listings__list-title">
              {listing.title}
            </div>
          </li>
        ))}
      </ul>
    );
  }
}
