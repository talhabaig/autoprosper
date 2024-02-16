"use client";
import Button from "../../Common/Button/Button";
import RightArrow from "@/components/Icons/RightArrow";
import NavigationBar from "@/components/ui/Navigations/navigationBar";
import { ArrowRight } from "@/components/Icons/Icons";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

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
      <div
        className="mt-[-61px] md:mt-0 pt-[61px] md:pt-0 min-h-[643px] md:min-h-[710px]
        lg:min-h-[760px] xl:min-h-screen min-w-full bg-cover bg-hero-mobile sm:bg-hero bg-center 
        overflow-hidden"
      >
        <NavigationBar />

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
             text-white  font-normal"
            >
              Strive for Your{" "}
              <span className="bg-rainbow-gradient bg-clip-text text-transparent">
                Dreams,
              </span>{" "}
              Tailored to Your Resources.
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
      </div>
    </>
  );
}
