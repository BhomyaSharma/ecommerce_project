const db = require('../config/db'); // Ensure your db.js exports a promise-based pool

const Category = {
  // Create a new category
  create: (name, description) => {
    return db.execute(
      'INSERT INTO categories (name, description) VALUES (?, ?)',
      [name, description]
    );
  },

  // Get all categories
  getAll: () => {
    return db.execute('SELECT * FROM categories');
  },

  // Get a category by ID
  getById: (id) => {
    return db.execute('SELECT * FROM categories WHERE id = ?', [id]);
  },

  // Get a category by name (for duplicate check)
  getByName: (name) => {
    return db.execute('SELECT * FROM categories WHERE name = ?', [name]);
  },

  // Update a category
  update: (id, name, description) => {
    return db.execute(
      'UPDATE categories SET name = ?, description = ? WHERE id = ?',
      [name, description, id]
    );
  },

  // Delete a category
  delete: (id) => {
    return db.execute('DELETE FROM categories WHERE id = ?', [id]);
  }
};

module.exports = Category;
