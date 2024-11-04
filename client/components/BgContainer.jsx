import React from "react";

export const BgContainer = () => {
  return (
    <section
      className="flex flex-col items-center text-white"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%,rgba(255, 255, 255, 0.9) 70%, rgba(255, 255, 255, 1) 100%), url('/BgCover.png')`,
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        width: "100%",
        height: "220px",
        marginBottom: "10px",
      }}
    >
      <h1
        style={{
          color: "#8ab5ae",
          textShadow: "4px 4px 6px white",
          fontSize: "70px",
          marginTop: "110px",
          lineHeight: "normal",
          fontWeight: "bold",
        }}
      >
        Welcome to BookExplorer
      </h1>
      <p
        className="text-xl text-bold"
        style={{
          color: "#8ab5ae",
          textShadow: "2px 2px 4px white",
          lineHeight: "normal",
        }}
      >
        Discover, review, and explore your next favorite book
      </p>
    </section>
  );
};
