import React from "react";
import { EditIcon, RoundedChecked } from "../Icons/Icons";
import { cn } from "@/lib/utils";

const CHECKED_BORDER_COLOR = "border-green";
const CHECKED_BACKGROUND_COLOR = "bg-green";

interface Option {
  id: number;
  label: string | React.ReactElement;
  sub?: string | React.ReactElement;
  image?: string | React.ReactElement;
}

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  option: Option;
  isSelected: boolean;
  onClick: () => void;
  editAble?: boolean;
}

const renderImage = (image: Option["image"], label: Option["label"]) => {
  if (typeof image === "string") {
    return <img src={image.toString()} className="" alt={'car image'} />;
  }

  if (image && typeof image !== "string") {
    return image;
  }
};

const CardData: React.FC<CardProps> = ({
  option,
  isSelected,
  onClick,
  editAble,
  className,
}) => {
  return (
    <div
      className={cn(
        className,
        `max-w-[46%] w-full min-h-full md:max-w-[216px] md:min-h-[141px] border border-solid border-dark-5 rounded-[12px] bg-white cursor-pointer relative p-[12px] md:p-[24px] text-dark-3 group hover:!border-dark hover:!text-dark ${
          isSelected ? "!border-dark !text-dark" : ""
        }`
      )}
      onClick={onClick}
    >
      <div>
        {editAble && (
          <span className="absolute top-[12px] right-[12px] md:right-[24px]">
            <EditIcon className="w-[13px] h-[13px] fill-dark-4" />
          </span>
        )}
        <div className="flex flex-col gap-6">
          {renderImage(option.image, option.label)}
          <div className="flex flex-col gap-3">
            <h3 className="text-[0.875rem] md:text-[1rem] lg:text-[1.125rem] font-medium ">
              {option.label}
            </h3>
            {typeof option.sub === "string" ? (
              <p className="text-dark-3 text-[10px] lg:text-[12px] font-normal m-0">
                {option.sub}
              </p>
            ) : (
              option.sub
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardData;
