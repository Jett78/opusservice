import Image from 'next/image'
import React from 'react'

const teamdata = [
    {
        name:"Jane Doe",
        img:"/team/team1.jpg",
        role:"Chief Executive Officer",
    },
    {
        name:"Jane Doe",
        img:"/team/team1.jpg",
        role:"Chief Executive Officer",
    },
    {
        name:"Jane Doe",
        img:"/team/team1.jpg",
        role:"Chief Executive Officer",
    },
    {
        name:"Jane Doe",
        img:"/team/team1.jpg",
        role:"Chief Executive Officer",
    },
    {
        name:"Jane Doe",
        img:"/team/team1.jpg",
        role:"Chief Executive Officer",
    },
    {
        name:"Jane Doe",
        img:"/team/team1.jpg",
        role:"Chief Executive Officer",
    },
]
const OurTeam = () => {
  return (
   <main className='my-28 w-11/12 mx-auto'>
       <h2  className="font-extrabold text-2xl uppercase  w-fit mx-auto">Meet Our <span className='text-gradient'>Team</span></h2>
       <div className='grid grid-cols-4 gap-10 my-6'>
        {teamdata.map((item,index) => (
            <div key={index}>
                <Image src={item.img} alt="team" width={700} height={1000} className='h-80 object-cover rounded-lg' />
                <div>
                    <h2 className='font-bold text-xl'>{item.name}</h2>
                    <h3 className='italic font-medium text-l'>{item.role}</h3>
                </div>
            </div>
        ))}
       </div>
   </main>
  )
}

export default OurTeam