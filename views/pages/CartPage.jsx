// // src/pages/CartPage.jsx
// import React from 'react';
// import { useLocation, Link } from 'react-router-dom';
// import Header from '../components/Header';
// import Footer from '../components/Footer';

// const CartPage = () => {
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const cart = JSON.parse(searchParams.get('cart') || '{}'); // Simulate cart from query params (for now)

//   // Mock products (in a real app, fetch from a database or pass via state)
//   const products = [
//     { id: 1, name: 'Tropical Bloom: Vacation Vibe Top', price: 15.59 },
//     { id: 2, name: 'Autumn Bond: Soft Knit Casual Top', price: 15.59 },
//     { id: 3, name: 'Wings & Whimsy: Bird Print Flowy Top', price: 17.99 },
//     { id: 4, name: 'Butterfly Whisper: Linen Blend Relaxed Top', price: 18.99 },
//     { id: 5, name: 'Boho Bliss: Embroidered Cotton Top', price: 18.99 },
//     { id: 6, name: 'Sunset Ruffle: Off-Shoulder Beige Top', price: 22.50 },
//     { id: 7, name: 'Café Date: Puff Sleeve Floral Top', price: 20.00 },
//     { id: 8, name: 'Midnight Muse: Brown Satin Tie-Top', price: 25.75 },
//   ];

//   // Filter products in cart
//   const cartItems = products.filter((product) => cart[product.id]);

//   // Calculate total
//   const getTotal = () =>
//     cartItems.reduce((sum, product) => sum + product.price * cart[product.id], 0);

//   // Handle quantity changes
//   const handleUpdateQuantity = (productId, delta) => {
//     // This would update the parent component's cart state in a real app
//     // For now, we'll simulate it with a console log
//     console.log(`Update quantity for product ${productId} by ${delta}`);
//   };

//   // Handle remove item
//   const handleRemoveItem = (productId) => {
//     console.log(`Remove product ${productId} from cart`);
//   };

//   return (
//     <div>
//       <Header />
//       <div
//         style={{
//           maxWidth: '1200px',
//           margin: '0 auto',
//           padding: '20px',
//           fontFamily: "'Lora', serif",
//         }}
//       >
//         <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Your Cart</h2>
//         {cartItems.length === 0 ? (
//           <p>Your cart is empty. <Link to="/women-products" style={{ color: '#4CAF50' }}>Continue Shopping</Link></p>
//         ) : (
//           <>
//             {cartItems.map((product) => (
//               <div
//                 key={product.id}
//                 style={{
//                   display: 'flex',
//                   justifyContent: 'space-between',
//                   alignItems: 'center',
//                   padding: '15px',
//                   borderBottom: '1px solid #ddd',
//                 }}
//               >
//                 <div style={{ flex: 1 }}>
//                   <h4 style={{ fontSize: '16px', margin: '0' }}>{product.name}</h4>
//                   <p style={{ fontSize: '14px', color: '#666', margin: '5px 0' }}>
//                     ${product.price} x {cart[product.id]}
//                   </p>
//                 </div>
//                 <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
//                   <button
//                     onClick={() => handleUpdateQuantity(product.id, -1)}
//                     style={{
//                       padding: '5px 10px',
//                       fontSize: '16px',
//                       background: '#fff',
//                       border: '1px solid #ddd',
//                       cursor: 'pointer',
//                     }}
//                   >
//                     -
//                   </button>
//                   <span>{cart[product.id]}</span>
//                   <button
//                     onClick={() => handleUpdateQuantity(product.id, 1)}
//                     style={{
//                       padding: '5px 10px',
//                       fontSize: '16px',
//                       background: '#fff',
//                       border: '1px solid #ddd',
//                       cursor: 'pointer',
//                     }}
//                   >
//                     +
//                   </button>
//                   <button
//                     onClick={() => handleRemoveItem(product.id)}
//                     style={{
//                       padding: '5px 10px',
//                       fontSize: '14px',
//                       background: '#ff4444',
//                       color: '#fff',
//                       border: 'none',
//                       cursor: 'pointer',
//                       borderRadius: '4px',
//                     }}
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             ))}
//             <div
//               style={{
//                 marginTop: '20px',
//                 padding: '15px',
//                 background: '#f9f9f9',
//                 borderRadius: '8px',
//                 textAlign: 'right',
//               }}
//             >
//               <h3 style={{ fontSize: '18px', margin: '0' }}>Total: ${getTotal().toFixed(2)}</h3>
//               <button
//                 style={{
//                   padding: '10px 20px',
//                   fontSize: '16px',
//                   background: '#4CAF50',
//                   color: '#fff',
//                   border: 'none',
//                   cursor: 'pointer',
//                   borderRadius: '4px',
//                   marginTop: '10px',
//                 }}
//               >
//                 Checkout
//               </button>
//             </div>
//           </>
//         )}
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default CartPage;


