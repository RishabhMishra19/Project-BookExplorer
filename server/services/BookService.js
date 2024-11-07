const { AuthorData } = require("../constants/AuthorData.js");
const { BookData } = require("../constants/BookData.js");
const {
  areDatesEqual,
  removeSingleElmInPlaceByIdx,
} = require("../utils/genericUtils.js");

const getBooks = (filters, pagination) => {
  const skip = parseInt(pagination.skip ?? 0);
  const limit = parseInt(pagination.limit ?? 0);
  const filteredData = BookData.filter((sBook) => {
    if (filters["title"]) {
      if (!sBook.title.toLowerCase().includes(filters["title"].toLowerCase())) {
        return false;
      }
    }
    if (filters["author"]) {
      const author = AuthorData.find(
        (sAuthor) => sAuthor.id === sBook.author_id
      );
      if (
        !author?.name.toLowerCase().includes(filters["author"].toLowerCase())
      ) {
        return false;
      }
    }
    if (filters["published_date"]) {
      if (!areDatesEqual(filters["published_date"], sBook.published_date)) {
        return false;
      }
    }
    return true;
  });

  const paginatedData = filteredData.slice(skip * limit, (skip + 1) * limit);
  return paginatedData;
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

module.exports = {
  getBooks,
  getBookById,
  getBooksByAuthorId,
  getBooksByIds,
  createBook,
  updateBook,
  deleteBook,
};
