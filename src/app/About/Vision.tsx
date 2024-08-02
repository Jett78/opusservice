import React from "react";
import { TbDeviceVisionPro } from "react-icons/tb";
import { GoGoal } from "react-icons/go";
import Image from "next/image";

const Vision = () => {
  return (
    <main className="">
      <h2 className="text-gradient uppercase font-extrabold text-3xl w-fit mx-auto mb-10 ">
              About Us
            </h2>
        <section className="w-11/12 mx-auto flex flex-wrap flex-row-reverse justify-between items-start">
          <div className="sm:w-[50%]">
            <div className="h-[24px] overflow-hidden mb-2"></div>
            <h1 className="header sm:text-5xl text-2xl font-bold leading-[1.1em]">
              Outsourcing and outstaffing solutions for sustainable
              <span className="text-gradient"> Business Growth.</span>
            </h1>
            <p className="about-desc font-medium text-lighttext my-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reiciendis odio aut porro provident placeat, aliquid tempora ea
              unde earum neque incidunt est, ratione nostrum. Expedita
              consequatur dolorem labore beatae aut! Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Reiciendis odio aut porro provident
              placeat, aliquid tempora ea unde earum neque incidunt est, ratione
              nostrum. Expedita consequatur dolorem labore beatae aut!
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reiciendis odio aut porro provident placeat, aliquid tempora ea
              unde earum neque incidunt est, ratione nostrum. Expedita
              consequatur dolorem labore beatae aut! Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Reiciendis odio aut porro provident
              placeat, aliquid tempora ea unde earum neque incidunt est, ratione
              nostrum. Expedita consequatur dolorem labore beatae aut!
              consequatur dolorem labore beatae aut! Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Reiciendis odio aut porro provident
              placeat, aliquid tempora ea unde earum neque incidunt est, ratione
              nostrum. Expedita consequatur dolorem labore beatae aut!
            </p>
          </div>

          <div className="about-img-animate sm:w-[45%] md:block hidden">
            <Image
              src="/chairman.jpg"
              alt="chairman"
              height={1000}
              width={1000}
              className="rounded-lg sm:w-[60em] sm:h-[35em] object-cover brightness-75"
            />
          </div>
        </section>

         {/* parallax background */}
      <div className="parallaxbg bg-parallax2 bg-fixed sm:h-[30vh] bg-cover bg-black bg-blend-overlay bg-opacity-50 my-20">
        <div className="text-white grid sm:grid-cols-4 grid-cols-2 items-center justify-center gap-x-4 gap-y-14 py-16">
          {details.map((item, index) => (
            <div key={index} className="grid place-items-center">
              <h2 className="font-extrabold sm:text-6xl text-3xl">
                {item.num}
              </h2>
              <h3 className="font-extrabold sm:text-l text-[12px] uppercase pt-2 whitespace-nowrap">
                {item.text}
              </h3>
            </div>
          ))}
        </div>
      </div>


      <div className="flex flex-wrap justify-center gap-8 my-40 w-11/12 mx-auto">
        {aboutdata.map((item, index) => (
          <div key={index} className="relative group">
            <div
              className="rounded-2xl w-[22em] h-[20em] p-4 relative "
              style={{ border: `2px solid ${item.border}`}}
            >
              <div className="h-20 w-20 flex items-center justify-center rounded-full gradient mb-6 absolute -top-10 left-1/2 -translate-x-1/2 z-10">
                 <div className="text-white text-3xl ">{item.img}</div>
              </div>
              <h2 className="font-bold text-3xl text-center mt-10  group-hover:text-white relative z-50">
                {item.title}
              </h2>
              <p className="font-semibold text-black italic text-sm my-4 leading-6 group-hover:text-white relative z-50">
                {item.desc}
              </p>
              <div className="z-0 absolute bg-gradient-to-r from-primary via-secondary to-tertiary w-full right-0 group-hover:h-full rounded-lg bottom-0 duration-500 ease-in-out transform scale-x-0  group-hover:scale-x-100 origin-bottom" />
              </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Vision;

const details = [
  {
    num: "2010",
    text: "Incorporation year",
  },
  {
    num: "6+",
    text: "Global Location",
  },
  {
    num: "5000+",
    text: "Clients Served",
  },
  {
    num: "45,000+",
    text: "Total Deployed",
  },
];


const aboutdata = [
  {
    title: "Our Vision",
    desc: "Morbi odio lorem, varius eget interdum id, mollis vitae mi. Suspendisse sit amet pulvinar  varius eget interdum id, mollis vitae mi. Suspendisse sit amet magna. Cras ligula bibendum vitae consequat sed risus nec iaculis.Suspendisse sit amet pulvinar magna. Cras ligula bibendum vitae consequat sed risus nec iaculis",
    border: "#CC1587",
    img:<TbDeviceVisionPro />,
  },
  {
    title: "Our Mission",
    desc: "Morbi odio lorem, varius eget interdum id, mollis vitae mi. Suspendisse sit amet pulvinar  varius eget interdum id, mollis vitae mi. Suspendisse sit amet magna. Cras ligula bibendum vitae consequat sed risus nec iaculis.Suspendisse sit amet pulvinar magna. Cras ligula bibendum vitae consequat sed risus nec iaculis",
    border: "#26538C",
    img:<GoGoal />,
  },
  {
    title: "Our Goals",
    desc: "Morbi odio lorem, varius eget interdum id, mollis vitae mi. Suspendisse sit amet pulvinar  varius eget interdum id, mollis vitae mi. Suspendisse sit amet magna. Cras ligula bibendum vitae consequat sed risus nec iaculis.Suspendisse sit amet pulvinar magna. Cras ligula bibendum vitae consequat sed risus nec iaculis",
    border: "#00AFF0",
    img:<GoGoal />,
  },
];
