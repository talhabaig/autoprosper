"use client"
import React, { useState } from "react";
import { BackArrow } from "../Icons/Icons";
import Vehicle from "./Vehicle";
import VehicleDetail from "./VehicleDetail";
import VehicleCondition from "./VehicleCondition";
import VehicleInformation from "./VehicleInformation";

const SellTradeVehicle: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

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
            <div className="firstTab">
              <div className="flex-column vehicleNav ">
                <button
                  onClick={() => handleStepChange(1)}
                  className={`text-left px-0 ${
                    activeStep === 1
                      ? "text-[#B7BCC3] hover:text-[#B7BCC3]"
                      : "text-gray-500"
                  }`}
                >
                  <span className="tabText">1</span> Vehicle
                </button>
                <button
                  onClick={() => handleStepChange(2)}
                  className={`text-left px-0 ${
                    activeStep === 2
                      ? "text-[#B7BCC3] hover:text-[#B7BCC3]"
                      : "text-gray-500"
                  }`}
                >
                  <span className="tabText">2</span> Details
                </button>
                <button
                  onClick={() => handleStepChange(3)}
                  className={`text-left px-0 ${
                    activeStep === 3
                      ? "text-[#B7BCC3] hover:text-[#B7BCC3]"
                      : "text-gray-500"
                  }`}
                >
                  <span className="tabText">3</span> Condition
                </button>
                <button
                  onClick={() => handleStepChange(4)}
                  className={`text-left px-0 ${
                    activeStep === 4
                      ? "text-[#B7BCC3] hover:text-[#B7BCC3]"
                      : "text-gray-500"
                  }`}
                >
                  <span className="tabText">4</span> Information
                </button>
              </div>
            </div>
          </div>
          <div className="flex md:max-w-[890px] w-full ">
            <div>
              {activeStep === 1 && <Vehicle />}
              {activeStep === 2 && <VehicleDetail />}
              {activeStep === 3 && <VehicleCondition />}
              {activeStep === 4 && <VehicleInformation />}
            </div>
          </div>
        </div>
      </div>
      <div className="footerBox">
        {activeStep > 1 && (
          <button
            className="mr-3"
            onClick={() => handleStepChange(activeStep - 1)}
          >
            Back
          </button>
        )}
        {activeStep < 4 ? (
          <button
            className=""
            onClick={() => handleStepChange(activeStep + 1)}
          >
            Continue
          </button>
        ) : (
          <button className="">Find vehicle</button>
        )}
      </div>
    </>
  );
};

export default SellTradeVehicle;
