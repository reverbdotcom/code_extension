import React, { useEffect, useState } from 'react';
import { fetchListings } from './API';

export default function ListingsPage() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetchListings().then((response) => {
      setListings(response.listings)
    });
  }, []);

  return (
    <ul className="listings__list">
      {listings.map((listing) => (
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
