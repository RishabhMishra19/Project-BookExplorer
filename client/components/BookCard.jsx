import React from "react";
import { StarRating } from "./StarRating";

export const BookCard = ({ book }) => {
  return (
    <div className="w-80 rounded overflow-hidden shadow-lg bg-white px-5 py-4 mb-8">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-black truncate mr-1">
          {book.title}
        </h2>
        <div className="text-xs font-bold">[{1999}]</div>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-gray-700 text-gray-500 text-xs">
          by{" "}
          <span className="font-bold hover:text-blue-500 cursor-pointer">
            {book.author}
          </span>
        </p>
        <StarRating rating={book.rating} />
      </div>
      <img
        className="w-full h-96 object-cover"
        src={"./DummyBookCover.png"}
        alt={book.title}
      />
      <p className="text-gray-600 mt-4 line-clamp-2 text-sm">
        {book.description}
      </p>
    </div>
  );
};
