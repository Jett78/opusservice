import Image from "next/image";
import React from "react";
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";

const Chairmanmssg: React.FC = () => {
  return (
    <main className="w-11/12 mx-auto ">
      <div className="mx-auto rounded-lg ">
        <div className="flex flex-row-reverse items-center justify-center gap-10 ">
          <section className="relative  w-[40%] h-[35em]   px-6 py-10">
            <div className=" pb-10">
              <h2 className="text-gradient text-2xl font-bold">
                Chairmans Message
              </h2>
              <h3 className="text-4xl font-bold">
                Honest Services for Sustained Results
              </h3>
            </div>
            <p className="font-medium text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              adipisci velit ratione similique, pariatur libero sit? Animi
              consequuntur totam fugiat, incidunt corporis ut distinctio
              corrupti, qui velit iure delectus omnis? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Quos adipisci velit ratione
              similique, pariatur libero sit? Animi consequuntur totam fugiat,
              incidunt corporis ut distinctio corrupti, qui velit iure delectus
              omnis? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quos adipisci velit ratione similique, pariatur libero sit? Animi
              consequuntur totam fugiat, incidunt corporis ut distinctio
              corrupti, qui velit iure delectus omnis? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Quos adipisci velit ratione
              similique, pariatur libero sit? Animi consequuntur totam fugiat,
            </p>
            <h3 className="text-xl font-bold mt-6">Alaxander Doe</h3>
            <p className="text-[12px] font-semibold">Chairman</p>

            <div className="flex gap-4 mt-4">
              <Image
                src="/icons/facebookicon.png"
                width={30}
                height={30}
                alt="icon"
              />
              <Image
                src="/icons/instaicon.png"
                width={30}
                height={30}
                alt="icon"
              />
              <Image
                src="/icons/whatsappicon.png"
                width={30}
                height={30}
                alt="icon"
              />
            </div>

            <div className="absolute text-6xl top-36 opacity-5">
              <ImQuotesLeft />
            </div>
            <div className="absolute text-6xl bottom-28 right-10 opacity-5">
              <ImQuotesRight />
            </div>
          </section>
          <section className="w-[40%]  ">
            <img
              src="./chairman.jpg"
              alt="chairman"
              className="rounded-lg w-[60em] h-[42em] object-cover brightness-75"
            />
          </section>
        </div>
      </div>
    </main>
  );
};

export default Chairmanmssg;
