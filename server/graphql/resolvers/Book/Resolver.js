const genericUtils = require("../../../utils/genericUtils.js");
const bookReviewService = require("../../../services/BookReviewService.js");

module.exports = {
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
        }
    },
}