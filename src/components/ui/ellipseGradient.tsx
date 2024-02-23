import React from "react";

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
  return (
    <svg
      width="364"
      height="170"
      viewBox="0 0 364 170"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1_5)">
        <path
          d="M363.883 65.9299C355.14 98.5587 333.794 126.378 304.539 143.268C275.285 160.158 240.52 164.735 207.891 155.992C175.262 147.249 147.443 125.903 130.553 96.6484C113.663 67.3942 109.086 32.6288 117.829 2.2986e-05L167.04 13.186C161.794 32.7633 164.54 53.6225 174.674 71.175C184.808 88.7275 201.5 101.535 221.077 106.781C240.654 112.027 261.514 109.281 279.066 99.1467C296.619 89.0128 309.426 72.3212 314.672 52.7439L363.883 65.9299Z"
          fill="url(#paint0_linear_1_5)"
        />
        <path
          d="M260.171 285.434C269.952 248.928 264.831 210.032 245.935 177.302C227.038 144.572 195.913 120.689 159.408 110.908C122.902 101.126 84.0062 106.247 51.2762 125.143C18.5462 144.04 -5.33664 175.165 -15.1183 211.67L39.9395 226.423C45.8085 204.52 60.1382 185.845 79.7762 174.507C99.4142 163.169 122.752 160.096 144.655 165.965C166.559 171.834 185.233 186.164 196.571 205.802C207.909 225.44 210.982 248.778 205.113 270.681L260.171 285.434Z"
          fill="url(#paint1_linear_1_5)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_1_5"
          x1="207.891"
          y1="155.992"
          x2="240.856"
          y2="32.965"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#00FFA2" stop-opacity="0.26" />
          <stop offset="0.475" stop-color="#FFE664" stop-opacity="0.18" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1_5"
          x1="159.408"
          y1="110.908"
          x2="122.526"
          y2="248.552"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#00FFA2" stop-opacity="0.26" />
          <stop offset="0.475" stop-color="#FFE664" stop-opacity="0.18" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
        <clipPath id="clip0_1_5">
          <rect width="364" height="170" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};


export { DoubleEllipseGradient, EllipseGradient, SmallEllipseGradient, CutEllipseGradient };
