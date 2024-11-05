"use client";

import React, { useState } from "react";
import { HiOutlineBookOpen } from "react-icons/hi";
import { FaUserCheck } from "react-icons/fa";
import { MdOutlineLogin } from "react-icons/md";
import Link from "next/link";
import { FaBookOpen } from "react-icons/fa";
import { getInitialNavItem } from "@/utils/genericUtils";
import { PiHandPeaceFill } from "react-icons/pi";

export const NavBar = () => {
  const [activeTab, setActiveTab] = useState(
    getInitialNavItem(location.pathname)
  );

  return (
    <header className="bg-teal-600 text-white shadow-md w-full fixed top-0 left-0 z-50">
      <nav className="px-4 py-4 flex justify-between items-center w-full px-[60px]">
        <Link href="/books" className="text-2xl font-bold flex items-center">
          <HiOutlineBookOpen className="mr-2 text-3xl" />
          BookExplorer
        </Link>
        <div className="flex items-center space-x-6">
          <Link
            href="/books"
            className={`flex items-center  rounded-md px-2 py-1 ${
              activeTab === "books"
                ? "bg-white text-teal-700"
                : "hover:bg-[rgba(0,0,0,0.1)]"
            }`}
            onClick={() => setActiveTab("books")}
          >
            <FaBookOpen className="mr-2 text-lg" />
            Books
          </Link>
          <Link
            href="/authors"
            className={`flex items-center rounded-md px-2 py-1 ${
              activeTab === "authors"
                ? "bg-white text-teal-700"
                : "hover:bg-[rgba(0,0,0,0.1)]"
            }`}
            onClick={() => setActiveTab("authors")}
          >
            <FaUserCheck className="mr-1 text-lg" />
            Authors
          </Link>
          {/* <Link
            href="/auth/login"
            className={`flex items-center rounded-md px-2 py-1 ${
              activeTab === "login"
                ? "bg-white text-teal-700"
                : "hover:bg-[rgba(0,0,0,0.1)]"
            }`}
            onClick={() => setActiveTab("login")}
          >
            <MdOutlineLogin className="mr-2 text-lg" />
            Login
          </Link>
          <Link
            href="/auth/signup"
            className={`flex items-center rounded-md px-2 py-1 ${
              activeTab === "signup"
                ? "bg-white text-teal-700"
                : "hover:bg-[rgba(0,0,0,0.1)]"
            }`}
            onClick={() => setActiveTab("signup")}
          >
            <PiHandPeaceFill className="mr-1 text-lg" />
            Signup
          </Link> */}
        </div>
      </nav>
    </header>
  );
};
