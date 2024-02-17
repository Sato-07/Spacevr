import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  href: string;
}

const ProjectCard = ({ src, title, description, href }: Props) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="relative cursor-pointer overflow-hidden rounded-lg shadow-lg border border-[#ffff]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain cursor-pointer"
      />

      <div  className="relative p-4 cursor-pointer">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </a>
  );
};

export default ProjectCard;
