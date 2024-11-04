import React from "react";
import { HiOutlineBookOpen } from "react-icons/hi";
import { IoIosSearch } from "react-icons/io";
import { FaUserCheck } from "react-icons/fa";
import { MdOutlineLogin } from "react-icons/md";
import Link from "next/link";

export const NavBar = () => {
  return (
    <header className="bg-teal-600 text-white shadow-md w-full fixed top-0 left-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold flex items-center">
          <HiOutlineBookOpen className="mr-2 text-3xl" />
          BookExplorer
        </Link>
        <div className="flex items-center space-x-8">
          <Link
            href="/search"
            className="flex items-center hover:text-blue-300"
          >
            <IoIosSearch className="mr-1 text-lg" />
            Search
          </Link>
          <Link
            href="/authors"
            className="flex items-center hover:text-blue-300"
          >
            <FaUserCheck className="mr-1 text-lg" />
            Authors
          </Link>
          <Link href="/login" className="flex items-center hover:text-blue-300">
            <MdOutlineLogin className="mr-1 text-lg" />
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
};
