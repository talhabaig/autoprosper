import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowDown, ArrowRight, QuestionMarkRounded } from "../../Icons/Icons";
import { SuggestionForCustomer } from "../../../assests/interfaces/Home/index";
import Button from "../../Common/Button/Button";
import Link from "next/link";
import { useFirstBuyer } from "@/components/Common/context/FirstTimeBuyerContext";
import { getCarSuggestions } from "../OpenAI";
// const cardData: SuggestionForCustomer[] = [
//   {
//     id: 1,
//     imageSrc: "/suggestionForYou/white-nissan.png",
//     heading: "2024 Nissan Kicks®",
//     totalamount: "$ 13,420",
//     downpayment: "$2,420",
//     monthlypayment: "$480",
//     variant: "LS",
//   },
//   {
//     id: 2,
//     imageSrc: "/suggestionForYou/blue-nissan.png",
//     heading: "2018 Chevrolet Trax",
//     totalamount: "$ 13,420",
//     downpayment: "$2,420",
//     monthlypayment: "$480",
//     variant: "LS",
//   },
//   {
//     id: 3,
//     imageSrc: "/suggestionForYou/white-nissan.png",
//     heading: "2015 Ford Escape",
//     totalamount: "$ 13,420",
//     downpayment: "$2,420",
//     monthlypayment: "$480",
//     variant: "LS",
//   },
//   {
//     id: 4,
//     imageSrc: "/suggestionForYou/blue-nissan.png",
//     heading: "2015 Hyundai Elantra",
//     totalamount: "$ 13,420",
//     downpayment: "$2,420",
//     monthlypayment: "$480",
//     variant: "LS",
//   },
// ];

