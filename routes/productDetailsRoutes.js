const express = require('express');
const router = express.Router();
const ProductDetailsController = require('../controllers/ProductDetailsController');

router.get('/', ProductDetailsController.getAllProducts);
router.get('/:id', ProductDetailsController.getProductById);
router.post('/', ProductDetailsController.createProduct);
router.put('/:id', ProductDetailsController.updateProduct);
router.delete('/:id', ProductDetailsController.deleteProduct);

module.exports = router;
