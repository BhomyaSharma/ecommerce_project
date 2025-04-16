<<<<<<< HEAD
// import React, { useState, useEffect, useRef } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { fetchCategories } from '../api/categoryApi';
// import { motion, AnimatePresence } from 'framer-motion';

// const Header = () => {
//   const [isAccessoriesOpen, setIsAccessoriesOpen] = useState(false);
//   const [isMenOpen, setIsMenOpen] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [accessoriesCategories, setAccessoriesCategories] = useState([]);
//   const [menCategories, setMenCategories] = useState([]);
//   const [userName, setUserName] = useState(null);

//   const accessoriesRef = useRef(null);
//   const menRef = useRef(null);
//   const location = useLocation();
//   const navigate = useNavigate();

//   // Fetch categories
//   useEffect(() => {
//     const loadCategories = async () => {
//       try {
//         const accessories = await fetchCategories('accessories');
//         const men = await fetchCategories('men');
//         setAccessoriesCategories(accessories);
//         setMenCategories(men);
//       } catch (error) {
//         console.error('Failed to load categories:', error);
//       }
//     };
//     loadCategories();
//   }, []);

//   // Get user from localStorage
//   useEffect(() => {
//     const storedUser = localStorage.getItem('userName');
//     if (storedUser) {
//       setUserName(storedUser);
//     }
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('userName');
//     setUserName(null);
//     navigate('/login');
//   };

//   // Close dropdown on outside click
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         accessoriesRef.current && !accessoriesRef.current.contains(event.target)
//       ) {
//         setIsAccessoriesOpen(false);
//       }
//       if (menRef.current && !menRef.current.contains(event.target)) {
//         setIsMenOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   // Close dropdowns on route change
//   useEffect(() => {
//     setIsAccessoriesOpen(false);
//     setIsMenOpen(false);
//     setIsMobileMenuOpen(false);
//   }, [location]);

//   const isActive = (path) => location.pathname === path;

//   const handleNavClick = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     <header style={{ backgroundColor: '#ede4c8', borderBottom: '1px solid #e0d8b0', marginBottom: '20px' }}>
//       <style>{`
//         .nav-link {
//           margin: 0 20px;
//           text-decoration: none;
//           color: #4a4a4a;
//           font-size: 15px;
//           font-family: 'Lora', serif;
//           position: relative;
//           transition: color 0.3s ease;
//         }
//         .nav-link::after {
//           content: '';
//           position: absolute;
//           width: 0;
//           height: 2px;
//           bottom: -5px;
//           left: 0;
//           background-color: #d4af37;
//           transition: width 0.3s ease;
//         }
//         .nav-link:hover::after {
//           width: 100%;
//         }
//         .nav-link.active {
//           color: #d4af37;
//         }
//         .nav-link.active::after {
//           width: 100%;
//         }
//         .dropdown-link {
//           display: block;
//           padding: 12px 25px;
//           text-decoration: none;
//           color: #333;
//           font-size: 15px;
//           font-family: 'Lora', serif;
//           transition: all 0.3s ease;
//         }
//         .dropdown-link:hover {
//           background-color: #f9f1d4;
//           color: #d4af37;
//           padding-left: 30px;
//         }
//         .dropdown {
//           position: absolute;
//           top: calc(100% + 10px);
//           left: 0;
//           background-color: #ffffff;
//           box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
//           border-radius: 12px;
//           overflow: hidden;
//           min-width: 220px;
//           z-index: 999;
//           animation: fadeIn 0.3s ease-in-out;
//         }
//         @keyframes fadeIn {
//           from { opacity: 0; transform: translateY(-10px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .get-started-btn {
//           padding: 10px 25px;
//           background-color: transparent;
//           color: #4a4a4a;
//           border: 2px solid #d4af37;
//           border-radius: 25px;
//           font-size: 16px;
//           font-family: 'Playfair Display', serif;
//           font-weight: 600;
//           text-transform: uppercase;
//           letter-spacing: 1px;
//           cursor: pointer;
//           transition: all 0.3s ease;
//         }
//         .get-started-btn:hover {
//           background-color: #d4af37;
//           color: #fff;
//         }
//         .hamburger {
//           display: none;
//           cursor: pointer;
//           flex-direction: column;
//           gap: 4px;
//         }
//         .hamburger span {
//           width: 25px;
//           height: 2px;
//           background-color: #4a4a4a;
//         }
//         @media (max-width: 768px) {
//           .desktop-nav {
//             display: none;
//           }
//           .hamburger {
//             display: flex;
//           }
//           .mobile-menu {
//             display: flex;
//             flex-direction: column;
//             background: #fff;
//             position: absolute;
//             top: 100%;
//             left: 0;
//             right: 0;
//             z-index: 999;
//             padding: 15px;
//             box-shadow: 0 10px 20px rgba(0,0,0,0.1);
//           }
//         }
//       `}</style>

