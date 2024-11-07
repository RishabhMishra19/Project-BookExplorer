"use client";
import { AuthorCard } from "../../components/AuthorCard";
import { AuthorFilters } from "../../components/AuthorFilters";
import { IconButton } from "../../components/IconButton";
import { PaginationFooter } from "../../components/PaginationFooter";
import Link from "next/link";
import { WelcomeBox } from "../../components/WelcomeBox";
import { gql, useQuery } from "@apollo/client";
import { GenericError } from "../../components/GenericError";
import { GenericLoader } from "../../components/GenericLoader";
import { useState } from "react";

const QUERY = gql`
  query GetAuthors($pagination: Pagination, $filters: AuthorFilter) {
    getAuthors(pagination: $pagination, filters: $filters) {
      authors {
        id
        name
        avg_rating
        total_reviews
        biography
        born_date
      }
      totalCount
      totalPages
      currentPage
    }
  }
`;

export default function Home() {
  const [filters, setFilters] = useState({});
  const { data, loading, error } = useQuery(QUERY, {
    variables: { filters, pagination: { skip: 0, limit: 10 } },
  });

  const authors = data?.getAuthors?.authors ?? [];

  return (
    <div>
      <WelcomeBox />
      {loading ? (
        <GenericLoader height="50vh" />
      ) : error ? (
        <GenericError message={error.cause.message} />
      ) : (
        <>
          <div className="flex justify-between mx-[70px] border-b-[2px] pb-4 ml-[390px] mr-[60px] mb-4 items-center">
            <h2 className="text-3xl font-bold">Featured Authors</h2>
            <Link href={"/authors/create"}>
              <IconButton>Add Author</IconButton>
            </Link>
          </div>
          <div className="w-full h-max flex justify-center px-16">
            <div className="w-3/12 border-r-[1px] mr-3 px-3">
              <AuthorFilters filters={filters} setFilters={setFilters} />
            </div>
            <div className="w-10/12">
              <div className="flex flex-wrap justify-between">
                {authors.map((author) => (
                  <AuthorCard key={author.id} author={author} />
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
        </>
      )}
    </div>
  );
}
