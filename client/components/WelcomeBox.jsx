import Link from "next/link";
import React from "react";

export const WelcomeBox = () => {
  return (
    <section
      className="flex flex-col items-center text-white py-8  font-bold gap-4 drop-shadow-xl"
      style={{ color: "#8ab5ae" }}
    >
      <h1 className=" text-7xl drop-shadow-md bg-gradient-to-r from-teal-500 via-teal-600  to-teal-400 text-transparent bg-clip-text">
        Welcome to BookExplorer
      </h1>
      <p className="text-2xl text-teal-500">
        Discover, Review, and Explore your next favorite book
      </p>
      <div className="space-x-4">
        <Link
          href="/auth/login"
          className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
        >
          Log in
        </Link>
        <Link
          href="/auth/signup"
          className="bg-teal-100 hover:bg-teal-200 text-teal-800 font-bold py-2 px-4 rounded"
        >
          Sign up
        </Link>
      </div>
    </section>
  );
};
