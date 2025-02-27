const Category = require('../models/Category');

exports.getAllCategories = async (req, res) => {
  try {
    const [categories] = await Category.getAll();
    res.status(200).json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};

exports.getCategoryById = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await Category.getById(id);
    if (!result || result.length === 0) {
      return res.status(404).json({ error: 'Category not found' });
    }
    res.status(200).json(result[0]);
  } catch (error) {
    console.error('Error fetching category:', error);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};

exports.createCategory = async (req, res) => {
  const { name, description } = req.body;
  if (!name || !description) {
    return res.status(400).json({ error: 'Name and description are required' });
  }

  try {
    // Check for duplicate category by name
    const [existing] = await Category.getByName(name);
    if (existing.length > 0) {
      return res.status(409).json({ error: 'Category already exists' });
    }
    const [result] = await Category.create(name, description);
    res.status(201).json({ message: 'Category created successfully', categoryId: result.insertId });
  } catch (error) {
    console.error('Error creating category:', error);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};

exports.updateCategory = async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  if (!name || !description) {
    return res.status(400).json({ error: 'Name and description are required' });
  }

  try {
    const [result] = await Category.update(id, name, description);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Category not found' });
    }
    res.status(200).json({ message: 'Category updated successfully' });
  } catch (error) {
    console.error('Error updating category:', error);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};

exports.deleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await Category.delete(id);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Category not found' });
    }
    res.status(200).json({ message: 'Category deleted successfully' });
  } catch (error) {
    console.error('Error deleting category:', error);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};
