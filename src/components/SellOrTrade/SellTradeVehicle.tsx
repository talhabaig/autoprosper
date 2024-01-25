"use client";
import React, { useState } from "react";
import { BackArrow } from "../Icons/Icons";
import Vehicle from "./Vehicle";
import VehicleDetail from "./VehicleDetail";
import VehicleCondition from "./VehicleCondition";
import VehicleInformation from "./VehicleInformation";
import CalculatingOffer from "./CalculatingOffer";
import Button from "../Common/Button/Button";
import YourVehicle from "./YourVehicle";

const SellTradeVehicle: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <>
      <div className="homePage">
        <div className="mt-[60px] px-[14px] max-w-full md:py-[0px] flex flex-col md:flex-row md:gap-[30px] justify-between md:justify-center md:px-10 lg:px-[159px] mx-auto ">
          <div className="w-full md:max-w-[590px] flex flex-col">
            <a
              href=""
              className="text-left cursor-pointer font-weight: 700 lg:text-[16px] mb-[20px] text-[#5D6878]"
              onClick={() => handleStepChange(activeStep - 1)}
            >
              <BackArrow className="w-[24px] h-[24px] inline-block" />
              Back
            </a>
            <h1 className="text-left text-[#001B44] lg:text-[32px] font-[700] mb-[15px]">
              Sell/Trade
            </h1>
            <p className="text-left text-[#5D6878] text-[14px] font-[400 lg:mb-10px]">
              Either transform it into your dream ride online or <br />
              effortlessly sell for the best offers at home.
            </p>
            <div className="TabBtn firstTab">
              <div className="flex md:flex-col flex-column vehicleNav ">
                <button
                  onClick={() => handleStepChange(0)}
                  className={`text-left px-0 ${
                    activeStep === 0 ? "text-[#000]" : "text-gray-500"
                  }`}
                >
                  <span
                    className={`tabText text-left px-0 ${
                      activeStep === 0
                        ? "bg-black text-white"
                        : "bg-[default-color] text-[default-color]"
                    }`}
                  >
                    1
                  </span>{" "}
                  Vehicle
                </button>
                <button
                  onClick={() => handleStepChange(2)}
                  className={`text-left px-0 ${
                    activeStep === 2 ? "text-[#000]" : "text-gray-500"
                  }`}
                >
                  <span
                    className={`tabText text-left px-0 ${
                      activeStep === 2
                        ? "bg-black text-white"
                        : "bg-[default-color] text-[default-color]"
                    }`}
                  >
                    2
                  </span>{" "}
                  Details
                </button>
                <button
                  onClick={() => handleStepChange(3)}
                  className={`text-left px-0 ${
                    activeStep === 3 ? "text-[#000]" : "text-gray-500"
                  }`}
                >
                  <span
                    className={`tabText text-left px-0 ${
                      activeStep === 3
                        ? "bg-black text-white"
                        : "bg-[default-color] text-[default-color]"
                    }`}
                  >
                    3
                  </span>{" "}
                  Condition
                </button>
                <button
                  onClick={() => handleStepChange(4)}
                  className={`text-left px-0 ${
                    activeStep === 4 ? "text-[#000]" : "text-gray-500"
                  }`}
                >
                  <span
                    className={`tabText text-left px-0 ${
                      activeStep === 4
                        ? "bg-black text-white"
                        : "bg-[default-color] text-[default-color]"
                    }`}
                  >
                    4
                  </span>{" "}
                  Information
                </button>
              </div>
            </div>
          </div>
          <div className="flex md:max-w-[890px] w-full ">
            <div className="m-auto md:m-0">
              {activeStep === 0 && <Vehicle />}
              {activeStep === 1 && <YourVehicle />}
              {activeStep === 2 && <VehicleDetail />}
              {activeStep === 3 && <VehicleCondition />}
              {activeStep === 4 && <VehicleInformation />}
              {activeStep === 5 && <CalculatingOffer />}
            </div>
          </div>
        </div>
      </div>
      <div className={`${activeStep === 5 ? " hidden" : "flex footerBox"} `}>
        {activeStep > 0 && (
          <Button
            variant="gray"
            className="mr-3"
            onClick={() => handleStepChange(activeStep - 1)}
          >
            Back
          </Button>
        )}
        {activeStep < 5 ? (
          <Button className="" onClick={() => handleStepChange(activeStep + 1)}>
            Continue
          </Button>
        ) : (
          <Button className="">Find vehicle</Button>
        )}
      </div>
    </>
  );
};

export default SellTradeVehicle;
