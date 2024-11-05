import React, { useEffect, useState } from "react";

export const BookFilters = ({ filters, setFilters }) => {
  const [debouncedFilters, setDebouncedFilters] = useState(filters);

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

  return (
    <div className="space-y-4 w-full">
      <div>
        <label
          htmlFor="author"
          className="block text-sm font-medium text-gray-700"
        >
          Author
        </label>
        <input
          type="text"
          id="author"
          name="author"
          placeholder="Search by author"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0"
          value={debouncedFilters.author ?? ""}
          onChange={handleChange}
        />
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
        className="w-full py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-300"
        onClick={() => setDebouncedFilters({})}
      >
        Clear Filters
      </button>
    </div>
  );
};
