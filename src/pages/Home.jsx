import React from "react";
import homeImage from "../assets/home-cactus.png";
import newImage1 from "../assets/new-cactus-1.png";
import newImage2 from "../assets/new-cactus-2.png";
import newImage3 from "../assets/new-cactus-3.png";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-3 xs:px-8 py-5 lg:pt-20">
      {/* hero section */}
      <div className="flex lg:flex-row flex-col items-center justify-center gap-7" id="home">
        <div className="w-[250px] sm:w-[400px] lg:w-[450px]">
          <img src={homeImage} className="image-home -z-50" />
        </div>
        <div className="flex items-center lg:items-start  justify-center flex-col gap-4 lg:gap-0">
          <h2 className="text-title text-3xl sm:text-5xl lg:text-[4rem] font-bold">
            ORNAMENTAL <br />
            <span className="text-darkGrenn">PLANTS</span> FOR <br />
            YOUR HOME
          </h2>
          <p className="text-xs sm:text-md mt-5">
            We design ornamental plants for your home in-house for an <br />
            original style and quality you won't find anywhere else.
          </p>
          <div className="mt-5 lg:mt-12">
            <div className="flex items-center gap-5 xs:gap-14 flex-col xs:flex-row go-to-shop">
              <div className=" flex rounded-full bg-title text-black gap-2 p-2 items-center justify-between pr-4 font-bold cursor-pointer">
                <FaArrowRight className="bg-darkGrenn w-8 h-8 p-2 rounded-full transition-all duration-300" />
                GO TO SHOP
              </div>
              <p className="font-bold underline tracking-tight hover:text-title duration-200 cursor-pointer">
                MORE DETAILS
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* news section */}
      <div className="flex lg:flex-row flex-col items-center justify-center lg:mt-48 mt-20 gap-4 pb-10" id="news">
        <div className="flex-1">
          <h2 className="text-title font-bold tracking-wider text-3xl sm:text-4xl md:text-4xl pr-7">
            NEW PLANTS FOR YOUR HOME
          </h2>
          <p className="tracking-normal mt-5 mb-5 lg:mb-0 pr-4 text-xs xs:text-sm sm:text-[16px]">
            Select new ornamental plants for home decoration and obtain an
            atmosphere of harmony and freshness.
          </p>
        </div>
        <div className="flex-1">
          <div className="grid place-items-center justify-items-start lg:grid-cols-2 mt-16 lg:mt-0 grid-cols-1 space-y-28 lg:space-y-16">
            <div className="relative w-[200px] news-card border-2 border-green pt-[9rem] px-3 pb-6 rounded-3xl -rotate-6">
              <img
                src={newImage1}
                className="absolute top-[-4.5rem] left-0 right-0 w-[180px] mx-auto transition-all duration-300 hover:-translate-y-3"
              />
              <h2 className="text-title text-xl text-center">
                Gymnocalycium Cactus
              </h2>
            </div>
            <div className="relative w-[200px] news-card border-2 border-green pt-[9rem] px-3 pb-6 rounded-3xl rotate-6 lg:translate-y-36">
              <img
                src={newImage2}
                className="absolute top-[-4.5rem] left-0 right-0 w-[180px] mx-auto transition-all duration-300 hover:-translate-y-3 "
              />
              <h2 className="text-title text-xl text-center">
              Lily Pad Succulent
              </h2>
            </div>
            <div className="relative w-[200px] news-card border-2 border-green pt-[9rem] px-3 pb-6 rounded-3xl -rotate-6 ">
              <img
                src={newImage3}
                className="absolute top-[-4.5rem] left-0 right-0 w-[180px] mx-auto transition-all duration-300 hover:-translate-y-3"
              />
              <h2 className="text-title text-xl text-center">
              Rebutia Cactus
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
