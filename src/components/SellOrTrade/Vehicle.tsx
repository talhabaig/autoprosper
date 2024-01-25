import React from "react";
import styles from "./SellTradeVehicle.module.css";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import Button from "../Common/Button/Button";

const Vehicle = () => {
  return (
    <>
      <div className="flex md:max-w-[890px] w-full justify-center">
        <div className="w-full font- [400]">
          <h1 className="heading text-left  text-[#001B44] text-[32px] lg:text-[56px] font-[400]  mb-[20px]  ">
            Vehicle
          </h1>
          <p className="text-left text-[#4B5768] font-[400] lg:text-[20px] ">
            Unable to find a vehicle without specific details
          </p>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Nav variant="pills" className=" vehicleTab">
              <Nav.Item>
                <Nav.Link
                  eventKey="first"
                  className="text-left  text-[#B7BCC3]  hover:text-[#B7BCC3]"
                >
                  VIN
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="second"
                  className="text-left  text-[#B7BCC3]  hover:text-[#B7BCC3]"
                >
                  License Plate
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="third"
                  className="text-left  text-[#B7BCC3]  hover:text-[#B7BCC3]"
                >
                  Make/Model
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                {" "}
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
              </Tab.Pane>
              <Tab.Pane eventKey="second">na</Tab.Pane>
              <Tab.Pane eventKey="third">na</Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </div>
    </>
  );
};

export default Vehicle;
