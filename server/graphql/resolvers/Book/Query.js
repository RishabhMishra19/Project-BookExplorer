const bookService = require("../../../services/BookService");

module.exports = {
    getBooks: (_, { filters, pagination }) => {
        return bookService.getBooks(filters, pagination);
    },
    getBookById: (_, { id }) => {
        return bookService.getBookById(id);
    },
}