"use client";
import { Button } from "@/components/ui/button";
import RightArrow from "@/components/Icons/RightArrow";
import NavigationBar from "@/components/ui/Navigations/navigationBar";


export default function Hero() {
  return (
    <div className="min-h-screen min-w-full bg-cover bg-hero bg-center">
      <NavigationBar />
      <div className="mt-[60px] md:mt-[120px] max-w-[330px] md:max-w-[711px] h-screen text-center mx-auto my-auto flex flex-col items-center gap-[20px] md:gap-[32px]">
        <div className="flex flex-col gap-[18px]">
          <h1 className="text-[32px] leading-10 md:text-[64px] text-white md:leading-[71px] font-normal">
            Strive for Your{" "}
            <span className="bg-rainbow-gradient bg-clip-text text-transparent">
              Dreams,
            </span>{" "}
            Tailored to Your Resources.
          </h1>
          <p className="text-white md:px-10 text-[14px] md:text-[20px] leading-[21px] font-normal">
            Start your car ownership journey with our straightforward advice and
            competitive deals tailored for the smart buyers—just a seamless path
            to getting the keys to your next car
          </p>
        </div>
        <Button
          variant="gradient"
          className="py-[14px] px-7 md:px-[18px] md:py-9 md:w-[211px] font-bold"
        >
          Get Started{" "}
          <span className="ml-[6px] md:ml-[10px]">
            <RightArrow />
          </span>
        </Button>
      </div>
    </div>
  );
}
