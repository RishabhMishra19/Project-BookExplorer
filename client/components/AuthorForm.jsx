import React from "react";

export const AuthorForm = ({ isUpdating }) => {
  return (
    <form action="#" method="POST">
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-teal-700 text-sm font-bold mb-2"
        >
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-3 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="birth-date"
          className="block text-teal-700 text-sm font-bold mb-2"
        >
          Birth Date:
        </label>
        <input
          type="date"
          id="birth-date"
          name="birth-date"
          className="w-full px-3 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="biography"
          className="block text-teal-700 text-sm font-bold mb-2"
        >
          Biography:
        </label>
        <textarea
          id="biography"
          name="biography"
          rows="4"
          className="w-full px-3 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        {isUpdating ? "Update" : "Add"} Author
      </button>
    </form>
  );
};
