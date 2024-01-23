import React, { FC } from 'react';

interface RightArrowProps {
  width?: number;
  height?: number;
  className?: string;
}

const RightArrow: FC<RightArrowProps> = ({ width = 24, height = 24, className }) => {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.173 13H3.99805V11H16.173L10.573 5.4L11.998 4L19.998 12L11.998 20L10.573 18.6L16.173 13Z" fill="#001B44"/>
    </svg>
  );
}

export default RightArrow;
