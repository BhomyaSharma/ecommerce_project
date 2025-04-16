// import React, { createContext, useContext, useState, useEffect } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { jwtDecode } from "jwt-decode"; // ✅ Correct named import for jwt-decode@4.0.0

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);
//   const [currentCartId, setCurrentCartId] = useState(null);
//   const [loading, setLoading] = useState(false);

//   // 🔐 Decode JWT to get user ID
//   const getUserIdFromToken = () => {
//     const token = localStorage.getItem("token");
//     if (!token) return null;
//     try {
//       const decoded = jwtDecode(token); // ✅ Correct usage
//       return decoded.user_id;
//     } catch (err) {
//       console.error("Error decoding token:", err);
//       return null;
//     }
//   };

//   // 🎯 Initialize cart on mount
//   useEffect(() => {
//     const initCart = async () => {
//       const userId = getUserIdFromToken();
//       if (!userId) {
//         console.warn("User not logged in.");
//         return;
//       }

//       try {
//         // Step 1: Get cart by user ID
//         const res = await axios.get(`/api/carts/user/${userId}`);
//         if (res.data) {
//           const cart = res.data;
//           setCurrentCartId(cart.cart_id);
//           fetchCart(cart.cart_id);
//         } else {
//           // Step 2: No cart? Create one
//           const createRes = await axios.post(`/api/carts`, { user_id: userId });
//           const newCartId = createRes.data.cart_id;
//           setCurrentCartId(newCartId);
//           fetchCart(newCartId);
//         }
//       } catch (error) {
//         console.error("Error initializing cart:", error);
//         toast.error("Failed to load cart");
//       }
//     };

//     initCart();
//   }, []);

//   // 🛒 Fetch cart items using cart_id
//   const fetchCart = async (cartId = currentCartId) => {
//     if (!cartId) return;
//     setLoading(true);
//     try {
//       const response = await axios.get(`/api/cart-items/${cartId}`);
//       setCartItems(response.data);
//     } catch (error) {
//       console.error("Failed to fetch cart:", error);
//       toast.error("Failed to load cart items");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ➕ Add product to cart
//   const addToCart = async ({ product_id, variant_id, quantity }) => {
//     if (!currentCartId) {
//       toast.error("Cart not initialized");
//       return;
//     }

//     try {
//       const response = await axios.post("/api/cart-items", {
//         product_id,
//         variant_id,
//         quantity,
//         cart_id: currentCartId,
//       });

//       setCartItems((prevItems) => {
//         const updatedItems = [...prevItems];
//         const existingItemIndex = updatedItems.findIndex(
//           (item) =>
//             item.product_id === product_id && item.variant_id === variant_id
//         );

//         if (existingItemIndex > -1) {
//           updatedItems[existingItemIndex].quantity += quantity;
//         } else {
//           updatedItems.push(response.data);
//         }

//         return updatedItems;
//       });

//       toast.success("Item added to cart!");
//     } catch (error) {
//       console.error("Error adding to cart:", error);
//       toast.error("Failed to add item to cart");
//     }
//   };

//   // 🔄 Update quantity
//   const updateCartItemQuantity = async (cart_item_id, newQuantity) => {
//     try {
//       const response = await axios.put(`/api/cart-items/${cart_item_id}`, {
//         quantity: newQuantity,
//       });

//       setCartItems((prev) =>
//         prev.map((item) =>
//           item.cart_item_id === cart_item_id
//             ? { ...item, quantity: response.data.quantity }
//             : item
//         )
//       );

//       toast.success("Cart updated!");
//     } catch (error) {
//       console.error("Error updating cart item:", error);
//       toast.error("Failed to update cart item");
//     }
//   };

//   // 🧹 Clear cart
//   const clearCart = async () => {
//     try {
//       await axios.delete(`/api/cart-items/clear/${currentCartId}`);
//       setCartItems([]);
//       toast.success("Cart cleared!");
//     } catch (error) {
//       console.error("Error clearing cart:", error);
//       toast.error("Failed to clear cart");
//     }
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cartItems,
//         addToCart,
//         fetchCart,
//         updateCartItemQuantity,
//         clearCart,
//         currentCartId,
//         loading,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);

