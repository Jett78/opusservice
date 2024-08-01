"use client"
import Image from "next/image";
import React,{useRef} from "react";
import { useGSAP } from '@gsap/react'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);
const HeroSection:React.FC = () => {

    const heroimg = useRef()
    const maincontainer = useRef()



    useGSAP(() => {
          //img-reveal animation
    gsap.fromTo(
      maincontainer.current,
      {
        clipPath: "inset(0 0 100% 0)",
        opacity: 1,
      },
      {
        clipPath: "inset(0 0 0% 0)",
        opacity: 1,
        duration: 2,
      }
    );

    gsap.to(heroimg.current,{
      
      scale:1.5,
      scrollTrigger: {
        trigger: heroimg.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        // markers: true,
        pin:true,
      },
    })

      // gsap.to(heroimg.current, {
      //     scale: 1.1,
      //     duration: 2,
      //     ease: "power2.inOut",
      //     yoyo: true,
      //     repeat: -1, // -1 makes the animation repeat indefinitely
      // });
  }, []);
    
  return (
    <main className="relative w-full h-screen  z-0 overflow-hidden" ref={maincontainer} >
      <img
        ref={heroimg}
        src="./HeroImg.png"
        alt="Heroimage"
        className="h-screen object-cover w-full absolute inset-0 brightness-50 overflow-hidden "
      />

      <div className="absolute sm:top-[30em] top-[23em] -translate-y-1/2 left-1/2 -translate-x-1/2 text-white ">
        <h2 className="font-bold lg:text-[64px] md:text-[50px] sm:text-4xl text-3xl text-center  sm:leading-[65px] whitespace-normal sm:whitespace-nowrap">
          Elevate Your Workforce With Us
        </h2>
        <p className="font-medium text-[18px] text-white sm:py-4 py-8 text-center max-w-[50em] min-w-[20em] leading-6 mx-auto">
        We provide you with the best human resources to meet your specific business needs. Partner with us to effortlessly double your workforce and achieve unprecedented growth and efficiency
        </p>

        <div className="flex flex-wrap gap-4 justify-center mt-6 group">
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

          <button className="px-6 py-2 border rounded-full text-green-600 bg-white font-bold flex items-center gap-2 border-green-600">
          <img src="./whatsappicon.png" alt="" className="w-6"/>
          <span>Whatsapp Now</span>
          </button>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
