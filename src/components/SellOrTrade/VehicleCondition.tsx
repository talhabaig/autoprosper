import { useState } from "react";
import RadioOption from "../Common/RadioButton/RadioBtn";

const VehicleCondition = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleDivClick = (value: any) => {
    setSelectedValue(value);
  };

  const radioOptions = [
    {
      id: 1,
      label: "Great",
      value: "radio1",
      description: "It looks like it's never been driven",
    },
    {
      id: 2,
      label: "Good",
      value: "radio2",
      description:
        "You've had the car for a while but it has minimal signs of wear or visible defects.",
    },
    {
      id: 3,
      label: "Fair",
      value: "radio3",
      description: "The car has clearly been driven for some time.",
    },
    {
      id: 4,
      label: "Poor",
      value: "radio4",
      description: "The car has seen better days. Repair work is needed.",
    },
  ];

  const activeWarning = [
    {
      id: 1,
      label: "Yes",
      value: "Yes",
    },
    {
      id: 2,
      label: "No",
    },
  ];

  const activeLease = [
    {
      id: 1,
      label: "Lone",
      value: "Lone",
    },
    {
      id: 2,
      label: "Lease",
      value: "Lease",
    },
    {
      id: 3,
      label: "None",
      value: "None",
    },
  ];

  const activeAccidentVal = [
    {
      id: 1,
      label: "Yes",
      value: "accedentYes",
    },
    {
      id: 2,
      label: "No",
      value: "accedentNo",
    },
  ];

  const activesmoked = [
    {
      id: 1,
      label: "Yes",
      value: "activesmokedYes",
    },
    {
      id: 2,
      label: "No",
      value: "activesmokedNo",
    },
  ];

  const activeAvailable = [
    {
      id: 1,
      label: "Yes",
      value: "activeavailableYes",
    },
    {
      id: 2,
      label: "No",
      value: "activeavailableNo",
    },
  ];

  return (
    <>
      <h1 className="text-left heading text-[#001B44] text-[32px] lg:text-[56px] font-[400] mb-[15px]">
        Condition
      </h1>
      <p className="text-left text-[#5D6878] lg:mb-10px font-[400] text-[20px]">
        Tell us a little more about your vehicle so we can determine your offer.
        Your offer will be finalized after the condition has been verified by
        inspection.
      </p>
      <h3 className="text-[#001B44] text-[18px] font-[700] mb-2">
        What is the condition of the car?
      </h3>
      <a
        href=""
        className="mb-3 block text-left underline text-[#FF3363] text-[14px] font-[700]"
      >
        Car condition guidelines
      </a>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-3">
        {radioOptions.map((item: any) => (
          <RadioOption
            key={item.id}
            id={item.id}
            label={item.label}
            value={item.value}
            selected={selectedValue === item.value}
            description={item.description}
            onSelect={handleDivClick}
          />
        ))}
      </div>

      <h3 className="text-[#001B44] text-[18px] font-[700] mb-2 mt-3 lg:mt-5">
        Are there active warning lights?
      </h3>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-3">
        {activeWarning.map((item: any) => (
          <RadioOption
            key={item.id}
            id={item.id}
            label={item.label}
            value={item.value}
            selected={selectedValue === item.value}
            description={item.description}
            onSelect={handleDivClick}
          />
        ))}
      </div>

      <h3 className="text-[#001B44] text-[18px] font-[700] mb-2 mt-3 lg:mt-5">
        Has the car been in an accident?{" "}
      </h3>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-3">
        {activeAccidentVal.map((item: any) => (
          <RadioOption
            key={item.id}
            id={item.id}
            label={item.label}
            value={item.value}
            selected={selectedValue === item.value}
            description={item.description}
            onSelect={handleDivClick}
          />
        ))}
      </div>

      <h3 className="text-[#001B44] text-[18px] font-[700] mb-2 mt-3 lg:mt-5">
        Has the car been smoked in?
      </h3>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-3">
        {activesmoked.map((item: any) => (
          <RadioOption
            key={item.id}
            id={item.id}
            label={item.label}
            value={item.value}
            selected={selectedValue === item.value}
            description={item.description}
            onSelect={handleDivClick}
          />
        ))}
      </div>

      <h3 className="text-[#001B44] text-[18px] font-[700] mb-2 mt-3 lg:mt-5">
        Any active loan or lease on the car?
      </h3>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-3">
        {activeLease.map((item: any) => (
          <RadioOption
            key={item.id}
            id={item.id}
            label={item.label}
            value={item.value}
            selected={selectedValue === item.value}
            description={item.description}
            onSelect={handleDivClick}
          />
        ))}
      </div>

      <h3 className="text-[#001B44] text-[18px] font-[700] mb-2 mt-3 lg:mt-5">
        How many keys are available?
      </h3>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-3">
        {activeAvailable.map((item: any) => (
          <RadioOption
            key={item.id}
            id={item.id}
            label={item.label}
            value={item.value}
            selected={selectedValue === item.value}
            description={item.description}
            onSelect={handleDivClick}
          />
        ))}
      </div>
    </>
  );
};

export default VehicleCondition;
