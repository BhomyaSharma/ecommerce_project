// src/pages/WomenPage.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/WomenHeroSection';
import LookbookSection from '../components/LookbookSection';
import RecentProducts from '../components/RecentProducts';

const WomenPage = () => {
  return (
    <div>

      <HeroSection />
      <LookbookSection />
      <RecentProducts />
    
    </div>
  );
};

export default WomenPage;