// src/pages/CartPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { cart, addToCart, removeFromCart, getCartCount } = useCart();

  // Mock products (in a real app, fetch from a database)
  const products = [
    { id: 1, name: 'Tropical Bloom: Vacation Vibe Top', price: 15.59 },
    { id: 2, name: 'Autumn Bond: Soft Knit Casual Top', price: 15.59 },
    { id: 3, name: 'Wings & Whimsy: Bird Print Flowy Top', price: 17.99 },
    { id: 4, name: 'Butterfly Whisper: Linen Blend Relaxed Top', price: 18.99 },
    { id: 5, name: 'Boho Bliss: Embroidered Cotton Top', price: 18.99 },
    { id: 6, name: 'Sunset Ruffle: Off-Shoulder Beige Top', price: 22.50 },
    { id: 7, name: 'Café Date: Puff Sleeve Floral Top', price: 20.00 },
    { id: 8, name: 'Midnight Muse: Brown Satin Tie-Top', price: 25.75 },
  ];

  // Filter products in cart
  const cartItems = products.filter((product) => cart[product.id]);

  // Calculate total
  const getTotal = () =>
    cartItems.reduce((sum, product) => sum + product.price * (cart[product.id] || 0), 0);

  return (
    <div>
      <Header />
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '20px',
          fontFamily: "'Lora', serif",
        }}
      >
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>
            Your cart is empty. <Link to="/women-products" style={{ color: '#4CAF50' }}>Continue Shopping</Link>
          </p>
        ) : (
          <>
            {cartItems.map((product) => (
              <div
                key={product.id}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '15px',
                  borderBottom: '1px solid #ddd',
                }}
              >
                <div style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '16px', margin: '0' }}>{product.name}</h4>
                  <p style={{ fontSize: '14px', color: '#666', margin: '5px 0' }}>
                    ${product.price} x {cart[product.id]}
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <button
                    onClick={() => removeFromCart(product.id)}
                    style={{
                      padding: '5px 10px',
                      fontSize: '16px',
                      background: '#fff',
                      border: '1px solid #ddd',
                      cursor: 'pointer',
                    }}
                  >
                    -
                  </button>
                  <span>{cart[product.id]}</span>
                  <button
                    onClick={() => addToCart(product.id)}
                    style={{
                      padding: '5px 10px',
                      fontSize: '16px',
                      background: '#fff',
                      border: '1px solid #ddd',
                      cursor: 'pointer',
                    }}
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(product.id, true)}
                    style={{
                      padding: '5px 10px',
                      fontSize: '14px',
                      background: '#ff4444',
                      color: '#fff',
                      border: 'none',
                      cursor: 'pointer',
                      borderRadius: '4px',
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div
              style={{
                marginTop: '20px',
                padding: '15px',
                background: '#f9f9f9',
                borderRadius: '8px',
                textAlign: 'right',
              }}
            >
              <h3 style={{ fontSize: '18px', margin: '0' }}>Total: ${getTotal().toFixed(2)}</h3>
              <button
                style={{
                  padding: '10px 20px',
                  fontSize: '16px',
                  background: '#4CAF50',
                  color: '#fff',
                  border: 'none',
                  cursor: 'pointer',
                  borderRadius: '4px',
                  marginTop: '10px',
                }}
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;