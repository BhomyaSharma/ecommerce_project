const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Get all products
router.get('/products', productController.getAll);

// Get product by category
router.get('/products/category/:category_id', productController.getByCategory);

// Add a new product (admin only)
router.post('/products', productController.create);

module.exports = router;
