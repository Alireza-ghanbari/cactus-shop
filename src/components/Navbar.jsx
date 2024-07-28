import React, { useState } from "react";
import favicon from "../assets/favicon.png";
import { FaRegUser } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import { IoIosClose } from "react-icons/io";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  return (
    <nav className="w-full py-6 px-3 xs:px-8">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="flex items-center gap-1 cursor-pointer">
          <img src={favicon} className="w-6 h-6 translate-y-[-2px]" />
          <h1 className="font-semibold text-lg text-title xs:tracking-widest">
            Cactus
          </h1>
        </div>
        <div className="lg:flex gap-10 text-title hidden">
          <a href="" className="text-green font-light">
            Home
          </a>
          <a href="" className="hover:text-green duration-200 font-light">
            News
          </a>
          <a href="" className="hover:text-green duration-200 font-light">
            Shop
          </a>
          <a href="" className="hover:text-green duration-200 font-light">
            Care
          </a>
          <a href="" className="hover:text-green duration-200 font-light">
            Contact
          </a>
        </div>
        <div className="flex items-center  gap-4 text-title scale-90 xs:scale-100">
          <FaRegUser
            size={20}
            className="cursor-pointer hover:text-green duration-200"
          />
          <IoCartOutline
            size={24}
            className="cursor-pointer hover:text-green duration-200"
          />
          <AiOutlineMenu
            size={24}
            className="cursor-pointer hover:text-green duration-200 lg:hidden"
            onClick={() => setMenu(true)}
          />
        </div>

        {/* mobile */}
        
          <div className={`absolute w-[250px] min-h-screen top-0 backdrop-blur-lg duration-300 bg-black/30 z-50 ${menu? "right-0 opacity-100": "-right-72 opacity-0"}`}>
            <div className="flex flex-col items-start gap-y-10 pl-10 text-title pt-32">
              <div className="absolute top-5 right-4 hover:text-green cursor-pointer" onClick={()=>setMenu(false)}>
                <IoIosClose size={36} />
              </div>
              <a href="" className="text-green w-full">
                Home
              </a>
              <a href="" className="hover:text-green duration-200 w-full">
                News
              </a>
              <a href="" className="hover:text-green duration-200 w-full">
                Shop
              </a>
              <a href="" className="hover:text-green duration-200 w-full">
                Care
              </a>
              <a href="" className="hover:text-green duration-200 w-full">
                Contact
              </a>
            </div>
          </div>
       
      </div>
    </nav>
  );
}
