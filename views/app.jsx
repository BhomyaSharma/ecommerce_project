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
import WomenPage from './pages/WomenPage';
import Login from './pages/login';
import Signup from './pages/Signup';
import WomenProductsPage from './pages/WomenProductsPage';

const PlaceholderPage = ({ title }) => <div>{title} Page - Coming Soon</div>;
const MenPage = () => <PlaceholderPage title="Men" />;
const BlogPage = () => <PlaceholderPage title="Blog" />;
const AboutPage = () => <PlaceholderPage title="About" />;
const ContactPage = () => <PlaceholderPage title="Contact" />;

const App = () => {
  return (
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
          <Route path="/women" element={<WomenPage />} />
          <Route path="/new" element={<MenPage />} />
          <Route path="/shop/:categoryName" element={<CategoryPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/women-product" element={<WomenProductsPage />} />
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;