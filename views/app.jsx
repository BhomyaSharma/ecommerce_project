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
import { CartProvider } from './context/CartContext';
import { ToastProvider } from './context/ToastContext';
import { AuthProvider } from './context/AuthContext'; // ✅ Import AuthProvider

const App = () => {
  return (
    <AuthProvider> {/* ✅ Wrap with AuthProvider */}
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
              </Routes>
            </main>
            <Footer />
          </div>
        </ToastProvider>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
