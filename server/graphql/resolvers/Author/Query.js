const authorService = require("../../../services/AuthorService");

module.exports = {
    getAuthors: (_, { filters, pagination }) => {
        return authorService.getAuthors(filters, pagination);
    },
    getAuthorById: (_, { id }) => {
        return authorService.getAuthorById(id);
    },
}