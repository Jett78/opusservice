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
      <p className="font-medium text-md max-w-[60em] md:mx-auto mx-2 sm:text-l text-sm py-2 text-center"> Our team is equipped with a diverse range of certifications that validate our skills and expertise across various countries</p>
      <div className="flex justify-center gap-10 my-20 group cursor-pointer">
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
                className={`h-[50vh] w-[20em] object-cover ease-in-out duration-300 ${
                  hoveredIndex === index ? "grayscale scale-105" : ""
                }`}
              />
            </div>
            <div
              className={`bg-white w-full px-2 absolute bottom-0 border-b py-2 transition-opacity duration-300 ${
                hoveredIndex === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="grid place-items-center whitespace-nowrap py-2 ">
                <h2 className="font-bold text-xl">{item.name}</h2>
                <h3 className="font-semibold  text-sm italic tracking-wide">
                  {item.role}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      
      <div className="flex justify-center gap-10 my-20 group cursor-pointer">
        {teamdata2.map((item, index) => (
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
                className={`h-[42vh] w-[18em] object-cover ease-in-out duration-300 ${
                  hoveredIndex === index ? "grayscale scale-105" : ""
                }`}
              />
            </div>
            <div
              className={`bg-white w-full px-2 absolute bottom-0 border-b py-2 transition-opacity duration-300 ${
                hoveredIndex === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="grid place-items-center whitespace-nowrap py-2 ">
                <h2 className="font-bold text-xl">{item.name}</h2>
                <h3 className="font-semibold  text-sm italic tracking-wide">
                  {item.role}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="flex flex-wrap justify-center gap-10 my-20 group cursor-pointer">
        {teamdata3.map((item, index) => (
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
                className={`h-[50vh] w-[20em] object-cover ease-in-out duration-300 ${
                  hoveredIndex === index ? "grayscale scale-105" : ""
                }`}
              />
            </div>
            <div
              className={`bg-white w-full px-2 absolute bottom-0 border-b py-2 transition-opacity duration-300 ${
                hoveredIndex === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="grid place-items-center whitespace-nowrap py-2 ">
                <h2 className="font-bold text-xl">{item.name}</h2>
                <h3 className="font-semibold  text-sm italic tracking-wide">
                  {item.role}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div> */}
    </main>
  );
};

export default OurTeam;

const teamdata = [
  {
    name: "Jane Donald",
    img: "/team/team1.jpg",
    role: "Chief Executive Officer",
  },
  {
    name: "Alander Doe",
    img: "/team/team1.jpg",
    role: "Chief Marketting Officer",
  },
 
];
const teamdata2 = [
  {
    name: "Jane Doe",
    img: "/team/team1.jpg",
    role: "Chief Executive Officer",
  },
  {
    name: "Alander Donald",
    img: "/team/team1.jpg",
    role: "Chief Marketting Officer",
  },
  {
    name: "Rajesh Hamal",
    img: "/team/team1.jpg",
    role: "Chief Technical Officer",
  },
  {
    name: "Jane Doe",
    img: "/team/team1.jpg",
    role: "Chief Executive Officer",
  },
];
const teamdata3 = [
  {
    name: "Jane Doe",
    img: "/team/team1.jpg",
    role: "Chief Executive Officer",
  },
  {
    name: "Alander Doe",
    img: "/team/team1.jpg",
    role: "Chief Marketting Officer",
  },
  {
    name: "Rajesh Hamal",
    img: "/team/team1.jpg",
    role: "Chief Technical Officer",
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
