import { SheetSectionItems } from "@/components/ui/sheet";
import { Card } from "@/components/ui/card";
import {
  ConvertibleIcon,
  CoupeIcon,
  HatchBackIcon,
  MiniVanIcon,
  SUVIcon,
  SedanIcon,
  TruckIcon,
  WagonIcon,
} from "@/components/Icons/BodyStyleIcons";

import { ArrowRight } from "lucide-react";
import NavigationItemsWrapper from "./navigationItemsWrapper";
import React from "react";
import Link from "next/link";

const Shop = () => {
  const navigationData = [
    {
      label: "Shop used car",
      link: "/find-or-make",
    },
    {
      label: "Shop new car",
      link: "/customize",
    },
  ];

  const bodyStyles = [
    {
      label: "SUV",
      icon: (
        <SUVIcon className="relative z-10 w-[24.87px] h-[9.61px] md:w-[44px] md:h-[17px]" />
      ),
    },
    {
      label: "Truck",
      icon: (
        <TruckIcon className="relative z-10 w-[24.87px] h-[9.31px] md:w-[44px] md:h-[17px]" />
      ),
    },
    {
      label: "Sedan",
      icon: (
        <SedanIcon className="relative z-10 w-[24.87px] h-[8.01px] md:w-[44px] md:h-[15px]" />
      ),
    },
    {
      label: "Hatchback",
      icon: (
        <HatchBackIcon className="relative z-10 w-[24.87px] h-[8.63px] md:w-[44px] md:h-[16px]" />
      ),
    },
    {
      label: "Coupe",
      icon: (
        <CoupeIcon className="relative z-10 w-[24.87px] h-[8.14px] md:w-[44px] md:h-[15px]" />
      ),
    },
    {
      label: "Wagon",
      icon: (
        <WagonIcon className="relative z-10 w-[24.87px] h-[8.04px] md:w-[44px] md:h-[15px]" />
      ),
    },
    {
      label: "Minivan",
      icon: (
        <MiniVanIcon className="relative z-10 w-[24.87px] h-[9.62px] md:w-[44px] md:h-[18px]" />
      ),
    },
    {
      label: "Convertible",
      icon: (
        <ConvertibleIcon className="relative z-10 fill-dark w-[24.87px] h-[7.49px] md:w-[44px] md:h-[14px]" />
      ),
    },
  ];

  return (
    <NavigationItemsWrapper>
      <div className="flex flex-col md:flex-row md:divide-x-[1px] md:divide-dark-6">
        <SheetSectionItems title="SEARCH ALL" items={navigationData} />
        <div className="px-[15px] md:pl-[36px] lg:pl-[72px] mt-[20px] md:mt-0 w-full">
          <div className="text-gray text-xs font-bold mb-[15px] tracking-[1.2px]">
            BROWSE BY BODY STYLE
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-[12px] md:gap-[24px] ">
            {bodyStyles.map((style, index) => (
              <Link href="/inventory">
                <Card
                  key={"bodystyle" + index}
                  className="group md:max-h-[141px] md:max-w-[216px] group rounded-xl relative bg-white flex flex-col gap-[19px] justify-center items-start px-[12px] pt-[12px] md:pt-[30px] pb-[15px] md:pl-3 md:p-6  shadow-none border-[1px] md:gap-[38px] border-dark-5 hover:border-dark"
                >
                  <div className="flex h-full flex-col justify-center items-center group-hover:fill-dark">
                    {style.icon}
                  </div>
                  <div className="text-[14px] leading-[17.64px] font-medium text-dark-3 group-hover:text-dark">
                    {style.label}
                  </div>
                  <div className="hidden group-hover:flex items-center justify-center absolute bg-green rounded-full top-2 right-2 md:top-3 md:right-3 w-[18px] h-[18px] md:w-[26px] md:h-[26px]">
                    <ArrowRight className="text-dark w-[8px] h-[8px] md:w-[16px] md:h-[16px]" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </NavigationItemsWrapper>
  );
};

export default Shop;
