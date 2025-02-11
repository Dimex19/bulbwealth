
interface myCardProps {
    title: string,
    paragraph: string,
    src: string,
    className: string
}
const Card = ({title, paragraph, src, className}: myCardProps) => {
  return (
    <div className={`flex flex-col justify-center items-center font-[Inter] w-[90vw] md:w-[414.98px] h-[414.98px]text-[14px] font-medium text-white bg-[#1A2635A3] pt-[81px] pb-[82.98px] pr-[36.98px] pl-[36px] border-1 border-[#667B96] rounded-[10px] ${className}`}>
        <img src={src} alt="" className='w-[83px] h-[83px] mb-[24px]' />
        <div className="flex flex-col justify-center items-center text-center w-[342px] h-[140px]">
            <h3 className="text-[32px] font-bold font-[Bricolage_Grotesque] mb-[8px]">{title}</h3>
            <p className="text text-[11px]">{paragraph}</p>
        </div>
    </div>
  )
}

export default Card