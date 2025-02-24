const db = require('../config/db');

const Category = {
  create: (name, description, callback) => {
    const query = 'INSERT INTO categories (name, description) VALUES (?, ?)';
    db.query(query, [name, description], callback);
  },

  getAll: (callback) => {
    const query = 'SELECT * FROM categories';
    db.query(query, callback);
  },

  getById: (id, callback) => {
    const query = 'SELECT * FROM categories WHERE id = ?';
    db.query(query, [id], callback);
  },
};

module.exports = Category;
