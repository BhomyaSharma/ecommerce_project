
// import React, { createContext, useContext, useState, useEffect, useMemo } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { jwtDecode } from "jwt-decode";
// import { useNavigate } from "react-router-dom";

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);
//   const [currentCartId, setCurrentCartId] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [isCartInitialized, setIsCartInitialized] = useState(false);
//   const navigate = useNavigate();

//   // ✅ Decode JWT token to get user ID (handles both 'user_id' and 'id')
//   const getUserIdFromToken = () => {
//     const token = localStorage.getItem("token");
//     console.log("🔍 localStorage contents:", JSON.stringify(localStorage, null, 2)); // Log all localStorage
//     console.log("🔍 Token in localStorage:", token, "Length:", token?.length); // Log token and its length

//     if (!token || token === "null" || token === "undefined" || typeof token !== "string") {
//       console.warn("⚠️ No valid token in localStorage. User may not be logged in.");
//       return null;
//     }

//     try {
//       const decoded = jwtDecode(token);
//       console.log("✅ Decoded token:", decoded); // Log decoded payload

//       const userId = decoded.user_id || decoded.id;
//       if (!userId) {
//         console.warn("⚠️ Decoded token does not contain user_id or id. Token payload:", decoded);
//         return null;
//       }

//       console.log("👤 User ID:", userId);
//       return userId;
//     } catch (err) {
//       console.error("❌ Token decoding failed:", err.message, "Token:", token);
//       localStorage.removeItem("token"); // Clear invalid token
//       return null;
//     }
//   };

//   // 🎯 Initialize cart on mount
//   useEffect(() => {
//     const initCart = async () => {
//       const userId = getUserIdFromToken();
//       if (!userId) {
//         console.warn("⚠️ Cart initialization skipped: No userId. Prompting login.");
//         setIsCartInitialized(false);
//         return;
//       }

//       setLoading(true);
//       try {
//         console.log(`🌐 Fetching cart for userId: ${userId}`);
//         const res = await axios.get(`http://localhost:3000/api/shopping_cart/user/${userId}`, {
//           headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//         });
//         const cart = res.data;
//         console.log("✅ Cart fetched:", cart);
//         setCurrentCartId(cart.cart_id);
//         setIsCartInitialized(true);
//         fetchCart(cart.cart_id);
//       } catch (error) {
//         console.error("❌ Error fetching cart:", {
//           status: error.response?.status,
//           data: error.response?.data,
//           message: error.message,
//         });
//         if (error.response?.status === 404) {
//           try {
//             console.log(`🌐 Creating new cart for userId: ${userId}`);
//             const createRes = await axios.post(
//               "http://localhost:3000/api/shopping_cart",
//               { user_id: userId },
//               { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
//             );
//             const newCartId = createRes.data.cart_id;
//             console.log("✅ New cart created:", createRes.data);
//             setCurrentCartId(newCartId);
//             setIsCartInitialized(true);
//             fetchCart(newCartId);
//           } catch (createErr) {
//             console.error("❌ Failed to create cart:", {
//               status: createErr.response?.status,
//               data: createErr.response?.data,
//               message: createErr.message,
//             });
//             toast.error("Failed to create cart. Please try again.");
//             setIsCartInitialized(false);
//           }
//         } else {
//           console.error("❌ Unexpected error initializing cart:", error);
//           toast.error("Failed to load cart. Please log in again.");
//           setIsCartInitialized(false);
//           navigate("/login");
//         }
//       } finally {
//         setLoading(false);
//       }
//     };

//     initCart();
//   }, [navigate]);

