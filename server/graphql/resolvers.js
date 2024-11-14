const authorReviewService = require("../services/AuthorReviewService.js");
const authorService = require("../services/AuthorService.js");
const bookReviewService = require("../services/BookReviewService.js");
const bookService = require("../services/BookService.js");
const genericUtils = require("../utils/genericUtils.js");

const resolvers = {
  Query: {
    getBooks: (_, { filters, pagination }) => {
      return bookService.getBooks(filters, pagination);
    },
    getBookById: (_, { id }) => {
      return bookService.getBookById(id);
    },
    getAuthors: (_, { filters, pagination }) => {
      return authorService.getAuthors(filters, pagination);
    },
    getAuthorById: (_, { id }) => {
      return authorService.getAuthorById(id);
    },
  },
  Mutation: {
    createBook: (_, { payload }) => {
      return bookService.createBook(payload);
    },
    updateBook: (_, { id, payload }) => {
      return bookService.updateBook(id, payload);
    },
    deleteBook: (_, { id }) => {
      return bookService.deleteBook(id);
    },
    createBookReview: (_, { bookId, payload }) => {
      return bookReviewService.createBookReview(bookId, payload);
    },
    createAuthor: (_, { payload }) => {
      return authorService.createAuthor(payload);
    },
    updateAuthor: (_, { id, payload }) => {
      return authorService.updateAuthor(id, payload);
    },
    deleteAuthor: (_, { id }) => {
      return authorService.deleteAuthor(id);
    },
    createAuthorReview: (_, { authorId, payload }) => {
      return authorReviewService.createAuthorReview(authorId, payload);
    },
  },
  Book: {
    author: (parent, _, ctx) => {
      return ctx.authorLoader.load(parent.author_id);
    },
    reviews: async (parent) => {
      return await bookReviewService.getBookReviewsByBookId(parent.id);
    },
    avg_rating: async (parent) => {
      const reviews = await bookReviewService.getBookReviewsByBookId(parent.id);
      const totalRating = reviews.reduce((prev, cur) => prev + cur.rating, 0);
      const totalReviews = reviews.length;
      return genericUtils.roundRatingValueToNearestAllowedRating(
        totalRating / totalReviews
      );
    },
    total_reviews: async (parent) => {
      const reviews = await bookReviewService.getBookReviewsByBookId(parent.id);
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
      return bookService.getBooksByAuthorId(parent.id);
    },
    reviews: async (parent) => {
      return await authorReviewService.getAuthorReviewsByAuthorId(parent.id);
    },
    avg_rating: async (parent) => {
      const reviews = await authorReviewService.getAuthorReviewsByAuthorId(
        parent.id
      );
      const totalRating = reviews.reduce((prev, cur) => prev + cur.rating, 0);
      const totalReviews = reviews.length;
      return genericUtils.roundRatingValueToNearestAllowedRating(
        totalRating / totalReviews
      );
    },
    total_reviews: async (parent) => {
      const reviews = await authorReviewService.getAuthorReviewsByAuthorId(
        parent.id
      );
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
