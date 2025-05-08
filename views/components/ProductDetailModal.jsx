import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext";
import { useToast } from "../context/ToastContext";
import axios from "axios";

const ProductDetailModal = ({ product, onClose, onAddToCart }) => {
  const { addToCart } = useCart();
  const { showToast } = useToast();
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [isAdding, setIsAdding] = useState(false);

  const handleAdd = async () => {
    if (!selectedVariant) {
      showToast("Please select a variant before adding to cart ❗");
      return;
    }

    setIsAdding(true);

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        showToast("User not authenticated ❗");
        setIsAdding(false);
        return;
      }

      const decoded = JSON.parse(atob(token.split(".")[1]));
      const user_id = decoded.id;

      const response = await axios.post(
        "http://localhost:3000/api/cart_items",
        {
          user_id,
          product_id: product.product_id,
          variant_id: selectedVariant.variant_id,
          quantity: 1,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Update UI
      addToCart({
        productId: product.product_id,
        variantId: selectedVariant.variant_id,
        quantity: 1,
        product,
        variant: selectedVariant,
      });

      showToast("Item added to cart successfully ✅");

      if (onAddToCart) onAddToCart();

      setTimeout(() => {
        setIsAdding(false);
        onClose();
      }, 500);

    } catch (error) {
      console.error("Add to cart error:", error);
      showToast("Error adding item to cart, please try again ❗");
      setIsAdding(false);
    }
  };

  // Styling
  const beige = "#F5F1EA";
  const deepBrown = "#4A3F35";
  const buttonBeige = "#D2B48C";
  const buttonHoverBeige = "#C4A484";

  const overlayStyle = {
    position: "fixed",
    top: 0, left: 0, right: 0, bottom: 0,
    background: "rgba(0,0,0,0.5)",
    zIndex: 9999,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const modalStyle = {
    width: "80%",
    maxWidth: "900px",
    backgroundColor: beige,
    borderRadius: "16px",
    display: "flex",
    overflow: "hidden",
    boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
    position: "relative",
  };

  const leftStyle = {
    flex: 1,
    padding: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const rightStyle = {
    flex: 1,
    padding: "30px",
    backgroundColor: "#FAF0E6",
  };

  const variantButton = (isSelected) => ({
    padding: "10px 20px",
    margin: "5px",
    border: `1px solid ${isSelected ? deepBrown : "#e0e0e0"}`,
    borderRadius: "8px",
    cursor: "pointer",
    backgroundColor: isSelected ? buttonBeige : "#FFF",
    color: deepBrown,
    fontWeight: "bold",
    transition: "all 0.3s ease",
  });

  const getVariantLabel = (variant) => {
    return variant.size || variant.variant_name || variant.color || "Variant";
  };

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          style={overlayStyle}
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            style={modalStyle}
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            role="dialog"
            aria-labelledby="product-modal-title"
          >
            {/* Close button */}
            <motion.button
              onClick={onClose}
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                background: "none",
                border: "none",
                fontSize: "24px",
                cursor: "pointer",
                color: deepBrown,
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Close modal"
            >
              ×
            </motion.button>

            {/* Left side - image */}
            <motion.div
              style={leftStyle}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <img
                src={product.image_url || "/placeholder.jpg"}
                alt={product.product_name}
                style={{
                  width: "100%",
                  maxHeight: "400px",
                  objectFit: "contain",
                  borderRadius: "12px",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                }}
              />
            </motion.div>

            {/* Right side - details */}
            <motion.div
              style={rightStyle}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <h2
                id="product-modal-title"
                style={{
                  marginBottom: "10px",
                  color: deepBrown,
                  fontSize: "1.8rem",
                  fontWeight: "600",
                }}
              >
                {product.product_name}
              </h2>

              <p
                style={{
                  color: "#7D6E5E",
                  marginBottom: "12px",
                  lineHeight: "1.5",
                  fontSize: "1rem",
                }}
              >
                {product.description}
              </p>

              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                  color: deepBrown,
                  marginBottom: "20px",
                }}
              >
                ${product.price}
              </p>

              <h4
                style={{
                  marginTop: "20px",
                  marginBottom: "10px",
                  color: deepBrown,
                  fontSize: "1.2rem",
                }}
              >
                Select Variant
              </h4>

              {product.ProductVariants?.length > 0 ? (
                <motion.div
                  style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  {product.ProductVariants.map((variant) => (
                    <motion.button
                      key={variant.variant_id}
                      style={variantButton(
                        selectedVariant?.variant_id === variant.variant_id
                      )}
                      onClick={() => setSelectedVariant(variant)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={`Select ${getVariantLabel(variant)}`}
                    >
                      {getVariantLabel(variant)}
                    </motion.button>
                  ))}
                </motion.div>
              ) : (
                <p style={{ color: "#999", fontSize: "0.9rem" }}>
                  No variants available
                </p>
              )}

              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: buttonHoverBeige }}
                whileTap={{ scale: 0.95 }}
                onClick={handleAdd}
                disabled={isAdding}
                style={{
                  marginTop: "30px",
                  padding: "14px 28px",
                  backgroundColor: isAdding ? "#A9A9A9" : buttonBeige,
                  color: deepBrown,
                  borderRadius: "10px",
                  border: "none",
                  cursor: isAdding ? "not-allowed" : "pointer",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                aria-label="Add to cart"
              >
                {isAdding ? "Adding..." : "Add to Cart"}
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProductDetailModal;

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useCart } from "../context/CartContext";
// import { useToast } from "../context/ToastContext";
// import axios from "axios"; // Make sure axios is installed

// const ProductDetailModal = ({ product, onClose, onAddToCart }) => {
//   const { addToCart } = useCart();
//   const { showToast } = useToast();
//   const [selectedVariant, setSelectedVariant] = useState(null);
//   const [isAdding, setIsAdding] = useState(false);

//   const handleAdd = async () => {
//     if (!selectedVariant) {
//       showToast("Please select a variant before adding to cart ❗");
//       return;
//     }

//     setIsAdding(true);

//     try {
//       // Send data to backend to add item to cart
//       const user_id = localStorage.getItem("user_id"); // Get user_id from localStorage or JWT
//       const response = await axios.post('/api/cart', {
//         user_id,
//         productId: product.product_id,
//         variantId: selectedVariant.variant_id,
//         quantity: 1,
//       });

//       // If successful, add to CartContext (for UI update)
//       addToCart({
//         productId: product.product_id,
//         variantId: selectedVariant.variant_id,
//         quantity: 1,
//         product,
//         variant: selectedVariant,
//       });

//       showToast("Item added to cart successfully ✅");

//       if (onAddToCart) onAddToCart();
//       setTimeout(() => {
//         setIsAdding(false);
//         onClose();
//       }, 500); // Delay to allow toast visibility

//     } catch (error) {
//       showToast("Error adding item to cart, please try again. ❗");
//       setIsAdding(false);
//     }
//   };

//   const beige = "#F5F1EA";
//   const deepBrown = "#4A3F35";
//   const buttonBeige = "#D2B48C";
//   const buttonHoverBeige = "#C4A484";

//   const overlayStyle = {
//     position: "fixed",
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     background: "rgba(0,0,0,0.5)",
//     zIndex: 9999,
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   };

