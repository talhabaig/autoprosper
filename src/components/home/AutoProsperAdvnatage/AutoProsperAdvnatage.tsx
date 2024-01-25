import React from "react";
import { TopArrow, ThumbUp, Heart } from "../../Icons/Icons";
import { AutoProsperAdvantages } from "../../../assests/interfaces/Home/index";

const cardData: AutoProsperAdvantages[] = [
  {
    id: 1,
    imageSrc: "/home/discover-ideal.png",
    heading: "Navigate the auto maze",
    description:
      "Feeling swamped by choices in today's car market? AutoProsper is your beacon in the haze, offering a streamlined path to your perfect ride. We simplify the process, making your decision clear and confident.",
    icon: (
      <TopArrow className="w-[56px] h-[56px] lg:w-[76px] lg:h-[76px] 3xl:w-[96px] 3xl:h-[96px]" />
    ),
  },
  {
    id: 2,
    imageSrc: "/home/special-order.png",
    heading: "Cut through the noise",
    description:
      "Drowning in car specs and finance options? We're like your personal navigator, offering clarity and expert insights to help you focus on what really matters for your lifestyle and budget.",
    icon: (
      <ThumbUp className="w-[56px] h-[56px] lg:w-[76px] lg:h-[76px] 3xl:w-[96px] 3xl:h-[96px]" />
    ),
  },
  {
    id: 3,
    imageSrc: "/home/special-order.png",
    heading: "Personalize car matching",
    description:
      "Searching for a car that feels like it was made just for you? Our personalized approach isn't just about the budget—it's about finding your ideal match on wheels. Let AutoProsper's tailored assistance drive you to your dream car, efficiently and effectively.",
    icon: (
      <Heart className="w-[56px] h-[56px] lg:w-[76px] lg:h-[76px] 3xl:w-[96px] 3xl:h-[96px]" />
    ),
  },
];

const AutoProsperAdvnatage = () => {
  return (
    <section className="sectionWrapper py-[3rem]  2xl:py-[4rem] 3xl:py-[6rem] bg-dark-7">
      <div className="container px-0 sm:px-4">
        <div className="max-w-[360px] mx-auto text-center md:max-w-[550px] lg:max-w-[600px] 2xl:max-w-[800px]">
          <h2 className="heading2 mb-[0.5rem] lg:mb-[1.125rem] md:max-w-[70%] md:mx-auto lg:max-w-[84%] 3xl:max-w-full">
            What makes AutoProsper worth joining?
          </h2>
          <p className="paragraph-large mb-[1.5rem] md:mb-[1.875rem] lg:mb-[2.5rem] 2xl:mb-[3rem]   ">
            Join AutoProsper for expert guidance, personalized service, & a
            seamless car buying experience tailored to your preferences and
            needs.
          </p>
        </div>
        <div className="md:flex md:flex-wrap md:justify-between md:items-stretch md:gap-[0.625rem] lg:gap-[1.25rem] 3xl:gap-[1.875rem]">
          {cardData.map((item) => (
            <div
              key={item.id}
              className="md:flex-grow md:w-[48%] lg:w-[30%] md:mb-[3rem] lg:pb-[0] lg:mb-0"
            >
              <div
                className="h-full py-[1.5rem] md:py-0 md:max-w-[360px] md:pl-[1.875rem] 3xl:pl-[2rem]
               border-t-[1px] border-solid border-primary-text
               md:border-l-[1px] md:border-t-[0] md:pb-[2rem] lg:pb-8 px-[1.125rem] md:px-0"
              >
                <div
                  className="mb-[1.125rem] lg:mb-[1.5rem] 3xl:mb-[2rem] "
                >
                  {item.icon}
                </div>

                <h3 className="heading3 mb-[0.5rem] text-left md:mb-[1.125rem]  lg:mb-[1.5rem] 3xl:mb-[2rem] lg:mr-[30%] 2xl:mr-[26%]">
                  {item.heading}
                </h3>
                <p className="paragraph-large mb-0 ">
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
