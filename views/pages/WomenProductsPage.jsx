
// // src/pages/WomenProductsPage.jsx
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Header from '../components/Header';
// import Footer from '../components/Footer';

// const WomenProductsPage = () => {
//   const [cart, setCart] = useState({}); // State to manage cart items (productId: quantity)
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false); // State for drawer visibility

//   const products = [
//     {
//       id: 1,
//       name: 'Tropical Bloom: Vacation Vibe Top',
//       price: '$15.59',
//       image: 'https://i.pinimg.com/736x/cf/47/e8/cf47e82156b8c5fe50531f7994de9ecd.jpg',
//     },
//     {
//       id: 2,
//       name: 'Autumn Bond: Soft Knit Casual Top',
//       price: '$15.59',
//       image: 'https://i.pinimg.com/474x/08/39/8f/08398f93503a05b5e3c993750ea32f43.jpg',
//     },
//     {
//       id: 3,
//       name: 'Wings & Whimsy: Bird Print Flowy Top',
//       price: '$17.99',
//       image: 'https://i.pinimg.com/474x/7e/9d/81/7e9d8176dc6ed5f186198d940665b6cd.jpg',
//     },
//     {
//       id: 4,
//       name: 'Butterfly Whisper: Linen Blend Relaxed Top',
//       price: '$18.99',
//       image: 'https://i.pinimg.com/474x/b5/33/7c/b5337c6933bac8d55cea05fb7cedb9c4.jpg',
//     },
//     {
//       id: 5,
//       name: 'Boho Bliss: Embroidered Cotton Top',
//       price: '$18.99',
//       image: 'https://i.pinimg.com/474x/18/07/a1/1807a10afac22c391e4d9e80cbe44d6c.jpg',
//     },
//     {
//       id: 6,
//       name: 'Sunset Ruffle: Off-Shoulder Beige Top',
//       price: '$22.50',
//       image: 'https://i.pinimg.com/474x/d4/c6/fe/d4c6fea5152244cc7e989493a0c06707.jpg',
//     },
//     {
//       id: 7,
//       name: 'Café Date: Puff Sleeve Floral Top',
//       price: '$20.00',
//       image: 'https://i.pinimg.com/474x/b8/1b/b1/b81bb1bf250319dfa722d5327fb16bb8.jpg',
//     },
//     {
//       id: 8,
//       name: 'Midnight Muse: Brown Satin Tie-Top',
//       price: '$25.75',
//       image: 'https://i.pinimg.com/474x/d9/ef/75/d9ef75a1087259a7459164dede1b88b4.jpg',
//     },
//   ];

//   // Handle adding/removing items from cart
//   const handleAddToCart = (productId) => {
//     setCart((prevCart) => ({
//       ...prevCart,
//       [productId]: (prevCart[productId] || 0) + 1,
//     }));
//   };

//   const handleRemoveFromCart = (productId) => {
//     setCart((prevCart) => {
//       const newCart = { ...prevCart };
//       if (newCart[productId] > 1) {
//         newCart[productId] -= 1;
//       } else {
//         delete newCart[productId];
//       }
//       return newCart;
//     });
//   };

//   const getCartCount = () => Object.values(cart).reduce((sum, qty) => sum + qty, 0);

