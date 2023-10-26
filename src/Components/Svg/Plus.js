import React from "react";

function Plus({ classes }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
          viewBox="0 0 20 20"
    className={classes}
    >
      <g 
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        clipPath="url(#clip0_44_7310)"
      >
        <path d="M10 1.667v16.667M18.333 10H1.666"></path>
      </g>
      <defs>
        <clipPath id="clip0_44_7310">
          <path fill="#fff" d="M0 0H20V20H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Plus;
