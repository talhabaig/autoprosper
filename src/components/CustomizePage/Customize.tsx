import React, { useEffect, useState } from "react";
import { BackArrow, ArrowRight } from "../Icons/Icons";
import NavigationBar from "../ui/Navigations/navigationBar";
import PrefferedCarBrand from "./Brand/PrefferedCarBrand/PrefferedCarBrand";
import SelectModel from "./Brand/SelectModel/SelectModel";
import ZipCode from "./ZipCode/ZipCode";
import BuildOption from "./BuildOption/BuildOption";
import Customize from "./CustomizeLayout";
import { CustomizeSteps } from "./types";
import Trim from "./CustomizeSteps/Trim";
import Drivetrain from "./CustomizeSteps/Drivetrain";
import Exterior from "./CustomizeSteps/Exterior";
import Interior from "./CustomizeSteps/Interior";
import Package from "./CustomizeSteps/Package";
import Incentives from "./CustomizeSteps/Incentives";
import Review from "./CustomizeSteps/Review";
import VehiclePreference from "./Type/VehiclePreference/VehiclePreference";
import SelectBrand from "./Type/SelectBrand/SelectBrand";
import TypeSelectModel from "./Type/SelectModel/SelectModel";
import { Button } from "../ui/button";
import RightArrow from "../Icons/RightArrow";

interface StepConfig {
  key: string;
  component: React.FC<any>;
  displayBackButton: boolean;
  displayNextButton: boolean;
  displaySkipButton?: boolean;
  handleNext?: () => void;
  handlePrev?: () => void;
}

