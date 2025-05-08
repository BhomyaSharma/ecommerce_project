const CartItem = require('../models/CartItem');
const Cart = require('../models/ShoppingCart');
const ProductDetails = require('../models/ProductDetails');
const ProductVariant = require('../models/ProductVariant');
const User = require('../models/User'); // if needed for association

// ✅ Add item to cart using user_id
exports.addItem = async (req, res) => {
  try {
    console.log("🌐 addItem payload:", req.body);
    const { user_id, product_id, variant_id, quantity } = req.body;

    if (!user_id || !product_id || quantity === undefined) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Get or create user's cart
    let cart = await Cart.findOne({ where: { user_id } });
    if (!cart) {
      cart = await Cart.create({ user_id });
    }

    const cart_id = cart.cart_id;

    // Check if item already exists in the cart
    const existingItem = await CartItem.findOne({
      where: { cart_id, product_id, variant_id },
    });

    if (existingItem) {
      existingItem.quantity += quantity;
      await existingItem.save();
      return res.status(200).json({
        message: 'Cart item quantity updated',
        cartItemId: existingItem.cart_item_id,
      });
    }

    // Create new cart item if it doesn't exist
    const newItem = await CartItem.create({
      cart_id,
      product_id,
      variant_id,
      quantity,
    });

    res.status(201).json({
      message: 'Item added to cart',
      cartItemId: newItem.cart_item_id,
    });
  } catch (error) {
    console.error('Error adding item to cart:', error.message);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};


// ✅ Get all cart items for a user
exports.getCartItems = async (req, res) => {
  try {
    const { user_id } = req.params;

    const cart = await Cart.findOne({ where: { user_id } });
    if (!cart) return res.status(200).json({ items: [] });

    const items = await CartItem.findAll({
      where: { cart_id: cart.cart_id },
      include: [
        {
          model: ProductDetails,
          as: 'product',
          attributes: ['product_id', 'product_name', 'price', 'description', 'image_url'],
        },
        {
          model: ProductVariant,
          as: 'variant',
          attributes: ['variant_id', 'variant_name', 'additional_price', 'color', 'size'],
        },
      ],
    });

    res.status(200).json({ items });
  } catch (error) {
    console.error('Error fetching cart items:', error.message);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};

// ✅ Update cart item quantity
exports.updateCartItemQuantity = async (req, res) => {
  try {
    const { cart_item_id } = req.params;
    const { quantity } = req.body;

    if (!quantity || quantity <= 0) {
      return res.status(400).json({ error: 'Invalid quantity value' });
    }

    const cartItem = await CartItem.findByPk(cart_item_id);
    if (!cartItem) {
      return res.status(404).json({ error: 'Cart item not found' });
    }

    const product = await ProductDetails.findByPk(cartItem.product_id);
    const variant = cartItem.variant_id ? await ProductVariant.findByPk(cartItem.variant_id) : null;
    const availableStock = variant ? variant.stock_quantity : product.stock_quantity;

    if (quantity > availableStock) {
      return res.status(400).json({ error: `Not enough stock. Available: ${availableStock}` });
    }

    cartItem.quantity = quantity;
    await cartItem.save();

    res.status(200).json({ message: 'Cart item quantity updated', updatedQuantity: cartItem.quantity });
  } catch (error) {
    console.error('Error updating cart item quantity:', error.message);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};

// ✅ Delete a cart item
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

// ✅ Clear entire cart by user_id
exports.clearCart = async (req, res) => {
  try {
    const { user_id } = req.params;

    const cart = await Cart.findOne({ where: { user_id } });
    if (!cart) return res.status(200).json({ message: 'Cart already empty' });

    const deletedItems = await CartItem.destroy({ where: { cart_id: cart.cart_id } });

    res.status(200).json({ message: 'Cart cleared', deletedItems });
  } catch (error) {
    console.error('Error clearing cart:', error.message);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};
