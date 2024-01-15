import React from "react";
import Image from "next/image";
import Button from "../../Common/Button/Button";
import { ArrowRight, TopArrow, Car, Heart } from "../../Icons/Icons";
import { AutoProsperAdvantages } from "../../../assests/interfaces/Home/index";

const cardData: AutoProsperAdvantages[] = [
  {
    id: 1,
    imageSrc: "/home/discover-ideal.png",
    heading: "Navigate the auto maze",
    description:
      "Feeling swamped by choices in today's car market? AutoProsper is your beacon in the haze, offering a streamlined path to your perfect ride. We simplify the process, making your decision clear and confident.",
    icon: (
      <TopArrow className="w-[1.8rem] h-[1.8rem] 2xl:w-[2.8rem] 2xl:h-[2.8rem] 3xl:w-[3.6rem] 3xl:h-[3.6rem]" />
    ),
  },
  {
    id: 2,
    imageSrc: "/home/special-order.png",
    heading: "Cut through the noise",
    description:
      "Drowning in car specs and finance options? We're like your personal navigator, offering clarity and expert insights to help you focus on what really matters for your lifestyle and budget.",
    icon: (
      <Car className="w-[2.2rem] h-[2.2rem]  2xl:w-[3.4rem] 2xl:h-[3.4rem] 3xl:w-[4.4rem] 3xl:h-[4.4rem]" />
    ),
  },
  {
    id: 3,
    imageSrc: "/home/special-order.png",
    heading: "Personalize car matching",
    description:
      "Searching for a car that feels like it was made just for you? Our personalized approach isn't just about the budget—it's about finding your ideal match on wheels. Let AutoProsper's tailored assistance drive you to your dream car, efficiently and effectively.",
    icon: (
      <Heart className="w-[1.8rem] h-[1.8rem] 2xl:w-[2.8rem] 2xl:h-[2.8rem] 3xl:w-[3.6rem] 3xl:h-[3.6rem]" />
    ),
  },
];

const AutoProsperAdvnatage = () => {
  return (
    <section className="sectionWrapper py-[6rem] 2xl:py-[8rem] 3xl:pt-[11rem] 3xl:pb-[9.6rem] bg-light-gray">
      <div className="container">
        <div className="max-w-[360px] mx-auto text-center md:max-w-[480px] lg:max-w-[560px] 2xl:max-w-[680px]">
          <h2 className="heading2 mb-[1rem] lg:mb-[1.8rem] md:max-w-[70%] md:mx-auto lg:max-w-[84%] 3xl:max-w-full">
            What makes AutoProsper worth joining?
          </h2>
          <p className="paragraph-large mb-[3rem] lg:mb-[40px] 2xl:mb-[5rem] 3xl:mb-[6rem] text-primary-text ">
            Join AutoProsper for expert guidance, personalized service, & a
            seamless car buying experience tailored to your preferences and
            needs.
          </p>
        </div>
        <div className="md:flex md:flex-wrap md:justify-between md:items-stretch md:gap-[1rem] lg:gap-[2rem] 3xl:gap-[3rem]">
          {cardData.map((item) => (
            <div
              key={item.id}
              className="md:flex-grow md:w-[48%] lg:w-[30%] md:mb-[3rem] lg:pb-[0]"
            >
              <div
                className="h-full py-[3rem] md:py-0 md:max-w-[360px] md:pl-[3rem] 
               border-t-[1px] border-solid border-primary-text
               md:border-l-[1px] md:border-t-[0] md:pb-[2rem] lg:pb-[0] "
              >
                <div
                  className="mb-[1.5rem] lg:mb-[2.4rem] 3xl:mb-[3rem] bg-btn-primary-gradient 
                w-[5rem] h-[5rem] lg:w-[6rem] lg:h-[6rem] 2xl:w-[8rem] 2xl:h-[8rem] 3xl:w-[10rem] 3xl:h-[10rem] flex justify-center items-center rounded-full"
                >
                  {item.icon}
                </div>

                <h3 className="heading3 text-left mb-[1.5rem] lg:mb-[2.4rem] 3xl:mb-[3rem] mr-[30%]">
                  {item.heading}
                </h3>
                <p className="paragraph-large mb-0 text-light-gray-3">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutoProsperAdvnatage;
