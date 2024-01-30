type propType = {
  width?: string;
  height?: string;
  fill?: string;
  className?: string;
};

const SUVIcon: React.FC<propType> = ({
  width = "44",
  height = "17",
  className,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 44 17"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M42.8563 13.8778C42.8871 13.8694 42.9208 13.861 42.9517 13.8554C43.5298 13.7576 43.7851 13.8219 43.8777 13.0784C43.99 12.1897 43.9479 10.7922 43.9928 10.2444C44.0237 9.8671 43.9675 9.51215 43.5606 9.42551C43.3333 9.37799 43.0976 9.33048 43.092 9.23266C43.0134 7.90229 42.8142 6.82346 42.5111 5.83966C42.0088 4.19626 41.498 2.81279 40.5439 0.959771C40.0276 -0.0435965 40.2184 0.00950645 38.9023 0.00950645C34.1653 0.00950645 29.173 -0.032417 24.3631 0.0598146C21.15 0.121302 18.0126 0.143661 16.674 0.565691C14.9398 1.52154 13.3122 3.86926 12.0942 4.8335C8.96529 5.16329 5.52764 5.40086 2.3594 6.18343C1.24251 6.46012 0.877702 6.49646 0.664427 7.65075C0.538146 8.3327 0.515697 9.07894 0.431509 9.4814C0.344516 9.48699 0.288391 9.4842 0.246297 9.4842C0.0807292 9.48141 0.0414418 9.67146 0.0358293 9.86151C0.0133794 10.563 -0.0483579 12.0695 0.0723104 12.9275C0.173335 13.6486 0.591465 13.875 1.22287 13.875H2.37062C3.27143 13.875 3.11147 13.7939 3.17321 12.9359C3.35 10.5211 5.3733 8.61499 7.84279 8.61499C10.3123 8.61499 12.3328 10.5155 12.5124 12.9275C12.5825 13.861 12.3917 13.8778 13.3486 13.8778H31.8025C32.8941 13.8778 32.6808 13.8163 32.8015 12.7542C33.0653 10.4261 35.0465 8.61499 37.4542 8.61499C39.862 8.61499 41.9162 10.4904 42.121 12.88C42.1659 13.4166 42.02 13.8778 42.5672 13.8778H42.8563ZM7.85121 9.55966C9.9138 9.55966 11.5863 11.2254 11.5863 13.2797C11.5863 15.3339 9.9138 16.9997 7.85121 16.9997C5.78862 16.9997 4.1161 15.3339 4.1161 13.2797C4.1161 11.2254 5.78862 9.55966 7.85121 9.55966ZM37.4571 9.55966C39.5196 9.55966 41.1922 11.2254 41.1922 13.2797C41.1922 15.3339 39.5196 16.9997 37.4571 16.9997C35.3945 16.9997 33.7219 15.3339 33.7219 13.2797C33.7219 11.2254 35.3945 9.55966 37.4571 9.55966ZM15.7957 5.46235C15.8181 5.3757 15.9725 5.09901 15.9949 4.74965C16.0314 4.15992 14.9482 4.11521 14.2775 4.15993C15.24 2.84353 16.0567 2.17276 16.9743 1.42652C17.5833 1.22249 21.1135 1.1107 22.2556 1.08834C22.7467 1.07716 23.235 1.06877 23.7261 1.05759C23.9927 1.0548 24.0264 1.17777 23.9478 1.38459C23.8159 2.11127 23.5802 3.59536 23.423 4.60711C23.3473 5.09621 23.2294 5.38129 22.7271 5.37291C20.7431 5.47912 15.7676 5.63004 15.7929 5.46235H15.7957ZM32.4142 4.67698C32.3244 3.81615 31.8782 2.49976 31.6004 1.62496C31.4966 1.29795 31.3787 0.973745 31.0055 0.98213C29.1113 1.03523 27.4163 1.00169 25.5558 1.0548C25.4071 1.0548 25.2246 1.13864 25.191 1.22529C24.9805 1.7675 24.9328 2.50535 24.6578 4.73288C24.582 5.34217 24.6241 5.42601 25.3032 5.41763C26.7905 5.41763 29.6136 5.42881 31.6566 5.37291C32.2683 5.35614 32.4928 5.42042 32.417 4.67698H32.4142ZM35.01 4.74685C34.6901 4.0621 34.185 2.87148 33.7107 1.80103C33.4357 1.18057 33.4273 0.984925 34.1457 0.973745C35.5685 0.951386 38.2793 0.984925 39.3176 1.00169C39.4102 1.00169 39.6824 1.14144 39.7273 1.22808C40.0135 1.77029 40.2942 2.32088 41.0996 4.54842C41.3212 5.1577 41.2118 5.38129 40.7768 5.37291C39.8003 5.35334 37.3532 5.3757 35.908 5.37291C35.459 5.37291 35.1868 5.12416 35.01 4.74406V4.74685Z"
        fill="#545D72"
      />
    </svg>
  );
};

