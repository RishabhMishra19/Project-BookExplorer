import React from "react";

export const WelcomeBox = () => {
  return (
    <section className="flex flex-col items-center text-white py-8 text-[#8ab5ae] text-7xl font-bold gap-4 drop-shadow-xl">
      <h1 className="drop-shadow-xl">Welcome to BookExplorer</h1>
      <p className="text-2xl">
        Discover, review, and explore your next favorite book
      </p>
    </section>
  );
};
