import React from "react";
import { Link } from "react-router-dom";
import "./../CSS/styles.css";

const Home = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <h1>Welcome to Our E-Commerce Store</h1>
        <p>Shop the best fashion trends now!</p>
        <Link to="/shop" className="btn btn-primary">Shop Now</Link>
      </header>

      <section className="features">
        <div className="feature">
          <h3>Fast Delivery</h3>
          <p>Get your products delivered within 2 days.</p>
        </div>
        <div className="feature">
          <h3>Secure Payments</h3>
          <p>We support multiple secure payment options.</p>
        </div>
        <div className="feature">
          <h3>Quality Products</h3>
          <p>All our products go through a quality check.</p>
        </div>
      </section>

      <section className="product-showcase">
        <h2>Popular Products</h2>
        <div className="product-grid">
          <div className="product-card">
            <img src="Images/product1.jpg" alt="Product" />
            <h4>Stylish T-Shirt</h4>
            <p>$25.99</p>
            <button className="btn btn-success">Add to Cart</button>
          </div>
          <div className="product-card">
            <img src="Images/product2.jpg" alt="Product" />
            <h4>Denim Jeans</h4>
            <p>$39.99</p>
            <button className="btn btn-success">Add to Cart</button>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 E-Commerce Store | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Home;
