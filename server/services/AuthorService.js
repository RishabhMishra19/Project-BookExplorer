import { AuthorData } from "../constants/AuthorData.js";
import { removeSingleElmInPlaceByIdx } from "../utils/ArrayUtils.js";

const getAuthors = () => {
  return AuthorData;
};

const getAuthorById = ({ id }) => {
  return AuthorData.find((sAuthor) => sAuthor.id === parseInt(id));
};

const getAuthorsByIds = ({ ids }) => {
  const intIds = ids.map((id) => {
    return parseInt(id);
  });
  return AuthorData.filter((sAuthor) => intIds.includes(sAuthor.id));
};

const createAuthor = (payload) => {
  console.log({ payloadll: payload });
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
