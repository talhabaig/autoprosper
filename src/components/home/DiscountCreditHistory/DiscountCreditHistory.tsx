import React from "react";
import Button from "../../Common/Button/Button";
import { ArrowRight } from "../../Icons/Icon";
import Image from "next/image";
import { DiscountAndCreditDataItem } from "../../../assests/interfaces/Home/index";
import styles from "./DiscountCreditHistory.module.css";

const discountAndCreditData: DiscountAndCreditDataItem[] = [
  {
    id: 1,
    imageSrc: "/home/militiry-cars.png",
    contentLabel: "Military Savings",
    heading: "Military member special discount program offer",
    paragraph:
      "Attention military members! Unlock exclusive discounts on our lineup of pickup trucks as a thank you for your service. Experience reliability and power tailored to your needs.",
    buttonLabel: "Learn More",
    buttonIcon: (
      <ArrowRight width="2rem" height="2rem" className="fill-primary-text" />
    ),
  },
  {
    id: 2,
    imageSrc: "/home/no-credit-history.png",
    contentLabel: "Get Approved",
    heading: "Get approved with no credit history.",
    paragraph:
      "AutoProsper's experts will tailor a personal plan to fit your situation. Better to start sooner than later.",
    buttonLabel: "Learn More",
    buttonIcon: (
      <ArrowRight width="2rem" height="2rem" className="fill-primary-text" />
    ),
  },
];

function DiscountAndCredit() {
  return (
    <>
      <section className="py-[3rem] xl:py-[4rem] 3xl:py-[8rem]">
        <div className="container [&>*:nth-child(even)]:md:flex-row-reverse ">
          {discountAndCreditData.map((item) => (
            <div
              key={item.id}
              className="md:flex md:justify-between md:items-center pb-[6rem] lg:pb-[8rem] 3xl:pb-[10rem] last-of-type:pb-0"
            >
              <div className="md:flex-[0_0_auto] md:w-[48%] 3xl:w-[49%]">
                {item.imageSrc && (
                  <Image
                    src={item.imageSrc}
                    width={690}
                    height={520}
                    alt={item.contentLabel || ""}
                  />
                )}
              </div>
              <div className="text-center flex flex-col justify-center items-center md:flex-[0_0_auto] md:w-[48%] 3xl:w-[49%] md:justify-start md:items-start md:text-start">
                <div className="py-[2rem] xl:py-[2.5rem]">
                  <span
                    className="inline-block p-[0.8rem_1.6rem] leading-[1.3] rounded-[10rem] tracking-[1px] 
                     font-bold text-gray uppercase text-[1rem] lg:text-[1.2rem] border border-solid
                     border-border-color"
                  >
                    {item.contentLabel}
                  </span>
                </div>
                <h2 className="heading2 md:text-start xl:mb-[2rem] lg:mr-[4rem]">
                  {item.heading}
                </h2>
                <p className="paragraph-large xl:mb-[2.4rem]">
                  {item.paragraph}
                </p>
                <div>
                  <Button
                    variant="primary"
                    label={item.buttonLabel}
                    children={item.buttonIcon}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default DiscountAndCredit;
