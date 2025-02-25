const Department = require('../models/department');

// Get all departments
exports.getAll = (req, res) => {
  Department.getAll((err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results);
    }
  });
};

// Get a department by ID
exports.getById = (req, res) => {
  Department.getById(req.params.id, (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (result.length === 0) {
      res.status(404).json({ message: 'Department not found' });
    } else {
      res.json(result[0]);
    }
  });
};

// Create a new department
exports.create = (req, res) => {
  console.log("Request Body:", req.body); // Debugging log

  const { department_name } = req.body;
  if (!department_name) {
    return res.status(400).json({ error: 'Department name is required' });
  }

  Department.create({ department_name }, (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(201).json({ id: result.insertId, department_name });
    }
  });
};


// Update an existing department
exports.update = (req, res) => {
  const { department_name } = req.body;
  if (!department_name) {
    return res.status(400).json({ error: 'Department name is required' });
  }

  Department.update(req.params.id, { department_name }, (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (result.affectedRows === 0) {
      res.status(404).json({ message: 'Department not found' });
    } else {
      res.json({ message: 'Department updated successfully' });
    }
  });
};

// Delete a department
exports.delete = (req, res) => {
  Department.delete(req.params.id, (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (result.affectedRows === 0) {
      res.status(404).json({ message: 'Department not found' });
    } else {
      res.json({ message: 'Department deleted successfully' });
    }
  });
};

