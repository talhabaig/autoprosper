// HobbiesSelector.js

import React from "react";
import styles from "./RadioButton.module.css";

interface Option {
  id: number;
  label: string;
  imageUrl: string;
}

interface RadioButtonsProps {
  options?: Option[]; // Make options optional
  selectedOption: string;
  onChange: (value: string) => void;
  className: string;
}

const RadioButton: React.FC<RadioButtonsProps> = ({
  options = [],
  selectedOption,
  onChange,
  className,
}) => {
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onChange(value); // Pass the selected value to the parent component
  };

  return (
    <div className={className}>
      {options.map((option) => (
        <label key={option.label} className={styles.customRadio}>
          <input
            type="radio"
            name="radio"
            value={option.label}
            onChange={handleRadioChange}
            checked={selectedOption === option.label}
          />
          <span className={styles.radioBtn}>
            <i className="las la-check"></i>
            <div className={styles.hobbiesIcon}>
              <img src={option.imageUrl} alt={option.label} />
              <h3>{option.label}</h3>
            </div>
          </span>
        </label>
      ))}
    </div>
  );
};

export default RadioButton;
