import React, { useState, ChangeEvent } from "react";

type VehicleTab = "first" | "second" | "third";

const Vehicle: React.FC = () => {
  const [activeTab, setActiveTab] = useState<VehicleTab>("first");

  const handleTabChange = (tab: VehicleTab) => {
    setActiveTab(tab);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e)
  };

  return (
    <div className="flex md:max-w-[890px] w-full justify-center">
      <div className="w-full font-[400]">
        <h1 className="heading text-left  text-[#001B44] text-[32px] lg:text-[56px] font-[400]  mb-[20px]">
          Vehicle
        </h1>
        <p className="text-left text-[#4B5768] font-[400] lg:text-[16px] ">
          Unable to find a vehicle without specific details
        </p>
        <div className="flex space-x-6 mt-6 vinTab">
          <button
            onClick={() => handleTabChange("first")}
            className={`text-left  ${
              activeTab === "first"
                ? "bg-black text-white"
                : "bg-[default-color] text-[#8E97A6]"
            }`}
          >
            VIN
          </button>
          <button
            onClick={() => handleTabChange("second")}
            className={`text-left ${
              activeTab === "second"
                ? "bg-black text-white"
                : "bg-[default-color] text-[#8E97A6]"
            }`}
          >
            License Plate
          </button>
          <button
            onClick={() => handleTabChange("third")}
            className={`text-left ${
              activeTab === "third"
                ? "bg-black text-white"
                : "bg-[default-color] text-[#8E97A6]"
            }`}
          >
            Make/Model
          </button>
        </div>
        <div className="mt-6">
          {activeTab === "first" && (
            <>
              <a
                href=""
                className="block text-left underline text-[#001B44] lg:text-[14px] mb-[20px] font-[700]"
              >
                Where is my VIN?
              </a>
              <input
                type="text"
                placeholder="VIN (Vehicle Identification Number)"
                className="block w-[350px] md:w-[456px] h-[72px] rounded-[12px] border-solid border-2 border-[#8E97A6] indent-4"
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
