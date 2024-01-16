import React, { useState } from "react";
import RadioButton from "./RadioButton";

interface RidePowerConsuptionProps {
  onChange: (value: string) => void;
}

const RidePowerConsuption: React.FC<RidePowerConsuptionProps> = ({
  onChange,
}) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
    onChange(value); // Pass the selected value to the parent component
  };

  const helpOptions = [
    { id: 1, label: "Good gas mileage", imageUrl: "/home/discover-ideal.png" },
    {
      id: 2,
      label: "Interior cargo space",
      imageUrl: "/home/discover-ideal.png",
    },
    {
      id: 3,
      label: "Performance and handling",
      imageUrl: "/home/discover-ideal.png",
    },
    {
      id: 4,
      label: "Features & accessories",
      imageUrl: "/home/discover-ideal.png",
    },
    { id: 5, label: "Interior style", imageUrl: "/home/discover-ideal.png" },
    { id: 6, label: "Passenger space", imageUrl: "/home/discover-ideal.png" },
  ];

  return (
    <>
      <h2 className="heading2">Choose ride's power</h2>
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

export default RidePowerConsuption;
