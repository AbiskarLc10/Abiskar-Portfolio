import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="relative pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.07] bg-grid-black/[0.2]  flex items-center justify-center  absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className=" flex justify-center relative my-20 z-10">
        <div className=" max-w-[89w] md:max-w-2xl lg:max-w-[60vw] flex flex-col justify-center items-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-white max-w-80">
            Dynamic Web Magic using Next.js
          </h2>
          <TextGenerateEffect
            className=" text-center text-[40px] md:text-5xl lg:text-6xl"
            duration={2}
            words={"Transfering Concepts into seamless User Experience"}
          />
          <p className=" text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hello, I&apos;m Abiskar, Full Stack Starter in Nepal
          </p>
          <a href="#about">

          <MagicButton title="Show my work" icon={<FaLocationArrow/>} position="right"/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