const TruckIcon: React.FC<propType> = ({
  width = "44",
  height = "17",
  className,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 44 17"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M43.9174 12.8114C44.0555 12.2644 43.9742 11.3896 43.9932 10.829C44.0176 10.1357 43.7224 10.3605 43.457 10.1736C43.4001 9.19323 43.4516 7.54662 43.3432 6.54187C43.2187 5.36649 42.8828 5.22025 41.572 5.22296L26.1297 5.25546C25.7451 5.25546 25.5989 5.18775 25.5176 5.13359C25.2414 4.94672 25.0735 2.70972 24.781 1.41247C24.6266 0.719167 24.6293 0.37793 23.8575 0.37793H16.9434C15.9143 0.37793 14.8878 0.870828 14.0239 1.57226L10.0834 4.77339C7.12062 5.03338 4.04678 5.5344 1.65812 6.15188C0.910643 6.34687 0.604613 6.69082 0.610029 7.52496L0.626279 10.309C0.512533 10.3171 0.37983 10.3415 0.268792 10.3767C0.0358841 10.4553 0.0250512 10.5338 0.00880176 10.7613C-0.00473941 10.9427 0.000677058 11.1648 0.00338529 11.2786C0.0142182 11.7227 0.0575499 12.9956 0.37983 13.2366C0.536907 13.3558 0.791481 13.4479 1.01626 13.4533L1.73124 13.4668C2.26476 13.3612 2.36767 13.1879 2.46517 12.5866C2.81182 10.4498 4.63176 8.90345 6.82542 8.90886C9.10576 8.90886 10.9799 10.6367 11.2209 12.852C11.2886 13.4858 11.6298 13.4939 12.0956 13.4993L29.886 13.5372C30.2598 13.5372 30.3356 13.326 30.3627 12.9766C30.5414 10.699 32.4453 8.90886 34.769 8.90886C37.0926 8.90886 38.9586 10.6638 39.1698 12.9089C39.2267 13.4993 39.2159 13.5589 39.7467 13.5616H41.1821C41.7941 13.567 43.7495 13.4722 43.9147 12.8141L43.9174 12.8114ZM21.4418 4.84651C21.6449 3.18095 21.737 1.9785 21.8182 1.51268C21.8534 1.30956 21.8913 1.17957 22.1432 1.18227H23.194C23.2779 1.18227 23.3267 1.37456 23.3429 1.67517L23.5081 4.68673C23.5488 5.41524 23.4702 5.334 23.0938 5.334H21.978C21.4011 5.334 21.3822 5.3692 21.4445 4.84651H21.4418ZM13.5283 5.334C13.2954 5.334 13.6475 5.19317 13.6664 4.89255C13.6962 4.38611 12.7727 4.35091 12.2013 4.38611L14.5953 2.23578C14.9312 1.93516 15.1532 1.79434 15.573 1.60476C16.1715 1.33394 16.6698 1.18227 17.2061 1.18227H20.632C20.8595 1.17957 20.8514 1.27435 20.8216 1.46393C20.7187 2.14641 20.5264 3.96092 20.3747 4.81131C20.2989 5.22837 20.2095 5.334 19.7816 5.334H13.5337H13.5283ZM6.82813 9.80529C8.77535 9.80529 10.3543 11.3842 10.3543 13.3314C10.3543 15.2786 8.77535 16.8575 6.82813 16.8575C4.88091 16.8575 3.30201 15.2786 3.30201 13.3314C3.30201 11.3842 4.88091 9.80529 6.82813 9.80529ZM34.7717 9.80529C36.7189 9.80529 38.2978 11.3842 38.2978 13.3314C38.2978 15.2786 36.7189 16.8575 34.7717 16.8575C32.8245 16.8575 31.2456 15.2786 31.2456 13.3314C31.2456 11.3842 32.8245 9.80529 34.7717 9.80529Z"
        fill="#545D72"
      />
    </svg>
  );
};

