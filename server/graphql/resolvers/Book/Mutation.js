const bookService = require("../../../services/BookService");

module.exports = {
    createBook: (_, { payload }) => {
        return bookService.createBook(payload);
    },
    updateBook: (_, { id, payload }) => {
        return bookService.updateBook(id, payload);
    },
    deleteBook: (_, { id }) => {
        return bookService.deleteBook(id);
    },
}