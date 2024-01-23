import RadioButtonImage from "@/components/Common/CheckButton/RadioButtonImage";
import { useState } from "react";

const Package: React.FC = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleOptionChange = (values: string[]) => {
    setSelectedOptions(values);
  };

  const options = [
    {
      id: 1,
      label: "Not interested in popular option packages at this time",
    },
    {
      id: 2,
      label: "Basic ($800)",
      sub: (
        <ul className="list-disc ml-6">
          <li>18”X8.0” Multi Spoke Bi Color</li>
          <li>Wheels</li>
          <li>Wireless Charging</li>
        </ul>
      ),
    },
    {
      id: 2,
      label: "Well-Equpped",
      sub: (
        <ul className="list-disc ml-6">
          <li>18”X8.0” Multi Spoke Bi Color</li>
          <li>Wheels</li>
          <li>Wireless Charging</li>
        </ul>
      ),
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-[12px] justify-center lg:gap-[24px]">
      <RadioButtonImage
        options={options}
        selectedOptions={selectedOptions}
        onChange={handleOptionChange}
        className=""
        allowMultiple={false}
      />
    </div>
  );
};

export default Package;
