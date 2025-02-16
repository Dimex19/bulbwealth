import React from 'react'
import Icon1 from '../assets/icon1.png'
import Icon2 from '../assets/icon2.png'
import Icon3 from '../assets/icon3.png'
import Card from './Card'
import Rainbowlight2 from '../assets/rainbowlight2.png'
import Ellipse from '../assets/ellipse.png'

const Product:React.FC = () => {
  return (
    <div className="w-full flex flex-col relative">
        <img src={Ellipse} alt="" className="absolute left-0" />
        <img src={Rainbowlight2} alt="" className="absolute right-0" />
      <div className="flex flex-col items-center pt-[85px] pl-4 pr-4">
        <p className="text-[#6C6CFF] font-semibold text-[16px] md:text-[24px] inline-block mb-[16px]">Product</p> {/* Custom margin */}
        <h2 className="font-bold text-[32px] text-center md:text-[64px] font-[Bricolage_Grotesque] text-white ">Our Innovative Solutions</h2> {/* Custom margin */}
        <p className="font-[Inter] md:w-[719px] text-center text-[14px] leading-6 md:text-[18px] text-white mb-[116px]">We offer a suite of cutting-edge financial tools designed to transform the way you manage your money, invest, and plan for the future. Our range of products is crafted to meet your diverse financial needs.</p> {/* Custom margin */}
      </div>
      <div className="flex flex-col gap-18 items-center md:items-start ">
        <Card title="Smart Budgeting" paragraph='Gain control of your finances effortlessly with our intuitive budgeting tools. Track expenses, set saving goals, and receive personalized insights to optimize your spending habits.' src={Icon1} className='md:ml-[94px]'/>
        <Card title="Investment Insights" paragraph='Unlock a world of investment possibilities with our comprehensive insights. Access real-time market data, personalized recommendations, and expert analysis to make informed investment decisions.' src={Icon2} className='md:ml-[642px]'/>
        <Card title="Secure Transactions" paragraph='Your security is our priority. Our platform utilizes bank-level encryption and robust security measures to safeguard your financial data.' src={Icon3} className='md:ml-[94px] md:mb-[85.02px]'/>
      </div>
    </div>
  )
}

export default Product