import LocationIcon from "../../Icons/LocationIcon";
import { Card } from "@/components/ui/card";
import Image from 'next/image'
import { CarouselProps } from "./type";
import { EllipseGradient } from "@/components/ui/EllipseGradient";

const CarouselCard: React.FC<CarouselProps> = ({ data }) => {
  return (
    <Card className="bg-white rounded-xl h-auto border-0 p-6">
      <div className="flex flex-col justify-center">
        <div className="flex min-h-[187px] relative justify-center">
          <Image
            src={data.image}
            alt="car image"
            className="relative z-10 object-contain"
            width="348"
            height="174"
          />
          <EllipseGradient className="absolute z-0"/>
          {/* <Image
            src="/home/ellipse-gradient.png"
            alt="car image"
            className="absolute z-0 !bottom-11"
            layout="fill"
          /> */}
          {data.brandIcon}
        </div>
        <div className="flex flex-col mt-6">
          <h1 className="font-normal text-dark text-[24px] leading-[34px]">
            {data.brandName}
          </h1>
          <p className="p-0 font-normal text-[16px] leading-[25px] text-dark-2">
            {data.description}
          </p>
          <div className="flex gap-[8px]">
            <LocationIcon />
            <span className="font-normal text-[15px] text-dark-2 leading-[25px]">
              {data.location}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
};


export default CarouselCard;