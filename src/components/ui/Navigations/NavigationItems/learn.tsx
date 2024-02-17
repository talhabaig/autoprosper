import { SheetSectionDetails, SheetSectionItems } from "@/components/ui/sheet";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { ArrowRight } from "@/components/Icons/Icons";
import NavigationItemsWrapper from "./navigationItemsWrapper";

const Learn = () => {
  const navigationData = [
    {
      label: "Guide & Tips",
      link: "#",
    },
    {
      label: "Estimate Your Payment",
      link: "#",
    },
    {
      label: "Reviews",
      link: "#",
    },
  ];

  const contents = [
    {
      title: "FAQs",
      list: [
        {
          element: (
            <div>
              <Link
                className="text-xs md:text-[14px] font-normal text-dark-3 underline leading-[18px] md:leading-[21px]"
                href="#"
              >
                What values guide AutoProsper's operations?
              </Link>
            </div>
          ),
        },
        {
          element: (
            <div className="mt-[12px]">
              <Link
                className="text-xs md:text-[14px] font-normal text-dark-3 underline leading-[18px] md:leading-[21px]"
                href="#"
              >
                What distinguishes AutoProsper's approach to car buying?
              </Link>
            </div>
          ),
        },
      ],
      button: {
        text: "View all FAqs",
        icon: (
          <ArrowRight className="ml-[5px] fill-dark-4 w-[10.67px] h-[10.67px] md:w-[12px] md:h-[12px]" />
        ),
      },
    },

    {
      title: "Resources",
      list: [
        {
          element: (
            <div className="">
              <h3 className="text-dark font-normal text-[14px] leading-[150%] md:text-[18px] mb-[8px]">
                2024 Nissan Kicks®
              </h3>
              <p className="p-0 m-0 font-normal text-[12px] md:text-[14px] text-dark-3 leading-[150%] ">
                Calculate your affordable car budget. Explore vehicles within
                your financial range based on your affordability assessment.
              </p>
            </div>
          ),
        },
        {
          element: (
            <div className=" mt-[15px]">
              <h3 className="text-dark font-normal text-[14px] leading-[150%] md:text-[18px] mb-[8px]">
                2024 Nissan Kicks®
              </h3>
              <p className="p-0 m-0 font-normal text-[12px] md:text-[14px] text-dark-3 leading-[150%] ">
                Calculate your affordable car budget. Explore vehicles within
                your financial range based on your affordability assessment.
              </p>
            </div>
          ),
        },
      ],
      button: {
        text: "Read more article",
        icon: (
          <ArrowRight className="ml-[5px] fill-dark-4 w-[10.67px] h-[10.67px] md:w-[12px] md:h-[12px]" />
        ),
      },
    },
  ];

  return (
    <NavigationItemsWrapper>
      <div className="flex flex-col md:flex-row md:divide-x-[1px] md:divide-dark-6">
        <SheetSectionItems
          title="CAR QUESTION ANSWERED"
          items={navigationData}
        />
        <div className="px-[18px] md:pl-[36px] lg:pl-[72px]  mt-[30px] gap-[24px] flex flex-col md:flex-row md:justify-between">
          {contents.map((content) => (
            <SheetSectionDetails content={content} />
          ))}
        </div>
      </div>
    </NavigationItemsWrapper>
  );
};

export default Learn;
