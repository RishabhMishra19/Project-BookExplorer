import { gql } from "@apollo/client";

export const GET_BOOKS_QUERY = gql`
  query GetBooks($pagination: Pagination, $filters: BookFilter) {
    getBooks(pagination: $pagination, filters: $filters) {
      books {
        id
        title
        description
        published_date
        author {
          id
          name
        }
        avg_rating
        total_reviews
      }
      totalCount
      totalPages
      currentPage
    }
  }
`;

export const GET_BOOK_BY_ID_QUERY = gql`
  query GetBookById($getBookById: ID!) {
    getBookById(id: $getBookById) {
      id
      title
      description
      published_date
      author {
        id
        name
      }
      avg_rating
      total_reviews
      reviews {
        created_at
        id
        rating
        review
        reviewer_email
      }
    }
  }
`;

export const CREATE_BOOK_MUTATION = gql`
  mutation CreateBook($payload: CreateBookPayload) {
    createBook(payload: $payload) {
      id
    }
  }
`;

export const CREATE_BOOK_REVIEW_MUTATION = gql`
  mutation CreateBookReview($bookId: ID!, $payload: CreateBookReviewPayload!) {
    createBookReview(bookId: $bookId, payload: $payload) {
      id
    }
  }
`;

export const UPDATE_BOOK_MUTATION = gql`
  mutation UpdateBook($id: ID!, $payload: UpdateBookPayload) {
    updateBook(id: $id, payload: $payload) {
      id
    }
  }
`;
