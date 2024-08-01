import React from 'react'
import Contactus from '../Home/Contactus'
import { IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";

const page = () => {
  return (
    <div className='bg-gray-200  pt-28'>
        {/* <h2 className="text-gradient uppercase font-extrabold text-3xl w-fit mx-auto  ">
              Contact Us
            </h2> */}
            <Contactus/>

            <div className='flex justify-center gap-60 mt-10 py-8  bg-gray-200'>
              {locationinfo.map((item,index) => (
                <div key={index} className='grid place-items-center'>
                  <figure className='text-3xl text-tertiary'>
                    {item.img}
                  </figure>
                  <div className='grid place-items-center'>
                    {/* <h2 className='font-bold text-xl'>{item.title}</h2> */}
                    <h3 className='font-bold text-2xl font-sans'>{item.desc}</h3>
                  </div>
                </div>
              ))}
            </div>
         </div>
  )
}

export default page

const locationinfo = [
  {
    img: <IoLocation />,
    title: "Address",
    desc: "Samakhusi-11",
  },
  {
    img: <MdEmail />,
    title: "Email",
    desc: "opus211@gmail.com",
  },
  {
    img: <IoCall />,
    title: "Contact",
    desc: "+977-9856589654",
  },
];