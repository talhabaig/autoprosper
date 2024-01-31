"use client";

import { UserIcon } from "lucide-react";
import BurgerIcon from "../../Icons/BurgerIcon";
import { Button } from "../button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetItem,
  SheetDescription,
} from "../sheet";
import Image from "next/image";
import { useState } from "react";
import Shop from "./NavigationItems/shop";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./navigation";
import { NavigationsType, NavigationContentType } from "./type";
import SellTrade from "./NavigationItems/sellTrade";
import Service from "./NavigationItems/service";
import Finance from "./NavigationItems/finance";
import Learn from "./NavigationItems/learn";
import Help from "./NavigationItems/help";
import Link from "next/link";

interface NavigationBarInterface {
  variant?: "light" | "dark";
}

const NavigationBar: React.FC<NavigationBarInterface> = ({
  variant = "light",
}) => {
  const navigationData: NavigationsType = [
    {
      title: "Shop",
      content: <Shop />,
    },
    {
      title: "Sell/Trade",
      content: <SellTrade />,
    },
    {
      title: "Service",
      content: <Service />,
    },
    {
      title: "Finance",
      content: <Finance />,
    },
    {
      title: "Learn",
      content: <Learn />,
    },
    {
      title: "Help",
      content: <Help />,
      mobileOnly: true,
    },
  ];

  const desktopNavigationData = navigationData.filter((o) => !o.mobileOnly);

  const [selectedItem, setSelectedItem] =
    useState<NavigationContentType | null>(null);

  const handleSheetItemClick = (index: number) => {
    setSelectedItem(navigationData[index]);
  };

  const handleBackButton = () => {
    setSelectedItem(null);
  };

  return (
    <>
      <div className="md:hidden flex p-[15px] justify-between items-center h-full">
        <Sheet>
          <Link href="/">
            <Image src="/images/logo.png" alt="logo" width="152" height="32" />
          </Link>
          <div className="flex flex-row items-center gap-[18px]">
            <UserIcon width={24} height={24} stroke="#fff" />
            <SheetTrigger asChild>
              <button
                data-collapse-toggle="navbar-default"
                type="button"
                aria-controls="navbar-default"
                aria-expanded="false"
              >
                <span className="sr-only">Open div menu</span>
                <BurgerIcon fill={variant === "light" ? "white" : "black"} />
              </button>
            </SheetTrigger>
          </div>
          <SheetContent
            className="w-full min-h-full px-0 pt-[84px] transition-all overflow-y-scroll overflow-x-hidden"
            selectedItem={selectedItem}
            onBack={handleBackButton}
          >
            {!selectedItem && (
              <div className="divide-y h-full first:border-t-2 z-10 divide-gray-100 border-y-[1px] border-border-color">
                {navigationData.map((nav, index) => (
                  <SheetItem
                    key={index}
                    label={nav.title}
                    onClick={() => handleSheetItemClick(index)}
                  />
                ))}
              </div>
            )}
            {selectedItem?.content}
          </SheetContent>
        </Sheet>
      </div>
      <div className="w-full relative">
        <div className="hidden md:flex mx-auto justify-between items-center md:w-screen lg:py-[30px] md:py-[15px] container">
          <Link href="/">
            {variant === "dark" ? (
              <Image
                src="/images/logo-dark.png"
                alt="logo"
                width="200"
                height="42"
              />
            ) : (
              <Image
                src="/images/logo.png"
                alt="logo"
                width="200"
                height="42"
              />
            )}
          </Link>

          <NavigationMenu className="hidden md:inline">
            <NavigationMenuList>
              {desktopNavigationData.map((navigation, index) => (
                <NavigationMenuItem id={index+ "-nav"} key={index + "-nav"}>
                  <NavigationMenuTrigger variant={variant}>
                    {navigation.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white md:w-screen py-[10px] transition-all overflow-y-scroll">
                    {navigation.content}
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <Link href="/login">
            <Button
              variant="gradient"
              className="text-dark px-5 py-2.5 font-bold"
            >
              SIGNUP
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
