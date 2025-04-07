// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { fetchProductsByCategory } from '../api/productApi';

// const CategoryPage = () => {
//   const { categoryName } = useParams();
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const loadProducts = async () => {
//       const data = await fetchProductsByCategory(categoryName);
//       setProducts(data);
//     };
//     loadProducts();
//   }, [categoryName]);

//   return (
//     <div style={{ padding: '80px 40px', backgroundColor: '#fff', fontFamily: "'Lora', serif" }}>
//       <h1 style={{
//         fontSize: '38px',
//         marginBottom: '40px',
//         color: '#4a4a4a',
//         fontFamily: "'Playfair Display', serif",
//         textAlign: 'center',
//         letterSpacing: '1px',
//       }}>
//         {categoryName.toUpperCase()}
//       </h1>

//       <div style={{
//         display: 'grid',
//         gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
//         gap: '30px',
//       }}>
//         {products.length === 0 ? (
//           <p style={{ fontSize: '18px', color: '#888', textAlign: 'center' }}>
//             No products found in this category.
//           </p>
//         ) : (
//           products.map((product) => (
//             <div key={product.product_id} style={{
//               border: '1px solid #e0d8b0',
//               padding: '20px',
//               borderRadius: '16px',
//               boxShadow: '0 10px 20px rgba(0,0,0,0.07)',
//               transition: 'all 0.3s ease',
//               backgroundColor: '#FBFCF8',
//               fontFamily: "'Lora', serif",
//               textAlign: 'left',
//               cursor: 'pointer',
//               transform: 'scale(1)',
//             }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.transform = 'scale(1.03)';
//                 e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.12)';
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.transform = 'scale(1)';
//                 e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.07)';
//               }}
//             >
//               <img
//                 src={product.image_url || '/placeholder.jpg'}
//                 alt={product.product_name}
//                 style={{
//                   width: '100%',
//                   height: '300px',
//                   objectFit: 'cover',
//                   borderRadius: '8px'
//                 }}
//               />
//               <h3 style={{
//                 marginTop: '15px',
//                 fontSize: '20px',
//                 color: '#4a4a4a',
//                 fontFamily: "'Playfair Display', serif",
//               }}>
//                 {product.product_name}
//               </h3>
//               <p style={{
//                 color: '#777',
//                 fontSize: '15px',
//                 marginBottom: '10px',
//               }}>
//                 {product.description}
//               </p>
//               <p style={{
//                 fontWeight: 'bold',
//                 color: '#d4af37',
//                 fontSize: '18px',
//               }}>
//                 ${product.ProductVariants?.[0]?.price || 'N/A'}
//               </p>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default CategoryPage;
 

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
