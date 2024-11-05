import React from "react";
import { StarRating } from "./StarRating";
import Link from "next/link";
import { CiEdit } from "react-icons/ci";

export const BookCard = ({ book }) => {
  return (
    <div className="w-80 rounded overflow-hidden shadow-lg bg-white px-5 py-4 mb-8">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1">
          <Link href={`/books/${book.id}`}>
            <h2 className="text-xl font-bold text-black truncate mr-1 hover:text-blue-500 cursor-pointer">
              {book.title}
            </h2>
          </Link>
          <Link href={`/books/${book.id}/update`}>
            <CiEdit
              className="ml-1 text-blue-400  cursor-pointer hover:text-blue-700"
              size={"18px"}
            />
          </Link>
        </div>
        <div className="text-xs font-bold">[{1999}]</div>
      </div>
      <p className="text-gray-700 text-gray-500 text-xs mb-1">
        by{" "}
        <span className="font-bold hover:text-blue-500 cursor-pointer">
          {book.author}
        </span>
      </p>
      <StarRating rating={book.rating} />
      <img
        className="w-full h-96 object-cover"
        src={"./DummyBookCover.png"}
        alt={book.title}
      />
      <p className="text-gray-600 mt-4 line-clamp-2 text-sm">
        {book.description}
      </p>
      <div className="flex justify-end">
        <div className="font-bold text-white cursor-pointer  text-right bg-blue-500 hover:bg-blue-700 rounded-[5px] w-max px-2 py-1 mt-2">
          Read more
        </div>
      </div>
    </div>
  );
};
