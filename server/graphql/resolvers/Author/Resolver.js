const genericUtils = require("../../../utils/genericUtils.js");
const authorReviewService = require("../../../services/AuthorReviewService.js");

module.exports = {
    Author: {
        books: (parent) => {
            return bookService.getBooksByAuthorId(parent.id);
        },
        reviews: async (parent) => {
            return await authorReviewService.getAuthorReviewsByAuthorId(parent.id);
        },
        avg_rating: async (parent) => {
            const reviews = await authorReviewService.getAuthorReviewsByAuthorId(parent.id);
            const totalRating = reviews.reduce((prev, cur) => prev + cur.rating, 0);
            const totalReviews = reviews.length;
            return genericUtils.roundRatingValueToNearestAllowedRating(
                totalRating / totalReviews
            );
        },
        total_reviews: async (parent) => {
            const reviews = await authorReviewService.getAuthorReviewsByAuthorId(parent.id);
            return reviews.length;
        }
    },
}