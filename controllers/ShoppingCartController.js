const ShoppingCart = require('../models/ShoppingCart');

exports.createCart = async (req, res) => {
  try {
    const { user_id } = req.body;
    if (!user_id) {
      return res.status(400).json({ error: 'User ID is required' });
    }
    const result = await ShoppingCart.createCart(user_id);
    res.status(201).json({ message: 'Shopping cart created', cartId: result.insertId });
  } catch (error) {
    console.error('Error creating shopping cart:', error.message);
    if (error.message === 'User does not exist') {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};

exports.getAllCarts = async (req, res) => {
  try {
    const carts = await ShoppingCart.getAllCarts();
    res.status(200).json(carts);
  } catch (error) {
    console.error('Error fetching shopping carts:', error.message);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};

exports.getCartByUserId = async (req, res) => {
  try {
    const { user_id } = req.params;
    const carts = await ShoppingCart.getCartByUserId(user_id);
    if (carts.length === 0) {
      return res.status(404).json({ error: 'Shopping cart not found' });
    }
    // Assuming one cart per user, return the first found
    res.status(200).json(carts[0]);
  } catch (error) {
    console.error('Error fetching shopping cart by user ID:', error.message);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};

exports.getCartById = async (req, res) => {
  try {
    const { cart_id } = req.params;
    const cart = await ShoppingCart.getCartById(cart_id);
    if (!cart) {
      return res.status(404).json({ error: 'Shopping cart not found' });
    }
    res.status(200).json(cart);
  } catch (error) {
    console.error('Error fetching shopping cart by ID:', error.message);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};

exports.deleteCart = async (req, res) => {
  try {
    const { cart_id } = req.params;
    const result = await ShoppingCart.deleteCart(cart_id);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Shopping cart not found' });
    }
    res.status(200).json({ message: 'Shopping cart deleted' });
  } catch (error) {
    console.error('Error deleting shopping cart:', error.message);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};
