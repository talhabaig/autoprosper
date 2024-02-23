import React from "react";

const VehicleInformation = () => {
  const data = {
    vin: "2G1105S3XK9135707",
    vehicleYear: "2019",
    vehicleMake: "CHEVROLET",
    vehicleModel: "IMPALA",
    vehicleMileage: "57,857",
  };

  return (
    <div className="bg-white rounded-2xl flex flex-col gap-[8px] px-[16px] py-[24px]">
      <div className="text-sm md:text-lg text-dark-3">
        <span className="font-bold text-dark">VIN:</span> {data.vin}
      </div>
      <div className="text-sm md:text-lg text-dark-3">
        <span className="font-bold text-dark">Vehicle:</span> {data.vehicleYear}{" "}
        {data.vehicleMake} {data.vehicleModel} ({data.vehicleMileage} miles)
      </div>
    </div>
  );
};

export default VehicleInformation;
