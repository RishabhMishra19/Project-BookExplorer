import { BookReviewData } from "../constants/BookReviewData.js";

const getBookReviewsByBookId = (bookId) => {
  console.log({ bookId });
  return BookReviewData.filter(
    (sReview) => parseInt(bookId) === sReview.book_id
  );
};

const createBookReview = (bookId, payload) => {
  const newBookReview = {
    id: BookReviewData.length + 1,
    created_at: new Date().toISOString(),
    book_id: parseInt(bookId),
    ...payload,
  };
  BookReviewData.push(newBookReview);
  return newBookReview;
};

export { getBookReviewsByBookId, createBookReview };
