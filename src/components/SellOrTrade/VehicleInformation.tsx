import { useState } from "react";
import CustomInputField from "../Common/InputField/CustomInputField";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";

const VehicleInformation = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const handleDivClick = (value: any) => {
    setSelectedValue(value);
  };
  return (
    <>
      <h1 className="heading text-left  text-[#001B44] text-[32px] lg:text-[56px] font-[400]  mb-[20px]  ">
        Information
      </h1>
      <p className="text-left text-[#4B5768] font-[400] lg:text-[20px] ">
        Provide your email for sending our exclusive offers and updates.
      </p>
      <h3 className="text-[#001B44] text-[18px]  font-[700] mb-3 lg:mt-5">
        What is the condition of the car?
      </h3>

      <Form>
        <Row className="mb-4">
          <Col>
            <Form.Control
              className="h-16 text-[#8E97A6] text-[18px] font-[500] rounded-[12px]"
              placeholder="First name"
            />
          </Col>
          <Col>
            <Form.Control
              className="h-16 text-[#8E97A6] text-[18px] font-[500] rounded-[12px]"
              placeholder="Last name"
            />
          </Col>
        </Row>
        <Row className="mb-5">
          <Col>
            <Form.Control
              className="h-16 text-[#8E97A6] text-[18px] font-[500] rounded-[12px]"
              placeholder="Email Address"
            />
          </Col>
          <Col>
            <Form.Control
              className="h-16 text-[#8E97A6] text-[18px] font-[500] rounded-[12px]"
              placeholder="Phone"
            />
          </Col>
        </Row>
      </Form>

      <h3 className="text-[#001B44] text-[18px]  font-[700] mb-2 lg:mt-5">
        What is the best way to contact you? (Optional)
      </h3>
      <Form className="flex formSelect mt-3">
        {[
          { id: 1, label: "radio1", type: "radio", value: "radio1" },
          { id: 2, type: "radio", label: "radio2", value: "radio2" },
        ].map((item: any) => (
          <div
            key={`default-${item?.type}`}
            className={`border ${
              selectedValue === item?.value
                ? "border-black"
                : "border-[#B7BCC3]"
            }  rounded-[12px] cursor-pointer w-[190px] h-[90px] px-4 py-2 mr-4`}
            onClick={() => handleDivClick(item?.value)}
          >
            <Form.Check
              type={item?.type}
              id={`default-${item?.id}`}
              checked={selectedValue === item?.value}
              onChange={() => handleDivClick(item?.value)}
            />
            <h3 className="text-[#5D6878] lg:text-[18px] py-2 font-[500]">
              {item?.label}
            </h3>
          </div>
        ))}
      </Form>

      <Form className="my-4">
        <Row>
          <Col lg={6}>
            <Form.Control
              className="h-16 text-[#8E97A6] text-[18px] font-[500] rounded-[12px]"
              placeholder="First name"
            />
          </Col>
        </Row>
      </Form>
      <p className="text-left text-[#4B5768] font-[400] text-[16px] mb-2 mt-4 ">
        By selecting Claim exclusive offer you agree to Catherine team contact
        for offer details and information.
      </p>
      <a
        href=""
        className=" block text-[#FF3363] text-[14px]  font-[700] underline"
      >
        Car condition guidelines
      </a>
    </>
  );
};

export default VehicleInformation;
