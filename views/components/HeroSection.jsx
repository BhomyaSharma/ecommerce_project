// src/components/HeroSection.js
import React from 'react';

const HeroSection = () => {
  return (
    <section
      style={{
        background: "url('') no-repeat center center/cover",
        backgroundColor: '#ffffff', // Fallback color set to white
        height: '500px',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: '50px',
        position: 'relative',
        marginBottom: '50px', // Add spacing below the section
      }}
    >
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.8)',
          padding: '30px',
          textAlign: 'left',
        }}
      >
        <h2 style={{ fontSize: '24px', fontStyle: 'italic', color: '#666' }}>New Collection</h2>
        <h1 style={{ fontSize: '48px', fontWeight: 'bold', margin: '10px 0' }}>HELLO SUMMER</h1>
        <p style={{ fontSize: '16px', marginBottom: '20px' }}>
          EXPLORE THE NEW TRENDS OF THE SEASON WITH OUR NEW SUMMER COLLECTION
        </p>
        <button
          style={{
            padding: '10px 20px',
            backgroundColor: '#333',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          SHOP NOW
        </button>
      </div>
    </section>
  );
};

export default HeroSection;