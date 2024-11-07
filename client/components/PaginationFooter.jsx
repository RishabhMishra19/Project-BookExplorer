import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export const PaginationFooter = ({ curPage, onPrev, onNext, totalPages }) => {
  return (
    <div className="py-3 mb-2">
      <div className="max-w-7xl mx-auto flex justify-center items-center space-x-4 px-6">
        <div
          onClick={(e) => onPrev()}
          className={`inline-flex items-center px-4 py-2 text-sm font-semibold text-white  rounded-md  transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 ${
            curPage === 1
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-teal-600 hover:bg-teal-700 cursor-pointer"
          }`}
        >
          <FaAngleLeft />
          <span>Previous</span>
        </div>

        <span className="text-lg font-medium text-gray-600">
          Page {curPage} of {totalPages}
        </span>

        <div
          onClick={(e) => onNext()}
          className={`inline-flex items-center px-4 py-2 text-sm font-semibold text-white  rounded-md  transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 ${
            curPage === totalPages
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-teal-600 hover:bg-teal-700 cursor-pointer"
          }`}
        >
          <span>Next</span>
          <FaAngleRight />
        </div>
      </div>
    </div>
  );
};
