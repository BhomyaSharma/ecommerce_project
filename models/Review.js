const db = require('../config/db'); // db is a promise-based pool

const Review = {
  // Create a new review
  createReview: async (product_id, user_id, rating, review_text) => {
    const query = `
      INSERT INTO reviews (product_id, user_id, rating, review_text)
      VALUES (?, ?, ?, ?)
    `;
    const [result] = await db.query(query, [product_id, user_id, rating, review_text]);
    return result;
  },

  // Get all reviews
  getAllReviews: async () => {
    const query = `SELECT * FROM reviews`;
    const [rows] = await db.query(query);
    return rows;
  },

  // Get reviews for a specific product
  getReviewsByProductId: async (product_id) => {
    const query = `SELECT * FROM reviews WHERE product_id = ? ORDER BY created_at DESC`;
    const [rows] = await db.query(query, [product_id]);
    return rows;
  },

  // Get a specific review by ID
  getReviewById: async (review_id) => {
    const query = `SELECT * FROM reviews WHERE review_id = ?`;
    const [rows] = await db.query(query, [review_id]);
    return rows[0]; // return single review
  },

  // Update a review
  updateReview: async (review_id, rating, review_text) => {
    const query = `
      UPDATE reviews 
      SET rating = ?, review_text = ?
      WHERE review_id = ?
    `;
    const [result] = await db.query(query, [rating, review_text, review_id]);
    return result;
  },

  // Delete a review
  deleteReview: async (review_id) => {
    const query = `DELETE FROM reviews WHERE review_id = ?`;
    const [result] = await db.query(query, [review_id]);
    return result;
  }
};

module.exports = Review;
