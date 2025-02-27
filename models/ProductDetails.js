const db = require('../config/db'); // This is now a promise-based pool

const ProductDetails = {
    getAllProducts: async () => {
        try {
            const [rows] = await db.query('SELECT * FROM product_details');
            return rows;
        } catch (error) {
            throw error;
        }
    },

    getProductById: async (id) => {
        try {
            const [rows] = await db.query('SELECT * FROM product_details WHERE product_id = ?', [id]);
            return rows[0]; // Return the first record
        } catch (error) {
            throw error;
        }
    },

    createProduct: async (product_name, description, price, stock_quantity) => {
        try {
            const [result] = await db.query(
                'INSERT INTO product_details (product_name, description, price, stock_quantity) VALUES (?, ?, ?, ?)',
                [product_name, description, price, stock_quantity]
            );
            return { product_id: result.insertId };
        } catch (error) {
            throw error;
        }
    },

    updateProduct: async (id, product_name, description, price, stock_quantity) => {
        try {
            const [result] = await db.query(
                'UPDATE product_details SET product_name = ?, description = ?, price = ?, stock_quantity = ? WHERE product_id = ?',
                [product_name, description, price, stock_quantity, id]
            );
            return result.affectedRows;
        } catch (error) {
            throw error;
        }
    },

    deleteProduct: async (id) => {
        try {
            const [result] = await db.query('DELETE FROM product_details WHERE product_id = ?', [id]);
            return result.affectedRows;
        } catch (error) {
            throw error;
        }
    }
};

module.exports = ProductDetails;
