"use client";

import { useEffect } from 'react';
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./Home/Footer";
import Lenis from 'lenis';
import Headroom from 'react-headroom';

// Initialize Lenis once the component is mounted
function initializeLenis() {
  const lenis = new Lenis();

  lenis.on("scroll", (e: any) => {
    console.log(e);
  });

  function raf(time: any) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    initializeLenis();
  }, []);

  return (
    <html lang="en">
      <body>
        <Headroom>
          <Navbar />
        </Headroom>
        {children}
        <Footer />
      </body>
    </html>
  );0
}
