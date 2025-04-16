const express = require('express');
const router = express.Router();
const ProductVariantController = require('../controllers/ProductVariantController');

// @route   POST /api/variants
// @desc    Create a new product variant
router.post('/', ProductVariantController.createVariant);

// @route   GET /api/variants
// @desc    Get all product variants
router.get('/', ProductVariantController.getAllVariants);

// @route   GET /api/variants/:variant_id
// @desc    Get a product variant by its ID
router.get('/:variant_id', ProductVariantController.getVariantById);

// @route   GET /api/variants/product/:product_id
// @desc    Get all variants for a specific product by product ID
router.get('/product/:product_id', ProductVariantController.getVariantsByProductId);

// @route   PUT /api/variants/:variant_id
// @desc    Update a product variant by its ID
router.put('/:variant_id', ProductVariantController.updateVariant);

// @route   DELETE /api/variants/:variant_id
// @desc    Delete a product variant by its ID
router.delete('/:variant_id', ProductVariantController.deleteVariant);

module.exports = router;
