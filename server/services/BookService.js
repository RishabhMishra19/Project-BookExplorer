const { BookData } = require("../constants/BookData.js");
const db = require("../models/index.js");
const { removeSingleElmInPlaceByIdx } = require("../utils/genericUtils.js");
const { DataTypes } = require("sequelize");
const Book = require("../models/Book.js")(db.sequelize, DataTypes);

const getBooks = async (filters, pagination) => {
  const skip = parseInt(pagination?.skip ?? 0);
  const limit = parseInt(pagination?.limit ?? 0);
  const offset = skip * limit;

  const whereClause = {};

  if (filters?.title) {
    whereClause.title = {
      [Sequelize.Op.like]: `%${filters.title}%`,
    };
  }

  if (filters?.author) {
    whereClause.author_id = {
      [Sequelize.Op.eq]: `%${filters.author}%`,
    };
  }

  if (filters?.published_date) {
    whereClause.published_date = filters.published_date;
  }

  const result = await Book.findAndCountAll({
    where: whereClause,
    limit,
    offset,
    order: [["title", "ASC"]],
  });

  return {
    books: result.rows,
    totalCount: result.count,
    totalPages: Math.ceil((result.count + limit - 1) / limit),
    currentPage: skip + 1,
  };
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
