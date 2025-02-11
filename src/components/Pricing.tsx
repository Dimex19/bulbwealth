import React from 'react'
import PricingCard from './PricingCard'
import Ellipse from '../assets/ellipse.png'
import Check from '../assets/check.png'
const Smart = ({ text }: { text: string }) => {
    return <div className='flex items-center mb-[28px] '>
        <img src={Check} alt="" className="w-[16px] h-[16px] mr-[4px] " />
        <p className="text-white text-sm">{text}</p>
        </div>;
  };
const Secure = ({ text }: { text: string }) => {
    return <div className='flex items-center mb-[28px] '>
        <img src={Check} alt="" className="w-[16px] h-[16px] mr-[4px]" />
        <p className="text-white text-sm">{text}</p>
        </div>;
  };
const Bonus = ({ text }: { text: string }) => {
    return <div className='flex items-center mb-[28px]'>
        <img src={Check} alt="" className="w-[16px] h-[16px] mr-[4px] " />
        <p className="text-white text-sm">{text}</p>
        </div>;
  };
const Financial = ({ text }: { text: string }) => {
    return <div className='flex items-center mb-[28px]'>
        <img src={Check} alt="" className="w-[16px] h-[16px] mr-[4px] " />
        <p className="text-white text-sm">{text}</p>
        </div>;
  };

const Product:React.FC = () => {
  return (
    <div className="w-full flex flex-col relative mb-[125px]">
        <img src={Ellipse} alt="" className="absolute right-0" />
      <div className="flex flex-col items-center pt-[85px] mb-[56px]">
        <p className="text-[#6C6CFF] font-semibold text-[16px] md:text-[24px] inline-block mb-[16px] font-[Inter]">Pricing</p>
        <h2 className="font-bold text-[32px] text-center md:text-[64px] font-[Bricolage_Grotesque] text-white ">Simple and Flexible Pricing</h2>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-10 font-[Inter]">
        <PricingCard title="Free Plan" paragraph='Ideal for individuals looking to start managing their finances effectively without any financial commitment.' month="0" annual="0" className=' 
          h-[100%] md:w-[493px] md:h-[592px]  pt-7' component={[
            { Component: Smart, componentProps:{text: 'Smart Budgeting Tools'}},
            { Component: Secure, componentProps:{text: 'Secure Transactions'}}
        ]}/>
        <PricingCard title="Basic Plan" paragraph='Enhance your financial management capabilities with additional features while keeping costs affordable.' month="24" annual="2480" className='md:w-[493px] md:h-[671px] pt-7' component={[
            { Component: Smart, componentProps:{text: 'Smart Budgeting Tools'}},
            { Component: Secure, componentProps:{text: 'Secure Transactions'}},
            { Component: Bonus, componentProps:{text: 'Bonus chopping'}},
            
        ]}/>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-10 font-[Inter]">
        <PricingCard title="Advanced Plan" paragraph='Unlock advanced tools for investing and future planning to accelerate your financial growth.' month="48" annual="10,480" className='w-[90vw] md:w-[493px] md:h-[671px] mt-10 md:mt-[-40px] pt-7' component={[
            { Component: Smart, componentProps:{text: 'Smart Budgeting Tools'}},
            { Component: Secure, componentProps:{text: 'Secure Transactions'}},
            { Component: Bonus, componentProps:{text: 'Bonus chopping'}},
            { Component: Financial, componentProps:{text: ' Financial Planning Tools'}},
        ]}
        />
        <PricingCard title="Premium Plan" paragraph='Get personalized guidance and support from financial experts to achieve your unique financial goals.' month="107" annual="148,090" className='md:w-[493px] md:h-[592px] md:mt-[40px] pt-7' component={[
            { Component: Smart, componentProps:{text: 'Smart Budgeting Tools'}},
            { Component: Secure, componentProps:{text: 'Secure Transactions'}}
        ]}/>
      </div>
      
    </div>
  )
}

export default Product