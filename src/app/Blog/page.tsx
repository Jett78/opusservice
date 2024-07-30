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
        img:"/servicesimg/services1.jpg",
        title:"What is Remote Closing & Why You Need a Remote Closer",
        desc:" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, eligendi. Sapiente corporis natus nesciunt vero obcaecati qui et veniam eos.",
        time:"12 July 2024",
    },
    {
        img:"/servicesimg/services1.jpg",
        title:"What is Remote Closing & Why You Need a Remote Closer",
        desc:" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, eligendi. Sapiente corporis natus nesciunt vero obcaecati qui et veniam eos.",
        time:"12 July 2024",
    },
    {
        img:"/servicesimg/services1.jpg",
        title:"What is Remote Closing & Why You Need a Remote Closer",
        desc:" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, eligendi. Sapiente corporis natus nesciunt vero obcaecati qui et veniam eos.",
        time:"12 July 2024",
    },
]
const page = () => {
  return (
    <div className=" pt-28">
      <h2 className="font-extrabold text-2xl uppercase text-gradient w-fit mx-auto">
        Featured Blogs
      </h2>
      <p className=" font-medium text-md w-[60em] mx-auto py-2 text-center">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil,
        eligendi. Sapiente corporis natus nesciunt vero obcaecati qui et veniam
        eos.
      </p>

      <div className="grid grid-cols-4 gap-8 w-11/12 mx-auto my-10">
        {blogdata.map((item,index) => (
          <div key={index} className="border p-2">
             <Image src={item.img} alt="team" width={700} height={1000} className='h-80 object-cover rounded-lg' />
             <div className="py-4">
              <h2 className="font-semibold text-xl">{item.title}</h2>
              <p className="text-sm font-medium text-lighttext">{item.desc}</p>
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
