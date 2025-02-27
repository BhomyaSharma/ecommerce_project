const express = require('express');
const router = express.Router();
const PaymentController = require('../controllers/PaymentController');

// Create a new payment record
router.post('/', PaymentController.createPayment);

// Get payment details by order ID
router.get('/:order_id', PaymentController.getPaymentByOrderId);

// Update payment status
router.put('/:id', PaymentController.updatePaymentStatus);

// Delete a payment record
router.delete('/:id', PaymentController.deletePayment);

module.exports = router;
