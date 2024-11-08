import { gql } from "@apollo/client";

export const GET_AUTHORS_QUERY = gql`
  query GetAuthors($pagination: Pagination, $filters: AuthorFilter) {
    getAuthors(pagination: $pagination, filters: $filters) {
      authors {
        id
        name
        avg_rating
        total_reviews
        biography
        born_date
      }
      totalCount
      totalPages
      currentPage
    }
  }
`;

export const GET_AUTHOR_BY_ID_QUERY = gql`
  query getAuthorById($getAuthorById: ID!) {
    getAuthorById(id: $getAuthorById) {
      id
      name
      avg_rating
      total_reviews
      biography
      born_date
      reviews {
        id
        rating
        review
        created_at
        reviewer_email
      }
    }
  }
`;

export const CREATE_AUTHOR_MUTATION = gql`
  mutation CreateAuthor($payload: CreateAuthorPayload) {
    createAuthor(payload: $payload) {
      id
    }
  }
`;

export const UPDATE_AUTHOR_MUTATION = gql`
  mutation UpdateAuthor($id: ID!, $payload: UpdateAuthorPayload) {
    updateAuthor(id: $id, payload: $payload) {
      id
    }
  }
`;

export const CREATE_AUTHOR_REVIEW_MUTATION = gql`
  mutation CreateAuthorReview(
    $authorId: ID!
    $payload: CreateAuthorReviewPayload!
  ) {
    createAuthorReview(authorId: $authorId, payload: $payload) {
      id
    }
  }
`;
