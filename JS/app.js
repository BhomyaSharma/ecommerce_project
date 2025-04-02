import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../views/home";
import Shop from "../views/shop";
import Cart from "../views/cart";
import Orders from "../views/orders";
import Payments from "../views/payments";
import Users from "../views/users";
import Reviews from "../views/reviews";

function app() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/users" element={<Users />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
    </Router>
  );
}

export default app;
