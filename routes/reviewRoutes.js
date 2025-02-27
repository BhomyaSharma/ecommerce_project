const express = require('express');
const router = express.Router();
const ReviewController = require('../controllers/ReviewController');

// Create a new review
router.post('/', ReviewController.createReview);

// Get all reviews
router.get('/', ReviewController.getAllReviews);

// Get all reviews for a specific product
router.get('/product/:product_id', ReviewController.getReviewsByProductId);

// Get a review by ID
router.get('/:review_id', ReviewController.getReviewById);

// Update a review
router.put('/:review_id', ReviewController.updateReview);

// Delete a review
router.delete('/:review_id', ReviewController.deleteReview);

module.exports = router;
