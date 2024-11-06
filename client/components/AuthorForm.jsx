"use client";

import React, { useState } from "react";

export const AuthorForm = ({
  isUpdate,
  onSubmit,
  initialData = {},
  isSubmitting = true,
}) => {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((pval) => ({
      ...pval,
      [name]: value,
    }));
  };

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
          value={formData.name ?? ""}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="born_date"
          className="block text-teal-700 text-sm font-bold mb-2"
        >
          Birth Date:
        </label>
        <input
          type="date"
          id="born_date"
          name="born_date"
          className="w-full px-3 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          value={formData.born_date ?? ""}
          onChange={handleChange}
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
          value={formData.biography ?? ""}
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
          {isUpdate ? "Update" : "Add"} Author
        </button>
      )}
    </form>
  );
};
