"use client"
import Image from "next/image";
import React,{useRef} from "react";
import { useGSAP } from '@gsap/react'
import gsap from "gsap"

const HeroSection:React.FC = () => {

    const heroimg = useRef()
    useGSAP(() => {
        gsap.fromTo(heroimg.current,
          { scale: 1 },
          { scale: 1.1, duration: 2, ease: "power2.inOut" }
        );
      }, []);
    
  return (
    <main className="relative w-full h-screen z-0 overflow-x-hidden">
      <img
        ref={heroimg}
        src="./HeroImg.png"
        alt="Heroimage"
        className="h-[90vh] object-cover w-full absolute inset-0 brightness-75"
      />

      <div className="absolute top-1/2 -translate-y-1/2 left-20 bg-white px-10 pt-14  w-[42em] h-[25em] rounded-2xl ">
        <h2 className="font-bold text-[64px] leading-[65px]">
          Elevate Your Workforce With Us
        </h2>
        <p className="font-medium text-[16px]  text-lighttext pt-2">
        We provide you with the best human resources to meet your specific business needs. Partner with us to effortlessly double your workforce and achieve unprecedented growth and efficiency
        </p>

        <div className="flex gap-4 justify-start mt-6 group">
          <button className="button-gradient group-hover:bg-gradient-to-r hover:from-[#CC1587] hover:via-[#26538C] hover:to-[#00AFF0] ">
            Apply for Job
          </button>

          
          {/* <button className="relative inline-block p-[1px] border rounded-full font-semibold text-white bg-transparent">
            <div className="absolute inset-0 bg-gradient-to-r from-[#CC1587] via-[#26538C] to-[#00AFF0] rounded-full "></div>
            <div className="relative rounded-full bg-white text-black px-6 py-2 flex items-center gap-2">
                <img src="./whatsappicon.png" alt="" className="w-6"/>
                  <span>Whatsapp</span>
            </div>
          </button> */}

          <button className="px-6 py-2 border rounded-full text-green-600 font-bold flex items-center gap-2 border-green-600">
          <img src="./whatsappicon.png" alt="" className="w-6"/>
          <span>Whatsapp Now</span>

          </button>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