const CustomizeByBrand: React.FC = () => {
  const [step, setStep] = useState(0);
  const [customizeStep, setCustomizeStep] = useState(0);
  const [type, setType] = useState<"brand" | "type">("brand");
  const [data, setData] = useState({
    prefferedCarBrand: [],
    carBrand: [],
    zipCode: "",
  });

  const customizeSteps: CustomizeSteps = [
    {
      id: 1,
      text: "Trim",
      content: <Trim />,
      title: "Select trim",
      subTitle: "Choose a trim level for the BMW 2 Series model",
      displaySkipButton: true,
      displayNextButton: true,
    },
    {
      id: 2,
      text: "Drivetrain",
      content: <Drivetrain />,
      title: "Select drivetrain",
      subTitle:
        "Pick the desired drivetrain option for your car to suit your preferences.",
      displaySkipButton: true,
      displayNextButton: true,
    },
    {
      id: 3,
      text: "Exterior",
      title: "Exterior color",
      subTitle:
        "Select the perfect exterior color for your car to match your style.",
      content: <Exterior />,
      displaySkipButton: true,
      displayNextButton: true,
    },
    {
      id: 4,
      text: "Interior",
      title: "Interior color",
      subTitle:
        "Select the perfect interior color for your car to match your style.",
      content: <Interior />,
      displaySkipButton: true,
      displayNextButton: true,
    },
    {
      id: 5,
      text: "Package",
      title: "Choose package",
      subTitle: "Popular options in stock or customized assistance available",
      content: <Package />,
      displaySkipButton: true,
      displayNextButton: true,
    },
    {
      id: 6,
      text: "Incentives",
      title: "Available incentives ",
      subTitle:
        "Explore potential incentives available to you for added savings and benefits.",
      content: <Incentives />,
      displaySkipButton: true,
      displayNextButton: true,
    },
    {
      id: 7,
      text: "Reviews",
      title: "Reviews",
      subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      content: <Review />,
      displaySkipButton: false,
      displayNextButton: false,
    },
  ];

  const brandStepsConfig: StepConfig[] = [
    {
      key: "prefferedCarBrand",
      component: PrefferedCarBrand,
      displayBackButton: false,
      displayNextButton: true,
    },
    {
      key: "carBrand",
      component: SelectModel,
      displayBackButton: false,
      displayNextButton: true,
    },
    {
      key: "zipCode",
      component: ZipCode,
      displayBackButton: true,
      displayNextButton: true,
    },
    {
      key: "buildOption",
      component: BuildOption,
      displayBackButton: true,
      displayNextButton: true,
    },
    {
      key: "customize",
      component: Customize,
      displayBackButton: true,
      displayNextButton: true,
      handleNext: () => {
        setCustomizeStep((prevStep) => prevStep + 1);
      },
      handlePrev: () => {
        if (customizeStep > 0) {
          setCustomizeStep((prevStep) => prevStep - 1);
        } else {
          handleBack();
        }
      },
    },
  ];

  const typeStepsConfig: StepConfig[] = [
    {
      key: "vehiclePreference",
      component: VehiclePreference,
      displayBackButton: false,
      displayNextButton: true,
    },
    {
      key: "selectBrand",
      component: SelectBrand,
      displayBackButton: false,
      displayNextButton: true,
    },
    {
      key: "typeSelectModel",
      component: TypeSelectModel,
      displayBackButton: true,
      displayNextButton: true,
    },
    {
      key: "zipCode",
      component: ZipCode,
      displayBackButton: true,
      displayNextButton: true,
    },
    {
      key: "buildOption",
      component: BuildOption,
      displayBackButton: true,
      displayNextButton: true,
    },
    {
      key: "customize",
      component: Customize,
      displayBackButton: true,
      displayNextButton: true,
      handleNext: () => {
        setCustomizeStep((prevStep) => prevStep + 1);
      },
      handlePrev: () => {
        if (customizeStep > 0) {
          setCustomizeStep((prevStep) => prevStep - 1);
        } else {
          handleBack();
        }
      },
    },
  ];

  const stepsConfig = type === "brand" ? brandStepsConfig : typeStepsConfig;

  const handleStepChange = (value: string[] | string) => {
    setData((prevData) => ({ ...prevData, [stepsConfig[step].key]: value }));
  };

  const handleNext = () => {
    if (step < stepsConfig.length - 1) {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const handleSkip = () => {
    if (step < stepsConfig.length - 1) {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep((prevStep) => prevStep - 1);
    }
  };

  useEffect(() => {
    if (step === stepsConfig.length - 1) {
      console.log("Data:", data);
    }
  }, [step, data]);

  const currentStepConfig = stepsConfig[step];
  const currentCustomizeStepConfig = customizeSteps[customizeStep] || {};
  const isComplete = step == stepsConfig.length - 1;
  return (
    <>
      <NavigationBar variant="dark" />
      {step >= 0 && step < stepsConfig.length && (
        <section className={`mt-auto mainWrapperFirstTimeBuyer bg-white`}>
          <div className="container firstTimeBuyerContainerWrapper">
            {currentStepConfig.displayBackButton && (
              <div className=" py-[10px] mb-[28px] flex items-center gap-[6px]">
                <span
                  className="inline-block"
                  onClick={
                    currentStepConfig.handlePrev
                      ? currentStepConfig.handlePrev
                      : handleBack
                  }
                >
                  <BackArrow className="w-[24px] h-[24px] cursor-pointer" />
                </span>
                <div className="text-[13px] leading-[16.38px] text-dark font-bold cursor-pointer">
                  Back
                </div>
              </div>
            )}

            {React.createElement(currentStepConfig.component, {
              onChange: handleStepChange,
              steps:
                currentStepConfig.key === "customize"
                  ? customizeSteps
                  : undefined,
              currentStep:
                currentStepConfig.key === "customize" ? customizeStep : step,
              setType: setType,
            })}
          </div>

          {(currentStepConfig.displayNextButton ||
            currentStepConfig.displaySkipButton) && (
            <div className="border-t border-solid border-dark-6 mt-[30px lg:mt-0]">
              <div className="container flex justify-center gap-[12px] lg:justify-end items-center py-[12px] lg:py-[30px]">
                {(currentStepConfig.displaySkipButton ||
                  (currentCustomizeStepConfig.displaySkipButton &&
                    isComplete)) && (
                  <Button
                    variant="outline"
                    className="min-h-[46px] lg:min-h-[56px] ml-2 font-bold !bg-dark-7 !text-dark !border-0 hover:bg-dark-6 !w-[161px]"
                    onClick={handleSkip}
                  >
                    Skip
                  </Button>
                )}
                {((currentStepConfig.displayNextButton && !isComplete) ||
                  (currentCustomizeStepConfig.displayNextButton &&
                    isComplete)) && (
                  <Button
                    variant="gradient"
                    className="min-h-[46px] lg:min-h-[56px] w-[161px] gap-[8px]"
                    onClick={
                      currentStepConfig.handleNext
                        ? currentStepConfig.handleNext
                        : handleNext
                    }
                  >
                    <>
                      <span className="lg:hidden">Next</span>
                      <span className="hidden lg:inline-block">Continue</span>
                      <ArrowRight className="fill-primary-text w-[1.125rem] h-[1.125rem] lg:w-[1.25rem] lg:h-[1.25rem]" />
                    </>
                  </Button>
                )}
                {(isComplete && !currentCustomizeStepConfig.displayNextButton && !currentCustomizeStepConfig.displaySkipButton) && (
                  <Button variant="gradient" className="hidden md:block px-[22px] md:min-w-[456px] md:min-h-[56px] text-[16px]">
                  See offers on local inventory
                  <span className="ml-[6px] md:ml-[10px]">
                    <RightArrow />
                  </span>
                </Button>
                )}
              </div>
            </div>
          )}
        </section>
      )}
    </>
  );
};

export default CustomizeByBrand;
