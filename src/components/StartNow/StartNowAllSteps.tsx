// components/StepForm.js
import { useState } from "react";
import { BackArrow, ArrowRight } from "../Icons/Icons";

import { FirstTimeBuyer } from "../../assests/interfaces/Home/index";
import NavigationBar from "../ui/Navigations/navigationBar";
import Button from "../Common/Button/Button";
import PurposeOfUse from "./PurposeOfUse/PurposeOfUse";
import Link from "next/link";
import WhatEssentials from "../FirstTimeBuyer/WhatEssential/WhatEssential";
import PrefferedCarBrands from "../FirstTimeBuyer/PreferredCarBrands/PreferredCarBrand";
import TotalSeatRequirements from "../FirstTimeBuyer/TotalSeatRequirements/TotalSeatRequirements";
import {
  FirstBuyerProvider,
  useFirstBuyer,
} from "../Common/context/FirstTimeBuyerContext";
import VehiclePreferences from "../FirstTimeBuyer/VehiclePreference/VehiclePreference";
import RidePowerConsumption from "../FirstTimeBuyer/RidePowerConsumption/RidePowerConsumption";
import SuggestionForYou from "../FirstTimeBuyer/SuggestionForYou/SuggestionForYou";
import { showToast } from "../../../toastifyConfig";

const FirstTimeBuyerAllSteps: React.FC<FirstTimeBuyer> = () => {
  const [step, setStep] = useState(1);
  const { state } = useFirstBuyer();
  const handleNext = async () => {
    if (step < 6) {
      if (step === 3 && state?.Preferred_car_brand?.length === 0) {
        showToast("warning", "At least one brand need to select");
        return;
      }
      setStep(step + 1);
    } else if (step === 6) {
      setStep(step + 1);
    }
  };

  return (
    <>
      <NavigationBar variant="dark" />
      <section className={`mt-auto mainWrapperFirstTimeBuyer `}>
        <div className="container firstTimeBuyerContainerWrapper">
          {step > 1 && step < 8 && (
            <div className=" py-[10px] mb-[28px]">
              <span className="inline-block" onClick={() => setStep(step - 1)}>
                <BackArrow className="w-[24px] h-[24px] cursor-pointer" />{" "}
              </span>
            </div>
          )}

          {step === 1 && <WhatEssentials />}
          {step === 2 && <PurposeOfUse />}
          {step === 3 && <PrefferedCarBrands />}
          {step === 4 && <TotalSeatRequirements />}
          {step === 5 && <VehiclePreferences />}
          {step === 6 && <RidePowerConsumption />}
          {/* {step === 7 && <SuggestionForYou />} */}
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
    </>
  );
};

export default () => (
  <FirstBuyerProvider>
    <FirstTimeBuyerAllSteps />
  </FirstBuyerProvider>
);
