import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WhatBytes",
  description: "Created by Priyank Saini",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col h-screen">
          <Navbar />
          <div className="flex flex-row flex-grow overflow-hidden">
            <Sidebar />
            <div className="flex-grow p-10 overflow-auto">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
