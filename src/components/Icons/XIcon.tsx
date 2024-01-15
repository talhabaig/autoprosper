type propType = {
  width?: string;
  height?: string;
  fill?: string;
  className?: string;
};

const XIcon: React.FC<propType> = ({
    width = "10", height = "10", fill = "none", className
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 10 10"
      fill={fill}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 1L9 9" stroke="white" />
      <path d="M1 1L9 9" stroke="white" />
      <path d="M1 1L9 9" stroke="white" />
      <path d="M9 1L1 9" stroke="white" />
    </svg>
  );
};


export default XIcon;