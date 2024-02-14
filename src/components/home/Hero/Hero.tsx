"use client";
import { Button } from "@/components/ui/button";
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
      <div className="mt-[-61px] md:mt-0 pt-[61px] md:pt-0 min-h-[643px] md:min-h-screen min-w-full bg-cover bg-hero-mobile md:bg-hero bg-center overflow-hidden">
        <NavigationBar />

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="mt-[60px] md:mt-[120px] container md:p-0 md:max-w-[711px] h-full md:h-screen 
         text-center mx-auto my-auto flex flex-col items-center gap-[20px] md:gap-[32px]"
        >
          <div className="flex flex-col gap-[18px]">
            <h1 className="text-[32px] leading-[41.6px] md:text-[56px] text-white md:leading-[72.8px] font-normal">
              Strive for Your{" "}
              <span className="bg-rainbow-gradient bg-clip-text text-transparent">
                Dreams,
              </span>{" "}
              Tailored to Your Resources.
            </h1>
            <p className="text-white md:px-10 text-[14px] leading-[21px] md:text-[20px] md:leading-[30px] font-normal">
              Start your car ownership journey with our straightforward advice
              and competitive deals tailored for the smart buyers—just a
              seamless path to getting the keys to your next car
            </p>
          </div>
          <Button
            variant="gradient"
            className="py-[18px] px-6 md:px-[32px] md:py-[22px] w-[153px] h-[46px] md:!h-[56px] md:!w-[184px] font-bold text-sm md:text-[16px] md:leading-[20.16px] text-dark"
          >
            Get Started{" "}
            <span className="ml-[6px] md:ml-[10px]">
              <ArrowRight className="h-[18px] w-[18px] md:h-6 md:w-6" />
            </span>
          </Button>
        </div>
        {/* </motion.div> */}
      </div>
    </>
  );
}
