const ProductDetails = require('../models/ProductDetails');

exports.getAllProducts = async (req, res) => {
    try {
        const products = await ProductDetails.getAllProducts();
        res.json(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ error: 'Database error', details: error.message });
    }
};

exports.getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await ProductDetails.getProductById(id);

        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        res.json(product);
    } catch (error) {
        console.error("Error fetching product:", error);
        res.status(500).json({ error: 'Database error', details: error.message });
    }
};

exports.createProduct = async (req, res) => {
    try {
        console.log("Received Request Body:", req.body);

        const { product_name, description, price, stock_quantity } = req.body;

        if (!product_name || !price || !stock_quantity) {
            return res.status(400).json({ error: 'product_name, price, and stock_quantity are required' });
        }

        const result = await ProductDetails.createProduct(product_name, description, price, stock_quantity);
        res.status(201).json({ message: 'Product created successfully', product_id: result.product_id });
    } catch (error) {
        console.error("Database Error:", error);
        res.status(500).json({ error: 'Database error', details: error.message });
    }
};

exports.updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { product_name, description, price, stock_quantity } = req.body;

        if (!product_name || !price || !stock_quantity) {
            return res.status(400).json({ error: 'product_name, price, and stock_quantity are required' });
        }

        const updatedRows = await ProductDetails.updateProduct(id, product_name, description, price, stock_quantity);

        if (updatedRows === 0) {
            return res.status(404).json({ error: 'Product not found or no changes made' });
        }

        res.json({ message: 'Product updated successfully' });
    } catch (error) {
        console.error("Database Error:", error);
        res.status(500).json({ error: 'Database error', details: error.message });
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedRows = await ProductDetails.deleteProduct(id);

        if (deletedRows === 0) {
            return res.status(404).json({ error: 'Product not found' });
        }

        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        console.error("Database Error:", error);
        res.status(500).json({ error: 'Database error', details: error.message });
    }
};
