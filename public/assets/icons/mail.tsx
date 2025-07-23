import React from "react";

interface MailIconProps {
  width?: number;
  height?: number;
  fill?: string;
}

const MailIcon: React.FC<MailIconProps> = ({
  width = 25,
  height = 19,
  fill = "#AC94FA",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5 10.5663L24.0938 1.30067C23.6486 0.94765 23.0842 0.752637 22.5 0.75H2.5C1.91584 0.752637 1.35143 0.94765 0.90625 1.30067L12.5 10.5663Z"
        fill={fill}
      />
      <path
        d="M14.0625 12.3898C13.6076 12.7146 13.0515 12.892 12.4788 12.895C11.945 12.896 11.4254 12.7346 10.9987 12.4353L0 3.648V15.9167C0 16.5355 0.263392 17.129 0.732233 17.5666C1.20107 18.0042 1.83696 18.25 2.5 18.25H22.5C23.163 18.25 23.7989 18.0042 24.2678 17.5666C24.7366 17.129 25 16.5355 25 15.9167V3.648L14.0625 12.3898Z"
        fill={fill}
      />
    </svg>
  );
};

export default MailIcon;
