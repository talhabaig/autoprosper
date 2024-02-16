import React from "react";
import NavigationBar from "@/components/ui/Navigations/navigationBar";
import Button from "../../Common/Button/Button";
import { ArrowRight } from "../../Icons/Icons";
import Link from "next/link";
import ZipCodeService from "./ZipCode/page";

const ServiceBanner = () => {
  return (
    <>
      <section
        className="mt-[-61px] md:mt-0 pt-[61px] md:pt-0 relative min-h-[631px] lg:min-h-[720px]  xl:min-h-screen bg-[url('/servicepage/servicePageMobile.png')]
          sm:bg-[url('/servicepage/servicePageBanner.png')] bg-no-repeat bg-cover bg-center"
      >
        <NavigationBar />
        <div
          className="container absolute  top-[15%]
         sm:top-1/2  sm:-translate-y-1/2  left-1/2 -translate-x-1/2 "
        >
          <div
            className={`max-w-[320px] mx-auto sm:mx-0 sm:max-w-[85%] md:max-w-[61%] lg:max-w-[50%] `}
          >
            <h1 className="heading1 mb-[18px]  text-white sm:text-left">
              Discover a simpler{" "}
              <span className="gradientTextContent2"> car service </span>{" "}
              experience.
            </h1>
            <p
              className="paragraph-large text-center text-white mb-[32px] 
            sm:text-left xl:mb-[1.5rem] 2xl:mb-[2rem]"
            >
              The quality of a dealership service center, without leaving home.
            </p>
            <div className="flex justify-center items-center sm:justify-start">
              <Link href="/first-time-buyer">
                <Button
                  variant="primary"
                  label="Get Started"
                  className="lg:min-w-[184px]"
                  children={
                    <ArrowRight className="fill-primary-text w-[1.125rem] h-[1.125rem] lg:w-[1.25rem] lg:h-[1.25rem]" />
                  }
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="container absolute bottom-[-100px] left-1/2 -translate-x-1/2
          lg:bottom-[-80px]">
          <div className="">
            <ZipCodeService />
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceBanner;
