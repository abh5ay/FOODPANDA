import React, { useState } from 'react';
import './SearchPage.css';  
import RestaurantList from './RestaurantList';

const restaurantData = [
  {
    name: "The Pasta House",
    image: "https://via.placeholder.com/150",
    cuisine: "Italian",
    location: "New York, NY",
    rating: 4.5
  },
  {
    name: "Sushi Palace",
    image: "https://via.placeholder.com/150",
    cuisine: "Japanese",
    location: "Los Angeles, CA",
    rating: 4.8
  },
  {
    name: "Spice Route",
    image: "https://via.placeholder.com/150",
    cuisine: "Indian",
    location: "Chicago, IL",
    rating: 4.6
  },
  {
    name: "Green Salad Bar",
    image: "https://via.placeholder.com/150",
    cuisine: "Vegetarian",
    location: "Austin, TX",
    rating: 4.3
  },
  {
    name: "Burger Haven",
    image: "https://via.placeholder.com/150",
    cuisine: "American",
    location: "San Francisco, CA",
    rating: 4.1
  },
  {
    name: "Dragon Wok",
    image: "https://via.placeholder.com/150",
    cuisine: "Chinese",
    location: "Seattle, WA",
    rating: 4.4
  },
  {
    name: "La Belle Vie",
    image: "https://via.placeholder.com/150",
    cuisine: "French",
    location: "New Orleans, LA",
    rating: 4.7
  },
  {
    name: "Grill King",
    image: "https://via.placeholder.com/150",
    cuisine: "BBQ",
    location: "Kansas City, MO",
    rating: 4.5
  },
  {
    name: "El Camino",
    image: "https://via.placeholder.com/150",
    cuisine: "Mexican",
    location: "Houston, TX",
    rating: 4.6
  },
  {
    name: "The Fish Market",
    image: "https://via.placeholder.com/150",
    cuisine: "Seafood",
    location: "Boston, MA",
    rating: 4.7
  },
  {
    name: "Pita Delight",
    image: "https://via.placeholder.com/150",
    cuisine: "Mediterranean",
    location: "Phoenix, AZ",
    rating: 4.2
  },
  {
    name: "Taste of Tokyo",
    image: "https://via.placeholder.com/150",
    cuisine: "Japanese",
    location: "San Diego, CA",
    rating: 4.8
  },
  {
    name: "Soul Food Shack",
    image: "https://via.placeholder.com/150",
    cuisine: "Soul Food",
    location: "Atlanta, GA",
    rating: 4.3
  },
  {
    name: "Viva Italia",
    image: "https://via.placeholder.com/150",
    cuisine: "Italian",
    location: "Miami, FL",
    rating: 4.4
  },
  {
    name: "Steak House Prime",
    image: "https://via.placeholder.com/150",
    cuisine: "Steakhouse",
    location: "Dallas, TX",
    rating: 4.5
  },
  {
    name: "Curry Delight",
    image: "https://via.placeholder.com/150",
    cuisine: "Indian",
    location: "Philadelphia, PA",
    rating: 4.6
  },
  {
    name: "Le Petit Bistro",
    image: "https://via.placeholder.com/150",
    cuisine: "French",
    location: "Las Vegas, NV",
    rating: 4.7
  },
  {
    name: "Taco Fiesta",
    image: "https://via.placeholder.com/150",
    cuisine: "Mexican",
    location: "Orlando, FL",
    rating: 4.5
  },
  {
    name: "The Pho Spot",
    image: "https://via.placeholder.com/150",
    cuisine: "Vietnamese",
    location: "Denver, CO",
    rating: 4.4
  },
  {
    name: "Bavarian Kitchen",
    image: "https://via.placeholder.com/150",
    cuisine: "German",
    location: "St. Louis, MO",
    rating: 4.3
  },
  {
    name: "Greek Taverna",
    image: "https://via.placeholder.com/150",
    cuisine: "Greek",
    location: "Nashville, TN",
    rating: 4.6
  },
  {
    name: "Tapas Tapas",
    image: "https://via.placeholder.com/150",
    cuisine: "Spanish",
    location: "San Antonio, TX",
    rating: 4.5
  },
  {
    name: "Cafe de Paris",
    image: "https://via.placeholder.com/150",
    cuisine: "Cafe",
    location: "Portland, OR",
    rating: 4.4
  },
  {
    name: "The Dim Sum House",
    image: "https://via.placeholder.com/150",
    cuisine: "Chinese",
    location: "San Jose, CA",
    rating: 4.3
  },
  {
    name: "Pizza Perfect",
    image: "https://via.placeholder.com/150",
    cuisine: "Pizza",
    location: "Detroit, MI",
    rating: 4.8
  },
  {
    name: "BBQ Barn",
    image: "https://via.placeholder.com/150",
    cuisine: "BBQ",
    location: "Memphis, TN",
    rating: 4.6
  },
  {
    name: "Bagel Bros",
    image: "https://via.placeholder.com/150",
    cuisine: "Bagels",
    location: "Brooklyn, NY",
    rating: 4.5
  },
  {
    name: "Thai Spice",
    image: "https://via.placeholder.com/150",
    cuisine: "Thai",
    location: "Columbus, OH",
    rating: 4.7
  },
  {
    name: "The Vegan Bowl",
    image: "https://via.placeholder.com/150",
    cuisine: "Vegan",
    location: "San Francisco, CA",
    rating: 4.2
  },
  {
    name: "Bistro 45",
    image: "https://via.placeholder.com/150",
    cuisine: "American",
    location: "Charlotte, NC",
    rating: 4.3
  },
  {
    name: "Cajun Kitchen",
    image: "https://via.placeholder.com/150",
    cuisine: "Cajun",
    location: "Baton Rouge, LA",
    rating: 4.6
  }
];

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    
    if (value) {
      const filteredSuggestions = restaurantData
        .filter(restaurant =>
          restaurant.name.toLowerCase().includes(value.toLowerCase())
        )
        .map(restaurant => restaurant.name);
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setSuggestions([]); 
  };

  return (
    <div className="search-page">
      <h2>Search for Your Favorite Food!</h2>
      <input 
        type="text" 
        placeholder="Type restaurant name, cuisine, or location..." 
        value={searchTerm} 
        onChange={handleInputChange}
        className="search-input"
      />
      {suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      )}
      <RestaurantList searchTerm={searchTerm} />
    </div>
  );
};

export default SearchPage;
