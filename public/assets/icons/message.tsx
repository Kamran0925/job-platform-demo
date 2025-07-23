import React from "react";

interface IconProps {
  color?: string;
  width?: number;
  height?: number;
}

const MessageIcon: React.FC<IconProps> = ({
  color = "#9CA3AF",
  width = 18,
  height = 17,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 18 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.37913 13.3333L0.666626 16.25V0.833333C0.666626 0.61232 0.754423 0.400358 0.910704 0.244078C1.06698 0.0877973 1.27895 0 1.49996 0H16.5C16.721 0 16.9329 0.0877973 17.0892 0.244078C17.2455 0.400358 17.3333 0.61232 17.3333 0.833333V12.5C17.3333 12.721 17.2455 12.933 17.0892 13.0893C16.9329 13.2455 16.721 13.3333 16.5 13.3333H4.37913ZM4.83329 5.83333V7.5H6.49996V5.83333H4.83329ZM8.16663 5.83333V7.5H9.83329V5.83333H8.16663ZM11.5 5.83333V7.5H13.1666V5.83333H11.5Z"
      fill={color}
    />
  </svg>
);

export default MessageIcon;
