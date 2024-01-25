import RadioButtonImage from "@/components/Common/CheckButton/RadioButtonImage";
import { useState } from "react";


const Drivetrain: React.FC = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleOptionChange = (values: string[]) => {
    setSelectedOptions(values);
  };

  const options = [
    {
      id: 1,
      label: "Front wheel drive",
      image: <img src="/customize/fwd.png" width="116" className="mx-auto" />,
      sub: 'Opt for a front-wheel-drive setup for enhanced control and handling on roads.',
    },
    {
      id: 2,
      label: "All wheel drive",
      image: <img src="/customize/awd.png" width="116" className="mx-auto" />,
      sub: 'Choose all-wheel drive for superior traction and stability in various driving conditions.',
    },
  ];

  return (
    <div className="flex gap-6">
      <RadioButtonImage
        options={options}
        selectedOptions={selectedOptions}
        onChange={handleOptionChange}
        className=""
      />
    </div>
  );
};

export default Drivetrain