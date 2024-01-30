import React from "react";
import Image from "next/image";
import styles from "./InventeryCard.module.css";
import {
  BlueTooth,
  Location,
  MilesCovered,
  Lock,
  LockVariant2,
  ArrowRightCurved,
} from "@/components/Icons/Icons";

const InventoryCard = () => {
  return (
    <div
      className="p-[10px] rounded-[16px] border border-solid border-dark-5 
      lg:flex lg:justify-between"
    >
      <div
        className="relative flex justify-center items-center overflow-hidden bg-white min-h-[304px]
         border border-solid border-dark-6 rounded-[14px] px-[10px] mb-[16px] lg:min-h-[260px] lg:w-[39%] lg:mb-0"
      >
        <div className="relative max-w-[310px]  mx-auto ">
          <Image
            src={"/producDetail/bg-cloud-product-detail.png"}
            width={446}
            height={214}
            className="rounded-tr-[12px] rounded-tl-[12px] min-w-full"
            alt="image"
          />

          <div
            className={`mt-[-60px]  max-w-[310px] max-h-[127px] ${styles.imageWrapper}`}
          >
            <Image
              src="/producDetail/product-detail.png"
              width={690}
              height={257}
              alt="image"
            />
          </div>
        </div>
        <div className="absolute top-[16px] left-[16px]">
          <span
            className="inline-flex justify-center items-center text-[12px] leading-[150%] 
             font-bold tracking-[0.9px] uppercase p-[4px_8px] bg-dark-7 rounded-[100px]"
          >
            New
          </span>
        </div>
        <div className="absolute  bottom-[12px] left-1/2 -translate-x-1/2">
          <div className="bg-btn-primary-gradient p-[2px] rounded-[100px] overflow-hidden cursor-pointer">
            <div className="px-[16px] py-[7px] bg-white flex items-center justify-center gap-[5px] rounded-[100px]">
              <Location className="w-[16px] h-[16px] fill-dark" />
              <span className="inline-block text-dark font-bold text-[14px]">
                Location
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-[5px] py-[10px] lg:w-[60%] lg:flex lg:flex-col lg:justify-between">
        <div className="lg:flex lg:justify-between">
          <div className="lg:w-[74%] 2xl:w-[64%]">
            <h2 className="heading4 mb-[10px] font-bold">
              2018 Mitsubishi Outlander
            </h2>
            <div className="mb-[10px]">
              <span className="text-[12px] text-dark xl:text-[14px] 2xl:text-[16px] leading-[150%]">
                SE
              </span>
            </div>
            <ul className="flex gap-[10px] mb-[15px] 2xl:gap-[16px]">
              <li
                className="flex items-center gap-[4px] fill-dark-2 p-[4px_10px]
               bg-green-light rounded-[100px] text-[12px] font-normal leading-[150%]
               lg:text-[14px] xl:text-[16px] 2xl:text-[18px] lg:p-[6px_12px] 2xl:p-[8px_16px] xl:gap-[6px] 2xl:gap-[8px]"
              >
                <MilesCovered className="w-[12px] h-[12px] lg:w-[14px] lg:h-[14px] 2xl:w-[20px] 2xl:h-[20px]  fill-black" />{" "}
                126,602 Miles
              </li>
              <li
                className="flex items-center gap-[4px] fill-dark-2 p-[4px_10px]
               bg-green-light rounded-[100px] text-[12px] font-normal leading-[150%]
               lg:text-[14px] xl:text-[16px] 2xl:text-[18px] lg:p-[6px_12px] 2xl:p-[8px_16px] xl:gap-[6px] 2xl:gap-[8px]"
              >
                <BlueTooth className="w-[12px] h-[12px] lg:w-[14px] lg:h-[14px] 2xl:w-[20px] 2xl:h-[20px] fill-dark-2" />{" "}
                Bluetooth
              </li>
            </ul>
          </div>
          <div className="mb-[15px] lg:w-[25%] 2xl:w-[34%] lg:mb-0 lg:flex lg:justify-end">
            <div>
              <span
                className="block text-dark-2 text-[12px] leading-[150%] font-normal mb-[8px]
                lg:text-right lg:mb-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px]"
              >
                Price
              </span>
              <span className="block text-dark text-[18px] xl:text-[22px] 2xl:text-[26px] 3xl:text-[32px] font-bold leading-[130%]">
                $15,795
              </span>
            </div>
          </div>
        </div>
        <div
          className="bg-dark-6 p-[16px_8px_24px_8px] flex gap-[10px] items-center justify-center
         rounded-[12px] mb-[20px] relative lg:p-[24px_16px_16px_16px] lg:mb-0"
        >
          <span
            className=" bg-white p-[12px_3px] max-w-[150px] w-full text-[14px] flex 
          justify-center items-center gap-[5px] text-dark font-bold lg:max-w-[49%]"
          >
            <Lock className="w-[16px] h-[16px] fill-dark" /> $... Down
          </span>
          <span
            className=" bg-white p-[12px_3px] max-w-[150px] w-full text-[14px]
           flex justify-center items-center gap-[5px] text-dark font-bold lg:max-w-[49%]"
          >
            <Lock className="w-[16px] h-[16px] fill-dark" /> $... /Month
          </span>
          <div
            className="absolute bottom-[-12px] bg-btn-primary-gradient p-[4px_16px] gap-[10px] 
              max-w-[207px] 2xl:min-w-[233px] w-full flex items-center justify-center rounded-[100px]
              min-h-[26px] 2xl:min-h-[36px] lg:bottom-[unset] lg:top-[-12px]
              "
          >
            <LockVariant2 className="w-[16px] h-[16px] fill-dark 2xl:w-[20px] 2xl:h-[20px]" />
            <span className="text-[14px] font-bold text-dark 2xl:text-[16px]">
              Unlock your terms
            </span>
            <ArrowRightCurved className="w-[16px] h-[16px] 2xl:w-[20px] 2xl:h-[20px] fill-dark" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryCard;
