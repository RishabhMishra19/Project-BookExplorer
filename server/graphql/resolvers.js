import {
  createAuthorReview,
  getAuthorReviewsByAuthorId,
} from "../services/AuthorReviewService.js";
import {
  createAuthor,
  deleteAuthor,
  getAuthorById,
  getAuthors,
  updateAuthor,
} from "../services/AuthorService.js";
import {
  createBookReview,
  getBookReviewsByBookId,
} from "../services/BookReviewService.js";
import {
  createBook,
  deleteBook,
  getBookById,
  getBooks,
  getBooksByAuthorId,
  updateBook,
} from "../services/BookService.js";
import { roundToClosestValue } from "../utils/genericUtils.js";

export const resolvers = {
  Query: {
    getBooks: (_, { filters, pagination }) => {
      return getBooks(filters, pagination);
    },
    getBookById: (_, { id }) => {
      return getBookById(id);
    },
    getAuthors: (_, { filters, pagination }) => {
      return getAuthors(filters, pagination);
    },
    getAuthorById: (_, { id }) => {
      return getAuthorById(id);
    },
  },
  Mutation: {
    createBook: (_, { payload }) => {
      return createBook(payload);
    },
    updateBook: (_, { id, payload }) => {
      return updateBook(id, payload);
    },
    deleteBook: (_, { id }) => {
      return deleteBook(id);
    },
    createBookReview: (_, { bookId, payload }) => {
      return createBookReview(bookId, payload);
    },
    createAuthor: (_, { payload }) => {
      return createAuthor(payload);
    },
    updateAuthor: (_, { id, payload }) => {
      return updateAuthor(id, payload);
    },
    deleteAuthor: (_, { id }) => {
      return deleteAuthor(id);
    },
    createAuthorReview: (_, { authorId, payload }) => {
      return createAuthorReview(authorId, payload);
    },
  },
  Book: {
    author: (parent, _, ctx) => {
      return ctx.authorLoader.load(parent.author_id);
    },
    reviews: (parent) => {
      return getBookReviewsByBookId(parent.id);
    },
    avg_rating: (parent) => {
      const reviews = getBookReviewsByBookId(parent.id);
      const totalRating = reviews.reduce((prev, cur) => prev + cur.rating, 0);
      const totalReviews = reviews.length;
      return roundToClosestValue(totalRating / totalReviews);
    },
    total_reviews: (parent) => {
      return getBookReviewsByBookId(parent.id).length;
    },
  },
  BookReview: {
    book: (parent, _, ctx) => {
      return ctx.bookLoader.load(parent.book_id);
    },
  },
  Author: {
    books: (parent) => {
      return getBooksByAuthorId(parent.id);
    },
    reviews: (parent) => {
      return getAuthorReviewsByAuthorId(parent.id);
    },
    avg_rating: (parent) => {
      const reviews = getAuthorReviewsByAuthorId(parent.id);
      const totalRating = reviews.reduce((prev, cur) => prev + cur.rating, 0);
      const totalReviews = reviews.length;
      return roundToClosestValue(totalRating / totalReviews);
    },
    total_reviews: (parent) => {
      return getAuthorReviewsByAuthorId(parent.id).length;
    },
  },
  AuthorReview: {
    author: (parent, _, ctx) => {
      return ctx.authorLoader.load(parent.author_id);
    },
  },
};