//       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 30px', position: 'relative' }}>
//         {/* Logo */}
//         <div>
//           <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#4a4a4a', fontFamily: "'Playfair Display', serif" }}>
//             URBAN VOGUE
//           </h1>
//           <p style={{ fontSize: '12px', color: '#777', fontFamily: "'Lora', serif", letterSpacing: '1px' }}>
//             FASHION & MORE
//           </p>
//         </div>

//         {/* Hamburger Menu */}
//         <div className="hamburger" onClick={() => setIsMobileMenuOpen(prev => !prev)}>
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>

//         {/* Desktop Navigation */}
//         <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center' }}>
//           <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`} onClick={handleNavClick}>WOMEN</Link>

//           <div style={{ position: 'relative' }} ref={menRef}>
//             <span className="nav-link" onClick={() => { setIsMenOpen(prev => !prev); setIsAccessoriesOpen(false); }} style={{ cursor: 'pointer' }}>MEN</span>
//             <AnimatePresence>
//               {isMenOpen && (
//                 <motion.div className="dropdown" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
//                   {menCategories.map((cat) => (
//                     <Link key={cat.id} to={`/shop/${cat.name.toLowerCase().replace(/\s+/g, '-')}`} className="dropdown-link" onClick={() => { setIsMenOpen(false); handleNavClick(); }}>{cat.name}</Link>
//                   ))}
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>

//           <div style={{ position: 'relative' }} ref={accessoriesRef}>
//             <span className="nav-link" onClick={() => { setIsAccessoriesOpen(prev => !prev); setIsMenOpen(false); }} style={{ cursor: 'pointer' }}>ACCESSORIES</span>
//             <AnimatePresence>
//               {isAccessoriesOpen && (
//                 <motion.div className="dropdown" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
//                   {accessoriesCategories.map((cat) => (
//                     <Link key={cat.id} to={`/shop/${cat.name.toLowerCase().replace(/\s+/g, '-')}`} className="dropdown-link" onClick={() => { setIsAccessoriesOpen(false); handleNavClick(); }}>{cat.name}</Link>
//                   ))}
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>

//           <Link to="/blog" className={`nav-link ${isActive('/blog') ? 'active' : ''}`} onClick={handleNavClick}>BLOG</Link>
//           <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`} onClick={handleNavClick}>ABOUT</Link>
//           <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`} onClick={handleNavClick}>CONTACT</Link>
//         </nav>

//         {/* User Auth Buttons */}
//         <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
//           {userName ? (
//             <>
//               <span style={{ color: '#4a4a4a', fontFamily: "'Lora', serif", fontSize: '15px' }}>Hello, {userName}</span>
//               <motion.button className="get-started-btn" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={handleLogout}>Logout</motion.button>
//             </>
//           ) : (
//             <Link to="/login"><motion.button className="get-started-btn" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={handleNavClick}>Get Started</motion.button></Link>
//           )}
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="mobile-menu">
//           <Link to="/" className="nav-link" onClick={handleNavClick}>WOMEN</Link>
//           {menCategories.map((cat) => (
//             <Link key={cat.id} to={`/shop/${cat.name.toLowerCase().replace(/\s+/g, '-')}`} className="dropdown-link" onClick={handleNavClick}>{cat.name}</Link>
//           ))}
//           {accessoriesCategories.map((cat) => (
//             <Link key={cat.id} to={`/shop/${cat.name.toLowerCase().replace(/\s+/g, '-')}`} className="dropdown-link" onClick={handleNavClick}>{cat.name}</Link>
//           ))}
//           <Link to="/blog" className="nav-link" onClick={handleNavClick}>BLOG</Link>
//           <Link to="/about" className="nav-link" onClick={handleNavClick}>ABOUT</Link>
//           <Link to="/contact" className="nav-link" onClick={handleNavClick}>CONTACT</Link>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;
=======

