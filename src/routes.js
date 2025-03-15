import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Features from './pages/Features';
import About from './pages/About';
import Demo from './pages/Demo';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/features" element={<Features />} />
      <Route path="/about" element={<About />} />
      <Route path="/demo" element={<Demo />} />
    </Routes>
  );
};

export default AppRoutes;