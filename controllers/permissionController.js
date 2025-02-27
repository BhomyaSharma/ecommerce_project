const Permission = require('../models/permissions');

// Get all permissions
exports.getAll = (req, res) => {
  Permission.getAll((err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results);
    }
  });
};

// Get a permission by ID
exports.getById = (req, res) => {
  Permission.getById(req.params.id, (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (result.length === 0) {
      res.status(404).json({ message: 'Permission not found' });
    } else {
      res.json(result[0]);
    }
  });
};

// Create a new permission
exports.create = (req, res) => {
  const { permission_name } = req.body;
  if (!permission_name) return res.status(400).json({ error: 'Permission name is required' });

  Permission.create({ permission_name }, (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(201).json({ id: result.insertId, permission_name });
    }
  });
};

// Update an existing permission
exports.update = (req, res) => {
  const { permission_name } = req.body;
  if (!permission_name) return res.status(400).json({ error: 'Permission name is required' });

  Permission.update(req.params.id, { permission_name }, (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (result.affectedRows === 0) {
      res.status(404).json({ message: 'Permission not found' });
    } else {
      res.json({ message: 'Permission updated successfully' });
    }
  });
};

// Delete a permission
exports.delete = (req, res) => {
  Permission.delete(req.params.id, (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (result.affectedRows === 0) {
      res.status(404).json({ message: 'Permission not found' });
    } else {
      res.json({ message: 'Permission deleted successfully' });
    }
  });
};
