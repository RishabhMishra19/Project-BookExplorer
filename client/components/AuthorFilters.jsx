"use client";

import React, { useEffect, useState } from "react";

const years = Array.from(
  { length: new Date().getFullYear() - 1900 + 1 },
  (_, i) => 1900 + i
);

export const AuthorFilters = ({ filters, setFilters }) => {
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
          Name
        </label>
        <input
          type="text"
          id="author"
          name="name"
          placeholder="Search by author"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0"
          value={debouncedFilters.name ?? ""}
          onChange={handleChange}
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
          id="born_date"
          name="born_date"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0"
          value={debouncedFilters.born_date ?? ""}
          onChange={handleChange}
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
        className="w-full py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition duration-300"
        onClick={() => setDebouncedFilters({})}
      >
        Clear Filters
      </button>
    </div>
  );
};
