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

const Shop = () => {
  const navigationData = [
    {
      label: "Shop used car",
      link: '#',
    },
    {
      label: "Shop new car",
      link: '#',
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
    <div className="flex-col">
      <SheetSectionItems title="SEARCH ALL" items={navigationData}/>
      <div className="px-[15px] mt-[20px]">
        <div className="text-gray text-xs font-bold mb-[15px] tracking-[1.2px]">
          BROWSE BY BODY STYLE
        </div>
        <div className="grid grid-cols-3 w-full gap-[15px]">
          {bodyStyles.map((style) => (
            <Card className="rounded-xl border-0 bg-white flex flex-col gap-[19px] justify-center items-center pt-[30px] pb-[15px] shadow-xl">
              <div className="flex h-full flex-col relative justify-center items-center">
                {style.icon}
                <EllipseGradient
                  width="47"
                  height="47"
                  className="absolute z-0 -bottom-[8px]"
                />
              </div>
              <div className="font-bold text-xs text-dark-muted">
                {style.label}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
