"use client";
import { AuthorCard } from "../../components/AuthorCard";
import { AuthorFilters } from "../../components/AuthorFilters";
import { IconButton } from "../../components/IconButton";
import { PaginationFooter } from "../../components/PaginationFooter";
import Link from "next/link";
import { WelcomeBox } from "../../components/WelcomeBox";
import { useQuery } from "@apollo/client";
import { GenericError } from "../../components/GenericError";
import { GenericLoader } from "../../components/GenericLoader";
import { useEffect, useState } from "react";
import { GET_AUTHORS_QUERY } from "../../graphql/authorGqlStrs";

export default function AuthorsList() {
  const [filters, setFilters] = useState({});
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 0,
    totalCount: 0,
  });

  const { data, loading, error } = useQuery(GET_AUTHORS_QUERY, {
    variables: {
      filters,
      pagination: { skip: pagination.currentPage - 1, limit: 10 },
    },
  });

  const authorResponse = data?.getAuthors ?? {};

  const authors = authorResponse?.authors ?? [];

  useEffect(() => {
    if (Object.keys(authorResponse).length > 0) {
      setPagination({
        currentPage: authorResponse.currentPage,
        totalPages: authorResponse.totalPages,
        totalCount: authorResponse.totalCount,
      });
    }
  }, [authorResponse]);

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
              <div className="flex flex-wrap gap-4">
                {authors.map((author) => (
                  <AuthorCard key={author.id} author={author} />
                ))}
              </div>
              <PaginationFooter
                curPage={pagination.currentPage}
                totalPages={pagination.totalPages}
                onPrev={() =>
                  setPagination((pval) => ({
                    ...pval,
                    currentPage: pval.currentPage - 1,
                  }))
                }
                onNext={() =>
                  setPagination((pval) => ({
                    ...pval,
                    currentPage: pval.currentPage + 1,
                  }))
                }
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
