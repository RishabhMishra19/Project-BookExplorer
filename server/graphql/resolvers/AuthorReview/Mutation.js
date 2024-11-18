const authorReviewService = require("../../../services/AuthorReviewService");

module.exports = {
    createAuthorReview: (_, { authorId, payload }) => {
        return authorReviewService.createAuthorReview(authorId, payload);
    },
}