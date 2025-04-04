import React from "react";
import Hero from "../components/Hero";
import Products from "../components/Products";
import Bestsellers from "../components/BestsellersSection";

const Home = () => {
  return (
    <div>
      <Hero />
      <Products />
      <Bestsellers />
    </div>
  );
};

export default Home;
