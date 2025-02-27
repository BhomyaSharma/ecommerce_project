const express = require('express');
const router = express.Router();
const permissionController = require('../controllers/permissionController');

// Get all permissions
router.get('/', permissionController.getAll);

// Get a single permission by ID
router.get('/:id', permissionController.getById);

// Create a new permission
router.post('/', permissionController.create);

// Update an existing permission
router.put('/:id', permissionController.update);

// Delete a permission
router.delete('/:id', permissionController.delete);

module.exports = router;
