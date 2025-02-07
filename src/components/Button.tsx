import styled from "styled-components"

interface MyButtonProps {
    text: string;
    customStyle?: React.CSSProperties;
    className?: string;
}

const ButtonProps = ({ text, customStyle, className}: MyButtonProps) => {
    return <Button style={customStyle} className={className}>{text}</Button>;
};

export default ButtonProps;

const Button = styled.button``;
