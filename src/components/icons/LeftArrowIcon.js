import * as React from "react";

function SvgLeftArrowIcon(props) {
  return (
    <svg
      width={36}
      height={36}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M22.5 27l-9-9 9-9"
        stroke="#F8FAFC"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgLeftArrowIcon;
