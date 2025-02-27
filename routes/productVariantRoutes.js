const express = require('express');
const router = express.Router();
const ProductVariantController = require('../controllers/ProductVariantController');

// Create a new product variant
router.post('/', ProductVariantController.createVariant);

// Get all product variants
router.get('/', ProductVariantController.getAllVariants);

// Get a product variant by ID
router.get('/:variant_id', ProductVariantController.getVariantById);

// Get all variants for a specific product
router.get('/product/:product_id', ProductVariantController.getVariantsByProductId);

// Update a product variant
router.put('/:variant_id', ProductVariantController.updateVariant);

// Delete a product variant
router.delete('/:variant_id', ProductVariantController.deleteVariant);

module.exports = router;