//   // 🛒 Fetch full cart by cart_id
//   const fetchCart = async (cartId = currentCartId) => {
//     if (!cartId) {
//       console.warn("⚠️ fetchCart skipped: No cartId.");
//       return;
//     }
//     setLoading(true);
//     try {
//       const token = localStorage.getItem("token");
//       console.log(`🌐 Fetching cart items for cartId: ${cartId}`);
//       const response = await axios.get(`http://localhost:3000/api/shopping_cart/${cartId}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       console.log("✅ Cart items fetched:", response.data);
//       setCartItems(response.data.items || []);
//     } catch (error) {
//       console.error("❌ Failed to fetch cart:", {
//         status: error.response?.status,
//         data: error.response?.data,
//         message: error.message,
//       });
//       toast.error("Failed to load cart items");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ➕ Add product to cart
//   const addToCart = async ({ product_id, variant_id, quantity }) => {
//     if (!isCartInitialized || !currentCartId) {
//       console.warn("⚠️ addToCart failed: Cart not initialized or initializing.");
//       toast.error("Please log in to add items to your cart.");
//       navigate("/login");
//       return;
//     }

//     try {
//       const token = localStorage.getItem("token");
//       console.log(`🌐 Adding item to cart:`, { cart_id: currentCartId, product_id, variant_id, quantity });
//       await axios.post(
//         "http://localhost:3000/api/cart_items",
//         {
//           cart_id: currentCartId,
//           product_id,
//           variant_id,
//           quantity,
//         },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       await fetchCart(currentCartId);
//       toast.success("Item added to cart! 🛒");
//     } catch (error) {
//       console.error("❌ Error adding to cart:", {
//         status: error.response?.status,
//         data: error.response?.data,
//         message: error.message,
//       });
//       toast.error("Failed to add item to cart");
//     }
//   };

//   // ✏️ Update item quantity
//   const updateCartItemQuantity = async (cart_item_id, newQuantity) => {
//     try {
//       const token = localStorage.getItem("token");
//       console.log(`🌐 Updating quantity for cart_item_id: ${cart_item_id} to ${newQuantity}`);
//       await axios.put(
//         `http://localhost:3000/api/cart_items/${cart_item_id}`,
//         { quantity: newQuantity },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       await fetchCart(currentCartId);
//       toast.success("Cart updated!");
//     } catch (error) {
//       console.error("❌ Error updating cart item:", {
//         status: error.response?.status,
//         data: error.response?.data,
//         message: error.message,
//       });
//       toast.error("Failed to update cart item");
//     }
//   };

//   // ❌ Remove item from cart
//   const removeCartItem = async (cart_item_id) => {
//     try {
//       const token = localStorage.getItem("token");
//       console.log(`🌐 Removing cart_item_id: ${cart_item_id}`);
//       await axios.delete(`http://localhost:3000/api/cart_items/${cart_item_id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       await fetchCart(currentCartId);
//       toast.success("Item removed from cart!");
//     } catch (error) {
//       console.error("❌ Error removing item:", {
//         status: error.response?.status,
//         data: error.response?.data,
//         message: error.message,
//       });
//       toast.error("Failed to remove item");
//     }
//   };

//   // 🧹 Clear cart
//   const clearCart = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       console.log(`🌐 Clearing cart: ${currentCartId}`);
//       await axios.delete(`http://localhost:3000/api/cart_items/clear/${currentCartId}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setCartItems([]);
//       toast.success("Cart cleared!");
//     } catch (error) {
//       console.error("❌ Error clearing cart:", {
//         status: error.response?.status,
//         data: error.response?.data,
//         message: error.message,
//       });
//       toast.error("Failed to clear cart");
//     }
//   };

//   // 🛍️ Calculate total number of items (for header badge)
//   const getTotalItems = () => {
//     const total = cartItems.reduce((total, item) => total + (item.quantity || 0), 0);
//     console.log("🛍️ Total items in cart:", total);
//     return total;
//   };

//   // 💰 Calculate cart total
//   const cartTotal = useMemo(() => {
//     const total = cartItems.reduce((total, item) => {
//       const basePrice = parseFloat(item.product?.price || 0);
//       const variantPrice = parseFloat(item.variant?.additional_price || 0);
//       const qty = item.quantity || 1;
//       return total + (basePrice + variantPrice) * qty;
//     }, 0);
//     console.log("💰 Cart total:", total);
//     return total;
//   }, [cartItems]);

