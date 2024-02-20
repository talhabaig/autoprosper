"use client";

import Chat from "@/components/Crm/Chat/Chat";
import FinancialSummaryGrid from "@/components/Crm/FinancialSummaryGrid/FinancialSummaryGrid";
import Offers from "@/components/Crm/Offers/Offers";
import PreApprovalSummary from "@/components/Crm/PreApprovalSummary/PreApprovalSummary";
import Products from "@/components/Crm/Products/Products";
import RelatedDatesSection from "@/components/Crm/RelatedDatesSection/RelatedDatesSection";
import SaleDetails from "@/components/Crm/SaleDetails/SaleDetails";
import SalesActivity from "@/components/Crm/SalesActivity/SalesActivity";
import SalesBot from "@/components/Crm/SalesBot/SalesBot";
import Task from "@/components/Crm/Task/Task";
import Timeline from "@/components/Crm/Timeline/Timeline";
import TotalLoanInformation from "@/components/Crm/TotalLoanInformation/TotalLoanInformation";
import UserProfile from "@/components/Crm/UserProfile/UserProfile";
import VehicleInformation from "@/components/Crm/VehicleInformation/VehicleInformation";
import { CloseIcon, Plusicon, TrippleDots } from "@/components/Icons/Icons";
import { Button } from "@/components/ui/button";
import { SelectBox } from "@/components/ui/input";
import Image from "next/image";

const Page = () => {
  const handleChange = () => {
    console.log("a");
  };
  return (
    <div
      className="flex flex-col gap-[12px] p-[48px]"
      style={{ backgroundColor: "#F0F4F3" }}
    >
      <div className="flex flex-col md:flex-row gap-[12px]">
        <div className="flex flex-col w-[252px] gap-[12px]">
          <UserProfile />
          <SaleDetails />
          <Task />
          <SalesActivity />
        </div>
        <div className="flex flex-col w-[804px] gap-[12px]">
          <SalesBot />
          <Chat />
        </div>
        <div className="flex flex-col gap-[12px]">
          <div className="flex flex-col md:flex-row gap-[12px]">
            <div className="flex flex-col w-[252px] gap-[12px]">
              <SelectBox
                options={[{ label: "Dealer finance", value: "Dealer finance" }]}
                onChange={handleChange}
                selectedOption="Dealer finance"
              />
              <Offers />
            </div>
            <div className="flex flex-col w-[252px] gap-[12px]">
              <div className="bg-white rounded-2xl px-[16px] pt-[12px] pb-[23px] flex flex-col gap-[16px]">
                <div className="flex justify-end gap-[12px]">
                  <TrippleDots className="cursor-pointer" />
                  <CloseIcon className="cursor-pointer" />
                </div>
                <div className="flex flex-col gap-[24px]">
                  <Image
                    src="/Crm/logo.png"
                    alt="Logo"
                    width="189"
                    height="31"
                  />
                  <Button
                    variant="gradient"
                    size="md"
                    className="w-full h-[36px] md:h-[46px]"
                  >
                    <Plusicon className="mr-[6px]" /> Send
                  </Button>
                </div>
              </div>
              <Products />
            </div>
          </div>
          <VehicleInformation />
          <RelatedDatesSection />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-[12px] justify-normal">
        <Timeline />
        <PreApprovalSummary />
        <div className="flex flex-col gap-[12px]">
          <TotalLoanInformation />
          <FinancialSummaryGrid />
        </div>
      </div>
    </div>
  );
};

export default Page;
