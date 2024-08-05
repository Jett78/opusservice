
import React from "react";
import Image from "next/image";
import { FaHandPointRight } from "react-icons/fa";
import Cta from "../Home/Cta";

const page = () => {
  return (
    <main className="pt-10 w-11/12 mx-auto">
      <h2 className="font-extrabold text-3xl uppercase text-gradient w-fit mx-auto">
        Career
      </h2>
      <p className=" font-medium text-md max-w-[65em] md:mx-auto mx-2 py-2 text-center sm:text-l text-sm">
        We find solutions for your manpower needs by thoroughly understanding
        your requirements and providing skilled professionals who meet your
        exact specifications. Our tailored strategies ensure you have the right
        workforce to achieve your business goals efficiently.{" "}
      </p>

      <div className="flex flex-wrap flex-row-reverse items-center justify-center gap-20 lg:my-20 md:my-10 my-6">
        <section>
          <figure>
            <Image
              src="/servicesimg/services1.jpg"
              alt="team"
              width={1000}
              height={1000}
              className=" object-cover w-[50em] max-h-[35em] rounded-2xl"
            />
          </figure>
        </section>

        <section className="grid gap-6 2xl:max-w-[30%] w-full">
          {careerdetails.map((item:any, index) => (
            <div key={index} className="">
              <div className="flex items-center gap-4">
                <p className="text-tertiary">
                  <FaHandPointRight />
                </p>
                <h2 className="md:text-2xl font-semibold border-l border-b rounded-xl shadow-sm w-full p-2">
                  {item.title}
                </h2>
              </div>
            </div>
          ))}
        </section>
      </div>

      <Cta />
    </main>
  );
};

export default page;

const careerdetails = [
  {
    title: "Oil & Gas",
  },
  {
    title: "Construction & real State  ",
  },
  {
    title: "Finance & Banking",
  },
  {
    title: "Information technology",
  },
  {
    title: "HealthCare",
  },
  {
    title: "Tourism & Hospitality",
  },
  {
    title: "Engineering & Manufacturing",
  },
  {
    title: "Administrative & Support services",
  },
];