//   return (
//     <div>
//       <Header />
//       <div
//         style={{
//           maxWidth: '100%',
//           margin: '0 auto',
//           padding: '20px',
//           fontFamily: "'Lora', serif",
//           position: 'relative',
//         }}
//       >
//         {/* Hero Banner */}
//         <section
//           style={{
//             position: 'relative',
//             height: '500px',
//             backgroundColor: '#f5f5f5',
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             marginBottom: '20px',
//             overflow: 'hidden',
//           }}
//         >
//           <img
//             src="https://img.freepik.com/premium-photo/fashion-trend-portrait-young-woman-bathroom-setting-sun-illuminates-beautiful-female-model-modern-island-home_121946-5088.jpg?w=1060"
//             alt="Hero Banner"
//             style={{ width: '100%', height: '500px', objectFit: 'cover', opacity: 0.8 }}
//           />
//           <div
//             style={{
//               position: 'absolute',
//               top: '50%',
//               left: '50%',
//               transform: 'translate(-50%, -50%)',
//               textAlign: 'center',
//               color: '#fff',
//               zIndex: 1,
//             }}
//           >
//             <h1
//               style={{
//                 fontSize: '48px',
//                 fontWeight: '700',
//                 fontFamily: "'Playfair Display', serif",
//                 textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)',
//                 marginBottom: '10px',
//               }}
//             >
//               WRITE YOUR OWN
//             </h1>
//             <h1
//               style={{
//                 fontSize: '48px',
//                 fontWeight: '700',
//                 fontFamily: "'Playfair Display', serif",
//                 textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)',
//                 color: '#8B4513',
//               }}
//             >
//               Story
//             </h1>
//           </div>
//           <div
//             style={{
//               position: 'absolute',
//               inset: 0,
//               background: 'rgba(0, 0, 0, 0.2)',
//               zIndex: 0,
//             }}
//           />
//         </section>

//         {/* Improved Navigation Area */}
//         <div
//           style={{
//             backgroundColor: 'beige',
//             padding: '15px 20px',
//             borderBottom: '2px solid #e0e0e0',
//             boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
//             display: 'flex',
//             justifyContent: 'space-between',
//             alignItems: 'center',
//             fontSize: '14px',
//             color: '#333',
//           }}
//         >
//           <div style={{ display: 'flex', alignItems: 'center' }}>
//             <a
//               href="#"
//               style={{
//                 color: '#ff4444',
//                 fontWeight: 'bold',
//                 marginRight: '10px',
//                 textDecoration: 'none',
//                 transition: 'color 0.3s',
//               }}
//               onMouseEnter={(e) => (e.target.style.color = '#ff6666')}
//               onMouseLeave={(e) => (e.target.style.color = '#ff4444')}
//             >
//               SUMMER COLLECTION 🔥
//             </a>
//             <span style={{ margin: '0 10px', color: '#666' }}>|</span>
//             <a
//               href="#"
//               style={{
//                 color: '#000',
//                 marginRight: '10px',
//                 textDecoration: 'none',
//                 transition: 'color 0.3s',
//               }}
//               onMouseEnter={(e) => (e.target.style.color = '#555')}
//               onMouseLeave={(e) => (e.target.style.color = '#000')}
//             >
//               Women's Tops - 283 Items
//             </a>
//           </div>
//           <div style={{ display: 'flex', alignItems: 'center' }}>
//             {['Topwear', 'Bottomwear', 'Bestsellers', 'Sneakers', 'Collections', 'Accessories', 'Themes', 'Membership'].map(
//               (item) => (
//                 <a
//                   key={item}
//                   href="#"
//                   style={{
//                     color: '#000',
//                     margin: '0 15px',
//                     textDecoration: 'none',
//                     transition: 'color 0.3s',
//                   }}
//                   onMouseEnter={(e) => (e.target.style.color = '#555')}
//                   onMouseLeave={(e) => (e.target.style.color = '#000')}
//                 >
//                   {item}
//                 </a>
//               )
//             )}
//           </div>
//           {/* <div>
//             <select
//               style={{
//                 padding: '5px 10px',
//                 border: '1px solid #ddd',
//                 borderRadius: '4px',
//                 fontSize: '14px',
//                 cursor: 'pointer',
//                 backgroundColor: '#fff',
//               }}
//             >
//               <option>Select Sorting Options</option>
//               <option>Price: Low to High</option>
//               <option>Price: High to Low</option>
//               <option>Popularity</option>
//             </select>
//           </div> */}
//         </div>

