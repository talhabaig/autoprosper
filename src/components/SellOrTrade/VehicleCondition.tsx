import { useState } from "react";

const VehicleCondition = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleDivClick = (value: any) => {
    setSelectedValue(value);
  };

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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-3">
        {[
          { id: 1, label: "Great", value: "radio1" },
          { id: 2, label: "Good", value: "radio2" },
          { id: 3, label: "Fair", value: "radio3" },
          { id: 4, label: "Poor", value: "radio4" },
        ].map((item) => (
          <div
            key={`default-${item.id}`}
            className={`border ${
              selectedValue === item.value
                ? "border-black"
                : "border-[#B7BCC3]"
            } rounded cursor-pointer p-4`}
            onClick={() => handleDivClick(item.value)}
          >
            <input
              type="radio"
              id={`default-${item.id}`}
              checked={selectedValue === item.value}
              onChange={() => handleDivClick(item.value)}
            />
            <h3 className="text-[#5D6878] text-[18px] py-3 font-[500]">
              {item.label}
            </h3>
            <p className="text-[#5D6878] text-[12px] font-[400]">
              {item.label === "Great"
                ? "It looks like it's never been driven."
                : `Description for ${item.label} condition.`}
            </p>
          </div>
        ))}
      </div>

      <h3 className="text-[#001B44] text-[18px] font-[700] mb-2 lg:mt-5">
        Has the car been in an accident?
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-3">
        {[
          { id: 1, label: "Yes", value: "radio1" },
          { id: 2, label: "No", value: "radio2" },
        ].map((item) => (
          <div
            key={`default-${item.id}`}
            className={`border ${
              selectedValue === item.value
                ? "border-black"
                : "border-[#B7BCC3]"
            } rounded cursor-pointer p-4`}
            onClick={() => handleDivClick(item.value)}
          >
            <input
              type="radio"
              id={`default-${item.id}`}
              checked={selectedValue === item.value}
              onChange={() => handleDivClick(item.value)}
            />
            <h3 className="text-[#5D6878] text-[18px] py-2 font-[500]">
              {item.label}
            </h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default VehicleCondition;
