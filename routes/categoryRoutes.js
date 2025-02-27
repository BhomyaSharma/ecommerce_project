const express = require('express');
const router = express.Router();
const CategoryController = require('../controllers/CategoryController');

// Get all categories
router.get('/', CategoryController.getAllCategories);

// Get a category by ID
router.get('/:id', CategoryController.getCategoryById);

// Create a new category
router.post('/', CategoryController.createCategory);

// Update a category
router.put('/:id', CategoryController.updateCategory);

// Delete a category
router.delete('/:id', CategoryController.deleteCategory);

module.exports = router;