//         {/* Sidebar/Drawer for Categories */}
//         <div style={{ display: 'flex', marginTop: '20px' }}>
//           <nav
//             style={{
//               width: '250px',
//               padding: '15px',
//               borderRight: '1px solid #ddd',
//               backgroundColor: '#f9f9f9',
//               position: 'sticky',
//               top: '20px',
//               height: 'calc(100vh - 100px)',
//               overflowY: 'auto',
//             }}
//           >
//             <h3
//               style={{
//                 fontSize: '16px',
//                 fontWeight: 'bold',
//                 marginBottom: '15px',
//                 color: '#333',
//               }}
//             >
//               CATEGORIES
//             </h3>
//             <input
//               type="text"
//               placeholder="Search for Categories"
//               style={{
//                 width: '100%',
//                 padding: '8px',
//                 marginBottom: '15px',
//                 border: '1px solid #ddd',
//                 borderRadius: '4px',
//               }}
//             />
//             <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
//               <li style={{ marginBottom: '10px' }}>
//                 <input type="checkbox" id="unisex" />
//                 <label htmlFor="unisex" style={{ marginLeft: '5px', color: '#333' }}>
//                   Unisex Tops
//                 </label>
//               </li>
//               <li style={{ marginBottom: '10px' }}>
//                 <input type="checkbox" id="boxy" />
//                 <label htmlFor="boxy" style={{ marginLeft: '5px', color: '#333' }}>
//                   Women Boxy Fit Tops
//                 </label>
//               </li>
//               <li style={{ marginBottom: '10px' }}>
//                 <input type="checkbox" id="boyfriend" />
//                 <label htmlFor="boyfriend" style={{ marginLeft: '5px', color: '#333' }}>
//                   Women Boyfriend Tops
//                 </label>
//               </li>
//               <li style={{ marginBottom: '10px' }}>
//                 <input type="checkbox" id="cropped" />
//                 <label htmlFor="cropped" style={{ marginLeft: '5px', color: '#333' }}>
//                   Women Cropped Tops
//                 </label>
//               </li>
//               <li style={{ marginBottom: '10px' }}>
//                 <input type="checkbox" id="denim" />
//                 <label htmlFor="denim" style={{ marginLeft: '5px', color: '#333' }}>
//                   Women Denim Jackets
//                 </label>
//               </li>
//               <li style={{ marginBottom: '10px' }}>
//                 <input type="checkbox" id="holiday" />
//                 <label htmlFor="holiday" style={{ marginLeft: '5px', color: '#333' }}>
//                   Women Holiday Tops
//                 </label>
//               </li>
//               <li style={{ marginBottom: '10px' }}>
//                 <input type="checkbox" id="jackets" />
//                 <label htmlFor="jackets" style={{ marginLeft: '5px', color: '#333' }}>
//                   Women Jackets
//                 </label>
//               </li>
//               <li style={{ marginBottom: '10px' }}>
//                 {/* <a href="#" style={{ color: '#555', textDecoration: 'none' }}>
//                   ▼ More
//                 </a> */}
//               </li>
//             </ul>
//           </nav>

