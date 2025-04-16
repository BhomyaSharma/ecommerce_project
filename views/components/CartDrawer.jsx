import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import axios from "axios"; // Add axios for API calls

const CartDrawer = ({ open, onClose, product, onAddToCartSuccess }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  if (!product) return null;

  const handleAdd = () => setQuantity((q) => q + 1);
  const handleSubtract = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  // Extract unique colors and sizes from product.variants
  const colors = [...new Set(product.variants?.map((v) => v.color))];
  const sizes = [...new Set(product.variants?.map((v) => v.size))];

  // Find selected variant based on color and size
  const selectedVariant = product.variants?.find(
    (v) => v.color === selectedColor && v.size === selectedSize
  );

  const handleAddToCart = async () => {
    if (!selectedVariant) {
      alert("Please select color and size.");
      return;
    }

    try {
      // Making API call to backend to add item to cart
      const response = await axios.post("/api/cart/add", {
        product_id: product.product_id,
        variant_id: selectedVariant.variant_id,
        quantity,
      });

      if (response.status === 201) {
        addToCart({
          product_id: product.product_id,
          variant_id: selectedVariant.variant_id,
          quantity,
        });

        setQuantity(1);
        setSelectedColor("");
        setSelectedSize("");
        onAddToCartSuccess();
        onClose(); // Close drawer
      }
    } catch (error) {
      console.error("Error adding item to cart:", error.message);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        right: open ? 0 : "-100%",
        width: "400px",
        height: "100%",
        backgroundColor: "#fff",
        boxShadow: "-4px 0 15px rgba(0, 0, 0, 0.2)",
        transition: "right 0.4s ease",
        zIndex: 1000,
        padding: "30px",
        fontFamily: "'Lora', serif",
      }}
    >
      <button
        onClick={onClose}
        style={{
          fontSize: "24px",
          border: "none",
          background: "transparent",
          cursor: "pointer",
          float: "right",
        }}
      >
        &times;
      </button>

      <h2 style={{ marginTop: "60px", marginBottom: "10px" }}>
        {product.product_name}
      </h2>
      <p style={{ marginBottom: "20px", color: "#666" }}>₹{product.price}</p>

      {/* Color Selection */}
      <div style={{ marginBottom: "20px" }}>
        <label style={{ fontWeight: "bold" }}>Color:</label>
        <div style={{ marginTop: "8px", display: "flex", gap: "10px" }}>
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => setSelectedColor(color)}
              style={{
                padding: "6px 12px",
                border: selectedColor === color ? "2px solid #000" : "1px solid #ccc",
                backgroundColor: "#f9f9f9",
                cursor: "pointer",
              }}
            >
              {color}
            </button>
          ))}
        </div>
      </div>

      {/* Size Selection */}
      <div style={{ marginBottom: "20px" }}>
        <label style={{ fontWeight: "bold" }}>Size:</label>
        <div style={{ marginTop: "8px", display: "flex", gap: "10px" }}>
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              style={{
                padding: "6px 12px",
                border: selectedSize === size ? "2px solid #000" : "1px solid #ccc",
                backgroundColor: "#f9f9f9",
                cursor: "pointer",
              }}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity Selector */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
          marginBottom: "30px",
        }}
      >
        <button
          onClick={handleSubtract}
          style={{
            padding: "6px 12px",
            fontSize: "16px",
            cursor: "pointer",
            border: "1px solid #ccc",
            backgroundColor: "#f9f9f9",
          }}
        >
          −
        </button>
        <span style={{ fontSize: "18px", minWidth: "24px" }}>{quantity}</span>
        <button
          onClick={handleAdd}
          style={{
            padding: "6px 12px",
            fontSize: "16px",
            cursor: "pointer",
            border: "1px solid #ccc",
            backgroundColor: "#f9f9f9",
          }}
        >
          +
        </button>
      </div>

      {/* Add to Cart */}
      <button
        onClick={handleAddToCart}
        style={{
          backgroundColor: "#000",
          color: "#fff",
          padding: "12px 24px",
          fontSize: "16px",
          border: "none",
          cursor: "pointer",
          borderRadius: "4px",
          width: "100%",
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default CartDrawer;
