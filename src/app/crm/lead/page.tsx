import React from "react";
import styles from "./crmLead.module.css";
import Image from "next/image";
import {
  ArrowDown,
  AttachIcon,
  BasicLocationIcon,
  BasicMailIcon,
  BasicPhoneIcon,
  CloseIcon,
  CrownIcon,
  DocumentIcon,
  FireIcon,
  MessageIcon,
  PaymentIcon,
  Plusicon,
  PrintFill,
  SelectArrow,
  ShareFill,
  TrippleDots,
  WarningFill,
  WarningOutline,
} from "../../../components/Icons/Icons";
import { Button } from "@/components/ui/button";
import EmailAndSms from "@/components/Crm/EmailAndSms/EmailAndSms";
import { Select } from "@/components/ui/input";
import CheckIcon from "@/components/Icons/CheckIcon";
import { QuickFilters } from "@/components/Crm/QuickFilters/QuickFilters";
import { TextBox } from "@/components/ui/InputCustom";
import SalesActivity from "@/components/Crm/SalesActivity/SalesActivity";
import { Switch } from "@/components/ui/switch";

const Page = () => {
  return (
    <div className="max-w-[1740px] mx-auto px-[15px] bg-[#F0F4F3]">
      <section className={styles.crmWrapperr}>
        <div
          className={`${styles.gallery__item} ${styles["gallery__item--1"]}`}
        >
          <span className={styles.gallery__item_num}>
            <div className="flex flex-col bg-white rounded-2xl p-[24px_16px] gap-[12px]">
              <div className="flex gap-[2px]">
                <FireIcon />
                <FireIcon />
                <FireIcon />
              </div>
              <div className="flex flex-col gap-[16px]">
                <div className="flex flex-col gap-[12px]">
                  <h5 className="font-bold text-lg w-full text-left text-dark not-italic leading-[23.4px]">
                    Kyle Dyson
                  </h5>
                  <p className="text-dark-2 text-xs font-normal leading-[18px] m-0">
                    Prospect ID: J5NTYX5P3E
                  </p>
                </div>
                <div className="flex flex-col gap-[11px]">
                  <div className="flex flex-row gap-[16px]">
                    <BasicLocationIcon />
                    <p className="text-dark-2 text-xs font-normal leading-[18px] m-0">
                      12101 Creek Point Dr Frisco TX 75035
                    </p>
                  </div>
                  <div className="flex flex-row gap-[16px]">
                    <BasicPhoneIcon />
                    <p className="text-dark-2 text-xs font-normal leading-[18px] m-0">
                      (469) 266-3336
                    </p>
                  </div>
                  <div className="flex flex-row gap-[16px]">
                    <BasicMailIcon />
                    <p className="text-dark-2 text-xs font-normal leading-[18px] m-0">
                      kdodson11@yahoo.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </span>
        </div>
        <div
          className={`${styles.gallery__item} ${styles["gallery__item--2"]}`}
        >
          <div className="bg-white w-full h-full md:py-[24px] md:px-[16px]">
            <div className="flex flex-col items-center w-full">
              <div className="font-bold text-xs bg-green py-[9px] mt-[20px] px-[42px] text-dark rounded-full">
                How can we sell today
              </div>

              <img
                src="/images/robot.png"
                className="w-[95px] h-[155px] md:w-[147px] md:h-[240px]"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-[8px] px-[16px]">
              <div className="flex cursor-pointer flex-col gap-[7px] bg-greenish-blue rounded-xl pt-[8px] pb-[10px] px-[16px]">
                <div className="text-xs text-dark font-normal">
                  do eiusmod tempor incididunt
                </div>
                <div className="text-dark-4 font-bold text-[9px] leading-[11.34px]">
                  Duis aute irure dolor in reprehenderit in ..
                </div>
              </div>
              <div className="flex cursor-pointer flex-col gap-[7px] bg-greenish-blue rounded-xl pt-[8px] pb-[10px] px-[16px]">
                <div className="text-xs text-dark font-normal">
                  do eiusmod tempor incididunt
                </div>
                <div className="text-dark-4 font-bold text-[9px] leading-[11.34px]">
                  Duis aute irure dolor in reprehenderit in ..
                </div>
              </div>
              <div className="flex cursor-pointer flex-col gap-[7px] bg-greenish-blue rounded-xl pt-[8px] pb-[10px] px-[16px]">
                <div className="text-xs text-dark font-normal">
                  do eiusmod tempor incididunt
                </div>
                <div className="text-dark-4 font-bold text-[9px] leading-[11.34px]">
                  Duis aute irure dolor in reprehenderit in ..
                </div>
              </div>
              <div className="flex cursor-pointer flex-col gap-[7px] bg-greenish-blue rounded-xl pt-[8px] pb-[10px] px-[16px]">
                <div className="text-xs text-dark font-normal">
                  do eiusmod tempor incididunt
                </div>
                <div className="text-dark-4 font-bold text-[9px] leading-[11.34px]">
                  Duis aute irure dolor in reprehenderit in ..
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full gap-[12px] mt-[16px] px-[16px] pb-[24px]">
              <div className="flex flex-row border border-dark-4 w-full rounded-xl h-[52px] pl-[16px] pr-[17px] justify-between items-center">
                <input
                  type="text"
                  placeholder="Type"
                  className="text-dark-4 text-xs appearance-none outline-none border-none w-full"
                />
                <AttachIcon className="cursor-pointer" />
              </div>

              <Button
                variant="gradient"
                size="md"
                className="w-full h-[36px] md:h-[46px] text-[13px] md:text-[14px]"
              >
                Send
              </Button>
            </div>
          </div>
        </div>
        <div
          className={`${styles.gallery__item} ${styles["gallery__item--3"]}`}
        >
          <span className={styles.gallery__item_num}>
            <div className="flex border border-dark-4 rounded-xl py-[17px] pl-[18px] pr-[17px] bg-white">
              <select className="w-full">
                <option key={"opt"} value={"Dealer finance"}>
                  Dealer finance
                </option>
              </select>
            </div>
          </span>
        </div>
        <div
          className={`${styles.gallery__item} ${styles["gallery__item--4"]}`}
        >
          <span className={styles.gallery__item_num}>
            <div className="bg-white rounded-2xl px-[16px] pt-[12px] pb-[23px] flex flex-col gap-[16px]">
              <div className="flex justify-end gap-[12px]">
                <TrippleDots className="cursor-pointer" />
                <CloseIcon className="cursor-pointer" />
              </div>
              <div className="flex flex-col gap-[24px]">
                <Image src="/Crm/logo.png" alt="Logo" width="189" height="31" />
                <Button
                  variant="gradient"
                  size="md"
                  className="w-full h-[36px] md:h-[46px]"
                >
                  <Plusicon className="mr-[6px]" /> Send
                </Button>
              </div>
            </div>
          </span>
        </div>
        <div
          className={`${styles.gallery__item} ${styles["gallery__item--5"]}`}
        >
          <div className="bg-white rounded-2xl py-[24px] px-[16px] flex flex-col gap-[42px]">
            <div className="flex flex-col gap-[24px]">
              <div className="flex flex-col gap-[4px]">
                <div className="flex gap-[10px] items-center">
                  <div className="text-lg text-dark font-bold leading-[23.4px]">
                    Affinity Partner
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <div className="w-[4px] h-[4px] bg-dark rounded-full"></div>
                    <div className="text-xs text-dark-2">5min</div>
                  </div>
                </div>
                <div className="text-dark-2 text-xs">Lifecare</div>
              </div>
              <div className="flex flex-col gap-[8px]">
                <div className="text-dark font-bold text-sm">Comments</div>
                <div className="text-dark-2 text-xs">
                  <span className="text-dark font-bold leading-[18px]">
                    ***BUYER'S BONUS***
                  </span>{" "}
                  Auto Repair Expense Reimbursement: Auto Deductible
                  Reimbursement: Auto Expert Opinion.
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full gap-[12px]">
              <Select
                className="w-full"
                label="Lead conversion phase"
                options={[{ label: "Warm-Engaged", value: "1" }]}
              />

              <Button
                variant="gradient"
                size="md"
                className="w-full h-[36px] md:h-[46px]"
              >
                <CheckIcon className="mr-[6px]" /> Mark as sold
              </Button>
            </div>
          </div>
        </div>
        <div
          className={`${styles.gallery__item} ${styles["gallery__item--6"]}`}
        >
          <span className={styles.gallery__item_num}>
            <div className="bg-white rounded-2xl flex flex-col gap-[45px]">
              <div className="flex flex-col px-[24px] pt-[30px] gap-[12px] md:gap-[16px]">
                <div className="flex gap-[5px] md:gap-[12px] h-[82px] md:h-[123px]">
                  <img
                    src="/images/avatar-1.png"
                    className="h-[16px] w-[16px] md:h-[40px] md:w-[40px] self-end"
                    alt="avatar"
                  />
                  <div className="rounded-t-[16px] rouded-br-[16px] h-[74px] md:h-[100px] max-w-[262px] md:max-w-[508px] bg-refreshing-cyan px-[12px] py-[10px] md:px-[30px] md:py-[25px] text-[12px] md:text-[16px] leading-[18px] md:leading-[24px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore
                  </div>
                </div>
                <div className="flex flex-row-reverse gap-[5px] md:gap-[12px] h-[82px] md:h-[123px]">
                  <img
                    src="/images/avatar-2.png"
                    className="h-[16px] w-[16px] md:h-[40px] md:w-[40px] self-end"
                    alt="avatar"
                  />
                  <div className="rounded-t-[16px] rouded-bl-[16px] h-[74px] md:h-[100px] max-w-[262px] md:max-w-[508px] bg-yellow-light px-[12px] py-[10px] md:px-[30px] md:py-[25px] text-[12px] md:text-[16px] leading-[18px] md:leading-[24px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore
                  </div>
                </div>
                <div className="flex gap-[5px] md:gap-[12px] h-[82px] md:h-[123px]">
                  <img
                    src="/images/avatar-1.png"
                    className="h-[16px] w-[16px] md:h-[40px] md:w-[40px] self-end"
                    alt="avatar"
                  />
                  <div className="rounded-t-[16px] rouded-br-[16px] h-[74px] md:h-[100px] max-w-[262px] md:max-w-[508px] bg-refreshing-cyan px-[12px] py-[10px] md:px-[30px] md:py-[25px] text-[12px] md:text-[16px] leading-[18px] md:leading-[24px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore
                  </div>
                </div>
              </div>
              <div className="px-[16px] pb-[24px]">
                <div className="flex flex-col bg-green-light rounded-2xl px-[16px] py-[24px]">
                  <textarea
                    placeholder="Leave a comment"
                    className="bg-transparent appearance-none outline-none text-dark-4 text-sm"
                  />
                  <div className="flex gap-[14px]">
                    <div className="flex w-full justify-end items-center cursor-pointer gap-[5px]">
                      <AttachIcon width="14" height="14" />
                      <div className="text-dark text-[10px] leading-[15px]">
                        Attachment
                      </div>
                    </div>
                    <Button
                      variant="gradient"
                      size="md"
                      className="h-[36px] w-[146px] !text-[13px] !px-[20px]"
                    >
                      Comment
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </span>
        </div>
        <div
          className={`${styles.gallery__item} ${styles["gallery__item--7"]}`}
        >
          <span className={styles.gallery__item_num}>
            <div className="flex flex-col gap-[12px] rounded-2xl p-[10px] bg-white ">
              <div className="rounded-xl bg-yellow flex flex-col gap-[10px] py-[16px] px-[12px] items-center">
                <CrownIcon />
                <div className="text-dark text-sm font-bold">
                  You have 4 offers
                </div>
              </div>
              <div className="rounded-xl bg-green-light flex flex-col gap-[24px] py-[16px] px-[12px]">
                <div className="flex flex-col gap-[10px]">
                  <div className="flex flex-col gap-[5px[">
                    <div className="text-dark font-bold text-sm text-center">
                      2017 Nissan Maxima
                    </div>
                    <div className="text-dark-3 text-[10px] leading-[15px] text-center">
                      (Pre-Approved)
                    </div>
                  </div>
                  <div className="text-[10px] leading-[15px] text-dark-4 text-center">
                    <span className="text-dark font-bold text-lg">$210</span>/mo
                  </div>
                </div>
                <div className="flex flex-col gap-[8px] border-t-[1px] border-dark-6 pt-[16px]">
                  <div className="flex justify-between">
                    <div className="text-dark-3 text-[10px] leading-[15px]">
                      APR
                    </div>
                    <div className="text-dark font-bold text-xs ">18.0%</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-dark-3 text-[10px] leading-[15px]">
                      Loan Amount
                    </div>
                    <div className="text-dark font-bold text-xs">$16,065</div>
                  </div>
                </div>
              </div>
              <div className="rounded-xl bg-green-light flex flex-col gap-[24px] py-[16px] px-[12px]">
                <div className="flex flex-col gap-[10px]">
                  <div className="flex flex-col gap-[5px[">
                    <div className="text-dark font-bold text-sm text-center">
                      2017 Nissan Maxima
                    </div>
                    <div className="text-dark-3 text-[10px] leading-[15px] text-center">
                      (Pre-Approved)
                    </div>
                  </div>
                  <div className="text-[10px] leading-[15px] text-dark-4 text-center">
                    <span className="text-dark font-bold text-lg">$210</span>/mo
                  </div>
                </div>
                <div className="flex flex-col gap-[8px] border-t-[1px] border-dark-6 pt-[16px]">
                  <div className="flex justify-between">
                    <div className="text-dark-3 text-[10px] leading-[15px]">
                      APR
                    </div>
                    <div className="text-dark font-bold text-xs ">18.0%</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-dark-3 text-[10px] leading-[15px]">
                      Loan Amount
                    </div>
                    <div className="text-dark font-bold text-xs">$16,065</div>
                  </div>
                </div>
              </div>
              <div className="rounded-xl bg-green-light flex flex-col gap-[24px] py-[16px] px-[12px]">
                <div className="flex flex-col gap-[10px]">
                  <div className="flex flex-col gap-[5px[">
                    <div className="text-dark font-bold text-sm text-center">
                      2017 Nissan Maxima
                    </div>
                    <div className="text-dark-3 text-[10px] leading-[15px] text-center">
                      (Pre-Approved)
                    </div>
                  </div>
                  <div className="text-[10px] leading-[15px] text-dark-4 text-center">
                    <span className="text-dark font-bold text-lg">$210</span>/mo
                  </div>
                </div>
                <div className="flex flex-col gap-[8px] border-t-[1px] border-dark-6 pt-[16px]">
                  <div className="flex justify-between">
                    <div className="text-dark-3 text-[10px] leading-[15px]">
                      APR
                    </div>
                    <div className="text-dark font-bold text-xs ">18.0%</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-dark-3 text-[10px] leading-[15px]">
                      Loan Amount
                    </div>
                    <div className="text-dark font-bold text-xs">$16,065</div>
                  </div>
                </div>
              </div>
              <div className="rounded-xl bg-green-light flex flex-col gap-[24px] py-[16px] px-[12px]">
                <div className="flex flex-col gap-[10px]">
                  <div className="flex flex-col gap-[5px[">
                    <div className="text-dark font-bold text-sm text-center">
                      2017 Nissan Maxima
                    </div>
                    <div className="text-dark-3 text-[10px] leading-[15px] text-center">
                      (Pre-Approved)
                    </div>
                  </div>
                  <div className="text-[10px] leading-[15px] text-dark-4 text-center">
                    <span className="text-dark font-bold text-lg">$210</span>/mo
                  </div>
                </div>
                <div className="flex flex-col gap-[8px] border-t-[1px] border-dark-6 pt-[16px]">
                  <div className="flex justify-between">
                    <div className="text-dark-3 text-[10px] leading-[15px]">
                      APR
                    </div>
                    <div className="text-dark font-bold text-xs ">18.0%</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-dark-3 text-[10px] leading-[15px]">
                      Loan Amount
                    </div>
                    <div className="text-dark font-bold text-xs">$16,065</div>
                  </div>
                </div>
              </div>

              <Button
                variant="gradient"
                size="md"
                className="!h-[36px] w-full !text-[13px]"
              >
                Add New Vehicle
              </Button>
            </div>
          </span>
        </div>
        <div
          className={`${styles.gallery__item} ${styles["gallery__item--8"]}`}
        >
          <span className={styles.gallery__item_num}>
            <div className="flex flex-col gap-[12px]">
              <div className="flex flex-col bg-white rounded-2xl gap-[24px]">
                <div className="px-[10px] pt-[10px]">
                  <div className="relative max-w-[310px] flex flex-col justify-center items-center mx-auto">
                    <Image
                      src={"/producDetail/bg-cloud-product-detail.png"}
                      width={446}
                      height={214}
                      className="rounded-tr-[12px] rounded-tl-[12px] min-w-full"
                      alt="image"
                    />

                    <div
                      className={`mt-[-60px]  max-w-[310px] sm:mt-[-80px] max-h-[127px]`}
                    >
                      <Image
                        src={"/producDetail/product-detail.png"}
                        width={232}
                        height={146}
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[16px] px-[16px] pb-[24px]">
                  <div className="flex flex-col gap-[12px]">
                    <div className="text-dark text-sm">2024 Nissan Kicks®</div>
                    <div className="flex flex-row gap-[8px] items-center">
                      <div className="bg-dark-7 rounded-full text-dark-3 text-[10px] font-bold leading-[12.6px] px-[8px] py-[4px]">
                        SE
                      </div>
                      <div className="text-dark-3 text-[10px] leading-[15px]">
                        $12,480
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex gap-[8px] text-dark font-semibold text-sm">
                      <ArrowDown width="20" height="20" /> $4,280
                    </div>
                    <div className="w-[1px] bg-dark"></div>
                    <div className="text-dark font-semibold text-sm">
                      $210/mo
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col bg-white rounded-2xl gap-[24px]">
                <div className="px-[10px] pt-[10px]">
                  <div className="relative max-w-[310px] flex flex-col justify-center items-center mx-auto">
                    <Image
                      src={"/producDetail/bg-cloud-product-detail.png"}
                      width={446}
                      height={214}
                      className="rounded-tr-[12px] rounded-tl-[12px] min-w-full"
                      alt="image"
                    />

                    <div
                      className={`mt-[-60px]  max-w-[310px] sm:mt-[-80px] max-h-[127px]`}
                    >
                      <Image
                        src={"/producDetail/product-detail.png"}
                        width={232}
                        height={146}
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[16px] px-[16px] pb-[24px]">
                  <div className="flex flex-col gap-[12px]">
                    <div className="text-dark text-sm">2024 Nissan Kicks®</div>
                    <div className="flex flex-row gap-[8px] items-center">
                      <div className="bg-dark-7 rounded-full text-dark-3 text-[10px] font-bold leading-[12.6px] px-[8px] py-[4px]">
                        SE
                      </div>
                      <div className="text-dark-3 text-[10px] leading-[15px]">
                        $12,480
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex gap-[8px] text-dark font-semibold text-sm">
                      <ArrowDown width="20" height="20" /> $4,280
                    </div>
                    <div className="w-[1px] bg-dark"></div>
                    <div className="text-dark font-semibold text-sm">
                      $210/mo
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col bg-white rounded-2xl gap-[24px]">
                <div className="px-[10px] pt-[10px]">
                  <div className="relative max-w-[310px] flex flex-col justify-center items-center mx-auto">
                    <Image
                      src={"/producDetail/bg-cloud-product-detail.png"}
                      width={446}
                      height={214}
                      className="rounded-tr-[12px] rounded-tl-[12px] min-w-full"
                      alt="image"
                    />

                    <div
                      className={`mt-[-60px]  max-w-[310px] sm:mt-[-80px] max-h-[127px]`}
                    >
                      <Image
                        src={"/producDetail/product-detail.png"}
                        width={232}
                        height={146}
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[16px] px-[16px] pb-[24px]">
                  <div className="flex flex-col gap-[12px]">
                    <div className="text-dark text-sm">2024 Nissan Kicks®</div>
                    <div className="flex flex-row gap-[8px] items-center">
                      <div className="bg-dark-7 rounded-full text-dark-3 text-[10px] font-bold leading-[12.6px] px-[8px] py-[4px]">
                        SE
                      </div>
                      <div className="text-dark-3 text-[10px] leading-[15px]">
                        $12,480
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex gap-[8px] text-dark font-semibold text-sm">
                      <ArrowDown width="20" height="20" /> $4,280
                    </div>
                    <div className="w-[1px] bg-dark"></div>
                    <div className="text-dark font-semibold text-sm">
                      $210/mo
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </span>
        </div>
        <div
          className={`${styles.gallery__item} ${styles["gallery__item--9"]}`}
        >
          <span className={styles.gallery__item_num}>
            <div className="flex flex-col rounded-2xl px-[16px] py-[24px] bg-white">
              <div className="flex flex-col gap-[4px]">
                <div className="flex justify-between items-center">
                  <div className="text-dark font-bold text-lg">
                    Within Range
                  </div>
                  <WarningFill />
                </div>
                <div className="text-dark-2 text-xs">Lead fraud risk</div>
              </div>
              <div className="w-full h-[1px] bg-dark-6 mt-[16px] mb-[20px]"></div>
              <div className="flex flex-col gap-[11px]">
                <div className="flex justify-between">
                  <div className="text-dark text-xs">Assignee:</div>
                  <div className="flex gap-[5px] items-center">
                    <img
                      src="/images/avatar-2.png"
                      className="w-[20px] h-[20px]"
                    />
                    <div className="font-bold text-dark text-xs">Cameron</div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="text-dark text-xs">Priority:</div>
                  <div className="flex gap-[5px] items-center">
                    <WarningOutline />
                    <div className="font-bold text-dark text-xs">ASAP</div>
                  </div>
                </div>
              </div>
              <Button className="mt-[24px]">A.I WARM UP</Button>
            </div>
          </span>
        </div>
        <div
          className={`${styles.gallery__item} ${styles["gallery__item--10"]}`}
        >
          <span className={styles.gallery__item_num}>
            <div className="bg-white rounded-2xl flex flex-col gap-[8px] px-[16px] py-[24px]">
              <div className="text-sm md:text-lg text-dark-3">
                <span className="font-bold text-dark">VIN:</span>{" "}
                2G1105S3XK9135707
              </div>
              <div className="text-sm md:text-lg text-dark-3">
                <span className="font-bold text-dark">Vehicle:</span> 2019
                CHEVROLET IMPAPA(57,857 miles)
              </div>
            </div>
          </span>
        </div>
        <div
          className={`${styles.gallery__item} ${styles["gallery__item--11"]}`}
        >
          <span className={styles.gallery__item_num}>
            <div className="bg-white rounded-2xl flex flex-col md:flex-row px-[16px] py-[24px] gap-[12px] md:gap-[26px]">
              <div className="text-dark-3 text-sm font-semibold">
                Related dates:
              </div>
              <div className="flex flex-col md:flex-row gap-[8px] md:gap-[25px]">
                <div className="text-xs md:text-sm font-bold text-primary">
                  2021 Chevrolet Malibu
                </div>
                <div className="text-xs md:text-sm font-bold text-primary">
                  2017 Nissan Maxima
                </div>
              </div>
            </div>
          </span>
        </div>
        <div
          className={`${styles.gallery__item} ${styles["gallery__item--12"]}`}
        >
          <span className={styles.gallery__item_num}>
            <SalesActivity />
          </span>
        </div>
        <div
          className={`${styles.gallery__item} ${styles["gallery__item--13"]}`}
        >
          <span className={styles.gallery__item_num}>
            <div className="bg-white py-[23px] px-[16px] rounded-2xl">
              <div className="flex flex-col md:flex-row gap-[12px] md:gap-[16px] items-center">
                <div className="text-dark text-sm md:text-lg font-bold ">
                  Total loan amount (owed to Bank)
                </div>
                <div className="flex flex-col md:flex-row gap-[16px] md:gap-[48px] items-start md:items-center">
                  <div className="bg-dark-7 px-[8px] md:px-[10px] py-[4px] md:py-[5px] rounded-full text-dark-3 font-bold text-[10px] leading-[12.6px] md:text-xs tracking-[0.09em]">
                    Monthly payment (1st due 01 mar2024)
                  </div>
                  <div className="bg-dark px-[20px] py-[13px] text-white text-[13px] font-bold rounded-full">
                    $20,811.25
                  </div>
                </div>
              </div>
            </div>
          </span>
        </div>
        <div
          className={`${styles.gallery__item} ${styles["gallery__item--14"]}`}
        >
          <span className={styles.gallery__item_num}>
            <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-[24px]">
              <div className="bg-white rounded-2xl px-[10px] pt-[11px] pb-[45px] flex flex-col">
                <div className="flex flex-col gap-[10px] bg-dark-7 py-[18px] rounded-2xl">
                  <div className="font-bold text-dark-3 text-lg text-center">
                    Purchase Price
                  </div>
                  <div className="font-bold text-dark text-[24px] leading-[31.2px] text-center">
                    $22,050
                  </div>
                </div>
                <div className="flex justify-between md:pt-[24px] px-[6px] pt-[16px] md:px-[37px]">
                  <div className="flex flex-col items-center gap-[16px]">
                    <Switch checked />
                    <div className="flex flex-col gap-[12px]">
                      <div className="text-dark-3 max-w-[79px] md:max-w-none text-xs md:text-sm text-center">
                        Extended warranty
                      </div>
                      <div className="text-dark text-sm md:text-lg font-bold text-center">
                        $2,450
                      </div>
                    </div>
                  </div>
                  <div className="w-[1px] bg-dark-5"></div>
                  <div className="flex flex-col items-center gap-[16px]">
                    <Switch />
                    <div className="flex flex-col gap-[12px]">
                      <div className="text-dark-3 max-w-[79px] md:max-w-none text-xs md:text-sm text-center">
                        GAP Insurance
                      </div>
                      <div className="text-dark text-sm md:text-lg font-bold text-center">
                        $750
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl px-[10px] pt-[11px] pb-[45px] flex flex-col">
                <div className="flex flex-col gap-[10px] bg-dark-7 py-[18px] rounded-2xl">
                  <div className="font-bold text-dark-3 text-lg text-center">
                    Trade in value
                  </div>
                  <div className="font-bold text-dark text-[24px] leading-[31.2px] text-center">
                    $2,050
                  </div>
                </div>
                <div className="flex justify-center pt-[24px] px-[37px]">
                  <div className="flex flex-col items-center gap-[16px]">
                    <Switch checked />
                    <div className="flex flex-col gap-[12px]">
                      <div className="text-dark-3 text-xs md:text-sm text-center">
                        Admin
                      </div>
                      <div className="flex gap-[12px]">
                        <ShareFill className="cursor-pointer" />{" "}
                        <PrintFill className="cursor-pointer" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl px-[10px] pt-[11px] pb-[45px] flex flex-col">
                <div className="flex flex-col gap-[10px] bg-dark-7 py-[18px] rounded-2xl">
                  <div className="font-bold text-dark-3 text-lg text-center">
                    Down payment
                  </div>
                  <div className="font-bold text-dark text-[24px] leading-[31.2px] text-center">
                    $4,500{" "}
                    <span className="text-sm text-dark-3 font-normal">
                      (20.41%)
                    </span>
                  </div>
                </div>
                <div className="flex justify-center items-center pt-[38px] px-[37px]">
                  <div className="flex flex-col items-center gap-[12px]">
                    <div className="text-sm text-dark-3">Submitted at</div>
                    <div className="text-dark font-bold text-lg">$4,952</div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl px-[10px] pt-[11px] pb-[45px] flex flex-col">
                <div className="flex flex-col gap-[10px] bg-dark-7 py-[18px] rounded-2xl">
                  <div className="font-bold text-dark-3 text-lg text-center">
                    Monthly Payment
                  </div>
                  <div className="font-bold text-dark text-[24px] leading-[31.2px] text-center">
                    $52932
                  </div>
                </div>
                <div className="pt-[24px] px-[37px]">
                  <div className="flex border border-dark-4 rounded-xl py-[17px] pl-[18px] pr-[17px] bg-white w-full mx-auto max-w-[252px]">
                    <select className="w-full ">
                      <option key={"opt"} value={"60 Months"}>
                        60 Months
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </span>
        </div>
        <div
          className={`${styles.gallery__item} ${styles["gallery__item--15"]}`}
        >
          <span className={styles.gallery__item_num}>
            <div className="bg-white rounded-2xl flex flex-col divide-y-[1px] divide-dark-6">
              <div className="text-dark font-bold text-lg py-[58px] text-center">
                PRE APPROVED
              </div>
              <div className="text-dark font-bold text-lg py-[30px]">
                <div className="flex gap-[10px] flex-col">
                  <div className="text-dark-2 text-xs text-center">
                    Loan Start
                  </div>
                  <div className="text-dark font-bold text-lg text-center">
                    25 Jan 2024
                  </div>
                  <div className="text-primary text-xs text-center">
                    Was 30Dec 2023
                  </div>
                </div>
              </div>
              <div className="text-dark font-bold text-lg py-[44px] text-center flex flex-col gap-[10px]">
                <div className="text-dark font-bold text-lg text-center">
                  63.9%
                </div>
                <div className="text-dark-2 text-xs text-center">LTV</div>
              </div>
              <div className="text-dark font-bold text-lg py-[44px] text-center flex flex-col gap-[10px]">
                <div className="text-dark font-bold text-lg text-center">
                  18.1%
                </div>
                <div className="text-dark-2 text-xs text-center">PTI</div>
              </div>
              <div className="text-dark font-bold text-lg py-[30px]">
                <div className="flex gap-[10px] flex-col">
                  <div className="text-dark-2 text-xs text-center">APR</div>
                  <div className="text-dark font-bold text-lg text-center">
                    17.53%
                  </div>
                  <div className="text-primary text-xs text-center">
                    Was 17.54%
                  </div>
                </div>
              </div>
            </div>
          </span>
        </div>
        <div
          className={`${styles.gallery__item} ${styles["gallery__item--16"]}`}
        >
          <span className={styles.gallery__item_num}>
            <div className="bg-white rounded-2xl pl-[26px] pr-[16px] pt-[48px]">
              <ol className="relative text-gray-500  border-s border-gray-200 border-dashed md:divide-y-[1px] md:divide-dark-5">
                <li className="mb-[20px] ms-6 flex items-center">
                  <span className="absolute flex items-center justify-center w-[22px] h-[22px] -mt-[20px] md:-mt-[5px] top-0 ml-[6px] bg-green rounded-full -start-4 ring-4 ring-white">
                    <CheckIcon />
                  </span>
                  <div className="flex flex-col -mt-[30px] md:flex-row gap-[11px] md:items-center">
                    <div className="flex gap-[12px] items-center">
                      <div className="w-[40px] h-[40px] bg-dark-7 py-[11.67px] rounded-full">
                        <DocumentIcon className="mx-auto" />
                      </div>
                      <div className="text-dark text-sm">Approved Document</div>
                    </div>
                    <div className="flex items-center gap-[2px]">
                      <div className="hidden md:flex flex-row items-center">
                        <div className="w-[12px] border-t-[1px] border-dark-5"></div>
                        <div className="h-[47px] border-t-[1px] border-b-[1px] border-l-[1px] w-5 border-dark-5"></div>
                      </div>
                      <div className="flex flex-col pl-[52px] md:pl-0 gap-[12px] md:gap-[24px]">
                        <div className="flex flex-col md:flex-row gap-[6px] md:gap-[29px] justify-between">
                          <div className="font-bold text-sm text-dark">
                            Proof of income
                          </div>
                          <div className="flex gap-[17px] items-center">
                            <div className="h-[24px] w-[24px] bg-primary-light p-[5px] rounded-full">
                              <MessageIcon className="mx-auto stroke-primary" />
                            </div>
                            <div className="text-[13px] font-bold underline leading-[16.38px] text-dark-3">
                              Upload
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-[6px] md:gap-[29px] justify-between">
                          <div className="font-bold text-sm text-dark">
                            Phone Bill
                          </div>
                          <div className="flex gap-[17px] items-center">
                            <div className="h-[24px] w-[24px] bg-primary-light p-[5px] rounded-full">
                              <MessageIcon className="mx-auto stroke-primary" />
                            </div>
                            <div className="text-[13px] font-bold underline leading-[16.38px] text-dark-3">
                              Upload
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="pt-[34px] pb-[42px] ms-6 relative">
                  <span className="absolute flex items-center justify-center w-[22px] h-[22px] -left-10 top-10 ml-[6px] bg-green rounded-full -start-4 ring-4 ring-white">
                    <CheckIcon />
                  </span>
                  <div className="flex flex-col md:flex-row gap-[12px] md:items-center">
                    <div className="flex items-center gap-[12px]">
                      <div className="w-[40px] h-[40px] bg-dark-7 py-[11.67px] rounded-full">
                        <PaymentIcon className="mx-auto" />
                      </div>
                      <div className="text-dark text-sm">Income</div>
                    </div>
                    <div className="ml-[55px] md:ml-[90px] font-bold text-[13px] leading-[16.38px] text-primary">
                      Verified
                    </div>
                  </div>
                </li>
                <li className="pt-[34px] mb-10 ms-6">
                  <span className="absolute flex items-center justify-center mt-[10px] w-[22px] h-[22px] ml-[6px] bg-green rounded-full -start-4 ring-4 ring-white">
                    <CheckIcon />
                  </span>
                  <div className="flex flex-col md:flex-row gap-[12px] md:items-center">
                    <div className="flex items-center gap-[12px]">
                      <div className="w-[40px] h-[40px] bg-dark-7 py-[11.67px] rounded-full">
                        <PaymentIcon className="mx-auto" />
                      </div>
                      <div className="text-dark text-sm">GPS</div>
                    </div>
                    <Button
                      variant="gradient"
                      className="ml-[55px] w-[96px] md:ml-[95px] !h-[36px] text-[13px] px-[20px] py-[13px]"
                      size="md"
                    >
                      Connect
                    </Button>
                  </div>
                </li>
                <li className="mb-[20px] pt-[21px] ms-6 flex items-center relative">
                  <span className="absolute flex items-center justify-center w-[22px] h-[22px] top-8 md:top-[45px] -left-10 ml-[6px] bg-green rounded-full -start-4 ring-4 ring-white">
                    <CheckIcon />
                  </span>
                  <div className="flex flex-col md:flex-row gap-[11px] md:items-center">
                    <div className="flex gap-[12px] items-center">
                      <div className="w-[40px] h-[40px] bg-dark-7 py-[11.67px] rounded-full">
                        <DocumentIcon className="mx-auto" />
                      </div>
                      <div className="text-dark text-sm">Approved Document</div>
                    </div>
                    <div className="flex items-center gap-[2px]">
                      <div className="hidden md:flex flex-row items-center">
                        <div className="w-[12px] border-t-[1px] border-dark-5"></div>
                        <div className="h-[47px] border-t-[1px] border-b-[1px] border-l-[1px] w-5 border-dark-5"></div>
                      </div>
                      <div className="flex flex-col pl-[52px] md:pl-0 gap-[12px] md:gap-[24px]">
                        <div className="flex flex-col md:flex-row gap-[6px] md:gap-[29px] justify-between">
                          <div className="font-bold text-sm text-dark">
                            Proof of income
                          </div>
                          <div className="flex gap-[17px] items-center">
                            <div className="h-[24px] w-[24px] bg-primary-light p-[5px] rounded-full">
                              <MessageIcon className="mx-auto stroke-primary" />
                            </div>
                            <div className="text-[13px] font-bold underline leading-[16.38px] text-dark-3">
                              Upload
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-[6px] md:gap-[29px] justify-between">
                          <div className="font-bold text-sm text-dark">
                            Phone Bill
                          </div>
                          <div className="flex gap-[17px] items-center">
                            <div className="h-[24px] w-[24px] bg-primary-light p-[5px] rounded-full">
                              <MessageIcon className="mx-auto stroke-primary" />
                            </div>
                            <div className="text-[13px] font-bold underline leading-[16.38px] text-dark-3">
                              Upload
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="pt-[34px] mb-10 ms-6">
                  <span className="absolute flex items-center justify-center mt-[10px] w-[22px] h-[22px] ml-[6px] bg-green rounded-full -start-4 ring-4 ring-white">
                    <CheckIcon />
                  </span>
                  <div className="flex flex-col md:flex-row gap-[12px] md:items-center">
                    <div className="flex items-center gap-[12px]">
                      <div className="w-[40px] h-[40px] bg-dark-7 py-[11.67px] rounded-full">
                        <PaymentIcon className="mx-auto" />
                      </div>
                      <div className="text-dark text-sm">GPS</div>
                    </div>
                    <Button
                      variant="gradient"
                      className="ml-[55px] w-[96px] md:ml-[95px] !h-[36px] text-[13px] px-[20px] py-[13px]"
                      size="md"
                    >
                      Connect
                    </Button>
                  </div>
                </li>
                <li className="pt-[34px] mb-10 ms-6">
                  <span className="absolute flex items-center justify-center mt-[10px] w-[22px] h-[22px] ml-[6px] bg-green rounded-full -start-4 ring-4 ring-white">
                    <CheckIcon />
                  </span>
                  <div className="flex flex-col md:flex-row gap-[12px] md:items-center">
                    <div className="flex items-center gap-[12px]">
                      <div className="w-[40px] h-[40px] bg-dark-7 py-[11.67px] rounded-full">
                        <PaymentIcon className="mx-auto" />
                      </div>
                      <div className="text-dark text-sm">GPS</div>
                    </div>
                    <Button
                      variant="gradient"
                      className="ml-[55px] w-[96px] md:ml-[95px] !h-[36px] text-[13px] px-[20px] py-[13px]"
                      size="md"
                    >
                      Connect
                    </Button>
                  </div>
                </li>
              </ol>
            </div>
          </span>
        </div>
      </section>
    </div>
  );
};

export default Page;
