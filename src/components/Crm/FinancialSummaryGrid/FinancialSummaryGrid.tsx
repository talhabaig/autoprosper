import { PrintFill, ShareFill } from "@/components/Icons/Icons";
import { Switch } from "@/components/ui/switch";

const FinancialSummaryGrid = () => {
  return (
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
            $4,500
            <span className="text-sm text-dark-3 font-normal">(20.41%)</span>
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
  );
};

export default FinancialSummaryGrid;
