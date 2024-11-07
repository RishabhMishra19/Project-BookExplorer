const { gql } = require("apollo-server");

const typeDefs = gql`
  type AuthorReview {
    id: ID!
    review: String
    rating: Int!
    reviewer_email: String!
    created_at: String!
    author: Author!
  }
  type Author {
    id: ID!
    name: String!
    biography: String!
    born_date: String!
    books: [Book!]
    reviews: [AuthorReview!]
    avg_rating: Float!
    total_reviews: Int!
  }
  type BookReview {
    id: ID!
    review: String
    rating: Int!
    reviewer_email: String!
    created_at: String!
    book: Book!
  }
  type Book {
    id: ID!
    title: String!
    description: String!
    published_date: String!
    author: Author!
    reviews: [BookReview!]
    avg_rating: Float!
    total_reviews: Int!
  }
  input BookFilter {
    title: String
    author: String
    published_date: String
  }
  input AuthorFilter {
    name: String
    born_date: String
  }
  input Pagination {
    skip: Int
    limit: Int
    sortBy: String
  }
  type GetAuthorsResponse {
    authors: [Author!]
    totalCount: Int!
    totalPages: Int!
    currentPage: Int!
  }
  type Query {
    getBooks(filters: BookFilter, pagination: Pagination): [Book!]
    getBookById(id: ID!): Book!
    getAuthors(
      filters: AuthorFilter
      pagination: Pagination
    ): GetAuthorsResponse
    getAuthorById(id: ID!): Author!
  }
  input CreateBookPayload {
    title: String!
    description: String!
    published_date: String!
    author_id: ID!
  }
  input UpdateBookPayload {
    title: String
    description: String
    published_date: String
    author_id: ID
  }
  input CreateBookReviewPayload {
    review: String
    rating: Int!
    reviewer_email: String!
  }
  input CreateAuthorPayload {
    name: String!
    biography: String!
    born_date: String!
  }
  input UpdateAuthorPayload {
    name: String
    biography: String
    born_date: String
  }
  input CreateAuthorReviewPayload {
    review: String
    rating: Int!
    reviewer_email: String!
  }
  type Mutation {
    createBook(payload: CreateBookPayload): Book!
    updateBook(id: ID!, payload: UpdateBookPayload): Book!
    deleteBook(id: ID!): ID!
    createBookReview(
      bookId: ID!
      payload: CreateBookReviewPayload!
    ): BookReview!
    createAuthor(payload: CreateAuthorPayload): Author!
    updateAuthor(id: ID!, payload: UpdateAuthorPayload): Author!
    deleteAuthor(id: ID!): ID!
    createAuthorReview(
      authorId: ID!
      payload: CreateAuthorReviewPayload!
    ): AuthorReview!
  }
`;

module.exports = { typeDefs };
