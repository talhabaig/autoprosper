import React from "react";

export interface RadioOptionProps {
  id: number;
  label: string;
  value: string;
  selected: boolean;
  description: string;
  onSelect: (value: string) => void;
}

const RadioOption: React.FC<RadioOptionProps> = ({
  id,
  label,
  value,
  selected,
  description,
  onSelect,
}) => {
  return (
    <div
      key={`default-${id}`}
      className={`border ${
        selected
          ? "border-dark rounded-[12px] selected-radio"
          : "border-[#B7BCC3] rounded-[12px]"
      } rounded cursor-pointer p-3 2xl:p-6`}
      onClick={() => onSelect(value)}
    >
      <div className="relative">
        <input
          type="radio"
          id={`default-${id}`}
          checked={selected}
          onChange={() => onSelect(value)}
          className="absolute opacity-0 w-0 h-0"
        />
        <div
          className={`w-6 h-6 border-solid border-gray-500 rounded-full  border-[1px] 
          flex items-center justify-center mr-2 bg-white ${
            selected ? "bg-gray-900 border-[#00FFA2] " : ""
          }`}
          style={{
            backgroundColor: selected ? "" : "transparent",
            borderColor: selected ? "" : "gray",
          }}
        >
          {selected && (
            <div className="w-3 h-3 bg-[#00FFA2] rounded-full"></div>
          )}
        </div>
      </div>
      <div>
        <h3
          className={`text-[#5D6878] text-[14px] mt-3 xl:text-lg xl:mt-6 mb-1 xl:mb-3 font-[500] ${
            selected ? "text-dark" : "text-[#5D6878]"
          }`}
        >
          {label}
        </h3>
        <p
          className={`text-[#5D6878] text-[10px] xl:text-xs font-[400] mb-0 ${
            selected ? "text-dark" : "text-[#5D6878]"
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default RadioOption;