//   const modalStyle = {
//     position: "relative",
//     width: "80%",
//     maxWidth: "900px",
//     backgroundColor: beige,
//     borderRadius: "16px",
//     overflow: "hidden",
//     display: "flex",
//     boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
//   };

//   const leftStyle = {
//     flex: 1,
//     padding: "20px",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   };

//   const rightStyle = {
//     flex: 1,
//     padding: "30px",
//     backgroundColor: "#FAF0E6",
//   };

//   const variantButton = (isSelected) => ({
//     padding: "10px 20px",
//     margin: "5px",
//     border: `1px solid ${isSelected ? deepBrown : "#e0e0e0"}`,
//     borderRadius: "8px",
//     cursor: "pointer",
//     backgroundColor: isSelected ? buttonBeige : "#FFF",
//     color: isSelected ? deepBrown : deepBrown,
//     fontWeight: "bold",
//     transition: "all 0.3s ease",
//   });

//   // Helper: Show size or color/variant based on category
//   const getVariantLabel = (variant) => {
//     if (variant.size) return variant.size;
//     if (variant.variant_name) return variant.variant_name;
//     if (variant.color) return variant.color;
//     return "Variant";
//   };

//   return (
//     <AnimatePresence>
//       {product && (
//         <motion.div
//           style={overlayStyle}
//           onClick={onClose}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.3 }}
//         >
//           <motion.div
//             style={modalStyle}
//             onClick={(e) => e.stopPropagation()}
//             initial={{ scale: 0.8, y: 50 }}
//             animate={{ scale: 1, y: 0 }}
//             exit={{ scale: 0.8, y: 50 }}
//             transition={{ type: "spring", stiffness: 300, damping: 25 }}
//             role="dialog"
//             aria-labelledby="product-modal-title"
//           >
//             {/* Close Button */}
//             <motion.button
//               onClick={onClose}
//               style={{
//                 position: "absolute",
//                 top: "20px",
//                 right: "20px",
//                 background: "none",
//                 border: "none",
//                 fontSize: "24px",
//                 cursor: "pointer",
//                 color: deepBrown,
//               }}
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               aria-label="Close modal"
//             >
//               ×
//             </motion.button>

