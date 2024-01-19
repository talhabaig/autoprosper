import {
  SheetSectionDetails,
  SheetSectionItems,
} from "@/components/ui/sheet";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

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
    }
  ];

  const contents = [
    {
      title: "FAQs",
      list: [
        {
          element: (
            <div>
              <Link
                className="text-xs font-normal text-dark-muted underline leading-[18px]"
                href="#"
              >
                What values guide AutoProsper's operations?
              </Link>
            </div>
          ),
        },
        {
          element: (
            <div>
              <Link
                className="text-xs font-normal text-dark-muted underline leading-[18px]"
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
        icon: <ArrowRightIcon className="ml-[5px]" />,
      },
    },

    {
      title: "Resources",
      list: [
        {
          element: (
            <div className="flex-col gap-[5px]">
              <Link href="#">
                <h1 className="text-primary-text font-normal text-sm">
                  2024 Nissan Kicks®
                </h1>
                <p className="p-0 m-0 font-normal text-[10px] text-dark-muted">
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
                <h1 className="text-primary-text font-normal text-sm">
                  2024 Nissan Kicks®
                </h1>
                <p className="p-0 m-0 font-normal text-[10px] text-dark-muted">
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
        icon: <ArrowRightIcon className="ml-[5px]" />,
      },
    },
  ];

  return (
    <div className="flex flex-col md:flex-row  lg:pl-40 lg:py-[30px] md:pl-10 md:py-[15px] md:divide-x-[1px] md:divide-gray">
      <SheetSectionItems title="Car Question Answered" items={navigationData} />
      <div className="px-[15px]  mt-[30px] gap-[30px] flex flex-col md:flex-row">
        {contents.map((content) => (
          <SheetSectionDetails content={content} />
        ))}
      </div>
    </div>
  );
};

export default Learn;
