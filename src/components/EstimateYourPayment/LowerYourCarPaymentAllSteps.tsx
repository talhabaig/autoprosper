// components/StepForm.js
"use client";

import { useEffect, useState } from "react";
import { BackArrow, ArrowRight, ThankYouCircle } from "../Icons/Icons";
import Button from "../Common/Button/Button";
import UserAddressDetails from "./UserAddressDetails/UserAddressDetails";
import UserNameandEmail from "./UserNameDetails/UserNameDetails";
import {
  userNameAndEmailDetails,
  userAddressDetails,
  VehicleFormInformation,
  LoanInformationForm,
} from "../../assests/interfaces/Home/index";
import Link from "next/link";
import VehicleInformationForm from "./VehicleInformationForm/VehicleInformation";
import UserLoanInformation from "./LoanInformation/LoanInformation";

const LowerYourCarPaymentAllSteps = () => {
  const [step, setStep] = useState(1);
  const [userNameDetails, setUserNameDetails] =
    useState<userNameAndEmailDetails>();
  const [addressDetails, setUserAddressDetails] =
    useState<userAddressDetails>();
  const [vehicleInformation, setVehicleInformation] =
    useState<VehicleFormInformation>();

  const [loanInfo, setLoanInfo] = useState<LoanInformationForm>();

  const handleNext = () => {
    if (step < 5) {
      setStep((prevData) => {
        return prevData + 1;
      });
      console.log("Button states:", [
        userNameDetails,
        addressDetails,
        vehicleInformation,
        loanInfo,
      ]);
    }
  };

  const handleNameAndEmail = (value: userNameAndEmailDetails) => {
    setUserNameDetails(value);
  };

  const handleUserAddress = (value: userAddressDetails) => {
    setUserAddressDetails(value);
  };
  const handleVehicleInformation = (value: VehicleFormInformation) => {
    setVehicleInformation((prevData) => {
      return { ...prevData, ...value };
    });
  };

  const handleLoanInformation = (value: LoanInformationForm) => {
    setLoanInfo(value);
  };

  useEffect(() => {
    if (step === 5) {
      console.log("UseEffect states:", [
        userNameDetails,
        addressDetails,
        vehicleInformation,
        loanInfo,
      ]);
    }
  }, [step]);

  return (
    <>
      <section className="pb-[2rem] min-h-screen md:flex md:flex-col md:justify-center max-w-[480px] mx-auto ">
        <div className="sm:mt-[1.75rem]  p-[18px] pb-0  ">
          {step === 1 ? (
            <Link href="/">
              <span className="inline-block">
                <BackArrow className="w-[24px] h-[24px] cursor-pointer" />{" "}
              </span>
            </Link>
          ) : (
            <span className="inline-block" onClick={() => setStep(step - 1)}>
              <BackArrow className="w-[24px] h-[24px] cursor-pointer" />{" "}
            </span>
          )}
        </div>
        <div className=" mt-[24px]   px-4">
          <span className="text-primary text-[14px] block text-center mb-[4px]">
            {step === 1
              ? "Basic information"
              : step === 2
              ? "Personal information"
              : step === 3
              ? "Vehicle information"
              : step === 4
              ? "Loan information"
              : ""}
          </span>

          {step < 5 && (
            <h1 className={`heading1 mb-[18px] md:mb-[32px] `}>
              Lower your car payment now
            </h1>
          )}
          {step === 1 && (
            <span className="text-dark-3 block text-center text-[14px] leading-[150%] md:text-[16px] mb-[24px]">
              Simple, easy and fast!
            </span>
          )}

          {step === 1 && <UserNameandEmail onChange={handleNameAndEmail} />}
          {step === 2 && <UserAddressDetails onChange={handleUserAddress} />}
          {step === 3 && (
            <VehicleInformationForm onChange={handleVehicleInformation} />
          )}
          {step === 4 && (
            <UserLoanInformation onChange={handleLoanInformation} />
          )}
          {step === 5 && (
            <>
              <div className="text-center">
                <div className="flex justify-center items-center mb-[30px] md:mb-[34px]">
                  <ThankYouCircle className="w-[150px] h-[150px] md:w-[183px] md:h-[183px]" />
                </div>
                <h1 className="heading1 md:mb-[32px]">Thank you</h1>{" "}
                <p
                  className="block text-dark-3 text-[14px] leading-[150%] lg:text-[16px] [&>span]:font-bold
              [&>span]:text-dark mb-[18px] md:mb-[24px]"
                >
                  We are reviewing all of our options and reaching out to our
                  lending partners to try and find a fit for your refinance.
                </p>
              </div>
            </>
          )}
         
          {step < 6 && (
            <div className=" flex justify-center mb-[18px] md:mb-[24px]">
              {step === 2 ? (
                <Button
                  variant="small"
                  className="lg:min-h-[56px] w-full"
                  onClick={() => {
                    handleNext();
                  }}
                  children={
                    <>
                      <span className="inline-block">I Agree</span>
                      <ArrowRight className="fill-primary-text w-[1.125rem] h-[1.125rem] lg:w-[1.25rem] lg:h-[1.25rem]" />
                    </>
                  }
                />
              ) : step === 5 ? (
                <Link className="w-full" href="/">
                  <Button
                    variant="small"
                    className="lg:min-h-[56px] w-full"
                    children={
                      <>
                        <span className="inline-block">Done</span>
                        <ArrowRight className="fill-primary-text w-[1.125rem] h-[1.125rem] lg:w-[1.25rem] lg:h-[1.25rem]" />
                      </>
                    }
                  />
                </Link>
              ) : (
                <Button
                  variant="small"
                  className="lg:min-h-[56px] w-full"
                  onClick={() => {
                    handleNext();
                  }}
                  children={
                    <>
                      <span className="inline-block">Next</span>
                      <ArrowRight className="fill-primary-text w-[1.125rem] h-[1.125rem] lg:w-[1.25rem] lg:h-[1.25rem]" />
                    </>
                  }
                />
              )}
            </div>
          )}

          <div
            className="flex gap-[13px] text-dark-3 text-[14px]
             md:text-[1rem] items-center justify-between leading-[150%] mb-[18px] md:mb-6"
          >
            <hr className="block w-[40%] h-[1px] bg-dark-6 flex-[0_0_auto]" />
            <span className="flex-[0_0_auto] inline-block">Or</span>
            <hr className="block w-[40%] h-[1px] bg-dark-6 flex-[0_0_auto]" />
          </div>
          <div>
            <Button
              variant="transparent"
              className="lg:min-h-[56px] w-full bg-dark hover:!opacity-90  border-[none] text-white font-bold"
              label="Call Now"
              children={
                <>
                  <ArrowRight className="fill-primary-text w-[1.125rem] h-[1.125rem] lg:w-[1.25rem] lg:h-[1.25rem]" />
                </>
              }
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default LowerYourCarPaymentAllSteps;
