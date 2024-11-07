"use client";
import Link from "next/link";
import { BookForm } from "../../../../components/BookForm";
import { gql, useMutation, useQuery } from "@apollo/client";
import { use } from "react";
import { useRouter } from "next/navigation";
import { GenericLoader } from "../../../../components/GenericLoader";
import { GenericError } from "../../../../components/GenericError";
import toast, { Toaster } from "react-hot-toast";

const QUERY = gql`
  query getBookById($getBookById: ID!) {
    getBookById(id: $getBookById) {
      id
      title
      description
      published_date
      author {
        id
        name
      }
    }
  }
`;

const UPDATE_BOOK = gql`
  mutation UpdateBook($id: ID!, $payload: UpdateBookPayload) {
    updateBook(id: $id, payload: $payload) {
      id
    }
  }
`;

export default function Home({ params }) {
  const unwrappedParams = use(params);
  const { bookId } = unwrappedParams;
  const router = useRouter();

  const getBookMetaData = useQuery(QUERY, {
    variables: { getBookById: bookId, skip: !bookId },
  });

  const book = getBookMetaData?.data?.getBookById ?? {};

  const [updateBook, updateBookMetaData] = useMutation(UPDATE_BOOK);

  const handleSubmit = (payload) => {
    updateBook({
      variables: {
        payload,
        id: book.id,
      },
    })
      .then(() => {
        router.push("/books");
        toast.success("Successfully Updated!");
      })
      .catch((e) => {
        toast.error(
          updateBookMetaData?.error?.cause?.message ?? "Something went wrong"
        );
      });
  };

  if (getBookMetaData.loading) {
    return <GenericLoader />;
  }

  if (getBookMetaData.error) {
    return (
      <GenericError
        message={getBookMetaData.error.cause?.message ?? "Something went wrong"}
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
            published_date: book.published_date.split("T")[0],
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
