const OrderItem = require('../models/OrderItem');

exports.addItem = async (req, res) => {
  try {
    const { order_id, product_id, quantity, price } = req.body;
    if (!order_id || !product_id || !quantity || !price) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const result = await OrderItem.addItem(order_id, product_id, quantity, price);
    res.status(201).json({ message: 'Order item added', orderItemId: result.insertId });
  } catch (error) {
    console.error('Error adding order item:', error);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};

exports.getOrderItems = async (req, res) => {
  try {
    const { order_id } = req.params;
    const items = await OrderItem.getOrderItems(order_id);
    res.status(200).json(items);
  } catch (error) {
    console.error('Error fetching order items:', error);
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

    const result = await OrderItem.updateQuantity(id, quantity);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Order item not found' });
    }
    res.status(200).json({ message: 'Order item quantity updated' });
  } catch (error) {
    console.error('Error updating order item quantity:', error);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};

exports.removeItem = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await OrderItem.removeItem(id);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Order item not found' });
    }
    res.status(200).json({ message: 'Order item removed' });
  } catch (error) {
    console.error('Error removing order item:', error);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};

exports.clearOrderItems = async (req, res) => {
  try {
    const { order_id } = req.params;
    const result = await OrderItem.clearOrderItems(order_id);
    res.status(200).json({ message: 'All order items cleared', affectedRows: result.affectedRows });
  } catch (error) {
    console.error('Error clearing order items:', error);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};
