"use client";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
const HeroSection = () => {
  return (
    <div className="text-center flex flex-col items-center justify-center h-screen">
      <h1 className="font-bold text-5xl text-white underline text-shadow-black">Hi my name is MUZAMMIL</h1>
      <p className="text-3xl mt-6 text-white text-shadow-blue">I am a web3 devloper.</p>
      <div className=" mt-6 bg-black/70 hover:bg-black/70 duration-300 ease-in-out  shadow-lg flex items-center justify-between rounded-md w-full max-w-sm  p-4">
        <a href="https://www.linkedin.com/in/muzammillone" target="_blank" className="text-3xl hover:scale-110 ease-in-out  hover:text-shadow-blue">
          <FaLinkedin className="text-4xl text-shadow-blue" />
        </a>
        <h1>Connect with me </h1>
        <a href="https://www.linkedin.com/in/muzammil-ahmed-1a8b8b1a7/" target="_blank" className="text-3xl hover:scale-110  ease-in-out ">
          <FaSquareGithub className="text-4xl text-shadow-blue" />
        </a>
      
      </div>
    </div>
  );
};

export default HeroSection
