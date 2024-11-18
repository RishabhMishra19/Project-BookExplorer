module.exports = {
    AuthorReview: {
        author: (parent, _, ctx) => {
            return ctx.authorLoader.load(parent.author_id);
        }
    },
}