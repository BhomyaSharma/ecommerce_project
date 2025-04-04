// src/components/WelcomeSection.js
import React from 'react';

const WelcomeSection = () => {
  return (
    <section
      style={{
        display: 'flex',
        padding: '50px',
        backgroundColor: '#ffffff', // White background to match the theme
        marginBottom: '50px', // Spacing below the section
      }}
    >
      {/* Content (Text) */}
      <div
        style={{
          flex: 1,
          textAlign: 'left',
          paddingRight: '40px', // Increased padding for a more spacious look
        }}
      >
        <h2
          style={{
            fontSize: '36px', // Larger heading for elegance
            fontWeight: 'bold',
            color: '#333', // Darker color for contrast
            fontFamily: "'Playfair Display', serif", // Elegant serif font (requires import)
            marginBottom: '20px',
            position: 'relative',
            paddingBottom: '10px',
          }}
        >
          WELCOME
          {/* Decorative underline */}
          <span
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '50px',
              height: '2px',
              backgroundColor: '#d4af37', // Gold color for a classy touch
            }}
          />
        </h2>
        <p
          style={{
            fontSize: '16px',
            color: '#666',
            lineHeight: '1.8', // Increased line spacing for readability
            fontFamily: "'Lora', serif", // Elegant serif font for the paragraph
          }}
        >
          Thanks for visiting my online shop. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>

      {/* Image */}
      <div
        style={{
          flex: 1,
        }}
      >
        <img
          src="
          https://i.pinimg.com/474x/82/9a/6e/829a6eb18a946be3e5418d3ed2997930.jpg"
          alt="Clothes on hangers"
          style={{
            width: '100%',
            height: '300px',
            objectFit: 'cover',
            border: '2px solid #d4af37', // Gold border for elegance
            borderRadius: '10px', // Rounded corners
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', // Subtle shadow for a lifted effect
          }}
        />
      </div>
    </section>
  );
};

export default WelcomeSection;