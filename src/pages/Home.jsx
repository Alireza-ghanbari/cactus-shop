import React from "react";
import homeImage from "../assets/home-cactus.png";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-3 xs:px-8 py-5 lg:pt-20">
      {/* hero section */}
      <div className="flex lg:flex-row flex-col items-center justify-center gap-7">
        <div className="w-[250px] sm:w-[400px] lg:w-[450px]">
          <img src={homeImage} className="" />
        </div>
        <div className="flex items-center lg:items-start  justify-center flex-col gap-4 lg:gap-0">
          <h2 className="text-title text-3xl sm:text-5xl lg:text-[4rem] font-bold">
            ORNAMENTAL <br />
            <span className="text-darkGrenn">PLANTS</span> FOR <br />
            YOUR HOME
          </h2>
          <p className="text-xs sm:text-md">
            We design ornamental plants for your home in-house for an <br />
            original style and quality you won't find anywhere else.
          </p>
          <div className="mt-5 lg:mt-16">
            <div className="flex items-center gap-5 xs:gap-14 flex-col xs:flex-row">
                <div className=" flex rounded-full bg-title text-black gap-2 p-2 items-center justify-between pr-4 font-bold cursor-pointer">
                    <FaArrowRight className="bg-darkGrenn w-8 h-8 p-2 rounded-full" /> 
                    GO TO SHOP
                </div>
                <p className="font-bold underline tracking-tight hover:text-title duration-200 cursor-pointer">MORE DETAILS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
