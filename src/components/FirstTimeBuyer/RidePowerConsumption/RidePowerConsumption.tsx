import React, { useEffect, useState } from "react";
import RadioButton from "../../Common/CheckButton/RadioButton";
import {
  GasAndDiesel,
  Hybrid,
  PlugInHybrid,
  Electric,
} from "../../Icons/Icons";
import { useFirstBuyer } from "@/components/Common/context/FirstTimeBuyerContext";

const RidePowerConsumption: React.FC = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const { state, setState } = useFirstBuyer();
  useEffect(() => {
    setSelectedOptions(state?.Ride_Power_Consumption ?? []);
  }, []);

  const handleOptionChange = (values: string[]) => {
    setState((prevState: any) => ({
      ...prevState,
      Ride_Power_Consumption: values,
    }));
    setSelectedOptions(values);
  };

  const helpOptions = [
    {
      id: 1,
      label: "Gas/Diesel",
      imageUrl: "/home/discover-ideal.png",
      icon: <GasAndDiesel className="fill-dark-3" />,
    },
    {
      id: 2,
      label: "Hybrid",
      imageUrl: "/home/discover-ideal.png",
      icon: <Hybrid className="fill-dark-3" />,
    },
    {
      id: 3,
      label: "Plug-in Hybrid",
      imageUrl: "/home/discover-ideal.png",
      icon: <PlugInHybrid className="fill-dark-3" />,
    },
    {
      id: 4,
      label: "Electric",
      imageUrl: "/home/discover-ideal.png",
      icon: <Electric className="fill-dark-3" />,
    },
  ];

  return (
    <>
      <div className="max-w-[940px] mx-auto">
        <h2 className="heading1">Choose ride's power</h2>
        <p className="text-dark-2 text-center mb-[24px] md:mb-[30px] lg:text-[1rem] xl:mb-[40px] xl:text-[1.25rem] xl:leading-[1.5]">
          Choose fuel types you're considering for your vehicle, selecting any
          or all options.
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

export default RidePowerConsumption;
