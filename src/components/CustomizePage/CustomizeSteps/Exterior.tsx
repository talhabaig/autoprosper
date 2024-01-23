import RadioButtonImage from "@/components/Common/CheckButton/RadioButtonImage";
import { useState } from "react";

const Exterior: React.FC = () => {
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
      label: "Alpine White",
      image: <img src="/customize/colors/alpine-white.png" width="46" />,
    },
    {
      id: 2,
      label: "Jet Black",
      image: <img src="/customize/colors/black.png" width="46" />,
    },
  ];

  const premiumOptions = [
    {
      id: 3,
      label: "Black Sapphire Metallic",
      image: <img src="/customize/colors/black.png" width="46" />,
    },
    {
      id: 4,
      label: "Melbourne Red Metallic",
      image: <img src="/customize/colors/alpine-white.png" width="46" />,
    },
    {
      id: 5,
      label: "Mineral White Metallic",
      image: <img src="/customize/colors/white-metalic.png" width="46" />,
    },
    {
      id: 6,
      label: "Misano Blue Metallic",
      image: <img src="/customize/colors/blue-metalic.png" width="46" />,
    },
    {
      id: 7,
      label: "Phytonic Blue Metallic",
      image: <img src="/customize/colors/phytonic-blue.png" width="46" />,
    },
    {
      id: 8,
      label: "Skyscraper grey Metallic",
      image: <img src="/customize/colors/grey-metalic.png" width="46" />,
    },
  ];

  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-6">
        <h4 className="text-dark text-lg font-bold">Standard Colors</h4>
        <div className="grid grid-cols-4 gap-[12px] justify-center lg:gap-[24px]">
          <RadioButtonImage
            options={options}
            selectedOptions={selectedOptions}
            onChange={handleOptionChange}
            className=""
            allowMultiple={false}
          />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <h4 className="text-dark text-lg font-bold">Premium Colors</h4>
        <div className="grid grid-cols-4 gap-[12px] justify-center lg:gap-[24px]  pb-[30px] 2xl:pb-[50px]">
          <RadioButtonImage
            options={premiumOptions}
            selectedOptions={selectedOptions}
            onChange={handleOptionChange}
            className=""
            allowMultiple={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Exterior;
