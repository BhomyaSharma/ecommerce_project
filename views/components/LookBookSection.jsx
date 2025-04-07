// src/components/LookbookSection.jsx
import React from 'react';

const LookbookSection = () => {
  return (
    <section
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        padding: '50px 0',
      }}
    >
      <div style={{ position: 'relative' }}>
        <iframe
          src="https://assets.pinterest.com/ext/embed.html?id=350436414774643278"
          height="800"
          width="345"
          frameBorder="0"
          scrolling="no"
          style={{ width: '400px', height: '650px' }} // Adjusted to match other images
          title="Pinterest Embed"
        ></iframe>
      </div>
      <div style={{ position: 'relative' }}>
        <img
          src="https://i.pinimg.com/474x/7e/68/2a/7e682ad894fd809dccc1bd7fbaf53eee.jpg" // Replace with actual image path
          alt="Lookbook 2"
          style={{ width: '400px', height: '650px', objectFit: 'cover' }}
        />
        <button
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '10px 20px',
            fontSize: '16px',
            background: '#fff',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Women Sale 50%
        </button>
      </div>
      <div style={{ position: 'relative' }}>
        <img
          src="https://i.pinimg.com/474x/69/9d/95/699d954cbfb3fa9c46d9cba9bc8f3cd7.jpg" // Replace with actual image path
          alt="Lookbook 3"
          style={{ width: '400px', height: '650px', objectFit: 'cover' }}
        />
        <button
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '10px 20px',
            fontSize: '16px',
            background: '#fff',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Accessories 8 Items
        </button>
      </div>
    </section>
  );
};

export default LookbookSection;