const authorReviewService = require("../services/AuthorReviewService.js");
const authorService = require("../services/AuthorService.js");
const bookReviewService = require("../services/BookReviewService.js");
const bookService = require("../services/BookService.js");
const genericUtils = require("../utils/genericUtils.js");
const BookResolvers = require('./resolvers/Book/index.js');
const AuthorResolvers = require('./resolvers/Author/index.js');
const AuthorReviewResolvers = require('./resolvers/AuthorReview/index.js');
const BookReviewResolvers = require('./resolvers/BookReview/index.js');

const resolvers = {
  Query: {
    ...AuthorResolvers.Query,
    ...BookResolvers.Query
  },
  Mutation: {
    ...AuthorResolvers.Mutation,
    ...BookReviewResolvers.Mutation,
    ...BookResolvers.Mutation,
    ...AuthorReviewResolvers.Mutation,
  },
  ...BookResolvers.Resolver,
  ...BookReviewResolvers.Resolver,
  ...AuthorResolvers.Resolver,
  ...AuthorReviewResolvers.Resolver,
};

module.exports = { resolvers };
