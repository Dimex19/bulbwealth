import React from "react";
import styled from "styled-components";
import { FaArrowRight, FaApple } from "react-icons/fa";
import "tailwindcss";
import PlayLogo from '../assets/googleplaylogo.png'
import RainbowLight from '../assets/rainbowlight.png'
import Taofeeqah from '../assets/taofeeqah.png'
import Ernest from '../assets/ernest.png'

const Hero: React.FC = () => {
  return (
    <Wrapper className="flex flex-col gap-5 justify-center items-center relative min-h-screen" >
      <Section className="flex items-center w-[80vw] md:w-[28vw] h-[35px] rounded-[50px] border-[1.31px] border-[#6c6cff] p-[3.51px] font-[Inter] mt-6" >
        <InnerSection>
          <p className="text-[12px] md:text-[14px] w-[80px] md:w-[100px] p-0.5">New Feature</p>
        </InnerSection>
        <p className="text-[12px] md:text-[14px]">
          Check out the new dashboard <span className="pl-1 md:pl-0"><FaArrowRight /></span>
        </p>
      </Section>
      <h1 className="w-[90vw] -mt-3 md:w-[800px] text-center font-[Bricolage_Grotesque] font-bold text-[32px] md:text-[80px] leading:[40px] md:leading-[100px]">
        Discover the Future of Personal Finance.
      </h1>
      <p className="w-[90vw] md:w-[720px] text-[14px] text-center leading-[24px] font-[Inter]">
        We understand the importance of safeguarding your investments while
        nurturing your financial growth. Our platform is designed to provide
        you with a range of secure solutions.
      </p>
      <div className="flex justify-center items-center gap-5 font-[Inter]">
        <button className="flex justify-center p-[2px] items-center w-[148px] h-[44px] border-[#6C6CFF] rounded-[24px] border px-4 py-2">
          <p className="text-3xl"><FaApple /></p>
          <div className="ml-2">
            <p className="text-[9px] ">Download on the</p>
            <p className="font-semibold leading-5">App Store</p>
          </div>
        </button>
        <button className="flex justify-center gap-2 items-center w-[170px] h-[44px] border-[#6C6CFF] rounded-[24px] border px-4 py-2">
          <img src={PlayLogo} alt="" className="w-[px] h-[26.12px]" />
          <div className="ml-2">
            <p className="text-[10px] font-semibold text-start">GET IT ON</p>
            <p className="font-semibold -mt-1">Google Play</p>
          </div>
        </button>
      </div>
      {/* Wrap animations in a div with proper height */}
      <div className="relative w-full h-[350px] md:h-[800px] mt-7 flex  overflow-x-hidden">
        <img src={RainbowLight} alt="" className="absolute w-[100vw] animate-scroll3 md:animate-scroll3Md" />
        <div className="flex w-full">
          <img src={Ernest} alt="" className="absolute left-[10vw] scale-75 md:scale-none animate-scroll2 md:animate-scroll2Md" />
          <img src={Taofeeqah} alt="" className="absolute right-[10vw] scale-75 md:scale-none animate-scroll md:animate-scrollMd" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Hero;

const Wrapper = styled.div`
  color: white;
`;

const Section = styled.div`
  

  p {
    text-align: center;
    /* font-size: 14px; */
    display: flex;
    align-items: center;
    margin-left: 10.52px;
    font-family: "Inter", serif;

    span {
      margin-left: 3.51px;
      display: flex;
      align-items: center;
    }
  }
`;

const InnerSection = styled.div`
  border: 1.31px solid #6C6CFF;
  border-radius: 14.02px;
  /* padding: 2px 7px; */
`;
