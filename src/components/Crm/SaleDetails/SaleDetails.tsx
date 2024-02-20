
import React from 'react';
import CheckIcon from '@/components/Icons/CheckIcon';
import { Button } from '@/components/ui/button';
import { Select } from '@/components/ui/input';

const SaleDetails = () => {
  return (
    <div className="bg-white rounded-2xl py-[24px] px-[16px] flex flex-col gap-[42px] max-h-[357px]">
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
            Auto Repair Expense Reimbursement: Auto Deductible Reimbursement:
            Auto Expert Opinion.
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full gap-[12px]">
        <Select
          className="w-full"
          variant="small"
          label="Lead conversion phase"
          options={[{ label: "Warm-Engaged", value: "1" }]}
        />
        <Button
          variant="gradient"
          size="md"
          className="w-full !h-[36px] font-bold !py-[13px] !text-[13px]"
        >
          <CheckIcon className="mr-[6px]" /> Mark as sold
        </Button>
      </div>
    </div>
  );
};

export default SaleDetails;
