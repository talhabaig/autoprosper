"use client";
import React, { useState } from "react";
import { BackArrow } from "../Icons/Icons";
import Vehicle from "./Vehicle";
import VehicleDetail from "./VehicleDetail";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import Button from "../Common/Button/Button";
import VehicleCondition from "./VehicleCondition";
import VehicleInformation from "./VehicleInformation";
import YourVehicle from "./YourVehicle";
import CalculatingOffer from "./CalculatingOffer";
import YourCashOffer from "./YourCashOffer";

const SellTradeVehicle = () => {
  const [activeStep, setActiveStep] = useState(1);
  // const [isYourVehicle, setYourVehicle] = useState(false);
  const handleStepChange = (step: any) => {
    // if(isYourVehicle=== false){
    //   console.log('>>>>>>>>>>>>>>>>>>')
    // }
    // setYourVehicle(true)
    setActiveStep(step);
  };

  return (
    <>
      <div className="homePage">
        <Tab.Container id="left-tabs-example" activeKey={activeStep.toString()} onSelect={(key:any) => handleStepChange(parseInt(key))}>
          <div className="mt-[60px] px-[14px] max-w-full md:py-[0px] flex flex-col md:flex-row md:gap-[30px] justify-between md:justify-center md:px-10 lg:px-[159px] mx-auto ">
            <div className="w-full xl:w-[550px] flex flex-col  ">
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
              <p className="text-left text-[#5D6878] text-[14px]  font-[400   lg:mb-10px]">
                Either transform it into your dream ride online or <br />
                effortlessly sell for the best offers at home.
              </p>
              <div className="firstTab">
                <Nav variant="pills" className="flex-column vehicleNav ">
                  <Nav.Item>
                    <Nav.Link
                      eventKey="1"
                      onClick={() => handleStepChange(1)}
                      className={`text-left px-0 ${activeStep === 1 ? 'text-[#B7BCC3] hover:text-[#B7BCC3]' : 'text-gray-500'}`}
                    >
                      <span className="tabText">1</span> Vehicle
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="2"
                      onClick={() => handleStepChange(2)}
                      className={`text-left px-0 ${activeStep === 2 ? 'text-[#B7BCC3] hover:text-[#B7BCC3]' : 'text-gray-500'}`}
                    >
                      <span className="tabText">2</span> Details
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="3"
                      onClick={() => handleStepChange(3)}
                      className={`text-left px-0 ${activeStep === 3 ? 'text-[#B7BCC3] hover:text-[#B7BCC3]' : 'text-gray-500'}`}
                    >
                      <span className="tabText">3</span> Condition
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="4"
                      onClick={() => handleStepChange(4)}
                      className={`text-left px-0 ${activeStep === 4 ? 'text-[#B7BCC3] hover:text-[#B7BCC3]' : 'text-gray-500'}`}
                    >
                      <span className="tabText">4</span> Information
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
            </div>
            <div className="flex xl:w-[950px] w-full ">
              <Tab.Content>
                <Tab.Pane eventKey="1">
                  {/* <Vehicle /> */}
                  <YourVehicle />
                </Tab.Pane>
                <Tab.Pane eventKey="2">
                  <VehicleDetail />
                </Tab.Pane>
                <Tab.Pane eventKey="3">
                  <VehicleCondition />
                </Tab.Pane>
                <Tab.Pane eventKey="4">
                  {/* <VehicleInformation /> */}
                  {/* <CalculatingOffer /> */}

                  {/* last screen uncoment for design */}
                  <YourCashOffer />
                </Tab.Pane>
              </Tab.Content>
            </div>
          </div>
        </Tab.Container>
      </div>
      <div className="footerBox ">
        {activeStep > 1 && (
          <Button
            variant="gray"
            label="Back"
            className="mr-3"
            onClick={() => handleStepChange(activeStep - 1)}
          />
        )}
        {activeStep < 4 ? (
          <Button
            variant="primary"
            label="Continue"
            className=""
            onClick={() => handleStepChange(activeStep + 1)}
          />
        ) : (
          <Button variant="primary" label="Find vehicle" className="" />
        )}
      </div>
    </>
  );
};

export default SellTradeVehicle;
