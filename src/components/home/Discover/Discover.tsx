"use client";
import { Button } from "@/components/ui/button";
import { Input, Select } from "@/components/ui/input";
import Image from "next/image";
import { Section, SectionDesc, SectionHeader } from "@/components/ui/section";
import { GradientCard, Card } from "@/components/ui/card";
import { SwitchWithLabel } from "@/components/ui/switch";
import { EllipseGradient } from "@/components/ui/ellipseGradient";
import { useState } from "react";
import CheckIcon from "@/components/Icons/CheckIcon";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const dummy = [
  {
    image: "/home/white-vw.png",
    discount: 30,
  },
  {
    image: "/home/red-toyota.png",
    discount: 20,
  },
  {
    image: "/home/blue-nissan.png",
    discount: 10,
  },
  {
    image: "/home/white-vw.png",
    discount: 40,
  },
  {
    image: "/home/red-toyota.png",
    discount: 50,
  },
  {
    image: "/home/blue-nissan.png",
    discount: 22,
  },
];

const Discover = () => {
  const [activeIndices, setActiveIndices] = useState<number[]>([]);

  const handleItemClick = (index: number) => {
    const updatedIndices = [...activeIndices];

    if (updatedIndices.includes(index)) {
      updatedIndices.splice(updatedIndices.indexOf(index), 1);
    } else {
      updatedIndices.push(index);
    }

    setActiveIndices(updatedIndices);
  };

  return (
    <Section>
      <div className="w-full md:max-w-[690px] flex flex-col items-center">
        <SectionHeader className="md:text-left">
          Discover your purchasing alternatives now.
        </SectionHeader>
        <SectionDesc className="md:text-left">
          Calculate your affordable car budget. Explore vehicles within your
          financial range based on your affordability assessment.
        </SectionDesc>
        <Image
          src="/images/yellow-car.png"
          alt="yellow car"
          width="690"
          height="342"
          className="hidden md:block"
        />
        <Image
          src="/images/yellow-car-2.png"
          alt="yellow car"
          width="324"
          height="125"
          className="mb-[24px] md:mb-0 md:hidden"
        />
      </div>
      <div className="flex md:max-w-[696px] w-full justify-center">
        <GradientCard variant="hide-on-mobile" className="w-full">
          <div className="flex flex-col gap-[32px] md:h-full w-full items-center justify-center bg-white rounded-md md:p-[32px]">
            <Carousel
              className="w-full flex flex-col md:hidden "
              opts={{
                loop: true,
                align: "start",
              }}
            >
              <CarouselContent>
                {dummy.map((o, index) => (
                  <CarouselItem
                    key={"carousel" + index}
                    className="basis-[45%] md:basis-1/3"
                  >
                    <div
                      key={index}
                      className={`relative group border-[1px]  rounded-lg p-[13px] cursor-pointer ${
                        activeIndices.includes(index)
                          ? "border-dark"
                          : "border-dark-5"
                      }`}
                      onClick={() => handleItemClick(index)}
                    >
                      <div className="flex relative justify-center">
                        <div className="absolute text-[7.68px] -top-2 -left-2 bg-yellow text-black font-bold py-[3px] px-[6px] rounded-full z-[51]">
                          {o.discount}% OFF
                        </div>
                        <img
                          src={o.image}
                          alt="car image"
                          className="relative z-10 object-contain h-[53px] w-[130px]"
                        />
                        <EllipseGradient className="absolute z-0 -top-[100%]" />
                      </div>
                      <div
                        className={`absolute bg-green rounded-full top-2 right-2 p-[2.77px] ${
                          activeIndices.includes(index) ? "" : "hidden"
                        }`}
                      >
                        <span>
                          <CheckIcon width="8.46" />
                        </span>
                      </div>
                      <div
                        className={`${
                          activeIndices.includes(index) ? "hidden" : ""
                        } absolute top-0 left-0 w-full h-full bg-white justify-center items-center flex z-50 opacity-[0.97] rounded-lg`}
                        onClick={() => handleItemClick(index)}
                      >
                        <p className="text-dark-4 text-[9px] font-bold m-0">
                          Click to select
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <div className="hidden md:grid grid-cols-2 md:grid-cols-3 w-full gap-[12px] ">
              {dummy.map((o, index) => (
                <div
                  key={index}
                  className={`relative group border-[1px]  rounded-lg p-[13px] cursor-pointer ${
                    activeIndices.includes(index)
                      ? "border-dark"
                      : "border-dark-5"
                  }`}
                  onClick={() => handleItemClick(index)}
                >
                  <div className="flex relative justify-center">
                    <div className="absolute text-[7.68px] -top-2 -left-2 bg-yellow text-black font-bold py-[4px] px-[8px] rounded-full z-[51]">
                      {o.discount}% OFF
                    </div>
                    <img
                      src={o.image}
                      alt="car image"
                      className="relative z-10 object-contain h-[53px] w-[130px]"
                    />
                    <EllipseGradient className="absolute z-0 -top-[100%]" />
                  </div>
                  <div
                    className={`absolute bg-green rounded-full top-2 right-2 p-[2.77px] ${
                      activeIndices.includes(index) ? "" : "hidden"
                    }`}
                  >
                    <span>
                      <CheckIcon width="8.46" />
                    </span>
                  </div>
                  <div
                    className={`${
                      activeIndices.includes(index) ? "hidden" : ""
                    } absolute top-0 left-0 w-full h-full bg-white justify-center items-center flex z-50 opacity-[0.97] rounded-lg`}
                    onClick={() => handleItemClick(index)}
                  >
                    <p className="text-dark-4 text-[9px] font-bold m-0">
                      Click to select
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-5 w-full">
              <Select
                type="text"
                label="Searching for"
                options={[
                  { label: "Charger", value: "Charger" },
                  { label: "Charger 2", value: "Charger" },
                ]}
              />
              <Input
                currency="$"
                type="number"
                defaultValue="0"
                min="0"
                label="Down payment"
              />
              <Select
                type="text"
                label="Credit Score"
                options={[{ label: "670-739", value: "670-739" }]}
              />
              <Input
                currency="$"
                type="number"
                defaultValue="0"
                min="0"
                label="Monthly payment"
              />
            </div>
            <SwitchWithLabel label="Include trade-in" className="self-start" />
            <Button variant="gradient" size="md" className="w-full ">
              See Matches
            </Button>
          </div>
        </GradientCard>
      </div>
    </Section>
  );
};

export default Discover;
