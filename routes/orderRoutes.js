const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/OrderController');

// Create a new order
router.post('/', OrderController.createOrder);

// Get all orders
router.get('/', OrderController.getAllOrders);

// Get a single order by ID
router.get('/:id', OrderController.getOrderById);

// Update order status
router.put('/:id/status', OrderController.updateOrderStatus);

// Delete an order
router.delete('/:id', OrderController.deleteOrder);

module.exports = router;
