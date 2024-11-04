import { AuthorReviewData } from "../constants/AuthorReviewData.js";

const getAuthorReviewsByAuthorId = (authorId) => {
  return AuthorReviewData.filter(
    (sReview) => parseInt(authorId) === sReview.author_id
  );
};

const createAuthorReview = (authorId, payload) => {
  const newAuthorReview = {
    id: AuthorReviewData.length + 1,
    created_at: new Date().toISOString(),
    author_id: parseInt(authorId),
    ...payload,
  };
  AuthorReviewData.push(newAuthorReview);
  return newAuthorReview;
};

export { getAuthorReviewsByAuthorId, createAuthorReview };
