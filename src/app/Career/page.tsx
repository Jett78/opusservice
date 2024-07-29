import Image from "next/image";
import React from "react";
const jobs = [
  {
    img: "/icons/facebookicon.png",
    company: "Apple",
    role: "Software Engineer",
    desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil eligendi. Sapiente corporis natus nesciunt vero obcaecati qui et veniameos.",
    salary: "10k - 20k",
    type: "FUll-Time",
    location: "New-York",
    updatedon: "2",
  },
  {
    img: "/icons/instaicon.png",
    company: "Facebook",
    role: "Data Engineer",
    desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil eligendi. Sapiente corporis natus nesciunt vero obcaecati qui et veniameos.",
    salary: "10k - 20k",
    type: "FUll-Time",
    location: "New-York",
    updatedon: "2",
  },
  {
    img: "/icons/whatsappicon.png",
    company: "Instagram",
    role: "Cyber Security",
    desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil eligendi. Sapiente corporis natus nesciunt vero obcaecati qui et veniameos.",
    salary: "10k - 20k",
    type: "FUll-Time",
    location: "New-York",
    updatedon: "2",
  },
  {
    img: "/icons/instaicon.png",
    company: "IBM",
    role: "Backend Developer",
    desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil eligendi. Sapiente corporis natus nesciunt vero obcaecati qui et veniameos.",
    salary: "10k - 20k",
    type: "FUll-Time",
    location: "New-York",
    updatedon: "2",
  },
  {
    img: "/icons/whatsappicon.png",
    company: "Invisible",
    role: "Software Engineer",
    desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil eligendi. Sapiente corporis natus nesciunt vero obcaecati qui et veniameos.",
    salary: "10k - 20k",
    type: "FUll-Time",
    location: "New-York",
    updatedon: "2",
  },
  {
    img: "/icons/facebookicon.png",
    company: "Google",
    role: "DevOps Engineer",
    desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil eligendi. Sapiente corporis natus nesciunt vero obcaecati qui et veniameos.",
    salary: "10k - 20k",
    type: "FUll-Time",
    location: "New-York",
    updatedon: "2",
  },
];
const page = () => {
  return (
    <div className="pt-28">
      <h2 className="font-extrabold text-2xl uppercase text-gradient w-fit mx-auto">
        Career
      </h2>
      <p className=" font-medium text-md w-[60em] mx-auto py-2 text-center">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil,
        eligendi. Sapiente corporis natus nesciunt vero obcaecati qui et veniam
        eos.
      </p>

      <div className="flex flex-wrap gap-10 justify-center my-10">
        {jobs.map((item, index) => (
          <div key={index} className="border border-[#00AFF0] rounded-lg p-6 w-[25%]">
            <div className="flex gap-6 border-b pb-2">
              <Image
                src={item.img}
                alt="team"
                width={60}
                height={50}
                className=" object-cover rounded-full"
              />

              <div>
                <h2 className="text-2xl font-bold text-gray-900"> {item.company}</h2>
                <h3 className="font-semibold text-sm text-lighttext">{item.type}</h3>
              </div>
            </div>

            <div className="my-6">
                <h2 className="font-bold text-2xl">{item.role}</h2>
                <div className="flex justify-between font-semibold text-sm text-lighttext">
                    <p>{item.location}</p>
                    <p>{item.salary}</p>
                    <p>{item.type}</p>
                </div>
            </div>

            <p className="font-semibold my-6 text-lighttext">{item.desc}</p>

            <div className="flex justify-between items-center">
                <p className="font-semibold text-md">{item.updatedon} days ago</p>
                <button className="button-gradient">Apply Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
