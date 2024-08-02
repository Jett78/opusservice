import Image from "next/image";
import React from "react";
import { IoLocation } from "react-icons/io5";
import { BiDollar } from "react-icons/bi";
import { IoMdTime } from "react-icons/io";
import { HoverEffect } from "../components/ui/card-hover-effect";



const jobs = [
  {
    img: "/icons/facebookicon.png",
    company: "Apple",
    role: "Software Engineer",
    desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil eligendi. Sapiente corporis natus nesciunt vero obcaecati qui et veniameos.",
    salary: "10k - 20k",
    type: "Full-Time",
    location: "California",
    updatedon: "2",
  },
  {
    img: "/icons/instaicon.png",
    company: "Facebook",
    role: "Data Engineer",
    desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil eligendi. Sapiente corporis natus nesciunt vero obcaecati qui et veniameos.",
    salary: "50k - 60k",
    type: "Part-Time",
    location: "New-York",
    updatedon: "18",
  },
  {
    img: "/icons/whatsappicon.png",
    company: "Instagram",
    role: "Cyber Security",
    desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil eligendi. Sapiente corporis natus nesciunt vero obcaecati qui et veniameos.",
    salary: "20k - 25k",
    type: "Full-Time",
    location: "San Francisco",
    updatedon: "6",
  },
  {
    img: "/icons/instaicon.png",
    company: "IBM",
    role: "Backend Developer",
    desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil eligendi. Sapiente corporis natus nesciunt vero obcaecati qui et veniameos.",
    salary: "80k - 100k",
    type: "Full-Time",
    location: "New-York",
    updatedon: "10",
  },
  {
    img: "/icons/whatsappicon.png",
    company: "Invisible",
    role: "Software Engineer",
    desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil eligendi. Sapiente corporis natus nesciunt vero obcaecati qui et veniameos.",
    salary: "65k - 70k",
    type: "Part-Time",
    location: "Dublin",
    updatedon: "8",
  },
  {
    img: "/icons/facebookicon.png",
    company: "Google",
    role: "DevOps Engineer",
    desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil eligendi. Sapiente corporis natus nesciunt vero obcaecati qui et veniameos.",
    salary: "45k - 50k",
    type: "Part-Time",
    location: "Los Angelas",
    updatedon: "16",
  },
];
const page = () => {
  return (
    <div className="pt-10">

      <h2 className="font-extrabold text-3xl uppercase text-gradient w-fit mx-auto">
        Career
      </h2>
      <p className=" font-medium text-md max-w-[60em] md:mx-auto mx-2 py-2 text-center sm:text-l text-sm">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil,
        eligendi. Sapiente corporis natus nesciunt vero obcaecati qui et veniam
        eos.
      </p>

      <div className="w-11/12 mx-auto sm:w-full flex flex-wrap gap-10 justify-center my-10">
        {jobs.map((item, index) => (
          <div
            key={index}
            className="border border-[#00AFF0] rounded-lg p-6 sm:w-[25%]"
          >
            <div className="flex gap-6 border-b pb-2">
              <Image
                src={item.img}
                alt="team"
                width={60}
                height={50}
                className=" object-cover rounded-full"
              />

              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {" "}
                  {item.company}
                </h2>
                <h3 className="font-semibold text-sm text-lighttext">
                  {item.type}
                </h3>
              </div>
            </div>

            <div className="my-6">
              <h2 className="font-bold text-2xl">{item.role}</h2>
              <div className="flex justify-between font-semibold text-sm text-lighttext">
                <p className="flex flex-row-reverse items-center gap-1">{item.location}<IoLocation size={18}/>
                </p>
                <p className="flex flex-row-reverse items-center gap-1">{item.salary} <BiDollar size={18}/>
                </p>
                <p className="flex flex-row-reverse items-center gap-1">{item.type}<IoMdTime size={18}/>
                </p>
              </div>
            </div>

            <p className="font-semibold sm:my-6 my-2 text-lighttext sm:text-l text-sm">{item.desc}</p>

            <div className="flex justify-between items-center">
              <p className="font-semibold text-md">{item.updatedon} days ago</p>
              <button className="w-[140px] bg-black font-bold h-[45px] my-3 flex items-center justify-center rounded-full cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#CC1587] before:via-[#26538C] before:to-[#00AFF0] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
