const Designation = require('../models/designation');

// Get all designations
exports.getAll = (req, res) => {
  Designation.getAll((err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results);
    }
  });
};

// Get a designation by ID
exports.getById = (req, res) => {
  Designation.getById(req.params.id, (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (result.length === 0) {
      res.status(404).json({ message: 'Designation not found' });
    } else {
      res.json(result[0]);
    }
  });
};

// Create a new designation
exports.create = (req, res) => {
  const { designation_name } = req.body;
  if (!designation_name) return res.status(400).json({ error: 'Designation name is required' });

  Designation.create({ designation_name }, (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(201).json({ id: result.insertId, designation_name });
    }
  });
};

// Update an existing designation
exports.update = (req, res) => {
  const { designation_name } = req.body;
  if (!designation_name) return res.status(400).json({ error: 'Designation name is required' });

  Designation.update(req.params.id, { designation_name }, (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (result.affectedRows === 0) {
      res.status(404).json({ message: 'Designation not found' });
    } else {
      res.json({ message: 'Designation updated successfully' });
    }
  });
};

// Delete a designation
exports.delete = (req, res) => {
  Designation.delete(req.params.id, (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (result.affectedRows === 0) {
      res.status(404).json({ message: 'Designation not found' });
    } else {
      res.json({ message: 'Designation deleted successfully' });
    }
  });
};
