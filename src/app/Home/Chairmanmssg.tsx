import React from "react";
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";

const Chairmanmssg: React.FC = () => {
  return (
    <main className="w-11/12 mx-auto ">

      <div className="mx-auto rounded-lg ">
        <div className="flex flex-row-reverse items-end justify-center gap-0 ">
          <section className="relative bg-gray-100 w-[35%] h-[35em]   px-6 py-10">
            <div className=" pb-10">
            <h2 className="text-gradient text-2xl font-bold">Chairman's Message</h2>
            <h3 className="text-3xl font-bold">Honest Services for Sustained Results</h3>
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
            <h3 className="text-xl font-bold mt-6">John Doe</h3>
            <p className="text-[12px] uppercase font-semibold">Chairman</p>
            <div className="flex gap-4">
              <li>icon</li>
              <li>icon</li>
              <li>icon</li>
            </div>
            <div className="absolute text-6xl top-32 opacity-5">
            <ImQuotesLeft />
          </div>
          <div className="absolute text-6xl bottom-16 right-10 opacity-5">
            <ImQuotesRight />
          </div>
          </section>
          <section className="w-[50%] h-[72vh] ">
            <img src="./chairman.jpg" alt="chairman" className="rounded-lg w-[60em] h-[35em] object-cover brightness-75" />
          </section>
        </div>
      </div>
    </main>
  );
};

export default Chairmanmssg;
