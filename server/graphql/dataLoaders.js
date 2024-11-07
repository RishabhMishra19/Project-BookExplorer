const DataLoader = require("dataloader");
const { getAuthorsByIds } = require("../services/AuthorService.js");
const { getBooksByIds } = require("../services/BookService.js");

const authorLoader = new DataLoader(async (ids) => {
  const authors = getAuthorsByIds({ ids });
  const authorMap = {};
  authors.forEach((author) => {
    authorMap[author.id] = author;
  });
  return ids.map((id) => authorMap[id]);
});

const bookLoader = new DataLoader(async (ids) => {
  const books = getBooksByIds({ ids });
  const bookMap = {};
  books.forEach((book) => {
    bookMap[book.id] = book;
  });
  return ids.map((id) => bookMap[id]);
});

module.exports = { authorLoader, bookLoader };
