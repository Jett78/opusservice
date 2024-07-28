import React from 'react'

const services = [
    {
      title:"Oil & Gases",
      desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendisodio aut porro provident placeat, aliquid tempora ea unde earumneque incidunt est, ratione nostrum. Expedita consequatur doloremlabore beatae aut!",
      img:"./servicesimg/services1.jpg",
    },
    {
      title:"Construction Service",
      desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendisodio aut porro provident placeat, aliquid tempora ea unde earumneque incidunt est, ratione nostrum. Expedita consequatur doloremlabore beatae aut!",
      img:"./servicesimg/services2.jpg",

    },
    {
      title:"Industrial Services",
      desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendisodio aut porro provident placeat, aliquid tempora ea unde earumneque incidunt est, ratione nostrum. Expedita consequatur doloremlabore beatae aut!",
      img:"./servicesimg/services3.jpg",

    },
    {
      title:"Health Services",
      desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendisodio aut porro provident placeat, aliquid tempora ea unde earumneque incidunt est, ratione nostrum. Expedita consequatur doloremlabore beatae aut!",
      img:"./servicesimg/services4.jpg",

    },
    {
      title:"Information & Technology",
      desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendisodio aut porro provident placeat, aliquid tempora ea unde earumneque incidunt est, ratione nostrum. Expedita consequatur doloremlabore beatae aut!",
      img:"./servicesimg/services2.jpg",

    },
    {
      title:"Accomodation & Transformation",
      desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendisodio aut porro provident placeat, aliquid tempora ea unde earumneque incidunt est, ratione nostrum. Expedita consequatur doloremlabore beatae aut!",
      img:"./servicesimg/services1.jpg",

    },
    {
      title:"Blue-Collar & White-Collar Services",
      desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendisodio aut porro provident placeat, aliquid tempora ea unde earumneque incidunt est, ratione nostrum. Expedita consequatur doloremlabore beatae aut!",
      img:"./servicesimg/services3.jpg",

    },
  ]
  

const OurServices = () => {
  return (
   <main className="w-11/12 mx-auto my-20 bg-[#3a6eb2] rounded-2xl p-8 shadow-sm shadow-black">
     <h2 className='text-white font-bold text-2xl'>Services</h2>

     <div className='text-white flex justify-between items-end my-8'>
         <div>
         <h2 className='font-bold text-4xl'>Explore Our </h2>
         <h2 className='font-bold text-4xl'>Comprehensive Services</h2>
         </div>
        <button className='font-medium flex gap-2'>View All
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M8 7a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V9.414l-8.293 8.293a1 1 0 0 1-1.414-1.414L14.586 8H9a1 1 0 0 1-1-1"/></svg>

        </button>
     </div>

     <div className='flex justify-center gap-8'>
        {services.slice(0,3).map((item,index) => (
            <div key={index} className=''>
                <div className='overflow-hidden rounded-2xl'>
                <img src={item.img} alt="services-img" className='w-[25em] h-[25em] rounded-2xl object-cover hover:scale-105 duration-300 ease-in-out' />
                </div>
                <h2 className='text-white font-bold text-2xl my-4'>{item.title}</h2>
            </div>
        ))}
     </div>
   </main>
  )
}

export default OurServices