const { BookReview } = require("../mongoDbModels/BookReview.js");

const getBookReviewsByBookId = async (bookId) => {
  const result = await BookReview.find({ book_id: bookId });
  return result;
};

const createBookReview = async (bookId, payload) => {
  const newReview = new BookReview({ ...payload, book_id: bookId });
  await newReview.save();
  return newReview;
};

module.exports = { getBookReviewsByBookId, createBookReview };
