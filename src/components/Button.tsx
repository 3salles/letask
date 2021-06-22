import { ButtonHTMLAttributes } from "react";
import {Button as ButtonStyles} from '../styles/components/Button'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = (props: ButtonProps) => {
  return(
    <ButtonStyles {...props}/>
  )
}

export default Button;