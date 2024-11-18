import React from "react";

export const IconButton = ({ icon: Icon, children }) => {
  return (
    <button className="flex items-center px-4  bg-teal-600 text-white rounded-md shadow hover:bg-teal-700 transition duration-300 h-10">
      <span>{children}</span>
    </button>
  );
};
