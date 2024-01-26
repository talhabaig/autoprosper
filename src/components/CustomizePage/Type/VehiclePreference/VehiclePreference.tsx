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
      <div className="max-w-[940px] mx-auto mb-[48px]">
        <h2 className="heading1">Order & customize</h2>
        <p
          className="text-dark-2 text-center mb-[24px] md:mb-[30px] lg:text-[1rem] xl:mb-[40px]
         xl:text-[1.25rem] xl:leading-[1.5]"
        >
          Explore the latest cars by brand or body type for an exciting range of
          new options.
        </p>
        <div className="flex flex-row justify-center gap-[12px]">
          <Button onClick={() => setType("brand")} variant="outline" size="sm">
            Brand
          </Button>
          <Button onClick={() => setType("type")} variant="normal" size="sm">
            Type
          </Button>
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
