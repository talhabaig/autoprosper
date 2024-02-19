"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { EllipseGradient } from "../../ui/ellipseGradient";
import Button from "../../Common/Button/Button";
import { BackArrow } from "@/components/Icons/Icons";
import Link from "next/link";

interface YourCashOfferProps {}

const YourCashOffer: React.FC<YourCashOfferProps> = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="w-full">
          <Image
            src="/images/circleCar.png"
            width={200}
            height={200}
            alt="CircleCar Loading"
            className="mt-6 mx-auto md:mx-0"
          />
          <p
            className="text-center md:text-start  md:ml-7 text-[#4B5768] text-[14px] 
            xl:text-[16px] font-[400] mt-3 animate-pulse"
          >
            Calculating your offer . . .
          </p>
        </div>
      ) : (
        <div className="container md:max-w-[456px] pt-[48px]">
         
          <div className="flex min-h-[187px] relative justify-center">
            <Image
              src="/home/red-toyota.png"
              alt="car image"
              className="relative z-[1] object-contain"
              width={348}
              height={174}
            />
            <EllipseGradient className="absolute top-[-32px] md:top-[-42px] z-0" />
          </div>

          <p className="text-center text-[#001B44] mb-3 text-[32px] 2xl:text-[56px] font-[400]">
            $375*
          </p>
          <p className="text-center text-[#001B44] mb-2 text-[14px] 2xl:text-[24px] font-[700]">
            2024 Nissan Kicks®
          </p>
          <p className="text-center text-[#5D6878] text-[12px] 2xl:text-[16px] font-normal">
            Kicks® SR
          </p>

          <Button
            className="w-full text-[#001B44] text-[14px] "
            variant="primary"
            label="Accept cash offer"
          />
          <br />
          <p className=" block text-center text-[#5D6878] text-[14px] font-[400] mt-10px">
            Let's gather your documents and get you paid.
          </p>

          <Button
            variant="transparent"
            label="Apply offers to trade-in"
            className="w-full !text-[#001B44] border-[#001B44] hover:!text-white text-[14px]"
          />
          <p className="text-center text-[#5D6878] text-[12px] 2xl:text-[14px] font-normal mt-[12px]">
            Put your offer toward your next ride and start shopping.
          </p>
          <Link
            href="/"
            className="block text-center text-[#FF3363] text-[14px] 2xl:text-[16px] font-[700] underline"
          >
            Not sure yet? Save this Offer
          </Link>
        </div>
      )}
    </>
  );
};

export default YourCashOffer;
