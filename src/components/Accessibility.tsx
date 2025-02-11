import React from 'react'
import Mifi from '../assets/mifi.png'

const Accessibility: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <p className="text-[#6C6CFF] font-semibold text-[16px] md:text-[24px] inline-block mb-[16px]">About Us</p> {/* Custom margin */}
      <h2 className="font-bold text-[32px] md:text-[64px] font-[Bricolage_Grotesque] text-white ">Making it accessible</h2> {/* Custom margin */}
      <p className="w-[90vw] md:w-[719px] p-2 text-center font-[Inter] leading-6 text-[14px] md:text-[18px] text-white mb-[54px]">At BulbWealth, we believe in revolutionizing the way individuals manage and grow their finances. Our journey began with a simple yet powerful idea: to empower everyone with the tools and knowledge needed to achieve financial freedom.</p> {/* Custom margin */}
      <img src={Mifi} alt="" className="md:mb-[156px] w-[90vw]" />
    </div>
  )
}

export default Accessibility
