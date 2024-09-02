import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { companies, testimonials } from "@/Data";

const Clients = () => {
  return (
    <div className="py-4 " id="testimonials">
      <h1 className="heading">
        Kind Words From <span className="text-purple">Satisfied Client</span>
      </h1>
      <div className="flex flex-col items-center mt-8 lg:mt-10 ">

        <InfiniteMovingCards 
        items={testimonials}
        speed="slow"
        />

        <div className=" flex w-full mt-5 flex-wrap justify-center gap-4 md:gap-16 max-lg:mt-10 my-5 items-center">
             {
                companies.map(({id,name,img,nameImg},i)=>(

                <div className=" flex md:max-w-60 max-w-32 gap-2" key={id}>
                        <img src={img} alt={img} className=" md:w-10 w-5" />
                        <img src={nameImg} alt={img} className=" md:w-24 w-20" />
                </div>

                ))
             }
        </div>
      </div>
    </div>
  );
};

export default Clients;
