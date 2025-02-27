const Review = require('../models/Review');

exports.createReview = async (req, res) => {
  try {
    const { product_id, user_id, rating, review_text } = req.body;
    if (!product_id || !user_id || !rating) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    console.log("Received Request Body:", req.body);
    const result = await Review.createReview(product_id, user_id, rating, review_text || '');
    res.status(201).json({ message: 'Review created', reviewId: result.insertId });
  } catch (error) {
    console.error('Error creating review:', error);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};

exports.getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.getAllReviews();
    res.json(reviews);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};

exports.getReviewsByProductId = async (req, res) => {
  try {
    const { product_id } = req.params;
    const reviews = await Review.getReviewsByProductId(product_id);
    res.json(reviews);
  } catch (error) {
    console.error('Error fetching product reviews:', error);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};

exports.getReviewById = async (req, res) => {
  try {
    const { review_id } = req.params;
    const review = await Review.getReviewById(review_id);
    if (!review) return res.status(404).json({ error: 'Review not found' });
    res.json(review);
  } catch (error) {
    console.error('Error fetching review:', error);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};

exports.updateReview = async (req, res) => {
  try {
    const { review_id } = req.params;
    const { rating, review_text } = req.body;
    if (!rating) {
      return res.status(400).json({ error: 'Rating is required' });
    }

    const result = await Review.updateReview(review_id, rating, review_text);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Review not found' });
    }
    res.json({ message: 'Review updated' });
  } catch (error) {
    console.error('Error updating review:', error);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};

exports.deleteReview = async (req, res) => {
  try {
    const { review_id } = req.params;
    const result = await Review.deleteReview(review_id);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Review not found' });
    }
    res.json({ message: 'Review deleted' });
  } catch (error) {
    console.error('Error deleting review:', error);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};