import React, { createContext, useContext, useState, useEffect, useMemo } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [currentCartId, setCurrentCartId] = useState(null);
  const [loading, setLoading] = useState(false);

  // ✅ Decode JWT token to get user ID (handles both 'user_id' and 'id')
  const getUserIdFromToken = () => {
    const token = localStorage.getItem("token");

    if (!token || token === "null" || token === "undefined") {
      console.warn("⚠️ No valid token in localStorage.");
      return null;
    }

    try {
      const decoded = jwtDecode(token);
      console.log("✅ Decoded token:", decoded);

      const userId = decoded.user_id || decoded.id;
      if (!userId) {
        console.warn("⚠️ Decoded token does not contain user_id or id.");
        return null;
      }

      return userId;
    } catch (err) {
      console.warn("⚠️ Token decoding failed:", err.message);
      return null;
    }
  };

  // 🎯 Initialize cart on mount
  useEffect(() => {
    const initCart = async () => {
      const userId = getUserIdFromToken();
      if (!userId) {
        console.warn("⚠️ User not logged in or token invalid.");
        return;
      }

      try {
        const res = await axios.get(`/api/shopping_cart/user/${userId}`);
        const cart = res.data;
        setCurrentCartId(cart.cart_id);
        fetchCart(cart.cart_id);
      } catch (error) {
        if (error.response?.status === 404) {
          try {
            const createRes = await axios.post(`/api/shopping_cart`, { user_id: userId });
            const newCartId = createRes.data.cart_id;
            setCurrentCartId(newCartId);
            fetchCart(newCartId);
          } catch (createErr) {
            console.error("❌ Failed to create cart:", createErr);
            toast.error("Failed to create cart.");
          }
        } else {
          console.error("❌ Error initializing cart:", error);
          toast.error("Failed to load cart.");
        }
      }
    };

    initCart();
  }, []);

  // 🛒 Fetch full cart by cart_id
  const fetchCart = async (cartId = currentCartId) => {
    if (!cartId) return;
    setLoading(true);
    try {
      const response = await axios.get(`/api/shopping_cart/${cartId}`);
      setCartItems(response.data.items || []);
    } catch (error) {
      console.error("❌ Failed to fetch cart:", error);
      toast.error("Failed to load cart items");
    } finally {
      setLoading(false);
    }
  };

  // ➕ Add product to cart
  const addToCart = async ({ product_id, variant_id, quantity }) => {
    if (!currentCartId) {
      toast.error("Cart not initialized");
      return;
    }

    try {
      await axios.post("/api/cart_items", {
        cart_id: currentCartId,
        product_id,
        variant_id,
        quantity,
      });

      await fetchCart(currentCartId);
      toast.success("Item added to cart!");
    } catch (error) {
      console.error("❌ Error adding to cart:", error);
      toast.error("Failed to add item to cart");
    }
  };

  // ✏️ Update item quantity
  const updateCartItemQuantity = async (cart_item_id, newQuantity) => {
    try {
      await axios.put(`/api/cart_items/${cart_item_id}`, {
        quantity: newQuantity,
      });
      await fetchCart(currentCartId);
      toast.success("Cart updated!");
    } catch (error) {
      console.error("❌ Error updating cart item:", error);
      toast.error("Failed to update cart item");
    }
  };

  // ❌ Remove item from cart
  const removeCartItem = async (cart_item_id) => {
    try {
      await axios.delete(`/api/cart_items/${cart_item_id}`);
      await fetchCart(currentCartId);
      toast.success("Item removed from cart!");
    } catch (error) {
      console.error("❌ Error removing item:", error);
      toast.error("Failed to remove item");
    }
  };

  // 🧹 Clear cart
  const clearCart = async () => {
    try {
      await axios.delete(`/api/cart_items/clear/${currentCartId}`);
      setCartItems([]);
      toast.success("Cart cleared!");
    } catch (error) {
      console.error("❌ Error clearing cart:", error);
      toast.error("Failed to clear cart");
    }
  };

  // 💰 Calculate cart total
  const cartTotal = useMemo(() => {
    return cartItems.reduce((total, item) => {
      const basePrice = parseFloat(item.product?.price || 0);
      const variantPrice = parseFloat(item.variant?.additional_price || 0);
      const qty = item.quantity || 1;
      return total + (basePrice + variantPrice) * qty;
    }, 0);
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        fetchCart,
        updateCartItemQuantity,
        removeCartItem,
        clearCart,
        currentCartId,
        cartTotal,
        loading,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
