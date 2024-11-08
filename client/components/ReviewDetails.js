import React from "react";
import { StarRating } from "./StarRating";

export const ReviewDetails = ({ review }) => {
  return (
    <div className="border-b border-teal-200 pb-4">
      <p className="text-teal-800  font-semibold text-lg">
        {review.reviewer_email}
      </p>
      <StarRating rating={review.rating} fontSize={"13px"} />
      <p className="text-teal-700 mt-2">{review.review}</p>
    </div>
  );
};
