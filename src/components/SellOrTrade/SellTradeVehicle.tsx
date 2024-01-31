"use client";
import React, { useState } from "react";
import { ArrowRight, BackArrow } from "../Icons/Icons";
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

  const renderStepComponent = () => {
    switch (activeStep) {
      case 0:
        return <Vehicle />;
      case 1:
        return <YourVehicle />;
      case 2:
        return <VehicleDetail />;
      case 3:
        return <VehicleCondition />;
      case 4:
        return <VehicleInformation />;
      case 5:
        return <CalculatingOffer />;
      default:
        return null;
    }
  };

  const renderFooterButtons = () => {
    switch (activeStep) {
      case 0:
        return (
          <>
          
            <Button
              variant="primary"
              className="p-[14px_18px] !bg-[#ECEEF1] min-w-[156px] !bg-bg-none"
              onClick={() => handleStepChange(activeStep - 1)}
            >
              Cancel Edit
            </Button>
            <Button
            className="p-[14px_18px] !min-w-[156px]"
              onClick={() => handleStepChange(activeStep + 1)}
            >
              Find vehicle
            </Button>
          
          </>
          
        );
      case 1:
        return (
          <>
            <Button
              variant="primary"
              className="p-[14px_18px] !bg-[#ECEEF1] min-w-[156px] !bg-bg-none"
              onClick={() => handleStepChange(activeStep - 1)}
            >
              Edit Vehicle
            </Button>
            <Button
              variant="small"
              className="lg:min-h-[56px]"
              onClick={() => handleStepChange(activeStep + 1)}
            >
              <>
                <span className="lg:inline-block">Continue</span>
                <ArrowRight className="fill-primary-text w-[1.125rem] h-[1.125rem] lg:w-[1.25rem] lg:h-[1.25rem]" />
              </>
            </Button>
          </>
        );
      case 2:
      case 3:
        return (
          <Button
            variant="small"
            className="lg:min-h-[56px]"
            onClick={() => handleStepChange(activeStep + 1)}
          >
            <>
              <span className="lg:inline-block">Continue</span>
              <ArrowRight className="fill-primary-text w-[1.125rem] h-[1.125rem] lg:w-[1.25rem] lg:h-[1.25rem]" />
            </>
          </Button>
        );
      case 4:
        return (
          <Button
            variant="small"
            className="lg:min-h-[56px]"
            onClick={() => handleStepChange(activeStep + 1)}
          >
            <>
              <span className="lg:inline-block">Claim exclusive offer</span>
              <ArrowRight className="fill-primary-text w-[1.125rem] h-[1.125rem] lg:w-[1.25rem] lg:h-[1.25rem]" />
            </>
          </Button>
        );
      default:
        return null;
    }
  };

  return (
    <>
    <section>
      <div className="container">
        <div className="mt-[12px] 2xl:mt-12 max-w-full flex flex-col md:flex-row justify-between">
          <div className="w-full border-b border-b-[#E5E8ED] md:border-b-0 md:w-[30%] 3xl:w-[40%] flex flex-col">
            <a
              href=""
              className="cursor-pointer mb-[12px]"
              onClick={() => handleStepChange(activeStep - 1)}
            >
              <BackArrow className="w-[24px] h-[24px] inline-block" />
            </a>
            <h1 className="text-left text-lg text-[#001B44] lg:text-[28px] 2xl:text-[32px] font-[700] mb-2 xl:mb-3">
              Sell/Trade
            </h1>
            <p className="text-left text-[#5D6878] text-sm  font-normal mb-12px]">
              Either transform it into your dream ride online or <br />
              effortlessly sell for the best offers at home.
            </p>
            <div className="TabBtn firstTab font-[14px]">
              <div className="flex md:flex-col flex-column gap-[12px] vehicleNav ">
                <button
                  onClick={() => handleStepChange(0)}
                  className={`text-left px-0 text-[14px] ${
                    activeStep <= 1 ? "text-[#001B44]" : "text-[#B7BCC3]"
                  }`}
                >
                  <span
                    className={`tabText text-left px-0 text-[14px] ${
                      activeStep <= 1
                        ? "bg-[#001B44] text-white "
                        : "bg-[default-color] text-[default-color]"
                    }`}
                  >
                    1
                  </span>{" "}
                  Vehicle
                </button>
                <button
                  onClick={() => handleStepChange(2)}
                  className={`text-left px-0 text-[14px]  ${
                    activeStep === 2 ? "text-[#001B44]" : "text-[#B7BCC3]"
                  }`}
                >
                  <span
                    className={`tabText text-left px-0 text-[14px] ${
                      activeStep === 2
                        ? "bg-[#001B44] text-white"
                        : "bg-[default-color] text-[default-color]"
                    }`}
                  >
                    2
                  </span>{" "}
                  Details
                </button>
                <button
                  onClick={() => handleStepChange(3)}
                  className={`text-left px-0 text-[14px] ${
                    activeStep === 3 ? "text-[#001B44]" : "text-[#B7BCC3]"
                  }`}
                >
                  <span
                    className={`tabText text-left px-0  ${
                      activeStep === 3
                        ? "bg-[#001B44] text-white"
                        : "bg-[default-color] text-[default-color]"
                    }`}
                  >
                    3
                  </span>{" "}
                  Condition
                </button>
                <button
                  onClick={() => handleStepChange(4)}
                  className={`text-left px-0 text-[14px] ${
                    activeStep >= 4 ? "text-[#001B44]" : "text-[#B7BCC3]"
                  }`}
                >
                  <span
                    className={`tabText text-left px-0 ${
                      activeStep >= 4
                        ? "bg-[#001B44] text-white"
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
          <div className="flex md:w-[65%]  3xl:w-[60%]">
            <div className=" w-full">
              {renderStepComponent()}
            </div>
          </div>
        </div>
      </div>
      </section>
      <div className={`${activeStep === 5 ? "hidden" : "flex gap-3 justify-center border-t p-[12px_18px] border-[#E5E8ED] mt-6  "}`}>
        {renderFooterButtons()}
      </div>
    </>
  );
};

export default SellTradeVehicle;
