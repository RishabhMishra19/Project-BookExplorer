"use client";

import Link from "next/link";
import Image from "next/image";
import { StarRating } from "../../../components/StarRating";
import { Modal } from "../../../components/Modal";
import { useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const author = {
    id: "1",
    name: "John Doe",
    rating: 3.5,
    biography:
      "John Doe is an author known for his works in fiction, especially in fantasy and science fiction genres.",
    born_date: "1975-06-12",
    books: [],
    reviews: [],
  };

  return (
    <div className="bg-teal-50 flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
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
              {new Date(author.born_date).getFullYear()}
            </p>
            <p className="text-teal-700 mb-4 flex items-center">
              <strong className="mr-2">Rating:</strong>
              <StarRating rating={author.rating} fontSize={"13px"} />
            </p>
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
          <div className="space-y-4">
            <div className="border-b border-teal-200 pb-4">
              <p className="text-teal-800  font-semibold">John Doe</p>
              <p className="text-teal-600">Rating: 5/5</p>
              <p className="text-teal-700 mt-2">
                {
                  "This book was amazing! I couldn't put it down. The characters were well-developed and the plot kept me guessing until the very end."
                }
              </p>
            </div>
            <div className="border-b border-teal-200 pb-4">
              <p className="text-teal-800 font-semibold">Jane Smith</p>
              <p className="text-teal-600">Rating: 4/5</p>
              <p className="text-teal-700 mt-2">
                A great read overall. The pacing was a bit slow in the middle,
                but the ending more than made up for it. Highly recommended!
              </p>
            </div>
          </div>
        </div>
        <Link
          href="/books"
          className="block mt-4 text-center text-teal-600 hover:underline"
        >
          Back to Home
        </Link>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {/* <div class="bg-white p-6 rounded-lg shadow-md mb-8"> */}
        <h2 class="text-2xl font-bold text-teal-800 mb-4">Write a Review</h2>
        <form action="#" method="POST">
          <div class="mb-4">
            <label
              for="name"
              class="block text-teal-700 text-sm font-bold mb-2"
            >
              Your Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              class="w-full px-3 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div class="mb-4">
            <label
              for="rating"
              class="block text-teal-700 text-sm font-bold mb-2"
            >
              Rating:
            </label>
            <select
              id="rating"
              name="rating"
              required
              class="w-full px-3 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="">Select a rating</option>
              <option value="5">5 - Excellent</option>
              <option value="4">4 - Very Good</option>
              <option value="3">3 - Good</option>
              <option value="2">2 - Fair</option>
              <option value="1">1 - Poor</option>
            </select>
          </div>
          <div class="mb-6">
            <label
              for="review-text"
              class="block text-teal-700 text-sm font-bold mb-2"
            >
              Your Review:
            </label>
            <textarea
              id="review-text"
              name="review-text"
              rows="4"
              required
              class="w-full px-3 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <button
            type="submit"
            class="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit Review
          </button>
        </form>
      </Modal>
    </div>
  );
}
