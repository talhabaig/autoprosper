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
import { EllipseGradient } from "@/components/ui/EllipseGradient";
import { ArrowRight } from "lucide-react";

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
      icon: <ConvertibleIcon className="relative z-10" />,
    },
  ];

  return (
    <div className="flex flex-col md:flex-row  lg:pl-40 lg:py-[30px] md:pl-10 md:py-[15px] md:divide-x-[1px] md:divide-gray">
      <SheetSectionItems title="SEARCH ALL" items={navigationData} />
      <div className="px-[15px] md:px-[36px] mt-[20px] md:mt-0">
        <div className="text-gray text-xs font-bold mb-[15px] tracking-[1.2px]">
          BROWSE BY BODY STYLE
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-[15px]">
          {bodyStyles.map((style) => (
            <Card className="group rounded-xl relative bg-white flex flex-col gap-[19px] justify-center items-start px-[12px] pt-[30px] pb-[15px] md:pl-3 md:p-6 lg:pl-6 lg:pr-[46px] shadow-none border-[1px] lg:gap-[24px] border-dark-5 hover:border-dark">
              <div className="flex h-full flex-col justify-center items-center">
                {style.icon}
              </div>
              <div className="font-normal text-xs text-dark-muted">
                {style.label}
              </div>
              <div className="hidden group-hover:block absolute bg-green rounded-full top-2 right-2">
                <ArrowRight width={16} height={16} className="text-dark p-1 " />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
