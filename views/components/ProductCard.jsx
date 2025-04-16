import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProductDetailModal from './ProductDetailModal';

const ProductCard = ({ product, onAddToCart }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <motion.div
        onClick={() => setShowModal(true)}
        whileHover={{ scale: 1.03 }}
        style={{
          padding: '20px',
          borderRadius: '16px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
          background: '#fff',
          cursor: 'pointer',
        }}
      >
        <img
          src={product.image_url || '/placeholder.jpg'}
          alt={product.product_name}
          style={{
            width: '100%',
            height: '250px',
            objectFit: 'cover',
            borderRadius: '12px',
            marginBottom: '10px',
          }}
        />
        <h3>{product.product_name}</h3>
        <p style={{ color: '#888', fontSize: '14px' }}>{product.description}</p>
        <p style={{ fontWeight: 'bold', color: '#d4af37' }}>${product.price}</p>
      </motion.div>

      {showModal && (
        <ProductDetailModal
          product={product}
          onClose={() => setShowModal(false)}
          onAddToCart={onAddToCart} // ✅ pass this!
        />
      )}
    </>
  );
};

export default ProductCard;
