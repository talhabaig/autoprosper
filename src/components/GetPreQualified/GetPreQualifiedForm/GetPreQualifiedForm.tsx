"use client";
import Button from "@/components/Common/Button/Button";
import CustomInput from "@/components/Common/InputField/InputField";
import React, { useState } from "react";
import Select from "react-select";
import Link from "next/link";

import { FormData } from "../../../assests/interfaces/Home/index";

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const GetPreQuallifiedForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    middleName: "",
    lastName: "",
    dateOfBirth: "",
    city: "",
    state: "",
    state2: "",
    SSN: "",
    monthlyIncome: "",
  });
  const [agreed, setAgreed] = useState<boolean>(false);
  const InputHandler = (fieldName: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
    console.log("Email changed:", formData);
    // You can do more with the email value here
  };

  return (
    <>
      <section className=" max-w-[940px] mx-auto">
        <div className="py-[3rem]   2xl:py-[4rem] 3xl:py-[6rem]">
          <div className="pb-8 md:pb-12 px-[15px] border-b border-solid border-dark-6  max-w-[940px] mx-auto">
            <div className="mb-[18px] md:mb-8 max-w-[560px]">
              <h3 className="heading4 font-bold">Personal Information</h3>
              <p className="text-dark-3 text-[0.875rem] md:text-[16px] leading-[150%]">
                To ensure accurate terms, use the information that matches your
                driver's license or other government issued IDs.
              </p>
            </div>
            <div className="flex items-center justify-between flex-wrap gap-[12px] md:gap-[24px]">
              <CustomInput
                type="text"
                placeholder="First Name"
                onChange={(value) => InputHandler("firstName", value)}
                className="w-full sm:w-[48%] md:w-[31%] xl:w-[31.5%] gap-[18px] md:gap-8"
              />
              <CustomInput
                type="text"
                placeholder="Middle Name (Optional)"
                onChange={(value) => InputHandler("middleName", value)}
                className="w-full sm:w-[48%] md:w-[31%] xl:w-[31.5%] gap-[18px] md:gap-8"
              />
              <CustomInput
                type="text"
                placeholder="Last Name"
                onChange={(value) => InputHandler("lastName", value)}
                className="w-full sm:w-[48%] md:w-[31%] xl:w-[31.5%] gap-[18px] md:gap-8"
              />
              <CustomInput
                type="text"
                placeholder="Date of Birth"
                onChange={(value) => InputHandler("dateOfBirth", value)}
                className="w-full sm:w-[48%] md:w-[31%] xl:w-[31.5%] gap-[18px] md:gap-8"
              />
            </div>
          </div>
          <div className="py-8 md:py-12  px-[15px]  border-b border-solid border-dark-6  max-w-[940px] mx-auto">
            <div className="mb-[18px] md:mb-8 max-w-[560px]">
              <h3 className="heading4 font-bold">City & State</h3>
              <p className="text-dark-3 text-[0.875rem] md:text-[16px] leading-[150%]">
                Tell us the city and state you currently live in.
              </p>
            </div>
            <div className="flex items-center justify-between flex-wrap gap-[12px] md:gap-[24px]">
              <CustomInput
                type="text"
                placeholder="City"
                onChange={(value) => InputHandler("city", value)}
                className="w-full sm:w-[48%] md:w-[31%] xl:w-[31.5%] gap-[18px] md:gap-8"
              />
              <div className="w-full sm:w-[48%] md:w-[31%] xl:w-[31.5%] gap-[18px] md:gap-8">
                <Select
                  options={options}
                  onChange={(selectedOption) => {
                    if (selectedOption) {
                      const value = selectedOption.value;
                      setFormData((prevData) => {
                        const updatedData = { ...prevData, state: value };
                        console.log("Updated Form Data:", updatedData);
                        return updatedData;
                      });
                    }
                  }}
                  placeholder="State"
                  className="rectSelectWrapper"
                />
              </div>
              <div className="w-full sm:w-[48%] md:w-[31%] xl:w-[31.5%] gap-[18px] md:gap-8">
                <Select
                  options={options}
                  onChange={(selectedOption) => {
                    if (selectedOption) {
                      const value = selectedOption.value;
                      setFormData((prevData) => {
                        const updatedData = { ...prevData, state2: value };
                        console.log("Updated Form Data:", updatedData);
                        return updatedData;
                      });
                    }
                  }}
                  placeholder="State"
                  className="rectSelectWrapper"
                />
              </div>
            </div>
          </div>
          <div className="py-8 md:py-12  px-[15px]  border-b border-solid border-dark-6  max-w-[940px] mx-auto">
            <div className="mb-[18px] md:mb-8 max-w-[560px]">
              <h3 className="heading4 font-bold">Social Security & Income</h3>
              <p className="text-dark-3 text-[0.875rem] md:text-[16px] leading-[150%]">
                Your data is secure and only used to verify your identity. Your
                credit score will not be impacted.
              </p>
            </div>
            <div className="flex items-center  flex-wrap gap-[12px] md:gap-[24px]">
              <CustomInput
                type="number"
                placeholder="Last 4 Digit of SSN"
                onChange={(value) => InputHandler("SSN", value)}
                className="w-full sm:w-[48%] md:w-[31%] xl:w-[31.5%] gap-[18px] md:gap-8"
              />
              <CustomInput
                type="number"
                placeholder="Montly Income"
                onChange={(value) => InputHandler("monthlyIncome", value)}
                className="w-full sm:w-[48%] md:w-[31%] xl:w-[31.5%] gap-[18px] md:gap-8"
              />
            </div>
          </div>

          <div className="my-8 md:mt-12 flex  px-[15px]  items-start md:items-center gap-[12px] leading-[150%] ">
            <input
              className="mt-[4px] md:mt-0 w-4 h-4 md:w-[20px] md:h-[16px] cursor-pointer"
              type="checkbox"
              id="agreed"
              name="agreed"
              value="agreed"
              onChange={() => setAgreed(!agreed)}
            />
            <div>
              <span>I have read and accepted the pre-qualification.</span>{" "}
              <span className="text-dark text-[14px] md:text-[1rem] font-bold underline hover:text-status-info inline-block cursor-pointer">
                terms and conditions.
              </span>
            </div>
          </div>
          <div className="px-[15px]">
            <Link href="/suggestion-for-you">
              <Button
                variant="primary"
                label="Get Pre-Qualified"
                className="w-full md:w-[initial]  "
                onClick={() => {
                  if (agreed === true) {
                    console.log(agreed && " checked!", "Form Data:", formData);
                  }
                }}
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetPreQuallifiedForm;