const SedanIcon: React.FC<propType> = ({
    width = "44",
    height = "15",
    className,
  }) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 44 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M40.7529 12.5086C41.3694 12.4575 42.0337 12.4064 42.5734 12.3265C43.0461 12.2563 43.4166 12.1413 43.5699 11.9975C44.0586 11.544 44.0011 10.1323 43.9947 9.40732C43.9947 9.23165 43.5476 9.23165 43.5348 9.04641C43.4709 7.92855 43.3911 6.9672 43.2697 5.82059C43.2186 5.34471 42.8258 4.95825 42.203 4.76342C40.3154 4.17575 37.5367 3.79887 36.6424 3.53698C35.9845 3.34534 35.6875 3.11538 35.3585 2.91098C34.0841 2.12209 32.5032 1.25655 31.6153 0.860508C30.788 0.493212 30.1365 0.0205189 29.0154 0.0205189C26.042 0.0205189 22.6245 -0.183889 19.8586 0.69762C17.2077 1.5408 14.7931 3.06109 12.2795 4.24921C9.23578 4.57179 5.85666 5.1914 2.77458 5.95474C1.77809 6.20067 1.34372 6.66378 1.03711 7.25784C0.701751 7.903 0.545251 8.50984 0.391945 8.87713C0.14921 8.8963 0.139629 8.96976 0.059782 9.11348C-0.0104833 9.24762 -0.000901639 9.77461 0.00229224 9.97902C0.00867999 10.2856 0.0310371 10.7456 0.059782 11.0426C0.114078 11.6654 0.219476 12.0135 0.535669 12.2499C0.71772 12.384 1.00517 12.4894 1.26068 12.4958L2.10386 12.5245C3.04605 12.4032 2.95982 12.5724 2.89594 11.528C2.88636 11.3747 2.88317 11.2246 2.88317 11.0745C2.88317 8.69189 4.81546 6.75959 7.19809 6.75959C9.58072 6.75959 11.513 8.69189 11.513 11.0745C11.513 11.4769 11.4875 11.8698 11.4172 12.2403C11.2383 13.1729 11.1425 12.9813 12.1007 13.0483L30.523 13.0292C31.4492 12.9142 31.3598 13.0675 31.248 11.988C31.216 11.6941 31.2096 11.3907 31.2096 11.0777C31.2096 8.69508 33.1419 6.76279 35.5246 6.76279C37.9072 6.76279 39.8395 8.69508 39.8395 11.0777C39.8395 11.3013 39.8459 11.5185 39.8459 11.7325C39.8395 12.6523 39.9832 12.5756 40.7657 12.5086H40.7529ZM26.8053 4.48556C27.0352 2.58839 27.1406 1.88255 27.2333 1.35236C27.2748 1.12241 27.3163 0.997845 27.6006 0.991457L28.2553 0.975487C28.7312 0.965906 31.018 2.4798 31.9315 3.42838C32.4584 3.97773 32.6756 4.74745 31.5067 4.80175L27.4121 4.99338C26.7542 5.02213 26.7318 5.07962 26.8053 4.48556ZM16.9266 5.37984C16.8372 5.38303 17.0608 4.97102 17.0831 4.62928C17.1183 4.05438 16.0643 4.00967 15.4127 4.05438C16.6775 3.11219 18.5555 2.11251 20.2355 1.52803C20.8264 1.33001 22.4329 1.08727 23.5443 1.05214L25.8791 0.975487C26.1378 0.972294 26.1282 1.08089 26.0962 1.29487C25.9813 2.07099 25.7609 3.4731 25.5852 4.44404C25.499 4.91992 25.3968 5.01893 24.9081 5.0381L16.9234 5.37665L16.9266 5.37984ZM35.515 7.75928C37.3483 7.75928 38.8334 9.24443 38.8334 11.0777C38.8334 12.911 37.3483 14.3961 35.515 14.3961C33.6817 14.3961 32.1965 12.911 32.1965 11.0777C32.1965 9.24443 33.6817 7.75928 35.515 7.75928ZM7.1949 7.75928C9.02818 7.75928 10.5133 9.24443 10.5133 11.0777C10.5133 12.911 9.02818 14.3961 7.1949 14.3961C5.36161 14.3961 3.87646 12.911 3.87646 11.0777C3.87646 9.24443 5.36161 7.75928 7.1949 7.75928Z"
        fill="#545D72"
      />
    </svg>
  );
};

