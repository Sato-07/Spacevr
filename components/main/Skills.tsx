"use client"
import React from "react";
import SkillText from "../sub/SkillText";
import { ValidationError, useForm } from '@formspree/react';
import ContactSection from "../sub/contact";
const Skills = () => {
  const [state, handleSubmit] = useForm('xeqykoqw');

  return (
    <>
      <div className="flex flex-col items-center justify-center"> 
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          My Services
        </h1>
      </div>
      <div className="flex py-2" id="services">
        <div className="w-2/3 flex md:flex-col md:gap-10 px-5">
          <SkillText
            title="Rent Access Through Our Nodes:"
            description="- Gain access to our optimized nodes to maximize your rewards within the Evernode ecosystem."
            subdescription="- Our nodes provide a reliable pathway, ensuring consistent access and minimal disruptions, allowing you to optimize your rewards effectively."
          />
          <SkillText
            title="Custom Website Development for Hosts:"
            description="- Looking to enhance your hosting business? We offer custom website development services tailored specifically for Evernode hosts."
            subdescription="- Our expert developers will create a professional and user-friendly website to showcase your services, attract clients, and streamline your business operations."
          />
          <SkillText
            title="Continuous Node Maintenance and Security:"
            description="Ensure smooth operations for your hosted services with our continuous node maintenance and robust security protocols. Our team ensures that our nodes are always updated and optimized for peak performance, providing:"
            subdescription1="- Regular maintenance to keep our nodes running smoothly"
            subdescription2="- Proactive security measures to safeguard your hosted services"
            subdescription3="- Ongoing optimization to enhance efficiency and reliability"
            subdescription4="With EvryHosting, you can trust that your hosting services pass through nodes that are consistently maintained and secured, ensuring a seamless experience for you and your clients."
          />

        </div>
        <div className="w-1/3 px-5 ">
          <ContactSection/>

        </div>
      </div>
    </>
  );
};

export default Skills;
