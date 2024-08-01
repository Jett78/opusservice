"use client";
import React, { useRef } from "react";
import { GrVisa } from "react-icons/gr";
import { IoCall } from "react-icons/io5";
import { FaReadme } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const whyusdata = [
  {
    title: "Recruitment",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendis seconsequat tempor turpis, quis egestas ligula efficitur et. Donec at diam at nisl consectetur.",
    img: <IoPeopleSharp />,
  },
  {
    title: "Training",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendis seconsequat tempor turpis, quis egestas ligula efficitur et. Donec at diam at nisl consectetur.",
    img: <FaReadme />,
  },
  {
    title: "24/7 Support",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendis seconsequat tempor turpis, quis egestas ligula efficitur et. Donec at diam at nisl consectetur.",
    img: <IoCall />,
  },
  {
    title: "Visa Assistance",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendis seconsequat tempor turpis, quis egestas ligula efficitur et. Donec at diam at nisl consectetur.",
    img: <GrVisa />,
  },
];

const WhyUs = () => {
  const whycontainerRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: whycontainerRef.current,
        start: "top bottom",
        end: "50% 50%",
        scrub: 1,
        // markers: true,
      },
    });

    tl.from(
      ".headanimate",
      {
        y: 24,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
      },
      "<"
    );
    tl.from(
      ".box-animate",
      {
        rotateY: "120deg",
        // opacity:0,
        stagger: 0.5,
        duration: 2,
      },
      "<"
    );
    tl.from(
      ".box-animate2",
      {
        rotateY: "360deg",
        // opacity:0,
        stagger: 0.5,
        duration: 2,
      },
      "<"
    );
  });
  return (
    <main className=" my-20" ref={whycontainerRef}>
      <div className="flex justify-between w-11/12 mx-auto ">
        <section className="w-[50%]">
          <div className="sticky top-[10rem]">
            <div className="h-[24px] overflow-hidden mb-6">
              <h2 className="headanimate text-gradient uppercase font-bold text-xl border-b w-fit ">
                Why Us
              </h2>
            </div>
            <h1 className="headanimate text-5xl font-bold leading-[1.1em]">
              Right Connection and Right Employee
            </h1>
            <p className="headanimate font-medium text-lighttext my-6 w-[40em]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse consequat tempor turpis, quis egestas ligula efficitur
              et. Donec at diam at nisl consectetur. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Suspendisse consequat tempor turpis,
              quis egestas ligula efficitur et. Donec at diam at nisl
              consectetur.
            </p>
            <button className=" w-[140px] bg-black font-bold h-[45px] my-3 flex items-center justify-center rounded-full cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#CC1587] before:via-[#26538C] before:to-[#00AFF0] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
              Find Job Now
            </button>
          </div>
        </section>

        <section className="flex gap-4">
          <div className=" space-y-6">
            {whyusdata.slice(0, 2).map((item, index) => (
              <div
                key={index}
                className="box-animate border border-[#00AFF0] rounded-lg w-80 p-4 cursor-pointer group relative"
              >
                <div className="h-14 w-14 rounded-full border mb-6 gradient text-white text-2xl flex items-center justify-center relative z-50">
                  <div>{item.img}</div>
                </div>
                <h2 className="font-bold text-2xl group-hover:text-white z-50 relative">{item.title}</h2>
                <p className="font-medium text-lighttext group-hover:text-white text-sm my-2 z-50 relative">
                  {item.desc}
                </p>
                <div className="z-0 absolute bg-gradient-to-tr from-primary via-secondary to-tertiary w-full right-0 group-hover:h-full rounded-lg bottom-0 duration-500 ease-in-out transform scale-x-0  group-hover:scale-x-100 origin-left" />

              </div>
            ))}
          </div>

          <div className="mt-10 space-y-6">
            {whyusdata.slice(2, 4).map((item, index) => (
              <div
                key={index}
                className="box-animate2 border border-[#CC1587] rounded-lg w-80 p-4 cursor-pointer group relative"
              >
                <div className="h-14 w-14 rounded-full border mb-6 gradient text-white text-2xl flex items-center justify-center relative z-50">
                  <div>{item.img}</div>
                </div>
                <h2 className="font-bold text-2xl group-hover:text-white z-50 relative">{item.title}</h2>
                <p className="font-medium text-lighttext group-hover:text-white text-sm my-2 z-50 relative">
                  {item.desc}
                </p>
                <div className="z-0 absolute bg-gradient-to-tr from-primary via-secondary to-tertiary w-full right-0 group-hover:h-full rounded-lg bottom-0 duration-500 ease-in-out transform scale-x-0  group-hover:scale-x-100 origin-left" />

              </div>
            ))}
          </div>
        </section>
      </div>

      {/* bg-parallax */}
      {/* <div className="bg-parallax bg-fixed h-[30vh] bg-cover my-20"></div> */}
    </main>
  );
};

export default WhyUs;
