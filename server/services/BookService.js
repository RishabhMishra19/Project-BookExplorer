import { BookData } from "../constants/BookData.js";
import { removeSingleElmInPlaceByIdx } from "../utils/ArrayUtils.js";

const getBooks = () => {
  return BookData;
};

const getBookById = (id) => {
  return BookData.find((sBook) => sBook.id === parseInt(id));
};

const getBooksByAuthorId = (authorId) => {
  return BookData.filter((sBook) => sBook.author_id === parseInt(authorId));
};

const getBooksByIds = ({ ids }) => {
  const intIds = ids.map((id) => {
    return parseInt(id);
  });
  return BookData.filter((sBook) => intIds.includes(sBook.id));
};

const createBook = (payload) => {
  const newBook = {
    id: BookData.length + 1,
    ...payload,
  };
  BookData.push(newBook);
  return newBook;
};

const updateBook = (id, payload) => {
  const idx = BookData.findIndex((sBook) => sBook.id === parseInt(id));
  BookData[idx] = {
    ...BookData[idx],
    ...payload,
  };
  return BookData[idx];
};

const deleteBook = (id) => {
  const idx = BookData.findIndex((sBook) => sBook.id === parseInt(id));
  removeSingleElmInPlaceByIdx(BookData, idx);
  return id;
};

export {
  getBooks,
  getBookById,
  getBooksByAuthorId,
  getBooksByIds,
  createBook,
  updateBook,
  deleteBook,
};
