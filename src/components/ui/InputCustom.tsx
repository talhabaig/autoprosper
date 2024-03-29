import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  currency?: string;
}

export interface SelectProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  options?: Array<{
    label: string;
    value: string;
  }>;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, currency, ...props }, ref) => {
    const randomId = Math.floor(Math.random() * (100 - 0) + 0) + props.label;

    return (
      <div className="flex flex-col items-start justify-start gap-2 md:gap-3 rounded-xl px-4 py-[8px] md:py-[15px] bg-gray-50 border-[1px] border-dark-4 appearance-none  ">

        <label
          htmlFor={randomId.toString()}
          className="cursor-text text-left text-dark-4 text-[9px] md:text-[10px] md:leading-[12.6px]"
        >
          {props.label}
        </label>
        <div className="flex items-center text-[14px] md:text-lg">
          {currency}
        <input
          type={type}
          className={cn(
            "w-full text-[14px] md:text-lg md:leading-[22.68px] text-dark-1 focus:outline-none bg-gray-50 focus:ring-0 peer",
            className
          )}
          id={randomId.toString()}
          ref={ref}
          placeholder=" "
          {...props}
        />
        </div>
      </div>
    );
  }
);
Input.displayName = "Input";

const Select: React.FC<SelectProps> = ({ options, ...props }) => {
  const randomId = Math.floor(Math.random() * (100 - 0) + 0) + props.label;
  return (
    <div className="flex flex-col items-start justify-start gap-[0.25rem] md:gap-2 rounded-xl p-[8px_18px] 2xl:p-[12px_24px]  bg-gray-50 border-[1px] border-dark-4 appearance-none `">

      <label
        htmlFor={props.label}
        className="cursor-text text-left text-dark-4 text-[9px] md:text-[10px] md:leading-[12.6px]"
      >
        {props.label}
      </label>
      <select  id={props.label} className="-ml-[4px] w-full text-[14px] md:text-lg md:leading-[22.68px] text-[#001B44] font-medium focus:outline-none bg-gray-50 focus:ring-0">
        {options?.map((opt) => (
          <option key={'opt' + randomId.toString()} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};


const TextBox = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const randomId = Math.floor(Math.random() * (100 - 0) + 0);
    return (
      <div className="relative w-full flex items-center gap-3 rounded-xl px-5 py-[17px] bg-gray-50 border-[1px] border-dark-4 appearance-none">
        <input
          type={type}
          className={cn(
            "w-full text-basetext-dark-4 focus:outline-none bg-gray-50 focus:ring-0 ",
            className
          )}
          id={randomId.toString()}
          ref={ref}
          placeholder={props.label}
          {...props}
        />
      </div>
    );
  }
);
TextBox.displayName = "TextBox";

export { Input, Select, TextBox };
