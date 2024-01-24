"use client";
import React from "react";
import { BackArrow } from "../Icons/Icons";
// import { Tab, Tabs } from "../Common/Tabs/Tabs";
import Vehicle from "./Vehicle";
import VehicleDetail from "./VehicleDetail";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import Button from "../Common/Button/Button";
import VehicleCondition from "./VehicleCondition";
import VehicleInformation from "./VehicleInformation";

const SellTradeVehicle = () => {
  return (
    <>
      <div className="homePage">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <div className="mt-[60px] px-[14px] max-w-full md:py-[0px] flex flex-col md:flex-row md:gap-[30px] justify-between md:justify-center md:px-10 lg:px-[159px] mx-auto ">
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
              <p className="text-left text-[#5D6878] text-[14px]  font-[400   lg:mb-10px">
                Either transform it into your dream ride online or <br />
                effortlessly sell for the best offers at home.
              </p>
              <div className="firstTab">
                <Nav variant="pills" className="flex-column vehicleNav ">
                  <Nav.Item>
                    <Nav.Link
                      eventKey="first"
                      className="text-left px-0 text-[#B7BCC3]  hover:text-[#B7BCC3]"
                    >
                      <span className="tabText">1</span> Vehicle
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="second"
                      className="text-left px-0 text-[#B7BCC3]  hover:text-[#B7BCC3]"
                    >
                      <span className="tabText">2</span> Details
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="third"
                      className="text-left px-0 text-[#B7BCC3]  hover:text-[#B7BCC3]"
                    >
                      <span className="tabText">3</span> Condition
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="forth"
                      className="text-left px-0 text-[#B7BCC3]  hover:text-[#B7BCC3]"
                    >
                      <span className="tabText">4</span> Information
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
            </div>
            <div className="flex md:max-w-[890px] w-full ">
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Vehicle />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <VehicleDetail />
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <VehicleCondition />
                </Tab.Pane>
                <Tab.Pane eventKey="forth">
                  <VehicleInformation />
                </Tab.Pane>
              </Tab.Content>
            </div>
          </div>
        </Tab.Container>
      </div>
      <div className="footerBox ">
        <Button variant="gray" label="Cancel edit" className="mr-3" />
        <Button variant="primary" label="Find vehicle" className="" />
      </div>
    </>
  );
};

export default SellTradeVehicle;
