import DataLoader from "dataloader";
import { getAuthorsByIds } from "../services/AuthorService.js";
import { getBooksByIds } from "../services/BookService.js";

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

export { authorLoader, bookLoader };
