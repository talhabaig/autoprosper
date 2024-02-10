import React, { useState } from "react";
import { TextBox } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { EllipseGradient } from "@/components/ui/ellipseGradient";
import RadioButtonImage from "@/components/Common/CheckButton/RadioButtonImage";
import { CustomizeSteps } from "./types";
import CheckIcon from "../Icons/CheckIcon";

interface TrimProps {
  onChange: (values: string[] | string) => void;
  steps: CustomizeSteps;
  currentStep: number;
}

const Customize: React.FC<TrimProps> = ({ steps, currentStep }) => {
  const activeStep: number = currentStep;

  const currentStepConfig = steps[activeStep];

  return (
    <div className="flex flex-col md:flex-row lg:gap-36">
      <div className="flex flex-col-reverse md:flex-col w-full md:w-[336px] items-start">
        <div className="flex flex-row md:flex-col  w-full justify-start gap-3 border-b border-dark-6 md:border-0 my-6">
          <div className="relative flex items-center w-[156px] h-[74px] md:w-full md:h-[160px] justify-center">
            <EllipseGradient className="absolute top-0  left-0 w-full h-full z-0" />
            <img
              src="/home/blue-nissan.png"
              alt="car image"
              className="z-10 w-[104px] md:w-[224px] md:h-[93px]"
            />
          </div>
          <div className="flex flex-col justify-center md:justify-start">
            <h2 className="text-[14px] md:text-[32px] text-dark font-bold m-0 p-0">Build new</h2>
            <p className="text-[14px] font-bold md:font-normal text-dark m-0 p-0">BMW 2 Series</p>
          </div>
        </div>
        <div className="flex flex-row md:flex-col gap-3 overflow-x-scroll max-w-full">
          {steps.map((step, index) => (
            <div className="flex items-center gap-[6px]">
              <div
                className={`border-[1px] flex items-center justify-center ${
                  index === activeStep ? "bg-dark text-white" : index < activeStep ? "bg-dark-4" : "text-dark"
                } border-dark-4 text-center rounded-full text-xs w-[21px] h-[21px] md:w-8 md:h-8`}
              >
                {index < activeStep ? <CheckIcon width="10" fill="#fff" /> : step.id}
              </div>
              <div>{step.text}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-start">
        <div className="w-full md:max-w-[940px]">
        {currentStepConfig && (
          <h2 className="heading1 md:!text-left">{currentStepConfig.title}</h2>
          )}
          <p
            className="text-dark-2 text-center mb-[24px] md:mb-[30px] lg:text-[1rem] xl:mb-[40px]
            xl:text-[1.25rem] xl:leading-[1.5] md:text-left"
          >

            {currentStepConfig?.subTitle}
          </p>
        </div>
        <div className="flex flex-col gap-[12px] justify-center lg:gap-[24px] w-full items-stretch flex-wrap pb-[30px] 2xl:pb-[50px]">
          {currentStepConfig?.content}
        </div>
      </div>
    </div>
  );
};

export default Customize;
