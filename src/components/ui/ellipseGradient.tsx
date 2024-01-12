'use client'
type propType = {
  width?: string;
  height?: string;
  fill?: string;
  className?: string;
};

const EllipseGradient: React.FC<propType> = ({
  width = "100%",
  height = "167",
  fill = "none",
  className,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 334 167"
      fill={fill}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M334 167C334 122.709 316.405 80.2318 285.087 48.9132C253.768 17.5946 211.291 3.34389e-06 167 0C122.709 -3.34389e-06 80.2318 17.5946 48.9132 48.9132C17.5946 80.2317 6.68778e-06 122.709 0 167L66.8 167C66.8 140.425 77.3568 114.939 96.1479 96.1479C114.939 77.3567 140.425 66.8 167 66.8C193.575 66.8 219.061 77.3568 237.852 96.1479C256.643 114.939 267.2 140.425 267.2 167H334Z"
        fill="url(#paint0_linear_913_3598)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_913_3598"
          x1="167"
          y1="6.4931e-06"
          x2="167"
          y2="167"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00FFA2" stopOpacity="0.26" />
          <stop offset="0.475" stopColor="#FFE664" stopOpacity="0.18" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default EllipseGradient;