const HatchBackIcon: React.FC<propType> = ({
    width = "44",
    height = "16",
    className,
  }) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 44 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M42.5496 13.2523C43.0521 13.1669 43.452 13.0541 43.616 12.9003C44.139 12.4149 43.9783 10.9042 43.9715 10.1284C43.9715 9.94038 43.493 9.93696 43.4793 9.74214C43.411 8.5493 42.8949 6.35159 42.765 5.12798C42.7171 4.68365 42.536 4.09577 41.7499 3.60701C40.8304 3.03964 38.1952 1.48791 37.1938 1.06751C36.5341 0.790661 36.6948 0.722303 35.9839 0.623184C32.4634 0.117334 24.7663 -0.477381 21.3142 0.616348C18.4774 1.51867 16.0062 2.82431 13.4462 4.41705C8.91408 5.19975 5.21591 5.86283 3.01478 6.45412C1.95181 6.73781 1.50065 7.24708 1.17253 7.87939C0.813653 8.5698 0.646176 8.97653 0.482117 9.36959C0.0924758 9.40377 0.000192449 9.76607 0.00361035 10.2548C0.0138641 11.0239 -0.0579119 11.5707 0.157416 12.3295C0.314639 12.89 0.817071 13.2147 1.4152 13.2318L2.51919 13.2694C3.0558 13.1669 3.21986 13.1976 3.172 12.4799C3.15492 12.2338 3.1515 11.9809 3.1515 11.7211C3.1515 9.17136 5.21933 7.10352 7.76908 7.10352C10.3188 7.10352 12.3867 9.17136 12.3867 11.7211C12.3867 12.0766 12.3867 12.4252 12.3627 12.7567C12.2841 13.8949 11.9287 13.7753 13.0224 13.83L31.5748 13.8094C32.3677 13.7137 32.5796 13.8094 32.4703 12.7294C32.4361 12.4047 32.4292 12.0629 32.4292 11.7177C32.4292 9.16794 34.4971 7.10011 37.0468 7.10011C39.5966 7.10011 41.6644 9.16794 41.6644 11.7177C41.6644 11.9467 41.6644 12.1723 41.6576 12.3876C41.6268 13.2626 41.4354 13.4403 42.5565 13.2489L42.5496 13.2523ZM27.7672 4.80669C28.0509 2.4791 28.0851 1.80578 28.3038 1.23841C28.338 1.14612 28.5431 0.95472 28.7003 0.961556C30.3751 1.04017 32.2413 1.01282 33.8648 1.38879C34.4424 1.54943 35.6216 2.89267 35.9155 3.29598C36.0283 3.45321 36.8759 4.43756 36.7426 4.63922C36.6469 4.78277 36.5273 4.87163 36.3017 4.87847C33.7793 4.96392 30.9595 5.23051 28.4405 5.25786C27.733 5.26469 27.692 5.43901 27.7706 4.80328L27.7672 4.80669ZM18.1834 5.62699C18.2074 5.53471 18.327 5.1895 18.3509 4.82378C18.3885 4.20856 17.035 4.16071 16.3378 4.20856C17.6912 3.20028 19.9266 2.13048 21.7278 1.505C23.2112 1.00941 25.2072 0.995735 26.7965 0.961556C27.0734 0.961556 27.0631 1.07435 27.029 1.30335C26.9162 2.03478 26.6462 3.61385 26.4821 4.6734C26.4035 5.18608 26.2804 5.30571 25.7575 5.30913C23.6931 5.32622 18.1561 5.72269 18.1834 5.62357V5.62699ZM37.0434 8.17333C39.0053 8.17333 40.5946 9.76265 40.5946 11.7245C40.5946 13.6864 39.0053 15.2757 37.0434 15.2757C35.0815 15.2757 33.4922 13.6864 33.4922 11.7245C33.4922 9.76265 35.0815 8.17333 37.0434 8.17333ZM7.76908 8.17333C9.73096 8.17333 11.3203 9.76265 11.3203 11.7245C11.3203 13.6864 9.73096 15.2757 7.76908 15.2757C5.80721 15.2757 4.21788 13.6864 4.21788 11.7245C4.21788 9.76265 5.80721 8.17333 7.76908 8.17333Z"
        fill="#545D72"
      />
    </svg>
  );
};

