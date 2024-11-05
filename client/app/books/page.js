"use client";

import { BookCard } from "../../components/BookCard";
import { BookFilters } from "../../components/BookFilters";
import { IconButton } from "../../components/IconButton";
import { PaginationFooter } from "../../components/PaginationFooter";
import Link from "next/link";
import { WelcomeBox } from "../../components/WelcomeBox";
import { gql, useQuery } from "@apollo/client";

const QUERY = gql`
  query GetBooks {
    getBooks {
      id
      title
      description
      published_date
      author {
        id
        name
      }
      avg_rating
      total_reviews
    }
  }
`;

export default function Home() {
  const { data, loading, error } = useQuery(QUERY);

  const books = data?.getBooks ?? [];

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    console.error(error);
    return null;
  }

  return (
    <div>
      <WelcomeBox />
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
            {books.map((book) => (
              <BookCard key={book.id} book={book} />
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
