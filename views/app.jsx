// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import HeroSection from './components/HeroSection';
// import SaleSection from './components/SaleSection';
// import BestsellersSection from './components/BestsellersSection';
// import WelcomeSection from './components/WelcomeSection';
// import Footer from './components/Footer';
// import CategoryPage from './pages/CategoryPage';
// import WomenPage from './pages/WomenPage';
// import Login from './pages/login'; // Add this import
// import Signup from "./pages/Signup";
// import WomenProductsPage from './pages/WomenProductsPage';
// import LookbookSection from './components/LookbookSection';
// import WomenHeroSection from './components/WomenHeroSection';
// import RecentProducts from './components/RecentProducts';
// const App = () => {
//   return (
//     <div
//       style={{
//         textAlign: 'center',
//         backgroundColor: '#ffffff',
//         minHeight: '100vh',
//         display: 'flex',
//         flexDirection: 'column',
//       }}
//     >
//       <Header />
//       <main style={{ flex: 1 }}>
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <>
//                 <HeroSection />
//                 <SaleSection />
//                 <BestsellersSection />
//                 <WelcomeSection />
//                 {/* <LookbookSection />
//                 <WomenHeroSection />
//                 <RecentProducts /> */}
//               </>
//             }
//           />
//           <Route path="/shop/:categoryName" element={<CategoryPage />} />
//           <Route path="/login" element={<Login />} /> {/* Add this new route */}
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/women" element={<WomenPage />} />
//           <Route path="/women-product" element={<WomenProductsPage />} />
//         </Routes>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SaleSection from './components/SaleSection';
import BestsellersSection from './components/BestsellersSection';
import WelcomeSection from './components/WelcomeSection';
import Footer from './components/Footer';
import CategoryPage from './pages/CategoryPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import CartPage from './pages/CartPage';
import { CartProvider } from './context/CartContext';
import { ToastProvider } from './context/ToastContext';
import { AuthProvider } from './context/AuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <ToastProvider>
          <div
            style={{
              textAlign: 'center',
              backgroundColor: '#ffffff',
              minHeight: '100vh',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Header />
            <main style={{ flex: 1 }}>
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <HeroSection />
                      <SaleSection />
                      <BestsellersSection />
                      <WelcomeSection />
                    </>
                  }
                />
                <Route path="/shop/:categoryName" element={<CategoryPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/cart" element={<CartPage />} />
              </Routes>
            </main>
            <Footer />
            <ToastContainer
              position="bottom-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
              toastStyle={{
                backgroundColor: '#ede4c8',
                color: '#4a4a4a',
                fontFamily: "'Lora', serif",
                border: '1px solid #d4af37',
                borderRadius: '8px',
              }}
            />
          </div>
        </ToastProvider>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;