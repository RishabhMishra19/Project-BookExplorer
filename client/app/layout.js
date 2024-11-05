"use client";

import { WelcomeBox } from "../components/WelcomeBox";
import "./globals.css";
import { usePathname } from "next/navigation";

import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { useState } from "react";
import { getInitialNavItem, isAuthRoute } from "../utils/genericUtils";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState(getInitialNavItem(pathname));

  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen pt-16 bg-gradient-to-b from-white via-teal-100 to-teal-50">
          <NavBar activeTab={activeTab} setActiveTab={setActiveTab} />
          {!isAuthRoute(pathname) && <WelcomeBox />}
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
