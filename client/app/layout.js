"use client";

import { WelcomeBox } from "../components/WelcomeBox";
import "./globals.css";
import { usePathname } from "next/navigation";

import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { useState } from "react";
import { getInitialNavItem } from "../utils/genericUtils";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState(getInitialNavItem(pathname));

  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen pt-16">
          <NavBar activeTab={activeTab} setActiveTab={setActiveTab} />
          <WelcomeBox />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
