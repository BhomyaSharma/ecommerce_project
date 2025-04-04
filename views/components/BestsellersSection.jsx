// src/components/BestsellersSection.js
import React from 'react';

const BestsellersSection = () => {
  return (
    <section
      style={{
        background: "url('https://i.pinimg.com/736x/2d/4e/65/2d4e659ccdb7ecf1e884be2134557a8f.jpg') no-repeat center center/cover",
        height: '300px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#333',
      }}
    >
      <h2 style={{ fontSize: '28px', marginBottom: '20px' }}>SHOP OUR BESTSELLERS</h2>
      <button
        style={{
          padding: '10px 20px',
          backgroundColor: '#333',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        VIEW BESTSELLERS
      </button>
    </section>
  );
};

export default BestsellersSection;