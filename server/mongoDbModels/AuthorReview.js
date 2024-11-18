const mongoose = require("mongoose");

const authorReviewSchema = new mongoose.Schema({
  review: {
    type: String,
    required: false,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  reviewer_email: {
    type: String,
    required: true,
    match: /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  author_id: {
    type: Number,
    required: true,
  },
});

const AuthorReview = mongoose.model("AuthorReview", authorReviewSchema);

module.exports = { AuthorReview };
