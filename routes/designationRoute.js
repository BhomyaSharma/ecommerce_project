const express = require('express');
const router = express.Router();
const designationController = require('../controllers/designationController');

// Get all designations
router.get('/', designationController.getAll);

// Get designation by ID
router.get('/:id', designationController.getById);

// Create a new designation
router.post('/', designationController.create);

// Update a designation
router.put('/:id', designationController.update);

// Delete a designation
router.delete('/:id', designationController.delete);

module.exports = router;
