// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-black bg-black">
      <Link className="navbar-brand" to="/">JDMC</Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse" // Use data-bs-toggle for Bootstrap 5+
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        {/* You might need to add a proper icon here if the default span doesn't work well */}
        <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }}></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/news">News</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/gallery">Gallery</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/forum">Forum</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/search-parts">Search Parts</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;