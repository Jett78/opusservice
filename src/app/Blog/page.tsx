import Image from "next/image";
import React from "react";

const blogdata= [
    {
        img:"/servicesimg/services1.jpg",
        title:"What is Remote Closing & Why You Need a Remote Closer",
        desc:" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, eligendi. Sapiente corporis natus nesciunt vero obcaecati qui et veniam eos.",
        time:"12 July 2024",
    },
    {
        img:"/servicesimg/services2.jpg",
        title:"What is Remote Closing & Why You Need a Remote Closer",
        desc:" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, eligendi. Sapiente corporis natus nesciunt vero obcaecati qui et veniam eos.",
        time:"12 July 2024",
    },
    {
        img:"/servicesimg/services3.jpg",
        title:"Strategic Palnning with Financial Management",
        desc:" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, eligendi. Sapiente corporis natus nesciunt vero obcaecati qui et veniam eos.",
        time:"12 July 2024",
    },
    {
        img:"/servicesimg/services4.jpg",
        title:"Long-term strategic plan with business goals",
        desc:" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, eligendi. Sapiente corporis natus nesciunt vero obcaecati qui et veniam eos.",
        time:"12 July 2024",
    },
]
const page = () => {
  return (
    <div className=" pt-10">
      <h2 className="font-extrabold text-3xl uppercase text-gradient w-fit mx-auto">
        Featured Blogs
      </h2>
      <p className=" font-medium text-md max-w-[60em] md:mx-auto mx-2 sm:text-l text-sm py-2 text-center">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil,
        eligendi. Sapiente corporis natus nesciunt vero obcaecati qui et veniam
        eos.
      </p>

      <div className="grid grid-cols-1 md:grid-c-ls-2 lg:grid-cols-3 gap-8 w-11/12 mx-auto my-10">
        {blogdata.map((item,index) => (
          <div key={index} className=" p-2">
             <Image src={item.img} alt="team" width={700} height={1000} className='h-80 object-cover rounded-lg' />
             <div className="py-4">
              <h2 className="font-bold text-xl">{item.title}</h2>
              <p className="text-[14px] py-2 font-medium text-lighttext">{item.desc}</p>
              <div>
                <h2>{item.time}</h2>
              </div>
              <div>

              </div>
             </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
