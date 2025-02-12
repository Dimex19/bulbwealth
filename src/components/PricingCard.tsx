import React from 'react'
import Button from './Button'

interface ComponentEntry<T> {
    Component: React.ComponentType<T>,
    componentProps: T
}
interface myCardProps<T extends object> {
    title: string,
    paragraph: string,
    className: string,
    month: string
    annual: string,
    component: ComponentEntry<T>[],
}
const PricingCard = <T extends object>({title, paragraph, className, month, annual, component,}: myCardProps<T>) => {
  return (
    <div className={`flex flex-col justify-center items-center text-[14px] pl-[35px] pr-[44px] font-medium text-white bg-[#1A2635A3] border-1 border-[#667B96] rounded-[10px] ${className}`}>
        <div className="flex flex-col">
            <div className="pl-[18px] md:w-[387px]">
                <h3 className="text-[24px] font-bold font-[Bricolage_Grotesque] mb-[8px]">{title}</h3>
                <p className="md:text-[14px] font-normal">{paragraph}</p>
            </div>
            <hr className="text-[#6C6CFF] mt-[16px] mb-[56px]"/>
            <p className="text-[32px] font-bold bg-gradient-to-b from-white to-#0f0f64-500 text-transparent bg-clip-text mb-[8px]">${month} / month</p>

            <p className="text-[14px] font-medium bg-gradient-to-b from-white to-#0f0f64-500 text-transparent bg-clip-text mb-[40px]">${annual} / annually</p>
            <Button text="Get a Demo" className='w-full h-[44px] mb-[48px] bg-transparent border border-[#6C6CFF] rounded-[50px] transition-all ease-in-out duration-2000 hover:bg-[#6C6CFF] hover:to-[#7F56D9 hover:shadow-[0px_0px_29px_4px_rgba(100,100,111,0.7)] '/>

            {component.map(({ Component, componentProps}, index) => (<Component key={index} {...componentProps} />))}
        </div>
    </div>
  )
}

export default PricingCard