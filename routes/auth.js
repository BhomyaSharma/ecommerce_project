const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('../config/db'); // Adjust the path as necessary
const authenticateToken = require('../middleware/auth'); // Middleware for authentication
const router = express.Router();

// Define secret key manually
const SECRET_KEY = "Bhomya@1234"; // Hardcoded secret key

// 🔹 Sign-Up Route
router.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;

    let connection;
    try {
        connection = await pool.getConnection();

        // Check if email already exists
        const [existingUser] = await connection.execute('SELECT * FROM users WHERE email = ?', [email]);
        if (existingUser.length > 0) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert user into the database
        const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
        await connection.execute(query, [name, email, hashedPassword]);

        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        console.error('Error during user sign-up:', err);
        res.status(500).json({ message: 'Internal server error' });
    } finally {
        if (connection) connection.release();
    }
});

// 🔹 Login Route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    let connection;
    try {
        connection = await pool.getConnection();

        // Check if user exists
        const query = 'SELECT * FROM users WHERE email = ?';
        const [rows] = await connection.execute(query, [email]);

        if (rows.length === 0) {
            return res.status(400).json({ message: 'User not found' });
        }

        const user = rows[0];

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Generate JWT token using manually defined secret key
        const token = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: '1h' });

        res.json({ token });
    } catch (err) {
        console.error('Error during user login:', err);
        res.status(500).json({ message: 'Internal server error' });
    } finally {
        if (connection) connection.release();
    }
});

// 🔹 Protected Route Example (Requires Auth)
router.get('/profile', authenticateToken, async (req, res) => {
    let connection;
    try {
        connection = await pool.getConnection();
        const [user] = await connection.execute('SELECT id, name, email FROM users WHERE id = ?', [req.user.id]);

        if (user.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json(user[0]);
    } catch (err) {
        console.error('Error fetching user profile:', err);
        res.status(500).json({ message: 'Internal server error' });
    } finally {
        if (connection) connection.release();
    }
});

module.exports = router;
