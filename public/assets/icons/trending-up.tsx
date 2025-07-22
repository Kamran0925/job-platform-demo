import React from "react";

interface TrendingUpIconProps {
  width?: number;
  height?: number;
  fill?: string;
}

const TrendingUpIcon: React.FC<TrendingUpIconProps> = ({
  width = 18,
  height = 11,
  fill = "#6B7280",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.70775 10.0963L0 9.3885L6.30375 3.0345L10.3038 7.0345L16.3307 1.09625H13V0.0962524H18V5.09625H17V1.80375L10.3038 8.5L6.30375 4.5L0.70775 10.0963Z"
        fill={fill}
      />
    </svg>
  );
};

export default TrendingUpIcon;
