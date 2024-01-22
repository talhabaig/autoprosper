// components/StepForm.js
import { useEffect, useState } from "react";
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
import GetPreQualified from "./GetPreQualified/GetPreQualified";

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
    if (step < 8) {
      setStep((prevStep) => {
        return prevStep + 1;
      });
    }
  };

  useEffect(() => {
    if (step === 6) {
      // Log data in the FindOrMakeAllSteps component
      console.log({
        essentialFeatures,
        carBrand,
        totalSeats,
        vehiclePreference,
        fuelConsuptionType,
      });
    }
    if (step === 6) {
      console.log("step", step);
    }
  }, [step]);

  return (
    <>
      <NavigationBar variant="dark" />
      {step > 0 && step < 6 && (
        <section
          className={`mt-auto mainWrapperFirstTimeBuyer ${
            step === 7 && "bg-dark-7"
          }`}
        >
          <div className="container firstTimeBuyerContainerWrapper">
            {/* <h1>FindOrMakeStep {step}</h1> */}
            {step > 1 && step < 7 && (
              <div className=" py-[10px] mb-[28px]">
                <span
                  className="inline-block"
                  onClick={() => setStep(step - 1)}
                >
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
          </div>
          {step < 7 && (
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
      {step === 6 && <GetPreQualified />}

      {step === 7 && <SuggestionForYou />}
    </>
  );
};

export default FindOrMakeAllSteps;
