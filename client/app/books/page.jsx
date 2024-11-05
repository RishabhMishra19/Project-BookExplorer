"use client";

import { BookCard } from "@/components/BookCard";
import { BookFilters } from "@/components/BookFilters";
import { IconButton } from "@/components/IconButton";
import { PaginationFooter } from "@/components/PaginationFooter";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="flex justify-between mx-[70px] border-b-[2px] pb-4 ml-[390px] mr-[60px] mb-4 items-center">
        <h2 className="text-3xl font-bold">Featured Books</h2>
        <Link href={"/books/create"}>
          <IconButton>Add Book</IconButton>
        </Link>
      </div>
      <div className="w-full h-max flex justify-center px-16">
        <div className="w-3/12 border-r-[1px] mr-3 px-3">
          <BookFilters />
        </div>
        <div className="w-10/12">
          <div className="flex flex-wrap justify-between">
            {[1, 2, 3, 4, 5, 6].map((val) => (
              <BookCard
                key={val}
                book={{
                  id: 1,
                  title: "To Kill a Mockingbird",
                  author: "Harper Lee",
                  rating: 3.5,
                  description:
                    "A novel about the serious issues of rape and racial inequality. A novel about the serious issues of rape and racial inequality",
                  coverImage: "https://example.com/mockingbird.jpg",
                }}
              />
            ))}
          </div>
          <PaginationFooter
            curPage={1}
            totalPages={5}
            onPrev={() => null}
            onNext={() => null}
          />
        </div>
      </div>
    </div>
  );
}
