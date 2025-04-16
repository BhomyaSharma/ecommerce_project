// components/FloatingCartIcon.jsx
import React from 'react';
import { useCart } from '../context/CartContext';
import { ShoppingCart } from 'lucide-react';

const FloatingCartIcon = ({ onClick }) => {
  const { cartItems } = useCart();
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div
      onClick={onClick}
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        backgroundColor: '#000',
        color: '#fff',
        padding: '12px 16px',
        borderRadius: '50%',
        cursor: 'pointer',
        zIndex: 1001,
        boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
      }}
    >
      <ShoppingCart size={24} />
      {itemCount > 0 && (
        <span
          style={{
            position: 'absolute',
            top: '-8px',
            right: '-8px',
            backgroundColor: 'red',
            color: '#fff',
            borderRadius: '50%',
            padding: '2px 6px',
            fontSize: '12px',
            fontWeight: 'bold',
          }}
        >
          {itemCount}
        </span>
      )}
    </div>
  );
};

export default FloatingCartIcon;
