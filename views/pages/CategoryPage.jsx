import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductsByCategory } from '../api/productApi';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import CartDrawer from '../components/CartDrawer';
import { useToast } from '../context/ToastContext';
import { useCart } from '../context/CartContext'; // ✅ Import cart context

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { showToast } = useToast();
  const { addToCart } = useCart(); // ✅ Get addToCart method

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProductsByCategory(categoryName);
      setProducts(data);
    };
    loadProducts();
  }, [categoryName]);

  const handleAddToCartClick = (product) => {
    if (categoryName.toLowerCase() === 'accessories') {
      // ✅ Add accessories directly with default quantity 1 and no variant
      addToCart({
        product_id: product.product_id,
        variant_id: null,
        quantity: 1,
      });
      showToast('Item added to cart!', 'success');
    } else {
      // ✅ Show cart drawer with variant/quantity selection
      setSelectedProduct(product);
      setCartDrawerOpen(true);
    }
  };

  const handleAddToCartSuccess = () => {
    setCartDrawerOpen(false);
    showToast('Item added to cart!', 'success');
  };

  const containerStyle = {
    padding: '40px 60px',
    minHeight: '100vh',
    backgroundImage: 'url("https://i.pinimg.com/736x/a9/43/3b/a9433b4b8548747ef66bf3e350cf4649.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    position: 'relative',
    overflow: 'hidden',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    zIndex: 1,
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 2,
    fontFamily: "'Lora', serif",
  };

  const titleStyle = {
    fontSize: '48px',
    marginBottom: '30px',
    color: '#fff',
    fontFamily: "'Playfair Display', serif",
    textAlign: 'center',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '30px',
    maxWidth: '1400px',
    margin: '0 auto',
  };

  return (
    <div style={containerStyle}>
      <div style={overlayStyle}></div>

      <motion.div
        style={contentStyle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          style={titleStyle}
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {categoryName.toUpperCase()}
        </motion.h1>

        <div style={gridStyle}>
          {products.length === 0 ? (
            <motion.p
              style={{
                fontSize: '20px',
                color: '#fff',
                textAlign: 'center',
                textShadow: '0 1px 5px rgba(0, 0, 0, 0.3)',
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              No products found in this category.
            </motion.p>
          ) : (
            products.map((product, index) => (
              <ProductCard
                key={product.product_id}
                product={product}
                index={index}
                onAddToCart={() => handleAddToCartClick(product)}
              />
            ))
          )}
        </div>
      </motion.div>

      {/* ✅ Pass categoryName to CartDrawer for conditional rendering */}
      <CartDrawer
        open={cartDrawerOpen}
        onClose={() => setCartDrawerOpen(false)}
        product={selectedProduct}
        onAddToCartSuccess={handleAddToCartSuccess}
        categoryName={categoryName}
      />
    </div>
  );
};

export default CategoryPage;
