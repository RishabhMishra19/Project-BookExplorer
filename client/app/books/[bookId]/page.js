"use client";
import Link from "next/link";
import Image from "next/image";
import { StarRating } from "../../../components/StarRating";
import { Modal } from "../../../components/Modal";
import { use, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { GenericLoader } from "../../../components/GenericLoader";
import { GenericError } from "../../../components/GenericError";
import { ReviewForm } from "../../../components/ReviewForm";
import toast, { Toaster } from "react-hot-toast";
import {
  CREATE_BOOK_REVIEW_MUTATION,
  GET_BOOK_BY_ID_QUERY,
} from "../../../graphql/bookGqlStrs";
import { ReviewDetails } from "../../../components/ReviewDetails";

export default function BookDetails({ params }) {
  const unwrappedParams = use(params);
  const { bookId } = unwrappedParams;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [createBookReview, createBookReviewMetaData] = useMutation(
    CREATE_BOOK_REVIEW_MUTATION
  );

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const getBookMetaData = useQuery(GET_BOOK_BY_ID_QUERY, {
    variables: { getBookById: parseInt(bookId), skip: !bookId },
  });

  const book = getBookMetaData.data?.getBookById ?? {};

  const handleSubmit = (payload) => {
    createBookReview({ variables: { bookId, payload } })
      .then(() => {
        toast.success("Successfully Created!");
        setIsModalOpen(false);
        getBookMetaData.refetch();
      })
      .catch((e) => {
        toast.error(
          createBookReviewMetaData.error?.cause?.message ??
            "Something went wrong"
        );
      });
  };

  if (getBookMetaData.loading) {
    return <GenericLoader />;
  }

  if (getBookMetaData?.error) {
    return <GenericError message={error?.cause?.message} />;
  }

  return (
    <div className="bg-teal-50 flex py-5 justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl h-max">
        <h1 className="text-3xl font-bold text-teal-800 mb-6">{book.title}</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <Image
              className="object-cover"
              src={"/DummyBookCover.png"}
              width={300}
              height={300}
              alt={book.title}
            />
          </div>
          <div className="md:col-span-2">
            <p className="text-teal-600 mb-2">
              <strong>Author:</strong> {book.author.name}
            </p>
            <p className="text-teal-600 mb-2">
              <strong>Publication Date:</strong> {book.published_date}
            </p>
            <div className="text-teal-700 mb-4 flex items-center">
              <strong className="mr-2">Rating:</strong>
              <StarRating
                rating={book.avg_rating}
                fontSize={"13px"}
                totalReviews={book.total_reviews}
              />
            </div>
            <p className="text-teal-800 mb-6">{book.description}</p>
            <div
              onClick={openModal}
              className="bg-teal-600 w-max hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
            >
              Write a Review
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-teal-800 mb-4 border-b-[1px] border-teal-100 pb-2 flex">
            Recent Reviews{" "}
            <p className={`text-[20px] ml-1 text-teal-800 `}>
              ({book.total_reviews})
            </p>
          </h2>
          {(book.reviews ?? []).map((review) => (
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
