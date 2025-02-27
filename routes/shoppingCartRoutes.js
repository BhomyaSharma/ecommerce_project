const express = require('express');
const router = express.Router();
const ShoppingCartController = require('../controllers/ShoppingCartController');

// Create a new shopping cart for a user
router.post('/', ShoppingCartController.createCart);

// Get all shopping carts
router.get('/', ShoppingCartController.getAllCarts);

// Get shopping cart by user ID
router.get('/user/:user_id', ShoppingCartController.getCartByUserId);

// Get shopping cart by cart ID
router.get('/:cart_id', ShoppingCartController.getCartById);

// Delete a shopping cart
router.delete('/:cart_id', ShoppingCartController.deleteCart);

module.exports = router;
