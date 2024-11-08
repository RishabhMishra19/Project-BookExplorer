const {
  createAuthorReview,
  getAuthorReviewsByAuthorId,
} = require("../services/AuthorReviewService.js");
const {
  createAuthor,
  deleteAuthor,
  getAuthorById,
  getAuthors,
  updateAuthor,
} = require("../services/AuthorService.js");
const {
  createBookReview,
  getBookReviewsByBookId,
} = require("../services/BookReviewService.js");
const {
  createBook,
  deleteBook,
  getBookById,
  getBooks,
  getBooksByAuthorId,
  updateBook,
} = require("../services/BookService.js");
const { roundToClosestValue } = require("../utils/genericUtils.js");

const resolvers = {
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
    reviews: async (parent) => {
      return await getBookReviewsByBookId(parent.id);
    },
    avg_rating: async (parent) => {
      const reviews = await getBookReviewsByBookId(parent.id);
      const totalRating = reviews.reduce((prev, cur) => prev + cur.rating, 0);
      const totalReviews = reviews.length;
      return roundToClosestValue(totalRating / totalReviews);
    },
    total_reviews: async (parent) => {
      const reviews = await getBookReviewsByBookId(parent.id);
      return reviews.length;
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
    reviews: async (parent) => {
      return await getAuthorReviewsByAuthorId(parent.id);
    },
    avg_rating: async (parent) => {
      const reviews = await getAuthorReviewsByAuthorId(parent.id);
      const totalRating = reviews.reduce((prev, cur) => prev + cur.rating, 0);
      const totalReviews = reviews.length;
      return roundToClosestValue(totalRating / totalReviews);
    },
    total_reviews: async (parent) => {
      const reviews = await getAuthorReviewsByAuthorId(parent.id);
      return reviews.length;
    },
  },
  AuthorReview: {
    author: (parent, _, ctx) => {
      return ctx.authorLoader.load(parent.author_id);
    },
  },
};

module.exports = { resolvers };
