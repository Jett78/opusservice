import React from "react";

const whyusdata = [
    {
        title:"Recruitment",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendis seconsequat tempor turpis, quis egestas ligula efficitur et. Donec at diam at nisl consectetur.",
    },
    {
        title:"Training",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendis seconsequat tempor turpis, quis egestas ligula efficitur et. Donec at diam at nisl consectetur.",
    },
    {
        title:"24/7 Support",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendis seconsequat tempor turpis, quis egestas ligula efficitur et. Donec at diam at nisl consectetur.",
    },
    {
        title:"Visa Assistance",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendis seconsequat tempor turpis, quis egestas ligula efficitur et. Donec at diam at nisl consectetur.",
    },
]

const WhyUs = () => {
  return (
    <main className="w-11/12 mx-auto  my-20">
      <div className="flex justify-between">
        <section className="w-[50%]">
          <h2 className="text-gradient uppercase font-bold text-xl border-b w-fit mb-6 ">
            Why Us
          </h2>
          <h1 className="text-5xl font-bold leading-[1.1em]">
            Right Connection and Right Employee
          </h1>
          <p className="font-medium text-lighttext my-6 w-[40em]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            consequat tempor turpis, quis egestas ligula efficitur et. Donec at
            diam at nisl consectetur.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            consequat tempor turpis, quis egestas ligula efficitur et. Donec at
            diam at nisl consectetur.
          </p>
          <button className="button-gradient">Find Job Now</button>
        </section>


        <section className="flex gap-4">
           <div className=" space-y-6">
           {whyusdata.slice(0,2).map((item,index) => (
                <div key={index} className="border border-[#00AFF0] rounded-2xl w-80 p-4">
                     <div className="h-10 w-10 rounded-full bg-black mb-6"></div>
                     <h2 className="font-bold text-2xl">{item.title}</h2>
                     <p  className="font-medium text-lighttext text-sm my-2">{item.desc}</p>
                </div>
            ))}
           </div>
           

           <div className="mt-10 space-y-6">
           {whyusdata.slice(2,4).map((item,index) => (
                <div key={index} className="border border-[#CC1587] rounded-2xl w-80 p-4">
                     <div className="h-10 w-10 rounded-full bg-black mb-6"></div>
                     <h2 className="font-bold text-2xl">{item.title}</h2>
                     <p  className="font-medium text-lighttext text-sm my-2">{item.desc}</p>
                </div>
            ))}
           </div>
        </section>
      </div>
    </main>
  );
};

export default WhyUs;
