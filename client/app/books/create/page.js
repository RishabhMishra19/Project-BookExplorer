"use client";
import Link from "next/link";
import { BookForm } from "../../../components/BookForm";
import { useMutation, gql } from "@apollo/client";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

const CREATE_BOOK = gql`
  mutation CreateBook($payload: CreateBookPayload) {
    createBook(payload: $payload) {
      id
    }
  }
`;

export default function Home() {
  const router = useRouter();
  const [createBook, { loading, error, data }] = useMutation(CREATE_BOOK);

  const handleSubmit = (payload) => {
    createBook({ variables: { payload } })
      .then(() => {
        router.push("/books");
        toast.success("Successfully Created!");
      })
      .catch((e) => {
        toast.error(error?.cause?.message ?? "Something went wrong");
      });
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
