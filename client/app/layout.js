"use client";
import "./globals.css";
import { usePathname } from "next/navigation";

import { NavBar } from "../components/Layout/NavBar";
import { Footer } from "../components/Layout/Footer";
import { getInitialNavItem } from "../utils/genericUtils";
import { createApolloClient } from "../apollo-client";
import { ApolloProvider } from "@apollo/client";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const client = createApolloClient();

  return (
    <ApolloProvider client={client}>
      <html lang="en">
        <body>
          <div className="flex flex-col min-h-screen pt-16 bg-gradient-to-b from-white via-teal-100 to-teal-50">
            <NavBar activeTab={getInitialNavItem(pathname)} />
            {children}
            <Footer />
          </div>
        </body>
      </html>
    </ApolloProvider>
  );
}
