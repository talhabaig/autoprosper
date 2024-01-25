import RadioButtonImage from "@/components/Common/CheckButton/RadioButtonImage";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const Incentives: React.FC = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleOptionChange = (values: string[]) => {
    setSelectedOptions(values);
  };

  const incentives = [
    {
      type: "Finance",
      title: "Sales Support ARP Rates",
      value: "5.29% ARP",
      expires: "11/30/2024",
    },
    {
      type: "Cash Offer",
      title: "BMW Loyalty Lease Credit",
      value: "$500",
      expires: "11/30/2024",
    },
    {
      type: "Cash Offer",
      title: "BMW Loyalty Lease Credit",
      value: "$500",
      expires: "11/30/2024",
    },
  ];

  return (
    <div className="flex flex-col justify-center lg:gap-[24px] max-w-[940px] divide-y">
      {incentives.map((incentive, index) => (
        <div
          key={index}
          className={`flex flex-col w-full gap-[16px] py-4 ${
            index === 0 ? "border-t" : ""
          } ${index === incentives.length - 1 ? "border-b" : ""}`}
        >
          <div className="bg-status-info rounded-full px-[8px] py-[4px] w-fit h-[21px] text-center text-white text-[10px] md:text-[12px] font-bold">
            <span>{incentive.type}</span>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-col gap-3 justify-center">
              <div className="font-medium text-sm md:text-lg text-dark">
                {incentive.title}
              </div>
              <div className="font-xs font-normal text-[10px] md:text-xs text-dark-3">
                {incentive.expires}
              </div>
            </div>
            <div className="flex gap-[10px]">
              <div className="text-dark font-normal text-sm md:text-lg">
                {incentive.value}
              </div>
              <ChevronDown />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Incentives;
