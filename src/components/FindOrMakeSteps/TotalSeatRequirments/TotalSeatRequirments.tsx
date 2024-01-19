import React, { useState } from "react";
import RadioButton from "../../Common/CheckButton/RadioButton";
import { TwoSeats,ThreeToFiveSeats,SixToEightSeats,EightSeats } from "../../Icons/Icons";

interface TotalSeatRequirmentsProps {
  onChange: (values: string[]) => void;
}

const TotalSeatRequirments: React.FC<TotalSeatRequirmentsProps> = ({
  onChange,
}) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleOptionChange = (values: string[]) => {
    setSelectedOptions(values);
    onChange(values); // Pass the selected values to the parent component
  };

  const helpOptions = [
    {
      id: 1,
      label: "2 Seats",
      imageUrl: "/home/discover-ideal.png",
      icon: <TwoSeats className="fill-dark-3" />,
    },
    {
      id: 2,
      label: "3-5 Seats",
      imageUrl: "/home/discover-ideal.png",
      icon: <ThreeToFiveSeats className="fill-dark-3" />,
    },
    {
      id: 3,
      label: "6-8 Seats",
      imageUrl: "/home/discover-ideal.png",
      icon: <SixToEightSeats className="fill-dark-3" />,
    },
    {
      id: 4,
      label: "8+ Seats",
      imageUrl: "/home/discover-ideal.png",
      icon: <EightSeats className="fill-dark-3" />,
    },
  ];

  return (
    <>
      <div className="max-w-[940px] mx-auto">
        <h2 className="heading1">Total seat requirements?</h2>
        <p className="text-dark-2 text-center mb-[24px] md:mb-[30px] lg:text-[1rem] xl:mb-[40px] xl:text-[1.25rem] xl:leading-[1.5]">
          Whether you desire a cozy duo or room for a sports team, we have you
          covered.
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

export default TotalSeatRequirments;
