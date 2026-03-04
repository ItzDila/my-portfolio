import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./header";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Timesh Dillon",
  description: "Creative developer and designer",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistMono.variable} font-mono antialiased bg-white text-neutral-950`}>
        <Header />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}