const { Author, Sequelize } = require("../models/index.js");
const dayjs = require("dayjs");

const getAuthors = async (filters, pagination) => {
  const skip = parseInt(pagination?.skip ?? 0);
  const limit = parseInt(pagination?.limit ?? 0);
  const offset = skip * limit;

  const whereClause = {};

  if (filters?.name) {
    whereClause.name = {
      [Sequelize.Op.iLike]: `%${filters.name}%`,
    };
  }

  if (filters?.born_year) {
    const year = parseInt(filters?.born_year);
    whereClause.born_date = {
      [Sequelize.Op.gte]: new Date(year, 0, 1),
      [Sequelize.Op.lte]: new Date(year, 11, 31),
    };
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

const getAuthorById = async (id) => {
  const result = await Author.findByPk(id);
  return result;
};

const getAuthorsByIds = async ({ ids }) => {
  const result = await Author.findAll({
    where: {
      id: {
        [Sequelize.Op.in]: ids,
      },
    },
  });
  return result;
};

const createAuthor = async (payload) => {
  const newAuthor = await Author.create({
    name: payload.name,
    biography: payload.biography,
    born_date: dayjs(payload.born_date).toISOString(),
  });

  return newAuthor;
};

const updateAuthor = async (id, payload) => {
  try {
    await Author.update(
      {
        name: payload.name,
        biography: payload.biography,
        born_date: dayjs(payload.born_date).toISOString(),
      },
      { where: { id } }
    );
    const updatedAuthor = await Author.findByPk(id);
    return updatedAuthor;
  } catch (error) {
    console.log("updateAuthor error ", error);
  }
};

const deleteAuthor = async (id) => {
  await Author.destroy({
    where: { id },
  });
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
