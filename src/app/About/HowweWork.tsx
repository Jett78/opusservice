import React from "react";

const HowweWork = () => {
  return (
    <main className="my-20">
      <div className="w-11/12 mx-auto flex justify-center gap-20">
       <div className="w-[50%] ">
       <section className="sticky top-[5em]">
          <h2 className="text-gradient uppercase font-bold text-xl  w-fit my-4">How we work</h2>
          <h2  className="lg:text-5xl md:text-3xl text-3xl  font-bold leading-[1.1em]">Learn more about our working process</h2>
          <p  className=" font-medium text-lighttext my-6 max-w-[30em] md:text-xl min-w-[20em]">
            We are team of experienced recruiters, researchers, and account
            managers with over ten years of experience in HR consulting and an
            impressive track record of successful placements.
          </p>
        </section>
       </div>


        <section className="grid gap-6">
            {howwork.map((item,index) => (
                <div key={index} className="flex items-start gap-4">
                      <div className="gradient h-4 w-4 rounded-full mt-3"></div>
                      <div>
                          <div className="flex gap-2">
                            <h2 className="font-bold text-2xl font-sans">{item.num}.</h2>
                            <h2 className="font-bold text-2xl font-sans">{item.title}</h2>
                          </div>
                          <p className="font-medium text-md leading-6 w-[25em] py-2">{item.desc}</p>
                      </div>
                </div>
            ))}
        </section>
      </div>
    </main>
  );
};

export default HowweWork;

const howwork = [
    {
        num:"1",
        title:"Research",
        desc:"Through meaningful and objective research into your organization, competitors, and marketplace, we strive to understand your hiring needs and requirements.Partner Analysis",
    },
    {
        num:"2",
        title:"Analaysis",
        desc:"We work diligently to understand the strengths and capabilities of our manpower supply partners, ensuring they meet the highest standards of quality and reliability.Requirement Gathering.",
    },
    {
        num:"3",
        title:"Planning",
        desc:"Documenting a detailed job description is vital to a successful search. We collaborate with you to capture all necessary qualifications and expectations.Execution",
    },
    {
        num:"4",
        title:"Execution",
        desc:"Our team manages expectations, maintains open communications with you and the candidates, and expertly facilitates the negotiation process through to its successful completion.",
    },
]