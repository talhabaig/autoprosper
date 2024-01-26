import React, { useState } from "react";
import { VehicleFormInformation } from "../../../assests/interfaces/Home/index";

import Select from "react-select";

interface ChildFormComponentProps {
  onChange: (value: VehicleFormInformation) => void;
}

const CarOptions = [
  { value: "toyota", label: "Toyota" },
  { value: "hyundai", label: "Hyundai" },
  { value: "bmw", label: "BMW" },
];

const YearOptions = [
  { value: "2022", label: "2022" },
  { value: "2021", label: "2021" },
  { value: "2020", label: "2020" },
];

const MakeOptions = [
  { value: "sedan", label: "Sedan" },
  { value: "suv", label: "SUV" },
  { value: "hatchback", label: "Hatchback" },
];

const ModelOptions = [
  { value: "corolla", label: "Corolla" },
  { value: "elantra", label: "Elantra" },
  { value: "3series", label: "3 Series" },
];

const VinOptions = [
  { value: "vin1", label: "VIN Option 1" },
  { value: "vin2", label: "VIN Option 2" },
  { value: "vin3", label: "VIN Option 3" },
];

const VehicleInformationForm: React.FC<ChildFormComponentProps> = ({
  onChange,
}) => {
  const [vehicleInformation, setVehicleInformation] = useState<VehicleFormInformation>({
    car: "",
    year: "",
    make: "",
    model: "",
    vehicleIdentificationNumber: "",
  });

  const handleChange = (name: string, value: string) => {
    setVehicleInformation((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Send updated vehicleInformation to parent component
    onChange(vehicleInformation);
  };

  return (
    <>
      <div className="max-w-[460px] mx-auto">
        <div className="w-full mb-[18px]">
          <Select
            options={CarOptions}
            onChange={(selectedOption) => {
              if (selectedOption) {
                const value = selectedOption.value;
                handleChange("car", value);
              }
            }}
            placeholder="Car"
            className="rectSelectWrapper"
          />
        </div>
        <div className="w-full mb-[18px] ">
          <Select
            options={YearOptions}
            onChange={(selectedOption) => {
              if (selectedOption) {
                const value = selectedOption.value;
                handleChange("year", value);
              }
            }}
            placeholder="Year"
            className="rectSelectWrapper"
          />
        </div>
        <div className="w-full mb-[18px] ">
          <Select
            options={MakeOptions}
            onChange={(selectedOption) => {
              if (selectedOption) {
                const value = selectedOption.value;
                handleChange("make", value);
              }
            }}
            placeholder="Make"
            className="rectSelectWrapper"
          />
        </div>
        <div className="w-full mb-[18px]">
          <Select
            options={ModelOptions}
            onChange={(selectedOption) => {
              if (selectedOption) {
                const value = selectedOption.value;
                handleChange("model", value);
              }
            }}
            placeholder="Model"
            className="rectSelectWrapper"
          />
        </div>
        <div className="mb-[18px] w-full">
          <Select
            options={VinOptions}
            onChange={(selectedOption) => {
              if (selectedOption) {
                const value = selectedOption.value;
                handleChange("vehicleIdentificationNumber", value);
              }
            }}
            placeholder="VIN (optional)"
            className="rectSelectWrapper"
          />
        </div>
      </div>
    </>
  );
};

export default VehicleInformationForm;
