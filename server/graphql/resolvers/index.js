const BookResolvers = require('./Book/index.js');
const AuthorResolvers = require('./Author/index.js');
const AuthorReviewResolvers = require('./AuthorReview/index.js');
const BookReviewResolvers = require('./BookReview/index.js');

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
