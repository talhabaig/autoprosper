import { EditIcon, PinLocation } from "@/components/Icons/Icons";
import RightArrow from "@/components/Icons/RightArrow";
import { Button } from "@/components/ui/button";
import CardData from "@/components/ui/cardData";
import { EllipseGradient } from "@/components/ui/ellipseGradient";
import Image from "next/image";
import { useState } from "react";


const Review: React.FC = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleOptionChange = (values: string[]) => {
    setSelectedOptions(values);
  };
  const options = [
    {
      id: 1,
      label: <div className="text-dark">Style</div>,
      sub: "228i Gran Coupe FWD",
    },
    {
      id: 2,
      label: <div className="text-dark">Exterior</div>,
      sub: (
        <div className="flex flex-col gap-2">
          <div className="text-[10px] text-dark-3 font-normal">
            Misano Blue Metallic
          </div>
          <div className="text-xs text-dark-3 font-normal">$480</div>
        </div>
      ),
      image: <img src="/customize/colors/blue-metalic.png" width="26" />,
    },
    {
      id: 3,
      label: <div className="text-dark">Interior</div>,
      sub: (
        <div className="flex flex-col gap-2">
          <div className="text-[10px] text-dark-3 font-normal">
            Oyster/Black
          </div>
          <div className="text-xs text-dark-3 font-normal">Included</div>
        </div>
      ),
      image: <img src="/customize/colors/alpine-white.png" width="26" />,
    },
    {
      id: 4,
      label: <div className="text-dark">Package</div>,
      sub: "Not interested in popular option packages at this time",
    },
  ];

  return (
    <>
      <div className="flex flex-col lg:flex-row w-full items-start justify-start lg:gap-[24px]">
        <div className="relative flex items-center w-full h-[160px] md:h-[217px] my-auto justify-center">
          <EllipseGradient className="absolute -top-3 lg:-top-10 left-0 w-full h-full z-0" />
          <Image
            src="/home/blue-nissan.png"
            alt="car image"
            className="z-10 w-[267px] h-[111px] md:w-[372px] md:h-[155px]"
            height={110}
            width={270}
          />
        </div>
        <div className="flex flex-col w-full">
          <div className="flex gap-[12px] mb-[16px] items-center">
            <div className="flex gap-2 bg-dark-7 h-fit text-dark text-[13px] px-[20px] py-[13px] rounded-full">
              <PinLocation width="10" height="13" />
              75042
            </div>
            <div className="bg-dark-7 text-dark flex items-center p-[12px] rounded-full h-fit">
              <EditIcon width="12" height="12" />
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h4 className="text-sm md:text-lg text-dark font-bold">
              2024 BMW 2 series preferences
            </h4>
            <div className="flex flex-col gap-2">
              <div className="text-dark-3 text-[10px] font-bold tracking-[0.9px]">
                Avg. Offer Made to Others
              </div>
              <div className="text-dark text-sm font-normal">$39,725</div>
            </div>
            <div className="flex flex-row justify-between">
              <div className="flex flex-col gap-2">
                <div className="text-dark-3 text-[10px] font-bold tracking-[0.9px]">
                  MSRP as Build
                </div>
                <div className="text-dark text-sm md:text-base font-normal">$40,045</div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-dark-3 text-[10px] font-bold tracking-[0.9px]">
                  Price You’ll Pay
                </div>
                <div className="text-dark text-sm md:text-base font-normal underline">
                  See Personalized Offer
                </div>
              </div>
            </div>
            <Button variant="gradient" className="min-h-[36px] md:hidden">
              See offers on local inventory
              <span className="ml-[6px] md:ml-[10px]">
                <RightArrow />
              </span>
            </Button>
            <div className="text-xs md:text-sm text-dark-2 font-normal text-center">
              Continue to get the actual price you'll pay for the car you want.
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-[12px] justify-center lg:gap-[24px] pb-[30px] 2xl:pb-[50px] mt-[30px]">
        {options.map((option) => (
          <CardData
            key={option.id}
            option={option}
            className="!min-w-[100%]"
            editAble={true}
            isSelected={selectedOptions.includes(option.label.toString())}
            onClick={() => console.log(option)}
          />
        ))}
      </div>
    </>
  );
};

export default Review;
