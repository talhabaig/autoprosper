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

export const TopArrow: React.FC<propType> = ({
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
      viewBox="0 0 36 36"
      fill={fill}
      className={className}
    >
      <g clip-path="url(#clip0_26_1477)">
        <path
          d="M35.5601 0.43934C35.1326 0.0103614 34.4905 -0.115639 33.9311 0.110838L0.930952 13.6109C0.31445 13.8644 -0.0620752 14.4929 0.00844856 15.1559C0.0774254 15.8189 0.575451 16.3559 1.23098 16.4759L16.7096 19.2898L19.5251 34.7684C19.6436 35.424 20.1806 35.9219 20.8436 35.9924C20.8961 35.9969 20.9486 36 20.9996 36C21.6026 36 22.1561 35.6355 22.3887 35.067L35.8887 2.06687C36.1166 1.5088 35.9876 0.866841 35.5601 0.43934Z"
          fill="#0A1835"
        />
      </g>
      <defs>
        <clipPath id="clip0_26_1477">
          <rect width="36" height="36" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const Car: React.FC<propType> = ({ width, height, fill, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={fill}
      className={className}
      viewBox="0 0 44 44"
    >
      <g clip-path="url(#clip0_26_1485)">
        <path
          d="M43.7478 16.0661C43.5326 15.8036 43.2116 15.6504 42.8747 15.6504H38.5924C37.5357 12.863 36.1589 10.132 34.5941 9.10117C29.1807 5.53984 14.822 5.53984 9.40857 9.10117C7.84257 10.1332 6.47148 12.8675 5.40908 15.6504H1.12681C0.786572 15.6504 0.466613 15.8036 0.253682 16.0661C0.039625 16.3275 -0.0459979 16.6734 0.0238523 17.0057L0.658137 20.0792C0.766292 20.6031 1.22821 20.9771 1.76109 20.9771H3.02966C1.80503 22.3899 1.21131 24.1689 1.20342 25.949C1.19553 28.1482 2.03036 30.1356 3.55692 31.5417C3.57382 31.5563 3.59072 31.5665 3.60649 31.5811V35.8815C3.60649 36.8133 4.36358 37.5715 5.29642 37.5715H9.24633C10.1792 37.5715 10.9363 36.8133 10.9363 35.8815V34.1532H33.0641V35.8815C33.0641 36.8133 33.8212 37.5715 34.7541 37.5715H38.704C39.6346 37.5715 40.3939 36.8133 40.3939 35.8815V31.6656C42.014 30.1818 42.7879 28.1403 42.7981 26.1022C42.8049 24.2613 42.1841 22.417 40.8873 20.9749H42.2404C42.7756 20.9749 43.2375 20.6008 43.3434 20.0758L43.9788 17.0035C44.0441 16.6734 43.9619 16.3297 43.7478 16.0661ZM11.2641 11.9234C15.579 9.08314 28.4213 9.08314 32.734 11.9234C33.5722 12.4732 34.6504 14.6961 35.6384 17.4181H8.36194C9.34773 14.6972 10.4259 12.4755 11.2641 11.9234ZM6.2101 26.3726C6.2101 24.5362 7.69949 23.049 9.53475 23.049C11.3723 23.049 12.8594 24.5362 12.8594 26.3726C12.8594 28.2091 11.3723 29.6974 9.53475 29.6974C7.69949 29.6974 6.2101 28.2091 6.2101 26.3726ZM34.5096 29.6974C32.6743 29.6974 31.1849 28.2091 31.1849 26.3726C31.1849 24.5362 32.6743 23.049 34.5096 23.049C36.3471 23.049 37.8342 24.5362 37.8342 26.3726C37.8342 28.2091 36.3448 29.6974 34.5096 29.6974Z"
          fill="#0A1835"
        />
      </g>
      <defs>
        <clipPath id="clip0_26_1485">
          <rect width="44" height="44" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const Heart: React.FC<propType> = ({
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
      fill={fill}
      className={className}
      viewBox="0 0 36 36"
    >
      <path
        d="M26.4375 2.10938C24.484 2.10938 22.693 2.72841 21.1144 3.94931C19.6009 5.1198 18.5932 6.61064 18 7.69472C17.4068 6.61057 16.3991 5.1198 14.8856 3.94931C13.307 2.72841 11.516 2.10938 9.5625 2.10938C4.11103 2.10938 0 6.56838 0 12.4815C0 18.8696 5.1288 23.2403 12.8931 29.8569C14.2116 30.9806 15.7061 32.2542 17.2595 33.6126C17.4642 33.7919 17.7272 33.8906 18 33.8906C18.2728 33.8906 18.5358 33.7919 18.7405 33.6127C20.294 32.2541 21.7884 30.9805 23.1077 29.8562C30.8712 23.2403 36 18.8696 36 12.4815C36 6.56838 31.889 2.10938 26.4375 2.10938Z"
        fill="#0A1835"
      />
    </svg>
  );
};
