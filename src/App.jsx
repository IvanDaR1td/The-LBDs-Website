// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import NewsPage from './pages/NewsPage';
import GalleryPage from './pages/GalleryPage';
import ForumPage from './pages/ForumPage';
import SearchPartsPage from './pages/SearchPartsPage';
import ContactUsPage from './pages/ContactUsPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/forum" element={<ForumPage />} />
        <Route path="/search-parts" element={<SearchPartsPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        {/* Add a 404 Not Found route if desired */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </Layout>
  );
}

export default App;