const CoupeIcon: React.FC<propType> = ({
    width = "44",
    height = "15",
    className,
  }) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 44 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M40.7529 12.5086C41.3694 12.4575 42.0337 12.4064 42.5734 12.3265C43.0461 12.2563 43.4166 12.1413 43.5699 11.9975C44.0586 11.544 44.0011 10.1323 43.9947 9.40732C43.9947 9.23165 43.5476 9.23165 43.5348 9.04641C43.4709 7.92855 43.3911 6.9672 43.2697 5.82059C43.2186 5.34471 42.8258 4.95825 42.203 4.76342C40.3154 4.17575 37.5367 3.79887 36.6424 3.53698C35.9845 3.34534 35.6875 3.11538 35.3585 2.91098C34.0841 2.12209 32.5032 1.25655 31.6153 0.860508C30.788 0.493212 30.1365 0.0205189 29.0154 0.0205189C26.042 0.0205189 22.6245 -0.183889 19.8586 0.69762C17.2077 1.5408 14.7931 3.06109 12.2795 4.24921C9.23578 4.57179 5.85666 5.1914 2.77458 5.95474C1.77809 6.20067 1.34372 6.66378 1.03711 7.25784C0.701751 7.903 0.545251 8.50984 0.391945 8.87713C0.14921 8.8963 0.139629 8.96976 0.059782 9.11348C-0.0104833 9.24762 -0.000901639 9.77461 0.00229224 9.97902C0.00867999 10.2856 0.0310371 10.7456 0.059782 11.0426C0.114078 11.6654 0.219476 12.0135 0.535669 12.2499C0.71772 12.384 1.00517 12.4894 1.26068 12.4958L2.10386 12.5245C3.04605 12.4032 2.95982 12.5724 2.89594 11.528C2.88636 11.3747 2.88317 11.2246 2.88317 11.0745C2.88317 8.69189 4.81546 6.75959 7.19809 6.75959C9.58072 6.75959 11.513 8.69189 11.513 11.0745C11.513 11.4769 11.4875 11.8698 11.4172 12.2403C11.2383 13.1729 11.1425 12.9813 12.1007 13.0483L30.523 13.0292C31.4492 12.9142 31.3598 13.0675 31.248 11.988C31.216 11.6941 31.2096 11.3907 31.2096 11.0777C31.2096 8.69508 33.1419 6.76279 35.5246 6.76279C37.9072 6.76279 39.8395 8.69508 39.8395 11.0777C39.8395 11.3013 39.8459 11.5185 39.8459 11.7325C39.8395 12.6523 39.9832 12.5756 40.7657 12.5086H40.7529ZM26.8053 4.48556C27.0352 2.58839 27.1406 1.88255 27.2333 1.35236C27.2748 1.12241 27.3163 0.997845 27.6006 0.991457L28.2553 0.975487C28.7312 0.965906 31.018 2.4798 31.9315 3.42838C32.4584 3.97773 32.6756 4.74745 31.5067 4.80175L27.4121 4.99338C26.7542 5.02213 26.7318 5.07962 26.8053 4.48556ZM16.9266 5.37984C16.8372 5.38303 17.0608 4.97102 17.0831 4.62928C17.1183 4.05438 16.0643 4.00967 15.4127 4.05438C16.6775 3.11219 18.5555 2.11251 20.2355 1.52803C20.8264 1.33001 22.4329 1.08727 23.5443 1.05214L25.8791 0.975487C26.1378 0.972294 26.1282 1.08089 26.0962 1.29487C25.9813 2.07099 25.7609 3.4731 25.5852 4.44404C25.499 4.91992 25.3968 5.01893 24.9081 5.0381L16.9234 5.37665L16.9266 5.37984ZM35.515 7.75928C37.3483 7.75928 38.8334 9.24443 38.8334 11.0777C38.8334 12.911 37.3483 14.3961 35.515 14.3961C33.6817 14.3961 32.1965 12.911 32.1965 11.0777C32.1965 9.24443 33.6817 7.75928 35.515 7.75928ZM7.1949 7.75928C9.02818 7.75928 10.5133 9.24443 10.5133 11.0777C10.5133 12.911 9.02818 14.3961 7.1949 14.3961C5.36161 14.3961 3.87646 12.911 3.87646 11.0777C3.87646 9.24443 5.36161 7.75928 7.1949 7.75928Z"
        fill="#545D72"
      />
    </svg>
  );
};