//   return (
//     <CartContext.Provider
//       value={{
//         cartItems,
//         addToCart,
//         fetchCart,
//         updateCartItemQuantity,
//         removeCartItem,
//         clearCart,
//         currentCartId,
//         cartTotal,
//         loading,
//         getTotalItems,
//         isCartInitialized,
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
import { useNavigate } from "react-router-dom";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [currentCartId, setCurrentCartId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isCartInitialized, setIsCartInitialized] = useState(false);
  const navigate = useNavigate();

  const getUserIdFromToken = () => {
    const token = localStorage.getItem("token");
    console.log("🔍 localStorage contents:", JSON.stringify(localStorage, null, 2));
    console.log("🔍 Token in localStorage:", token, "Length:", token?.length);

    if (!token || token === "null" || token === "undefined" || typeof token !== "string") {
      console.warn("⚠️ No valid token in localStorage. User may not be logged in.");
      return null;
    }

    try {
      const decoded = jwtDecode(token);
      console.log("✅ Decoded token:", decoded);

      const userId = decoded.user_id || decoded.id;
      if (!userId) {
        console.warn("⚠️ Decoded token does not contain user_id or id. Token payload:", decoded);
        return null;
      }

      console.log("👤 User ID:", userId);
      return userId;
    } catch (err) {
      console.error("❌ Token decoding failed:", err.message, "Token:", token);
      localStorage.removeItem("token");
      return null;
    }
  };

  useEffect(() => {
    const initCart = async () => {
      const userId = getUserIdFromToken();
      if (!userId) {
        console.warn("⚠️ Cart initialization skipped: No userId. Prompting login.");
        setIsCartInitialized(false);
        return;
      }

      setLoading(true);
      try {
        console.log(`🌐 Fetching cart for userId: ${userId}`);
        const res = await axios.get(`http://localhost:3000/api/shopping_cart/user/${userId}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        const cart = res.data;
        console.log("✅ Cart fetched:", cart);
        setCurrentCartId(cart.cart_id);
        setIsCartInitialized(true);
        fetchCart(cart.cart_id);
      } catch (error) {
        console.error("❌ Error fetching cart:", {
          status: error.response?.status,
          data: error.response?.data,
          message: error.message,
        });
        if (error.response?.status === 404) {
          try {
            console.log(`🌐 Creating new cart for userId: ${userId}`);
            const createRes = await axios.post(
              "http://localhost:3000/api/shopping_cart",
              { user_id: userId },
              { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
            );
            const newCartId = createRes.data.cart_id;
            console.log("✅ New cart created:", createRes.data);
            setCurrentCartId(newCartId);
            setIsCartInitialized(true);
            fetchCart(newCartId);
          } catch (createErr) {
            console.error("❌ Failed to create cart:", {
              status: createErr.response?.status,
              data: createErr.response?.data,
              message: createErr.message,
            });
            toast.error("Failed to create cart. Please try again.");
            setIsCartInitialized(false);
          }
        } else {
          console.error("❌ Unexpected error initializing cart:", error);
          toast.error("Failed to load cart. Please log in again.");
          setIsCartInitialized(false);
          navigate("/login");
        }
      } finally {
        setLoading(false);
      }
    };

    initCart();
  }, [navigate]);

  const fetchCart = async (cartId = currentCartId) => {
    if (!cartId) {
      console.warn("⚠️ fetchCart skipped: No cartId.");
      return;
    }
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      console.log(`🌐 Fetching cart items for cartId: ${cartId}`);
      const response = await axios.get(`http://localhost:3000/api/shopping_cart/${cartId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log("✅ Cart items fetched:", response.data);
      setCartItems(response.data.items || []);
    } catch (error) {
      console.error("❌ Failed to fetch cart:", {
        status: error.response?.status,
        data: error.response?.data,
        message: error.message,
      });
      toast.error("Failed to load cart items");
      setCartItems([]);
    } finally {
      setLoading(false);
    }
  };

  const addToCart = async ({ product_id, variant_id, quantity }) => {
    if (!isCartInitialized || !currentCartId) {
      console.warn("⚠️ addToCart failed: Cart not initialized or initializing.");
      toast.error("Please log in to add items to your cart.");
      navigate("/login");
      return;
    }

    // Validate inputs
    if (!product_id || !quantity || quantity < 1) {
      console.error("❌ Invalid addToCart inputs:", { product_id, variant_id, quantity });
      toast.error("Invalid product or quantity");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const payload = {
        cart_id: currentCartId,
        product_id: Number(product_id),
        variant_id: variant_id ? Number(variant_id) : null,
        quantity: Number(quantity),
      };
      console.log(`🌐 Adding item to cart:`, payload);
      const response = await axios.post(
        "http://localhost:3000/api/cart_items",
        payload,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log("✅ Item added to cart:", response.data);
      await fetchCart(currentCartId);
      toast.success("Item added to cart! 🛒");
    } catch (error) {
      console.error("❌ Error adding to cart:", {
        status: error.response?.status,
        data: error.response?.data,
        message: error.message,
      });
      const errorMsg = error.response?.data?.error || "Failed to add item to cart";
      toast.error(errorMsg);
    }
  };

  const updateCartItemQuantity = async (cart_item_id, newQuantity) => {
    try {
      const token = localStorage.getItem("token");
      console.log(`🌐 Updating quantity for cart_item_id: ${cart_item_id} to ${newQuantity}`);
      await axios.put(
        `http://localhost:3000/api/cart_items/${cart_item_id}`,
        { quantity: newQuantity },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      await fetchCart(currentCartId);
      toast.success("Cart updated!");
    } catch (error) {
      console.error("❌ Error updating cart item:", {
        status: error.response?.status,
        data: error.response?.data,
        message: error.message,
      });
      toast.error("Failed to update cart item");
    }
  };

  const removeCartItem = async (cart_item_id) => {
    try {
      const token = localStorage.getItem("token");
      console.log(`🌐 Removing cart_item_id: ${cart_item_id}`);
      await axios.delete(`http://localhost:3000/api/cart_items/${cart_item_id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      await fetchCart(currentCartId);
      toast.success("Item removed from cart!");
    } catch (error) {
      console.error("❌ Error removing item:", {
        status: error.response?.status,
        data: error.response?.data,
        message: error.message,
      });
      toast.error("Failed to remove item");
    }
  };

  const clearCart = async () => {
    try {
      const token = localStorage.getItem("token");
      console.log(`🌐 Clearing cart: ${currentCartId}`);
      await axios.delete(`http://localhost:3000/api/cart_items/clear/${currentCartId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCartItems([]);
      toast.success("Cart cleared!");
    } catch (error) {
      console.error("❌ Error clearing cart:", {
        status: error.response?.status,
        data: error.response?.data,
        message: error.message,
      });
      toast.error("Failed to clear cart");
    }
  };

  const getTotalItems = () => {
    const total = cartItems.reduce((total, item) => total + (item.quantity || 0), 0);
    console.log("🛍️ Total items in cart:", total);
    return total;
  };

  const cartTotal = useMemo(() => {
    const total = cartItems.reduce((total, item) => {
      const basePrice = parseFloat(item.product?.price || 0);
      const variantPrice = parseFloat(item.variant?.additional_price || 0);
      const qty = item.quantity || 1;
      return total + (basePrice + variantPrice) * qty;
    }, 0);
    console.log("💰 Cart total:", total);
    return total;
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
        getTotalItems,
        isCartInitialized,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);