//             {/* Left - Image */}
//             <motion.div
//               style={leftStyle}
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.4, delay: 0.1 }}
//             >
//               <img
//                 src={product.image_url || "/placeholder.jpg"}
//                 alt={product.product_name}
//                 style={{
//                   width: "100%",
//                   maxHeight: "400px",
//                   objectFit: "contain",
//                   borderRadius: "12px",
//                   boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
//                 }}
//               />
//             </motion.div>

//             {/* Right - Info */}
//             <motion.div
//               style={rightStyle}
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.4, delay: 0.2 }}
//             >
//               <h2
//                 id="product-modal-title"
//                 style={{
//                   marginBottom: "10px",
//                   color: deepBrown,
//                   fontSize: "1.8rem",
//                   fontWeight: "600",
//                 }}
//               >
//                 {product.product_name}
//               </h2>
//               <p
//                 style={{
//                   color: "#7D6E5E",
//                   marginBottom: "12px",
//                   lineHeight: "1.5",
//                   fontSize: "1rem",
//                 }}
//               >
//                 {product.description}
//               </p>
//               <p
//                 style={{
//                   fontWeight: "bold",
//                   fontSize: "1.5rem",
//                   color: deepBrown,
//                   marginBottom: "20px",
//                 }}
//               >
//                 ${product.price}
//               </p>

//               <h4
//                 style={{
//                   marginTop: "20px",
//                   marginBottom: "10px",
//                   color: deepBrown,
//                   fontSize: "1.2rem",
//                 }}
//               >
//                 Select Variant
//               </h4>
//               {product.ProductVariants?.length > 0 ? (
//                 <motion.div
//                   style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ duration: 0.3, delay: 0.3 }}
//                 >
//                   {product.ProductVariants.map((variant) => (
//                     <motion.button
//                       key={variant.variant_id}
//                       style={variantButton(selectedVariant?.variant_id === variant.variant_id)}
//                       onClick={() => setSelectedVariant(variant)}
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                       aria-label={`Select ${getVariantLabel(variant)}`}
//                     >
//                       {getVariantLabel(variant)}
//                     </motion.button>
//                   ))}
//                 </motion.div>
//               ) : (
//                 <p style={{ color: "#999", fontSize: "0.9rem" }}>No variants available</p>
//               )}

//               <motion.button
//                 whileHover={{ scale: 1.05, backgroundColor: buttonHoverBeige }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={handleAdd}
//                 disabled={isAdding}
//                 style={{
//                   marginTop: "30px",
//                   padding: "14px 28px",
//                   backgroundColor: isAdding ? "#A9A9A9" : buttonBeige,
//                   color: deepBrown,
//                   borderRadius: "10px",
//                   border: "none",
//                   cursor: isAdding ? "not-allowed" : "pointer",
//                   fontWeight: "bold",
//                   fontSize: "1rem",
//                   width: "100%",
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                 }}
//                 aria-label="Add to cart"
//               >
//                 {isAdding ? "Adding..." : "Add to Cart"}
//               </motion.button>
//             </motion.div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default ProductDetailModal;
