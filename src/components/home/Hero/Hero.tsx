"use client";
import Button from "../../Common/Button/Button";
import RightArrow from "@/components/Icons/RightArrow";
import NavigationBar from "@/components/ui/Navigations/navigationBar";
import { ArrowRight } from "@/components/Icons/Icons";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <header
        className="mt-[-61px] md:mt-0 pt-[61px] md:pt-0 min-h-[643px] md:min-h-[710px]
        lg:min-h-[760px] xl:min-h-screen min-w-full bg-cover 
        overflow-hidden relative"
      >
        <NavigationBar />
        
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            src="/images/cover-mobile.png"
            width={360}
            height={632}
            alt="New Car Models - Explore the Latest Deals and Offers on Brand New Cars"
            className={`w-full h-full object-cover reletive sm:!hidden`}
          />
          <Image
            src="/images/cover.png"
            width={1728}
            height={952}
            alt="New Car Models - Explore the Latest Deals and Offers on Brand New Cars"
            className={`w-full h-full object-cover reletive hidden sm:!block`}
          />
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="mt-[60px] kg:mt-[90px]  xl:mt-[120px] container  h-full 
           text-center mx-auto my-auto flex flex-col items-center gap-[20px] lg:gap-[32px]"
        >
          <div
            className="flex flex-col gap-[18px] max-w-[330px] md:max-w-[415px] lg:max-w-[600px] 
             xl:max-w-[700px] 2xl:max-w-[760px]"
          >
            <h1
              className="text-[32px] leading-[130%] lg:text-[44px] xl:text-[50px] 2xl:text-[56px]
             text-white  font-normal md:mx-[30px] lg:mx-[40px] xl:mx-[60px] "
            >
              Drive Your{" "}
              <span className="bg-rainbow-gradient bg-clip-text text-transparent">
                Dreams,
              </span>{" "}
             Within Your Means.
            </h1>
            <p
              className="text-white  text-[14px] leading-[150%] md:text-[16px] lg:text-[20px] 
               font-normal mb-0 lg:px-[4px] xl:px-[3.4rem] 2xl:px-[6rem]"
            >
              Start your car ownership journey with our straightforward advice
              and competitive deals tailored for the smart buyers—just a
              seamless path to getting the keys to your next car
            </p>
          </div>
          <Button
            variant="primary"
            label="Get Started"
            children={
              <ArrowRight className="fill-primary-text w-[1.125rem] h-[1.125rem] lg:w-[1.25rem] lg:h-[1.25rem]" />
            }
          />
        </div>
      </header>
    </>
  );
}
