"use client"
import React, { useRef } from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";


gsap.registerPlugin(ScrollTrigger);
const OurServices = () => {
  const mainRef = useRef(null);

  useGSAP(() => {
    const main = mainRef.current;
    gsap.to(main, {
      scrollTrigger: {
        trigger: main,
        start: "center center",
        end: () => `+=${main.scrollWidth * 1}`,
        pin: true,
        scrub: 2,
      },
      x: "-3300px",
    });
  }, []);

  return (
    <main ref={mainRef} className="pl-24 my-28 flex items-center gap-10 ">
    <section>
      <div className="flex items-center gap-4">
        <h2 className="font-bold text-3xl text-gradient uppercase">Services</h2>
        <p className="border-2 border-primary rounded-full h-14 w-14 flex justify-center items-center">
        <FaArrowRightLong />

          </p>
      </div>
      <p className="text-left text-md font-medium w-[16em] mt-4">
        A selection of our crafted work, built from scratch by our talented
        team.
      </p>
     <button  className='mt-60 group relative border rounded-2xl border-secondary w-40 h-10 font-semibold text-xl ease-in-out duration-300 overflow-hidden'>
        <span className='pt-1 flex items-center justify-center group-hover:-translate-y-10 ease-in-out duration-300'>
          View More
        </span>
        <span className='translate-y-10 flex items-center justify-center group-hover:-translate-y-6  ease-in-out duration-300'>
          View More
        </span>
      </button>     
    </section>

    <section className="flex gap-4 overflow-x-clip">
      {services.map((item, index) => (
        <div key={index} className="relative w-[40em] h-[35em] flex-shrink-0  cursor-pointer">
          <Image
            src={item.img}
            alt="scroll-images"
            layout="fill"
            objectFit="cover"
            className="rounded-3xl"
          />
          
          <div className="w-full h-full absolute inset-0 text-white rounded-3xl  bg-gradient-to-b from-transparent via-transparent to-black">
            <div className="absolute bottom-12 left-8">
              <h2 className="font-semibold text-3xl">{item.title}</h2>
            </div>
          </div>
        </div>
      ))}
    </section>

  </main>
  )
}

export default OurServices

const services = [
  {
    title: "Oil & Gases",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendisodio aut porro provident placeat, aliquid tempora ea unde earumneque incidunt est, ratione nostrum. Expedita consequatur doloremlabore beatae aut!",
    img: "/servicesimg/services1.jpg",
  },
  {
    title: "Construction Service",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendisodio aut porro provident placeat, aliquid tempora ea unde earumneque incidunt est, ratione nostrum. Expedita consequatur doloremlabore beatae aut!",
    img: "/servicesimg/services2.jpg",
  },
  {
    title: "Industrial Services",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendisodio aut porro provident placeat, aliquid tempora ea unde earumneque incidunt est, ratione nostrum. Expedita consequatur doloremlabore beatae aut!",
    img: "/servicesimg/services3.jpg",
  },
  {
    title: "Health Services",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendisodio aut porro provident placeat, aliquid tempora ea unde earumneque incidunt est, ratione nostrum. Expedita consequatur doloremlabore beatae aut!",
    img: "/servicesimg/services4.jpg",
  },
  {
    title: "Information & Technology",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendisodio aut porro provident placeat, aliquid tempora ea unde earumneque incidunt est, ratione nostrum. Expedita consequatur doloremlabore beatae aut!",
    img: "/servicesimg/services2.jpg",
  },
  {
    title: "Accomodation & Transformation",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendisodio aut porro provident placeat, aliquid tempora ea unde earumneque incidunt est, ratione nostrum. Expedita consequatur doloremlabore beatae aut!",
    img: "/servicesimg/services1.jpg",
  },
  {
    title: "Blue-Collar & White-Collar Services",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendisodio aut porro provident placeat, aliquid tempora ea unde earumneque incidunt est, ratione nostrum. Expedita consequatur doloremlabore beatae aut!",
    img: "/servicesimg/services3.jpg",
  },
];