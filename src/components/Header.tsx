import Logo from '../assets/logo.png'
import { Link } from "react-router-dom"
import ButtonProps from "./Button"

const style1 = {
    backgroundColor: 'transparent',
    color: 'white',
    border: 'none',
    width: '50px',
    height: '40px',
}
const style2 = {
    backgroundColor: '#6C6CFF',
    color: 'white',
    border: 'none',
    width: '100px',
    height: '40px',
    borderRadius: '20px',
    marginLeft: '12px'
}

const Header: React.FC = ()=> {
    return (
        <div className="text-white p-5 md:pl-[50px] md:pr-[50px] flex justify-between items-center">
            <img src={Logo} alt="logo"/>
            <div  className="hidden w-100 h-[50px] text-4 p-5 border-1 rounded-[25px] justify-between items-center decoration-0 text-white overflow-y-hidden md:flex" >
                <Link to='/about' style={{textDecoration: 'none', color: 'white'}}>About</Link>
                <Link to='/product' style={{textDecoration: 'none', color: 'white'}}>Product</Link>
                <Link to='/pricing' style={{textDecoration: 'none', color: 'white'}}>Pricing</Link>
            </div>
            <div className="hidden md:flex">
                <ButtonProps text="Log in" customStyle={style1}/>
                <ButtonProps text="Sign up" customStyle={style2}/>
            </div>
        </div>
    )
}
export default Header