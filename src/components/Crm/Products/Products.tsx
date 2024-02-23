import React from "react";
import Image from "next/image"; // Import your Image component
import { ArrowDown } from "@/components/Icons/Icons";

const Products = () => {
  const data = [
    {
      title: "2024 Nissan Kicks®",
      model: "SE",
      price: "$12,480",
      monthly_payment: "$210/mo",
      discount: "$4,280",
    },
    {
      title: "2024 Nissan Kicks®",
      model: "SE",
      price: "$12,480",
      monthly_payment: "$210/mo",
      discount: "$4,280",
    },
    {
      title: "2024 Nissan Kicks®",
      model: "SE",
      price: "$12,480",
      monthly_payment: "$210/mo",
      discount: "$4,280",
    },
  ];
  return (
    <div className="flex flex-col gap-[12px]">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex flex-col bg-white rounded-2xl gap-[36px]"
        >
          <div className="px-[10px] pt-[24px]">
            <div className="relative max-w-[310px] flex flex-col justify-center items-center mx-auto">
              <Image
                src={"/producDetail/bg-cloud-product-detail.png"}
                width={446}
                height={214}
                className="rounded-tr-[12px] rounded-tl-[12px] min-w-full"
                alt="image"
              />

              <div
                className={`mt-[-60px]  max-w-[310px] sm:mt-[-80px] max-h-[127px]`}
              >
                <Image
                  src={"/producDetail/product-detail.png"}
                  width={232}
                  height={146}
                  alt="image"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[16px] px-[16px] pb-[24px]">
            <div className="flex flex-col gap-[12px]">
              <div className="text-dark text-sm leading-[18.2px]">{item.title}</div>
              <div className="flex flex-row gap-[8px] items-center">
                <div className="bg-dark-7 rounded-full text-dark-3 text-[10px] font-bold leading-[12.6px] px-[8px] py-[4px]">
                  {item.model}
                </div>
                <div className="text-dark-3 text-[10px] leading-[15px]">
                  {item.price}
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[8px] text-dark font-semibold text-sm leading-[21px]">
                <ArrowDown width="20" height="20" /> {item.discount}
              </div>
              <div className="w-[1px] bg-dark"></div>
              <div className="text-dark font-semibold text-sm leading-[21px]">
                {item.monthly_payment}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
