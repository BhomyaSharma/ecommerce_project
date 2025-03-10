const Review = require('../models/Review');

exports.createReview = async (req, res) => {
  try {
    const { product_id, user_id, rating, review_text } = req.body;
    if (!product_id || !user_id || !rating) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    console.log("Received Request Body:", req.body);
    // Create a new review using Sequelize's create() method
    const newReview = await Review.create({ 
      product_id, 
      user_id, 
      rating, 
      review_text: review_text || '' 
    });
    res.status(201).json({ message: 'Review created', reviewId: newReview.review_id });
  } catch (error) {
    console.error('Error creating review:', error.message);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};

exports.getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.findAll();
    res.status(200).json(reviews);
  } catch (error) {
    console.error('Error fetching reviews:', error.message);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};

exports.getReviewsByProductId = async (req, res) => {
  try {
    const { product_id } = req.params;
    const reviews = await Review.findAll({
      where: { product_id },
      order: [['created_at', 'DESC']]
    });
    res.status(200).json(reviews);
  } catch (error) {
    console.error('Error fetching product reviews:', error.message);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};

exports.getReviewById = async (req, res) => {
  try {
    const { review_id } = req.params;
    const review = await Review.findByPk(review_id);
    if (!review) {
      return res.status(404).json({ error: 'Review not found' });
    }
    res.status(200).json(review);
  } catch (error) {
    console.error('Error fetching review:', error.message);
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
    // Update the review using Sequelize's update() method.
    const [updatedCount] = await Review.update(
      { rating, review_text },
      { where: { review_id } }
    );
    if (updatedCount === 0) {
      return res.status(404).json({ error: 'Review not found' });
    }
    res.status(200).json({ message: 'Review updated' });
  } catch (error) {
    console.error('Error updating review:', error.message);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};

exports.deleteReview = async (req, res) => {
  try {
    const { review_id } = req.params;
    const deletedCount = await Review.destroy({ where: { review_id } });
    if (deletedCount === 0) {
      return res.status(404).json({ error: 'Review not found' });
    }
    res.status(200).json({ message: 'Review deleted' });
  } catch (error) {
    console.error('Error deleting review:', error.message);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};
