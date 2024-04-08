import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

import { Home, Search } from "@/routes";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark px-2 md:px-5`}>
        <header className="flex mb-5 gap-2 text-2xl py-3 px-6 bg-blue-900 text-white rounded-b-xl shadow-gray-700 drop-shadow-2xl">
          <Home.Link className="font-extrabold">Home</Home.Link>
          <Search.Link search={{ q: "bulb" }} className="font-light">
            Search
          </Search.Link>
        </header>
        <div className="@container">{children}</div>
      </body>
    </html>
  );
}
