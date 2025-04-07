// src/components/RecentProducts.jsx
import React from 'react';

const RecentProducts = () => {
  const products = [
    { name: 'Printed A-Line Top', price: '€29.99-€39.00', image: 'https://i.pinimg.com/474x/e3/de/04/e3de041a8e14c6cb9cb5a381e53535a4.jpg', sale: true },
    { name: 'Solid Straight Kurta', price: '€18.00', image: 'https://i.pinimg.com/474x/2d/20/b1/2d20b116bd751ba10a4651006101fd6b.jpg' },
    { name: 'Round Neck Shirt', price: '€70.00', image: 'https://i.pinimg.com/474x/25/06/04/25060429bb1113543398fe9903e6f8ee.jpg' },
    { name: 'Pack of 3 Round T-Shirts', price: '€37.00', image: 'https://i.pinimg.com/474x/b4/d3/23/b4d3234975ae6c8714fed3c9b189f597.jpg' },
    { name: 'Printed Polo T-Shirt', price: '€25.00', image: 'https://i.pinimg.com/474x/73/fd/c0/73fdc0c69f859c68b763ecc018190d42.jpg' },
    { name: 'Printed V-Neck T-Shirt', price: '€20.00', image: 'https://i.pinimg.com/474x/9d/f9/d8/9df9d83dc6e888fdb03051d13515d414.jpg',sale: true },
    { name: 'Print Crop Lounge Top', price: '€15.00', image: 'https://i.pinimg.com/736x/33/06/97/330697319cb8c72d9f3fd1b8c1c0673c.jpg' },
    { name: 'Women Print Lounge T-Shirt', price: '€22.00', image: 'https://i.pinimg.com/474x/98/a9/d9/98a9d9ba8d563aea5e3ae14bdf499835.jpg' },
    { name: 'Floral Midi Dress', price: '€34.00', image: 'https://i.pinimg.com/474x/24/3e/2b/243e2bee2ee7722cd8b7720392a5c9fd.jpg', sale: true },
    { name: 'High-Waist Wide Leg Trousers', price: '€29.50', image: 'https://i.pinimg.com/474x/0d/38/81/0d38812f4aa0eb569799b9227bcd966a.jpg' },
    { name: 'Paperbag Waist Shorts', price: '€17.50', image: 'https://i.pinimg.com/474x/42/52/b2/4252b2d24de55f3f8fa92166ce052b3e.jpg' },
    { name: 'Pleated Mini Skirt', price: '€19.99', image: 'https://i.pinimg.com/474x/0c/4e/83/0c4e83e938d727ce7ce31d7ef1c840ec.jpg' },
  ];

  return (
    <section
      style={{
        padding: '50px 0',
      }}
    >
      <h2
        style={{
          fontSize: '24px',
          fontWeight: '600',
          marginBottom: '10px',
          fontFamily: "'Playfair Display', serif",
        }}
      >
        Recent Products
      </h2>
      <p
        style={{
          fontSize: '14px',
          color: '#666',
          marginBottom: '20px',
          fontFamily: "'Lora', serif",
        }}
      >
        Preorder now to receive exclusive deals & gifts
      </p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '20px',
          padding: '20px',
        }}
      >
        {products.map((product, index) => (
          <div key={index} style={{ position: 'relative' }}>
            {product.sale && (
              <span
                style={{
                  position: 'absolute',
                  top: '10px',
                  left: '10px',
                  background: '#ff0000',
                  color: '#fff',
                  padding: '5px',
                  fontFamily: "'Lora', serif",
                }}
              >
                Sale
              </span>
            )}
            <img
              src={product.image} // Replace with actual image path
              alt={product.name}
              style={{ width: '100%', height: '350px', objectFit: 'cover' }}
            />
            <h3
              style={{
                fontSize: '16px',
                margin: '10px 0',
                fontFamily: "'Lora', serif",
              }}
            >
              {product.name}
            </h3>
            <p
              style={{
                fontSize: '14px',
                color: '#4a4a4a',
                fontFamily: "'Lora', serif",
              }}
            >
              {product.price}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentProducts;