// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header
      style={{
        backgroundColor: '#ede4c8',
        borderBottom: '1px solid #e0d8b0',
        marginBottom: '50px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
      }}
    >
      {/* Add a style tag for the marquee animation */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          .marquee-text {
            display: inline-block;
            animation: marquee 10s linear infinite;
          }
        `}
      </style>
      <div
        style={{
          backgroundColor: '#FBFCF8',
          padding: '10px',
          textAlign: 'center',
          fontSize: '14px',
          color: '#666',
          fontFamily: "'Lora', serif",
          overflow: 'hidden',
          whiteSpace: 'nowrap',
        }}
      >
        <p className="marquee-text">FREE SHIPPING FOR ORDERS OVER $100</p>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px 40px',
        }}
      >
        <div>
          <h1
            style={{
              fontSize: '28px',
              fontWeight: 'bold',
              color: '#4a4a4a',
              fontFamily: "'Playfair Display', serif",
            }}
          >
            CLAIRE RICHE
          </h1>
          <p
            style={{
              fontSize: '12px',
              color: '#777',
              fontFamily: "'Lora', serif",
              letterSpacing: '1px',
            }}
          >
            FASHION & MORE
          </p>
        </div>
        <nav>
          <Link
            to="/"
            style={{
              margin: '0 20px',
              textDecoration: 'none',
              color: '#4a4a4a',
              fontSize: '15px',
              fontFamily: "'Lora', serif",
              position: 'relative',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.target.style.color = '#d4af37';
              e.target.style.setProperty('--underline-width', '100%');
            }}
            onMouseLeave={(e) => {
              e.target.style.color = '#4a4a4a';
              e.target.style.setProperty('--underline-width', '0%');
            }}
          >
            HOME
            <span
              style={{
                position: 'absolute',
                bottom: '-5px',
                left: 0,
                width: 'var(--underline-width, 0%)',
                height: '2px',
                backgroundColor: '#d4af37',
                transition: 'width 0.3s ease',
              }}
            />
          </Link>
          <Link
            to="/new"
            style={{
              margin: '0 20px',
              textDecoration: 'none',
              color: '#4a4a4a',
              fontSize: '15px',
              fontFamily: "'Lora', serif",
              position: 'relative',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.target.style.color = '#d4af37';
              e.target.style.setProperty('--underline-width', '100%');
            }}
            onMouseLeave={(e) => {
              e.target.style.color = '#4a4a4a';
              e.target.style.setProperty('--underline-width', '0%');
            }}
          >
            NEW
            <span
              style={{
                position: 'absolute',
                bottom: '-5px',
                left: 0,
                width: 'var(--underline-width, 0%)',
                height: '2px',
                backgroundColor: '#d4af37',
                transition: 'width 0.3s ease',
              }}
            />
          </Link>
          <Link
            to="/shop"
            style={{
              margin: '0 20px',
              textDecoration: 'none',
              color: '#4a4a4a',
              fontSize: '15px',
              fontFamily: "'Lora', serif",
              position: 'relative',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.target.style.color = '#d4af37';
              e.target.style.setProperty('--underline-width', '100%');
            }}
            onMouseLeave={(e) => {
              e.target.style.color = '#4a4a4a';
              e.target.style.setProperty('--underline-width', '0%');
            }}
          >
            SHOP
            <span
              style={{
                position: 'absolute',
                bottom: '-5px',
                left: 0,
                width: 'var(--underline-width, 0%)',
                height: '2px',
                backgroundColor: '#d4af37',
                transition: 'width 0.3s ease',
              }}
            />
          </Link>
          <Link
            to="/blog"
            style={{
              margin: '0 20px',
              textDecoration: 'none',
              color: '#4a4a4a',
              fontSize: '15px',
              fontFamily: "'Lora', serif",
              position: 'relative',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.target.style.color = '#d4af37';
              e.target.style.setProperty('--underline-width', '100%');
            }}
            onMouseLeave={(e) => {
              e.target.style.color = '#4a4a4a';
              e.target.style.setProperty('--underline-width', '0%');
            }}
          >
            BLOG
            <span
              style={{
                position: 'absolute',
                bottom: '-5px',
                left: 0,
                width: 'var(--underline-width, 0%)',
                height: '2px',
                backgroundColor: '#d4af37',
                transition: 'width 0.3s ease',
              }}
            />
          </Link>
          <Link
            to="/about"
            style={{
              margin: '0 20px',
              textDecoration: 'none',
              color: '#4a4a4a',
              fontSize: '15px',
              fontFamily: "'Lora', serif",
              position: 'relative',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.target.style.color = '#d4af37';
              e.target.style.setProperty('--underline-width', '100%');
            }}
            onMouseLeave={(e) => {
              e.target.style.color = '#4a4a4a';
              e.target.style.setProperty('--underline-width', '0%');
            }}
          >
            ABOUT
            <span
              style={{
                position: 'absolute',
                bottom: '-5px',
                left: 0,
                width: 'var(--underline-width, 0%)',
                height: '2px',
                backgroundColor: '#d4af37',
                transition: 'width 0.3s ease',
              }}
            />
          </Link>
          <Link
            to="/contact"
            style={{
              margin: '0 20px',
              textDecoration: 'none',
              color: '#4a4a4a',
              fontSize: '15px',
              fontFamily: "'Lora', serif",
              position: 'relative',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.target.style.color = '#d4af37';
              e.target.style.setProperty('--underline-width', '100%');
            }}
            onMouseLeave={(e) => {
              e.target.style.color = '#4a4a4a';
              e.target.style.setProperty('--underline-width', '0%');
            }}
          >
            CONTACT
            <span
              style={{
                position: 'absolute',
                bottom: '-5px',
                left: 0,
                width: 'var(--underline-width, 0%)',
                height: '2px',
                backgroundColor: '#d4af37',
                transition: 'width 0.3s ease',
              }}
            />
          </Link>
        </nav>
        <div>
          <span
            style={{
              margin: '0 15px',
              fontSize: '20px',
              color: '#4a4a4a',
              transition: 'transform 0.3s ease, color 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.2)';
              e.target.style.color = '#d4af37';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.color = '#4a4a4a';
            }}
          >
            🔍
          </span>
          <span
            style={{
              margin: '0 15px',
              fontSize: '20px',
              color: '#4a4a4a',
              transition: 'transform 0.3s ease, color 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.2)';
              e.target.style.color = '#d4af37';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.color = '#4a4a4a';
            }}
          >
            🛒
          </span>
          <span
            style={{
              margin: '0 15px',
              fontSize: '20px',
              color: '#4a4a4a',
              transition: 'transform 0.3s ease, color 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.2)';
              e.target.style.color = '#d4af37';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.color = '#4a4a4a';
            }}
          >
            👤
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;