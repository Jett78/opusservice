"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";


const navdata = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/About",
  },
  {
    title: "Services",
    path: "/Services",
  },
  {
    title: "Career",
    path: "/Career",
  },
  {
    title: "Blog",
    path: "/Blog",
  },
  {
    title: "Contact us",
    path: "/Contact",
  },
];

const Navbar = () => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    if (router.pathname === "/") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [router.pathname]);

  return (
    <main
      className={`navbar text-white flex justify-between fixed top-0 left-0 w-full items-center py-6 md:px-20 px-6 z-50 ${
        router.pathname === "/" && isScrolled ? "bg-[#1E1E1E]" : "bg-black"
      }`}
    >
      <figure>
        <h2>Logo</h2>
      </figure>

      <nav className="gap-10 md:flex hidden">
        {navdata.map((items, index) => (
          <div key={index} className="list-none">
            <Link href={items.path} className="font-semibold ">{items.title}</Link>
          </div>
        ))}
      </nav>

      <div className="md:hidden block">
      <GiHamburgerMenu />

      </div>
    </main>
  );
};

export default Navbar;
