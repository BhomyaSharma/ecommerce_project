const ShoppingCart = require('../models/ShoppingCart');
const CartItem = require('../models/CartItem');
const ProductDetails = require('../models/ProductDetails');
const ProductVariant = require('../models/ProductVariant');

// ✅ Setup associations (since you're not using models/index.js)
ShoppingCart.hasMany(CartItem, { foreignKey: 'cart_id', as: 'items' });
CartItem.belongsTo(ShoppingCart, { foreignKey: 'cart_id', as: 'cart' });

CartItem.belongsTo(ProductDetails, { foreignKey: 'product_id', as: 'product' });
CartItem.belongsTo(ProductVariant, { foreignKey: 'variant_id', as: 'variant' });

// ✅ Create a new shopping cart
exports.createCart = async (req, res) => {
  try {
    const { user_id } = req.body;

    if (!user_id) {
      return res.status(400).json({ error: 'User ID is required' });
    }

    const existingCart = await ShoppingCart.findOne({ where: { user_id } });
    if (existingCart) {
      return res.status(409).json({ error: 'A cart already exists for this user' });
    }

    const newCart = await ShoppingCart.create({ user_id });
    res.status(201).json({ message: 'Shopping cart created', cartId: newCart.cart_id });
  } catch (error) {
    console.error('Error creating shopping cart:', error.message);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};

// ✅ Get all shopping carts
exports.getAllCarts = async (req, res) => {
  try {
    const carts = await ShoppingCart.findAll({
      include: {
        model: CartItem,
        as: 'items',
        include: [
          { model: ProductDetails, as: 'product' },
          { model: ProductVariant, as: 'variant' }
        ]
      }
    });
    res.status(200).json(carts);
  } catch (error) {
    console.error('Error fetching shopping carts:', error.message);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};

// ✅ Get a shopping cart by user ID
exports.getCartByUserId = async (req, res) => {
  try {
    const { user_id } = req.params;

    const cart = await ShoppingCart.findOne({
      where: { user_id },
      include: {
        model: CartItem,
        as: 'items',
        include: [
          { model: ProductDetails, as: 'product' },
          { model: ProductVariant, as: 'variant' }
        ]
      }
    });

    if (!cart) {
      return res.status(404).json({ error: 'Shopping cart not found for this user' });
    }

    res.status(200).json(cart);
  } catch (error) {
    console.error('Error fetching shopping cart by user ID:', error.message);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};

// ✅ Get a shopping cart by cart ID
exports.getCartById = async (req, res) => {
  try {
    const { cart_id } = req.params;

    const cart = await ShoppingCart.findByPk(cart_id, {
      include: {
        model: CartItem,
        as: 'items',
        include: [
          { model: ProductDetails, as: 'product' },
          { model: ProductVariant, as: 'variant' }
        ]
      }
    });

    if (!cart) {
      return res.status(404).json({ error: 'Shopping cart not found' });
    }

    res.status(200).json(cart);
  } catch (error) {
    console.error('Error fetching shopping cart by ID:', error.message);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};

// ✅ Delete a shopping cart by cart ID
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
