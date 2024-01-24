import styles from "./SellTradeVehicle.module.css";
import { useState } from "react";

import Form from "react-bootstrap/Form";
const VehicleCondition = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const handleDivClick = (value: any) => {
    setSelectedValue(value);
  };
  return (
    <>
      <h1 className="text-left heading  text-[#001B44] text-[32px] lg:text-[56px]  font-[700] mb-[15px]">
        Condition
      </h1>
      <p className="text-left text-[#5D6878]  lg:text-sm lg:mb-10px">
        Tell us a little more about your vehicle so we can determine your offer.
        Your offer will be finalized after condition has been verified by
        inspection.
      </p>
      <h3 className="text-[#001B44] text-[18px]  font-[700] mb-2">
        What is the condition of the car?
      </h3>
      <a
        href=""
        className="mb-3 block text-[#FF3363] text-[14px]  font-[700] underline"
      >
        Car condition guidelines
      </a>

      <Form className="formSelect">
        {[
          { id: 1, label: "radio1", type: "radio", value: "radio1" },
          { id: 2, type: "radio", label: "radio2", value: "radio2" },
          { id: 3, label: "radio3", type: "radio", value: "radio3" },
          { id: 4, type: "radio", label: "radio4", value: "radio4" },
        ].map((item: any) => (
          <div
            key={`default-${item?.type}`}
            className={`border ${
              selectedValue === item?.value
                ? "border-black"
                : "border-[#B7BCC3]"
            } rounded cursor-pointer w-[190px] h-[170px] p-4 mr-4 `}
            onClick={() => handleDivClick(item?.value)}
          >
            <Form.Check
              type={item?.type}
              id={`default-${item?.id}`}
              checked={selectedValue === item?.value}
              onChange={() => handleDivClick(item?.value)}
            />
            <h3 className="text-[#5D6878] text-[18px] py-3 font-[500]">
              Great
            </h3>

            <p className="text-[#5D6878] text-[12px]  font-[400]">
              It looks like it's never been driven.
            </p>
          </div>
        ))}
      </Form>
      <h3 className="text-[#001B44] text-[18px]  font-[700] mb-2 lg:mt-5">
        What is the condition of the car?
      </h3>
      <Form className="flex formSelect mt-3">
        {[
          { id: 1, label: "radio1", type: "radio", value: "radio1" },
          { id: 2, type: "radio", label: "radio2", value: "radio2" },
        ].map((item: any) => (
          <div
            key={`default-${item?.type}`}
            className={`border ${
              selectedValue === item?.value
                ? "border-black"
                : "border-[#B7BCC3]"
            } rounded cursor-pointer w-[190px] h-[70px] px-4 py-2 mr-4`}
            onClick={() => handleDivClick(item?.value)}
          >
            <Form.Check
              type={item?.type}
              id={`default-${item?.id}`}
              checked={selectedValue === item?.value}
              onChange={() => handleDivClick(item?.value)}
            />
            <h3 className="text-[#5D6878] lg:text-[18px] py-2 font-[500]">
              Great
            </h3>
          </div>
        ))}
      </Form>
    </>
  );
};

export default VehicleCondition;
