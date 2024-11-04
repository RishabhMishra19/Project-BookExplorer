import { BgContainer } from "@/components/BgContainer";
import "./globals.css";

import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen pt-16">
          <NavBar />
          <BgContainer />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
