"use client";
import { BookCard } from "../../components/BookCard";
import { BookFilters } from "../../components/BookFilters";
import { IconButton } from "../../components/IconButton";
import { PaginationFooter } from "../../components/PaginationFooter";
import Link from "next/link";
import { WelcomeBox } from "../../components/WelcomeBox";
import { gql, useQuery } from "@apollo/client";
import { GenericError } from "../../components/GenericError";
import { GenericLoader } from "../../components/GenericLoader";
import { useState } from "react";

const QUERY = gql`
  query GetBooks($pagination: Pagination, $filters: BookFilter) {
    getBooks(pagination: $pagination, filters: $filters) {
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
  const [filters, setFilters] = useState({});

  const { data, loading, error } = useQuery(QUERY, {
    variables: { filters, pagination: { skip: 0, limit: 10 } },
  });

  const books = data?.getBooks ?? [];

  return (
    <div>
      <WelcomeBox />
      {loading ? (
        <GenericLoader height="50vh" />
      ) : error ? (
        <GenericError message={error.cause.message} />
      ) : (
        <>
          <div className="flex justify-between mx-[70px] border-b-[1px] pb-4 ml-[390px] mr-[60px] mb-4 items-center">
            <h2 className="text-3xl font-bold">Featured Books</h2>
            <Link href={"/books/create"}>
              <IconButton>Add Book</IconButton>
            </Link>
          </div>
          <div className="w-full h-max flex justify-center px-16">
            <div className="w-3/12 border-r-[1px] mr-3 px-3">
              <BookFilters filters={filters} setFilters={setFilters} />
            </div>
            <div className="w-10/12">
              <div className="flex flex-wrap justify-left">
                {books.map((book) => (
                  <div key={book.id} className="mr-3">
                    <BookCard book={book} />
                  </div>
                ))}
              </div>
              <PaginationFooter
                curPage={0}
                totalPages={5}
                onPrev={() => null}
                onNext={() => null}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
