import * as React from "react";

const VerifiedBadgeIcon = (props) => {
  return (
    <svg
      width={22}
      height={22}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.623 6.108L16.96 4.923l-1.186-2.665-2.899.303-2.359-1.71-2.36 1.71-2.897-.303-1.185 2.664-2.665 1.186.302 2.9L0 11.365l1.71 2.36-.302 2.898 2.663 1.185 1.187 2.665 2.899-.303 2.358 1.71 2.36-1.71 2.898.303 1.185-2.664 2.665-1.186-.303-2.9 1.71-2.358-1.71-2.36.303-2.898zm-11.21 9.464l-2.977-2.976.992-.988 1.984 1.98L14.36 7.64l.992.992-6.94 6.94z"
        fill="url(#prefix__paint0_linear_2316:62)"
      />
      <defs>
        <linearGradient
          id="prefix__paint0_linear_2316:62"
          x1={10.515}
          y1={0.851}
          x2={10.515}
          y2={21.881}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#557EFC" />
          <stop offset={1} stopColor="#557EFC" stopOpacity={0.75} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default VerifiedBadgeIcon;
