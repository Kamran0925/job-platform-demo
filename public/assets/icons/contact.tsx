import React from "react";

interface IconProps {
  color?: string;
  width?: number;
  height?: number;
}

const ContactIcon: React.FC<IconProps> = ({
  color = "#9CA3AF",
  width = 18,
  height = 13,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 18 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.99996 7.21091L16.7291 1.0338C16.4323 0.798453 16.0561 0.668445 15.6666 0.666687H2.33329C1.94385 0.668445 1.56758 0.798453 1.27079 1.0338L8.99996 7.21091Z"
      fill={color}
    />
    <path
      d="M10.0416 8.42657C9.73833 8.6431 9.36763 8.76134 8.98579 8.76335C8.62996 8.76403 8.28358 8.65645 7.99913 8.45691L0.666626 2.59869V10.7778C0.666626 11.1904 0.842221 11.586 1.15478 11.8777C1.46734 12.1695 1.89127 12.3334 2.33329 12.3334H15.6666C16.1087 12.3334 16.5326 12.1695 16.8451 11.8777C17.1577 11.586 17.3333 11.1904 17.3333 10.7778V2.59869L10.0416 8.42657Z"
      fill={color}
    />
  </svg>
);

export default ContactIcon;
