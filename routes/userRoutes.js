const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/auth'); // Middleware for authentication

// Protected route - User Dashboard
router.get('/dashboard', authenticateToken, (req, res) => {
    res.json({ message: `Welcome user ${req.user.id} to your dashboard` });
});

// Get user profile (Example)
router.get('/profile', authenticateToken, (req, res) => {
    res.json({ 
        id: req.user.id, 
        name: req.user.name, 
        email: req.user.email 
    });
});

module.exports = router;
