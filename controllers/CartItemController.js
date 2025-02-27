const CartItem = require('../models/CartItem');

exports.addItem = async (req, res) => {
  try {
    const { cart_id, product_id, variant_id, quantity } = req.body;

   
    if (!cart_id || !product_id ||  quantity === undefined) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    const result = await CartItem.createItem(cart_id, product_id, variant_id, quantity);
    res.status(201).json({ message: 'Item added to cart', cartItemId: result.insertId });
  } catch (error) {
    console.error('Error adding item to cart:', error.message);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};

exports.getCartItems = async (req, res) => {
  try {
    const { cart_id } = req.params;
    const rows = await CartItem.getItemsByCartId(cart_id);
    if (rows.length === 0) {
      return res.status(404).json({ error: 'No items found in the cart' });
    }
    res.status(200).json(rows);
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
    const result = await CartItem.updateQuantity(cart_item_id, quantity);
    if (result.affectedRows === 0) {
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
    const result = await CartItem.deleteItem(cart_item_id);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Cart item not found' });
    }
    res.status(200).json({ message: 'Cart item removed' });
  } catch (error) {
    console.error('Error removing cart item:', error.message);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};

exports.clearCart = async (req, res) => {
  try {
    const { cart_id } = req.params;
    const result = await CartItem.clearCart(cart_id);
    res.status(200).json({ message: 'Cart cleared', deletedItems: result.affectedRows });
  } catch (error) {
    console.error('Error clearing cart:', error.message);
    res.status(500).json({ error: 'Database error', details: error.message });
  }

};

