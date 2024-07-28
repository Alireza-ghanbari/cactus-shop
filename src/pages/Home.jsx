import React from "react";
import homeImage from "../assets/home-cactus.png";
import newImage1 from "../assets/new-cactus-1.png";
import newImage2 from "../assets/new-cactus-2.png";
import newImage3 from "../assets/new-cactus-3.png";
import shopcactus1 from "../assets/shop-cactus-1.png";
import shopcactus2 from "../assets/shop-cactus-2.png";
import shopcactus3 from "../assets/shop-cactus-3.png";
import shopcactus4 from "../assets/shop-cactus-4.png";
import shopcactus5 from "../assets/shop-cactus-5.png";
import carecactus from "../assets/care-cactus.png";
import contactcactus from "../assets/contact-cactus.png";
import { FaArrowRight } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { ImCheckboxChecked } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { BiLogoTelegram, BiSolidPhoneCall } from "react-icons/bi";
import { BsTelegram } from "react-icons/bs";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-3 xs:px-8 py-5 lg:pt-20">
      {/* hero section */}
      <div
        className="flex lg:flex-row flex-col items-center justify-center gap-7"
        id="home"
      >
        <div className="w-[250px] sm:w-[400px] lg:w-[450px]">
          <img src={homeImage} className="image-home -z-50" />
        </div>
        <div className="flex items-center lg:items-start  justify-center flex-col gap-4 lg:gap-0">
          <h2 className="text-title text-3xl sm:text-5xl lg:text-[4rem] font-bold text-center lg:text-start">
            ORNAMENTAL <br />
            <span className="text-darkGrenn">PLANTS</span> FOR <br />
            YOUR HOME
          </h2>
          <p className="text-xs sm:text-md mt-5 text-center lg:text-start">
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
      <div
        className="flex lg:flex-row flex-col items-center justify-center lg:mt-48 mt-20 gap-4 pb-10"
        id="news"
      >
        <div className="flex-1">
          <h2 className="text-title font-bold tracking-wider text-2xl sm:text-4xl md:text-4xl pr-7 text-center lg:text-start">
            NEW PLANTS FOR YOUR HOME
          </h2>
          <p className="tracking-normal mt-5 mb-5 lg:mb-0 pr-4 text-xs xs:text-sm sm:text-[16px] text-center lg:text-start">
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
              <h2 className="text-title text-xl text-center">Rebutia Cactus</h2>
            </div>
          </div>
        </div>
      </div>

      {/* shop section */}
      <div
        className="flex flex-col items-center justify-center lg:mt-48 mt-20 gap-2 pb-10"
        id="shop"
      >
        <h2 className="text-title text-4xl font-bold text-center mb-32">
          THE BEST PLANTS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 gap-y-24">
          <div className="relative w-[200px] news-card border-2 border-green pt-[9rem] px-3 pb-6 rounded-3xl">
            <img
              src={shopcactus1}
              className="absolute top-[-4.5rem] left-0 right-0 w-[180px] mx-auto transition-all duration-300 hover:-translate-y-3"
            />
            <h2 className="text-title text-xl">
              Gymnocalycium <br /> Cactus
            </h2>
            <div className="flex justify-between items-center">
              <p className="font-bold text-title text-xl mt-2">15$</p>
              <div className="p-[6px] bg-title rounded-full translate-y-1 cursor-pointer">
                <IoBagOutline color="black" size={22} />
              </div>
            </div>
          </div>
          <div className="relative w-[200px] news-card border-2 border-green pt-[9rem] px-3 pb-6 rounded-3xl">
            <img
              src={shopcactus2}
              className="absolute top-[-4.5rem] left-0 right-0 w-[180px] mx-auto transition-all duration-300 hover:-translate-y-3"
            />
            <h2 className="text-title text-xl">
              Echeveria <br /> Succulent
            </h2>
            <div className="flex justify-between items-center">
              <p className="font-bold text-title text-xl mt-2">15$</p>
              <div className="p-[6px] bg-title rounded-full translate-y-1 cursor-pointer">
                <IoBagOutline color="black" size={22} />
              </div>
            </div>
          </div>
          <div className="relative w-[200px] news-card border-2 border-green pt-[9rem] px-3 pb-6 rounded-3xl">
            <img
              src={shopcactus3}
              className="absolute top-[-4.5rem] left-0 right-0 w-[180px] mx-auto transition-all duration-300 hover:-translate-y-3"
            />
            <h2 className="text-title text-xl">
              Ferocactus <br /> Cactus
            </h2>
            <div className="flex justify-between items-center">
              <p className="font-bold text-title text-xl mt-2">10$</p>
              <div className="p-[6px] bg-title rounded-full translate-y-1 cursor-pointer">
                <IoBagOutline color="black" size={22} />
              </div>
            </div>
          </div>
          <div className="relative w-[200px] news-card border-2 border-green pt-[9rem] px-3 pb-6 rounded-3xl">
            <img
              src={shopcactus4}
              className="absolute top-[-4.5rem] left-0 right-0 w-[180px] mx-auto transition-all duration-300 hover:-translate-y-3"
            />
            <h2 className="text-title text-xl">
              Key Lime Pie <br /> Succulent
            </h2>
            <div className="flex justify-between items-center">
              <p className="font-bold text-title text-xl mt-2">10$</p>
              <div className="p-[6px] bg-title rounded-full translate-y-1 cursor-pointer">
                <IoBagOutline color="black" size={22} />
              </div>
            </div>
          </div>
          <div className="relative w-[200px] news-card border-2 border-green pt-[9rem] px-3 pb-6 rounded-3xl">
            <img
              src={shopcactus5}
              className="absolute top-[-4.5rem] left-0 right-0 w-[180px] mx-auto transition-all duration-300 hover:-translate-y-3"
            />
            <h2 className="text-title text-xl">
              Melocactus <br /> Cactus
            </h2>
            <div className="flex justify-between items-center">
              <p className="font-bold text-title text-xl mt-2">15$</p>
              <div className="p-[6px] bg-title rounded-full translate-y-1 cursor-pointer">
                <IoBagOutline color="black" size={22} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* care section */}
      <div
        className="flex flex-col items-center justify-center lg:mt-32 mt-14 gap-2 pb-10"
        id="care"
      >
        <h2 className="text-title text-2xl xs:text-4xl font-bold text-center mb-20">
          CARE AND HEALTH FOR <br /> YOUR CACTUS
        </h2>
        <div className="flex lg:flex-row flex-col items-center justify-center gap-7">
          <div className="w-[250px] sm:w-[400px] lg:w-[450px] flex-1">
            <img src={carecactus} className="image-home -z-50" />
          </div>
          <div className="flex items-start flex-col gap-8 flex-1">
            <div className="flex items-start gap-2 ">
              <div>
                <ImCheckboxChecked
                  className="text-darkGrenn translate-y-1"
                  size={20}
                />
              </div>
              In cold times, add water once a month and during the summer do it
              when the soil is very dry.
            </div>
            <div className="flex items-start gap-2">
              <div>
                <ImCheckboxChecked
                  className="text-darkGrenn translate-y-1"
                  size={20}
                />
              </div>
              Have good drainage so that the cactus does not accumulate water.
            </div>
            <div className="flex items-start gap-2 ">
              <div>
                <ImCheckboxChecked
                  className="text-darkGrenn translate-y-1"
                  size={20}
                />
              </div>
              Place your cactus or succulent in a location with indirect light.
            </div>
            <div className="flex items-start gap-2 ">
              <div>
                <ImCheckboxChecked
                  className="text-darkGrenn translate-y-1"
                  size={20}
                />
              </div>
              Do not water more than necessary, as it can accumulate too much
              water and the plant will rot.
            </div>
            <div className="flex items-start gap-2 ">
              <div>
                <ImCheckboxChecked
                  className="text-darkGrenn translate-y-1"
                  size={20}
                />
              </div>
              Do not expose to high temperatures, as succulent plants are not
              fans of extremes.
            </div>
          </div>
        </div>
      </div>

      {/* contact section */}
      <div
        className="flex flex-col items-center justify-center lg:mt-32 mt-14 gap-2 pb-10"
        id="contact"
      >
        <h2 className="text-title text-2xl xs:text-4xl font-bold text-center mb-20">
          YOU WANT A CACTUS <br /> CONTACT US
        </h2>
        <div className="flex lg:flex-row flex-col items-center justify-center">
          <div className="flex items-center lg:items-start flex-col gap-8 flex-1">
            <div className="flex items-center lg:items-start flex-col gap-2">
              <h2 className="text-title text-xl font-semibold">Write to us</h2>
              <div className="flex items-center lg:items-start gap-2">
                <BiLogoTelegram className="text-darkGrenn cursor-pointer" size={22} />
                <MdEmail className="text-darkGrenn cursor-pointer" size={22} />
                <BiSolidPhoneCall className="text-darkGrenn cursor-pointer" size={22} />
              </div>
            </div>
            <div className="flex items-center lg:items-start flex-col gap-1">
              <h2 className="text-title text-xl font-semibold">Call us at the numbers</h2>
              <div className="flex flex-col items-center lg:items-start text-sm">
                 <p>+00-987-7654-321</p>
                 <p>+11-012345</p>
              </div>
            </div>
            <div className="flex items-center lg:items-start flex-col gap-1">
              <h2 className="text-title text-xl font-semibold">Find us here</h2>
              <div className="flex flex-col text-sm items-center lg:items-start">
                <p>Lima - Sun City - Peru</p>
                <p>Av. Moon #4321</p>
              </div>
            </div>
          </div>
          <div className="w-[250px] sm:w-[400px] lg:w-[700px] flex-1 mt-12 lg:mt-0">
            <img src={contactcactus} className="image-home -z-50" />
          </div>
        </div>
      </div>
    </div>
  );
}
