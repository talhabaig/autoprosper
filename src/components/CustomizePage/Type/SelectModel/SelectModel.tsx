import React, { useState } from "react";
import RadioButtonImage from "@/components/Common/CheckButton/RadioButtonImage";

interface PreferredCarBrandProps {
  onChange: (values: string[]) => void;
}

const TypeSelectModel: React.FC<PreferredCarBrandProps> = ({ onChange }) => {
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
    }
  ];

  return (
    <>
      <div className="max-w-[940px] mx-auto">
        <h2 className="heading1">Volkswagen sedan</h2>
        <p className="text-dark-2 text-center mb-[24px] md:mb-[30px] lg:text-[1rem] xl:mb-[40px]
         xl:text-[1.25rem] xl:leading-[1.5]">
          Choose sedan models from a variety of reputable automotive brands.
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

export default TypeSelectModel;