const WagonIcon: React.FC<propType> = ({
    width = "44",
    height = "15",
    className,
  }) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 44 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M35.4705 7.64174C37.2881 7.64174 38.7605 9.11417 38.7605 10.9317C38.7605 12.7493 37.2881 14.2218 35.4705 14.2218C33.6529 14.2218 32.1805 12.7493 32.1805 10.9317C32.1805 9.11417 33.6529 7.64174 35.4705 7.64174ZM33.6308 4.2314C33.7321 4.78554 33.6878 4.69371 34.2894 4.67471L41.0214 4.55122C41.7529 4.19657 40.5654 1.30237 40.5243 1.11871C40.4894 0.957223 40.2425 0.928724 39.8561 0.928724L33.6719 0.935057C33.0576 0.935057 33.0671 1.16938 33.1495 1.61902L33.6308 4.22823V4.2314ZM32.5795 4.09207L32.2027 1.96734C32.1172 1.4797 32.1552 0.865394 31.6485 0.874893L26.5441 0.963556C26.1926 0.960389 26.2275 0.928724 26.1293 1.34987C26.0248 1.79952 25.8981 2.7463 25.6796 4.52272C25.6068 5.11169 25.6448 4.95337 26.3003 4.94387L31.9462 4.81087C32.7568 4.79187 32.7188 4.89004 32.5795 4.08891V4.09207ZM40.5654 12.3883C41.2336 12.3377 41.9904 12.2744 42.5857 12.173C43.0512 12.0939 43.4216 11.9894 43.5736 11.8469C44.0581 11.3972 44.0011 9.99763 43.9948 9.27883C43.9948 9.10467 43.5515 9.10467 43.5388 8.92101C43.4818 7.94256 43.4153 6.86911 43.3171 5.84949C43.3045 5.7165 43.2918 5.5835 43.276 5.45368L41.5661 0.494911C41.4679 0.209925 41.3381 0.140261 41.0594 0.045266C40.9549 0.0136008 40.5749 0.0262669 39.5775 0.0231003C34.4414 0.00726776 28.7575 -0.0592291 23.6214 0.143428C22.1901 0.200425 20.8095 0.30492 19.7044 0.643737C17.0762 1.4797 14.6823 2.98696 12.1903 4.1649C9.1726 4.48472 5.82242 5.09903 2.76673 5.85582C1.77878 6.09965 1.34813 6.55879 1.04415 7.14776C0.711664 7.7874 0.556505 8.38904 0.404512 8.75319C0.163857 8.77218 0.154358 8.71202 0.0751948 8.85451C-0.00396813 9.00334 0.0403631 9.19966 0.021364 9.44349C-0.0198007 9.99446 -0.0103012 10.7228 0.129026 11.2167C0.262019 11.6917 0.385513 11.9229 0.619836 12.097C0.800327 12.23 1.01248 12.3345 1.26264 12.3408L2.38359 12.3788C3.05172 12.2554 2.92506 12.1699 2.88389 11.3212C2.87756 11.1946 2.8744 11.0647 2.8744 10.9349C2.8744 8.57269 4.79014 6.65695 7.15236 6.65695C9.51458 6.65695 11.4303 8.57269 11.4303 10.9349C11.4303 11.1756 11.424 11.4099 11.4082 11.641C11.3068 13.0723 11.1738 12.8253 12.4721 12.8918L30.4168 12.8728C31.373 12.7398 31.316 12.8602 31.2179 11.66C31.1989 11.4257 31.1925 11.1819 31.1925 10.9349C31.1925 8.57269 33.1083 6.65695 35.4705 6.65695C37.8327 6.65695 39.7485 8.57269 39.7485 10.9349C39.7485 11.1376 39.7421 11.3402 39.7263 11.5397C39.6503 12.5213 39.9258 12.4422 40.5654 12.3915V12.3883ZM16.8039 5.28268C16.8261 5.19719 16.9369 4.87737 16.9591 4.53855C16.9939 3.96858 15.9489 3.92425 15.303 3.96858C16.5569 3.03446 18.4188 2.04334 20.0844 1.46387C20.6702 1.26754 22.263 1.01422 23.3649 0.992054L24.7835 0.963556C24.983 0.963556 25.04 1.09972 24.9988 1.28021C24.8944 1.72669 24.6442 3.42077 24.4922 4.40239C24.4194 4.87737 24.3054 4.9882 23.8209 4.99136C21.9083 5.0072 16.7786 5.37451 16.8039 5.28268ZM7.15553 7.64174C8.97311 7.64174 10.4455 9.11417 10.4455 10.9317C10.4455 12.7493 8.97311 14.2218 7.15553 14.2218C5.33794 14.2218 3.86551 12.7493 3.86551 10.9317C3.86551 9.11417 5.33794 7.64174 7.15553 7.64174Z"
        fill="#545D72"
      />
    </svg>
  );
};

