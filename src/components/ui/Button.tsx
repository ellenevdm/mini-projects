import { FC, ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({ className = "", children, ...props }) => {
  return (
    <button className={`cursor-pointer ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
