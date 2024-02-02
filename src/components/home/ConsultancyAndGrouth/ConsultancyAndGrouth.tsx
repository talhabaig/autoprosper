import React from "react";
import Image from "next/image";
import { ConsultancyAndGrowth } from "../../../assests/interfaces/Home/index";

const cardData: ConsultancyAndGrowth[] = [
  {
    id: 1,
    imageSrc: "/home/personalized-consultancy.png",
    heading: "Personalized 1:1  Consultancy",
    description:
      "Our dedicated consultants understand that every client is unique, with distinct needs and dreams. We offer bespoke, one-on-one guidance, ensuring your car buying experience is as individual as you are.",
  },
  {
    id: 2,
    imageSrc: "/home/personalized-growth.png",
    heading: "Personalized Steps To Growth",
    description:
      "From understanding your lifestyle to aligning with your budget, our experts are committed to finding your perfect automotive match. With AutoProsper, experience the ease and confidence of a personalized car buying journey.",
  },
];

const ConsultancyAndGrouth = () => {
  return (
    <section className="py-[3rem]  2xl:py-[4rem] 3xl:py-[6rem]  bg-btn-primary-gradient">
      <div className="container">
        <div
          className="md:flex md:flex-wrap md:justify-between md:items-stretch md:gap-[0.625rem] 
          lg:gap-[1.25rem] 3xl:gap-[1.875rem]"
        >
          {cardData.map((item) => (
            <div
              key={item.id}
              className="md:flex-grow md:w-[48%]  bg-white rounded-[12px] mb-[1.188rem] lg:mb-0"
            >
              <div
                className="h-full py-[2rem] lg:py-[1.5rem] px-[1.125rem] text-center  flex flex-col 
                lg:flex-row items-center gap-[0.625rem] lg:gap-[1.25rem] xl:gap-[1.5rem]  xl:px-[1.25rem] 
                2xl:pl-[1.5rem] 2xl:pr-[1.875rem] 3xl:px-[1.5rem] "
              >
                <div className=" rounded-full mb-[0.9375rem] lg:mb-0 lg:w-[33%]  flex-[0_0_auto]">
                  <Image
                    src={item.imageSrc ? item.imageSrc : ""}
                    width={211}
                    height={211}
                    className=""
                    alt={item.heading || ""}
                  />
                </div>

                <div>
                  <h3 className="heading3 text-center mb-[0.625rem] lg:mb-[1rem] lg:text-left lg:mr-[10%] xl:mr-[20%]
                   2xl:mr-[30%] 3xl:mr-[25%]">
                    {item.heading}
                  </h3>
                  <p className="text-[0.875rem] leading-[18px] lg:leading-[21px] mb-0 text-dark-2 lg:text-left">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConsultancyAndGrouth;
