import styled from "styled-components"

interface MyButtonProps {
    text: string;
    customStyle?: React.CSSProperties;
}

const ButtonProps = ({ text, customStyle }: MyButtonProps) => {
    return <Button style={customStyle}>{text}</Button>;
};

export default ButtonProps;

const Button = styled.button``;
