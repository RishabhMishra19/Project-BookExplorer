import React from "react";
import { StarRating } from "./StarRating";
import Link from "next/link";
import Image from "next/image";
import { CiEdit } from "react-icons/ci";

export const AuthorCard = ({ author }) => {
  return (
    <div className="w-80 rounded overflow-hidden shadow-lg bg-white px-5 py-4 mb-8">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1">
          <Link href={`/authors/${author.id}`}>
            <h2 className="text-xl font-bold text-black truncate mr-1 hover:text-blue-500 cursor-pointer">
              {author.name}
            </h2>
          </Link>
          <Link href={`/authors/${author.id}/update`}>
            <CiEdit
              className="ml-1 text-blue-400  cursor-pointer hover:text-blue-700"
              size={"18px"}
            />
          </Link>
        </div>
        <div className="text-xs font-bold">
          [{new Date(author.born_date).getFullYear()}]
        </div>
      </div>
      <StarRating rating={author.rating} />
      <Image
        className="w-full h-96 object-cover"
        src={"./AuthorImg.png"}
        alt={author.name}
      />
      <p className="text-gray-600 mt-4 line-clamp-2 text-sm">
        {author.biography}
      </p>
      <div className="flex justify-end">
        <div className="font-bold text-white cursor-pointer  text-right bg-blue-500 hover:bg-blue-700 rounded-[5px] w-max px-2 py-1 mt-2">
          Read more
        </div>
      </div>
    </div>
  );
};
