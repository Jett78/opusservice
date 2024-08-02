import React from "react";
import { IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { Form } from "../components/Form";
import Image from "next/image";
const locationinfo = [
  {
    img: <IoLocation />,
    title: "Address",
    desc: "Dubai",
  },
  {
    img: <MdEmail />,
    title: "Email",
    desc: "yourmail@gmail.com",
  },
  {
    img: <IoCall />,
    title: "Contact 1",
    desc: "01-555555",
  },
  {
    img: <IoCall />,
    title: "Contact 2 ",
    desc: "+977-989898989",
  },
];

const Contactus = () => {
  return (
    <main className=" mt-10 bg-gray-100 py-8">
      <div className="w-11/12 mx-auto flex flex-wrap gap-8 justify-between  rounded-2xl">
        <section className="sm:w-[30%]">
        
          <div className="sticky top-[10rem] left-0">
            <h1 className="header md:text-5xl text-3xl font-bold leading-[1.1em] whitespace-nowrap">
              Get in
              <span className="text-gradient"> Touch</span>
            </h1>
            <p className="font-medium text-sm py-4">
              Lorem ipsum dolor sit amet consectetur adipisicing e ut? Inventore
              blanditiis commodi dignissimos nisi optio in animi voluptas quos
              ab!
            </p>
            <div className="flex gap-4">
          <Image
            src="/icons/facebookicon.png"
            width={30}
            height={30}
            alt="icon"
          />
          <Image src="/icons/instaicon.png" width={30} height={30} alt="icon" />
          <Image
            src="/icons/whatsappicon.png"
            width={30}
            height={30}
            alt="icon"
          />
        </div>
          </div>
        </section>
        <section className="sm:w-[55%]">
          <div className="grid grid-cols-2 gap-6">
            {locationinfo.map((item, index) => (
              <div
                key={index}
                className="border shadow-md bg-white sm:w-[22em] w-[9em] sm:h-40 rounded-xl p-8 flex flex-col gap-2 items-center justify-center"
              >
                <div className="sm:text-3xl text-xl text-center animate-bounce">{item.img}</div>
                <div>
                  {/* <h2 className="font-bold text-xl">{item.title}</h2> */}
                  <h3 className="font-bold sm:text-2xl text-[12px] font-sans whitespace-nowrap">
                    {item.desc}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          <Form />
        </section>
      </div>
    </main>
  );
};

export default Contactus;
