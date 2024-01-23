import React, { useState } from "react";
import RadioButton from "../../Common/CheckButton/RadioButton";
import {
  Honda,
  VolkswagenBrand,
  ToyotaBrand,
  BMWBrand,
  HyundaiBrand,
  RenaultBrand,
  AudiBrand,
  MercedesBrand,
  NissanBrand,
  MazdaBrand,
} from "../../Icons/Icons";

interface PreferredCarBrandProps {
  onChange: (values: string[]) => void;
}

const WhatEssentials: React.FC<PreferredCarBrandProps> = ({ onChange }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleOptionChange = (values: string[]) => {
    setSelectedOptions(values);
    onChange(values); // Pass the selected values to the parent component
  };

  const helpOptions = [
    {
      id: 1,
      label: "Honda",
      imageUrl: "/home/discover-ideal.png",
      icon: <Honda className="fill-dark-3" />,
    },
    {
      id: 2,
      label: "Volkswagen",
      imageUrl: "/home/discover-ideal.png",
      icon: <VolkswagenBrand className="fill-dark-3" />,
    },
    {
      id: 3,
      label: "Toyota",
      imageUrl: "/home/discover-ideal.png",
      icon: <ToyotaBrand className="fill-dark-3" />,
    },
    {
      id: 4,
      label: "BMW",
      imageUrl: "/home/discover-ideal.png",
      icon: <BMWBrand className="fill-dark-3" />,
    },
    {
      id: 5,
      label: "Hyundai",
      imageUrl: "/home/discover-ideal.png",
      icon: <HyundaiBrand className="fill-dark-3" />,
    },
    {
      id: 6,
      label: "Renault",
      imageUrl: "/home/discover-ideal.png",
      icon: <RenaultBrand className="fill-dark-3" />,
    },
    {
      id: 7,
      label: "Audi",
      imageUrl: "/home/discover-ideal.png",
      icon: <AudiBrand className="fill-dark-3" />,
    },
    {
      id: 8,
      label: "Mercedes",
      imageUrl: "/home/discover-ideal.png",
      icon: <MercedesBrand className="fill-dark-3" />,
    },
    {
      id: 9,
      label: "Nissan",
      imageUrl: "/home/discover-ideal.png",
      icon: <NissanBrand className="fill-dark-3" />,
    },
    {
      id: 10,
      label: "Mazda",
      imageUrl: "/home/discover-ideal.png",
      icon: <MazdaBrand className="fill-dark-3" />,
    },
  ];

  return (
    <>
      <div className="max-w-[940px] mx-auto">
        <h2 className="heading1">Preferred car brand?</h2>
        <p className="text-dark-2 text-center mb-[24px] md:mb-[30px] lg:text-[1rem] xl:mb-[40px]
         xl:text-[1.25rem] xl:leading-[1.5]">
          Pick your top three preferred brands, and we'll unveil vehicles that
          match, streamlining your quest for the perfect ride. Simplify your
          search with tailored recommendations.
        </p>
      </div>
      <div className="flex gap-[12px] justify-center lg:gap-[24px]  items-stretch flex-wrap pb-[30px] 2xl:pb-[50px]">
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
