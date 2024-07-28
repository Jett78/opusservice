"use client"
import gsap from "gsap";
import React, { useEffect, useState } from "react";

const navdata = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Services",
    path: "/services",
  },
  {
    title: "Career",
    path: "/career",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Contact us",
    path: "/contact",
  },
];

const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the page is scrolled down
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    // Add event listener
    window.addEventListener("scroll", handleScroll);
    // Cleanup event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    gsap.to(".navbar", {
      backgroundColor: isScrolled ? "#1E1E1E" : "",
      duration: 0.5,
    });
  }, [isScrolled]);

  return (
    <main className="navbar text-white flex justify-between fixed top-0 left-0 w-full items-center py-6 px-20 z-50">
      <figure>
        <h2>Logo</h2>
      </figure>

      <nav className="flex gap-8">
        {navdata.map((items,index) => (
            <div key={index} className="list-none">
                <li className="text-[16px] font-semibold">{items.title}</li>
            </div>
        ))}
      </nav>
    </main>
  );
};

export default Navbar;
