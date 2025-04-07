// import React from 'react';

// const WomenHeroSection = () => {
//   return (
//     <section
//       style={{
//         position: 'relative',
//         height: '600px',
//         backgroundImage:
//           "url('https://i.pinimg.com/736x/11/0e/29/110e290825d29a00b3fbd750b53f9639.jpg')",
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         color: '#fff',
//         textAlign: 'center',
//       }}
//     >
//       {/* Text Section */}
//       <div style={{ zIndex: 2 }}>
//         <h1
//           style={{
//             fontSize: '72px',
//             fontWeight: '700',
//             textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)',
//             fontFamily: "'Playfair Display', serif",
//           }}
//         >
//           Cozy Autumn 2025
//         </h1>
//         {/* <div style={{ margin: '10px 0' }}>
//           {['men', 'women'].map((item) => (
//             <span
//               key={item}
//               style={{
//                 margin: '0 10px',
//                 fontSize: '18px',
//                 fontFamily: "'Lora', serif",
//               }}
//             >
//               {item}
//             </span>
//           ))}
//         </div> */}
//         <button
//           style={{
//             padding: '10px 20px',
//             fontSize: '16px',
//             background: '#fff',
//             color: '#000',
//             border: 'none',
//             cursor: 'pointer',
//             fontFamily: "'Lora', serif",
//             marginTop: '10px',
//           }}
//         >
//           Shop Now
//         </button>
//       </div>

//       {/* Small Foreground Image */}
//       <div
//         style={{
//           position: 'absolute',
//           bottom: '30px',
//           right: '50px',
//           textAlign: 'center',
//           zIndex: 3,
//         }}
//       >
//         <img
//           src="https://i.pinimg.com/736x/b7/97/11/b7971160d7fa42283171b0758ae641dc.jpg"
//           alt="New Cozy Autumn Product"
//           style={{
//             height: '200px',
//             border: '5px solid white',
//             borderRadius: '10px',
//             boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
//           }}
//         />
//         <span
//           style={{
//             display: 'block',
//             fontSize: '18px',
//             color: '#fff',
//             fontFamily: "'Lora', serif",
//             marginTop: '8px',
//             textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)',
//           }}
//         >
//           New Product
//         </span>
//       </div>

//       {/* Optional overlay for contrast */}
//       <div
//         style={{
//           position: 'absolute',
//           inset: 0,
//           background: 'rgba(0, 0, 0, 0.2)',
//           zIndex: 1,
//         }}
//       />
//     </section>
//   );
// };

// export default WomenHeroSection;





// src/components/WomenHeroSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const WomenHeroSection = () => {
  return (
    <section
      style={{
        position: 'relative',
        height: '600px',
        backgroundImage:
          "url('https://i.pinimg.com/736x/11/0e/29/110e290825d29a00b3fbd750b53f9639.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        textAlign: 'center',
      }}
    >
      {/* Text Section */}
      <div style={{ zIndex: 2 }}>
        <h1
          style={{
            fontSize: '72px',
            fontWeight: '700',
            textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)',
            fontFamily: "'Playfair Display', serif",
          }}
        >
          Cozy Autumn 2025
        </h1>
        {/* <div style={{ margin: '10px 0' }}>
          {['men', 'women'].map((item) => (
            <span
              key={item}
              style={{
                margin: '0 10px',
                fontSize: '18px',
                fontFamily: "'Lora', serif",
              }}
            >
              {item}
            </span>
          ))}
        </div> */}
        <Link
          to="/women-products" // Link to the new WomenProductsPage
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            background: '#fff',
            color: '#000',
            border: 'none',
            cursor: 'pointer',
            fontFamily: "'Lora', serif",
            marginTop: '10px',
            textDecoration: 'none',
            display: 'inline-block',
          }}
        >
          Shop Now
        </Link>
      </div>

      {/* Small Foreground Image */}
      <div
        style={{
          position: 'absolute',
          bottom: '30px',
          right: '50px',
          textAlign: 'center',
          zIndex: 3,
        }}
      >
        <img
          src="https://i.pinimg.com/736x/b7/97/11/b7971160d7fa42283171b0758ae641dc.jpg"
          alt="New Cozy Autumn Product"
          style={{
            height: '200px',
            border: '5px solid white',
            borderRadius: '10px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
          }}
        />
        <span
          style={{
            display: 'block',
            fontSize: '18px',
            color: '#fff',
            fontFamily: "'Lora', serif",
            marginTop: '8px',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)',
          }}
        >
          New Product
        </span>
      </div>

      {/* Optional overlay for contrast */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.2)',
          zIndex: 1,
        }}
      />
    </section>
  );
};

export default WomenHeroSection;