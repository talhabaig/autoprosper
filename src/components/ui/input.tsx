import * as React from "react";

import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  options?: Array<{
    label: string;
    value: string;
  }>;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const randomId = Math.floor(Math.random() * (100 - 0) + 0) + props.label;
    return (
      <div className="relative flex items-center gap-3 rounded-xl px-4 pb-[8px] md:pb-[15px] pt-[22px] md:pt-[30px] bg-gray-50 border-[1px] border-dark-4 appearance-none">
        <input
          type={type}
          className={cn(
            "w-full text-[13px] md:text-lg text-dark-1 focus:outline-none bg-gray-50 focus:ring-0 peer",
            className
          )}
          id={randomId.toString()}
          ref={ref}
          placeholder=" "
          {...props}
        />
        <label
          htmlFor={randomId.toString()}
          className="absolute cursor-text  text-dark-4 text-[13px] md:text-lg duration-300 transform -translate-y-3 md:-translate-y-4 scale-50 top-4 md:top-5 z-10 origin-[0] start-[16px] peer-focus:text-[11px] peer-focus:text-dark-4 peer-focus:font-bold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:md:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
        >
          {props.label}
        </label>
        {props.options && (
          <ChevronDown
            className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 peer-focus:rotate-180 peer-focus:translate-y-0 peer-placeholder-shown:-translate-y-2"
            aria-hidden="true"
          />
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
