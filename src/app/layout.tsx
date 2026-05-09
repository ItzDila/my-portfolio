import type { Metadata, Viewport } from "next";
import React, { Suspense } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Geist_Mono, Geist } from "next/font/google";
import "./globals.css";
import Header from "./header";
import ChunkErrorHandler from "@/components/ChunkErrorHandler";
import AppFooter from "@/components/AppFooter";
import LiveBackground from "@/components/LiveBackground";
import LoadingScreen from "@/components/LoadingScreen";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Timesh Dillon",
  description: "Creative developer and designer",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover", // enables env(safe-area-inset-*) on iOS
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistMono.variable} ${geist.variable} font-mono antialiased bg-black text-white`}
      >
        <LoadingScreen />
        <ChunkErrorHandler />
        <LiveBackground />
        <Header />
        <main className="min-h-screen">{children}</main>
        <AppFooter />
        <Suspense fallback={null}>
          <SpeedInsights />
        </Suspense>
      </body>
    </html>
  );
}
