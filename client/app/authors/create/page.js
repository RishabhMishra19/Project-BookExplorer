"use client";
import Link from "next/link";
import { AuthorForm } from "../../../components/AuthorForm";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

const CREATE_AUTHOR = gql`
  mutation CreateAuthor($payload: CreateAuthorPayload) {
    createAuthor(payload: $payload) {
      id
    }
  }
`;

export default function Home() {
  const router = useRouter();
  const [createAuthor, { loading, error, data }] = useMutation(CREATE_AUTHOR);

  const handleSubmit = (payload) => {
    createAuthor({ variables: { payload } })
      .then((res) => {
        router.replace(`/authors/${res.data.createAuthor.id}`);
        toast.success("Successfully Created!");
      })
      .catch((e) => {
        toast.error(error?.cause?.message ?? "Something went wrong");
      });
  };

  return (
    <div className="w-full flex items-center justify-center py-16">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-teal-800 mb-6">
          Add New Author
        </h1>
        <AuthorForm onSubmit={handleSubmit} isSubmitting={loading} />
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
