import React, { useState } from "react";
import RadioButton from "@/components/Common/CheckButton/RadioButton";
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
} from "@/components/Icons/Icons";
import { Button } from "@/components/ui/button";

type CustomizeType = 'brand' | 'type'
interface PreferredCarBrandProps {
  onChange: (values: string[]) => void;
  setType: (values: CustomizeType) => void;
}

const SelectBrand: React.FC<PreferredCarBrandProps> = ({ onChange, setType }) => {
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
    <div className="max-w-[940px] mx-auto md:my-[48px] my-6">
      <h2 className="text-dark text-center mb-[0.75rem] lg:mb-[1.125rem] text-[32px] leading-[41.6px] md:text-[56px] md:leading-[72.8px] font-normal">Select brand</h2>
      <p className="text-dark-2 text-center font-normal mb-[24px] md:mb-[30px] text-[14px] leading-[21px] lg:text-[20px] lg:leading-[30px]">
      Choose sedan models from a variety of reputable automotive brands.
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

export default SelectBrand;
