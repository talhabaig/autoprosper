import {
  SheetSectionDetails,
  SheetSectionItems,
} from "@/components/ui/sheet";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { ArrowRight } from "@/components/Icons/Icons";

const SellTrade = () => {
  const navigationData = [
    {
      label: "Sell or Trade Your Car",
      link: "#",
    },
    {
      label: "How Sell/Trade Works",
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
                className="text-sm font-normal text-dark-3 underline leading-[21px]"
                href="#"
              >
                What values guide AutoProsper's operations?
              </Link>
            </div>
          ),
        },
        {
          element: (
            <div className="md:mt-[12px]">
              <Link
                className="text-sm font-normal text-dark-3 underline leading-[21px]"
                href="#"
              >
                What distinguishes AutoProsper's approach to car buying?
              </Link>
            </div>
          ),
        },
      ],
      button: {
        text: "VIEW ALL FAQS",
        icon: <ArrowRight width="18" height="18" className="ml-[5px] fill-dark-4" />,
      },
    },

    {
      title: "Resources",
      list: [
        {
          element: (
            <div className="flex-col gap-[5px]">
              <Link href="#">
                <h1 className="text-dark font-normal text-sm">
                  2024 Nissan Kicks®
                </h1>
                <p className="p-0 m-0 font-normal text-sm text-dark-3 leading-[21px]">
                  Calculate your affordable car budget. Explore vehicles within
                  your financial range based on your affordability assessment.
                </p>
              </Link>
            </div>
          ),
        },
        {
          element: (
            <div className="flex-col gap-[5px] mt-[15px]">
              <Link href="#">
                <h1 className="text-dark font-normal text-sm">
                  2024 Nissan Kicks®
                </h1>
                <p className="p-0 m-0 font-normal text-sm text-dark-3 leading-[21px]">
                  Calculate your affordable car budget. Explore vehicles within
                  your financial range based on your affordability assessment.
                </p>
              </Link>
            </div>
          ),
        },
      ],
      button: {
        text: "READ MORE ARTICLE",
        icon: <ArrowRight width="18" height="18" className="ml-[5px] fill-dark-4" />,
      },
    },
  ];

  return (
    <div className="flex flex-col md:flex-row lg:py-[30px] md:py-[15px] container md:divide-x-[1px] md:divide-gray">
      <SheetSectionItems title="SELL OR TRADE-IN" items={navigationData} />
      <div className="md:pl-[36px] lg:pl-[72px]  mt-[30px] gap-[24px] flex flex-col md:flex-row">
        {contents.map((content) => (
          <SheetSectionDetails content={content} />
        ))}
      </div>
    </div>
  );
};

export default SellTrade;
