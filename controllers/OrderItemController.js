const OrderItem = require('../models/OrderItem');

exports.addItem = async (req, res) => {
  try {
    const { order_id, product_id, quantity, price } = req.body;
    if (!order_id || !product_id || !quantity || !price) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    const newItem = await OrderItem.create({ order_id, product_id, quantity, price });
    res.status(201).json({ message: 'Order item added', orderItemId: newItem.id });
  } catch (error) {
    console.error('Error adding order item:', error.message);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};

exports.getOrderItems = async (req, res) => {
  try {
    const { order_id } = req.params;
    const items = await OrderItem.findAll({ where: { order_id } });
    res.status(200).json(items);
  } catch (error) {
    console.error('Error fetching order items:', error.message);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};

exports.updateQuantity = async (req, res) => {
  try {
    const { id } = req.params;
    const { quantity } = req.body;
    if (!quantity) {
      return res.status(400).json({ error: 'Quantity is required' });
    }
    const [updatedCount] = await OrderItem.update(
      { quantity },
      { where: { id } }
    );
    if (updatedCount === 0) {
      return res.status(404).json({ error: 'Order item not found' });
    }
    res.status(200).json({ message: 'Order item quantity updated' });
  } catch (error) {
    console.error('Error updating order item quantity:', error.message);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};

exports.removeItem = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCount = await OrderItem.destroy({ where: { id } });
    if (deletedCount === 0) {
      return res.status(404).json({ error: 'Order item not found' });
    }
    res.status(200).json({ message: 'Order item removed' });
  } catch (error) {
    console.error('Error removing order item:', error.message);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};

exports.clearOrderItems = async (req, res) => {
  try {
    const { order_id } = req.params;
    const deletedCount = await OrderItem.destroy({ where: { order_id } });
    res.status(200).json({ message: 'All order items cleared', deletedCount });
  } catch (error) {
    console.error('Error clearing order items:', error.message);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};
