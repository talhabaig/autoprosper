import React from "react";
import NavigationBar from "@/components/ui/Navigations/navigationBar";
import Button from "../../Common/Button/Button";
import { ArrowRight } from "../../Icons/Icons";
import Link from "next/link";
import ZipCodeService from "./ZipCode/page";
import Image from "next/image";

const ServiceBanner = () => {
  return (
    <>
      <header
        className="mt-[-61px] md:mt-0 pt-[61px] md:pt-0 relative min-h-[631px] lg:min-h-[720px] 
          xl:min-h-screen  ">

        <NavigationBar />

        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            src="/servicepage/servicePageMobile.png"
            width={360}
            height={632}
            alt="All Services - Explore the Services and Latest Deals and Offers on Cars"
            className={`w-full h-full object-cover reletive sm:!hidden`}
          />
          <Image
            src="/servicepage/servicePageBanner.png"
            width={1728}
            height={952}
            alt="All Services - Explore the Services and Latest Deals and Offers on Cars"
            className={`w-full h-full object-cover reletive hidden sm:!block`}
          />
        </div>

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
        <div
          className="container absolute bottom-[-100px] left-1/2 -translate-x-1/2
          lg:bottom-[-80px]"
        >
          <div className="">
            <ZipCodeService />
          </div>
        </div>
      </header>
    </>
  );
};

export default ServiceBanner;
