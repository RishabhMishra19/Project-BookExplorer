import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CiEdit } from "react-icons/ci";
import dayjs from "dayjs";
import { StarRating } from "../Common/StarRating";

export const AuthorCard = ({ author }) => {
  return (
    <div className="w-80 rounded overflow-hidden shadow-lg bg-white px-5 py-4 mb-8">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1 w-[70%]">
          <Link href={`/authors/${author.id}`} className="w-full">
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
          [{dayjs(parseInt(author.born_date)).format("YYYY")}]
        </div>
      </div>
      <StarRating
        rating={author.avg_rating}
        totalReviews={author.total_reviews}
      />
      <Image
        className="object-cover"
        src={"/AuthorImg.png"}
        width={300}
        height={300}
        alt={author.name}
      />
      <p className="text-gray-600 mt-4 line-clamp-2 text-sm">
        {author.biography}
      </p>
      <div className="flex justify-end">
        <Link href={`/authors/${author.id}`}>
          <div className="font-bold text-white cursor-pointer  text-right bg-p-600 hover:bg-teal-700 rounded-[5px] w-max px-2 py-1 mt-2">
            Read more
          </div>
        </Link>
      </div>
    </div>
  );
};
