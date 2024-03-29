import React, { useState, ChangeEvent } from "react";
import { InfoIcon } from "../../Icons/Icons";

type VehicleTab = "first" | "second" | "third";

const Vehicle: React.FC = () => {
  const [activeTab, setActiveTab] = useState<VehicleTab>("first");

  const handleTabChange = (tab: VehicleTab) => {
    setActiveTab(tab);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  };

  return (
    <div className="flex w-full justify-start">
      <div className="w-full font-[400] ">
        <h1 className="heading text-left  text-[#001B44] text-[32px] xl:text-[48px] 2xl:text-[56px] font-[400] mt-6 md:mt-0 mb-[12px] 3xl:mb-[18px]">
          Vehicle
        </h1>
        <p className="text-left text-[#4B5768] font-[400] text-[14px] xl:text-[16px] 3xl:text-[20px] 2xl:mb-[48px] ">
          Unable to find a vehicle without specific details
        </p>
        <div className="flex gap-1 md:gap-2 3xl:gap-3 ">
          <button
            onClick={() => handleTabChange("first")}
            className={`text-left text-[12px] font-bold p-[9px_14px] rounded-[96px] border-[3px] border-[#E5E8ED] md:p-[10px_20px] 3xl:text-[16px] 3xl:p-[13px_26px]  ${
              activeTab === "first"
                ? "bg-[#001B44] text-white !border-[0px]"
                : "bg-[default-color]  text-[#8E97A6] "
            }`}
          >
            VIN
          </button>
          <button
            onClick={() => handleTabChange("second")}
            className={`text-left text-[12px] font-bold border-[3px] p-[9px_14px] rounded-[96px] border-[#E5E8ED] md:p-[10px_20px] 3xl:text-[16px] 3xl:p-[13px_26px] ${
              activeTab === "second"
                ? "bg-[#001B44] text-white !border-[0px]"
                : "bg-[default-color] text-[#8E97A6]"
            }`}
          >
            License Plate
          </button>
          <button
            onClick={() => handleTabChange("third")}
            className={`text-left text-[12px] font-bold border-[3px] p-[9px_14px] rounded-[96px] border-[#E5E8ED] md:p-[10px_20px] 3xl:text-[16px] 3xl:p-[13px_26px] ${
              activeTab === "third"
                ? "bg-[#001B44] text-white !border-[0px]"
                : "bg-[default-color] text-[#8E97A6]"
            }`}
          >
            Make/Model
          </button>
        </div>
        <div className="mt-6 3xl:mt-12">
          {activeTab === "first" && (
            <>
              <a
                href=""
                className="flex gap-1 2xl:gap-2 text-left underline text-[#001B44] text-[14px] mb-[18px] 2xl:mb-[32px] 2xl:mt-12 font-[700]"
              >
                <InfoIcon className="w-[18px] 2xl:w-[20px] " /> Where is my VIN?
              </a>
              <input
                type="text"
                placeholder="VIN (Vehicle Identification Number)"
                className="block w-full text-sm rounded-xl border-solid border p-[17px_18px] 3xl:p-[24px] lg:w-[50%] 3xl:w-[59%] border-[#8E97A6]"
                onChange={handleInputChange}
              />
            </>
          )}
          {activeTab === "second" && <p>License Plate input goes here</p>}
          {activeTab === "third" && <p>Make/Model input goes here</p>}
        </div>
      </div>
    </div>
  );
};

export default Vehicle;
