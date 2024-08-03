import React, { useEffect, useState } from "react";
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
import favicon from "../assets/favicon.png";
import { FaArrowRight, FaArrowUp, FaFacebook } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { ImCheckboxChecked } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { BiLogoTelegram, BiSolidPhoneCall } from "react-icons/bi";
import { BsTwitterX } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { inView, motion, useInView } from "framer-motion";

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);

  window.addEventListener("scroll", () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  });

  // framer-motion

  const container = (delay) => ({
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, delay: delay },
    },
  });

  return (
    <div className="max-w-7xl mx-auto px-3 xs:px-8 py-5 lg:pt-20">
      {/* hero section */}
      <div
        className="flex lg:flex-row flex-col items-center justify-center gap-7"
        id="home"
      >
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0 }}
          className="w-[250px] sm:w-[400px] lg:w-[450px]"
        >
          <img src={homeImage} className="image-home -z-50" />
        </motion.div>
        <div className="flex items-center lg:items-start  justify-center flex-col gap-4 lg:gap-0">
          <motion.h2
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="text-title text-3xl sm:text-5xl lg:text-[4rem] font-bold text-center lg:text-start"
          >
            ORNAMENTAL <br />
            <span className="text-darkGrenn">PLANTS</span> FOR <br />
            YOUR HOME
          </motion.h2>
          <motion.p
            variants={container(0.6)}
            initial="hidden"
            animate="visible"
            className="text-xs sm:text-md mt-5 text-center lg:text-start"
          >
            We design ornamental plants for your home in-house for an <br />
            original style and quality you won't find anywhere else.
          </motion.p>
          <div className="mt-5 lg:mt-12">
            <motion.div
              variants={container(0.8)}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-5 xs:gap-14 flex-col xs:flex-row go-to-shop"
            >
              <div className=" flex rounded-full bg-title text-black gap-2 p-2 items-center justify-between pr-4 font-bold cursor-pointer">
                <FaArrowRight className="bg-darkGrenn w-8 h-8 p-2 rounded-full transition-all duration-300" />
                GO TO SHOP
              </div>
              <p className="font-bold underline tracking-tight hover:text-title duration-200 cursor-pointer">
                MORE DETAILS
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* news section */}
      <div
        className="flex lg:flex-row flex-col items-center justify-center lg:mt-56 mt-20 gap-4 pb-10"
        id="news"
      >
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="flex-1"
        >
          <h2 className="text-title font-bold tracking-wider text-2xl sm:text-4xl md:text-4xl pr-7 text-center lg:text-start">
            NEW PLANTS FOR YOUR HOME
          </h2>
          <p className="tracking-normal mt-5 mb-5 lg:mb-0 pr-4 text-xs xs:text-sm sm:text-[16px] text-center lg:text-start">
            Select new ornamental plants for home decoration and obtain an
            atmosphere of harmony and freshness.
          </p>
        </motion.div>
        <div className="flex-1">
          <div className="grid place-items-center justify-items-start lg:grid-cols-2 mt-16 lg:mt-0 grid-cols-1 space-y-28 lg:space-y-16">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1, delay: 0.1 }}
            >
              <div className="relative w-[200px] news-card border-2 border-green pt-[9rem] px-3 pb-6 rounded-3xl -rotate-6">
                <img
                  src={newImage1}
                  className="absolute top-[-4.5rem] left-0 right-0 w-[180px] mx-auto transition-all duration-300 hover:-translate-y-3"
                />
                <h2 className="text-title text-xl text-center">
                  Gymnocalycium Cactus
                </h2>
              </div>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="relative w-[200px] news-card border-2 border-green pt-[9rem] px-3 pb-6 rounded-3xl rotate-6 lg:translate-y-36">
                <img
                  src={newImage2}
                  className="absolute top-[-4.5rem] left-0 right-0 w-[180px] mx-auto transition-all duration-300 hover:-translate-y-3 "
                />
                <h2 className="text-title text-xl text-center">
                  Lily Pad Succulent
                </h2>
              </div>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 70 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              <div className="relative w-[200px] news-card border-2 border-green pt-[9rem] px-3 pb-6 rounded-3xl -rotate-6 ">
                <img
                  src={newImage3}
                  className="absolute top-[-4.5rem] left-0 right-0 w-[180px] mx-auto transition-all duration-300 hover:-translate-y-3"
                />
                <h2 className="text-title text-xl text-center">
                  Rebutia Cactus
                </h2>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* shop section */}
      <div
        className="flex flex-col items-center justify-center lg:mt-48 mt-20 gap-2 pb-10"
        id="shop"
      >
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -70 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-title text-4xl font-bold text-center mb-32"
        >
          THE BEST PLANTS
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 gap-y-24">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 70 }}
            transition={{ duration: 1, delay: 0 }}
            className="relative w-[200px] news-card border-2 border-green pt-[9rem] px-3 pb-6 rounded-3xl"
          >
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
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 70 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative w-[200px] news-card border-2 border-green pt-[9rem] px-3 pb-6 rounded-3xl"
          >
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
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 70 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="relative w-[200px] news-card border-2 border-green pt-[9rem] px-3 pb-6 rounded-3xl"
          >
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
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 70 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="relative w-[200px] news-card border-2 border-green pt-[9rem] px-3 pb-6 rounded-3xl"
          >
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
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 70 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative w-[200px] news-card border-2 border-green pt-[9rem] px-3 pb-6 rounded-3xl"
          >
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
          </motion.div>
        </div>
      </div>

      {/* care section */}
      <div
        className="flex flex-col items-center justify-center lg:mt-32 mt-14 gap-2 pb-10"
        id="care"
      >
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -70 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-title text-2xl xs:text-4xl font-bold text-center mb-20"
        >
          CARE AND HEALTH FOR <br /> YOUR CACTUS
        </motion.h2>
        <div className="flex lg:flex-row flex-col items-center justify-center gap-7">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-[250px] sm:w-[400px] lg:w-[450px] flex-1"
          >
            <img src={carecactus} className="image-home -z-50" />
          </motion.div>
          <div className="flex items-start flex-col gap-8 flex-1">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="flex items-start gap-2 "
            >
              <div>
                <ImCheckboxChecked
                  className="text-darkGrenn translate-y-1"
                  size={20}
                />
              </div>
              In cold times, add water once a month and during the summer do it
              when the soil is very dry.
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex items-start gap-2"
            >
              <div>
                <ImCheckboxChecked
                  className="text-darkGrenn translate-y-1"
                  size={20}
                />
              </div>
              Have good drainage so that the cactus does not accumulate water.
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="flex items-start gap-2 "
            >
              <div>
                <ImCheckboxChecked
                  className="text-darkGrenn translate-y-1"
                  size={20}
                />
              </div>
              Place your cactus or succulent in a location with indirect light.
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="flex items-start gap-2 "
            >
              <div>
                <ImCheckboxChecked
                  className="text-darkGrenn translate-y-1"
                  size={20}
                />
              </div>
              Do not water more than necessary, as it can accumulate too much
              water and the plant will rot.
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="flex items-start gap-2 "
            >
              <div>
                <ImCheckboxChecked
                  className="text-darkGrenn translate-y-1"
                  size={20}
                />
              </div>
              Do not expose to high temperatures, as succulent plants are not
              fans of extremes.
            </motion.div>
          </div>
        </div>
      </div>

      {/* contact section */}
      <div
        className="flex flex-col items-center justify-center lg:mt-32 mt-14 gap-2 pb-10"
        id="contact"
      >
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -70 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-title text-2xl xs:text-4xl font-bold text-center mb-20"
        >
          YOU WANT A CACTUS <br /> CONTACT US
        </motion.h2>
        <div className="flex lg:flex-row flex-col items-center justify-center">
          <div className="flex items-center lg:items-start flex-col gap-8 flex-1">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex items-center lg:items-start flex-col gap-2"
            >
              <h2 className="text-title text-xl font-semibold">Write to us</h2>
              <div className="flex items-center lg:items-start gap-2">
                <BiLogoTelegram
                  className="text-darkGrenn cursor-pointer"
                  size={22}
                />
                <MdEmail className="text-darkGrenn cursor-pointer" size={22} />
                <BiSolidPhoneCall
                  className="text-darkGrenn cursor-pointer"
                  size={22}
                />
              </div>
            </motion.div>
            <motion.div whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1, delay: 0.8 }}  className="flex items-center lg:items-start flex-col gap-1">
              <h2 className="text-title text-xl font-semibold">
                Call us at the numbers
              </h2>
              <div className="flex flex-col items-center lg:items-start text-sm">
                <p>+00-987-7654-321</p>
                <p>+11-012345</p>
              </div>
            </motion.div>
            <motion.div whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1, delay: 1.2 }} className="flex items-center lg:items-start flex-col gap-1">
              <h2 className="text-title text-xl font-semibold">Find us here</h2>
              <div className="flex flex-col text-sm items-center lg:items-start">
                <p>Lima - Sun City - Peru</p>
                <p>Av. Moon #4321</p>
              </div>
            </motion.div>
          </div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-[250px] sm:w-[400px] lg:w-[700px] flex-1 mt-12 lg:mt-0"
          >
            <img src={contactcactus} className="image-home -z-50" />
          </motion.div>
        </div>
      </div>

      {/* footer */}
      <div className="flex lg:flex-row flex-col items-start lg:items-center lg:justify-between lg:mt-48 mt-14 gap-10 lg:gap-2 pb-12">
        <div className="flex flex-col items-start justify-start gap-5 flex-1">
          <div className="flex items-center justify-start">
            <img src={favicon} className="w-8 h-8 translate-y-[-3px]" />
            <h1 className="font-semibold text-xl text-title xs:tracking-widest">
              Cactus
            </h1>
          </div>
          <p className="text-sm lg:ml-3">
            Choose the best <br /> plants for your home.
          </p>
        </div>

        <div className="flex flex-wrap flex-col sm:flex-row justify-start lg:justify-between lg:items-start flex-1 gap-10 lg:gap-0">
          <div className="flex flex-col gap-1">
            <h2 className="text-title text-lg font-semibold tracking-widest mb-3">
              COMPANY
            </h2>
            <p className="text-[15px] tracking-wide font-light hover:text-title duration-100 cursor-pointer">
              About Us
            </p>
            <p className="text-[15px] tracking-wide font-light hover:text-title duration-100 cursor-pointer">
              Products
            </p>
            <p className="text-[15px] tracking-wide font-light hover:text-title duration-100 cursor-pointer">
              Features
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-title text-lg font-semibold tracking-widest mb-3">
              INFORMATION
            </h2>
            <p className="text-[15px] tracking-wide font-light hover:text-title duration-100 cursor-pointer">
              Blogs & News
            </p>
            <p className="text-[15px] tracking-wide font-light hover:text-title duration-100 cursor-pointer">
              Contacts Us
            </p>
            <p className="text-[15px] tracking-wide font-light hover:text-title duration-100 cursor-pointer">
              FAQs
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-title text-lg font-semibold tracking-widest mb-3">
              SOCIAL MEDIA
            </h2>
            <div className="flex gap-3">
              <p className="text-[15px] tracking-wide font-light hover:text-title duration-100 cursor-pointer">
                <FaFacebook size={21} />
              </p>
              <p className="text-[15px] tracking-wide font-light hover:text-title duration-100 cursor-pointer">
                <AiFillInstagram size={21} />
              </p>
              <p className="text-[15px] tracking-wide font-light hover:text-title duration-100 cursor-pointer">
                <BsTwitterX size={21} />
              </p>
            </div>
          </div>
        </div>
      </div>
      <h4 className="text-center text-sm flex items-center justify-center gap-1 mt-4 pt-5 border-t border-title flex-wrap">
        All Rights Reserved By Alireza Ghanbari
      </h4>

      <div
        onClick={() => scrollTo(0, 0)}
        className={`fixed bottom-12 lg:bottom-16 right-5 lg:right-12 text-white duration-500 p-2 bg-darkGrenn rounded-full cursor-pointer hover:opacity-70 ${
          scrollPosition < 1100 ? "opacity-0" : "opacity-60"
        }`}
      >
        <FaArrowUp size={24} color="black" />
      </div>
    </div>
  );
}
