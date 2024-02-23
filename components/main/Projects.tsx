import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-5"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full cursor-pointer w-full flex flex-col md:flex-row gap-10 px-10 py-10">
        <ProjectCard
          src="/evrgarden.png"
          title="EvrGarden"
          href="https://evrgarden.com/"
          description="Discover our exclusive website 3D designed to manage hosting instances for rent on Evrgarden. Simplify instance management, rent 3D models, and optimize your online presence with our user-friendly interface. Join us today to explore a new way of managing your Evernode services."
          />
        <ProjectCard
          src="/osaka.png"
          title="SmartEvr"
          href="https://smartevr.org/"
          description="Discover our exclusive dashboard designed to manage hosting instances on Evernode. Simplify instance management, track performance, and optimize your online presence with our user-friendly interface. Join us today to explore a new way of managing your Evernode hosting services."
        />
        <ProjectCard
          src="/sing.png"
          title="EvrQuest"
          href="https://evrquest.com/"
          description="Discover our exclusive dashboard designed to manage hosting instances on Evernode. Simplify instance management, track performance, and optimize your online presence with our user-friendly interface. Join us today to explore a new way of managing your Evernode hosting services."
        />

      </div>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/mumbai.png"
          title="ForevrSmart"
          href="https://forevrsmart.org/"
          description="Discover our exclusive dashboard designed to manage hosting instances on Evernode. Simplify instance management, track performance, and optimize your online presence with our user-friendly interface. Join us today to explore a new way of managing your Evernode hosting services."
        />
        <ProjectCard
          src="/melbourne.png"
          title="EvryGood"
          href="https://evrygood.dev/"
          description="Discover our exclusive dashboard designed to manage hosting instances on Evernode. Simplify instance management, track performance, and optimize your online presence with our user-friendly interface. Join us today to explore a new way of managing your Evernode hosting services."
        />
        <ProjectCard
          src="/seoul.png"
          title="EvrSmartLabs"
          href="https://evrsmartlabs.com/"
          description="Discover our exclusive dashboard designed to manage hosting instances on Evernode. Simplify instance management, track performance, and optimize your online presence with our user-friendly interface. Join us today to explore a new way of managing your Evernode hosting services."
        />

      </div>
    </div>
  );
};

export default Projects;
