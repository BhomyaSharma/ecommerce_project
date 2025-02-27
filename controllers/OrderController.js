const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
  try {
    const { user_id, total_price, status } = req.body;
    if (!user_id || !total_price || !status) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    const result = await Order.create(user_id, total_price, status);
    res.status(201).json({ message: 'Order created', orderId: result.insertId });
  } catch (error) {
    console.error('Error creating order:', error.message);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.getAll();
    res.status(200).json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error.message);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};

exports.getOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const orders = await Order.getById(id);
    if (!orders || orders.length === 0) {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.status(200).json(orders[0]);
  } catch (error) {
    console.error('Error fetching order:', error.message);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};

exports.updateOrderStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    if (!status) {
      return res.status(400).json({ error: 'Status is required' });
    }
    const result = await Order.updateStatus(id, status);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.status(200).json({ message: 'Order status updated' });
  } catch (error) {
    console.error('Error updating order status:', error.message);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Order.delete(id);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.status(200).json({ message: 'Order deleted' });
  } catch (error) {
    console.error('Error deleting order:', error.message);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};
