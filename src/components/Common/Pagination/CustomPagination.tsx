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
    <div className="flex">
      {/* Display the range of items being shown */}
      <span>
        Showing items {startIndex} to {endIndex} of {totalItems}
      </span>
      {/* Render buttons for each page */}
      {/* Show the previous button if not on the first page */}
      <div className="flex gap-[12px] items-center">
        <button
          className="bg-green-light w-[28px] h-[28px] rounded-[50%]"
          onClick={() => handlePaginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          P
        </button>

        {pageNumbers.map((number) => (
          <button
            key={number}
            className={`pagination-btn ${
              currentPage === number ? "active" : ""
            }`}
            onClick={() => handlePaginate(number)}
          >
            {number}
          </button>
        ))}
        {/* Show the next button if not on the last page */}
        <button
          className="bg-btn-primary-gradient w-[28px] h-[28px] rounded-[50%]"
          onClick={() => handlePaginate(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          n
        </button>
      </div>
    </div>
  );
};

export default CustomPagination;
