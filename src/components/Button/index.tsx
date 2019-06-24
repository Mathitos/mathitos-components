import React from "react";
import cn from "classnames";

import "./button.scss";

export interface ButtonProps {
  children: string;
  className: string;
  theme: string;
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Button = ({
  children,
  className = "button-deafult",
  theme = "primary",
  onClick
}: ButtonProps) => (
  <div
    className={cn("button", className, `button--${theme}`)}
    onClick={onClick}
  >
    {children}
  </div>
);

export default Button;