//           {/* Product Grid */}
//           <div style={{ flex: 1, padding: '10px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
//             {products.map((product) => (
//               <div
//                 key={product.id}
//                 style={{
//                   textAlign: 'center',
//                   position: 'relative',
//                   border: '1px solid #eee',
//                   borderRadius: '8px',
//                   overflow: 'hidden',
//                   transition: 'box-shadow 0.3s',
//                 }}
//                 onMouseEnter={(e) => (e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)')}
//                 onMouseLeave={(e) => (e.target.style.boxShadow = 'none')}
//               >
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   style={{ width: '100%', height: '400px', objectFit: 'cover' }}
//                 />
//                 <span
//                   style={{
//                     position: 'absolute',
//                     top: '10px',
//                     right: '10px',
//                     fontSize: '24px',
//                     color: '#ccc',
//                     cursor: 'pointer',
//                   }}
//                 >
//                   ♥
//                 </span>
//                 <div style={{ padding: '10px' }}>
//                   <h4 style={{ fontSize: '14px', margin: '10px 0', fontFamily: "'Lora', serif" }}>
//                     {product.name}
//                   </h4>
//                   <p style={{ fontSize: '16px', color: '#000', fontFamily: "'Lora', serif", marginBottom: '10px' }}>
//                     {product.price}
//                   </p>
//                   <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
//                     {cart[product.id] ? (
//                       <>
//                         <button
//                           onClick={() => handleRemoveFromCart(product.id)}
//                           style={{
//                             padding: '5px 10px',
//                             fontSize: '16px',
//                             background: '#fff',
//                             border: '1px solid #ddd',
//                             cursor: 'pointer',
//                           }}
//                         >
//                           -
//                         </button>
//                         <span>{cart[product.id]}</span>
//                         <button
//                           onClick={() => handleAddToCart(product.id)}
//                           style={{
//                             padding: '5px 10px',
//                             fontSize: '16px',
//                             background: '#fff',
//                             border: '1px solid #ddd',
//                             cursor: 'pointer',
//                           }}
//                         >
//                           +
//                         </button>
//                       </>
//                     ) : (
//                       <button
//                         onClick={() => handleAddToCart(product.id)}
//                         style={{
//                           padding: '8px 15px',
//                           fontSize: '14px',
//                           background: '#4CAF50',
//                           color: '#fff',
//                           border: 'none',
//                           cursor: 'pointer',
//                           borderRadius: '4px',
//                         }}
//                       >
//                         Add to Cart
//                       </button>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Cart Summary */}
//         {Object.keys(cart).length > 0 && (
//           <div
//             style={{
//               position: 'fixed',
//               bottom: '20px',
//               right: '20px',
//               background: '#4CAF50',
//               color: '#fff',
//               padding: '10px 20px',
//               borderRadius: '8px',
//               boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
//               zIndex: 1000,
//             }}
//           >
//             <span>Cart: {getCartCount()} items</span>
//             <Link
//               to="/cart"
//               style={{ color: '#fff', marginLeft: '10px', textDecoration: 'none' }}
//             >
//               View Cart
//             </Link>
//           </div>
//         )}
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default WomenProductsPage;

