"use client";
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
  const generateUniqueId = () =>
    `id-${Math.random().toString(36).substr(2, 9)}`;

  const gradientId = generateUniqueId();

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
        fill={`url(#${gradientId})`}
      />
      <defs>
        <linearGradient
          id={gradientId}
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

const DoubleEllipseGradient: React.FC<propType> = ({
  width = "360",
  height = "288",
  fill = "none",
  className,
}) => {
  const generateUniqueId = () =>
    `id-${Math.random().toString(36).substr(2, 9)}`;

  const gradientId1 = generateUniqueId();
  const gradientId2 = generateUniqueId();

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 360 288"
      fill={fill}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M371.883 208.014C363.14 240.643 341.794 268.463 312.539 285.352C283.285 302.242 248.52 306.819 215.891 298.076C183.262 289.334 155.443 267.987 138.553 238.733C121.663 209.479 117.086 174.713 125.829 142.085L175.04 155.271C169.794 174.848 172.54 195.707 182.674 213.26C192.808 230.812 209.5 243.62 229.077 248.866C248.654 254.111 269.514 251.365 287.066 241.231C304.619 231.097 317.426 214.406 322.672 194.828L371.883 208.014Z"
        fill={`url(#${gradientId1})`}
      />
      <path
        d="M268.171 427.518C277.952 391.012 272.831 352.116 253.935 319.386C235.038 286.656 203.913 262.773 167.408 252.992C130.902 243.21 92.0062 248.331 59.2762 267.228C26.5462 286.124 2.66336 317.249 -7.11828 353.755L47.9395 368.507C53.8085 346.604 68.1382 327.929 87.7761 316.591C107.414 305.253 130.752 302.181 152.655 308.05C174.559 313.919 193.233 328.248 204.571 347.886C215.909 367.524 218.982 390.862 213.113 412.765L268.171 427.518Z"
        fill={`url(#${gradientId2})`}
      />
      <defs>
        <linearGradient
          id={gradientId1}
          x1="215.891"
          y1="298.076"
          x2="248.856"
          y2="175.05"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00FFA2" stopOpacity="0.26" />
          <stop offset="0.475" stopColor="#FFE664" stopOpacity="0.18" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id={gradientId2}
          x1="167.408"
          y1="252.992"
          x2="130.526"
          y2="390.636"
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

const SmallEllipseGradient: React.FC<propType> = ({
  width = "360",
  height = "288",
  fill = "none",
  className,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 360 288"
      fill={fill}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M371.883 208.014C363.14 240.643 341.794 268.463 312.539 285.352C283.285 302.242 248.52 306.819 215.891 298.076C183.262 289.334 155.443 267.987 138.553 238.733C121.663 209.479 117.086 174.713 125.829 142.085L175.04 155.271C169.794 174.848 172.54 195.707 182.674 213.26C192.808 230.812 209.5 243.62 229.077 248.866C248.654 254.111 269.514 251.365 287.066 241.231C304.619 231.097 317.426 214.406 322.672 194.828L371.883 208.014Z"
        fill="url(#paint0_linear_1413_10803)"
      />
      <path
        d="M268.171 427.518C277.952 391.012 272.831 352.116 253.935 319.386C235.038 286.656 203.913 262.773 167.408 252.992C130.902 243.21 92.0062 248.331 59.2762 267.228C26.5462 286.124 2.66336 317.249 -7.11828 353.755L47.9395 368.507C53.8085 346.604 68.1382 327.929 87.7761 316.591C107.414 305.253 130.752 302.181 152.655 308.05C174.559 313.919 193.233 328.248 204.571 347.886C215.909 367.524 218.982 390.862 213.113 412.765L268.171 427.518Z"
        fill="url(#paint1_linear_1413_10803)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1413_10803"
          x1="215.891"
          y1="298.076"
          x2="248.856"
          y2="175.05"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00FFA2" stopOpacity="0.26" />
          <stop offset="0.475" stopColor="#FFE664" stopOpacity="0.18" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1413_10803"
          x1="167.408"
          y1="252.992"
          x2="130.526"
          y2="390.636"
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

const CutEllipseGradient: React.FC<propType> = ({
  width = "360",
  height = "288",
  fill = "none",
  className,
}) => {
  const uniqueId = `unique_${Math.random().toString(36).substr(2, 9)}`; // Generate a unique ID
  
  return (
    <svg
      width="400"
      height="200"
      viewBox="0 0 400 200"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath={`url(#${uniqueId}_clip0)`}>
        <path
          d="M399.5 100C391.103 138.26 369.905 171.995 337.5 194.5C305.095 217.005 263.905 226.995 223.5 224.5C183.095 222.005 145.897 207.259 118.5 182C91.1028 156.741 75.8946 122.005 74.5 86.5L150.5 100C145.928 125.741 150.573 152.787 163 175C175.427 197.213 194.427 212.213 215.5 216C236.573 219.787 258.927 211.741 275.5 194.5C292.073 177.259 300.302 152.787 298.5 127.5L399.5 100Z"
          fill={`url(#${uniqueId}_paint0_linear)`}
        />
        <path
          d="M298 399.5C312.878 336.919 304.085 273.327 282 223C259.915 172.673 225.585 134.415 186.5 114C147.415 93.5848 105.623 93.6198 69.5 112.5C33.3772 131.381 -0.697596 166.652 0.500061 205.5L75.5 221.5C80.1901 197.889 95.8746 177.969 116.5 164.5C137.125 151.031 161.424 145.931 183.5 150.5C205.576 155.069 224.307 169.238 235 190.5C245.693 211.762 247.026 239.019 238.5 264.5L298 399.5Z"
          fill={`url(#${uniqueId}_paint1_linear)`}
        />
      </g>
      <defs>
        <linearGradient
          id={`${uniqueId}_paint0_linear`}
          x1="223.5"
          y1="224.5"
          x2="180.5"
          y2="85.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF00A2" stopOpacity="0.26" />
          <stop offset="0.475" stopColor="#FF6664" stopOpacity="0.18" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id={`${uniqueId}_paint1_linear`}
          x1="186.5"
          y1="114"
          x2="25.5"
          y2="250.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF00A2" stopOpacity="0.26" />
          <stop offset="0.475" stopColor="#FF6664" stopOpacity="0.18" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <clipPath id={`${uniqueId}_clip0`}>
          <rect width="400" height="200" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};


export { DoubleEllipseGradient, EllipseGradient, SmallEllipseGradient, CutEllipseGradient };
