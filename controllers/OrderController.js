const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
  try {
    const { user_id, total_price, status } = req.body;
    if (!user_id || !total_price || !status) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    const newOrder = await Order.create({ user_id, total_price, status });
    res.status(201).json({ message: 'Order created', orderId: newOrder.id });
  } catch (error) {
    console.error('Error creating order:', error.message);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.findAll();
    res.status(200).json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error.message);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};

exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id);
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.status(200).json(order);
  } catch (error) {
    console.error('Error fetching order:', error.message);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};

exports.updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;
    if (!status) {
      return res.status(400).json({ error: 'Status is required' });
    }
    const [updatedCount] = await Order.update(
      { status },
      { where: { id: req.params.id } }
    );
    if (updatedCount === 0) {
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
    const deletedCount = await Order.destroy({ where: { id: req.params.id } });
    if (deletedCount === 0) {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.status(200).json({ message: 'Order deleted' });
  } catch (error) {
    console.error('Error deleting order:', error.message);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};
