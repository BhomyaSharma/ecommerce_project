const express = require('express');
const router = express.Router();
const OrderItemController = require('../controllers/OrderItemController');

// Add an item to an order
router.post('/', OrderItemController.addItem);

// Get all items for a specific order
router.get('/:order_id', OrderItemController.getOrderItems);

// Update quantity of an order item (using the order item id)
router.put('/:id', OrderItemController.updateQuantity);

// Remove an item from an order
router.delete('/:id', OrderItemController.removeItem);

// Clear all items from an order
router.delete('/clear/:order_id', OrderItemController.clearOrderItems);

module.exports = router;
