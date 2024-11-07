import React, { useState } from "react";

export const ReviewForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({});

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
          htmlFor="reviewer_email"
          className="block text-teal-700 text-sm font-bold mb-2"
        >
          Your Email:
        </label>
        <input
          type="email"
          id="reviewer_email"
          name="reviewer_email"
          required
          className="w-full px-3 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          value={formData.reviewer_email ?? ""}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="rating"
          className="block text-teal-700 text-sm font-bold mb-2"
        >
          Rating:
        </label>
        <select
          id="rating"
          name="rating"
          required
          className="w-full px-3 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          value={formData.rating ?? ""}
          onChange={handleChange}
        >
          <option value="">Select a rating</option>
          <option value={5}>5 - Excellent</option>
          <option value={4}>4 - Very Good</option>
          <option value={3}>3 - Good</option>
          <option value={2}>2 - Fair</option>
          <option value={1}>1 - Poor</option>
        </select>
      </div>
      <div className="mb-6">
        <label
          htmlFor="review"
          className="block text-teal-700 text-sm font-bold mb-2"
        >
          Your Review:
        </label>
        <textarea
          id="review"
          name="review"
          rows="4"
          required
          className="w-full px-3 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          value={formData.review ?? ""}
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={(e) => {
          e.preventDefault();
          onSubmit({
            ...formData,
            rating: parseInt(formData.rating),
          });
        }}
      >
        Submit Review
      </button>
    </form>
  );
};
