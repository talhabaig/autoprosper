import React from "react";

interface RadioOptionProps {
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
          ? "border-black rounded-[12px] selected-radio"
          : "border-[#B7BCC3] rounded-[12px]"
      } rounded cursor-pointer p-4`}
      onClick={() => onSelect(value)}
    >
      <input
        type="radio"
        id={`default-${id}`}
        checked={selected}
        onChange={() => onSelect(value)}
        className="form-check-input"
      />
      <h3
        className={`text-[#5D6878] text-[18px] py-3 font-[500] ${
          selected ? "text-black" : "text-[#B7BCC3]"
        }`}
      >
        {label}
      </h3>
      <p
        className={`text-[#5D6878] text-[12px] font-[400] ${
          selected ? "text-black" : "text-[#B7BCC3]"
        }`}
      >
        {description}
      </p>
    </div>
  );
};

export default RadioOption;
