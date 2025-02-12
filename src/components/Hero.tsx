import React from "react";
import { FaArrowRight, FaApple } from "react-icons/fa";
import "tailwindcss";
import PlayLogo from '../assets/googleplaylogo.png'
import RainbowLight from '../assets/rainbowlight.png'
import Taofeeqah from '../assets/taofeeqah.png'
import Ernest from '../assets/ernest.png'

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col gap-5 text-white justify-center items-center relative min-h-screen translate-y-20" >
      <div className="flex items-center w-[75vw] sm:w-[70vw] md:w-[23vw] h-[35px] rounded-[50px] border-[1.31px] border-[#6c6cff] p-[3.51px] font-[Inter] mt-6" >
        <div className="w-[30%]">
          <p className="text-[12px] md:text-[12px] pt-1 pb-1 pl-0.5 pr-0.5 border-[1.31px] text-center border-[#6C6CFF] rounded-[14.02px]">New Feature</p>
        </div>
        <div className="flex justify-around items-center w-[70%]">
          <p className="text-[12px] md:text-[12px]">Check out the new dashboard</p>
          <p className="text-[12px]"><FaArrowRight /></p>
        </div>
      </div>
      <h1 className="w-[90vw] -mt-3 md:w-[800px] text-center font-[Bricolage_Grotesque] font-bold text-[32px] md:text-[80px] leading:[40px] md:leading-[100px]">
        Discover the Future of Personal Finance.
      </h1>
      <p className="w-[90vw] md:w-[720px] text-[14px] text-center leading-[24px] font-[Inter]">
        We understand the importance of safeguarding your investments while
        nurturing your financial growth. Our platform is designed to provide
        you with a range of secure solutions.
      </p>
      <div className="flex justify-center items-center gap-5 font-[Inter]">
        <button className="flex justify-center p-[2px] items-center scale-90 border-[#6C6CFF] rounded-[24px] border px-4 py-2">
          <p className="text-3xl"><FaApple /></p>
          <div className="ml-2">
            <p className="text-[9px] ">Download on the</p>
            <p className="font-semibold leading-5">App Store</p>
          </div>
        </button>
        <button className="flex justify-center gap-2 items-center scale-90 border-[#6C6CFF] rounded-[24px] border px-4 py-2">
          <img src={PlayLogo} alt="" className="w-[px] h-[26.12px]" />
          <div className="ml-2">
            <p className="text-[10px] font-semibold text-start">GET IT ON</p>
            <p className="font-semibold -mt-1">Google Play</p>
          </div>
        </button>
      </div>
      {/* Wrap animations in a div with proper height */}
      <div className="relative w-full h-[450px] sm:h-[650px] md:h-[800px] mt-7 flex  overflow-x-hidden">
        <img src={RainbowLight} alt="" className="absolute w-[100vw] animate-scroll3 md:animate-scroll3Md" />
        <div className="flex w-full">
          <img src={Ernest} alt="" className="absolute left-[10vw] scale-75 md:scale-none animate-scroll2 md:animate-scroll2Md" />
          <img src={Taofeeqah} alt="" className="absolute right-[10vw] scale-75 md:scale-none animate-scroll md:animate-scrollMd" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
