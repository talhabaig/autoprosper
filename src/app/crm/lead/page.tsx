import React from "react";
import styles from "./crmLead.module.css";
import Image from "next/image";
import {
  AttachIcon,
  BasicLocationIcon,
  BasicMailIcon,
  BasicPhoneIcon,
  CloseIcon,
  FireIcon,
  Plusicon,
  SelectArrow,
  TrippleDots,
} from "../../../components/Icons/Icons";
import { Button } from "@/components/ui/button";
import EmailAndSms from "@/components/Crm/EmailAndSms/EmailAndSms";
import { Select } from "@/components/ui/input";
import CheckIcon from "@/components/Icons/CheckIcon";
import { QuickFilters } from "@/components/Crm/QuickFilters/QuickFilters";
import { TextBox } from "@/components/ui/InputCustom";

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
            <div className="flex border border-dark-4 rounded-xl py-[17px] pl-[18px] pr-[17px]">
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
                    <div className="text-dark text-[10px] leading-[15px]">Attachment</div>
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
        {/* <div
          className={`${styles.gallery__item} ${styles["gallery__item--7"]}`}
        >
          <span className={styles.gallery__item_num}>
            search bar with lists 7
          </span>
        </div>
        <div
          className={`${styles.gallery__item} ${styles["gallery__item--8"]}`}
        >
          <span className={styles.gallery__item_num}>task list 8</span>
        </div>
        <div
          className={`${styles.gallery__item} ${styles["gallery__item--9"]}`}
        >
          <span className={styles.gallery__item_num}>Chat bar at bottom 9</span>
        </div>
        <div
          className={`${styles.gallery__item} ${styles["gallery__item--10"]}`}
        >
          <span className={styles.gallery__item_num}>task list 10</span>
        </div>
        <div
          className={`${styles.gallery__item} ${styles["gallery__item--11"]}`}
        >
          <span className={styles.gallery__item_num}>taskList 11</span>
        </div> */}
      </section>
    </div>
  );
};

export default Page;