>>>>>>> 9bfc494552a6bdae318ff7f0e15be7959552bd28
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { fetchCategories } from '../api/categoryApi';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isAccessoriesOpen, setIsAccessoriesOpen] = useState(false);
  const [isMenOpen, setIsMenOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [accessoriesCategories, setAccessoriesCategories] = useState([]);
  const [menCategories, setMenCategories] = useState([]);
  const [userName, setUserName] = useState(null);

  const accessoriesRef = useRef(null);
  const menRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Fetch categories
  useEffect(() => {
    const loadCategories = async () => {
      try {
        const accessories = await fetchCategories('accessories');
        const men = await fetchCategories('men');
        setAccessoriesCategories(accessories);
        setMenCategories(men);
      } catch (error) {
        console.error('Failed to load categories:', error);
      }
    };
    loadCategories();
  }, []);

  // Get user from localStorage (This will display the username after login)
  useEffect(() => {
    const storedUser = localStorage.getItem('userName');
    if (storedUser) {
      setUserName(storedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    setUserName(null);
    navigate('/login');
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        accessoriesRef.current && !accessoriesRef.current.contains(event.target)
      ) {
        setIsAccessoriesOpen(false);
      }
      if (menRef.current && !menRef.current.contains(event.target)) {
        setIsMenOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdowns on route change
  useEffect(() => {
    setIsAccessoriesOpen(false);
    setIsMenOpen(false);
    setIsMobileMenuOpen(false);
  }, [location]);

  const isActive = (path) => location.pathname === path;

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header style={{ backgroundColor: '#ede4c8', borderBottom: '1px solid #e0d8b0', marginBottom: '20px' }}>
      <style>{`
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
          width: 0;
          height: 2px;
          bottom: -5px;
          left: 0;
          background-color: #d4af37;
          transition: width 0.3s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }
        .nav-link.active {
          color: #d4af37;
        }
        .nav-link.active::after {
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
        .hamburger {
          display: none;
          cursor: pointer;
          flex-direction: column;
          gap: 4px;
        }
        .hamburger span {
          width: 25px;
          height: 2px;
          background-color: #4a4a4a;
        }
        @media (max-width: 768px) {
          .desktop-nav {
            display: none;
          }
          .hamburger {
            display: flex;
          }
          .mobile-menu {
            display: flex;
            flex-direction: column;
            background: #fff;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            z-index: 999;
            padding: 15px;
            box-shadow: 0 10px 20px rgba(0,0,0,0.1);
          }
        }
      `}</style>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 30px', position: 'relative' }}>
        {/* Logo */}
        <div>
          <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#4a4a4a', fontFamily: "'Playfair Display', serif" }}>
            URBAN VOGUE
          </h1>
          <p style={{ fontSize: '12px', color: '#777', fontFamily: "'Lora', serif", letterSpacing: '1px' }}>
            FASHION & MORE
          </p>
        </div>

        {/* Hamburger Menu */}
        <div className="hamburger" onClick={() => setIsMobileMenuOpen(prev => !prev)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`} onClick={handleNavClick}>WOMEN</Link>

          <div style={{ position: 'relative' }} ref={menRef}>
            <span className="nav-link" onClick={() => { setIsMenOpen(prev => !prev); setIsAccessoriesOpen(false); }} style={{ cursor: 'pointer' }}>MEN</span>
            <AnimatePresence>
              {isMenOpen && (
                <motion.div className="dropdown" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
                  {menCategories.map((cat) => (
                    <Link key={cat.id} to={`/shop/${cat.name.toLowerCase().replace(/\s+/g, '-')}`} className="dropdown-link" onClick={() => { setIsMenOpen(false); handleNavClick(); }}>{cat.name}</Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div style={{ position: 'relative' }} ref={accessoriesRef}>
            <span className="nav-link" onClick={() => { setIsAccessoriesOpen(prev => !prev); setIsMenOpen(false); }} style={{ cursor: 'pointer' }}>ACCESSORIES</span>
            <AnimatePresence>
              {isAccessoriesOpen && (
                <motion.div className="dropdown" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
                  {accessoriesCategories.map((cat) => (
                    <Link key={cat.id} to={`/shop/${cat.name.toLowerCase().replace(/\s+/g, '-')}`} className="dropdown-link" onClick={() => { setIsAccessoriesOpen(false); handleNavClick(); }}>{cat.name}</Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/blog" className={`nav-link ${isActive('/blog') ? 'active' : ''}`} onClick={handleNavClick}>BLOG</Link>
          <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`} onClick={handleNavClick}>ABOUT</Link>
          <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`} onClick={handleNavClick}>CONTACT</Link>
        </nav>

        {/* User Auth Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          {userName ? (
            <>
              <span style={{ color: '#4a4a4a', fontFamily: "'Lora', serif", fontSize: '15px' }}>Hello, {userName}</span>
              <motion.button className="get-started-btn" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={handleLogout}>Logout</motion.button>
            </>
          ) : (
            <Link to="/login"><motion.button className="get-started-btn" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={handleNavClick}>Get Started</motion.button></Link>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <Link to="/" className="nav-link" onClick={handleNavClick}>WOMEN</Link>
          {menCategories.map((cat) => (
            <Link key={cat.id} to={`/shop/${cat.name.toLowerCase().replace(/\s+/g, '-')}`} className="dropdown-link" onClick={handleNavClick}>{cat.name}</Link>
          ))}
          {accessoriesCategories.map((cat) => (
            <Link key={cat.id} to={`/shop/${cat.name.toLowerCase().replace(/\s+/g, '-')}`} className="dropdown-link" onClick={handleNavClick}>{cat.name}</Link>
          ))}
          <Link to="/blog" className="nav-link" onClick={handleNavClick}>BLOG</Link>
          <Link to="/about" className="nav-link" onClick={handleNavClick}>ABOUT</Link>
          <Link to="/contact" className="nav-link" onClick={handleNavClick}>CONTACT</Link>
        </div>
      )}
    </header>
  );
};

export default Header;