import React from "react";

interface BulbIconProps {
  color?: string;
  width?: number;
  height?: number;
}

const BulbIcon: React.FC<BulbIconProps> = ({
  color = "#1E293B",
  width = 20,
  height = 20,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 1.667a6.667 6.667 0 0 0-3.773 12.152v.515a2.225 2.225 0 0 0 1.111 1.92v.579a1.667 1.667 0 0 0 3.334 0v-.579a2.224 2.224 0 0 0 1.11-1.92v-.515A6.667 6.667 0 0 0 10 1.667Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.5 17.5h5"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default BulbIcon;
