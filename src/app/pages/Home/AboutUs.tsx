import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const aboutdata = [
  {
    title:"HR Management",
    desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendisodio aut porro provident placeat, aliquid tempora ea unde earumneque incidunt est, ratione nostrum. Expedita consequatur doloremlabore beatae aut!",
  },
  {
    title:"Better Workflow & Efficiency",
    desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendisodio aut porro provident placeat, aliquid tempora ea unde earumneque incidunt est, ratione nostrum. Expedita consequatur doloremlabore beatae aut!",
  },
  {
    title:"Significant Cost Reduction",
    desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendisodio aut porro provident placeat, aliquid tempora ea unde earumneque incidunt est, ratione nostrum. Expedita consequatur doloremlabore beatae aut!",
  },
  {
    title:"24/7 Operations & Support",
    desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendisodio aut porro provident placeat, aliquid tempora ea unde earumneque incidunt est, ratione nostrum. Expedita consequatur doloremlabore beatae aut!",
  },
]

const AboutUs:React.FC = () => {
  return (
   <main>
     <div className="w-11/12 mx-auto mt-20 mb-40">
      <section className="flex justify-between items-center">
        <div className="w-[50%]">
          <h2 className="font-bold text-gradient text-xl uppercase mb-6">About Us</h2>
          <h1 className="text-5xl font-bold leading-[1.1em]">
            Outsourcing and outstaffing solutions for sustainable
            <span className="text-gradient"> Business Growth.</span>
          </h1>
          
        </div>

        <div className="w-[40%]">
          <p className="font-medium text-lighttext ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
            odio aut porro provident placeat, aliquid tempora ea unde earum
            neque incidunt est, ratione nostrum. Expedita consequatur dolorem
            labore beatae aut!
          </p>
          <button className="mt-4 font-semibold flex items-center">
            <p className="text-gradient ">Read More</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M8 7a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V9.414l-8.293 8.293a1 1 0 0 1-1.414-1.414L14.586 8H9a1 1 0 0 1-1-1"/></svg>
             </button>
        </div>
      </section>

      {/* <section className="flex justify-between items-center mt-10">
        <div>
          <img src="./about.png" alt="about-img" />
        </div>

        <div className="grid gap-6">
          {aboutdata.map((item,index) => (
            <div key={index} className="flex justify-between border-b p-2">
                 <h2 className="text-4xl font-semibold">{item.title}</h2>
                 <MdOutlineKeyboardArrowDown />
            </div>
          ))}
        </div>
      </section> */}
   
    </div>
    <div className="bg-parallax bg-fixed h-[60vh] bg-cover"></div>
   </main>
  );
};

export default AboutUs;
