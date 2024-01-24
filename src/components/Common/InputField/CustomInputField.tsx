import React, { useState } from "react";

interface CustomInputProps {
  type?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  className?: string;
  label?: string;
  value?: string;
}

const CustomInputField: React.FC<CustomInputProps> = ({
  type,
  placeholder,
  onChange,
  className,
  label,
  value,
}) => {
  const [inputValue, setInputValue] = useState<string>(value || "");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);

    onChange && onChange(newValue);
  };

  return (
    <div className={` ${className} relative block`}>
      <label className="inline-block text-dark-4 font-bold text-[10px] absolute top-[8px] left-[18px]">
        {label}
      </label>
      <input
        className="shadow appearance-none border w-full pt-[24px] pb-[8px] px-[18px] text-gray-700 leading-tight 
             focus:shadow-outline border-dark-4 focus:outline-none focus:bg-white focus:border-dark rounded-[12px]
             hover:border-dark"
        type={type}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default CustomInputField;