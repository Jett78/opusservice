"use client";

import { useEffect } from 'react';
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./Home/Footer";
import Lenis from 'lenis';
import Headroom from 'react-headroom';
import MobileButtons from './components/MobileButtons';

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
          <Navbar />
        {children}
        <Footer />
        <div className='z-100 fixed botom-0'>
        <MobileButtons/>
        </div>
      </body>
    </html>
  );0
}
