const db = require('../config/db'); // db should be a promise-based pool

const CartItem = {
  // Create a new cart item
  createItem: async (cart_id, product_id, variant_id, quantity) => {
    const query = `
      INSERT INTO cart_items (cart_id, product_id, variant_id, quantity)
      VALUES (?, ?, ?, ?)
    `;
    const [result] = await db.query(query, [cart_id, product_id, variant_id, quantity]);
    return result;
  },

  // Get all items in a cart by cart_id
  getItemsByCartId: async (cart_id) => {
    const query = `SELECT * FROM cart_items WHERE cart_id = ?`;
    const [rows] = await db.query(query, [cart_id]);
    return rows;
  },

  // Update quantity of a cart item by cart_item_id
  updateQuantity: async (cart_item_id, quantity) => {
    const query = `UPDATE cart_items SET quantity = ? WHERE cart_item_id = ?`;
    const [result] = await db.query(query, [quantity, cart_item_id]);
    return result;
  },

  // Delete a specific cart item by cart_item_id
  deleteItem: async (cart_item_id) => {
    const query = `DELETE FROM cart_items WHERE cart_item_id = ?`;
    const [result] = await db.query(query, [cart_item_id]);
    return result;
  },

  // Clear all items from a cart by cart_id
  clearCart: async (cart_id) => {
    const query = `DELETE FROM cart_items WHERE cart_id = ?`;
    const [result] = await db.query(query, [cart_id]);
    return result;
  }
};

module.exports = CartItem;