"use client";
import Link from "next/link";
import { BookForm } from "../../../components/Book/BookForm";
import { useMutation } from "@apollo/client";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { CREATE_BOOK_MUTATION } from "../../../graphql/bookGqlStrs";
import { parseApolloError } from "../../../utils/genericUtils";

export default function CreateBook() {
  const router = useRouter();
  const [createBook, { loading, error }] = useMutation(CREATE_BOOK_MUTATION);

  const handleSubmit = async (payload) => {
    try {
      const res = await createBook({ variables: { payload } })
      router.replace(`/books/${res.data.createBook.id}`);
      toast.success("Successfully Created!");
    } catch (e) {
      parseApolloError(error);
    };
  };

  return (
    <div className="w-full flex items-center justify-center py-16">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-teal-800 mb-6">Add New Book</h1>
        <BookForm onSubmit={handleSubmit} isSubmitting={loading} />
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
