import React from "react";

const aboutdata = [
  {
    title: "Our Vision",
    desc: "Morbi odio lorem, varius eget interdum id, mollis vitae mi. Suspendisse sit amet pulvinar magna. Cras ligula bibendum vitae consequat sed risus nec iaculis.",
    border: "#CC1587",
  },
  {
    title: "Our Mission",
    desc: "Morbi odio lorem, varius eget interdum id, mollis vitae mi. Suspendisse sit amet pulvinar magna. Cras ligula bibendum vitae consequat sed risus nec iaculis.",
    border: "#26538C",
  },
  {
    title: "Our Goals",
    desc: "Morbi odio lorem, varius eget interdum id, mollis vitae mi. Suspendisse sit amet pulvinar magna. Cras ligula bibendum vitae consequat sed risus nec iaculis.",
    border: "#00AFF0",
  },
];

const details = [
    {
        num:"2010",
        text:"Incorporation year",
    },
    {
        num:"6+",
        text:"Global Location",
    },
    {
        num:"5000+",
        text:"Clients Served",
    },
    {
        num:"45,000+",
        text:"Total Deployed",
    },
]

const Vision = () => {
  return (
    <main className="">
      <div className="text-center">
        <h2 className="font-extrabold text-2xl uppercase text-gradient w-fit mx-auto">
          About Us
        </h2>
        <p className=" font-medium text-md w-[60em] mx-auto py-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil,
          eligendi. Sapiente corporis natus nesciunt vero obcaecati qui et veniam
          eos. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil,
          eligendi. Sapiente corporis natus nesciunt vero obcaecati qui et veniam
          eos.
        </p>
      </div>

      <div className="flex justify-center gap-20 items-center my-10 bg-parallax2 bg-cover bg-opacity-10 bg-fixed text-red-500  h-80 ">
        {details.map((item,index) => (
            <div key={index} className="grid place-items-center">
                <h2 className="font-extrabold text-3xl">{item.num}</h2>
                <h3 className="font-bold text-2xl">{item.text}</h3>
            </div>
        ))}
      </div>
      <div className="flex justify-center gap-8 mt-10 w-11/12 mx-auto">
        {aboutdata.map((item, index) => (
          <div key={index}>
            <div
              className="rounded-2xl w-80 p-4"
              style={{ border: `2px solid ${item.border}` }}>
              <div className="h-10 w-10 rounded-full bg-black mb-6"></div>
              <h2 className="font-bold text-2xl">{item.title}</h2>
              <p className="font-medium text-lighttext text-sm my-2">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Vision;
