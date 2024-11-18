const authorService = require("../../../services/AuthorService");

module.exports = {
    createAuthor: (_, { payload }) => {
        return authorService.createAuthor(payload);
    },
    updateAuthor: (_, { id, payload }) => {
        return authorService.updateAuthor(id, payload);
    },
    deleteAuthor: (_, { id }) => {
        return authorService.deleteAuthor(id);
    },
}