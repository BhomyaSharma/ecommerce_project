const db = require('../config/db');

const Permission = {
  // Get all permissions
  getAll: (callback) => {
    db.query('SELECT * FROM permissions', callback);
  },

  // Get a permission by ID
  getById: (id, callback) => {
    db.query('SELECT * FROM permissions WHERE permission_id = ?', [id], callback);
  },

  // Create a new permission
  create: (data, callback) => {
    db.query('INSERT INTO permissions (permission_name) VALUES (?)', [data.permission_name], callback);
  },

  // Update an existing permission
  update: (id, data, callback) => {
    db.query('UPDATE permissions SET permission_name = ? WHERE permission_id = ?', [data.permission_name, id], callback);
  },

  // Delete a permission
  delete: (id, callback) => {
    db.query('DELETE FROM permissions WHERE permission_id = ?', [id], callback);
  }
};

module.exports = Permission;
