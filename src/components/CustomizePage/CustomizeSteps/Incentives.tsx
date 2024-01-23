import RadioButtonImage from "@/components/Common/CheckButton/RadioButtonImage";
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
    <div className="flex flex-col gap-[12px] justify-center lg:gap-[24px] w-full">
      {incentives.map((incentive) => (
        <div className="flex flex-row justify-between w-full">
          <div className="bg-status-info rounded-full px-[10px] py-[5px] text-white text-xs font-bold">{incentive.type}</div>
          <div className="flex flex-col gap-3">
            <div className="font-medium text-lg text-dark">{incentive.title}</div>
            <div className="font-xs font-normal text-dark-3">{incentive.expires}</div>
          </div>
          <div className="text-dark font-normal text-lg">{incentive.value}</div>
        </div>
      ))}
    </div>
  );
};

export default Incentives;
