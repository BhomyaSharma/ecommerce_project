// src/components/SaleSection.js
import React from 'react';

const SaleSection = () => {
  const products = [
    { name: 'Lace Top', price: '$29.00 AUD', image: 'https://i.pinimg.com/474x/22/30/80/223080340a6838f2b25022378c83cafc.jpg' },
    { name: 'Boho Handbag', price: '$35.00 AUD', image: 'https://i.pinimg.com/474x/6d/2a/dc/6d2adca46d155be63349209f04d808a0.jpg' },
    { name: 'Swimsuit', price: '$40.00 AUD', image: 'https://i.pinimg.com/474x/4a/43/b2/4a43b2574dbbb633fae70026ff501dd2.jpg' },
    { name: 'Beach Dress', price: '$65.00 AUD', image: 'https://i.pinimg.com/474x/99/40/63/9940632880e728a4fc1317bea8ba71eb.jpg' },
  ];

  return (
    <section
      style={{
        padding: '50px 20px',
        backgroundImage: "url('https://i.pinimg.com/736x/41/7a/35/417a357d7d045b0289a06863d0d131de.jpg ')",
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#ffffff', // Fallback color set to white
        minHeight: '500px',
        position: 'relative',
        marginBottom: '50px', // Add spacing below the section
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
        }}
      />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <h2 style={{ fontSize: '28px', marginBottom: '30px', color: '#222', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)' }}>
          MID SEASON SALE NOW ON! UP TO 50% OFF!
        </h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
          {products.map((product, index) => (
            <div
              key={index}
              style={{
                width: '200px',
                textAlign: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                padding: '10px',
                borderRadius: '5px',
                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
              />
              <h3 style={{ fontSize: '16px', margin: '10px 0', color: '#333' }}>{product.name}</h3>
              <p style={{ fontSize: '14px', color: '#555' }}>{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SaleSection;