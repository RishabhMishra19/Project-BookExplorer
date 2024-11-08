const { AuthorReview } = require("../mongoDbModels/AuthorReview.js");

const getAuthorReviewsByAuthorId = async (authorId) => {
  const result = await AuthorReview.find({ author_id: authorId });
  return result;
};

const createAuthorReview = async (authorId, payload) => {
  const newReview = new AuthorReview({ ...payload, author_id: authorId });
  await newReview.save();
  return newReview;
};

module.exports = { getAuthorReviewsByAuthorId, createAuthorReview };
