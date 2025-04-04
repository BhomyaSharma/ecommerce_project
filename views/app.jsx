// src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SaleSection from './components/SaleSection';
import BestsellersSection from './components/BestsellersSection';
import WelcomeSection from './components/WelcomeSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div
        style={{
          textAlign: 'center',
          backgroundColor: '#ffffff', // White background for the entire page
          minHeight: '100vh', // Ensure the page takes up the full viewport height
        }}
      >
        <Header />
        <HeroSection />
        <SaleSection />
        <BestsellersSection />
        <WelcomeSection />
        <Footer />
      </div>
    </Router>
  );
};

export default App;