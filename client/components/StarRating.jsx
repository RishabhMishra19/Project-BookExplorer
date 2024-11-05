import React from "react";
import { FaStar } from "react-icons/fa";

export const StarRating = ({ rating, fontSize = "10px" }) => {
  // Calculate the number of full, half, and empty stars
  const stars = Array.from({ length: 5 }, (_, index) => {
    const starValue = index + 0.5; // Allow for half stars
    if (rating >= index + 1) {
      return <FaStar key={index} className="text-yellow-500" size={fontSize} />;
    } else if (rating >= starValue) {
      return (
        <FaStar
          key={index}
          className="text-yellow-500 opacity-50"
          size={fontSize}
        />
      );
    } else {
      return <FaStar key={index} className="text-gray-300" size={fontSize} />;
    }
  });

  return (
    <div className="flex items-center">
      <h3 className={`text-[${fontSize}] mr-1`}>{rating}</h3>
      {stars}
      <h3
        className={`text-[${fontSize}] ml-1 text-blue-400  cursor-pointer hover:underline`}
      >
        ({3645})
      </h3>
    </div>
  );
};
