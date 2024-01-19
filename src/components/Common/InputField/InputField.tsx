import React, { useState, ChangeEvent } from "react";

interface CustomInputProps {
  type?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  className?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  type,
  placeholder,
  onChange,
  className,
}) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    onChange && onChange(value);
  };

  return (
    <div className={` ${className}`}>
      <input
        className="shadow appearance-none border w-full py-4 px-[18px] text-dark-4 leading-tight 
        focus:shadow-outline focus:outline-none border-dark-4 focus:bg-white focus:border-dark rounded-[12px]
      hover:border-dark"
        type={type}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default CustomInput;
