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
import PurposeOfUse from "./PurposeOfUse/PurposeOfUse";
import Link from "next/link";

const FirstTimeBuyerAllSteps: React.FC<FirstTimeBuyer> = () => {
  const [step, setStep] = useState(1);
  const [essentialFeatures, setessentialFeatures] = useState<string[]>([]);
  const [carBrand, setCarBrand] = useState<string[]>([]);
  const [totalSeats, setTotalSeats] = useState<string[]>([]);
  const [vehiclePreference, setVehiclePreference] = useState<string[]>([]);
  const [fuelConsuptionType, setfuelConsuptionType] = useState<string[]>([]);
  const [carPurpose, setCarPurpose] = useState<string[]>([]);

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

  const handleCarPurposeOfUse = (value: string[]) => {
    setCarPurpose(value);
  };

  const handleNext = () => {
    if (step < 6) {
      setStep(step + 1);
    } else if (step === 6) {
      // Log data in the FirstTimeBuyerAllSteps component
      console.log({
        essentialFeatures,
        carBrand,
        totalSeats,
        vehiclePreference,
        fuelConsuptionType,
        carPurpose,
      });
    }
  };

  return (
    <>
      <NavigationBar variant="dark" />
      <section className={`mt-auto mainWrapperFirstTimeBuyer `}>
        <div className="container firstTimeBuyerContainerWrapper">
          {/* <h1>Step {step}</h1> */}
          {step > 1 && step < 8 && (
            <div className=" py-[10px] mb-[28px]">
              <span className="inline-block" onClick={() => setStep(step - 1)}>
                <BackArrow className="w-[24px] h-[24px] cursor-pointer" />{" "}
              </span>
            </div>
          )}

          {step === 1 && (
            <WhatEssential onChange={handleessentialFeaturesChange} />
          )}
          {step === 2 && <PurposeOfUse onChange={handleCarPurposeOfUse} />}
          {step === 3 && (
            <PrefferedCarBrands onChange={handlePrefferedCarBrand} />
          )}
          {step === 4 && (
            <TotalSeatRequirments onChange={handleTotalSeatsChange} />
          )}
          {step === 5 && (
            <VehiclePreferences onChange={handleVehiclePreference} />
          )}
          {step === 6 && (
            <RidePowerConsuption onChange={handleRidePowerConsuption} />
          )}
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

export default FirstTimeBuyerAllSteps;
