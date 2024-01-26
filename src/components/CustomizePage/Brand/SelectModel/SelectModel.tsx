import React, { useState } from "react";
import RadioButtonImage from "@/components/Common/CheckButton/RadioButtonImage";

interface PreferredCarBrandProps {
  onChange: (values: string[]) => void;
}

const SelectModel: React.FC<PreferredCarBrandProps> = ({ onChange }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleOptionChange = (values: string[]) => {
    setSelectedOptions(values);
    onChange(values); // Pass the selected values to the parent component
  };

  const helpOptions = [
    {
      id: 1,
      label: "X1 Series",
      sub: 'Starting at $39,395',
      image: "/customize/x1.png",
    },
    {
      id: 2,
      label: "X2 Series",
      sub: 'Starting at $39,395',
      image: "/customize/x2.png",
    },
    {
      id: 3,
      label: "X3 Series",
      sub: 'Starting at $39,395',
      image: "/customize/x3.png",
    },
    {
      id: 4,
      label: "X4 Series",
      sub: 'Starting at $39,395',
      image: "/customize/x4.png",
    },
    {
      id: 5,
      label: "X5 Series",
      sub: 'Starting at $39,395',
      image: "/customize/x5.png",
    },
    {
      id: 6,
      label: "X6 Series",
      sub: 'Starting at $39,395',
      image: "/customize/x6.png",
    },
    {
      id: 7,
      label: "X7 Series",
      sub: 'Starting at $39,395',
      image: "/customize/x7.png",
    },
    {
      id: 8,
      label: "2 Series",
      sub: 'Starting at $39,395',
      image: "/customize/2series.png",
    },
    {
      id: 9,
      label: "3 Series",
      sub: 'Starting at $39,395',
      image: "/customize/3series.png",
    },
    {
      id: 10,
      label: "4 Series",
      sub: 'Starting at $39,395',
      image: "/customize/4series.png",
    },
    {
      id: 11,
      label: "5 Series",
      sub: 'Starting at $39,395',
      image: "/customize/5series.png",
    },
    {
      id: 12,
      label: "7 Series",
      sub: 'Starting at $39,395',
      image: "/customize/7series.png",
    },
    {
      id: 13,
      label: "8 Series",
      sub: 'Starting at $39,395',
      image: "/customize/8series.png",
    },
    {
      id: 14,
      label: "Z4 Series",
      sub: 'Starting at $39,395',
      image: "/customize/z4series.png",
    },
    {
      id: 15,
      label: "M Models Series",
      sub: 'Starting at $39,395',
      image: "/customize/mmodelseries.png",
    },
    {
      id: 16,
      label: "IX Series",
      sub: 'Starting at $39,395',
      image: "/customize/ixseries.png",
    },
    {
      id: 17,
      label: "i4 Series",
      sub: 'Starting at $39,395',
      image: "/customize/i4series.png",
    },
    {
      id: 18,
      label: "i5 Series",
      sub: 'Starting at $39,395',
      image: "/customize/i5series.png",
    },
    {
      id: 19,
      label: "I7 Series",
      sub: 'Starting at $39,395',
      image: "/customize/i7series.png",
    },
    {
      id: 20,
      label: "XM Series",
      sub: 'Starting at $39,395',
      image: "/customize/xmseries.png",
    },
  ];

  return (
    <>
      <div className="max-w-[940px] mx-auto">
        <h2 className="heading1">Select model </h2>
        <p className="text-dark-2 text-center mb-[24px] md:mb-[30px] lg:text-[1rem] xl:mb-[40px]
         xl:text-[1.25rem] xl:leading-[1.5]">
          Which specific BMW model are you considering at the moment?
        </p>
      </div>
      <div className="flex gap-[12px] justify-center lg:gap-[24px]  items-stretch flex-wrap pb-[30px] 2xl:pb-[50px]">
        <RadioButtonImage
          options={helpOptions}
          selectedOptions={selectedOptions}
          onChange={handleOptionChange}
          className=""
        />
      </div>
    </>
  );
};

export default SelectModel;
