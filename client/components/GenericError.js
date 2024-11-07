import React from "react";
import { MdError } from "react-icons/md";

export const GenericError = ({ message = "Something went wrong!" }) => {
  return (
    <div className="flex justify-center items-center w-full h-full p-4">
      <div className="flex items-center space-x-4 max-w-md mx-auto p-6">
        <MdError className="text-red-500 text-3xl" />
        <div className="text-red-700 text-lg font-semibold">{message}</div>
      </div>
    </div>
  );
};
