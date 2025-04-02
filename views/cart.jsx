import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../JS/redux/slices/cartSlice.js";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="container mt-4">
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="cart-list">
          {cartItems.map((item, index) => (
            <li key={index}>
              <img src={item.image} alt={item.name} />
              <h4>{item.name}</h4>
              <p>${item.price}</p>
              <button className="btn btn-danger" onClick={() => dispatch(removeFromCart(item.id))}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
