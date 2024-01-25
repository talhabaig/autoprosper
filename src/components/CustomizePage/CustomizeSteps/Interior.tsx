import RadioButtonImage from "@/components/Common/CheckButton/RadioButtonImage";
import { useState } from "react";

const Interior: React.FC = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleOptionChange = (values: string[]) => {
    setSelectedOptions(values);
  };

  const options = [
    {
      id: 1,
      label: "No Color Preference",
      image: <img src="/customize/colors/no-color.png" width="46" />,
    },
    {
      id: 2,
      label: "Jet Black",
      image: <img src="/customize/colors/black.png" width="46" />,
      sub: "Included",
    },
    {
      id: 2,
      label: "Oyster/Black",
      image: <img src="/customize/colors/alpine-white.png" width="46" />,
      sub: "Included",
    },
  ];

  const premiumOptions = [
    {
      id: 4,
      label: "Melbourne Red Metallic",
      image: <img src="/customize/colors/red-magma.png" width="46" />,
    },
  ];

  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-6">
        <h4 className="text-dark text-lg font-bold">Standard Interiors</h4>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[12px] justify-center lg:gap-[24px] pb-[30px] 2xl:pb-[50px]">
          <RadioButtonImage
            options={options}
            selectedOptions={selectedOptions}
            onChange={handleOptionChange}
            className="!min-w-[100%]"
            allowMultiple={false}
          />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <h4 className="text-dark text-lg font-bold">Standard Interiors</h4>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[12px] justify-center lg:gap-[24px] pb-[30px] 2xl:pb-[50px]">
          <RadioButtonImage
            options={premiumOptions}
            selectedOptions={selectedOptions}
            onChange={handleOptionChange}
            className="!min-w-[100%]"
            allowMultiple={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Interior;
