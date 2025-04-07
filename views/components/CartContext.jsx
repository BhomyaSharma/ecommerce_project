// src/context/CartContext.js
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});

  const addToCart = (productId, removeAll = false) => {
    setCart((prevCart) => {
      if (removeAll && prevCart[productId]) {
        const newCart = { ...prevCart };
        delete newCart[productId];
        return newCart;
      }
      return {
        ...prevCart,
        [productId]: (prevCart[productId] || 0) + 1,
      };
    });
  };

  const removeFromCart = (productId, removeAll = false) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (removeAll) {
        delete newCart[productId];
      } else if (newCart[productId] > 1) {
        newCart[productId] -= 1;
      } else {
        delete newCart[productId];
      }
      return newCart;
    });
  };

  const getCartCount = () => Object.values(cart).reduce((sum, qty) => sum + qty, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, getCartCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);