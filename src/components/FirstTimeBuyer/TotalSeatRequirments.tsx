import React, { useState } from "react";
import RadioButton from "./RadioButton";

interface TotalSeatRequirments {
  onChange: (value: string) => void;
}

const WhatEssentials: React.FC<TotalSeatRequirments> = ({ onChange }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
    onChange(value); // Pass the selected value to the parent component
  };

  const helpOptions = [
    { id: 1, label: "2 Seats", imageUrl: "/home/discover-ideal.png" },
    { id: 2, label: "3-5 Seats", imageUrl: "/home/discover-ideal.png" },
    { id: 3, label: "6-8 Seats", imageUrl: "/home/discover-ideal.png" },
    { id: 4, label: "8+ Seats", imageUrl: "/home/discover-ideal.png" },
  ];

  return (
    <>
      <h2 className="heading2">Total seat requirements?</h2>
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
