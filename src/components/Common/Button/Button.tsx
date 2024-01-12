"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

type propType = {
  label?: string;
  variant?: "primary" | "transparent" | "secondary" | "small";
  className?: string;
  isLoading?: boolean;
  children?: JSX.Element | string;
  onClick?: any;
  disabled?: boolean;
  [key: string]: any;
};

const Button: React.FC<propType> = ({
  label,
  variant,
  className,
  children,
  isLoading,
  onClick,
  ...props
}) => {
  let classList = ``;
  if (!variant || variant === "primary") {
    classList =
      "text-[1.4rem] lg:text-[1.6rem] tracking-[1.26px] lg:tarcaking-[1.44px]  uppercase min-w-[18.5rem] min-h-[4.6rem] xl:min-w-[22.1rem] xl:min-h-[5.6rem] p-[1.4rem_2.8rem] xl:p-[1.8rem_3.6rem] bg-btn-primary-gradient font-[800] rounded-[100px] text-primary-text hover:bg-btn-primary-gradient-hover";
  } else if (variant === "small") {
    classList =
      "min-w-[9.6rem] min-h-[3.6rem] p-[1.4rem_2.8rem] bg-btn-primary-gradient font-[800] rounded-[100px] text-primary-text hover:bg-btn-primary-gradient-hover";
  } else if (variant === "secondary") {
    classList =
      "text-primary border border-primary bg-primary hover:bg-white text-white hover:text-primary";
  } else if (variant === "transparent") {
    classList =
      "text-gray border border-solid border-gray  hover:bg-primary hover:text-white";
  }

  function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if (!props?.disabled && !isLoading && onClick) {
      onClick(e);
    }
  }

  return (
    <button
      {...props}
      onClick={handleClick}
      className={`flex items-center transition-all duration-300 justify-center gap-4  ${classList} ${className} disabled:bg-disabled `}
    >
      {label}
      {children}
      {isLoading && (
        <div className="text-inherit text-[20px] animate-spin flex justify-center items-center">
          <FontAwesomeIcon icon={faSpinner} />
        </div>
      )}
    </button>
  );
};

export default Button;
