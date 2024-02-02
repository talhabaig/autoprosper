import React from "react";
import styles from "./RadioButton.module.css";
import { RoundedChecked } from "../../Icons/Icons";

const CHECKED_BORDER_COLOR = "border-green";
const CHECKED_BACKGROUND_COLOR = "bg-green";

interface Option {
  id: number;
  label: string;
  sub?: string | React.ReactElement;
  image?: string | React.ReactElement;
}

interface RadioButtonImagesProps {
  options?: Option[];
  selectedOptions: string[];
  onChange: (value: string[]) => void;
  className: string;
  allowMultiple?: boolean;
}

const renderCheckboxIcon = (image: Option["image"], checked: boolean) => {
  if (image && checked) {
    return (
      <span className="absolute top-[12px] right-[12px] md:right-[24px] opacity-0">
        <RoundedChecked className="w-[18px] h-[18px] md:w-[22px] md:h-[24px] lg:w-[26px] lg:h-[26px]" />
      </span>
    );
  } else if (!image) {
    return (
      <div
        className={`border-[1px] rounded-full w-6 h-6 md:w-8 md:h-8 mb-6 p-[7px] ${
          checked ? CHECKED_BORDER_COLOR : "border-dark-5"
        }`}
      >
        {checked && (
          <div
            className={`${CHECKED_BACKGROUND_COLOR} w-full rounded-full h-full`}
          ></div>
        )}
      </div>
    );
  }
};

const renderImage = (image: Option["image"], label: Option["label"]) => {
  if (typeof image == "string") {
    return <img src={image.toString()} className="" alt={label} />;
  }

  if (image && typeof image != "string") {
    return image;
  }

  // if (!image) {

  //   return <div className="border-[1px] rounded-full w-8 h-8"></div>
  // }
};

const renderSubText = (sub: Option["sub"], selected: boolean) => {
  if (typeof sub === "string") {
    return (
      <p
        className={`text-[10px] lg:text-[12px] font-normal m-0 ${
          selected ? "text-dark" : "text-dark-3"
        }`}
      >
        {sub}
      </p>
    );
  } else if (React.isValidElement(sub)) {
    const reactElement = sub as React.ReactElement;

    return React.cloneElement(reactElement, {
      className: `${reactElement.props.className || ""} ${
        selected ? "text-dark" : "text-dark-3"
      }`,
    });
  } else {
    return (
      <div
        className={`text-[10px] lg:text-[12px] font-normal m-0 ${
          selected ? "text-dark" : "text-dark-3"
        }`}
      >
        {sub}
      </div>
    );
  }
};

const RadioButtonImage: React.FC<RadioButtonImagesProps> = ({
  options = [],
  selectedOptions,
  onChange,
  className,
  allowMultiple = true,
}) => {
  const handleCheckboxChange = (option: Option) => {
    const isSelected = selectedOptions.includes(option.label);
    let updatedOptions: string[];

    if (allowMultiple) {
      updatedOptions = isSelected
        ? selectedOptions.filter((value) => value !== option.label)
        : [...selectedOptions, option.label];
    } else {
      updatedOptions = [option.label];
    }

    onChange(updatedOptions);
  };

  return (
    <>
      {options.map((option) => (
        <label
          key={option.label}
          className={`${className} ${
            styles.customRadio
          } max-w-[46%] w-full min-h-[80px] md:max-w-[216px] lg:min-h-[141px] border border-solid border-dark-5 rounded-[12px] bg-white cursor-pointer relative p-[12px] md:p-[24px] text-dark-3 group  ${
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
          <div className={styles.radioBtn}>
            {renderCheckboxIcon(
              option.image,
              selectedOptions.includes(option.label)
            )}

            <div className="flex flex-col gap-6">
              {renderImage(option.image, option.label)}
              <div className="flex flex-col gap-3">
                <h3
                  className={`text-[0.875rem] leading-[17.64px] md:text-[1rem] lg:text-[1.125rem] font-medium ${
                    selectedOptions.includes(option.label)
                      ? "text-dark"
                      : "text-dark-3"
                  }`}
                >
                  {option.label}
                </h3>

                {renderSubText(
                  option.sub,
                  selectedOptions.includes(option.label)
                )}
              </div>
            </div>
          </div>
        </label>
      ))}
    </>
  );
};

export default RadioButtonImage;
