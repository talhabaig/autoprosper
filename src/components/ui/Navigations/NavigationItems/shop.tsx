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
// import { EllipseGradient } from "@/components/ui/EllipseGradient";
import { ArrowRight } from "lucide-react";
import NavigationItemsWrapper from "./navigationItemsWrapper";
import React from "react";

const Shop = () => {
  const navigationData = [
    {
      label: "Shop used car",
      link: "#",
    },
    {
      label: "Shop new car",
      link: "#",
    },
  ];

  const bodyStyles = [
    {
      label: "SUV",
      icon: <SUVIcon className="relative z-10" />,
    },
    {
      label: "Truck",
      icon: <TruckIcon className="relative z-10" />,
    },
    {
      label: "Sedan",
      icon: <SedanIcon className="relative z-10" />,
    },
    {
      label: "Hatchback",
      icon: <HatchBackIcon className="relative z-10" />,
    },
    {
      label: "Coupe",
      icon: <CoupeIcon className="relative z-10" />,
    },
    {
      label: "Wagon",
      icon: <WagonIcon className="relative z-10" />,
    },
    {
      label: "Minivan",
      icon: <MiniVanIcon className="relative z-10" />,
    },
    {
      label: "Convertible",
      icon: <ConvertibleIcon className="relative z-10 fill-dark" />,
    },
  ];

  return (
    <NavigationItemsWrapper>
      <div className="flex flex-col md:flex-row md:divide-x-[1px] md:divide-dark-6">
      <SheetSectionItems title="SEARCH ALL" items={navigationData} />
      <div className="px-[15px] md:px-[36px] lg:px-[72px] mt-[20px] md:mt-0 w-full">
        <div className="text-gray text-xs font-bold mb-[15px] tracking-[1.2px]">
          BROWSE BY BODY STYLE
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-[24px] ">
          {bodyStyles.map((style, index) => (
            <Card key={'bodystyle'+index} className="group md:max-h-[141px] md:max-w-[216px] group rounded-xl relative bg-white flex flex-col gap-[19px] justify-center items-start px-[12px] pt-[30px] pb-[15px] md:pl-3 md:p-6  shadow-none border-[1px] md:gap-[38px] border-dark-5 hover:border-dark">
              <div className="flex h-full flex-col justify-center items-center group-hover:fill-dark">
              {style.icon}
              </div>
              <div className="font-normal text-xs text-dark-3 group-hover:text-dark">
                {style.label}
              </div>
              <div className="hidden group-hover:flex items-center justify-center absolute bg-green rounded-full top-3 right-3 w-[26px] h-[26px]">
                <ArrowRight width={16} height={16} className="text-dark" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
    </NavigationItemsWrapper>
  );
};

export default Shop;
