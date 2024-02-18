import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                

                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Social Media</div>
                    <a href="https://twitter.com/EvryHosting" target="_blank" rel="noopener noreferrer" className="flex z-30 flex-row items-center my-[15px] cursor-pointer">
                        <RiTwitterXLine />
                        <span className="text-[15px] ml-[6px]">Twitter</span>    
                    </a>
                    <a href="https://github.com/EvernodeXRPL" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] z-30 cursor-pointer">
                        <RxGithubLogo />
                        <span className="text-[15px] ml-[6px]">Github</span>    
                    </a>

                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="mb-[20px] text-[15px] text-center">
                        &copy; EvryHosting 2024 Inc. All rights reserved
                    </div>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">About</div>
                   <p className="flex flex-row items-center my-[15px] cursor-pointer">
                     
                        <span className="text-[15px] ml-[6px]">Become Sponsor</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                  
                        <a href="mailto:evryhosting@outlook.com" className="text-[15px] z-30 ml-[6px]">evryhosting@outlook.com</a>    
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer