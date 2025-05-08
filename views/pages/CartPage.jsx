import React, { useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { Trash2, Plus, Minus } from 'lucide-react';

const CartPage = () => {
  const { cartItems, fetchCart, currentCartId, pierceCartItem, updateCartItemQuantity, cartTotal, loading } = useCart();

  useEffect(() => {
    if (currentCartId) fetchCart();
  }, [currentCartId, fetchCart]);

  const handleQuantityChange = async (cart_item_id, newQuantity) => {
    if (newQuantity < 1) {
      handleRemoveItem(cart_item_id);
      return;
    }
    try {
      await updateCartItemQuantity(cart_item_id, newQuantity);
    } catch (error) {
      console.error('Error updating quantity:', error);
      toast.error('Failed to update quantity');
    }
  };

  const handleRemoveItem = async (cart_item_id) => {
    try {
      await removeCartItem(cart_item_id);
    } catch (error) {
      console.error('Error removing item:', error);
      toast.error('Failed to remove item');
    }
  };

  const handleCheckout = () => {
    toast.info('Proceeding to checkout (payment integration pending)');
    // Future: Implement Stripe checkout
  };

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '50px', fontFamily: "'Lora', serif", color: '#4a4a4a' }}>
        Loading...
      </div>
    );
  }

  return (
    <div style={{ padding: '20px 30px', backgroundColor: '#f9f1d4', minHeight: '100vh', fontFamily: "'Lora', serif" }}>
      <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#4a4a4a', fontFamily: "'Playfair Display', serif", marginBottom: '20px' }}>
        Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <p style={{ color: '#777', fontSize: '16px' }}>Your cart is empty.</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '30px', maxWidth: '1200px', margin: '0 auto' }}>
          {/* Cart Items */}
          <div>
            {cartItems.map((item) => (
              <motion.div
                key={item.cart_item_id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: '#fff',
                  borderRadius: '12px',
                  padding: '15px',
                  marginBottom: '15px',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                }}
              >
                <img
                  src={item.product.image_url || '/placeholder.jpgIn '}
                  alt={item.product.product_name}
                  style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '8px', marginRight: '20px' }}
                />
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '18px', color: '#4a4a4a', fontWeight: '600', marginBottom: '5px' }}>
                    {item.product.product_name}
                  </h3>
                  <p style={{ color: '#777', fontSize: '14px', marginBottom: '5px' }}>
                    {item.variant?.variant_name || item.variant?.size || item.variant?.color || 'No variant'}
                  </p>
                  <p style={{ fontSize: '16px', color: '#4a4a4a', fontWeight: 'bold' }}>
                    ${(parseFloat(item.product.price) + parseFloat(item.variant?.additional_price || 0)).toFixed(2)}
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginRight: '20px' }}>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleQuantityChange(item.cart_item_id, item.quantity - 1)}
                    style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                  >
                    <Minus style={{ width: '20px', height: '20px', color: '#4a4a4a' }} />
                  </motion.button>
                  <span style={{ fontSize: '16px', color: '#4a4a4a' }}>{item.quantity}</span>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleQuantityChange(item.cart_item_id, item.quantity + 1)}
                    style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                  >
                    <Plus style={{ width: '20px', height: '20px', color: '#4a4a4a' }} />
                  </motion.button>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleRemoveItem(item.cart_item_id)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  <Trash2 style={{ width: '20px', height: '20px', color: '#d4af37' }} />
                </motion.button>
              </motion.div>
            ))}
          </div>

          {/* Order Summary */}
          <div style={{ backgroundColor: '#ede4c8', borderRadius: '12px', padding: '20px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#4a4a4a', fontFamily: "'Playfair Display', serif", marginBottom: '15px' }}>
              Order Summary
            </h2>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span style={{ color: '#777', fontSize: '14px' }}>Total Items:</span>
              <span style={{ color: '#4a4a4a', fontSize: '14px' }}>{cartItems.reduce((sum, item) => sum + item.quantity, 0)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
              <span style={{ color: '#777', fontSize: '14px' }}>Total:</span>
              <span style={{ color: '#4a4a4a', fontSize: '16px', fontWeight: 'bold' }}>${cartTotal.toFixed(2)}</span>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCheckout}
              style={{
                width: '100%',
                padding: '12px',
                backgroundColor: '#d4af37',
                color: '#fff',
                border: 'none',
                borderRadius: '25px',
                fontSize: '16px',
                fontFamily: "'Playfair Display', serif",
                fontWeight: '600',
                textTransform: 'uppercase',
                cursor: 'pointer',
              }}
            >
              Proceed to Checkout
            </motion.button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;