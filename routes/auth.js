// routes/auth.js

// auth.js
// routes/auth.js
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../config/db'); // Adjust the path as necessary
const router = express.Router();

// Sign-Up Route
router.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert user into the database
        const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
        await db.execute(query, [name, email, hashedPassword]);

        res.status(201).send('User created');
    } catch (err) {
        console.error('Error during user sign-up:', err);
        res.status(500).send('Error saving user');
    }
});

// Login Route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if user exists
        const query = 'SELECT * FROM users WHERE email = ?';
        const [rows] = await db.execute(query, [email]);

        if (rows.length === 0) {
            return res.status(400).send('User not found');
        }

        const user = rows[0];

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).send('Invalid credentials');
        }

        // Generate JWT token
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (err) {
        console.error('Error during user login:', err);
        res.status(500).send('Error logging in');
    }
});

module.exports = router;
