import React from "react";

function ArrowRight({classes}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="12"
      fill="none"
          viewBox="0 0 17 12"
          className={classes}
    >
      <path 
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M1 6h15M11 1l5 5-5 5"
      ></path>
    </svg>
  );
}

export default ArrowRight;
