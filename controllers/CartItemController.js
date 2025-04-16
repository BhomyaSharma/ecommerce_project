const CartItem = require('../models/CartItem');
const ProductDetails = require('../models/ProductDetails');
const ProductVariant = require('../models/ProductVariant');

// 1. Add Item to Cart (Merge if exists)
// exports.addItem = async (req, res) => {
//   try {
//     const { cart_id, product_id, variant_id, quantity } = req.body;

//     if (!cart_id || !product_id || quantity === undefined) {
//       return res.status(400).json({ error: 'Missing required fields' });
//     }

//     // Check for sufficient stock for the product/variant
//     const product = await ProductDetails.findByPk(product_id);
//     if (!product) {
//       return res.status(404).json({ error: 'Product not found' });
//     }

//     const variant = variant_id ? await ProductVariant.findByPk(variant_id) : null;
//     if (variant_id && !variant) {
//       return res.status(404).json({ error: 'Variant not found' });
//     }

//     const availableStock = variant ? variant.stock_quantity : product.stock_quantity;
//     if (quantity > availableStock) {
//       return res.status(400).json({ error: `Not enough stock. Available: ${availableStock}` });
//     }

//     // Check if item already exists in the cart
//     const existingItem = await CartItem.findOne({
//       where: { cart_id, product_id, variant_id }
//     });

//     if (existingItem) {
//       // If item exists, update the quantity
//       existingItem.quantity += quantity;
//       await existingItem.save();
//       return res.status(200).json({
//         message: 'Cart item quantity updated',
//         cartItemId: existingItem.cart_item_id,
//         updatedQuantity: existingItem.quantity
//       });
//     }

//     // Create new item if it doesn't exist
//     const newItem = await CartItem.create({ cart_id, product_id, variant_id, quantity });
//     res.status(201).json({
//       message: 'Item added to cart',
//       cartItemId: newItem.cart_item_id,
//       cartItem: newItem
//     });

//   } catch (error) {
//     console.error('Error adding item to cart:', error.message);
//     res.status(500).json({ error: 'Database error', details: error.message });
//   }
// };
// 1. Add Item to Cart (Merge if exists)
exports.addItem = async (req, res) => {
  try {
    const { cart_id, product_id, variant_id, quantity } = req.body;
    console.log("Received cart_id:", cart_id);


    if (!cart_id || !product_id || quantity === undefined) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Check if item already exists in the cart
    const existingItem = await CartItem.findOne({
      where: { cart_id, product_id, variant_id },
    });

    if (existingItem) {
      // If the item already exists, update its quantity
      existingItem.quantity += quantity;
      await existingItem.save();
      return res.status(200).json({
        message: 'Cart item quantity updated',
        cartItemId: existingItem.cart_item_id,
      });
    }

    // If item doesn't exist, create a new one
    const newItem = await CartItem.create({ cart_id, product_id, variant_id, quantity });
    res.status(201).json({ message: 'Item added to cart', cartItemId: newItem.cart_item_id });
  } catch (error) {
    console.error('Error adding item to cart:', error.message);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};

// 2. Get All Items in a Cart (with product and variant info)
exports.getCartItems = async (req, res) => {
  try {
    const { cart_id } = req.params;

    const items = await CartItem.findAll({
      where: { cart_id },
      include: [
        {
          model: ProductDetails,
          attributes: ['product_id', 'product_name', 'price', 'description']
        },
        {
          model: ProductVariant,
          attributes: ['variant_id', 'variant_name', 'additional_price']
        }
      ]
    });

    if (!items || items.length === 0) {
      return res.status(404).json({ error: 'No items found in the cart' });
    }

    res.status(200).json(items);
  } catch (error) {
    console.error('Error fetching cart items:', error.message);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};

// 3. Update Quantity of a Cart Item
exports.updateCartItemQuantity = async (req, res) => {
  try {
    const { cart_item_id } = req.params;
    const { quantity } = req.body;

    if (!quantity || quantity <= 0) {
      return res.status(400).json({ error: 'Invalid quantity value' });
    }

    // Fetch the cart item
    const cartItem = await CartItem.findByPk(cart_item_id);
    if (!cartItem) {
      return res.status(404).json({ error: 'Cart item not found' });
    }

    // Check stock availability
    const product = await ProductDetails.findByPk(cartItem.product_id);
    const variant = cartItem.variant_id ? await ProductVariant.findByPk(cartItem.variant_id) : null;
    const availableStock = variant ? variant.stock_quantity : product.stock_quantity;

    if (quantity > availableStock) {
      return res.status(400).json({ error: `Not enough stock. Available: ${availableStock}` });
    }

    // Update the cart item
    cartItem.quantity = quantity;
    await cartItem.save();

    res.status(200).json({ message: 'Cart item quantity updated', updatedQuantity: cartItem.quantity });
  } catch (error) {
    console.error('Error updating cart item quantity:', error.message);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};

// 4. Delete Individual Cart Item
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

// 5. Clear Entire Cart
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
