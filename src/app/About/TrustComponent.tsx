"use client"
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TrustComponent = () => {
  const settings = {
    dots: false,
    arrows:false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: false, // Continue sliding when hovered

  };
  const settings2 = {
    dots: false,
    arrows:false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    rtl: true,// Add this line to change the slide direction
    pauseOnHover: false, // Continue sliding when hovered


  };
  return (
    <main className="my-28">
      <h2 className="font-bold text-2xl w-fit mx-auto uppercase">
        <span className="text-gradient font-extrabold">Trusted </span>by 1000+
        Companies
      </h2>

      <div className=" mt-10">
      <Slider {...settings}>
        {companies.map((item,index) => (
            <div key={index}>
                <Image src={item.img} alt="icons-company" width={100} height={100} className=' object-cover rounded-lg' />
            </div>
        ))}
        </Slider>
      </div>

      <div className=" mt-6">
      <Slider {...settings2}>
        {companies.map((item,index) => (
            <div key={index}>
                <Image src={item.img} alt="icons-company" width={100} height={100} className=' object-cover rounded-lg' />
            </div>
        ))}
        </Slider>
      </div>
    </main>
  );
};

export default TrustComponent;

const companies = [
  {
    img: "/companies/client_1.png",
  },
  {
    img: "/companies/client_2.png",
  },
  {
    img: "/companies/client_3.png",
  },
  {
    img: "/companies/client_4.png",
  },
  {
    img: "/companies/client_5.png",
  },
  {
    img: "/companies/client_6.png",
  },
  {
    img: "/companies/client_7.png",
  },
  {
    img: "/companies/client_8.png",
  },
  {
    img: "/companies/client_9.png",
  },
  {
    img: "/companies/client_10.png",
  },

];