const MiniVanIcon: React.FC<propType> = ({
    width = "44",
    height = "18",
    className,
  }) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 44 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M35.4699 10.4382C37.2876 10.4382 38.7601 11.9108 38.7601 13.7285C38.7601 15.5462 37.2876 17.0187 35.4699 17.0187C33.6522 17.0187 32.1796 15.5462 32.1796 13.7285C32.1796 11.9108 33.6522 10.4382 35.4699 10.4382ZM40.1725 15.1567C40.9199 15.0933 41.8667 15.0173 42.5856 14.8812C43.0511 14.7925 43.4216 14.6753 43.5736 14.517C44.0581 14.0135 44.0011 12.4491 43.9948 11.6447C43.9948 11.4484 43.5514 11.4484 43.5388 11.2457C43.4754 10.0075 43.3741 8.73134 43.0669 7.49948C42.8294 6.54945 42.3607 5.90344 41.9997 5.16559C41.6799 4.5069 40.9072 2.38202 39.8083 1.16599C39.6437 0.982317 39.6342 0.735311 39.6405 0.53264C39.6563 -0.00254001 39.574 0.0702951 39.0768 0.0259607C38.5131 -0.0247072 37.5536 0.0132938 36.2711 0.0196272L21.1625 0.105129C20.4532 0.108296 19.7818 0.171631 19.1675 0.219132C15.7854 0.466138 11.7288 3.31937 8.84075 5.05792C7.22887 5.62476 4.75248 6.55895 2.58643 7.35381C1.71874 7.67365 1.44007 8.08849 1.18039 8.649C1.01256 9.01318 0.885887 9.47236 0.73705 10.0772C0.642047 10.4699 0.499544 10.8246 0.404542 11.0557C0.163869 11.0779 0.154369 11.0082 0.0752002 11.1666C-0.00396841 11.3312 0.040366 11.5529 0.0213655 11.8252C-0.0198021 12.4428 -0.0103019 13.2534 0.129035 13.8076C0.262038 14.3396 0.385541 14.5961 0.61988 14.7925C0.800385 14.9413 1.01256 15.0553 1.26273 15.0648L2.29825 15.1028C2.99494 15.03 3.02977 15.1535 2.9126 14.3175C2.8841 14.1243 2.87143 13.9248 2.87143 13.7221C2.87143 11.3597 4.78731 9.44386 7.14971 9.44386C9.5121 9.44386 11.428 11.3597 11.428 13.7221C11.428 14.1401 11.3678 14.5486 11.2538 14.9318C11.0163 15.7457 11.1335 15.6158 11.7985 15.6792L30.6026 15.657C31.2866 15.5905 31.5906 15.7647 31.3373 14.8337C31.2423 14.479 31.1916 14.1053 31.1916 13.7221C31.1916 11.3597 33.1075 9.44386 35.4699 9.44386C37.8323 9.44386 39.7482 11.3597 39.7482 13.7221C39.7482 13.9818 39.726 14.2383 39.6817 14.4853C39.5993 14.9477 39.7228 15.1915 40.1757 15.1535L40.1725 15.1567ZM22.7174 5.49176C22.9803 3.0787 23.0436 1.99568 23.2463 1.40983C23.2779 1.31483 23.4553 1.22616 23.5978 1.22616L29.4372 1.18499C29.8109 1.18499 30.0358 1.19449 30.0516 1.69483L30.1529 5.10858C30.1656 5.5361 30.2194 5.7546 29.7318 5.77043C27.3947 5.85594 25.6752 5.93194 23.3413 5.96361C22.6858 5.97311 22.6477 6.15044 22.7206 5.49176H22.7174ZM13.2109 6.31195C13.233 6.21695 13.3439 5.8591 13.366 5.47909C13.4009 4.83941 12.3558 4.79191 11.7098 4.83941C13.7239 3.1642 17.1788 1.25149 19.7565 1.24832H21.8022C22.0587 1.24199 22.0682 1.36549 22.0176 1.59983C21.8402 2.39152 21.6787 4.25673 21.5267 5.35559C21.4539 5.88444 21.3399 6.01111 20.8554 6.01427C18.9427 6.03327 13.1855 6.41328 13.2077 6.31195H13.2109ZM31.217 5.25742C31.1663 4.14273 31.1125 3.02803 31.0618 1.91651C31.0523 1.74234 31.0998 1.59667 31.1315 1.4605C31.1536 1.36549 31.3183 1.27682 31.4608 1.27682C32.7623 1.25782 32.2493 1.26099 33.5508 1.24516C33.9024 1.23882 36.1539 1.6885 36.8759 2.32185C37.8418 3.1737 38.8425 4.26623 39.0705 4.70957C39.2637 5.08642 39.1782 5.35242 38.6936 5.37142C36.3661 5.45693 34.2222 5.6976 31.8915 5.72927C31.2391 5.73877 31.2486 5.9161 31.217 5.25742ZM7.15287 10.4382C8.97058 10.4382 10.4431 11.9108 10.4431 13.7285C10.4431 15.5462 8.97058 17.0187 7.15287 17.0187C5.33516 17.0187 3.86263 15.5462 3.86263 13.7285C3.86263 11.9108 5.33516 10.4382 7.15287 10.4382Z"
        fill="#545D72"
      />
    </svg>
  );
};

