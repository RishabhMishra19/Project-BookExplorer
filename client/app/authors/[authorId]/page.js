"use client";
import Link from "next/link";
import Image from "next/image";
import { StarRating } from "../../../components/Common/StarRating";
import { Modal } from "../../../components/Common/Modal";
import { use, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { GenericLoader } from "../../../components/Common/GenericLoader";
import { GenericError } from "../../../components/Common/GenericError";
import { ReviewForm } from "../../../components/Review/ReviewForm";
import toast, { Toaster } from "react-hot-toast";
import dayjs from "dayjs";
import {
  CREATE_AUTHOR_REVIEW_MUTATION,
  GET_AUTHOR_BY_ID_QUERY,
} from "../../../graphql/authorGqlStrs";
import { ReviewDetails } from "../../../components/Review/ReviewDetails";
import { parseApolloError } from "../../../utils/genericUtils";

export default function AuthorDetails({ params }) {
  const unwrappedParams = use(params);
  const { authorId } = unwrappedParams;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [createAuthorReview, createAuthorReviewMetaData] = useMutation(
    CREATE_AUTHOR_REVIEW_MUTATION
  );

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const getAuthorMetaData = useQuery(GET_AUTHOR_BY_ID_QUERY, {
    variables: { getAuthorById: parseInt(authorId), skip: !authorId },
  });

  const author = getAuthorMetaData.data?.getAuthorById ?? {};

  const handleSubmit = (payload) => {
    createAuthorReview({ variables: { authorId, payload } })
      .then(() => {
        toast.success("Successfully Created!");
        setIsModalOpen(false);
        getAuthorMetaData.refetch();
      })
      .catch((e) => {
        toast.error(
          parseApolloError(createAuthorReviewMetaData.error)
        );
      });
  };

  if (getAuthorMetaData.loading) {
    return <GenericLoader />;
  }

  if (getAuthorMetaData.error) {
    return <GenericError message={parseApolloError(getAuthorMetaData.error)} />;
  }

  return (
    <div className="bg-teal-50 flex py-5 justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl h-max">
        <h1 className="text-3xl font-bold text-teal-800 mb-6">{author.name}</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <Image
              className="object-cover"
              src={"/AuthorImg.png"}
              width={300}
              height={300}
              alt={author.name}
            />
          </div>
          <div className="md:col-span-2">
            <p className="text-teal-600 mb-2">
              <strong>Birth Year:</strong>{" "}
              {dayjs(parseInt(author.born_date)).format("YYYY")}
            </p>
            <div className="text-teal-700 mb-4 flex items-center">
              <strong className="mr-2">Rating:</strong>
              <StarRating
                rating={author.avg_rating}
                fontSize={"13px"}
                totalReviews={author.total_reviews}
              />
            </div>
            <p className="text-teal-800 mb-6">{author.biography}</p>
            <div
              onClick={openModal}
              className="bg-teal-600 w-max hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
            >
              Write a Review
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-teal-800 mb-4 border-b-[1px] border-teal-100 pb-2">
            Recent Reviews
          </h2>
          {(author.reviews ?? []).map((review) => (
            <ReviewDetails key={review.id} review={review} />
          ))}
        </div>
        <Link
          href="/books"
          className="block mt-4 text-center text-teal-600 hover:underline"
        >
          Back to Home
        </Link>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-2xl font-bold text-teal-800 mb-4">
          Write a Review
        </h2>
        <ReviewForm onSubmit={handleSubmit} />
      </Modal>
      <Toaster position="bottom-center" toastOptions={{ duration: 1300 }} />
    </div>
  );
}
