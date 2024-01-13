type propType = {
  width?: string;
  height?: string;
  fill?: string;
  className?: string;
};

const CheckIcon: React.FC<propType> = ({
  width = "12",
  height = "9",
  fill = "none",
  className,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 9"
      fill={fill}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 5L4 8L11 1" stroke="#001B44" />
    </svg>
  );
};

export default CheckIcon;
