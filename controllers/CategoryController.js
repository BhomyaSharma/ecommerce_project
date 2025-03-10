const Category = require('../models/Category');

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.status(200).json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error.message);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};

exports.getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findByPk(id);
    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }
    res.status(200).json(category);
  } catch (error) {
    console.error('Error fetching category:', error.message);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};

exports.createCategory = async (req, res) => {
  try {
    const { name, description } = req.body;
    if (!name || !description) {
      return res.status(400).json({ error: 'Name and description are required' });
    }
    // Check for duplicate category by name
    const existing = await Category.findOne({ where: { name } });
    if (existing) {
      return res.status(409).json({ error: 'Category already exists' });
    }
    const newCategory = await Category.create({ name, description });
    res.status(201).json({ message: 'Category created successfully', categoryId: newCategory.id });
  } catch (error) {
    console.error('Error creating category:', error.message);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;
    if (!name || !description) {
      return res.status(400).json({ error: 'Name and description are required' });
    }
    const [affectedRows] = await Category.update({ name, description }, { where: { id } });
    if (affectedRows === 0) {
      return res.status(404).json({ error: 'Category not found' });
    }
    res.status(200).json({ message: 'Category updated successfully' });
  } catch (error) {
    console.error('Error updating category:', error.message);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Category.destroy({ where: { id } });
    if (deleted === 0) {
      return res.status(404).json({ error: 'Category not found' });
    }
    res.status(200).json({ message: 'Category deleted successfully' });
  } catch (error) {
    console.error('Error deleting category:', error.message);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};
