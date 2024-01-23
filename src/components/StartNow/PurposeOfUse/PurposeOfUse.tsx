import React, { useState } from "react";
import RadioButton from "../../Common/CheckButton/RadioButton";
import {
  GasAndDiesel,
  Hybrid,
  PlugInHybrid,
  Electric,
} from "../../Icons/Icons";

interface PurposeOfUse {
  onChange: (values: string[]) => void;
}

const PurposeOfUse: React.FC<PurposeOfUse> = ({ onChange }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleOptionChange = (values: string[]) => {
    setSelectedOptions(values);
    onChange(values); // Pass the selected values to the parent component
  };

  const helpOptions = [
    {
      id: 1,
      label: "Household errands",
      imageUrl: "/home/discover-ideal.png",
      icon: <GasAndDiesel className="fill-dark-3" />,
    },
    {
      id: 2,
      label: "Daily commute",
      imageUrl: "/home/discover-ideal.png",
      icon: <Hybrid className="fill-dark-3" />,
    },
    {
      id: 3,
      label: "outdoor activities ",
      imageUrl: "/home/discover-ideal.png",
      icon: <PlugInHybrid className="fill-dark-3" />,
    },
    {
      id: 4,
      label: "Offroad driving",
      imageUrl: "/home/discover-ideal.png",
      icon: <Electric className="fill-dark-3" />,
    },
    {
      id: 5,
      label: "Longer road trips ",
      imageUrl: "/home/discover-ideal.png",
      icon: <PlugInHybrid className="fill-dark-3" />,
    },
    {
      id: 6,
      label: "Driving kid and their stuff",
      imageUrl: "/home/discover-ideal.png",
      icon: <Electric className="fill-dark-3" />,
    },
  ];

  return (
    <>
      <div className="max-w-[940px] mx-auto">
        <h2 className="heading1">
          For what purpose do you intend to use this car?
        </h2>
        <p className="text-dark-2 text-center mb-[24px] md:mb-[30px] lg:text-[1rem] xl:mb-[40px] xl:text-[1.25rem] xl:leading-[1.5]">
          Select up to 3 options and we’ll determine the best trusty sidekicks
          for your adventures
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

export default PurposeOfUse;
