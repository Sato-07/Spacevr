import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  description: string;
}

const SkillText = ({  title, description }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">

      <div className="relative p-2">
        <span className="text-transparent text-lg bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          {" "}
          {title}{" "}
        </span>        
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default SkillText;
