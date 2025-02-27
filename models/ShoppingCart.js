const db = require('../config/db'); // This should be a promise-based pool

const ShoppingCart = {
  // Create a new shopping cart for a user (with user validation)
  createCart: async (user_id) => {
    // Check if the user exists
    const [userRows] = await db.query('SELECT id FROM users WHERE id = ?', [user_id]);
    if (userRows.length === 0) {
      throw new Error('User does not exist');
    }
    // Insert into shopping_cart table
    const [result] = await db.query('INSERT INTO shopping_cart (user_id) VALUES (?)', [user_id]);
    return result;
  },

  // Get all shopping carts
  getAllCarts: async () => {
    const [rows] = await db.query('SELECT * FROM shopping_cart');
    return rows;
  },

  // Get a shopping cart by user ID
  getCartByUserId: async (user_id) => {
    const [rows] = await db.query('SELECT * FROM shopping_cart WHERE user_id = ?', [user_id]);
    return rows;
  },

  // Get a shopping cart by cart ID
  getCartById: async (cart_id) => {
    const [rows] = await db.query('SELECT * FROM shopping_cart WHERE cart_id = ?', [cart_id]);
    return rows[0]; // Return a single object (or undefined if not found)
  },

  // Delete a shopping cart by cart ID
  deleteCart: async (cart_id) => {
    const [result] = await db.query('DELETE FROM shopping_cart WHERE cart_id = ?', [cart_id]);
    return result;
  }
};

module.exports = ShoppingCart;
