"use client";
import React from "react";
import styles from "./RadioButton.module.css";

const CHECKED_BORDER_COLOR = "border-green";
const CHECKED_BACKGROUND_COLOR = "bg-green";

interface Option {
  id: number;
  label: string;
  sub?: string | React.ReactElement;
  image?: string | React.ReactElement;
}

interface RadioButtonImagesProps {
  options?: Option[]; // Make options optional
  selectedOptions: string[];
  onChange: (value: string[]) => void; // Change the type to string[]
  className: string;
  allowMultiple?: boolean;
}

const renderCheckboxIcon = (image: Option["image"], checked: boolean) => {
  return (
    <div
      className={`border-[1px] rounded-full w-[16px] h-[16px] flex-[0_0_auto] relative  ${
        checked ? CHECKED_BORDER_COLOR : ""
      }`}
    >
      {checked && (
        <div
          className={`${CHECKED_BACKGROUND_COLOR} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
           w-[8px] rounded-full h-[8px]`}
        ></div>
      )}
    </div>
  );
};

const renderImage = (image: Option["image"], label: Option["label"]) => {
  if (typeof image == "string") {
    return <img src={image.toString()} className="" alt={label} />;
  }

  if (image && typeof image != "string") {
    return image;
  }
};

const RadioButtonSingle: React.FC<RadioButtonImagesProps> = ({
  options = [],
  selectedOptions,
  onChange,
  className,
  allowMultiple = false,
}) => {
  const handleCheckboxChange = (option: Option) => {
    // If the clicked option is already selected and multiple selection is not allowed, do nothing
    if (!allowMultiple && selectedOptions.includes(option.label)) return;
  
    let updatedOptions: string[] = [];
  
    if (selectedOptions.includes(option.label)) {
      // If the clicked option is already selected, deselect it
      updatedOptions = selectedOptions.filter((item) => item !== option.label);
    } else {
      // Select the clicked option and deselect others
      updatedOptions = [option.label];
    }
  
    onChange(updatedOptions);
  };

  return (
    <>
      {options.map((option) => (
        <label
          key={option.label}
          className={`${className} ${styles.customRadio} flex w-[49%] mb-[8px] 
            cursor-pointer relative group hover:!text-dark  ${
              selectedOptions.includes(option.label)
                ? "!border-dark !text-dark"
                : ""
            }`}
        >
          <input
            type="checkbox"
            name="checkbox"
            value={option.label}
            onChange={() => handleCheckboxChange(option)}
            checked={selectedOptions.includes(option.label)}
          />
          <div className={`${styles.radioBtn} flex items-center gap-[10px] `}>
            {renderCheckboxIcon(
              option.image,
              selectedOptions.includes(option.label)
            )}

            <div className="flex flex-col gap-6">
              {renderImage(option.image, option.label)}

              <h3 className="text-[0.8rem] xl:text-[1rem]  font-medium">
                {option.label}
              </h3>
            </div>
          </div>
        </label>
      ))}
    </>
  );
};

export default RadioButtonSingle;
