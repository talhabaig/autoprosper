'use client'
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
import { Select, SelectBox } from "@/components/ui/input";
import CheckIcon from "@/components/Icons/CheckIcon";
import { QuickFilters } from "@/components/Crm/QuickFilters/QuickFilters";
import { TextBox } from "@/components/ui/InputCustom";
import SalesActivity from "@/components/Crm/SalesActivity/SalesActivity";
import { Switch } from "@/components/ui/switch";
import UserProfile from "@/components/Crm/UserProfile/UserProfile";
import SalesBot from "@/components/Crm/SalesBot/SalesBot";
import SaleDetails from "@/components/Crm/SaleDetails/SaleDetails";
import Chat from "@/components/Crm/Chat/Chat";
import Offers from "@/components/Crm/Offers/Offers";
import Products from "@/components/Crm/Products/Products";
import Task from "@/components/Crm/Task/Task";
import VehicleInformation from "@/components/Crm/VehicleInformation/VehicleInformation";
import RelatedDatesSection from "@/components/Crm/RelatedDatesSection/RelatedDatesSection";
import TotalLoanInformation from "@/components/Crm/TotalLoanInformation/TotalLoanInformation";
import PreApprovalSummary from "@/components/Crm/PreApprovalSummary/PreApprovalSummary";
import Timeline from "@/components/Crm/Timeline/Timeline";
import FinancialSummaryGrid from "@/components/Crm/FinancialSummaryGrid/FinancialSummaryGrid";

const Page = () => {
  const handleChange = () => {
    console.log('change')
  }
  return (
    <div className="max-w-[1740px] mx-auto px-[15px] bg-[#F0F4F3]">
      <section className={styles.crmWrapperr}>
        <div
          className={`${styles.gallery__item} ${styles["gallery__item--1"]}`}
        >
          <span className={styles.gallery__item_num}>
            <UserProfile />
          </span>
        </div>
        <div
          className={`${styles.gallery__item} ${styles["gallery__item--2"]}`}
        >
          <SalesBot />
        </div>
        <div
          className={`${styles.gallery__item} ${styles["gallery__item--3"]}`}
        >
          <span className={styles.gallery__item_num}>
            <SelectBox options={[{ label: 'Dealer finance', value: 'Dealer finance' }]} onChange={handleChange} selectedOption="Dealer finance" />
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
          <SaleDetails />
        </div>
        <div
          className={`${styles.gallery__item} ${styles["gallery__item--6"]}`}
        >
          <span className={styles.gallery__item_num}>
            <Chat />
          </span>
        </div>
        <div
          className={`${styles.gallery__item} ${styles["gallery__item--7"]}`}
        >
          <span className={styles.gallery__item_num}>
            <Offers />
          </span>
        </div>
        <div
          className={`${styles.gallery__item} ${styles["gallery__item--8"]}`}
        >
          <span className={styles.gallery__item_num}>
            <Products />
          </span>
        </div>
        <div
          className={`${styles.gallery__item} ${styles["gallery__item--9"]}`}
        >
          <span className={styles.gallery__item_num}>
            <Task/>
          </span>
        </div>
        <div
          className={`${styles.gallery__item} ${styles["gallery__item--10"]}`}
        >
          <span className={styles.gallery__item_num}>
            <VehicleInformation />
          </span>
        </div>
        <div
          className={`${styles.gallery__item} ${styles["gallery__item--11"]}`}
        >
          <span className={styles.gallery__item_num}>
            <RelatedDatesSection />
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
            <TotalLoanInformation />
          </span>
        </div>
        <div
          className={`${styles.gallery__item} ${styles["gallery__item--14"]}`}
        >
          <span className={styles.gallery__item_num}>
            <FinancialSummaryGrid />
          </span>
        </div>
        <div
          className={`${styles.gallery__item} ${styles["gallery__item--15"]}`}
        >
          <span className={styles.gallery__item_num}>
            <PreApprovalSummary />
          </span>
        </div>
        <div
          className={`${styles.gallery__item} ${styles["gallery__item--16"]}`}
        >
          <span className={styles.gallery__item_num}>
            <Timeline />
          </span>
        </div>
      </section>
    </div>
  );
};

export default Page;
