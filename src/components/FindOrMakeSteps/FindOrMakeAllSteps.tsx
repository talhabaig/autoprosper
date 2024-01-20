// components/StepForm.js
import { useState } from "react";
import WhatEssential from "./WhatEssential/WhatEssential";
import PrefferedCarBrands from "./PrefferedCarBrand/PrefferedCarBrand";
import TotalSeatRequirments from "./TotalSeatRequirments/TotalSeatRequirments";
import VehiclePreferences from "./VehiclePreference/VehiclePreference";
import RidePowerConsuption from "./RidePowerConsuption/RidePowerConsuption";
import { BackArrow, ArrowRight } from "../Icons/Icons";

import { FirstTimeBuyer } from "../../assests/interfaces/Home/index";
import NavigationBar from "../ui/Navigations/navigationBar";
import Button from "../Common/Button/Button";
import SuggestionForYou from "./SuggestionForYou/SuggestionForYou";

const FindOrMakeAllSteps: React.FC<FirstTimeBuyer> = () => {
  const [step, setStep] = useState(1);
  const [essentialFeatures, setessentialFeatures] = useState<string[]>([]);
  const [carBrand, setCarBrand] = useState<string[]>([]);
  const [totalSeats, setTotalSeats] = useState<string[]>([]);
  const [vehiclePreference, setVehiclePreference] = useState<string[]>([]);
  const [fuelConsuptionType, setfuelConsuptionType] = useState<string[]>([]);

  const handleessentialFeaturesChange = (value: string[]) => {
    setessentialFeatures(value);
  };

  const handlePrefferedCarBrand = (value: string[]) => {
    setCarBrand(value);
  };

  const handleTotalSeatsChange = (value: string[]) => {
    setTotalSeats(value);
  };

  const handleVehiclePreference = (value: string[]) => {
    setVehiclePreference(value);
  };

  const handleRidePowerConsuption = (value: string[]) => {
    setfuelConsuptionType(value);
  };

  const handleNext = () => {
    if (step < 5) {
      setStep(step + 1);
    } else if (step === 5) {
      // Log data in the FindOrMakeAllSteps component
      console.log({
        essentialFeatures,
        carBrand,
        totalSeats,
        vehiclePreference,
        fuelConsuptionType,
      });

      setStep(step + 1);
    }
  };

  return (
    <>
      <NavigationBar />
      <section
        className={`mt-auto mainWrapperFirstTimeBuyer ${
          step === 6 && "bg-dark-7"
        }`}
      >
        <div className="container firstTimeBuyerContainerWrapper">
          {/* <h1>FindOrMakeStep {step}</h1> */}
          {step > 1 && step < 6 && (
            <div className=" py-[10px] mb-[28px]">
              <span className="inline-block" onClick={() => setStep(step - 1)}>
                <BackArrow className="w-[24px] h-[24px] cursor-pointer" />{" "}
              </span>
            </div>
          )}

          {step === 1 && (
            <WhatEssential onChange={handleessentialFeaturesChange} />
          )}
          {step === 2 && (
            <PrefferedCarBrands onChange={handlePrefferedCarBrand} />
          )}
          {step === 3 && (
            <TotalSeatRequirments onChange={handleTotalSeatsChange} />
          )}
          {step === 4 && (
            <VehiclePreferences onChange={handleVehiclePreference} />
          )}
          {step === 5 && (
            <RidePowerConsuption onChange={handleRidePowerConsuption} />
          )}
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
    </>
  );
};

export default FindOrMakeAllSteps;