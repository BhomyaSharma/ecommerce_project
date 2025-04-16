import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext";
import { useToast } from "../context/ToastContext";

const ProductDetailModal = ({ product, onClose, onAddToCart }) => {
  const { addToCart } = useCart();
  const { showToast } = useToast();
  const [selectedVariant, setSelectedVariant] = useState(null);

  const handleAdd = () => {
    if (!selectedVariant) {
      showToast("Please select a variant before adding to cart ❗");
      return;
    }

    addToCart({
      productId: product.product_id,
      variantId: selectedVariant.variant_id,
      quantity: 1,
      product,
      variant: selectedVariant,
    });

    showToast("Item added to cart successfully ✅");

    if (onAddToCart) onAddToCart();
    onClose();
  };

  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0,0,0,0.5)",
    zIndex: 9999,
  };

  const modalStyle = {
    position: "relative",
    width: "80%",
    maxWidth: "900px",
    margin: "50px auto",
    backgroundColor: "#fff",
    borderRadius: "16px",
    overflow: "hidden",
    display: "flex",
  };

  const leftStyle = {
    flex: 1,
    padding: "20px",
  };

  const rightStyle = {
    flex: 1,
    padding: "20px",
    borderLeft: "1px solid #e0e0e0",
  };

  const variantButton = (isSelected) => ({
    padding: "10px 20px",
    margin: "5px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    backgroundColor: isSelected ? "#000" : "#f0f0f0",
    color: isSelected ? "#fff" : "#000",
    fontWeight: "bold",
  });

  // Determine whether this product should show sizes only
  const isSizeOnlyCategory = ["Shirts", "Trousers"].includes(product.Category?.name);

  // Helper: Show size or color/variant based on category
  const getVariantLabel = (variant) => {
    // Show size if defined (for clothing like shirts/trousers)
    if (variant.size) return variant.size;
  
    // Show variant_name (for accessories like gold/silver)
    if (variant.variant_name) return variant.variant_name;
  
    // Show color if that's all there is
    if (variant.color) return variant.color;
  
    return "Variant"; // fallback
  };
  
  

  return (
    <AnimatePresence>
      <motion.div
        style={overlayStyle}
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          style={modalStyle}
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
          transition={{ duration: 0.3, type: "spring" }}
        >
          {/* Left - Image */}
          <div style={leftStyle}>
            <img
              src={product.image_url || "/placeholder.jpg"}
              alt={product.product_name}
              style={{
                width: "100%",
                maxHeight: "400px",
                objectFit: "contain",
                borderRadius: "12px",
              }}
            />
          </div>

          {/* Right - Info */}
          <div style={rightStyle}>
            <h2 style={{ marginBottom: "10px" }}>{product.product_name}</h2>
            <p style={{ color: "#777", marginBottom: "12px" }}>
              {product.description}
            </p>
            <p style={{ fontWeight: "bold", fontSize: "22px", color: "#333" }}>
              ₹{product.price}
            </p>

            <h4 style={{ marginTop: "25px", marginBottom: "10px" }}>
              Select {isSizeOnlyCategory ? "Size" : "Variant"}
            </h4>
            {product.ProductVariants?.length > 0 ? (
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                {product.ProductVariants.map((variant) => (
                  <button
                    key={variant.variant_id}
                    style={variantButton(selectedVariant?.variant_id === variant.variant_id)}
                    onClick={() => setSelectedVariant(variant)}
                  >
                    {getVariantLabel(variant)}
                  </button>
                ))}
              </div>
            ) : (
              <p style={{ color: "#999" }}>No variants available</p>
            )}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleAdd}
              style={{
                marginTop: "30px",
                padding: "14px 28px",
                backgroundColor: "#000",
                color: "#fff",
                borderRadius: "10px",
                border: "none",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              Add to Cart
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProductDetailModal;
