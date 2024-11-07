import React, { useState } from "react";
import { GenericLoader } from "./GenericLoader";
import { GenericError } from "./GenericError";
import { gql, useQuery } from "@apollo/client";

const QUERY = gql`
  query GetAuthors($pagination: Pagination, $filters: AuthorFilter) {
    getAuthors(pagination: $pagination, filters: $filters) {
      id
      name
    }
  }
`;

export const BookForm = ({
  isUpdate,
  onSubmit,
  initialData = {},
  isSubmitting = true,
}) => {
  const [formData, setFormData] = useState(initialData);

  const { data, loading, error } = useQuery(QUERY, {
    variables: { filters: {}, pagination: { skip: 0, limit: 100 } },
  });

  const authors = data?.getAuthors ?? [];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((pval) => ({
      ...pval,
      [name]: value,
    }));
  };

  if (loading) {
    return <GenericLoader />;
  }

  if (error) {
    return (
      <GenericError message={error.cause?.message ?? "Something went wrong"} />
    );
  }

  return (
    <form action="#" method="POST">
      <div className="mb-4">
        <label
          htmlFor="title"
          className="block text-teal-700 text-sm font-bold mb-2"
        >
          Title:
        </label>
        <input
          type="text"
          id="title"
          name="title"
          required
          className="w-full px-3 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          value={formData.title ?? ""}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="author_id"
          className="block text-teal-700 text-sm font-bold mb-2"
        >
          Author:
        </label>
        <select
          id="author_id"
          name="author_id"
          required
          className="w-full px-3 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          value={formData.author_id ?? ""}
          onChange={handleChange}
        >
          <option key="" value="">
            Select an author
          </option>
          {authors.map((author) => (
            <option key={author.id} value={author.id}>
              {author.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label
          htmlFor="published_date"
          className="block text-teal-700 text-sm font-bold mb-2"
        >
          Published Date:
        </label>
        <input
          type="date"
          id="published_date"
          name="published_date"
          className="w-full px-3 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          value={formData.published_date ?? ""}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-teal-700 text-sm font-bold mb-2"
        >
          Description:
        </label>
        <textarea
          id="description"
          name="description"
          rows="4"
          className="w-full px-3 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          value={formData.description ?? ""}
          onChange={handleChange}
        />
      </div>
      {isSubmitting ? (
        <div className="w-full bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline  flex justify-center">
          Submitting...
        </div>
      ) : (
        <button
          type="submit"
          className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            onSubmit(formData);
          }}
        >
          {isUpdate ? "Update" : "Add"} Book
        </button>
      )}
    </form>
  );
};
