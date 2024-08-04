"use client";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);
const OurServices: React.FC = () => {
  const mainRef = useRef<any>();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };
  useGSAP(() => {
    const main = mainRef.current;
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    if (mediaQuery.matches) {
      gsap.to(main, {
        scrollTrigger: {
          trigger: main,
          start: "center center",
          end: () => `+=${main.scrollWidth * 1}`,
          pin: true,
          scrub: 2,
        },
        x: "-2800px",
      });
    }
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      <main
        ref={mainRef}
        className="md:pl-24 my-28 md:flex items-center sm:gap-20 gap-8  "
      >
        <section className="flex flex-col justify-between sm:gap-20">
          <div className="md:pl-0 pl-4">
            <div className="flex items-center gap-4 w-[25em]">
              <h2 className="font-bold sm:text-4xl text-center text-2xl text-gradient uppercase">
                Our Services
              </h2>
              <p className="border-2 border-primary rounded-full h-10 w-10 md:flex hidden justify-center items-center">
                <FaArrowRightLong />
              </p>
            </div>
            <p className="text-left sm:text-2xl text-sm font-medium max-w-[20em] mt-4">
              Explore our comprehensive range of services designed to meet your
              diverse needs, from industrial and IT solutions to transportation
              and construction services.
            </p>
          </div>
          <button className="md:w-[140px] w-[130px] md:mx-0 mx-auto bg-black font-bold h-[45px] my-3 flex items-center justify-center rounded-full cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#CC1587] before:via-[#26538C] before:to-[#00AFF0] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
            View More
          </button>
        </section>

        <section className="md:flex hidden gap-4 overflow-x-clip">
          {services.map((item, index) => (
            <div
              key={index}
              className="relative sm:w-[32em] w-[20em] h-[20em] sm:h-[35em] flex-shrink-0 hover:scale-90 duration-300 ease-in-out cursor-pointer overflow-hidden"
            >
              <Link href="/Services">
                <Image
                  src={item.img}
                  alt="scroll-images"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl hover:scale-110 ease-in-out duration-300"
                />

                <div className="w-full h-full absolute inset-0 text-white rounded-3xl  bg-gradient-to-b from-transparent via-transparent bg-black bg-blend-overlay bg-opacity-30 to-black">
                  <div className="absolute bottom-12 left-8">
                    <h2 className="font-bold sm:text-2xl text-xl">
                      {item.title}
                    </h2>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </section>

        {/* this slider is for smaller screens only */}
        <section className="md:hidden block mx-2">
          <Slider {...settings}>
            {services.map((item, index) => (
              <div
                key={index}
                className="relative sm:w-[32em] w-[20em] h-[20em] sm:h-[35em] flex-shrink-0  cursor-pointer overflow-hidden "
              >
                <Image
                  src={item.img}
                  alt="scroll-images"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl hover:scale-110 ease-in-out duration-300"
                />

                <div className="w-full h-full absolute inset-0 text-white rounded-3xl  bg-gradient-to-b from-transparent via-transparent to-black">
                  <div className="absolute bottom-12 left-8">
                    <h2 className="font-bold sm:text-2xl text-xl">
                      {item.title}
                    </h2>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </section>
      </main>
    </div>
  );
};

export default OurServices;

const services = [
  {
    title: "Oil & Gases",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendisodio aut porro provident placeat, aliquid tempora ea unde earumneque incidunt est, ratione nostrum. Expedita consequatur doloremlabore beatae aut!",
    img: "/servicesimg/oil.png",
  },
  {
    title: "Construction Service",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendisodio aut porro provident placeat, aliquid tempora ea unde earumneque incidunt est, ratione nostrum. Expedita consequatur doloremlabore beatae aut!",
    img: "/servicesimg/construction.png",
  },
  {
    title: "Industrial Services",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendisodio aut porro provident placeat, aliquid tempora ea unde earumneque incidunt est, ratione nostrum. Expedita consequatur doloremlabore beatae aut!",
    img: "/servicesimg/industrial.png",
  },
  {
    title: "Health Services",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendisodio aut porro provident placeat, aliquid tempora ea unde earumneque incidunt est, ratione nostrum. Expedita consequatur doloremlabore beatae aut!",
    img: "/servicesimg/health.png",
  },
  {
    title: "Information & Technology",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendisodio aut porro provident placeat, aliquid tempora ea unde earumneque incidunt est, ratione nostrum. Expedita consequatur doloremlabore beatae aut!",
    img: "/servicesimg/technology.png",
  },
  {
    title: "Accomodation & Transformation",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendisodio aut porro provident placeat, aliquid tempora ea unde earumneque incidunt est, ratione nostrum. Expedita consequatur doloremlabore beatae aut!",
    img: "/servicesimg/transportation.png",
  },
  {
    title: "Blue-Collar & White-Collar Services",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendisodio aut porro provident placeat, aliquid tempora ea unde earumneque incidunt est, ratione nostrum. Expedita consequatur doloremlabore beatae aut!",
    img: "/servicesimg/services3.jpg",
  },
];
