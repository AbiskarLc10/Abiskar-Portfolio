"use client";
import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/Data";

const Footer = () => {
  return (
    <footer className=" w-full pt-20 pb-10" id="contact">
      {/* <div className=" w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className=" w-full h-full opacity-50"
        />
      </div> */}
      <div className=" flex flex-col items-center">
        <h1 className=" heading">
          Ready to take <span className=" text-purple">Your </span>
          Outside digital presence to next level?
        </h1>
        <p className=" text-center my-5 text-white-200">
          Reach out to me today and let&apos;s discuss how i can help you
          achieve your goals
        </p>
        <a href="mailto:lcabi116@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
        <div className=" flex mt-16 mb-8 md:flex-row flex-col justify-between items-center w-full ">
          <p className=" md:text-base text-sm md:font-normal font-light">
            Copyright © 2024 Abiskar
          </p>
          <div className="flex items-center md:gap-3 gap-6 ">
            {socialMedia.map((profile) => (
              <div
                key={profile.id}
                className=" w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
               
              >
                <img
                  src={profile.img}
                  alt={`${profile.id}`}
                  width={20}
                  height={20}
                  onClick={() => {
                    window.open(profile.href, "_blank");
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
