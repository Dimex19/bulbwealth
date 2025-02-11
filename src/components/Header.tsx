import Logo from '../assets/logo.png';
import { Link } from "react-router-dom";
import ButtonProps from "./Button";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';

const style1 = {
    backgroundColor: 'transparent',
    color: 'white',
    border: 'none',
    width: '50px',
    height: '40px',
};
const style2 = {
    backgroundColor: '#6C6CFF',
    color: 'white',
    border: 'none',
    width: '100px',
    height: '40px',
    borderRadius: '20px',
    marginLeft: '12px'
};

const Header: React.FC = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className="text-white w-full p-5 md:pl-[50px] md:pr-[50px] flex justify-between items-center fixed z-20 bg-[#121B26]">
            <img src={Logo} alt="logo" />

            {/* Desktop Navigation */}
            <div className="hidden md:flex w-100 h-[50px] text-4 p-5 border-1 rounded-[25px] justify-between items-center decoration-0 text-white">
                <Link to='/about' className="text-white no-underline mx-4">About</Link>
                <Link to='/product' className="text-white no-underline mx-4">Product</Link>
                <Link to='/pricing' className="text-white no-underline mx-4">Pricing</Link>
            </div>

            {/* Buttons for Desktop */}
            <div className="hidden md:flex">
                <ButtonProps text="Log in" customStyle={style1} />
                <ButtonProps text="Sign up" customStyle={style2} />
            </div>

            {/* Hamburger Menu Button (Mobile) */}
            <div 
                className="flex justify-center items-center w-10 h-10 bg-[#202C3C] rounded-[8px] md:hidden"
                onClick={toggleMenu}
            >
                <GiHamburgerMenu className="text-white text-2xl" />
            </div>

            {/* Mobile Menu */}
            {showMenu && (
                <div className="absolute top-[70px] left-0 w-full h-[100vh] bg-[#202C3C] text-white flex flex-col items-center py-4 md:hidden z-50">
                    <Link to='/about' className="py-2 text-white no-underline" onClick={toggleMenu}>About</Link>
                    <Link to='/product' className="py-2 text-white no-underline" onClick={toggleMenu}>Product</Link>
                    <Link to='/pricing' className="py-2 text-white no-underline" onClick={toggleMenu}>Pricing</Link>
                    <div className="flex flex-col items-center mt-4">
                        <ButtonProps text="Log in" customStyle={style1} />
                        <ButtonProps text="Sign up" customStyle={style2} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;
