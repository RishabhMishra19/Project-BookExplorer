import React from "react";

export const WelcomeBox = () => {
  return (
    <section className="flex flex-col items-center text-white py-8 text-[#8ab5ae] text-7xl font-bold gap-4 drop-shadow-xl">
      <h1 className="drop-shadow-xl">Welcome to BookExplorer</h1>
      <p className="text-2xl">
        Discover, review, and explore your next favorite book
      </p>
      <div class="space-x-4">
        <a
          href="login.html"
          class="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
        >
          Log in
        </a>
        <a
          href="signup.html"
          class="bg-teal-100 hover:bg-teal-200 text-teal-800 font-bold py-2 px-4 rounded"
        >
          Sign up
        </a>
      </div>
    </section>
  );
};
