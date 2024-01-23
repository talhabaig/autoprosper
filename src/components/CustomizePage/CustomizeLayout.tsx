import React, { useState } from "react";
import { TextBox } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { EllipseGradient } from "@/components/ui/ellipseGradient";
import RadioButtonImage from "@/components/Common/CheckButton/RadioButtonImage";
import { CustomizeSteps } from "./types";

interface TrimProps {
  onChange: (values: string[] | string) => void;
  steps: CustomizeSteps
  currentStep: number;
}

const Customize: React.FC<TrimProps> = ({ steps, currentStep }) => {
  const activeStep: number = currentStep;

  const currentStepConfig = steps[activeStep];
  console.log(currentStepConfig)

  return (
    <div className="flex md:gap-36">
      <div className="flex flex-col w-[336px] items-start">
        <div className="relative flex items-center w-full h-[160px] justify-center">
          <EllipseGradient className="absolute top-0 left-0 w-full h-full z-0" />
          <img
            src="/customize/2series.png"
            alt="car image"
            className="z-10 w-[224px] h-[93px]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-[32px] text-dark font-bold">Customize</h2>
          <p className="text-[14px] text-dark-2">Build new BMW 2 Series</p>
        </div>
        <div className="flex flex-col gap-3">
          {steps.map((step, index) => (
            <div className="flex items-center gap-[6px]">
              <div
                className={`border-[1px] ${
                  index === activeStep ? "bg-dark text-white" : "text-dark"
                } border-dark py-[6px] text-center rounded-full w-8 h-8`}
              >
                {step.id}
              </div>
              <div>{step.text}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-start">
        <div className="max-w-[940px]">
          <h2 className="heading1 !text-left">{currentStepConfig.title}</h2>
          <p
            className="text-dark-2 text-center mb-[24px] md:mb-[30px] lg:text-[1rem] xl:mb-[40px]
         xl:text-[1.25rem] xl:leading-[1.5]"
          >
            {currentStepConfig.subTitle}
          </p>
        </div>
        <div className="flex flex-col gap-[12px] justify-center lg:gap-[24px]  items-stretch flex-wrap pb-[30px] 2xl:pb-[50px]">
          { currentStepConfig.content }
        </div>
      </div>
    </div>
  );
};

export default Customize;
