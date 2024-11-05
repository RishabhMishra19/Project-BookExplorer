import { AuthorData } from "../constants/AuthorData.js";
import {
  areDatesEqual,
  removeSingleElmInPlaceByIdx,
} from "../utils/genericUtils.js";

const getAuthors = (filters, pagination) => {
  const skip = parseInt(pagination.skip ?? 0);
  const limit = parseInt(pagination.limit ?? 0);
  const filteredData = AuthorData.filter((sAuthor) => {
    if (filters["name"]) {
      if (!sAuthor.name.toLowerCase().includes(filters["name"].toLowerCase())) {
        return false;
      }
    }
    if (filters["born_date"]) {
      if (
        new Date(sAuthor.born_date).getFullYear().toString() !==
        filters["born_date"]
      ) {
        return false;
      }
    }
    return true;
  });
  const paginatedData = filteredData.slice(skip * limit, (skip + 1) * limit);
  return paginatedData;
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

export {
  getAuthors,
  getAuthorById,
  getAuthorsByIds,
  createAuthor,
  updateAuthor,
  deleteAuthor,
};
