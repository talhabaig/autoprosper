// components/StepForm.js
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import WhatEssential from "./WhatEssential/WhatEssential";
import PreferredCarBrands from "./PreferredCarBrands/PreferredCarBrand";
import VehiclePreferences from "./VehiclePreference/VehiclePreference";
import RidePowerConsumption from "./RidePowerConsumption/RidePowerConsumption";
import PurposeOfUse from "./PurposeOfUse/PurposeOfUse";
import { BackArrow, ArrowRight } from "../Icons/Icons";
import {
  FirstBuyerProvider,
  useFirstBuyer,
} from "../Common/context/FirstTimeBuyerContext";
import { FirstTimeBuyer } from "../../assests/interfaces/Home/index";
import NavigationBar from "../ui/Navigations/navigationBar";
import Button from "../Common/Button/Button";
import SuggestionForYou from "./SuggestionForYou/SuggestionForYou";
import TotalSeatRequirements from "./TotalSeatRequirements/TotalSeatRequirements";
import { showToast } from "../../../toastifyConfig";
import { usePathname, useSearchParams } from "next/navigation";
const FirstTimeBuyerAllSteps: React.FC<FirstTimeBuyer> = () => {
  const pathname = usePathname();
  const [step, setStep] = useState(1);
  const { state } = useFirstBuyer();

  const handleNext = async () => {
    if (step < 7) {
      // if ((step === 2 && state?.Preferred_car_brand?.length === 0) || (step === 2 && state?.PurposeOfUse?.length === 0)) {
      //   showToast("warning", "At least one brand or purpose of use needs to be selected");
      //   return;
      // }
      setStep(step + 1);
    } else if (step === 7) {
      setStep(step + 1);
    }
  };

  return (
    <>
      <NavigationBar variant="dark" />
      {pathname === "/find-or-make" ? (
        <section className={`mt-auto mainWrapperFirstTimeBuyer `}>
          <div className="container firstTimeBuyerContainerWrapper">
            {step > 1 && step < 8 && (
              <div className=" py-[10px] mb-[28px]">
                <span
                  className="inline-block"
                  onClick={() => setStep(step - 1)}
                >
                  <BackArrow className="w-[24px] h-[24px] cursor-pointer" />{" "}
                </span>
              </div>
            )}

            {step === 1 && <WhatEssential />}
            {step === 2 && <PurposeOfUse />}
            {step === 3 && <PreferredCarBrands />}
            {step === 4 && <TotalSeatRequirements />}
            {step === 5 && <VehiclePreferences />}
            {step === 6 && <RidePowerConsumption />}
          </div>
          <div className="border-t border-solid border-dark-6 mt-[30px lg:mt-0]">
            <div className="container flex justify-center lg:justify-end items-center py-[12px] lg:py-[30px]">
              {step === 6 ? (
                <Link href="get-pre-qualified">
                  <Button
                    variant="small"
                    className="lg:min-h-[56px]"
                    onClick={() => {
                      handleNext();
                    }}
                    children={
                      <>
                        <span className="lg:hidden">Next</span>
                        <span className="hidden lg:inline-block">Continue</span>
                        <ArrowRight className="fill-primary-text w-[1.125rem] h-[1.125rem] lg:w-[1.25rem] lg:h-[1.25rem]" />
                      </>
                    }
                  />
                </Link>
              ) : (
                <Button
                  variant="small"
                  className="lg:min-h-[56px]"
                  onClick={() => {
                    handleNext();
                  }}
                  children={
                    <>
                      <span className="lg:hidden">Next</span>
                      <span className="hidden lg:inline-block">Continue</span>
                      <ArrowRight className="fill-primary-text w-[1.125rem] h-[1.125rem] lg:w-[1.25rem] lg:h-[1.25rem]" />
                    </>
                  }
                />
              )}
            </div>
          </div>
        </section>
      ) : (
        <section
          className={`mt-auto mainWrapperFirstTimeBuyer ${
            step === 6 && "bg-dark-7"
          }`}
        >
          <div className="container firstTimeBuyerContainerWrapper">
            {step > 1 && step < 6 && (
              <div className=" py-[10px] mb-[28px]">
                <span
                  className="inline-block"
                  onClick={() => setStep(step - 1)}
                >
                  <BackArrow className="w-[24px] h-[24px] cursor-pointer" />{" "}
                </span>
              </div>
            )}

            {step === 1 && <WhatEssential />}
            {step === 2 && <PreferredCarBrands />}
            {step === 3 && <TotalSeatRequirements />}
            {step === 4 && <VehiclePreferences />}
            {step === 5 && <RidePowerConsumption />}
            {step === 6 && <SuggestionForYou />}
          </div>
          {step < 6 && (
            <div className="border-t border-solid border-dark-6 mt-[30px lg:mt-0]">
              <div className="container flex justify-center lg:justify-end items-center py-[12px] lg:py-[30px]">
                <Button
                  variant="small"
                  className="lg:min-h-[56px]"
                  onClick={() => {
                    handleNext();
                  }}
                  children={
                    <>
                      <span className="lg:hidden">Next</span>
                      <span className="hidden lg:inline-block">Continue</span>
                      <ArrowRight className="fill-primary-text w-[1.125rem] h-[1.125rem] lg:w-[1.25rem] lg:h-[1.25rem]" />
                    </>
                  }
                />
              </div>
            </div>
          )}
        </section>
      )}
    </>
  );
};

export default () => (
  <FirstBuyerProvider>
    <FirstTimeBuyerAllSteps />
  </FirstBuyerProvider>
);
