const Payment = require('../models/Payment');

exports.createPayment = async (req, res) => {
  try {
    const { order_id, payment_method, transaction_id } = req.body;
    if (!order_id || !payment_method || !transaction_id) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    const newPayment = await Payment.create({ order_id, payment_method, transaction_id });
    res.status(201).json({ message: 'Payment recorded', paymentId: newPayment.id });
  } catch (error) {
    console.error('Error creating payment:', error.message);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};

exports.getPaymentByOrderId = async (req, res) => {
  try {
    const { order_id } = req.params;
    const payments = await Payment.findAll({ where: { order_id } });
    res.status(200).json(payments);
  } catch (error) {
    console.error('Error fetching payment details:', error.message);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};

exports.updatePaymentStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { payment_status } = req.body;
    if (!payment_status) {
      return res.status(400).json({ error: 'Payment status is required' });
    }
    const [updatedCount] = await Payment.update(
      { payment_status },
      { where: { id } }
    );
    if (updatedCount === 0) {
      return res.status(404).json({ error: 'Payment not found' });
    }
    res.status(200).json({ message: 'Payment status updated' });
  } catch (error) {
    console.error('Error updating payment status:', error.message);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};

exports.deletePayment = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCount = await Payment.destroy({ where: { id } });
    if (deletedCount === 0) {
      return res.status(404).json({ error: 'Payment not found' });
    }
    res.status(200).json({ message: 'Payment deleted' });
  } catch (error) {
    console.error('Error deleting payment:', error.message);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};
