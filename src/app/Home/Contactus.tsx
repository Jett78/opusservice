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
    desc: "Samakhusi-11",
  },
  {
    img: <MdEmail />,
    title: "Email",
    desc: "opus211@gmail.com",
  },
  {
    img: <IoCall />,
    title: "Contact 1",
    desc: "01-521457",
  },
  {
    img: <IoCall />,
    title: "Contact 2 ",
    desc: "+977-9856589654",
  },
];

const Contactus = () => {
  return (
    <main className=" mt-10 bg-gray-100 py-8">
      <div className="w-11/12 mx-auto flex  justify-between px-6 rounded-2xl">
        <section className="w-[30%]">
          {/* <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10433.380097085568!2d85.32065640507321!3d27.675237067138614!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19eb1dad6439%3A0xbb1689fdcee3740b!2sLabim%20Mall!5e0!3m2!1sen!2snp!4v1722408798182!5m2!1sen!2snp"
        width="710"
        height="550"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        className="rounded-2xl"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe> */}
          <div className="sticky top-[10rem] left-0">
            <h1 className="header text-5xl font-bold leading-[1.1em]">
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
        <section className="W-[50%]">
          <div className="grid grid-cols-2 gap-8">
            {locationinfo.map((item, index) => (
              <div
                key={index}
                className="border shadow-md bg-white w-[22em] h-40 rounded-xl p-8 flex flex-col items-center justify-center"
              >
                <div className="text-3xl text-center ">{item.img}</div>
                <div>
                  {/* <h2 className="font-bold text-xl">{item.title}</h2> */}
                  <h3 className="font-bold text-2xl font-sans ">
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
