import React, { useEffect, useState } from "react";
import { GenericLoader } from "./GenericLoader";
import { GenericError } from "./GenericError";
import { GET_AUTHORS_QUERY } from "../graphql/authorGqlStrs";
import { useQuery } from "@apollo/client";

export const BookFilters = ({ filters, setFilters }) => {
  const [debouncedFilters, setDebouncedFilters] = useState(filters);

  const { data, loading, error } = useQuery(GET_AUTHORS_QUERY, {
    variables: { filters: {}, pagination: { skip: 0, limit: 100 } },
  });

  const authors = data?.getAuthors?.authors ?? [];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDebouncedFilters((pval) => ({ ...pval, [name]: value }));
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setFilters(debouncedFilters);
    }, 600);
    return () => clearTimeout(timeoutId);
  }, [debouncedFilters]);

  if (loading) {
    return <GenericLoader />;
  }

  if (error) {
    return (
      <GenericError message={error.cause?.message ?? "Something went wrong"} />
    );
  }

  return (
    <div className="space-y-4 w-full">
      <div>
        <label
          htmlFor="author"
          className="block text-sm font-medium text-gray-700"
        >
          Author
        </label>
        <select
          id="author"
          name="author"
          required
          className="w-full px-3 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          value={debouncedFilters.author ?? ""}
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

      <div>
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Search by title"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0"
          value={debouncedFilters.title ?? ""}
          onChange={handleChange}
        />
      </div>

      <div>
        <label
          htmlFor="published-date"
          className="block text-sm font-medium text-gray-700"
        >
          Published Date
        </label>
        <input
          type="date"
          id="published_date"
          name="published_date"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0"
          value={debouncedFilters.published_date ?? ""}
          onChange={handleChange}
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition duration-300"
        onClick={() => setDebouncedFilters({})}
      >
        Clear Filters
      </button>
    </div>
  );
};
