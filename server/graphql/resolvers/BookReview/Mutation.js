const bookReviewService = require("../../../services/BookReviewService");

module.exports = {
    createBookReview: (_, { bookId, payload }) => {
        return bookReviewService.createBookReview(bookId, payload);
    }
}