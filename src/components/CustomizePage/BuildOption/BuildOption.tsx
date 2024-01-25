import React, { useState } from "react";
import { TextBox } from "@/components/ui/input";
import RadioButtonImage from "@/components/Common/CheckButton/RadioButtonImage";

interface BuildOptionProps {
  onChange: (values: string[] | string) => void;
}
const buildOptions = [
  {
    id: 1,
    label: "Build and price",
    sub: 'See what others paid and get offers for 2 Series that best match your selections.',
  },
  {
    id: 2,
    label: "Select default build configuration",
    sub: 'Let TrueCar select your style, colors and options.',
  },
]
const BuildOption: React.FC<BuildOptionProps> = ({ onChange }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleOptionChange = (values: string[]) => {
    setSelectedOptions(values);
    onChange(values); // Pass the selected values to the parent component
  };

  return (
    <>
      <div className="max-w-[940px] mx-auto">
        <h2 className="heading1">Build option</h2>
        <p className="text-dark-2 text-center mb-[24px] md:mb-[30px] lg:text-[1rem] xl:mb-[40px]
         xl:text-[1.25rem] xl:leading-[1.5]">
          Build your ideal BMW 2 Series, then find matching cars at a dealership near you.
        </p>
      </div>
      <div className="flex gap-[12px] justify-center lg:gap-[24px]  items-stretch flex-wrap pb-[30px] 2xl:pb-[50px]">
      <RadioButtonImage
          options={buildOptions}
          selectedOptions={selectedOptions}
          onChange={handleOptionChange}
          allowMultiple={false}
          className=""
        />
      </div>
    </>
  );
};

export default BuildOption;
