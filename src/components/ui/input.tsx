import * as React from "react";

import { cn } from "@/lib/utils";
import { SelectArrow } from "../Icons/Icons";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  currency?: string;
}

export interface SelectProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  variant?: string;
  options?: Array<{
    label: string;
    value: string;
  }>;
}

interface Option {
  value: string;
  label: string;
}
interface SelectComponentProps {
  options: Option[];
  selectedOption: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, currency, ...props }, ref) => {
    const randomId = Math.floor(Math.random() * (100 - 0) + 0) + props.label;

    return (
      <div className="flex flex-col h-[52px] md:h-[72px] items-start justify-start gap-2 md:gap-[9px] rounded-xl px-[18px] pt-[8px] pb-[10px] md:pb-[15px] md:pl-[12px] md:pt-[12px] bg-gray-50 border-[1px] border-dark-4 appearance-none">
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

const Select: React.FC<SelectProps> = ({ options, variant = 'default', ...props }) => {
  const randomId = Math.floor(Math.random() * (100 - 0) + 0) + props.label;
  const containerClass = variant === 'small' ? 'h-[52px] px-[18px] py-[8px] gap-[5px]' : 'h-[52px] md:h-[72px] px-[18px] md:pl-[12px] py-[8px] md:py-[12px] gap-[5px] md:gap-[9px]';
  const labelClass = variant === 'small' ? 'text-[8px] md:text-[9px] md:leading-[10.8px]' : 'text-[9px] md:text-[10px] md:leading-[12.6px]';
  const selectClass = variant === 'small' ? 'text-[12px] md:text-[14px] md:leading-[18.72px]' : 'text-[14px] md:text-lg md:leading-[22.68px]';

  return (
    <div className={`flex flex-col ${containerClass} items-start rounded-xl bg-gray-50 border-[1px] border-dark-4`}>
      <label
        htmlFor={randomId.toString()}
        className={`cursor-text text-left text-dark-4 ${labelClass}`}
      >
        {props.label}
      </label>
      <div className="flex items-center justify-between w-full">
        <select className={`cursor-pointer appearance-none w-full ${selectClass} text-dark-1 focus:outline-none bg-gray-50 focus:ring-0`}>
          {options?.map((opt, index) => (
            <option key={`opt${index}`} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <SelectArrow />
      </div>
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

const SelectBox: React.FC<SelectComponentProps> = ({ options, selectedOption, onChange }) => {
  return (
    <div className="flex border border-dark-4 rounded-xl py-[17px] pl-[18px] pr-[17px] bg-white h-[52px]">
      <select className="w-full" value={selectedOption} onChange={onChange}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export { Input, Select, TextBox, SelectBox };
