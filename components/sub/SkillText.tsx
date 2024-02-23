import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  description: string;
  subdescription?: string;
  subdescription1?: string;
  subdescription2?: string;
  subdescription3?: string;
  subdescription4?: string;
}

const SkillText = ({  title, description,subdescription,subdescription1,subdescription2,subdescription3,subdescription4 }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">

      <div className=" relative p-2">
        <span className="pr-0 text-lg  text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          {" "}
          {title}{" "}
        </span>        
        <p className="mt-5 text-gray-300">{description}</p>
        <p className="mt-2 mb-5 text-gray-300">{subdescription}</p>
        <p className="mt-5 pl-10  text-gray-300">{subdescription1}</p>
        <p className="mt-2 pl-10 text-gray-300">{subdescription2}</p>
        <p className="mt-2 mb-5 pl-10 text-gray-300">{subdescription3}</p>
        <p className="mt-5 mb-5 text-gray-300">{subdescription4}</p>
      </div>
    </div>
  );
};

export default SkillText;
