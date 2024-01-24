// components/StepForm.js
"use client";

import { useState } from "react";
import UserNameandEmail from "./UserNameDetails/UserNameDetails";
import { BackArrow, ArrowRight } from "../Icons/Icons";
import NavigationBar from "../ui/Navigations/navigationBar";
import Button from "../Common/Button/Button";
import UserAddressDetails from "./UserAddressDetails/UserAddressDetails";
import {
  userNameAndEmailDetails,
  userAddressDetails,
} from "../../assests/interfaces/Home/index";

const LowerYourCarPaymentAllSteps = () => {
  const [step, setStep] = useState(1);
  const [userNameDetails, setUserNameDetails] =
    useState<userNameAndEmailDetails>();
  const [addressDetails, setUserAddressDetails] =
    useState<userAddressDetails>();

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
      console.log("step", step);
    } else if (step === 2) {
      console.log("Step:", step);
      console.log("Logging states:", userNameDetails, addressDetails);
      setStep(step + 1);
    }
  };

  const handleNameAndEmail = (value: userNameAndEmailDetails) => {
    setUserNameDetails(value);
    console.log("userNameDetails", userNameDetails);
  };

  const handleUserAddress = (value: userAddressDetails) => {
    setUserAddressDetails(value);
    console.log("userNameDetails", addressDetails);
  };

  return (
    <>
      <NavigationBar variant="dark" />
      <section>
        <div className="max-w-[480px] mx-auto px-4">
          <h1 className="heading1 md:mb-[32px]">Lower your car payment now</h1>
          {step > 1 && step < 4 && (
            <div className=" py-[10px] mb-[28px]">
              <span className="inline-block" onClick={() => setStep(step - 1)}>
                <BackArrow className="w-[24px] h-[24px] cursor-pointer" />{" "}
              </span>
            </div>
          )}

          {step === 1 && <UserNameandEmail onChange={handleNameAndEmail} />}
          {step === 2 && <UserAddressDetails onChange={handleUserAddress} />}
          {step === 3 && <div>abc</div>}
          {step === 4 && <div>xyz</div>}
        </div>
        {step < 4 && (
          <div className="container flex justify-center lg:justify-end items-center py-[12px] lg:py-[30px]">
            <Button
              variant="small"
              className="lg:min-h-[56px]"
              onClick={() => {
                handleNext();
              }}
              children={
                <>
                  <span className="inline-block">Continue</span>
                  <ArrowRight className="fill-primary-text w-[1.125rem] h-[1.125rem] lg:w-[1.25rem] lg:h-[1.25rem]" />
                </>
              }
            />
          </div>
        )}
      </section>
    </>
  );
};

export default LowerYourCarPaymentAllSteps;
