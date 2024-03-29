import RadioButtonImage from "@/components/Common/CheckButton/RadioButtonImage";
import { Button } from "@/components/ui/button";
import { useState } from "react";
interface HelpOptionSubProps {
  startingPrice: string; 
  city: string;
  highway: string;
  isActive?: boolean;
}

const HelpOptionSub: React.FC<HelpOptionSubProps> = ({ startingPrice, city, highway, isActive }) => (

  <div className="flex flex-col justify-between gap-[12px]">
    <div>
      <div className="text-dark text-xs">{startingPrice}</div>
      <div className={`${ isActive ? 'text-dark' : 'text-dark-3'} text-[10px]`}>Starting MSRP</div>
    </div>
    <div className="flex gap-[12px]">
    <div className="w-full">
      <div className="text-dark text-xs">{city}</div>
      <div className="text-dark-3 text-[10px]">City</div>
    </div>
    <div className="w-full">
      <div className="text-dark text-xs">{highway}</div>
      <div className="text-dark-3 text-[10px]">Hwy</div>
    </div>
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
console.log(selectedOptions)
  const options = [
    {
      id: 1,
      label: "X1 Series",
      image: "/customize/x1.png",
      sub: <HelpOptionSub startingPrice="$39,395" city="24" highway="34" isActive={selectedOptions.includes('X1 Series')}/>,
    },
    {
      id: 2,
      label: "X2 Series",
      image: "/customize/x2.png",
      sub: <HelpOptionSub startingPrice="$39,395" city="24" highway="34"isActive={selectedOptions.includes('X2 Series')}/>,
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
          className="h-fit"
        />
      </div>
    </>
  );
};

export default Trim;
