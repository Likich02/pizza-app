import { FC } from "react";
import "./Button.module.css";
import { ButtonProps } from "./Button.props";
import cn from "classnames";

export const ButtonAlt: FC<ButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <>
      <button className={cn("button accent", className)} {...props}>
        {children}
      </button>
    </>
  );
};

function Button({ children, className, ...props }: ButtonProps) {
  console.log("Button");
  return (
    <button className={cn("button accent", className)} {...props}>
      {children}
    </button>
  );
}

export default Button;