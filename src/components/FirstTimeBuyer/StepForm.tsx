// components/StepForm.js
import { useState } from "react";
import WhatEssential from "./WhatEssential";
import PrefferedCarBrands from "./PrefferedCarBrand";
import TotalSeatRequirments from "./TotalSeatRequirments";
import VehiclePreferences from "./VehiclePreference";
import RidePowerConsuption from "./RidePowerConsuption";

import { FirstTimeBuyer } from "../../assests/interfaces/Home/index";

interface StepFormProps {
  onDataLog: (data: FirstTimeBuyer) => void;
}

const StepForm: React.FC<StepFormProps> = ({ onDataLog }) => {
  const [step, setStep] = useState(1);
  const [essentialFeatures, setessentialFeatures] = useState("");
  const [carBrand, setCarBrand] = useState("");
  const [totalSeats, setTotalSeats] = useState("");
  const [vehiclePreference, setVehiclePreference] = useState("");
  const [fuelConsuptionType, setfuelConsuptionType] = useState("");

  const handleessentialFeaturesChange = (value: string) => {
    setessentialFeatures(value);
  };

  const handlePrefferedCarBrand = (value: string) => {
    setCarBrand(value);
  };

  const handleTotalSeatsChange = (value: string) => {
    setTotalSeats(value);
  };

  const handleVehiclePreference = (value: string) => {
    setVehiclePreference(value);
  };

  const handleRidePowerConsuption = (value: string) => {
    setfuelConsuptionType(value);
  };

  const handleNext = () => {
    if (step < 6) {
      setStep(step + 1);
    } else {
      // Log data in the StepForm component
      console.log({
        essentialFeatures,
        carBrand,
        totalSeats,
        vehiclePreference,
        fuelConsuptionType,
      });

      // Log data in the parent component
      onDataLog({
        essentialFeatures,
        carBrand,
        totalSeats,
        vehiclePreference,
        fuelConsuptionType,
      });

      // You can also send the data to a server or perform other actions
    }
  };

  return (
    <section>
      <div className="container">
        <h1>Step {step}</h1>
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

        <button
          onClick={() => {
            handleNext();
          }}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default StepForm;
