import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";
import { RiTwitterXLine } from "react-icons/ri";
import { IoIosMailUnread } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/logo.png"
            alt="logo"
            width={40}
            height={40}
            className="cursor-pointer rounded-full hover:animate-slowspin"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            EvryHosting
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#services" className="cursor-pointer">
              Sevices
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>


        <a href="https://twitter.com/EvryHosting"  target="_blank" rel="noopener noreferrer"
        className=" p-2 w-10 h-10 flex"
        >
          <RiTwitterXLine className="text-2xl cursor-pointer text-white" />
        </a>

      </div>
    </div>
  );
};

export default Navbar;
