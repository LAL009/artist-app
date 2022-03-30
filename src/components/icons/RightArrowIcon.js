import * as React from "react";

function SvgRightArrow(props) {
  return (
    <svg
      width={12}
      height={22}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.5 20l9-9-9-9"
        stroke="#F8FAFC"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgRightArrow;

