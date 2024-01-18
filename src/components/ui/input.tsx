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
      <div className="flex flex-col items-start justify-start gap-2 md:gap-3 rounded-xl px-4 py-[8px] md:py-[15px] bg-gray-50 border-[1px] border-dark-4 appearance-none">
        <label
          htmlFor={randomId.toString()}
          className="cursor-text text-left text-dark-4 text-[10px] "
        >
          {props.label}
        </label>
        <div className="flex items-center">
          {currency}
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
        </div>
      </div>
    );
  }
);
Input.displayName = "Input";

const Select: React.FC<SelectProps> = ({ options, ...props }) => {
  const randomId = Math.floor(Math.random() * (100 - 0) + 0) + props.label;
  return (
    <div className="flex flex-col items-start justify-start gap-2 md:gap-3 rounded-xl px-4 py-[8px] md:py-[15px] bg-gray-50 border-[1px] border-dark-4 appearance-none">
       <label
          htmlFor={randomId.toString()}
          className="cursor-text text-left text-dark-4 text-[10px] "
        >
          {props.label}
        </label>
      <select className="w-full text-[13px] md:text-lg text-dark-1 focus:outline-none bg-gray-50 focus:ring-0">
        {options?.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export { Input, Select };
