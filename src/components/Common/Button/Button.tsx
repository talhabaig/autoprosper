"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

type propType = {
  label?: string;
  variant?: "primary" | "transparent" | "secondary" | "small" | "gray" | undefined;
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
      "text-[0.875rem] xl:text-[1rem]  px-[14px] px-[18px] xl:px-[32px]  xl:tarcaking-[1.44px] min-w-[140px]  lg:min-w-[170px] min-h-[46px]  xl:min-h-[56px]  bg-btn-primary-gradient font-[700] rounded-[100px] text-dark  hover:bg-btn-primary-gradient-hover";
  } else if (variant === "small") {
    classList =
      "min-w-[156px] gap-[6px] px-[14px] text-[0.875rem] min-h-[46px] xl:text-[1rem]  bg-btn-primary-gradient font-[700] rounded-[100px] text-dark hover:bg-btn-primary-gradient-hover";
  } else if (variant === "secondary") {
    classList =
      "text-primary border border-primary bg-primary hover:bg-white text-white hover:text-primary";
  } else if (variant === "transparent") {
    classList =
      "text-gray border border-solid border-gray text-[0.875rem] xl:text-[1rem]  xl:tarcaking-[1.44px]   min-w-[185px] min-h-[46px] xl:min-w-[220px] xl:min-h-[56px]  rounded-[100px] font-[700] hover:bg-dark hover:text-white";
  }else if (variant === "gray") {
    classList =
      "text-black border border-solid border-gray bg-[#ECEEF1] text-[0.875rem] xl:text-[1rem]  xl:tarcaking-[1.44px]   min-w-[185px] min-h-[46px] xl:min-w-[220px] xl:min-h-[56px]  rounded-[100px] font-[700]";
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
      className={`flex items-center transition-all duration-300 justify-center gap-[8px]  ${classList} ${className} disabled:bg-disabled `}
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
