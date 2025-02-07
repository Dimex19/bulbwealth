import styled from "styled-components"
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
        <Wrapper>
            <img src={Logo} alt="logo"/>
            <Links  className="overflow-y-hidden" >
                <Link to='/about' style={{textDecoration: 'none', color: 'white'}}>About</Link>
                <Link to='/product' style={{textDecoration: 'none', color: 'white'}}>Product</Link>
                <Link to='/pricing' style={{textDecoration: 'none', color: 'white'}}>Pricing</Link>
            </Links>
            <Buttons>
                <ButtonProps text="Log in" customStyle={style1}/>
                <ButtonProps text="Sign up" customStyle={style2}/>
            </Buttons>
        </Wrapper>
    )
}
export default Header

const Wrapper = styled.div`
    color: white;
    padding: 20px 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Links = styled.div`
    width: 400px;
    height: 50px;
    font-size: 16px;
    padding: 20px;
    border: 1px solid white;
    border-radius: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
    color: white;
`
const Buttons = styled.div`

`