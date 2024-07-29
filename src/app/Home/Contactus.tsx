import React from "react";
import { IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";

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
    <main className="w-11/12 mx-auto my-20">
      <div className="flex flex-row-reverse justify-between">
        <section className="shadow-md rounded-2xl border-[#CC1587] border p-6 max-w-[50%]">
          <form action="#" className="space-y-8">
          <section className="flex gap-4">
          <div className="grid">
                <label htmlFor="name" className="font-semibold text-sm">First Name</label>
              <input
                type="text"
                className="border rounded-full p-2 w-72 outline-none"
              />
            </div>
            <div className="grid">
                <label htmlFor="name" className="font-semibold text-sm">Last Name</label>
              <input
                type="text"
                className="border rounded-full p-2 w-72 outline-none"
              />
            </div>
          </section>
          <section className="flex gap-4">
          <div className="grid">
                <label htmlFor="name" className="font-semibold text-sm">Email</label>
              <input
                type="text"
                className="border rounded-full p-2 w-72 outline-none"
              />
            </div>
            <div className="grid">
                <label htmlFor="name" className="font-semibold text-sm">Address</label>
              <input
                type="text"
                className="border rounded-full p-2 w-72 outline-none"
              />
            </div>
          </section>
          <section className="flex gap-4">
          <div className="grid">
                <label htmlFor="name" className="font-semibold text-sm">Number</label>
              <input
                type="text"
                className="border rounded-full p-2 w-72 outline-none"
              />
            </div>
            <div className="grid">
                <label htmlFor="name" className="font-semibold text-sm">Service</label>
              <input
                type="text"
                className="border rounded-full p-2 w-72 outline-none"
              />
            </div>
          </section>
           
            <button className="button-gradient">Send Message</button>
          </form>
        </section>

        <section>
          <div className=" w-[40em]">
            <h2 className=" font-bold text-4xl text-gradient w-fit ">
              Contact us
            </h2>
            <p className=" font-medium py-2 w-[30em]">
              Contact us to start a conversation about how we can empower your
              work force and enrich your future.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-y-6 mt-10">
            {locationinfo.map((item,index) => (
                <div key={index} className="flex gap-2">
                    <div className="text-3xl text-[#00AFF0]">
                        {item.img}
                    </div>
                    <div>
                        <h2 className="font-semibold text-lg">{item.title}</h2>
                        <p className="font-medium text-lighttext text-sm">{item.desc}</p>
                    </div>
                </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Contactus;
