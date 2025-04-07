import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductsByCategory } from '../api/productApi';
import { motion } from 'framer-motion';

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProductsByCategory(categoryName);
      setProducts(data);
    };
    loadProducts();
  }, [categoryName]);

  const containerStyle = {
    padding: '80px 40px',
    backgroundColor: '#fdfdfd',
    fontFamily: "'Lora', serif",
    minHeight: '100vh',
  };

  const titleStyle = {
    fontSize: '42px',
    marginBottom: '40px',
    color: '#333',
    fontFamily: "'Playfair Display', serif",
    textAlign: 'center',
    letterSpacing: '1px',
    textTransform: 'uppercase',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '30px',
  };

  const cardStyle = {
    border: '1px solid #ececec',
    padding: '20px',
    borderRadius: '20px',
    backgroundColor: '#fff',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.06)',
    transition: 'transform 0.3s ease',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>{categoryName.toUpperCase()}</h1>

      <div style={gridStyle}>
        {products.length === 0 ? (
          <p style={{ fontSize: '18px', color: '#888', textAlign: 'center' }}>
            No products found in this category.
          </p>
        ) : (
          products.map((product, index) => (
            <motion.div
              key={product.product_id}
              style={cardStyle}
              whileHover={{ scale: 1.05, boxShadow: '0 12px 40px rgba(0,0,0,0.1)' }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <motion.img
                src={product.image_url || '/placeholder.jpg'}
                alt={product.product_name}
                style={{
                  width: '100%',
                  height: '280px',
                  objectFit: 'cover',
                  borderRadius: '12px',
                  marginBottom: '15px',
                }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
              <h3 style={{
                fontSize: '20px',
                margin: '10px 0',
                color: '#222',
                fontFamily: "'Playfair Display', serif",
              }}>
                {product.product_name}
              </h3>
              <p style={{ color: '#777', fontSize: '15px', marginBottom: '8px' }}>
                {product.description}
              </p>
              <p style={{ fontWeight: 'bold', color: '#d4af37', fontSize: '18px' }}>
                ${product.price}
              </p>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
};

export default CategoryPage;