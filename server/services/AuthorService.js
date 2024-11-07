const { AuthorData } = require("../constants/AuthorData.js");
const db = require("../models/index.js");
const { removeSingleElmInPlaceByIdx } = require("../utils/genericUtils.js");
const { DataTypes } = require("sequelize");
const Author = require("../models/Author.js")(db.sequelize, DataTypes);

const getAuthors = async (filters, pagination) => {
  const skip = parseInt(pagination.skip ?? 0);
  const limit = parseInt(pagination.limit ?? 0);
  const offset = skip * limit;

  const whereClause = {};

  if (filters.name) {
    whereClause.name = {
      [Sequelize.Op.like]: `%${filters.name}%`,
    };
  }

  if (filters.born_date) {
    whereClause.born_date = filters.born_date;
  }

  const result = await Author.findAndCountAll({
    where: whereClause,
    limit,
    offset,
    order: [["name", "ASC"]],
  });

  return {
    authors: result.rows,
    totalCount: result.count,
    totalPages: Math.ceil((result.count + limit - 1) / limit),
    currentPage: skip + 1,
  };
};

const getAuthorById = (id) => {
  return AuthorData.find((sAuthor) => sAuthor.id === parseInt(id));
};

const getAuthorsByIds = ({ ids }) => {
  const intIds = ids.map((id) => {
    return parseInt(id);
  });
  return AuthorData.filter((sAuthor) => intIds.includes(sAuthor.id));
};

const createAuthor = (payload) => {
  const newAuthor = {
    id: AuthorData.length + 1,
    ...payload,
  };
  AuthorData.push(newAuthor);
  return newAuthor;
};

const updateAuthor = (id, payload) => {
  const idx = AuthorData.findIndex((sAuthor) => sAuthor.id === parseInt(id));
  AuthorData[idx] = {
    ...AuthorData[idx],
    ...payload,
  };
  return AuthorData[idx];
};

const deleteAuthor = (id) => {
  const idx = AuthorData.findIndex((sAuthor) => sAuthor.id === parseInt(id));
  removeSingleElmInPlaceByIdx(AuthorData, idx);
  return id;
};

module.exports = {
  getAuthors,
  getAuthorById,
  getAuthorsByIds,
  createAuthor,
  updateAuthor,
  deleteAuthor,
};
