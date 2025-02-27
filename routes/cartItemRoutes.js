const express = require('express');
const router = express.Router();
const CartItemController = require('../controllers/CartItemController');

// Add an item to cart
router.post('/', CartItemController.addItem);

// Get all items in a cart by cart_id
router.get('/:cart_id', CartItemController.getCartItems);

// Update quantity of a cart item (by cart_item_id)
router.put('/:cart_item_id', CartItemController.updateCartItemQuantity);

// Delete a specific cart item (by cart_item_id)
router.delete('/:cart_item_id', CartItemController.deleteCartItem);

// Clear all items from a cart (by cart_id)
router.delete('/clear/:cart_id', CartItemController.clearCart);


module.exports = router;
