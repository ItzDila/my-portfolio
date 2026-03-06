import type { Metadata } from "next";
import React from "react";
import {
  Geist_Mono,
  Geist,
  Inter,
  Source_Code_Pro,
  Alex_Brush,
} from "next/font/google";
import "./globals.css";
import Header from "./header";
import ChunkErrorHandler from "@/components/ChunkErrorHandler";
import AppFooter from "@/components/AppFooter";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sourceCodePro = Source_Code_Pro({
  variable: "--font-source-code-pro",
  subsets: ["latin"],
});

const alexBrush = Alex_Brush({
  variable: "--font-alex-brush",
  subsets: ["latin"],
  weight: "400",
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
      <body
        className={`${geistMono.variable} ${geist.variable} ${inter.variable} ${sourceCodePro.variable} ${alexBrush.variable} font-mono antialiased bg-black text-white`}
      >
        <ChunkErrorHandler />
        <Header />
        <main className="min-h-screen">{children}</main>
        <AppFooter />
      </body>
    </html>
  );
}