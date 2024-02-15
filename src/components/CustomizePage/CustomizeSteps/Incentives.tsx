import RadioButtonImage from "@/components/Common/CheckButton/RadioButtonImage";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface TypeBadgeProps {
  type: string;
}

const TypeBadge: React.FC<TypeBadgeProps> = ({ type }) => {
  const badgeClass =
    type === "Finance" ? "bg-status-info" : "bg-status-success";

  return (
    <div
      className={`rounded-full px-2 py-[4px] w-fit md:py-[5px] h-[21px] md:h-[25px] text-center text-white text-[10px] md:text-xs font-bold ${badgeClass}`}
    >
      <span className="my-auto">{type}</span>
    </div>
  );
};

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
    <div className="flex flex-col justify-center lg:gap-[24px] w-full divide-y">
      {incentives.map((incentive, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row md:justify-between w-full gap-[16px] md:gap-[14px] xl:gap-0 py-4 ${
            index === 0 ? "border-t" : ""
          } ${index === incentives.length - 1 ? "border-b" : ""}`}
        >
          <div className="w-[206px] xl:mr-[134px]">
            <TypeBadge type={incentive.type} />
          </div>
          <div className="flex flex-row justify-between  md:w-full">
            <div className="flex flex-col gap-[10px] md:gap-3 justify-center w-full max-w-[50%] 2xl:w-[456px] md:max-w-none md:w-auto">
              <div className="font-medium text-sm md:text-lg text-dark">
                {incentive.title}
              </div>
              <div className="font-xs font-normal text-[10px] md:text-xs text-dark-3">
                {incentive.expires}
              </div>
            </div>
            <div className="flex w-full gap-[10px] 2xl:gap-[96px] 2xl:ml-auto justify-end">
              <div className="text-dark text-nowrap md:text-left font-normal text-sm md:text-lg">
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
