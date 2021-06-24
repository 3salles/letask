import { ButtonHTMLAttributes } from "react";
import {Button as ButtonStyles} from '../styles/components/Button'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  isOutlined?: boolean;
};

const Button = ({ isOutlined=false, ...rest }: ButtonProps) => {
  return(
    <ButtonStyles hasOutline={isOutlined} {...rest}/>
  )
}

export default Button;