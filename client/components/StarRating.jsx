import React from "react";
import { FaStar } from "react-icons/fa";

export const StarRating = ({ rating }) => {
  // Calculate the number of full, half, and empty stars
  const stars = Array.from({ length: 5 }, (_, index) => {
    const starValue = index + 0.5; // Allow for half stars
    if (rating >= index + 1) {
      return <FaStar key={index} className="text-yellow-500" size={"12px"} />;
    } else if (rating >= starValue) {
      return (
        <FaStar
          key={index}
          className="text-yellow-500 opacity-50"
          size={"12px"}
        />
      );
    } else {
      return <FaStar key={index} className="text-gray-300" size={"12px"} />;
    }
  });

  return <div className="flex">{stars}</div>;
};
