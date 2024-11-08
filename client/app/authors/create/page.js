"use client";
import Link from "next/link";
import { AuthorForm } from "../../../components/AuthorForm";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { CREATE_AUTHOR_MUTATION } from "../../../graphql/authorGqlStrs";

export default function CreateAuthor() {
  const router = useRouter();
  const [createAuthor, { loading, error }] = useMutation(
    CREATE_AUTHOR_MUTATION
  );

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
