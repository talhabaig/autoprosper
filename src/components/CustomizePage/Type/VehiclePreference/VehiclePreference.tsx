import React, { useState } from "react";
import RadioButton from "../../../Common/CheckButton/RadioButton";
import {
  Suv,
  Truck,
  Sedan,
  Hatchback,
  Coupe,
  Wagon,
  Minivan,
  Convertible,
} from "../../../Icons/Icons";
import { Button } from "@/components/ui/button";

type CustomizeType = "brand" | "type";

interface VehiclePreferenceProps {
  onChange: (values: string[]) => void;
  setType: (values: CustomizeType) => void;
}

const VehiclePreference: React.FC<VehiclePreferenceProps> = ({
  onChange,
  setType,
}) => {
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
    <div className="max-w-[940px] mx-auto md:my-[48px] my-6">
      <h2 className="text-dark text-center mb-[0.75rem] lg:mb-[1.125rem] text-[32px] leading-[41.6px] md:text-[56px] md:leading-[72.8px] font-normal">Order & customize</h2>
      <p className="text-dark-2 text-center font-normal mb-[24px] md:mb-[30px] text-[14px] leading-[21px] lg:text-[20px] lg:leading-[30px]">
      Explore the latest cars by brand or body type
 for an exciting range of new options.
      </p>
        <div className="flex flex-row justify-between md:justify-center gap-[12px]">
          <Button onClick={() => setType('brand')} variant="outline" size="sm" className="w-full md:w-auto border-[3px]">Brand</Button>
          <Button onClick={() => setType('type')} variant="normal" size="sm" className="w-full md:w-auto border-[3px]">Type</Button>
        </div>
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
