import React from "react";
import { FaSpinner } from "react-icons/fa";

export const GenericLoader = ({ height = "80vh" }) => {
  return (
    <div
      className={`animate-pulse flex flex-col justify-center items-center gap-2 my-4`}
      style={{ height }}
    >
      <button
        type="button"
        className="bg-teal-400 text-white font-bold py-2 px-4 rounded inline-flex items-center cursor-not-allowed"
      >
        <FaSpinner className="animate-spin h-5 w-5 mr-3" />
        Loading...
      </button>
    </div>
  );
};
