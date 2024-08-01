"use client"
import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const page = () => {
  const cardsRef = useRef([]);
  
useGSAP(() => {
  gsap.to(cardsRef.current, {
    stagger: 2,
    scrollTrigger: {
      trigger: cardsRef.current,
      start: "top center",
      end: "bottom center",
      scrub: true,
    },
  });
})
  return (
    <div className="w-11/12 mx-auto pt-28">
      <h2 className="font-extrabold text-2xl uppercase text-gradient w-fit mx-auto">
        Our Services
      </h2>
      <p className=" font-medium text-md w-[60em] mx-auto py-2 text-center">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil,
        eligendi. Sapiente corporis natus nesciunt vero obcaecati qui et veniam
        eos. 
      </p>


      <div className="my-4 space-y-10">
        {servicesdata.map((item, index) => (
          <div
            key={index}
            className={`${
              index % 2 === 0 ? "flex-row-reverse" : "flex-row"
            } flex items-center justify-center gap-32  h-[85vh] rounded-2xl p-8`}
            ref={(el) => (cardsRef.current[index] = el)}
          >
            <figure>
              <Image
                src={item.img}
                alt="team"
                width={700}
                height={1000}
                className="h-[75vh] object-cover rounded-lg"
              />
            </figure>

            <div className="w-[50%]">
              <h2 className="text-5xl font-bold">{item.title}</h2>
              <h3 className="font-medium py-10">{item.desc}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;


const servicesdata = [
  {
    img: "/servicesimg/services1.jpg",
    title: "Oil & Gases",
    desc: "we are dedicated to powering the oil industry with exceptional human resource solutions tailored to meet the unique challenges and demands of this dynamic sector. As a trusted partner to oil and gas companies worldwide we are dedicated to powering the oil industry with exceptional human resource solutions tailored to meet the unique challenges and demands of this dynamic sector. As a trusted partner to oil and gas companies worldwidewe are dedicated to powering the oil industry with exceptional human resource solutions tailored to meet the unique challenges and demands of this dynamic sector. As a trusted partner to oil and gas companies worldwidewe are dedicated to powering the oil industry with exceptional human resource solutions tailored to meet the unique challenges and demands of this dynamic sector. As a trusted partner to oil and gas companies worldwide",
  },
  {
    img: "/servicesimg/services1.jpg",
    title: "Industrial Services",
    desc: "we are dedicated to powering the oil industry with exceptional human resource solutions tailored to meet the unique challenges and demands of this dynamic sector. As a trusted partner to oil and gas companies worldwide we are dedicated to powering the oil industry with exceptional human resource solutions tailored to meet the unique challenges and demands of this dynamic sector. As a trusted partner to oil and gas companies worldwidewe are dedicated to powering the oil industry with exceptional human resource solutions tailored to meet the unique challenges and demands of this dynamic sector. As a trusted partner to oil and gas companies worldwidewe are dedicated to powering the oil industry with exceptional human resource solutions tailored to meet the unique challenges and demands of this dynamic sector. As a trusted partner to oil and gas companies worldwide",
  },
  {
    img: "/servicesimg/services1.jpg",
    title: "Health Services",
    desc: "we are dedicated to powering the oil industry with exceptional human resource solutions tailored to meet the unique challenges and demands of this dynamic sector. As a trusted partner to oil and gas companies worldwide we are dedicated to powering the oil industry with exceptional human resource solutions tailored to meet the unique challenges and demands of this dynamic sector. As a trusted partner to oil and gas companies worldwidewe are dedicated to powering the oil industry with exceptional human resource solutions tailored to meet the unique challenges and demands of this dynamic sector. As a trusted partner to oil and gas companies worldwidewe are dedicated to powering the oil industry with exceptional human resource solutions tailored to meet the unique challenges and demands of this dynamic sector. As a trusted partner to oil and gas companies worldwide",
  },
  {
    img: "/servicesimg/services1.jpg",
    title: "Construction Services",
    desc: "we are dedicated to powering the oil industry with exceptional human resource solutions tailored to meet the unique challenges and demands of this dynamic sector. As a trusted partner to oil and gas companies worldwide we are dedicated to powering the oil industry with exceptional human resource solutions tailored to meet the unique challenges and demands of this dynamic sector. As a trusted partner to oil and gas companies worldwidewe are dedicated to powering the oil industry with exceptional human resource solutions tailored to meet the unique challenges and demands of this dynamic sector. As a trusted partner to oil and gas companies worldwidewe are dedicated to powering the oil industry with exceptional human resource solutions tailored to meet the unique challenges and demands of this dynamic sector. As a trusted partner to oil and gas companies worldwide",
  },
  {
    img: "/servicesimg/services1.jpg",
    title: "Information Technology",
    desc: "we are dedicated to powering the oil industry with exceptional human resource solutions tailored to meet the unique challenges and demands of this dynamic sector. As a trusted partner to oil and gas companies worldwide we are dedicated to powering the oil industry with exceptional human resource solutions tailored to meet the unique challenges and demands of this dynamic sector. As a trusted partner to oil and gas companies worldwidewe are dedicated to powering the oil industry with exceptional human resource solutions tailored to meet the unique challenges and demands of this dynamic sector. As a trusted partner to oil and gas companies worldwidewe are dedicated to powering the oil industry with exceptional human resource solutions tailored to meet the unique challenges and demands of this dynamic sector. As a trusted partner to oil and gas companies worldwide",
  },
  {
    img: "/servicesimg/services1.jpg",
    title: "Accomodation & Transportation",
    desc: "we are dedicated to powering the oil industry with exceptional human resource solutions tailored to meet the unique challenges and demands of this dynamic sector. As a trusted partner to oil and gas companies worldwide we are dedicated to powering the oil industry with exceptional human resource solutions tailored to meet the unique challenges and demands of this dynamic sector. As a trusted partner to oil and gas companies worldwidewe are dedicated to powering the oil industry with exceptional human resource solutions tailored to meet the unique challenges and demands of this dynamic sector. As a trusted partner to oil and gas companies worldwidewe are dedicated to powering the oil industry with exceptional human resource solutions tailored to meet the unique challenges and demands of this dynamic sector. As a trusted partner to oil and gas companies worldwide",
  },
  {
    img: "/servicesimg/services1.jpg",
    title: "Blue-Collar & WHite-Collar services",
    desc: "we are dedicated to powering the oil industry with exceptional human resource solutions tailored to meet the unique challenges and demands of this dynamic sector. As a trusted partner to oil and gas companies worldwide we are dedicated to powering the oil industry with exceptional human resource solutions tailored to meet the unique challenges and demands of this dynamic sector. As a trusted partner to oil and gas companies worldwidewe are dedicated to powering the oil industry with exceptional human resource solutions tailored to meet the unique challenges and demands of this dynamic sector. As a trusted partner to oil and gas companies worldwidewe are dedicated to powering the oil industry with exceptional human resource solutions tailored to meet the unique challenges and demands of this dynamic sector. As a trusted partner to oil and gas companies worldwide",
  },
];