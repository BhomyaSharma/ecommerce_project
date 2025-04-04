// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: '#F5F5DC',
        color: '#000000',
        padding: '20px',
        textAlign: 'center',
      }}
    >
      <p>© 2025 Claire Riche Fashion & More. All rights reserved.</p>
      <div>
        <a
          href="/about"
          style={{ color: '#000000', margin: '0 10px', textDecoration: 'none' }}
        >
          About
        </a>
        <a
          href="/contact"
          style={{ color: '#000000', margin: '0 10px', textDecoration: 'none' }}
        >
          Contact
        </a>
        <a
          href="/privacy"
          style={{ color: '#000000', margin: '0 10px', textDecoration: 'none' }}
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;