module.exports = {
    BookReview: {
        book: (parent, _, ctx) => {
            return ctx.bookLoader.load(parent.book_id);
        },
    }
}