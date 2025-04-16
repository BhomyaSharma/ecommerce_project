const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authenticateToken = require('../middleware/auth');

// Public routes
router.post('/register', userController.register);
router.post('/login', userController.login);

// Protected routes
router.get('/dashboard', authenticateToken, (req, res) => {
    res.json({ message: `Welcome user ${req.user.id} to your dashboard` });
});

// ✅ Updated profile route that uses controller logic
router.get('/profile', authenticateToken, userController.getUserProfile);

module.exports = router;
