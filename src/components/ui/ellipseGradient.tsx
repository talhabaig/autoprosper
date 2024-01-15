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
        d="M371.882 208.014C363.139 240.643 341.793 268.462 312.539 285.352C283.284 302.242 248.519 306.819 215.89 298.076C183.261 289.333 155.442 267.987 138.552 238.733C121.662 209.479 117.085 174.713 125.828 142.084L175.039 155.27C169.793 174.848 172.539 195.707 182.673 213.259C192.807 230.812 209.499 243.62 229.076 248.866C248.653 254.111 269.513 251.365 287.065 241.231C304.618 231.097 317.426 214.406 322.671 194.828L371.882 208.014Z"
        fill="url(#paint0_linear_61_4067)"
      />
      <path
        d="M268.171 427.518C277.952 391.013 272.832 352.117 253.935 319.386C235.038 286.656 203.914 262.774 167.408 252.992C130.903 243.21 92.0064 248.331 59.2764 267.228C26.5464 286.125 2.66361 317.249 -7.11804 353.755L47.9397 368.507C53.8087 346.604 68.1384 327.929 87.7764 316.591C107.414 305.253 130.752 302.181 152.655 308.05C174.559 313.919 193.234 328.248 204.572 347.886C215.91 367.525 218.982 390.862 213.113 412.766L268.171 427.518Z"
        fill="url(#paint1_linear_61_4067)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_61_4067"
          x1="215.89"
          y1="298.076"
          x2="248.855"
          y2="175.049"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00FFA2" stopOpacity="0.26" />
          <stop offset="0.475" stopColor="#FFE664" stopOpacity="0.18" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_61_4067"
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
