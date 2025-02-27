const express = require('express');
const router = express.Router();
const pool = require('../config/db'); // Ensure this is MySQL2 promise-based

// ✅ Create a new product
router.post('/', async (req, res) => {
    const { name, description, price, stock, category_id, image_url } = req.body;
    try {
        const query = `
            INSERT INTO products (name, description, price, stock, category_id, image_url)
            VALUES (?, ?, ?, ?, ?, ?)
        `;
        const [result] = await pool.execute(query, [name, description, price, stock, category_id, image_url]);
        res.status(201).json({ message: 'Product created', productId: result.insertId });
    } catch (err) {
        console.error('Error inserting product:', err);
        res.status(500).json({ error: 'Database error' });
    }
});

// ✅ Get all products
router.get('/', async (req, res) => {
    try {
        const [products] = await pool.execute('SELECT * FROM products');
        res.json(products);
    } catch (err) {
        console.error('Error fetching products:', err);
        res.status(500).json({ error: 'Database error' });
    }
});

// ✅ Get a product by ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [products] = await pool.execute('SELECT * FROM products WHERE id = ?', [id]);
        if (products.length === 0) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.json(products[0]);
    } catch (err) {
        console.error('Error fetching product:', err);
        res.status(500).json({ error: 'Database error' });
    }
});

// ✅ Update a product by ID
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, description, price, stock, category_id, image_url } = req.body;
    try {
        const query = `
            UPDATE products
            SET name = ?, description = ?, price = ?, stock = ?, category_id = ?, image_url = ?
            WHERE id = ?
        `;
        const [result] = await pool.execute(query, [name, description, price, stock, category_id, image_url, id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.json({ message: 'Product updated' });
    } catch (err) {
        console.error('Error updating product:', err);
        res.status(500).json({ error: 'Database error' });
    }
});

// ✅ Delete a product by ID
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await pool.execute('DELETE FROM products WHERE id = ?', [id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.json({ message: 'Product deleted' });
    } catch (err) {
        console.error('Error deleting product:', err);
        res.status(500).json({ error: 'Database error' });
    }
});

module.exports = router;

