import { ArrowRightCurved } from "@/components/Icons/Icons";
import React, { useState } from "react";

interface CustomPaginationProps {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  paginate: (pageNumber: number) => void;
}

const CustomPagination: React.FC<CustomPaginationProps> = ({
  currentPage,
  itemsPerPage,
  totalItems,
  paginate,
}) => {
  // Initialize state for start and end index
  const [startIndex, setStartIndex] = useState(1);
  const [endIndex, setEndIndex] = useState(Math.min(itemsPerPage, totalItems));

  // Calculate the total number of pages
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Generate an array of page numbers
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  // Update start and end index when pagination changes
  const updateIndexes = (pageNumber: number) => {
    const start = (pageNumber - 1) * itemsPerPage + 1;
    const end = Math.min(pageNumber * itemsPerPage, totalItems);
    setStartIndex(start);
    setEndIndex(end);
  };

  // Handle pagination click
  const handlePaginate = (pageNumber: number) => {
    paginate(pageNumber);
    updateIndexes(pageNumber);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-[12px] lg:gap-[20px] items-center mb-[12px]">
        <button
          className="bg-green-light w-[30px] h-[30px]
           rounded-[50%] flex items-center justify-center
           lg:w-[42px] lg:h-[42px]"
          onClick={() => handlePaginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ArrowRightCurved className="w-[12px] h-[12px] lg:w-[16px] lg:h-[16px] fill-dark-3 rotate-180" />
        </button>

        {pageNumbers.map((number) => (
          <button
            key={number}
            className={`w-[30px] h-[30px] border border-solid border-dark-4 font-bold
            rounded-[50%] flex items-center justify-center text-[12px] text-black
            hover:text-white hover:bg-dark leading-[1]  lg:w-[42px] lg:h-[42px] lg:text-[16px] ${
              currentPage === number ? "bg-dark border-dark text-white" : ""
            }`}
            onClick={() => handlePaginate(number)}
          >
            {number}
          </button>
        ))}

        {/* {pageNumbers} */}

        <button
          className="bg-btn-primary-gradient w-[30px] h-[30px]
           rounded-[50%] flex items-center justify-center  lg:w-[42px] lg:h-[42px]"
          onClick={() => handlePaginate(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <ArrowRightCurved className="w-[12px] h-[12px] lg:w-[16px] lg:h-[16px] fill-dark" />
        </button>
      </div>
      {/* <div className="[&>span]:font-bold [&>span]:text-dark">
        Showing items <span>{startIndex}</span> to <span>{endIndex}</span> of{" "}
        <span>{totalItems}</span>
      </div> */}
    </div>
  );
};

export default CustomPagination;
