"use client";
import React from "react";
import { BackArrow } from "../Icons/Icons";
import { Tab, Tabs } from "../Common/Tabs/Tabs";
import Vehicle from "./Vehicle";
import VehicleDetail from "./VehicleDetail";

const SellTradeVehicle = () => {
  return (
    <>
      <div className="mt-[60px] px-[14px] max-w-full text-center md:py-[0px] flex flex-col md:flex-row md:gap-[30px] justify-between md:justify-center md:px-10 lg:px-[159px] mx-auto">
        <div className="w-full md:max-w-[590px] flex flex-col  ">
          <a
            href=""
            className="text-left  cursor-pointer  font-weight: 700 lg:text-[16px] mb-[20px] text-[#5D6878]"
          >
            <BackArrow className="w-[24px] h-[24px]  inline-block" />
            Back
          </a>
          <h1 className="text-left  text-[#001B44] lg:text-[32px]  font-[700] mb-[15px]">
            Sell/Trade
          </h1>
          <p className="text-left text-[#5D6878]  lg:text-sm lg:mb-0">
            Either transform it into your dream ride online or <br />
            effortlessly sell for the best offers at home.
          </p>

          <Tabs vertical={true}>
            <Tab component={<Vehicle />}>Vehicle</Tab>
            <Tab component="content of tab 2" active>Details</Tab>
            {/* <Tab component={<VehicleDetail />}>
              Details
            </Tab> */}
            <Tab component="content of tab 3">Condition</Tab>
            <Tab component="content of tab 4">Information</Tab>
          </Tabs>
          
        </div>
        <div className="flex md:max-w-[890px] w-full justify-center">
          <div className="w-full font- [400]">
            <h1 className="text-left  text-[#001B44] lg:text-[56px]  mb-[20px]">
              Vehicle
            </h1>
            <p className="text-left text-[#4B5768] lg:text-[20px] ">
              Unable to find a vehicle without specific details
            </p>
            <Tabs>
              <Tab component="content of tab 1" active>Tab 1</Tab>
              <Tab component="content of tab 2">
                Tab 2
              </Tab>
              <Tab component="content of tab 3">Tab 3</Tab>
              <Tab component="content of tab 4">Tab 4</Tab>
              <p>fgsdgs</p>
            </Tabs>
            <a
              href=""
              className="block text-left underline  text-[#001B44] lg:text-[14px]  mb-[20px] font-[700]"
            >
              Where is my VIN?
            </a>
            <input
              type="text"
              placeholder="VIN (Vehicle Identification Number)"
              className=" block w-[350px] md:w-[456px] h-[72px] rounded-[12px] border-solid border-2 border-[#8E97A6] indent-4"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SellTradeVehicle;
