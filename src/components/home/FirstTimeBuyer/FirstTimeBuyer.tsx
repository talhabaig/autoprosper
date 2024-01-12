import React from "react";
import Image from "next/image";
import Button from "../../Common/Button/Button";
import { ArrowRight } from "../../Icons/Icons";
import styles from "./FirstTimeBuyer.module.css";

const FirstTimeBuyer = () => {
  return (
    <section className="max-w-[1920px] mx-auto ">
      <div className="relative min-h-[631px] lg:min-h-[710px] xl:min-h-[800px] 3xl:min-h-[900px] 4xl:min-h-[952px] flex justify-center items-center">
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            src="/home/first-time-buyer-mobile.png"
            width={360}
            height={632}
            alt={"first time buyer"}
            className="w-full h-full object-cover reletive sm:hidden"
          />
          <Image
            src="/home/first-time-buyer-desktop.png"
            width={1728}
            height={952}
            alt={"first time buyer"}
            className="w-full h-full object-cover reletive hidden sm:block"
          />
        </div>
        <div
          className={`max-w-[310px] md:max-w-[328px] lg:max-w-[424px] xl:max-w-[505px] 2xl:max-w-[650px] absolute top-[58%]  mx-[1.5rem] flex flex-col text-center items-center justify-center`}
        >
          <h2 className="heading2 xl:mb-[2.4rem] 2xl:max-w-[78%] 3xl:max-w-[98%] text-white">
            <span className={styles.textGradient}>First time </span>buyer (born
            1998-2005) program offer
          </h2>
          <p className="paragraph-large text-white mb-[2rem] xl:mb-[2.4rem]">
            For first-time car buyers born between 1998-2005, unlock exclusive
            offers and tailored programs to ease your vehicle purchase.
          </p>
          <div>
            <Button
              variant="primary"
              label="Start Now"
              children={
                <ArrowRight
                  width="2rem"
                  height="2rem"
                  className="fill-primary-text"
                />
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstTimeBuyer;
