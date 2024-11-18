const DataLoader = require("dataloader");
const authorService = require("../services/AuthorService.js");
const bookService = require("../services/BookService.js");

const authorLoader = new DataLoader(async (ids) => {
  const authors = await authorService.getAuthorsByIds({ ids });
  const authorMap = {};
  authors.forEach((author) => {
    authorMap[author.id] = author;
  });
  return ids.map((id) => authorMap[id]);
});

const bookLoader = new DataLoader(async (ids) => {
  const books = await bookService.getBooksByIds({ ids });
  const bookMap = {};
  books.forEach((book) => {
    bookMap[book.id] = book;
  });
  return ids.map((id) => bookMap[id]);
});

module.exports = { authorLoader, bookLoader };
