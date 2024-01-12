"use client";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import UserIcon from "@/components/Icons/UserIcon";
import BurgerIcon from "@/components/Icons/BurgerIcon";
import { Input } from "@/components/ui/input";
import RightArrow from "@/components/Icons/RightArrow";

const navigationData = [
  {
    title: "Shop",
    content: <p>shop content</p>,
  },
  {
    title: "Sell/Trade",
    content: <p>Sell/Trade content</p>,
  },
  {
    title: "Service",
    content: <p>Service content</p>,
  },
  {
    title: "Finance",
    content: <p>Finance content</p>,
  },
  {
    title: "Learn",
    content: <p>Learn content</p>,
  },
];

export default function Hero() {
  return (
      <div className="min-h-screen min-w-full bg-cover bg-hero bg-center">
        <div className="md:hidden flex p-[15px] justify-between items-center">
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open div menu</span>
            <BurgerIcon />
          </button>
          <Image src="/images/logo.png" alt="logo" width="200" height="42" />
          <UserIcon />
        </div>
        <div className="hidden md:flex mx-auto justify-between items-center max-w-screen-2xl lg:px-40 lg:py-[30px] md:px-10 md:py-[15px]">
          <Image src="/images/logo.png" alt="logo" width="200" height="42" />
          <NavigationMenu className="hidden md:inline">
            <NavigationMenuList>
              {navigationData.map((navigation, index) => (
                <NavigationMenuItem key={index + "-nav"}>
                  <NavigationMenuTrigger>
                    {navigation.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    {navigation.content}
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <Button
            variant="gradient"
            className="text-dark px-5 py-2.5 font-bold"
          >
            SIGNUP
          </Button>
        </div>
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
              Start your car ownership journey with our straightforward advice
              and competitive deals tailored for the smart buyers—just a
              seamless path to getting the keys to your next car
            </p>
          </div>
          <Button
            variant="gradient"
            className="py-[14px] px-7 md:px-[18px] md:py-9 md:w-[211px] font-bold"
          >
            Get Started <span className="ml-[6px] md:ml-[10px]"><RightArrow /></span>
          </Button>
        </div>
      </div>
  );
}
