
import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">FOOD PANDA</h1>
      <ul className="navbar-links">
      <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link> {}
        </li>
        <li><a href="/search">Search</a></li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
