const CartItem = require('../models/CartItem');

exports.addItem = async (req, res) => {
  try {
    const { cart_id, product_id, variant_id, quantity } = req.body;
    if (!cart_id || !product_id || quantity === undefined) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    // Create the cart item using Sequelize's create method
    const newItem = await CartItem.create({ cart_id, product_id, variant_id, quantity });
    res.status(201).json({ message: 'Item added to cart', cartItemId: newItem.cart_item_id });
  } catch (error) {
    console.error('Error adding item to cart:', error.message);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};

exports.getCartItems = async (req, res) => {
  try {
    const { cart_id } = req.params;
    const items = await CartItem.findAll({ where: { cart_id } });
    if (!items || items.length === 0) {
      return res.status(404).json({ error: 'No items found in the cart' });
    }
    res.status(200).json(items);
  } catch (error) {
    console.error('Error fetching cart items:', error.message);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};

exports.updateCartItemQuantity = async (req, res) => {
  try {
    const { cart_item_id } = req.params;
    const { quantity } = req.body;
    if (!quantity || quantity <= 0) {
      return res.status(400).json({ error: 'Invalid quantity value' });
    }
    const [updatedRows] = await CartItem.update({ quantity }, { where: { cart_item_id } });
    if (updatedRows === 0) {
      return res.status(404).json({ error: 'Cart item not found' });
    }
    res.status(200).json({ message: 'Cart item quantity updated' });
  } catch (error) {
    console.error('Error updating cart item quantity:', error.message);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};

exports.deleteCartItem = async (req, res) => {
  try {
    const { cart_item_id } = req.params;
    const deletedRows = await CartItem.destroy({ where: { cart_item_id } });
    if (deletedRows === 0) {
      return res.status(404).json({ error: 'Cart item not found' });
    }
    res.status(200).json({ message: 'Cart item removed' });
  } catch (error) {
    console.error('Error deleting cart item:', error.message);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};

exports.clearCart = async (req, res) => {
  try {
    const { cart_id } = req.params;
    const deletedItems = await CartItem.destroy({ where: { cart_id } });
    res.status(200).json({ message: 'Cart cleared', deletedItems });
  } catch (error) {
    console.error('Error clearing cart:', error.message);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};
