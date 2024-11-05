import React from "react";

export const BookForm = ({ isUpdating }) => {
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
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="author"
          className="block text-teal-700 text-sm font-bold mb-2"
        >
          Author:
        </label>
        <select
          id="author"
          name="author"
          required
          className="w-full px-3 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
        >
          <option value="">Select an author</option>
          <option value="1">Jane Austen</option>
          <option value="2">George Orwell</option>
          <option value="3">J.K. Rowling</option>
          <option value="4">Ernest Hemingway</option>
          <option value="5">Agatha Christie</option>
          <option value="6">Mark Twain</option>
          <option value="7">Virginia Woolf</option>
          <option value="8">Charles Dickens</option>
          <option value="9">Leo Tolstoy</option>
          <option value="10">Gabriel García Márquez</option>
        </select>
      </div>
      <div className="mb-4">
        <label
          htmlFor="birth-date"
          className="block text-teal-700 text-sm font-bold mb-2"
        >
          Published Date:
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
        />
      </div>
      <button
        type="submit"
        className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        {isUpdating ? "Update" : "Add"} Book
      </button>
    </form>
  );
};
