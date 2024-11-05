import { gql } from "apollo-server";

export const typeDefs = gql`
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
  type Query {
    getBooks: [Book!]
    getBookById(id: ID!): Book!
    getAuthors: [Author!]
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
