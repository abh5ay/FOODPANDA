
import React from 'react';
import './RestaurantCard.css';

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="restaurant-card">
      <img src={restaurant.image} alt={restaurant.name} />
      <h2>{restaurant.name}</h2>
      <p>{restaurant.cuisine}</p>
      <p>{restaurant.location}</p>
      <p>{restaurant.rating} ⭐</p>
    </div>
  );
};

export default RestaurantCard;
