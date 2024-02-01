"use client";
import React, { useState } from "react";
import { ArrowRight, BackArrow } from "../../Icons/Icons";
import Vehicle from "../Vehicle/Vehicle";
import VehicleDetail from "../VehicleDetail/VehicleDetail";
import VehicleCondition from "../VehicleCondition/VehicleCondition";
import VehicleInformation from "../VehicleInformation/VehicleInformation";
import CalculatingOffer from "../CalculatinOffer/CalculatingOffer";
import Button from "../../Common/Button/Button";
import YourVehicle from "../YourVehicle/YourVehicle";
import styles from "./SellandTrade.module.css";

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
              className={`p-[14px_18px] !bg-[#ECEEF1] min-w-[146px] !bg-bg-none ${styles.btnWrapper} `}
              onClick={() => handleStepChange(activeStep - 1)}
            >
              Cancel Edit
            </Button>
            <Button
              className="p-[14px_18px] !min-w-[146px]"
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
            className="lg:min-h-[56px] !p-[18px_32px]"
            onClick={() => handleStepChange(activeStep + 1)}
          >
            <>
              <span className="lg:inline-block  ">Claim exclusive offer</span>
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
      <section className={` ${styles.sellAndTradeSectionWrapper} `}>
        <div
          className={`container pb-[24px] ${styles.sellAndTradeContainerWrapper}`}
        >
          <div className="pt-[12px] md:pt-6 xl:pt-8 2xl:pt-12 max-w-full flex flex-col md:flex-row justify-between">
            <div className="w-full border-b border-b-[#E5E8ED] md:border-b-0 md:w-[30%] 3xl:w-[40%] ">
              <div className="flex flex-col lg:max-w-[340px]">
                <a
                  href=""
                  className="cursor-pointer mb-[12px] xl:mb-6"
                  onClick={() => handleStepChange(activeStep - 1)}
                >
                  <BackArrow className="w-[24px] h-[24px] inline-block" />
                </a>
                <h1 className="text-left text-lg text-[#001B44] lg:text-[28px] 2xl:text-[32px] font-[700] mb-2 xl:mb-3">
                  Sell/Trade
                </h1>
                <p className="text-left text-[#5D6878] text-sm  font-normal] mb-0 xl:mb-6">
                  Either transform it into your dream ride online or
                  effortlessly sell for the best offers at home.
                </p>
                <div className="TabBtn firstTab text-[14px] py-3 overflow-x-auto">
                  <div className="flex  md:flex-col  gap-[12px]  ">
                    <button
                      onClick={() => handleStepChange(0)}
                      className={`text-left px-0 text-[14px] flex items-center ${
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
                      className={`text-left px-0 text-[14px] flex items-center  ${
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
                      className={`text-left px-0 text-[14px] flex items-center ${
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
                      className={`text-left px-0 text-[14px] flex items-center ${
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
            </div>
            <div className="flex md:w-[65%]  3xl:w-[60%]">
              <div className=" w-full">{renderStepComponent()}</div>
            </div>
          </div>
        </div>
        <div
          className={`border-[#E5E8ED] border-t py-[24px]   ${
            activeStep === 5 && "hidden"
          }`}
        >
          <div
            className="container flex gap-3 justify-center lg:justify-end 
           "
          >
            {renderFooterButtons()}
          </div>
        </div>
      </section>
    </>
  );
};

export default SellTradeVehicle;