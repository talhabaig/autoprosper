import LocationIcon from "../../Icons/LocationIcon";
import { Card, GradientCard } from "@/components/ui/card";
import Image from 'next/image';
import { CarouselProps } from "./type";
import { EllipseGradient } from "@/components/ui/ellipseGradient";

const CarouselCard: React.FC<CarouselProps> = ({ data, active }) => {
  if (active) {
    return (
      <div className="md:mb-[73px]">
        <GradientCard className="w-full rounded-xl">
        <CarouselCardContent data={data} />
      </GradientCard>
      </div>
    );
  } else {
    return <CarouselCardContent data={data} />;
  }
};

const CarouselCardContent: React.FC<CarouselProps> = ({ data }) => {
  return (
    <Card className="bg-white rounded-xl h-auto border-0 p-[18px] md:p-6">
      <div className="flex flex-col justify-center gap-[12px] md:gap-[24px]">
        <div className="flex min-h-[187px] relative justify-center">
          <Image
            src={data.image}
            alt="car image"
            className="relative z-10 object-contain"
            width="348"
            height="174"
          />
          <EllipseGradient className="absolute z-0"/>
          {data.brandIcon}
        </div>
        <div className="flex flex-col gap-[8px] md:gap-[12px]">
          <h1 className="text-left font-normal text-dark text-[18px] leading-[23.4px] md:text-[24px] md:leading-[34px]">
            {data.brandName}
          </h1>
          <p className="text-left p-0 font-normal text-[12px] leading-[18px] md:text-[16px] md:leading-[24px] text-dark-2">
            {data.description}
          </p>
          <div className="flex gap-[4px] md:gap-[8px] items-center">
            <LocationIcon className="w-[11.26px] h-[16px] md:w-[16.9px] md:h-[24px]" />
            <span className="font-normal text-[12px] leading-[18px] md:text-[15px] text-dark-3 md:leading-[25px]">
              {data.location}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CarouselCard;
