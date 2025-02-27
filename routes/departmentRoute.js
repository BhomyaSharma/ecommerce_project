const express = require('express');
const router = express.Router();
const departmentController = require('../controllers/departmentController');

// Get all departments
router.get('/', departmentController.getAll);

// Get a department by ID
router.get('/:id', departmentController.getById);

// Create a new department
router.post('/', departmentController.create);

// Update an existing department
router.put('/:id', departmentController.update);

// Delete a department
router.delete('/:id', departmentController.delete);

module.exports = router;
