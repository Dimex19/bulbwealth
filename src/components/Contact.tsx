import React from 'react'
import ButtonProps from './Button'
import RainbowBox from '../assets/rainbowbox.png'
const Contact:React.FC = () => {

  return (
    <div className='flex justify-around items-center pb-[100.5px]'>
        <div className="text-white w-[40vw] pl-12 pr-12">
            <h2 className='text-white font-bold font-[Bricolage_Grotesque] mb-[20px] text-[64px]'>Contact</h2>
            <p className="font-normal text-[20px] mb-12">Our friendly team would love to hear from you.</p>
            <form action="">
                <div className='inputDiv flex flex-col'>
                    <label htmlFor="" className='mb-1.5'>Email</label>
                    <input type="email" placeholder="you@company.com" className='w-[100%] h-[44px] rounded-[8px] border-[0.4px] border-[#D0D5DD] pl-[14px] pr-[14px] mb-6'/>
                </div>
                <div className='inputDiv flex flex-col'>
                    <label htmlFor=""  className='mb-1.5'>Phone number</label>
                    <input type="text" placeholder="+1 (555) 000-000" className='w-[100%] h-[44px] rounded-[8px] border-[0.4px] border-[#D0D5DD] pl-[14px] pr-[14px] mb-6'/>
                </div>
                <div className='inputDiv flex flex-col'>
                    <label htmlFor="" className='mb-1.5'>Message</label>
                    <textarea placeholder="Leave us a message..." className='w-[100%] h-36 rounded-[8px] border-[0.4px] border-[#D0D5DD] pl-[14px] pr-[14px] mb-6'></textarea>

                </div>
                <ButtonProps text="Send" className='bg-[#6c6cff] text-white border-1 border-[#7f56d9] w-[100%] h-[44px] rounded-[50px] shadow-[0px_0px_29px_4px_rgba(100,100,111,0.7)] transition-all duration-500 ease-in-out hover:bg-[#7F56D9] animate-bounce'/>
            </form>
        </div>
        <img src={RainbowBox} alt="" className='animate-rotate'/>
    </div>
  )
}

export default Contact