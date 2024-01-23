import React, { useState } from "react";
import RadioButton from "../../Common/CheckButton/RadioButton";
import {
  Suv,
  Truck,
  Sedan,
  Hatchback,
  Coupe,
  Wagon,
  Minivan,
  Convertible,
} from "../../Icons/Icons";

interface VehiclePreferenceProps {
  onChange: (values: string[]) => void;
}

const VehiclePreference: React.FC<VehiclePreferenceProps> = ({ onChange }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleOptionChange = (values: string[]) => {
    setSelectedOptions(values);
    onChange(values); // Pass the selected values to the parent component
  };

  const helpOptions = [
    {
      id: 1,
      label: "SUV",
      imageUrl: "/home/discover-ideal.png",
      icon: <Suv className="fill-dark-3" />,
    },
    {
      id: 2,
      label: "Truck",
      imageUrl: "/home/discover-ideal.png",
      icon: <Truck className="fill-dark-3" />,
    },
    {
      id: 3,
      label: "Sedan",
      imageUrl: "/home/discover-ideal.png",
      icon: <Sedan className="fill-dark-3" />,
    },
    {
      id: 4,
      label: "Hatchback",
      imageUrl: "/home/discover-ideal.png",
      icon: <Hatchback className="fill-dark-3" />,
    },
    {
      id: 5,
      label: "Coupe",
      imageUrl: "/home/discover-ideal.png",
      icon: <Coupe className="fill-dark-3" />,
    },
    {
      id: 6,
      label: "Wagon",
      imageUrl: "/home/discover-ideal.png",
      icon: <Wagon className="fill-dark-3" />,
    },
    {
      id: 7,
      label: "Minivan",
      imageUrl: "/home/discover-ideal.png",
      icon: <Minivan className="fill-dark-3" />,
    },
    {
      id: 8,
      label: "Convertible",
      imageUrl: "/home/discover-ideal.png",
      icon: <Convertible className="fill-dark-3" />,
    },
  ];

  return (
    <>
      <div className="max-w-[940px] mx-auto">
        <h2 className="heading1">Your vehicle preference?</h2>
        <p className="text-dark-2 text-center mb-[24px] md:mb-[30px] lg:text-[1rem] xl:mb-[40px] xl:text-[1.25rem] xl:leading-[1.5]">
          Select rides matching your vibe, from sporty and outdoorsy to
          family-friendly options.
        </p>
      </div>
      <div className="flex  gap-[12px] justify-center lg:gap-[24px]  items-stretch flex-wrap mb-[30px] 2xl:mb-[50px]">
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

export default VehiclePreference;
