import React from "react";

const bloddata= [
    {
        img:"/servicesimg/services1.jpg",
        title:"What is Remote Closing & Why You Need a Remote Closer",
        desc:" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, eligendi. Sapiente corporis natus nesciunt vero obcaecati qui et veniam eos.",
    },
]
const page = () => {
  return (
    <div className="h-screen pt-28">
      <h2 className="font-extrabold text-2xl uppercase text-gradient w-fit mx-auto">
        Featured Blogs
      </h2>
      <p className=" font-medium text-md w-[60em] mx-auto py-2 text-center">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil,
        eligendi. Sapiente corporis natus nesciunt vero obcaecati qui et veniam
        eos.
      </p>
    </div>
  );
};

export default page;
