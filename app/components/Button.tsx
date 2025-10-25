import { Children, MouseEventHandler } from "react"

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
}

const Button = ({ children, className = "", onClick, type = "button" }: ButtonProps) => {
  return (
    <button type={type} className={`${className} cursor-pointer px-6 py-1.5 rounded-xl`} onClick={onClick}>{children}</button>
  )
}

export default Button