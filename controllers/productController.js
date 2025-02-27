const Product = require('../models/Product');

const getAll = (req, res) => {
  Product.getAll((err, products) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(products);
  });
};

const getByCategory = (req, res) => {
  const categoryId = req.params.category_id;
  Product.getByCategory(categoryId, (err, products) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(products);
  });
};

const create = (req, res) => {
  const { name, description, price, category_id, stock } = req.body;
  Product.create(name, description, price, category_id, stock, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Product created successfully' });
  });
};

module.exports = { getAll, getByCategory, create };
