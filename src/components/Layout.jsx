// src/components/Layout.jsx
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      {/* The <header> element from original files often contained the navbar and more.
          Decide if the full header content goes here or if parts are page-specific.
          For now, Navbar is a direct child. */}
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;