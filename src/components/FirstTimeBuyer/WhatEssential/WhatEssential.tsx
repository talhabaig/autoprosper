import React, { useState } from "react";
import RadioButton from "../../Common/CheckButton/RadioButton";
import {
  GasMileage,
  CargoSpace,
  PerformanceHandeling,
  FeaturesAccessories,
  InteriorStyle,
  PassengerSpace,
} from "../../Icons/Icons";

interface WhatEssentialsProps {
  onChange: (values: string[]) => void; // Change the type to string[]
}

const WhatEssentials: React.FC<WhatEssentialsProps> = ({ onChange }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleOptionChange = (values: string[]) => {
    setSelectedOptions(values);
    onChange(values); // Pass the selected values to the parent component
  };

  const helpOptions = [
    {
      id: 1,
      label: "Good gas mileage",
      imageUrl: "/home/discover-ideal.png",
      icon: <GasMileage className="fill-dark-3" />,
    },
    {
      id: 2,
      label: "Interior cargo space",
      imageUrl: "/home/discover-ideal.png",
      icon: <CargoSpace className="fill-dark-3" />,
    },
    {
      id: 3,
      label: "Performance and handling",
      imageUrl: "/home/discover-ideal.png",
      icon: <PerformanceHandeling className="fill-dark-3" />,
    },
    {
      id: 4,
      label: "Features & accessories",
      imageUrl: "/home/discover-ideal.png",
      icon: <FeaturesAccessories className="fill-dark-3" />,
    },
    {
      id: 5,
      label: "Interior style",
      imageUrl: "/home/discover-ideal.png",
      icon: <InteriorStyle className="fill-dark-3" />,
    },
    {
      id: 6,
      label: "Passenger space",
      imageUrl: "/home/discover-ideal.png",
      icon: <PassengerSpace className="fill-dark-3" />,
    },
  ];

  return (
    <>
      <div className="max-w-[940px] mx-auto">
        <h2 className="heading1">What essentials?</h2>
        <p className="text-dark-2 text-center mb-[24px] md:mb-[30px] lg:text-[1rem] xl:mb-[40px] xl:text-[1.25rem] xl:leading-[1.5]">
          Select three priorities; we'll tailor recommendations to vehicles with
          your essential must-haves.
        </p>
      </div>
      <div className="flex gap-[12px] justify-center lg:gap-[24px]  items-stretch flex-wrap mb-[30px] 2xl:mb-[50px]">
        <RadioButton
          options={helpOptions}
          selectedOptions={selectedOptions}
          onChange={handleOptionChange}
          className=""
        />
      </div>
    </>
  );
};

export default WhatEssentials;
