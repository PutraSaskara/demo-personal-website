import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Demo Website",
  description: "Fullstack Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-[#DBD8E3]">
          <Navbar/>
          <div className="px-10">
            {children}
          </div>
          <Footer/>
        </div>
        </body>
    </html>
  );
}
