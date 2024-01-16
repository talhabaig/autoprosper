import React, { useState } from "react";
import RadioButton from "./RadioButton";

interface PreferredCarBrand {
  onChange: (value: string) => void;
}

const WhatEssentials: React.FC<PreferredCarBrand> = ({ onChange }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
    onChange(value); // Pass the selected value to the parent component
  };

  const helpOptions = [
    { id: 1, label: "Honda", imageUrl: "/home/discover-ideal.png" },
    { id: 2, label: "Volkswagen", imageUrl: "/home/discover-ideal.png" },
    { id: 3, label: "Toyota", imageUrl: "/home/discover-ideal.png" },
    { id: 4, label: "BMW", imageUrl: "/home/discover-ideal.png" },
    { id: 5, label: "Hyundai", imageUrl: "/home/discover-ideal.png" },
    { id: 6, label: "Audi", imageUrl: "/home/discover-ideal.png" },
    { id: 7, label: "Mercedes", imageUrl: "/home/discover-ideal.png" },
    { id: 8, label: "Nissan", imageUrl: "/home/discover-ideal.png" },
    { id: 9, label: "Mazda", imageUrl: "/home/discover-ideal.png" },
  ];

  return (
    <>
      <h2 className="heading2">Preferred car brand?</h2>
      <div className="flex items-center justify-center flex-wrap">
        <RadioButton
          options={helpOptions}
          selectedOption={selectedOption}
          onChange={handleOptionChange}
          className=""
        />
      </div>
    </>
  );
};

export default WhatEssentials;
