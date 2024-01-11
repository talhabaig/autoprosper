import React from "react";

type propType = {
  width?: string;
  height?: string;
  fill?: string;
  className?: string;
};

export const HomeIcon = () => {
  return <div>Icon</div>;
};

export const ArrowRight: React.FC<propType> = ({
  width,
  height,
  fill,
  className,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      className={className}
    >
      <path
        d="M13.4779 10.8334H3.33203V9.16671H13.4779L8.8112 4.50004L9.9987 3.33337L16.6654 10L9.9987 16.6667L8.8112 15.5L13.4779 10.8334Z"
        fill={fill}
      />
    </svg>
  );
};