// src/pages/WomenProductsPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const WomenProductsPage = () => {
  const [cart, setCart] = useState({}); // State to manage cart items (productId: quantity)

  const products = [
    {
      id: 1,
      name: 'Tropical Bloom: Vacation Vibe Top',
      price: '$15.59',
      image: 'https://i.pinimg.com/736x/cf/47/e8/cf47e82156b8c5fe50531f7994de9ecd.jpg',
    },
    {
      id: 2,
      name: 'Autumn Bond: Soft Knit Casual Top',
      price: '$15.59',
      image: 'https://i.pinimg.com/474x/08/39/8f/08398f93503a05b5e3c993750ea32f43.jpg',
    },
    {
      id: 3,
      name: 'Wings & Whimsy: Bird Print Flowy Top',
      price: '$17.99',
      image: 'https://i.pinimg.com/474x/7e/9d/81/7e9d8176dc6ed5f186198d940665b6cd.jpg',
    },
    {
      id: 4,
      name: 'Butterfly Whisper: Linen Blend Relaxed Top',
      price: '$18.99',
      image: 'https://i.pinimg.com/474x/b5/33/7c/b5337c6933bac8d55cea05fb7cedb9c4.jpg',
    },
    {
      id: 5,
      name: 'Boho Bliss: Embroidered Cotton Top',
      price: '$18.99',
      image: 'https://i.pinimg.com/474x/18/07/a1/1807a10afac22c391e4d9e80cbe44d6c.jpg',
    },
    {
      id: 6,
      name: 'Sunset Ruffle: Off-Shoulder Beige Top',
      price: '$22.50',
      image: 'https://i.pinimg.com/474x/d4/c6/fe/d4c6fea5152244cc7e989493a0c06707.jpg',
    },
    {
      id: 7,
      name: 'Café Date: Puff Sleeve Floral Top',
      price: '$20.00',
      image: 'https://i.pinimg.com/474x/b8/1b/b1/b81bb1bf250319dfa722d5327fb16bb8.jpg',
    },
    {
      id: 8,
      name: 'Midnight Muse: Brown Satin Tie-Top',
      price: '$25.75',
      image: 'https://i.pinimg.com/474x/d9/ef/75/d9ef75a1087259a7459164dede1b88b4.jpg',
    },
  ];

  // Handle adding/removing items from cart
  const handleAddToCart = (productId) => {
    setCart((prevCart) => ({
      ...prevCart,
      [productId]: (prevCart[productId] || 0) + 1,
    }));
  };

  const handleRemoveFromCart = (productId) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[productId] > 1) {
        newCart[productId] -= 1;
      } else {
        delete newCart[productId];
      }
      return newCart;
    });
  };

  const getCartCount = () => Object.values(cart).reduce((sum, qty) => sum + qty, 0);

  return (
    <div style={{ width: '100%', minHeight: '100vh', fontFamily: "'Lora', serif" }}>
      <Header />
      <div style={{ width: '100%', padding: '20px' }}>
        {/* Hero Banner */}
        <section
          style={{
            position: 'relative',
            height: '500px',
            backgroundColor: '#f5f5f5',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '20px',
            overflow: 'hidden',
          }}
        >
          <img
            src="https://img.freepik.com/premium-photo/fashion-trend-portrait-young-woman-bathroom-setting-sun-illuminates-beautiful-female-model-modern-island-home_121946-5088.jpg?w=1060"
            alt="Hero Banner"
            style={{ width: '105%', height: '500px', objectFit: 'cover', opacity: 0.8 }}
          />
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              color: '#fff',
              zIndex: 1,
            }}
          >
            <h1
              style={{
                fontSize: '48px',
                fontWeight: '700',
                fontFamily: "'Playfair Display', serif",
                textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)',
                marginBottom: '10px',
              }}
            >
              WRITE YOUR OWN
            </h1>
            <h1
              style={{
                fontSize: '48px',
                fontWeight: '700',
                fontFamily: "'Playfair Display', serif",
                textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)',
                color: '#8B4513',
              }}
            >
              Story
            </h1>
          </div>
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(0, 0, 0, 0.2)',
              zIndex: 0,
            }}
          />
        </section>

        {/* Improved Navigation Area */}
        <div
          style={{
            backgroundColor: 'beige',
            padding: '15px 20px',
            borderBottom: '2px solid #e0e0e0',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '14px',
            color: '#333',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <a
              href="#"
              style={{
                color: '#ff4444',
                fontWeight: 'bold',
                marginRight: '10px',
                textDecoration: 'none',
                transition: 'color 0.3s',
              }}
              onMouseEnter={(e) => (e.target.style.color = '#ff6666')}
              onMouseLeave={(e) => (e.target.style.color = '#ff4444')}
            >
              SUMMER COLLECTION 🔥
            </a>
            <span style={{ margin: '0 10px', color: '#666' }}>|</span>
            <a
              href="#"
              style={{
                color: '#000',
                marginRight: '10px',
                textDecoration: 'none',
                transition: 'color 0.3s',
              }}
              onMouseEnter={(e) => (e.target.style.color = '#555')}
              onMouseLeave={(e) => (e.target.style.color = '#000')}
            >
              Women's Tops - 283 Items
            </a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {['Topwear', 'Bottomwear', 'Bestsellers', 'Sneakers', 'Collections', 'Accessories', 'Themes', 'Membership'].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  style={{
                    color: '#000',
                    margin: '0 15px',
                    textDecoration: 'none',
                    transition: 'color 0.3s',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = '#555')}
                  onMouseLeave={(e) => (e.target.style.color = '#000')}
                >
                  {item}
                </a>
              )
            )}
          </div>
        </div>

        {/* Sidebar for Categories */}
        <div style={{ display: 'flex', marginTop: '20px' }}>
          <nav
            style={{
              width: '250px',
              padding: '20px',
              borderRight: '1px solid #ddd',
              backgroundColor: '#CFB095',
              position: 'sticky',
              top: '20px',
              height: 'calc(100vh - 100px)',
              overflowY: 'auto',
              boxSizing: 'border-box',
            }}
          >
            <h3
              style={{
                fontSize: '18px',
                fontWeight: 'bold',
                marginBottom: '20px',
                color: '#333',
                textAlign: 'center',
                borderBottom: '1px solid #ddd',
                paddingBottom: '10px',
              }}
            >
              CATEGORIES
            </h3>
            <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
              {['Aesthetic Tops', 'Women Boxy Fit Tops', 'Women Boyfriend Tops', 'Women Cropped Tops', 'Women Denim Jackets', 'Women Holiday Tops', 'Women Jackets'].map((category) => (
                <li
                  key={category}
                  style={{
                    marginBottom: '15px',
                    padding: '10px',
                    backgroundColor: '#F1E9D2',
                    borderRadius: '4px',
                    transition: 'background-color 0.3s',
                  }}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = '#f0f0f0')}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = '#fff')}
                >
                  <a
                    href="#"
                    style={{
                      color: '#333',
                      textDecoration: 'none',
                      fontSize: '14px',
                    }}
                  >
                    {category}
                  </a>
                </li>
              ))}
              <li style={{ marginBottom: '15px', padding: '10px' }}>
                <a href="#" style={{ color: '#555', textDecoration: 'none', fontSize: '14px' }}>
                  ▼ More
                </a>
              </li>
            </ul>
          </nav>

          {/* Product Grid */}
          <div style={{ flex: 1, padding: '10px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            {products.map((product) => (
              <div
                key={product.id}
                style={{
                  textAlign: 'center',
                  position: 'relative',
                  border: '1px solid #eee',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  transition: 'box-shadow 0.3s',
                  maxWidth: '300px',
                  margin: '0 auto',
                }}
                onMouseEnter={(e) => (e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)')}
                onMouseLeave={(e) => (e.target.style.boxShadow = 'none')}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                />
                <span
                  style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    fontSize: '24px',
                    color: '#ccc',
                    cursor: 'pointer',
                  }}
                >
                  ♥
                </span>
                <div style={{ padding: '10px' }}>
                  <h4 style={{ fontSize: '14px', margin: '10px 0', fontFamily: "'Lora', serif" }}>
                    {product.name}
                  </h4>
                  <p style={{ fontSize: '16px', color: '#000', fontFamily: "'Lora', serif", marginBottom: '10px' }}>
                    {product.price}
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                    {cart[product.id] ? (
                      <>
                        <button
                          onClick={() => handleRemoveFromCart(product.id)}
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
                          onClick={() => handleAddToCart(product.id)}
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
                      </>
                    ) : (
                      <button
                        onClick={() => handleAddToCart(product.id)}
                        style={{
                          padding: '8px 15px',
                          fontSize: '14px',
                          background: '#4CAF50',
                          color: '#fff',
                          border: 'none',
                          cursor: 'pointer',
                          borderRadius: '4px',
                        }}
                      >
                        Add to Cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cart Summary */}
        {Object.keys(cart).length > 0 && (
          <div
            style={{
              position: 'fixed',
              bottom: '20px',
              right: '20px',
              background: '#4CAF50',
              color: '#fff',
              padding: '10px 20px',
              borderRadius: '8px',
              boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
              zIndex: 1000,
            }}
          >
            <span>Cart: {getCartCount()} items</span>
            <Link to="/cart" style={{ color: '#fff', marginLeft: '10px', textDecoration: 'none' }}>
              View Cart
            </Link>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default WomenProductsPage;