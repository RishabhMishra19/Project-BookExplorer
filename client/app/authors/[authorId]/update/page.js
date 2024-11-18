"use client";
import Link from "next/link";
import { AuthorForm } from "../../../../components/Author/AuthorForm";
import { useMutation, useQuery } from "@apollo/client";
import { use } from "react";
import { useRouter } from "next/navigation";
import { GenericLoader } from "../../../../components/Common/GenericLoader";
import { GenericError } from "../../../../components/Common/GenericError";
import toast, { Toaster } from "react-hot-toast";
import dayjs from "dayjs";
import {
  GET_AUTHOR_BY_ID_QUERY,
  UPDATE_AUTHOR_MUTATION,
} from "../../../../graphql/authorGqlStrs";
import { parseApolloError } from "../../../../utils/genericUtils";

export default function UpdateAuthor({ params }) {
  const unwrappedParams = use(params);
  const { authorId } = unwrappedParams;
  const router = useRouter();

  const getAuthorMetaData = useQuery(GET_AUTHOR_BY_ID_QUERY, {
    variables: { getAuthorById: parseInt(authorId), skip: !authorId },
  });

  const author = getAuthorMetaData?.data?.getAuthorById ?? {};

  const [updateAuthor, updateAuthorMetaData] = useMutation(
    UPDATE_AUTHOR_MUTATION
  );

  const handleSubmit = async (payload) => {
    try {
      await updateAuthor({
        variables: {
          payload,
          id: author.id,
        },
      });
      router.replace(`/authors/${author.id}`);
      toast.success("Successfully Updated!");
    } catch (e) {
      toast.error(
        parseApolloError(updateAuthorMetaData.error)
      );
    }
  };

  if (getAuthorMetaData.loading) {
    return <GenericLoader />;
  }

  if (getAuthorMetaData.error) {
    return (
      <GenericError
        message={
          parseApolloError(getAuthorMetaData.error)
        }
      />
    );
  }

  return (
    <div className="w-full flex items-center justify-center py-16">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-teal-800 mb-6">Update Author</h1>
        <AuthorForm
          initialData={{
            name: author.name,
            biography: author.biography,
            born_date: dayjs(parseInt(author.born_date)).format("YYYY-MM-DD"),
          }}
          isUpdate={true}
          onSubmit={handleSubmit}
          isSubmitting={updateAuthorMetaData.loading}
        />
        <Link
          href="/authors"
          className="block mt-4 text-center text-teal-600 hover:underline"
        >
          Back to Home
        </Link>
      </div>
      <Toaster position="bottom-center" toastOptions={{ duration: 1300 }} />
    </div>
  );
}