const ConvertibleIcon: React.FC<propType> = ({
  width = "44",
  height = "14",
  className,
}) => {
return (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 44 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M40.5515 11.3838C41.2222 11.3263 41.9761 11.2784 42.5733 11.1857C43.0461 11.1155 43.4166 11.0005 43.5699 10.8567C44.0586 10.4032 44.0011 8.99139 43.9947 8.26632C43.9947 8.09065 43.5476 8.09065 43.5348 7.90539C43.4709 6.79065 43.439 6.40097 43.3176 5.25428C43.2665 4.78155 42.8736 4.39187 42.2507 4.19703C40.4525 3.63487 36.1436 3.11423 34.1058 3.02799L33.4606 3.00244L32.8249 2.8619C32.4033 2.92897 32.4416 2.84912 32.349 3.29629C32.2692 3.68598 32.0679 4.16509 31.5601 4.18745C29.7937 4.2705 28.0242 4.28966 26.3345 4.34716C26.1556 4.35354 25.9321 4.24814 25.9352 4.04372L25.948 3.27394C25.948 3.18131 25.8905 3.11423 25.7979 3.10784L25.2102 3.05354C25.1207 3.04396 25.0505 3.1302 25.0345 3.21964L24.9131 3.8904C24.8301 4.34716 24.7534 4.47492 24.2967 4.49408L16.979 4.80391C16.8895 4.80711 17.1131 4.39507 17.1355 4.0533C17.1706 3.47836 15.5448 3.37615 14.8932 3.41767C15.8067 2.68622 17.8797 1.55231 19.6972 0.667544C19.908 0.565333 20.0357 0.558945 19.8952 0.341745L19.7578 0.124546C19.6556 -0.0351592 19.5279 -0.0223827 19.365 0.0574699C16.7107 1.30317 14.8772 2.17836 12.3284 3.67639C9.28437 3.999 5.9082 4.61865 2.82269 5.38205C1.82613 5.62799 1.34382 5.5162 1.03718 6.1103C0.701802 6.75551 0.545291 7.36239 0.391973 7.72971C0.149221 7.74888 0.139639 7.82234 0.0597863 7.96608C-0.010484 8.10023 -0.000901705 8.62726 0.0022924 8.83168C0.00868062 9.13832 0.0310394 9.59827 0.0597863 9.89532C0.114086 10.5182 0.219492 10.8663 0.535708 11.1027C0.717772 11.2368 1.00524 11.3199 1.26077 11.3295L2.22539 11.3614C2.85782 11.272 2.96962 11.3391 2.90574 10.5086C2.88976 10.3201 2.88338 10.1253 2.88338 9.92726C2.88338 7.54446 4.81581 5.61202 7.19861 5.61202C9.58142 5.61202 11.5139 7.54446 11.5139 9.92726C11.5139 10.2626 11.4947 10.5916 11.45 10.9047C11.2807 12.0513 11.45 11.8565 12.3443 11.8565H30.5443C31.1416 11.7351 31.3525 11.7351 31.2566 10.9047C31.2183 10.5916 31.2087 10.2626 31.2087 9.92726C31.2087 7.54446 33.1412 5.61202 35.524 5.61202C37.9068 5.61202 39.8392 7.54446 39.8392 9.92726C39.8392 10.0902 39.8424 10.2499 39.8424 10.4064C39.8488 11.2273 39.8871 11.4317 40.5579 11.3742L40.5515 11.3838ZM35.5176 6.61817C37.351 6.61817 38.8362 8.10343 38.8362 9.93684C38.8362 11.7703 37.351 13.2555 35.5176 13.2555C33.6841 13.2555 32.1989 11.7703 32.1989 9.93684C32.1989 8.10343 33.6841 6.61817 35.5176 6.61817ZM7.19542 6.61817C9.02884 6.61817 10.5141 8.10343 10.5141 9.93684C10.5141 11.7703 9.02884 13.2555 7.19542 13.2555C5.362 13.2555 3.87674 11.7703 3.87674 9.93684C3.87674 8.10343 5.362 6.61817 7.19542 6.61817Z"
      fill="#545D72"
    />
  </svg>
);
};

export {
  SUVIcon,
  ConvertibleIcon,
  CoupeIcon,
  HatchBackIcon,
  MiniVanIcon,
  SedanIcon,
  TruckIcon,
  WagonIcon,
};
