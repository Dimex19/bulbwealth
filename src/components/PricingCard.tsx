import React from 'react'
import Button from './Button'

const style = {
    backgroundColor: 'transparent',
    color: 'white',
    border: '1px solid #6C6CFF',
    borderRadius: '50px',
    width: '405px',
    height: '44px',
    marginBottom: '48px'
}
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
    <div className={`flex flex-col justify-center items-center text-[14px] pl-[35px] pr-[44px] font-medium text-white bg-[#1A2635A3]   border-1 border-[#667B96] rounded-[10px] ${className}`}>
        <div className="flex flex-col">
            <div className="pl-[18px] w-[387px]">
                <h3 className="text-[24px] font-bold font-[Bricolage_Grotesque] mb-[8px]">{title}</h3>
                <p className="text-[14px] font-normal">{paragraph}</p>
            </div>
            <hr className="text-[#6C6CFF] mt-[16px] mb-[56px]"/>
            <p className="text-[32px] font-bold bg-gradient-to-b from-white to-#0f0f64-500 text-transparent bg-clip-text mb-[8px]">${month} / month</p>

            <p className="text-[14px] font-medium bg-gradient-to-b from-white to-#0f0f64-500 text-transparent bg-clip-text mb-[40px]">${annual} / annually</p>
            <Button text="Get a Demo" customStyle={style}/>
            {component.map(({ Component, componentProps}, index) => (<Component key={index} {...componentProps} />))}
        </div>
    </div>
  )
}

export default PricingCard