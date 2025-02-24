const db = require('../config/db');

const Product = {
  create: (name, description, price, category_id, stock, callback) => {
    const query = 'INSERT INTO products (name, description, price, category_id, stock) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [name, description, price, category_id, stock], callback);
  },

  getAll: (callback) => {
    const query = 'SELECT * FROM products';
    db.query(query, callback);
  },

  getByCategory: (category_id, callback) => {
    const query = 'SELECT * FROM products WHERE category_id = ?';
    db.query(query, [category_id], callback);
  },

  getById: (id, callback) => {
    const query = 'SELECT * FROM products WHERE id = ?';
    db.query(query, [id], callback);
  },
};

module.exports = Product;