const SuggestionForYou = () => {
  const { state, setState } = useFirstBuyer();
  const [cardData, setCardData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchData(state);
  }, []);
  const fetchData = async (state: any) => {
    try {
      setLoading(true);
      const res = await getCarSuggestions(state);
      const modifiedRes = res.map((x: any) => ({
        ...x,
        imageSrc: "/suggestionForYou/white-nissan.png",
      }));
      setCardData(modifiedRes);
      setLoading(false);
      setState({
        Preferred_car_brand: [],
      });
    } catch (error) {
      // Handle the error here or log it
      console.error("Error fetching data:", error);
      // Optionally, you can throw the error again if you want to propagate it further
      // throw error;
    }
  };
  return (
    <>
      <div className="max-w-[940px] mx-auto pt-[28px] xl:pt-[38px] 3xl:pt-[48px]">
        <h2 className="heading1">Suggestions for you</h2>
        <p
          className="text-dark-2 text-center  mb-[1.5rem] md:mb-[1.875rem] lg:mb-[2.5rem] 2xl:mb-[3rem]   lg:text-[1rem] 
         xl:text-[1.25rem] xl:leading-[1.5]"
        >
          Explore these curated options we think will suit your preferences and
          needs.
        </p>
      </div>
      {loading ? (
        <>
          <div
            className={`flex flex-wrap md:justify-between md:items-stretch gap-[0.625rem]
         lg:gap-[1.125rem] 3xl:gap-6  `}
          >
            {[...Array(4)].map((x, i) => (
              <div
                className="flex-grow max-w-[324px] mx-auto md:mx-0 w-full md:max-w-[47%] lg:max-w-[31%] 
        2xl:max-w-[23%]  flex-[0_0_auto] rounded-[12px]  
       first-of-type:shadow-[0px_36px_72px_-18px_rgba(10,24,53,0.25)] p-[1px] mb-[1.875rem] 2xl:mb-[3.5rem]
       first-of-type:bg-btn-primary-gradient shadow-[0px_18px_36px_-18px_rgba(10,24,53,0.25)] bg-bg-none
       [&>span]:font-bold"
              >
                <div className="card translate-3d-none-after card translate-3d-none-after relative flex w-full flex-col overflow-hidden  rounded-md bg-white   p-2">
                  <div
                    className="text-primary-500 group relative"
                    style={{ paddingTop: "70%" }}
                  >
                    <div className="absolute top-0 left-0 h-full w-full">
                      <span className="skeleton-box transform-center block h-full transition-transform"></span>
                    </div>
                  </div>
                  <div className="flex flex-grow flex-col">
                    <div className="relative mb-4 flex-grow  pr-4 pt-4 text-left">
                      <h3 className="text-gray-darkest mr-10 text-lg font-bold">
                        <span className="skeleton-box inline-block h-5 w-1/6"></span>
                        <span className="skeleton-box inline-block h-5 w-1/2"></span>
                        <span className="skeleton-box inline-block h-5 w-2/4"></span>
                        <span className="skeleton-box inline-block h-5 w-2/5"></span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div
          className={`flex flex-wrap md:justify-between md:items-stretch gap-[0.625rem]
          lg:gap-[1.125rem] 3xl:gap-6  `}
        >
          {cardData.map((item: any, index) => (
            <div
              key={item?.id}
              className="flex-grow max-w-[324px] mx-auto md:mx-0 w-full md:max-w-[47%] lg:max-w-[31%] 
               2xl:max-w-[23%]  flex-[0_0_auto] rounded-[12px]  
              first-of-type:shadow-[0px_36px_72px_-18px_rgba(10,24,53,0.25)] p-[1px] mb-[1.875rem] 2xl:mb-[3.5rem]
              first-of-type:bg-btn-primary-gradient shadow-[0px_18px_36px_-18px_rgba(10,24,53,0.25)] bg-bg-none
              [&>span]:font-bold 
              "
            >
              <div className="h-full bg-white rounded-[12px]">
                <div
                  className="rounded-tr-[12px]  max-w-[80%] mx-auto  flex justify-center items-center rounded-tl-[12px] 
                px-[4px] pt-[24px] pb-[14px] overflow-hidden bg-white"
                >
                  {/*  before:content-[''] before:absolute 
                   before:h-full before:top-[-50px] before:left-0 before:w-full  before:inline-block
                   before:bg-[url('/suggestionForYou/bg-car-cloud-shape.png')] before:bg-no-repeat before:bg-[100%_auto] */}
                  <div className="relative max-w-[254px]">
                    <Image
                      src={"/suggestionForYou/bg-car-cloud-shape.png"}
                      width={246}
                      height={246}
                      className="rounded-tr-[12px] rounded-tl-[12px] min-w-full"
                      alt={item.CarModel || ""}
                    />
                    <Image
                      src={item.imageSrc ? item.imageSrc : ""}
                      width={260}
                      height={126}
                      className="mt-[-68px] xl:mt-[-66px] 2xl:mt-[-68px] 3xl:mt-[-66px] max-w-[260px] max-h-[126px]"
                      alt={item.CarModel || ""}
                    />
                  </div>
                </div>
                <div
                  className="py-[0.9375rem] xl:py-[1.5rem] px-[0.938rem]   xl:px-[1.5rem]
                 3xl:px-[1.875rem] bg-white rounded-br-[12px] rounded-bl-[12px] flex flex-col justify-between"
                >
                  <h3 className="heading4 truncate text-[18px]">
                    {item?.CarModel + item?.CarYear}
                  </h3>
                  <div className="flex items-center gap-[8px] mb-4 md:mb-[20px] lg:mb-6 ">
                    <span
                      className="inline-flex items-center justify-center p-[5px_10px] uppercase
                   bg-dark-7 tracking-[1.08px] text-dark-3 rounded-[100px] text-[12px] font-bold "
                    >
                      {" "}
                      {item?.variant}
                    </span>
                    <span className="text-[14px] text-dark-3 inline-block leading-[150%]">
                      {" "}
                      {item?.totalamount}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-[8px] text-[14px] leading-[150%]">
                    <div className="flex items-center gap-[8px] w-[49.5%]">
                      <span>
                        <ArrowDown className="w-[24px] h-[24px]" />
                      </span>
                      <span className="inline-block text-dark font-semibold">
                        {item?.downpayment}
                      </span>
                    </div>
                    <div
                      className="text-dark w-[49.5%] font-semibold pl-[12px] 
                    border-l border-solid border-dark flex justify-end"
                    >
                      {item?.monthlypayment}/mo
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="flex flex-col items-center justify-center pb-[30px]">
        <Link href="/login">
          <Button
            variant="primary"
            label="Shop All Cars"
            className="min-w-[244px] xl:min-w-[290px] mb-[24px]"
            children={
              <ArrowRight className="fill-primary-text w-[1.125rem] h-[1.125rem] lg:w-[1.25rem] lg:h-[1.25rem]" />
            }
          />
        </Link>
        <div className="flex items-center gap-[8px] mb-[24px]">
          <QuestionMarkRounded className="w-[18px] h-[18px] 2xl:w-[20px] 2xl:h-[20px]" />{" "}
          <span className="text-[#FF3363] font-bold">
            See financing details
          </span>
        </div>
        <span className="block max-w-[690px] mx-auto text-dark-3 text-[14px] text-center">
          *Vehicle prices exclude taxes and finance charges and, subject to
          state law, exclude doc fees up to $299 and other applicable fees.
          Vehicles available for sale at the identified location only.
        </span>
      </div>
    </>
  );
};

export default SuggestionForYou;
