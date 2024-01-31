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

const DoubleEllipseGradient: React.FC<propType> = ({
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

export { DoubleEllipseGradient, EllipseGradient };
