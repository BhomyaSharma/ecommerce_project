// import React, { useState, useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import { fetchCategories } from '../api/categoryApi';

// const Header = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [categories, setCategories] = useState([]);
//   const dropdownRef = useRef(null);

//   useEffect(() => {
//     const loadCategories = async () => {
//       try {
//         const data = await fetchCategories();
//         setCategories(data);
//       } catch (error) {
//         console.error('Failed to load categories:', error);
//         setCategories([]); // Fallback to empty array
//       }
//     };
//     loadCategories();
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsDropdownOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   return (
//     <header style={{ backgroundColor: '#ede4c8', borderBottom: '1px solid #e0d8b0', marginBottom: '50px' }}>
//       <style>
//         {`
//           @keyframes marquee {
//             0% { transform: translateX(100%); }
//             100% { transform: translateX(-100%); }
//           }

//           .marquee-text {
//             display: inline-block;
//             animation: marquee 10s linear infinite;
//           }

//           .nav-link {
//             margin: 0 20px;
//             text-decoration: none;
//             color: #4a4a4a;
//             font-size: 15px;
//             font-family: 'Lora', serif;
//             position: relative;
//             transition: color 0.3s ease;
//           }

//           .nav-link::after {
//             content: '';
//             position: absolute;
//             width: 0%;
//             height: 2px;
//             bottom: -5px;
//             left: 0;
//             background-color: #d4af37;
//             transition: width 0.3s ease;
//           }

//           .nav-link:hover::after {
//             width: 100%;
//           }

//           .dropdown-link {
//             display: block;
//             padding: 12px 25px;
//             text-decoration: none;
//             color: #333;
//             font-size: 15px;
//             font-family: 'Lora', serif;
//             transition: all 0.3s ease;
//           }

//           .dropdown-link:hover {
//             background-color: #f9f1d4;
//             color: #d4af37;
//             padding-left: 30px;
//           }

//           .dropdown {
//             position: absolute;
//             top: calc(100% + 10px);
//             left: 0;
//             background-color: #ffffff;
//             box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
//             border-radius: 12px;
//             overflow: hidden;
//             min-width: 220px;
//             z-index: 999;
//             animation: fadeIn 0.3s ease-in-out;
//           }

//           @keyframes fadeIn {
//             from { opacity: 0; transform: translateY(-10px); }
//             to { opacity: 1; transform: translateY(0); }
//           }

//           .get-started-btn {
//             padding: 10px 25px;
//             background-color: transparent;
//             color: #4a4a4a;
//             border: 2px solid #d4af37;
//             border-radius: 25px;
//             font-size: 16px;
//             font-family: 'Playfair Display', serif;
//             font-weight: 600;
//             text-transform: uppercase;
//             letter-spacing: 1px;
//             cursor: pointer;
//             transition: all 0.3s ease;
//           }

//           .get-started-btn:hover {
//             background-color: #d4af37;
//             color: #fff;
//           }
//         `}
//       </style>

//       {/* Top Free Shipping Bar */}
//       <div style={{
//         backgroundColor: '#FBFCF8',
//         padding: '10px',
//         textAlign: 'center',
//         fontSize: '14px',
//         color: '#666',
//         fontFamily: "'Lora', serif",
//         overflow: 'hidden',
//         whiteSpace: 'nowrap',
//       }}>
//         <p className="marquee-text">FREE SHIPPING FOR ORDERS OVER $100</p>
//       </div>

//       {/* Main Header */}
//       <div style={{
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         padding: '20px 40px',
//       }}>
//         {/* Logo */}
//         <div>
//           <h1 style={{
//             fontSize: '28px',
//             fontWeight: 'bold',
//             color: '#4a4a4a',
//             fontFamily: "'Playfair Display', serif",
//           }}>
//             URBAN VOGUE
//           </h1>
//           <p style={{
//             fontSize: '12px',
//             color: '#777',
//             fontFamily: "'Lora', serif",
//             letterSpacing: '1px',
//           }}>
//             FASHION & MORE
//           </p>
//         </div>

//         {/* Navigation */}
//         <nav>
//           <Link to="/" className="nav-link">WOMEN</Link>
//           <Link to="/new" className="nav-link">MEN</Link>

//           {/* ACCESSORIES dropdown */}
//           <div style={{ position: 'relative', display: 'inline-block' }} ref={dropdownRef}>
//             <span
//               className="nav-link"
//               onClick={(e) => {
//                 e.preventDefault();
//                 setIsDropdownOpen((prev) => !prev);
//               }}
//               style={{ cursor: 'pointer' }}
//             >
//               ACCESSORIES
//             </span>

//             {isDropdownOpen && (
//               <div className="dropdown">
//                 {categories.map((cat) => (
//                   <Link
//                     key={cat.id}
//                     to={`/shop/${cat.name.toLowerCase().replace(/\s+/g, '-')}`}
//                     className="dropdown-link"
//                     onClick={() => setIsDropdownOpen(false)}
//                   >
//                     {cat.name}
//                   </Link>
//                 ))}
//               </div>
//             )}
//           </div>

//           <Link to="/blog" className="nav-link">BLOG</Link>
//           <Link to="/about" className="nav-link">ABOUT</Link>
//           <Link to="/contact" className="nav-link">CONTACT</Link>
//         </nav>

//         {/* CTA Button */}
//         <div>
//           <Link to="/login">
//             <button
//               className="get-started-btn"
//               aria-label="Get started with login"
//             >
//               Get Started
//             </button>
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;


import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { fetchCategories } from '../api/categoryApi';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (error) {
        console.error('Failed to load categories:', error);
        setCategories([]); // Fallback to empty array
      }
    };
    loadCategories();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header style={{ backgroundColor: '#ede4c8', borderBottom: '1px solid #e0d8b0', marginBottom: '50px' }}>
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }

          .marquee-text {
            display: inline-block;
            animation: marquee 10s linear infinite;
          }

          .nav-link {
            margin: 0 20px;
            text-decoration: none;
            color: #4a4a4a;
            font-size: 15px;
            font-family: 'Lora', serif;
            position: relative;
            transition: color 0.3s ease;
          }

          .nav-link::after {
            content: '';
            position: absolute;
            width: 0%;
            height: 2px;
            bottom: -5px;
            left: 0;
            background-color: #d4af37;
            transition: width 0.3s ease;
          }

          .nav-link:hover::after {
            width: 100%;
          }

          .dropdown-link {
            display: block;
            padding: 12px 25px;
            text-decoration: none;
            color: #333;
            font-size: 15px;
            font-family: 'Lora', serif;
            transition: all 0.3s ease;
          }

          .dropdown-link:hover {
            background-color: #f9f1d4;
            color: #d4af37;
            padding-left: 30px;
          }

          .dropdown {
            position: absolute;
            top: calc(100% + 10px);
            left: 0;
            background-color: #ffffff;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
            border-radius: 12px;
            overflow: hidden;
            min-width: 220px;
            z-index: 999;
            animation: fadeIn 0.3s ease-in-out;
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .get-started-btn {
            padding: 10px 25px;
            background-color: transparent;
            color: #4a4a4a;
            border: 2px solid #d4af37;
            border-radius: 25px;
            font-size: 16px;
            font-family: 'Playfair Display', serif;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .get-started-btn:hover {
            background-color: #d4af37;
            color: #fff;
          }
        `}
      </style>

      {/* Top Free Shipping Bar */}
      <div style={{
        backgroundColor: '#FBFCF8',
        padding: '10px',
        textAlign: 'center',
        fontSize: '14px',
        color: '#666',
        fontFamily: "'Lora', serif",
        overflow: 'hidden',
        whiteSpace: 'nowrap',
      }}>
        <p className="marquee-text">FREE SHIPPING FOR ORDERS OVER $100</p>
      </div>

      {/* Main Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 40px',
      }}>
        {/* Logo */}
        <div>
          <h1 style={{
            fontSize: '28px',
            fontWeight: 'bold',
            color: '#4a4a4a',
            fontFamily: "'Playfair Display', serif",
          }}>
            URBAN VOGUE
          </h1>
          <p style={{
            fontSize: '12px',
            color: '#777',
            fontFamily: "'Lora', serif",
            letterSpacing: '1px',
          }}>
            FASHION & MORE
          </p>
        </div>

        {/* Navigation */}
        <nav>
          <Link to="/women" className="nav-link">WOMEN</Link>
          <Link to="/new" className="nav-link">MEN</Link>

          {/* ACCESSORIES dropdown */}
          <div style={{ position: 'relative', display: 'inline-block' }} ref={dropdownRef}>
            <span
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                setIsDropdownOpen((prev) => !prev);
              }}
              style={{ cursor: 'pointer' }}
            >
              ACCESSORIES
            </span>

            {isDropdownOpen && (
              <div className="dropdown">
                {categories.map((cat) => (
                  <Link
                    key={cat.id}
                    to={`/shop/${cat.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="dropdown-link"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/blog" className="nav-link">BLOG</Link>
          <Link to="/about" className="nav-link">ABOUT</Link>
          <Link to="/contact" className="nav-link">CONTACT</Link>
        </nav>

        {/* CTA Button */}
        <div>
          <Link to="/login">
            <button
              className="get-started-btn"
              aria-label="Get started with login"
            >
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;