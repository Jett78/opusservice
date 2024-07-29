"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaCircleArrowLeft } from "react-icons/fa6";

const services = [
  {
    title: "Oil & Gases",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendisodio aut porro provident placeat, aliquid tempora ea unde earumneque incidunt est, ratione nostrum. Expedita consequatur doloremlabore beatae aut!",
    img: "./servicesimg/services1.jpg",
  },
  {
    title: "Construction Service",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendisodio aut porro provident placeat, aliquid tempora ea unde earumneque incidunt est, ratione nostrum. Expedita consequatur doloremlabore beatae aut!",
    img: "./servicesimg/services2.jpg",
  },
  {
    title: "Industrial Services",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendisodio aut porro provident placeat, aliquid tempora ea unde earumneque incidunt est, ratione nostrum. Expedita consequatur doloremlabore beatae aut!",
    img: "./servicesimg/services3.jpg",
  },
  {
    title: "Health Services",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendisodio aut porro provident placeat, aliquid tempora ea unde earumneque incidunt est, ratione nostrum. Expedita consequatur doloremlabore beatae aut!",
    img: "./servicesimg/services4.jpg",
  },
  {
    title: "Information & Technology",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendisodio aut porro provident placeat, aliquid tempora ea unde earumneque incidunt est, ratione nostrum. Expedita consequatur doloremlabore beatae aut!",
    img: "./servicesimg/services2.jpg",
  },
  {
    title: "Accomodation & Transformation",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendisodio aut porro provident placeat, aliquid tempora ea unde earumneque incidunt est, ratione nostrum. Expedita consequatur doloremlabore beatae aut!",
    img: "./servicesimg/services1.jpg",
  },
  {
    title: "Blue-Collar & White-Collar Services",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendisodio aut porro provident placeat, aliquid tempora ea unde earumneque incidunt est, ratione nostrum. Expedita consequatur doloremlabore beatae aut!",
    img: "./servicesimg/services3.jpg",
  },
];

const OurServices = () => {
  const sliderRef = useRef(null);

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <main className="relative w-11/12 mx-auto my-20 bg-[#3a6eb2] rounded-2xl px-8 py-16 shadow-sm shadow-black">
      <h2 className="text-white font-bold text-2xl">Services</h2>

      <div className="text-white flex justify-between items-end my-8">
        <div>
          <h2 className="font-bold text-4xl">Explore Our </h2>
          <h2 className="font-bold text-4xl">Comprehensive Services</h2>
        </div>
        <button className="font-medium flex gap-2">
          View All
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M8 7a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V9.414l-8.293 8.293a1 1 0 0 1-1.414-1.414L14.586 8H9a1 1 0 0 1-1-1"
            />
          </svg>
        </button>
      </div>

      <div className="slider-container">
        <Slider {...settings} ref={sliderRef}>
          {services.map((item, index) => (
            <div key={index} className="relative">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={item.img}
                  alt="services-img"
                  className="w-[25em] h-[25em] rounded-2xl object-cover hover:scale-105 duration-300 ease-in-out brightness-50"
                />
              </div>
              <h2 className="text-white font-bold text-2xl my-4 absolute bottom-0 left-2 z-10">
                {item.title}
              </h2>
            </div>
          ))}
        </Slider>
        <div className="absolute right-10 bottom-4 flex gap-4 text-2xl">
          <button onClick={handlePrev}>
            <FaCircleArrowLeft />
          </button>
          <button onClick={handleNext}>
            <FaCircleArrowRight />
          </button>
        </div>
      </div>
    </main>
  );
};

export default OurServices;
