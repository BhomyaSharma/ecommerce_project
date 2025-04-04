import React from "react";

// Sample product data
const products = {
  men: [
    { id: 1, name: "Men's Jacket", price: "$79", img: "https://source.unsplash.com/300x400/?mens-jacket" },
    { id: 2, name: "Casual Shirt", price: "$49", img: "https://source.unsplash.com/300x400/?mens-shirt" },
    { id: 3, name: "Denim Jeans", price: "$59", img: "https://source.unsplash.com/300x400/?mens-jeans" },
  ],
  women: [
    { id: 4, name: "Women's Dress", price: "$89", img: "https://source.unsplash.com/300x400/?womens-dress" },
    { id: 5, name: "Casual Top", price: "$39", img: "https://source.unsplash.com/300x400/?womens-top" },
    { id: 6, name: "Skirt", price: "$45", img: "https://source.unsplash.com/300x400/?womens-skirt" },
  ],
};

const Products = () => {
  return (
    <div style={styles.container}>
      {/* Men's Section */}
      <h2 style={styles.sectionTitle}>Men's Collection</h2>
      <div style={styles.gridContainer}>
        {products.men.map((product) => (
          <div key={product.id} style={styles.productCard}>
            <img src={product.img} alt={product.name} style={styles.productImage} />
            <h3 style={styles.productName}>{product.name}</h3>
            <p style={styles.productPrice}>{product.price}</p>
            <button style={styles.buyButton}>Buy Now</button>
          </div>
        ))}
      </div>

      {/* Women's Section */}
      <h2 style={styles.sectionTitle}>Women's Collection</h2>
      <div style={styles.gridContainer}>
        {products.women.map((product) => (
          <div key={product.id} style={styles.productCard}>
            <img src={product.img} alt={product.name} style={styles.productImage} />
            <h3 style={styles.productName}>{product.name}</h3>
            <p style={styles.productPrice}>{product.price}</p>
            <button style={styles.buyButton}>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

// Inline CSS styles
const styles = {
  container: {
    textAlign: "center",
    padding: "50px 20px",
  },
  sectionTitle: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "20px",
  },
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    justifyContent: "center",
    marginBottom: "50px",
  },
  productCard: {
    backgroundColor: "white",
    padding: "15px",
    boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
    borderRadius: "10px",
    textAlign: "center",
  },
  productImage: {
    width: "100%",
    height: "250px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  productName: {
    marginTop: "10px",
    fontSize: "1.2rem",
    fontWeight: "600",
  },
  productPrice: {
    color: "#666",
    fontSize: "1rem",
    margin: "5px 0",
  },
  buyButton: {
    marginTop: "10px",
    padding: "10px 15px",
    backgroundColor: "black",
    color: "white",
    fontSize: "1rem",
    fontWeight: "bold",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
};

export default Products;
