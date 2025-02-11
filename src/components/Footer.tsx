import React from 'react'
import ButtonProps from './Button'
import Logo from '../assets/logo.png'
const Footer:React.FC = () => {
  return (
    <>
        <div className='pl-4 pr-4 md:pl-[80px] md:pr-[80px] font-[Inter]'>
            <div className="flex flex-col md:flex-row justify-between md:pl-[32px] md:pr-[32px] pb-10 mb-8 md:mb-[64px] border-b border-transparent" style={{ borderBottomColor: 'rgba(190, 194, 201, 0.5)' }}>
                <div className=''>
                    <h2 className="text-[20px] font-semibold mb-2 text-white">Join our newsletter</h2>
                    <p className='text-[16px] font-normal mb-16 text-white'>We’ll send you a nice letter once per week. No spam.</p>
                </div>
                <div className="flex">
                <input type="text" className="w-[323px] h-[44px] text-black p-2.5 rounded-[50px] mr-2 bg-white" placeholder='Enter your email'/>
                <ButtonProps text='Subscribe' className='w-[131px] h-[44px] text-white rounded-[50px] border-1 border-[#7F56D9] bg-[#6C6CFF] transition-all ease-in-out hover:bg-[#7F56D9]'/>
                </div>
            </div>
        </div>
        <div className='md:pl-[80px] md:pr-[80px]'>
            <div className="flex flex-col md:flex-row justify-between text-white pl-[32px] pr-[32px] mb-[64px]">
                <div>
                    <img src={Logo} alt="" />
                    <p>© 2077 BulbWealth. All rights reserved.</p>
                </div>
                <div className='flex mt-7 md:mt-0'>
                    <div className='w-[146px] mb-8'>
                        <p className='text-[14px] font-semibold text-[#D0D5DD] mb-4'>COMPANY</p>
                        <p className='text-[16px] font-semibold text-white mb-3'>About us</p>
                        <p className='text-[16px] font-semibold text-white mb-3'>Products</p>
                        <p className='text-[16px] font-semibold text-white mb'>Pricing</p>
                    </div>
                    <div className='w-[146px] mb-8'>
                        <p className='text-[14px] font-semibold text-[#D0D5DD] mb-4'>SOCIAL</p>
                        <p className='text-[16px] font-semibold text-white mb-3'>Twitter</p>
                        <p className='text-[16px] font-semibold text-white mb-3'>LinkenIn</p>
                        <p className='text-[16px] font-semibold text-white mb'>Facebook</p>
                    </div>
                    <div className='w-[146px]'>
                        <p className='text-[14px] font-semibold text-[#D0D5DD] mb-4'>FIND US HERE</p>
                        <p className='text-[16px] font-semibold text-white mb-3'>Ajakude Str.</p>
                        <p className='text-[16px] font-semibold text-white mb-3'>San Francisco.</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer