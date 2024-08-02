import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCopyright } from "react-icons/fa6";

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

const anotherlink = [
  {
    title:"Outscourcing",
    path:"/"
  },
  {
    title:"OutStaffing",
    path:"/"
  },
  {
    title:"Business Assistance",
    path:"/"
  },
  {
    title:"Marketting",
    path:"/"
  },
]

const Footer:React.FC = () => {
  return (
   <main className="bg-black text-white">
      <footer className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 sm:gap-0 gap-10 py-14 sm:px-28 px-4 border-b border-gray-600">
      <section className="space-y-4 grid place-items-center relative">
        <figure className="absolute   sm:-top-10 -top-20 -left-6">
        <Image
              src="/opusLogo.png"
              alt="logo"
              height={1000}
              width={1000}
              className="w-36 h-36"
            />{" "}
        </figure>
        <p className="text-sm font-medium text-lighttext">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          eveniet quas error quam quasi nesciunt recusandae autem corporis ut
          eos ratione, aspernatur et saepe vitae laudantium eius aliquid eum?
          Doloribus?
        </p>
        {/* <div className="flex gap-4">
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
        </div> */}
      </section>

     <div className="col-span-2 flex sm:justify-center justify-between sm:gap-40">
     <section className="grid sm:items-center sm:place-items-center place-items-start text-center">
        <h2 className="font-semibold text-lg">Quick Links</h2>
        <ul className="space-y-2 mt-4 text-lighttext  font-medium">
          {navdata.map((item,index) => (
            <div key={index} className="hover:text-white">
                 <Link href={item.path}>{item.title}</Link>     
            </div>
          ))}
        </ul>
      </section>

      <section className="flex flex-col sm:items-center items-start">
        <h2 className="font-semibold text-lg">Our Services</h2>
        <ul className="space-y-2 mt-4 text-center text-lighttext font-medium">
         {anotherlink.map((item,index) => (
          <div key={index} className="hover:text-white">
            <Link href={item.path}>{item.title}</Link>
          </div>
         ))}
        </ul>
      </section>

     </div>
      <section className="space-y-4 flex flex-col sm:items-end">
        <h2 className="font-semibold text-lg ">Get Latest Updates</h2>
        <p className="sm:text-end font-medium text-lighttext">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
          quis!
        </p>
        <div className="flex">
          <input
            type="text"
            placeholder="Enter your email"
            className="p-2 bg-white outline-none rounded-tl-xl rounded-bl-xl text-black"
            
          />
          <button className="bg-secondary p-2 font-semibold rounded-tr-xl rounded-br-xl">
            Subscribe
          </button>
        </div>
      </section>
    </footer>

    <div className="py-4 flex items-center gap-1 justify-center">
    <FaCopyright />

      <h2 className="text-white tracking-wider text-sm">Designed and Developed by <span className=" font-bold">WebX</span></h2>
    </div>
   </main>
  );
};

export default Footer;
