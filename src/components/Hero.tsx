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
    <Wrapper className="flex flex-col gap-5 justify-center items-center relative min-h-screen">
      <Section>
        <InnerSection>
          <p>New Feature</p>
        </InnerSection>
        <p>
          Check out the new dashboard <span><FaArrowRight /></span>
        </p>
      </Section>
      <h1 className="w-[800px] text-center font-[Bricolage_Grotesque] font-bold text-[80px] leading-[100px]">
        Discover the Future of Personal Finance.
      </h1>
      <p className="w-[720px] text-center">
        We understand the importance of safeguarding your investments while
        nurturing your financial growth. Our platform is designed to provide
        you with a range of secure solutions.
      </p>
      <div className="flex justify-center items-center gap-5">
        <button className="flex justify-center gap-2 items-center w-[142px] h-[41px] border-[#6C6CFF] rounded-[24px] border px-4 py-2">
          <p className="text-3xl"><FaApple /></p>
          <div className="ml-2">
            <p className="text-[9px]">Download on the</p>
            <p className="font-semibold">App Store</p>
          </div>
        </button>
        <button className="flex justify-center gap-2 items-center w-[142px] h-[41px] border-[#6C6CFF] rounded-[24px] border px-4 py-2">
          <img src={PlayLogo} alt="" className="w-[px] h-[26.12px]" />
          <div className="ml-2">
            <p className="text-[10px] font-semibold w-[50px]">GET IT ON</p>
            <p className="font-semibold">Google Play</p>
          </div>
        </button>
      </div>
      {/* Wrap animations in a div with proper height */}
      <div className="relative w-full h-[800px] mt-7 flex justify-center items-center">
        <img src={RainbowLight} alt="" className="absolute w-[100vw] animate-scroll3" />
        <div className="flex w-full justify-between">
          <img src={Ernest} alt="" className="animate-scroll2" />
          <img src={Taofeeqah} alt="" className="animate-scroll" />
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
  display: flex;
  align-items: center;
  width: 351px;
  height: 28.52px;
  border: 1.31px solid #6C6CFF;
  border-radius: 14.02px;
  padding: 3.51px;
  margin: auto;

  p {
    text-align: center;
    font-size: 14px;
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
  padding: 2px 7px;
`;
