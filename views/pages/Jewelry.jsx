import React, { useEffect, useState } from 'react';
import axios from 'axios';

const JewelryPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the backend by category name
    axios
      .get('http://localhost:3001/api/products/category/Jewellery') // adjust port if needed
      .then((res) => setProducts(res.data))
      .catch((err) => console.error('Error fetching jewelry products:', err));
  }, []);

  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      margin: 0,
      padding: 0,
      backgroundColor: '#f9f9f9',
      color: '#333',
      textAlign: 'center',
    }}>
      {/* Header */}
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: '#fff',
        position: 'fixed',
        width: '100%',
        top: 0,
        zIndex: 1000,
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      }}>
        <div style={{ fontSize: '24px', fontWeight: 'bold' }}>BRUNA</div>
        <nav style={{ display: 'flex', gap: '20px' }}>
          <a href="#" style={{ color: '#333', textDecoration: 'none' }}>Jewellery</a>
          <a href="#" style={{ color: '#333', textDecoration: 'none' }}>Best Seller</a>
          <a href="#" style={{ color: '#333', textDecoration: 'none' }}>Collections</a>
          <a href="#" style={{ color: '#333', textDecoration: 'none' }}>Gifts</a>
          <a href="#" style={{ color: '#333', textDecoration: 'none' }}>Sustainability</a>
        </nav>
        <div style={{ display: 'flex', gap: '10px' }}>
          <span>€</span>
          <span>🔍</span>
          <span>👤</span>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{
        marginTop: '80px',
        position: 'relative',
        height: '500px',
        backgroundImage: 'url("https://i.pinimg.com/1200x/dc/40/25/dc4025150a3fa3fc643a763a824d2230.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
      }}>
      </section>

      {/* Dynamic Jewelry Products */}
      <section style={{ padding: '50px 20px', backgroundColor: '#fff' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>FINE JEWELRY MADE RESPONSIBLY</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product.product_id} style={{ width: '200px', textAlign: 'center', backgroundColor: '#fefefe', padding: '10px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <img
                  src="https://via.placeholder.com/200" // replace with product.image_url if you have it
                  alt={product.product_name}
                  style={{ width: '100%', borderRadius: '6px' }}
                />
                <p style={{ fontWeight: 'bold', marginTop: '10px' }}>{product.product_name}</p>
                <p>€{product.price}</p>
              </div>
            ))
          ) : (
            <p>Loading products...</p>
          )}
        </div>
      </section>

      {/* Keep your other sections here if needed (Categories, New In, Community, Footer)... */}
    </div>
  );
};

export default JewelryPage;

// import React from 'react';

// const JewelryPage = () => {
//   return (
//     <div style={{
//       fontFamily: 'Arial, sans-serif',
//       margin: 0,
//       padding: 0,
//       backgroundColor: '#f9f9f9',
//       color: '#333',
//       textAlign: 'center',
//     }}>
//       {/* Header */}
//       <header style={{
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         padding: '20px',
//         backgroundColor: '#fff',
//         position: 'fixed',
//         width: '100%',
//         top: 0,
//         zIndex: 1000,
//         boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
//       }}>
//         <div style={{ fontSize: '24px', fontWeight: 'bold' }}>BRUNA</div>
//         <nav style={{ display: 'flex', gap: '20px' }}>
//           <a href="#" style={{ color: '#333', textDecoration: 'none' }}>Jewellery</a>
//           <a href="#" style={{ color: '#333', textDecoration: 'none' }}>Best Seller</a>
//           <a href="#" style={{ color: '#333', textDecoration: 'none' }}>Collections</a>
//           <a href="#" style={{ color: '#333', textDecoration: 'none' }}>Gifts</a>
//           <a href="#" style={{ color: '#333', textDecoration: 'none' }}>Sustainability</a>
//         </nav>
//         <div style={{ display: 'flex', gap: '10px' }}>
//           <span>€</span>
//           <span>🔍</span>
//           <span>👤</span>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section style={{
//         marginTop: '80px',
//         position: 'relative',
//         height: '500px',
//         backgroundImage: 'url("https://i.pinimg.com/1200x/dc/40/25/dc4025150a3fa3fc643a763a824d2230.jpg")',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         color: '#fff',
//       }}>
//         {/* <h1 style={{ fontSize: '48px', fontWeight: 'bold' }}>BRUNA BESTSELLER</h1>
//         <button style={{
//           padding: '10px 20px',
//           fontSize: '16px',
//           backgroundColor: '#fff',
//           color: '#333',
//           border: 'none',
//           cursor: 'pointer',
//           marginTop: '20px',
//         }}>SHOP NOW</button> */}
//       </section>

