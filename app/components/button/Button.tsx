import React, { FC, MouseEventHandler } from "react";

interface ButtonProps {
  children: React.ReactNode;
  type?: "primary" | "secondary";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  active?: boolean;
}

const Button: FC<ButtonProps> = ({
  children,
  type,
  onClick,
  active,
  ...props
}) => {
  const baseClasses = "px-8 py-3 rounded-lg font-medium w-full";
  let classes = "";

  switch (type) {
    case "primary":
      classes = `${baseClasses} text-gray-sd bg-yellow-d dark:bg-yellow-c hover:opacity-75`;
      break;
    case "secondary":
      classes = `${baseClasses} text-gray-sd dark:text-gray-l dark:bg-gray-dl bg-white-c hover:opacity-75`;
      break;
    default:
      classes = `${baseClasses} ${
        active
          ? "bg-gray-ml dark:bg-gray-d"
          : "bg-white-c dark:bg-gray-dl hover:border-2 hover:border-gray-ml"
      } dark:text-gray-l text-gray-msd hover:opacity-75`;
      break;
  }

  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
