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

export const resolvers = {
  Query: {
    getBooks,
    getBookById: (_, { id }) => {
      return getBookById(id);
    },
    getAuthors,
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
  },
  AuthorReview: {
    author: (parent, _, ctx) => {
      return ctx.authorLoader.load(parent.author_id);
    },
  },
};
