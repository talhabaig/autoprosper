import React, { useEffect, useState } from "react";
import RadioButton from "../../Common/CheckButton/RadioButton";
import {
  Home,
  DailyCommute,
  OffroadDriving,
  LongerRoadTrips,
  DrivingKid,
  PerformanceHandeling,
} from "../../Icons/Icons";
import { useFirstBuyer } from "@/components/Common/context/FirstTimeBuyerContext";

const PurposeOfUse: React.FC = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const { state, setState } = useFirstBuyer();

  useEffect(() => {
    setSelectedOptions(state?.PurposeOfUse ?? []);
  }, []);

  const handleOptionChange = (values: string[]) => {
    setState((prevState: any) => ({
      ...prevState,
      PurposeOfUse: values,
    }));
    setSelectedOptions(values);
  };


  const helpOptions = [
    {
      id: 1,
      label: "Household errands",
      imageUrl: "/home/discover-ideal.png",
      icon: <Home className="fill-dark-3" />,
    },
    {
      id: 2,
      label: "Daily commute",
      imageUrl: "/home/discover-ideal.png",
      icon: <DailyCommute className="fill-dark-3" />,
    },
    {
      id: 3,
      label: "outdoor activities ",
      imageUrl: "/home/discover-ideal.png",
      icon: <PerformanceHandeling className="fill-dark-3" />,
    },
    {
      id: 4,
      label: "Offroad driving",
      imageUrl: "/home/discover-ideal.png",
      icon: <OffroadDriving className="fill-dark-3" />,
    },
    {
      id: 5,
      label: "Longer road trips ",
      imageUrl: "/home/discover-ideal.png",
      icon: <LongerRoadTrips className="fill-dark-3" />,
    },
    {
      id: 6,
      label: "Driving kid and their stuff",
      imageUrl: "/home/discover-ideal.png",
      icon: <DrivingKid className="fill-dark-3" />,
    },
  ];

  return (
    <>
      <div className="max-w-[840px] mx-auto">
        <h2 className="heading1 max-w-[760px] mx-auto">
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
