
"use client";
import React from "react";
import Slider,{Settings} from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RiStarSFill } from "react-icons/ri";
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";
import Image from "next/image";

const Testimoinals:React.FC = () => {
  const settings:Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay:true,
    autoplaySpeed: 2000,
    
  };
  return (
    <main className=" my-20 ">
      <div className="rounded-lg py-20 bg-[url('/globe.jpeg')] bg-center bg-white bg-blend-lighten bg-opacity-50">
        <h2 className="text-center font-extrabold text-l uppercase tracking-wider">
          Testimonials
        </h2>
        <h2 className="font-bold text-3xl text-gradient w-fit mx-auto mt-2">
          What Our Clients Are Saying
        </h2>

        <div className=" mx-40 text-center mt-10 relative">
          <Slider {...settings}>
            {testimonialsdata.map((item, index) => (
              <div key={index}>
                <div className="flex text-2xl text-orange-400 justify-center">
                  {[...Array(5)].map((_, index) => (
                    <RiStarSFill key={index} />
                  ))}
                </div>
                <h2 className="text-l font-semibold my-4">{item.desc}</h2>
                <Image src={item.img} alt={item.name} height={1000} width={1000} className="h-14 w-14 rounded-full mx-auto object-contain"/>
                <h2 className="text-xl font-bold py-4">{item.name}</h2>
              </div>
            ))}
          </Slider>

          <div className="absolute text-6xl bottom-[3em] opacity-50 text-tertiary">
            <ImQuotesLeft />
          </div>
          <div className="absolute text-6xl bottom-16 right-0 opacity-50 text-tertiary">
            <ImQuotesRight />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Testimoinals;

const testimonialsdata:Testimonial[] = [
  {
    name: "John Doe",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptates itaque possimus quae cumque dicta deserunt commodi facere libero at reiciendis ab amet distinctio voluptatibus corrupti quo, esse rerum debitis?",
    img: "/avatar.jpg",
  },
  {
    name: "Jane Doe",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptates itaque possimus quae cumque dicta deserunt commodi facere libero at reiciendis ab amet distinctio voluptatibus corrupti quo, esse rerum debitis?",
    img: "/avatar.jpg",
  },
  {
    name: "Alexander Muffins",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptates itaque possimus quae cumque dicta deserunt commodi facere libero at reiciendis ab amet distinctio voluptatibus corrupti quo, esse rerum debitis?",
    img: "/avatar.jpg",
  },
  {
    name: "Kiran Nepali",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptates itaque possimus quae cumque dicta deserunt commodi facere libero at reiciendis ab amet distinctio voluptatibus corrupti quo, esse rerum debitis?",
    img: "/avatar.jpg",
  },
];
type Testimonial = {
  name:String,
  desc:String,
  img:String,
}