//       {/* Fine Jewelry Section */}
//       <section style={{ padding: '50px 20px', backgroundColor: '#fff' }}>
//         <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>FINE JEWELRY MADE RESPONSIBLY</h2>
//         <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
//           <div style={{ width: '200px', textAlign: 'center' }}>
//             <img src="https://i.pinimg.com/474x/19/e6/76/19e676f2c18efe2f7f38b9151c43f4fc.jpg" alt="Earring" style={{ width: '100%' }} />
//             <p>Diamond Letter Ornament</p>
//             <p>€174</p>
//           </div>
//           <div style={{ width: '200px', textAlign: 'center' }}>
//             <img src="https://i.pinimg.com/474x/00/ed/d8/00edd87a9c00923228d044f93b1e268e.jpg" alt="Necklace" style={{ width: '100%' }} />
//             <p>Diamond Letter Chains</p>
//             <p>€174</p>
//           </div>
//           <div style={{ width: '200px', textAlign: 'center' }}>
//             <img src="https://i.pinimg.com/474x/3e/be/49/3ebe49c5101e552bc8bf1dcf012afab1.jpg" alt="Ring" style={{ width: '100%' }} />
//             <p>Puglia Ring</p>
//             <p>€174</p>
//           </div>
//           <div style={{ width: '200px', textAlign: 'center' }}>
//             <img src="https://i.pinimg.com/736x/bb/52/64/bb52643b4b67c9e77e43fa14349bc447.jpg" alt="Necklace" style={{ width: '100%' }} />
//             <p>Diamond Letter Chain</p>
//             <p>€174</p>
//           </div>
//         </div>
//       </section>

//       {/* Categories Section */}
//       <section style={{ padding: '50px 20px', backgroundColor: '#f9f9f9' }}>
//         <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
//           <div style={{ width: '200px', textAlign: 'center' }}>
//             <img src="https://i.pinimg.com/474x/b2/9e/5b/b29e5be010af1bbddea3c0a889925caa.jpg" alt="Necklaces" style={{ width: '100%' }} />
//             <h3 style={{ fontSize: '24px' }}>NECKLACES</h3>
//           </div>
//           <div style={{ width: '200px', textAlign: 'center' }}>
//             <img src="https://i.pinimg.com/474x/20/ae/5a/20ae5acab18fcfe2e2b8f8cae2b08bb4.jpg" alt="Earrings" style={{ width: '100%' }} />
//             <h3 style={{ fontSize: '24px' }}>EARRINGS</h3>
//           </div>
//           <div style={{ width: '200px', textAlign: 'center' }}>
//             <img src="https://i.pinimg.com/736x/13/ca/56/13ca56d3e1c55ee4af47ea7294cc3322.jpg" alt="Rings" style={{ width: '100%' }} />
//             <h3 style={{ fontSize: '24px' }}>RINGS</h3>
//           </div>
//           <div style={{ width: '200px', textAlign: 'center' }}>
//             <img src="https://i.pinimg.com/474x/74/34/a1/7434a1d87c2c40917344c6857596ad2b.jpg" alt="Bracelets" style={{ width: '100%' }} />
//             <h3 style={{ fontSize: '24px' }}>BRACELETS</h3>
//           </div>
//         </div>
//       </section>

//       {/* New In Section */}
//       <section style={{ padding: '50px 20px', backgroundColor: '#fff' }}>
//         <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>NEW IN</h2>
//         <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
//           <div style={{ width: '200px', textAlign: 'center' }}>
//             <img src="https://i.pinimg.com/474x/af/ba/ba/afbabaa3e30b38ae1c5e78c32d14a747.jpg" alt="Necklace" style={{ width: '100%' }} />
//             <p>Diamond Letter Ornament</p>
//             <p>€174</p>
//           </div>
//           <div style={{ width: '200px', textAlign: 'center' }}>
//             <img src="https://i.pinimg.com/474x/31/ac/8a/31ac8a77e0c8fdc99d2d101fea1b8a0d.jpg" alt="Necklace" style={{ width: '100%' }} />
//             <p>Puglia Ring</p>
//             <p>€174</p>
//           </div>
//           <div style={{ width: '200px', textAlign: 'center' }}>
//             <img src="https://i.pinimg.com/474x/62/62/80/6262801b0a8a53d87e5cf5f90cab10f9.jpg" alt="Earrings" style={{ width: '100%' }} />
//             <p>Diamond Letter Charm</p>
//             <p>€174</p>
//           </div>
//           <div style={{ width: '200px', textAlign: 'center' }}>
//             <img src="https://i.pinimg.com/474x/5b/dc/fa/5bdcfa0408d9b6d931e865ecd36b284b.jpg" alt="Ring" style={{ width: '100%' }} />
//             <p>Puglia Ring</p>
//             <p>€174</p>
//           </div>
//         </div>
//       </section>

//       {/* Community Section */}
//       <section style={{ padding: '50px 20px', backgroundColor: '#f9f9f9' }}>
//         <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>GET INSPIRED BY OUR COMMUNITY</h2>
//         <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
//           <img src="path-to-community-image1.jpg" alt="Community" style={{ width: '200px' }} />
//           <img src="path-to-community-image2.jpg" alt="Community" style={{ width: '200px' }} />
//           <img src="path-to-community-image3.jpg" alt="Community" style={{ width: '200px' }} />
//           <img src="path-to-community-image4.jpg" alt="Community" style={{ width: '200px' }} />
//         </div>
//       </section>

//       {/* Footer */}
//       <footer style={{ padding: '20px', backgroundColor: '#fff', textAlign: 'center' }}>
//         <p>FEATURED IN: Vogue, Forbes, Cosmopolitan, Vogue E, Forbes, Cosmopolitan</p>
//       </footer>
//     </div>
//   );
// };