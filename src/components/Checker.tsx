import Check from '../assets/check.png'

interface myCheckerProps {
    text: string
}
const Checker = ({text}: myCheckerProps) => {
  return (
    <div className="flex items-center ">
        <img src={Check} alt="" className='mr-[4px] w-[16px] h-[16px]'/>
        <p>{text}</p>
    </div>
  )
}

export default Checker