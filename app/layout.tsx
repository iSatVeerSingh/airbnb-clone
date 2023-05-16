import React from "react";
import { Nunito } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Airbnb Clone App",
  description: "This is an airbnb clone app in nextjs",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
