// src/pages/SearchPartsPage.jsx
import React, { useState } from 'react';

const SearchPartsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handlePerformSearch = (event) => {
    event.preventDefault(); // Prevent form submission from reloading the page
    if (searchQuery.trim() !== '') {
      const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
      window.open(googleSearchUrl, '_blank'); // Open in a new tab
    }
    return false; // Not strictly necessary with e.preventDefault() but good practice from original
  };

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>JDMC Searchparts</h1>
        <p>You can search the parts of the cars over there.</p>
      </div>
      <header><br /></header> {/* Navbar handled by Layout */}

      <center>
        <form id="searchForm" onSubmit={handlePerformSearch}>
          <input
            type="text"
            id="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="parts you wanna search"
          />
          <button type="submit">Search!</button>
        </form>
      </center>
      <br /><br /><br />
      <center>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d76258.70369388028!2d-6.490569156640602!3d53.323840499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670c9608d82e29%3A0xff902aec21bac312!2sRed%20Power%20Motorsport!5e0!3m2!1sen!2sie!4v1697119977311!5m2!1sen!2sie" // Replace with actual valid Google Maps embed URL if this is a placeholder
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </center>
    </>
  );
};

export default SearchPartsPage;