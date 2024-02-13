import React from "react";
import SkillText from "../sub/SkillText";

const Skills = () => {
  return (
    <>
    <div className="flex flex-col items-center justify-center"> 
      <h1 className="  text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
        My Services
      </h1>
    </div>
    <div
      className="flex  py-2"
      id="projects"
    >

      <div className=" flex  h- w-1/2 px-10 text-white">
        <div>
          <p className="gap-10 py-10 ">
            Are you intrigued by the idea of becoming an Evernode Host but find the technical setup intimidating? Fear not! Our hosting services are tailored for individuals like you who are eager to participate in the Evernode network without the technical hurdles. Let us take care of the setup and maintenance while you reap the rewards.
          </p>
          <span className=" font-medium py-10 text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Our hosting services offer:{" "}
            </span>
          <ol className="py-10">
            <li className="py-2">
              <span className=" font-medium text-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Seamless Setup:{" "}
              </span>
              Skip the technical jargon and let us handle the setup process for you. We'll ensure your host meets all requirements, from Xahau Network Wallet integration to Linux machine configuration.
            </li>
            <li className="py-2">
              <span className=" font-medium text-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {" "}
                Reliable Hosting:{" "}
              </span>              
              Rest assured that your host will be maintained to the highest standards. We guarantee excellent connectivity, security measures, and compliance with hosting laws.
            </li>
            <li className="py-2">
              <span className=" font-medium text-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {" "}
                Hassle-Free Rewards:{" "}
              </span> 
              Enjoy the benefits of hosting without the headache. We'll ensure you receive your fair share of Evers rewards without any hassle or extra effort on your part.
            </li>
            <li className="py-2">
              <span className=" font-medium text-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {" "}
                Ongoing Support:{" "}
              </span> 
              Need assistance or have questions? Our dedicated support team is here to help you every step of the way. We're committed to ensuring your hosting experience is smooth and successful.
            </li>
          </ol>
          <p>
            Joining the Evernode network has never been easier. Let us handle the technical details so you can focus on earning rewards and being part of a thriving community. Get started today and unlock the full potential of Evernode hosting!
          </p>
        </div>
      </div>
      <div className=" flex h-1/2 w-1/2 p-0 md:flex-col md:gap-10 px-5">
        <SkillText
          title="1. Create Your Xamman Account"
          description="Kickstart your Evernode journey by purchasing 20 Xah on Xamman. These digital assets will serve as your entry ticket into the world of Evernode hosting."
        />
        <SkillText
          title="2. Secure Your Wallet with EVR"
          description="Ensure you have 510 EVR in your wallet. These will be necessary to cover your registration and get you started on your hosting journey."
        />
        <SkillText
          title="1. Set Up Your CloudFanatic Server"
          description="Ready to elevate your hosting experience? Get your server with a minimum of 2GB RAM and 2vCPUs at CloudFanatic: https://cloudfanatic.com/adlkanlkanlink"
        />
        <SkillText
          title="4. Obtain a Domain Name and Public Email Address"
          description="Establish your online presence by acquiring a domain name and setting up a public email address. These essentials will ensure effective communication and identity establishment in the Evernode community"
        />
        <SkillText
          title="5. Contact Me"
          description="
          Once you've fulfilled the initial requirements, don't hesitate to reach out to me. I'll guide you through the final steps to set up your hosting services seamlessly. Your journey with Evernode begins here!
          Don't let technical hurdles deter you from joining the Evernode community. Follow these simple steps, and start hosting hassle-free today!"
        />

      </div>
    </div>
    </>
  );
};

export default Skills;
