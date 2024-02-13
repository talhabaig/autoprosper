// RadioButton.js
"use client";
import React from "react";
import styles from "./RadioButton.module.css";
import { RoundedChecked } from "../../Icons/Icons";

interface Option {
  id: number;
  label: string;
  imageUrl: string;
  icon?: React.ReactNode;
}

interface RadioButtonsProps {
  options?: Option[]; // Make options optional
  selectedOptions: string[];
  onChange: (value: string[]) => void; // Change the type to string[]
  className: string;
}

const RadioButton: React.FC<RadioButtonsProps> = ({
  options = [],
  selectedOptions,
  onChange,
  className,
}) => {
  const handleCheckboxChange = (option: Option) => {
    const isSelected = selectedOptions.includes(option.label);
    let updatedOptions: string[];

    if (isSelected) {
      updatedOptions = selectedOptions.filter(
        (value) => value !== option.label
      );
    } else {
      updatedOptions = [...selectedOptions, option.label];
    }

    onChange(updatedOptions);
  };

  return (
    <>
      {options.map((option) => (
        <label
          key={option.label}
          className={`${className} ${styles.customRadio} 
           max-w-[46%] w-full min-h-[80px] md:max-w-[210px] md:min-h-[141px] border border-solid border-dark-5 rounded-[12px]
         bg-white cursor-pointer relative p-[12px] md:p-[24px] text-dark-3 group hover:!border-dark hover:!text-dark
          ${
            selectedOptions.includes(option.label) && "!border-dark !text-dark"
          }  `}
        >
          <input
            type="checkbox"
            name="checkbox"
            value={option.label}
            onChange={() => handleCheckboxChange(option)}
            checked={selectedOptions.includes(option.label)}
          />
          <div className={styles.radioBtn}>
            <span className="absolute top-[12px] right-[12px] md:right-[24px] opacity-0">
              <RoundedChecked className="w-[18px] h-[18px] md:w-[22px] md:h-[24px] lg:w-[26px] lg:h-[26px]" />
            </span>

            <div className={styles.iconTitleWrapper}>
              <span className="group-hover:[&>svg]:fill-dark w-[26px] h-[26px] md:w-[34px] md:h-[34px] lg:w-[46px] mb-[12px] md:mb-[24px] inline-block">
                {option.icon}
              </span>
              <h3 className="text-[0.875rem] md:text-[1rem] lg:text-[1.125rem] font-medium ">
                {option.label}
              </h3>
            </div>
          </div>
        </label>
      ))}
    </>
  );
};

export default RadioButton;
