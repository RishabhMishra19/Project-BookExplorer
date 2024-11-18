"use client";
import { BookCard } from "../../components/Book/BookCard";
import { BookFilters } from "../../components/Book/BookFilters";
import { IconButton } from "../../components/Common/IconButton";
import { PaginationFooter } from "../../components/Common/PaginationFooter";
import Link from "next/link";
import { WelcomeBox } from "../../components/Layout/WelcomeBox";
import { useQuery } from "@apollo/client";
import { GenericError } from "../../components/Common/GenericError";
import { GenericLoader } from "../../components/Common/GenericLoader";
import { useEffect, useState } from "react";
import { GET_BOOKS_QUERY } from "../../graphql/bookGqlStrs";
import { parseApolloError } from "../../utils/genericUtils";

export default function BookList() {
  const [filters, setFilters] = useState({});
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 0,
    totalCount: 0,
  });

  const { data, loading, error } = useQuery(GET_BOOKS_QUERY, {
    variables: {
      filters,
      pagination: { skip: pagination.currentPage - 1, limit: 10 },
    },
  });

  const bookResponse = data?.getBooks ?? {};

  const books = bookResponse?.books ?? [];

  useEffect(() => {
    if (Object.keys(bookResponse).length > 0) {
      setPagination({
        currentPage: bookResponse.currentPage,
        totalPages: bookResponse.totalPages,
        totalCount: bookResponse.totalCount,
      });
    }
  }, [bookResponse]);

  return (
    <div>
      <WelcomeBox />
      {loading ? (
        <GenericLoader height="50vh" />
      ) : error ? (
        <GenericError message={parseApolloError(error)} />
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
              <div className="flex flex-wrap gap-4">
                {books.map((book) => (
                  <BookCard key={book.id} book={book} />
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
