import React from "react";

export const BookFilters = () => {
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
          placeholder="Search by author"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0"
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
          placeholder="Search by title"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0"
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
          id="published-date"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0"
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-300"
      >
        Clear Filters
      </button>
    </div>
  );
};
