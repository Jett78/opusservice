"use client";
import Image from "next/image";
import React, { useState } from "react";

const OurTeam = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <main className="my-28 w-11/12 mx-auto">
      <h2 className="font-extrabold text-2xl uppercase w-fit mx-auto">
        Meet Our <span className="text-gradient">Team</span>
      </h2>
      <div className="grid grid-cols-4 gap-10 my-6 group cursor-pointer">
        {teamdata.map((item, index) => (
          <div
            key={index}
            className="relative group"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="overflow-hidden rounded-lg">
              <Image
                src={item.img}
                alt="team"
                width={700}
                height={1000}
                className={`h-[50vh] object-cover ease-in-out duration-300 ${
                  hoveredIndex === index ? "brightness-90 scale-105" : ""
                }`}
              />
            </div>
            <div
              className={`bg-white w-full px-2 absolute bottom-0 border-b py-2 transition-opacity duration-300 ${
                hoveredIndex === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="flex gap-20">
                <h2 className="font-bold text-xl">{item.name}</h2>
                <h3 className="font-medium text-l">{item.role}</h3>
              </div>
            </div>
            <div
              className={`absolute top-0 left-2 flex justify-center my-2 gap-4 transition-opacity duration-300 ${
                hoveredIndex === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src="/icons/whatsappicon.png"
                width={30}
                height={30}
                alt="icon"
              />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default OurTeam;

const teamdata = [
    {
      name: "Jane Doe",
      img: "/team/team1.jpg",
      role: "Chief Executive Officer",
    },
    {
      name: "Jane Doe",
      img: "/team/team1.jpg",
      role: "Chief Executive Officer",
    },
    {
      name: "Jane Doe",
      img: "/team/team1.jpg",
      role: "Chief Executive Officer",
    },
    {
      name: "Jane Doe",
      img: "/team/team1.jpg",
      role: "Chief Executive Officer",
    },
    {
      name: "Jane Doe",
      img: "/team/team1.jpg",
      role: "Chief Executive Officer",
    },
    {
      name: "Jane Doe",
      img: "/team/team1.jpg",
      role: "Chief Executive Officer",
    },
  ];
