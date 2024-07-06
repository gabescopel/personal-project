import type { Metadata } from "next";
import { Inter } from "next/font/google";
import clsx from "clsx";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Store E-commerce",
  description: "Store E-commerce Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={(clsx(inter.className), 'bg-[#E9EBEE]')}>
        {/* <NavBar /> */}
        <main className="h-screen p-4 md:p-16">
          {children}
        </main>
      </body>
    </html>
  );
}
