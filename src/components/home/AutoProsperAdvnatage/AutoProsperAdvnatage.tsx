import React from "react";
import { TopArrow, Car, Heart } from "../../Icons/Icons";
import { AutoProsperAdvantages } from "../../../assests/interfaces/Home/index";

const cardData: AutoProsperAdvantages[] = [
  {
    id: 1,
    imageSrc: "/home/discover-ideal.png",
    heading: "Navigate the auto maze",
    description:
      "Feeling swamped by choices in today's car market? AutoProsper is your beacon in the haze, offering a streamlined path to your perfect ride. We simplify the process, making your decision clear and confident.",
    icon: (
      <TopArrow className="w-[1.125rem] h-[1.125rem] 2xl:w-[1.75rem] 2xl:h-[1.75rem] 3xl:w-[2.25rem] 3xl:h-[2.25rem]" />
    ),
  },
  {
    id: 2,
    imageSrc: "/home/special-order.png",
    heading: "Cut through the noise",
    description:
      "Drowning in car specs and finance options? We're like your personal navigator, offering clarity and expert insights to help you focus on what really matters for your lifestyle and budget.",
    icon: (
      <Car className="w-[1.375rem] h-[1.375rem]  2xl:w-[2.215rem] 2xl:h-[2.215rem] 3xl:w-[2.75rem] 3xl:h-[2.75rem]" />
    ),
  },
  {
    id: 3,
    imageSrc: "/home/special-order.png",
    heading: "Personalize car matching",
    description:
      "Searching for a car that feels like it was made just for you? Our personalized approach isn't just about the budget—it's about finding your ideal match on wheels. Let AutoProsper's tailored assistance drive you to your dream car, efficiently and effectively.",
    icon: (
      <Heart className="w-[1.125rem] h-[1.125rem] 2xl:w-[1.75rem] 2xl:h-[1.75rem] 3xl:w-[2.25rem] 3xl:h-[2.25rem]" />
    ),
  },
];

const AutoProsperAdvnatage = () => {
  return (
    <section className="sectionWrapper py-[3.75rem] 2xl:py-[5rem] 3xl:pt-[6.875rem] 3xl:pb-[6rem] bg-light-gray">
      <div className="container">
        <div className="max-w-[360px] mx-auto text-center md:max-w-[480px] lg:max-w-[560px] 2xl:max-w-[680px]">
          <h2 className="heading2 mb-[0.625rem] lg:mb-[1.125rem] md:max-w-[70%] md:mx-auto lg:max-w-[84%] 3xl:max-w-full">
            What makes AutoProsper worth joining?
          </h2>
          <p className="paragraph-large mb-[1.875rem] lg:mb-[2.5rem] 2xl:mb-[3.125rem] 3xl:mb-[3.75rem] text-primary-text ">
            Join AutoProsper for expert guidance, personalized service, & a
            seamless car buying experience tailored to your preferences and
            needs.
          </p>
        </div>
        <div className="md:flex md:flex-wrap md:justify-between md:items-stretch md:gap-[0.625rem] lg:gap-[1.25rem] 3xl:gap-[1.875rem]">
          {cardData.map((item) => (
            <div
              key={item.id}
              className="md:flex-grow md:w-[48%] lg:w-[30%] md:mb-[3rem] lg:pb-[0]"
            >
              <div
                className="h-full py-[1.875rem] md:py-0 md:max-w-[360px] md:pl-[1.875rem] 
               border-t-[1px] border-solid border-primary-text
               md:border-l-[1px] md:border-t-[0] md:pb-[2rem] lg:pb-[0] "
              >
                <div
                  className="mb-[0.938rem] lg:mb-[1.5rem] 3xl:mb-[1.875rem] bg-btn-primary-gradient 
                w-[3.125rem] h-[3.125rem] lg:w-[3.75rem] lg:h-[3.75rem] 2xl:w-[5rem] 2xl:h-[5rem] 3xl:w-[6.25rem] 3xl:h-[6.25rem] flex justify-center items-center rounded-full"
                >
                  {item.icon}
                </div>

                <h3 className="heading3 text-left mb-[0.938rem] lg:mb-[1.5rem] 3xl:mb-[1.875rem] lg:mr-[30%] 2xl:mr-[26%]">
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
