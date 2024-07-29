import Image from "next/image";
import React from "react";

const companies = [
  {
    img: "/companies/client_1.png",
  },
  {
    img: "/companies/client_2.png",
  },
  {
    img: "/companies/client_3.png",
  },
  {
    img: "/companies/client_4.png",
  },
  {
    img: "/companies/client_5.png",
  },
  {
    img: "/companies/client_6.png",
  },
  {
    img: "/companies/client_7.png",
  },
  {
    img: "/companies/client_8.png",
  },
  {
    img: "/companies/client_9.png",
  },
  {
    img: "/companies/client_10.png",
  },

];
const TrustComponent = () => {
  return (
    <main className="my-28">
      <h2 className="font-bold text-2xl w-fit mx-auto uppercase">
        {" "}
        <span className="text-gradient font-extrabold">Trusted </span>by 1000+
        Companies
      </h2>

      <div className="grid grid-cols-5 place-items-center gap-y-6 my-10">
        {companies.map((item,index) => (
            <div key={index}>
                <Image src={item.img} alt="icons-company" width={100} height={100} className=' object-cover rounded-lg' />
            </div>
        ))}
      </div>
    </main>
  );
};

export default TrustComponent;
