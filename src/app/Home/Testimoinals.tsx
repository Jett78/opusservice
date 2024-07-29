"use client"
import React, { useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";

const testimonialsdata = [
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
const Testimoinals = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef(null); 

    // const handleNext = () => {
    //     sliderRef.current.slickNext();
    // };

    // const handlePrev = () => {
    //     sliderRef.current.slickPrev();
    // };

    const settings = {
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        centerMode: true,
        // dots: true,
        centerPadding: "0px",
        beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
        responsive: [
          {
              breakpoint: 1024, // Settings for screens less than 1024px
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
              }
          },
          {
              breakpoint: 600, // Settings for screens less than 600px
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  centerMode: false,
              }
          },
      ],
        appendDots: dots => (
          <div style={{ bottom: '-50px' }}>
            <ul style={{ margin: "0px" }}> {dots} </ul>
          </div>
        ),
        customPaging: i => (
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: currentSlide === i ? "white" : "rgba(255, 255, 255, 0.5)",
              display: "inline-block",
              margin: "0 5px",
            }}
          />
        ),
    };
  return (
    <main className="w-11/12 mx-auto my-20">
      <h2 className="text-center font-bold text-4xl text-gradient w-fit mx-auto">Testimonials</h2>
      <div className='slider-container md:my-20 my-8 mx-2' data-aos="fade-up" data-aos-duration="1000">

      <Slider {...settings} ref={sliderRef}>
        {testimonialsdata.map((item, index) => (
          <div key={index}  className={`${index === currentSlide ? "lg:scale-110 py-4 px-2" : "  scale-75 brightness-50"}`} >
            <div className="flex items-center gap-2 mb-6">
              <Image
                src={item.img}
                alt="image"
                height={50}
                width={50}
                className="w-10 h-10 rounded-full"
              />
              <h2 className="font-medium">{item.name}</h2>
            </div>
            <p className="text-sm font-medium ">{item.desc}</p>
          </div>
        ))}
      </Slider>
      </div>
    </main>
  );
};

export default Testimoinals;
