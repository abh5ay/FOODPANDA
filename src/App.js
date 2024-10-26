
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import RestaurantList from './components/RestaurantList';
import Footer from './components/Footer';
import LoginPage from './components/LoginPage'; 
import SearchPage from './components/SearchPage'; 
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes> {}
          <Route path="/" element={<RestaurantList />} /> {}
          <Route path="/login" element={<LoginPage />} /> {}
          <Route path="/search" element={<SearchPage />} /> {}
        </Routes>
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
