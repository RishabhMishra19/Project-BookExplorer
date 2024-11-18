"use client";
import Link from "next/link";
import { BookForm } from "../../../../components/BookForm";
import { useMutation, useQuery } from "@apollo/client";
import { use } from "react";
import { useRouter } from "next/navigation";
import { GenericLoader } from "../../../../components/GenericLoader";
import { GenericError } from "../../../../components/GenericError";
import toast, { Toaster } from "react-hot-toast";
import dayjs from "dayjs";
import {
  GET_BOOK_BY_ID_QUERY,
  UPDATE_BOOK_MUTATION,
} from "../../../../graphql/bookGqlStrs";
import { parseApolloError } from "../../../../utils/genericUtils";

export default function UpdateBook({ params }) {
  const unwrappedParams = use(params);
  const { bookId } = unwrappedParams;
  const router = useRouter();

  const getBookMetaData = useQuery(GET_BOOK_BY_ID_QUERY, {
    variables: { getBookById: parseInt(bookId), skip: !bookId },
  });



  const book = getBookMetaData?.data?.getBookById ?? {};

  const [updateBook, updateBookMetaData] = useMutation(UPDATE_BOOK_MUTATION);

  const handleSubmit = async (payload) => {
    try {
      await updateBook({
        variables: {
          payload,
          id: book.id,
        },
      });
      router.replace(`/books/${book.id}`);
      toast.success("Successfully Updated!");
    } catch (e) {
      toast.error(
        parseApolloError(updateBookMetaData.error)
      );
    }
  };

  if (getBookMetaData.loading) {
    return <GenericLoader />;
  }

  if (getBookMetaData.error) {
    return (
      <GenericError
        message={parseApolloError(getBookMetaData.error)}
      />
    );
  }

  return (
    <div className="w-full flex items-center justify-center py-16">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-teal-800 mb-6">Update Book</h1>
        <BookForm
          initialData={{
            title: book.title,
            description: book.description,
            published_date: dayjs(parseInt(book.published_date)).format(
              "YYYY-MM-DD"
            ),
            author_id: book.author?.id,
          }}
          isUpdate={true}
          onSubmit={handleSubmit}
          isSubmitting={updateBookMetaData.loading}
        />
        <Link
          href="/books"
          className="block mt-4 text-center text-teal-600 hover:underline"
        >
          Back to Home
        </Link>
      </div>
      <Toaster position="bottom-center" toastOptions={{ duration: 1300 }} />
    </div>
  );
}
