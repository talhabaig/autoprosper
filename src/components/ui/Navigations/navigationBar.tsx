"use client";
import React, { useState, useEffect } from "react";
import { UserIcon } from "lucide-react";
import BurgerIcon from "../../Icons/BurgerIcon";
import { Button } from "../button";
import { Sheet, SheetTrigger, SheetContent, SheetItem } from "../sheet";
import Image from "next/image";
import Shop from "./NavigationItems/shop";
import { NavigationsType, NavigationContentType } from "./type";
import SellTrade from "./NavigationItems/sellTrade";
import Service from "./NavigationItems/service";
import Finance from "./NavigationItems/finance";
import Learn from "./NavigationItems/learn";
import Help from "./NavigationItems/help";
import Link from "next/link";
import { DropIcon, UserIconNav } from "@/components/Icons/Icons";
import { DoubleEllipseGradient } from "../ellipseGradient";

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
  const [scrolled, setScrolled] = useState<boolean>(false);

  const handleCloseContent = () => {
    setSelectedItem(null);
  };

  const handleSheetItemClick = (index: number) => {
    const clickedItem = navigationData[index];
    if (
      selectedItem &&
      clickedItem &&
      selectedItem.title === clickedItem.title
    ) {
      handleCloseContent();
    } else {
      setSelectedItem(clickedItem);
    }
  };

  const handleBackButton = () => {
    setSelectedItem(null);
  };

  const handleMouseLeave = () => {
    handleCloseContent();
  };

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > 20) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <>
      <div
        className={`md:hidden flex p-[15px] justify-between items-center 
        fixed top-0 left-0 w-full h-auto z-[10] ${scrolled ? "bg-white" : ""}`}
      >
        <Sheet>
          <Link href="/">
            {variant === "dark" ? (
              <Image
                src="/images/logo-dark.png"
                alt="logo"
                width="152"
                height="32"
              />
            ) : scrolled ? (
              <Image
                src="/images/logo-dark.png"
                alt="logo"
                width="152"
                height="32"
              />
            ) : (
              <Image
                src="/images/logo.png"
                alt="logo"
                width="152"
                height="32"
              />
            )}
          </Link>
          <div className="flex flex-row items-center gap-[18px]">
            <div className="bg-custom rounded-full p-1">
              <UserIconNav />
            </div>
            <SheetTrigger asChild>
              <button
                data-collapse-toggle="navbar-default"
                type="button"
                aria-controls="navbar-default"
                aria-expanded="false"
              >
                <span className="sr-only">Open div menu</span>
                <BurgerIcon
                  fill={variant === "light" && !scrolled ? "white" : "black"}
                />
              </button>
            </SheetTrigger>
          </div>
          <SheetContent
            className="w-full min-h-full px-0 pt-[84px] transition-all overflow-y-scroll overflow-x-hidden"
            selectedItem={selectedItem}
            onBack={handleBackButton}
          >
            <DoubleEllipseGradient className="md:hidden absolute bottom-0 -z-10 md:right-0" />
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
      <div onMouseLeave={handleMouseLeave}>
        <div
          className={`w-full relative z-30 ${
            selectedItem
              ? "bg-white md:border-b border-dark-6"
              : "bg-transparent"
          }`}
        >
          <div className="hidden md:flex mx-auto justify-between items-center md:w-screen lg:py-[30px] md:py-[15px] container">
            <Link href="/">
              {variant === "dark" || selectedItem ? (
                <img src="/images/logo-dark.png" alt="logo" />
              ) : (
                <img src="/images/logo.png" alt="logo" />
              )}
            </Link>

            <div className="inline-flex xl:gap-[48px]">
              {desktopNavigationData.map((navigation, index) => (
                <div
                  key={index}
                  className={`inline-flex relative md:gap-[6px] lg:gap-[12px] h-10 w-max items-center justify-center px-4 py-2 text-sm  lg:text-base lg:leading-[24px] font-medium transition-colors cursor-pointer ${
                    variant === "light" && !selectedItem
                      ? "text-white"
                      : "text-dark-3"
                  }`}
                  onMouseEnter={() => handleSheetItemClick(index)}
                  onClick={handleMouseLeave}
                >
                  {selectedItem?.title === navigation.title && (
                    <div className="bg-green rounded-full absolute -bottom-[30px] w-full h-[3px] pointer-events-none"></div>
                  )}
                  <span
                    className={
                      selectedItem?.title === navigation.title
                        ? "text-dark"
                        : ""
                    }
                  >
                    {navigation.title}
                  </span>
                  <DropIcon
                    className={`top-[1px] ml-1 h-[4px] w-[8px] transition duration-200 ${
                      selectedItem?.title === navigation.title
                        ? "rotate-180"
                        : ""
                    }`}
                    aria-hidden="true"
                  />
                </div>
              ))}
            </div>
            <Link href="/login">
              <Button
                variant="gradient"
                className="text-dark md:h-[36px] md:w-[85px] font-bold"
              >
                SIGNUP
              </Button>
            </Link>
          </div>
        </div>
        <div className={`relative ${selectedItem ? "overlay" : ""}`}>
          {selectedItem && (
            <div
              className="hidden md:block absolute top-15 left-0 right-0 bg-white z-30"
              id="content-area"
            >
              {selectedItem.content}
            </div>
          )}
          {selectedItem && (
            <div
              onMouseEnter={handleMouseLeave}
              className="fixed z-20 inset-0 bg-dark opacity-[0.4] h-screen"
            ></div>
          )}
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
