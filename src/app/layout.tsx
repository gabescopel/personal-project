import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NavBar } from "./components/NavBar";
import clsx from "clsx";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-commerce",
  description: "Automamax E-commerce Template ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className={(clsx(inter.className), 'bg-slate-700')}>
          <NavBar />
          <main className="h-screen p-16">
            {children}
          </main>
        </body>
    </html>
  );
}
