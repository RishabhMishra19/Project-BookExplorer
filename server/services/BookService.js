const db = require("../models/index.js");
const { DataTypes } = require("sequelize");
const Book = require("../models/Book.js")(db.sequelize, DataTypes);
const dayjs = require("dayjs");
const Sequelize = require("sequelize");

const getBooks = async (filters, pagination) => {
  const skip = parseInt(pagination?.skip ?? 0);
  const limit = parseInt(pagination?.limit ?? 0);
  const offset = skip * limit;

  const whereClause = {};

  if (filters?.title) {
    whereClause.title = {
      [Sequelize.Op.iLike]: `%${filters.title}%`,
    };
  }

  if (filters?.author) {
    whereClause.author_id = {
      [Sequelize.Op.eq]: `%${filters.author}%`,
    };
  }

  if (filters?.published_date) {
    whereClause.published_date = dayjs(filters.published_date).toISOString();
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

const getBookById = async (id) => {
  const result = await Book.findByPk(id);
  return result;
};

const getBooksByAuthorId = async (authorId) => {
  const result = await Book.findAll({
    where: {
      author_id: authorId,
    },
  });
  return result;
};

const getBooksByIds = async ({ ids }) => {
  const result = await Book.findAll({
    where: {
      id: {
        [Sequelize.Op.in]: ids,
      },
    },
  });
  return result;
};

const createBook = async (payload) => {
  const newBook = await Book.create({
    title: payload.title,
    description: payload.description,
    published_date: dayjs(payload.published_date).toISOString(),
    author_id: payload.author_id,
  });
  return newBook;
};

const updateBook = async (id, payload) => {
  try {
    await Book.update(
      {
        title: payload.title,
        description: payload.description,
        published_date: dayjs(payload.published_date).toISOString(),
        author_id: payload.author_id,
      },
      { where: { id } }
    );
    const updatedBook = await Book.findByPk(id);
    return updatedBook;
  } catch (error) {
    console.log("updatedBook error ", error);
  }
};

const deleteBook = async (id) => {
  await Book.destroy({
    where: { id },
  });
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
