import React from "react";

export const AuthorFilters = () => {
  const years = Array.from(
    { length: new Date().getFullYear() - 1900 + 1 },
    (_, i) => 1900 + i
  );

  return (
    <div className="space-y-4 w-full">
      <div>
        <label
          htmlFor="author"
          className="block text-sm font-medium text-gray-700"
        >
          Name
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
          htmlFor="published-date"
          className="block text-sm font-medium text-gray-700"
        >
          Birth Year
        </label>
        <select
          type="date"
          id="published-date"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0"
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
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
