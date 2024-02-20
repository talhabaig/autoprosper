import CheckIcon from "@/components/Icons/CheckIcon";
import { DocumentIcon, MessageIcon, PaymentIcon } from "@/components/Icons/Icons";
import { Button } from "@/components/ui/button";

const Timeline = () => {
  return (
    <div className="bg-white rounded-2xl pl-[26px] pr-[16px] pt-[48px] md:w-[526px]">
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
                  <div className="font-bold text-sm text-dark">Phone Bill</div>
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
                  <div className="font-bold text-sm text-dark">Phone Bill</div>
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
  );
};

export default Timeline;
