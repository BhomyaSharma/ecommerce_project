// src/components/HeroSection.jsx
import React, { useEffect, useState } from 'react';

const HeroSection = () => {
  const [showSecondImage, setShowSecondImage] = useState(false);

  useEffect(() => {
    // Set a timeout to show the second image after 2 seconds
    const timer = setTimeout(() => {
      setShowSecondImage(true);
    }, 2000);

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      style={{
        height: '600px', // Fixed height
        width: '100%', // Full width to remove left/right space
        margin: 0, // Remove all margins (top and horizontal)
        marginBottom: '50px', // Keep bottom space as requested
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#f8f1eb', // Fallback color
      }}
    >
      {/* First Image - Full Screen */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: "url('https://i.pinimg.com/736x/5f/9a/f2/5f9af2b9aff3ed79f4e2760e86cdaea5.jpg') no-repeat center",
          backgroundSize: 'cover',
          opacity: showSecondImage ? 0 : 1, // Fade out when second image shows
          transition: 'opacity 1s ease-in-out', // Smooth fade transition
          zIndex: 1,
        }}
      />

      {/* Second Image - Full Screen */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: "url('https://i.pinimg.com/736x/9d/f4/64/9df4645c441f038beacea4f2e5f20825.jpg') no-repeat center",
          backgroundSize: 'cover',
          opacity: showSecondImage ? 1 : 0, // Fade in after 2 seconds
          transition: 'opacity 1s ease-in-out', // Smooth fade transition
          zIndex: 2,
        }}
      />
    </section>
  );
};

export default HeroSection;