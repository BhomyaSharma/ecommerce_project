const ShoppingCart = require('../models/ShoppingCart');
// Optionally, if you need to check for an existing user, import your User model
// const User = require('../models/User');

exports.createCart = async (req, res) => {
  try {
    const { user_id } = req.body;
    if (!user_id) {
      return res.status(400).json({ error: 'User ID is required' });
    }

    // Optionally, check if the user exists:
    // const user = await User.findByPk(user_id);
    // if (!user) return res.status(404).json({ error: 'User not found' });

    const newCart = await ShoppingCart.create({ user_id });
    res.status(201).json({ message: 'Shopping cart created', cartId: newCart.cart_id });
  } catch (error) {
    console.error('Error creating shopping cart:', error.message);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};

exports.getAllCarts = async (req, res) => {
  try {
    const carts = await ShoppingCart.findAll();
    res.status(200).json(carts);
  } catch (error) {
    console.error('Error fetching shopping carts:', error.message);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};

exports.getCartByUserId = async (req, res) => {
  try {
    const { user_id } = req.params;
    const cart = await ShoppingCart.findOne({ where: { user_id } });
    if (!cart) {
      return res.status(404).json({ error: 'Shopping cart not found' });
    }
    res.status(200).json(cart);
  } catch (error) {
    console.error('Error fetching shopping cart by user ID:', error.message);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};

exports.getCartById = async (req, res) => {
  try {
    const { cart_id } = req.params;
    const cart = await ShoppingCart.findByPk(cart_id);
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
    const deletedCount = await ShoppingCart.destroy({ where: { cart_id } });
    if (deletedCount === 0) {
      return res.status(404).json({ error: 'Shopping cart not found' });
    }
    res.status(200).json({ message: 'Shopping cart deleted' });
  } catch (error) {
    console.error('Error deleting shopping cart:', error.message);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};
