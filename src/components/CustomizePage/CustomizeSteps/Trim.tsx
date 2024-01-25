import RadioButtonImage from "@/components/Common/CheckButton/RadioButtonImage";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const HelpOptionSub = ({ startingPrice, city, highway }: { startingPrice: string, city: string, highway: string }) => (
  <div className="flex justify-between">
    <div>
      <div className="text-dark text-xs">{startingPrice}</div>
      <div className="text-dark-3 text-[10px]">Starting MSRP</div>
    </div>
    <div>
      <div className="text-dark text-xs">{city}</div>
      <div className="text-dark-3 text-[10px]">City</div>
    </div>
    <div>
      <div className="text-dark text-xs">{highway}</div>
      <div className="text-dark-3 text-[10px]">Hwy</div>
    </div>
  </div>
);

const Trim: React.FC = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [filter, setFilter] = useState("2024");
  const filters = ["2024", "2023"];

  const handleOptionChange = (values: string[]) => {
    setSelectedOptions(values);
  };

  const options = [
    {
      id: 1,
      label: "X1 Series",
      image: "/customize/x1.png",
      sub: <HelpOptionSub startingPrice="$39,395" city="24" highway="34" />,
    },
    {
      id: 2,
      label: "X2 Series",
      image: "/customize/x2.png",
      sub: <HelpOptionSub startingPrice="$39,395" city="24" highway="34" />,
    },
  ];

  return (
    <>
      <div className="flex justify-center md:justify-start">
        {filters.map((f) => (
          <Button
            onClick={() => setFilter(f)}
            variant={f == filter ? "normal" : "outline"}
            size="sm"
          >
            {f}
          </Button>
        ))}
      </div>
      <div className="flex gap-6">
        <RadioButtonImage
          options={options}
          selectedOptions={selectedOptions}
          onChange={handleOptionChange}
          className=""
        />
      </div>
    </>
  );
};

export default Trim;
