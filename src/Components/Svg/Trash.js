import React from "react";

function Trash({classes}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
    fill="none"
    className={classes}
      viewBox="0 0 16 16"
    >
      <path 
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.332 3.333V.667h5.333v2.666M13.333 8v6a1.333 1.333 0 01-1.334 1.333H4A1.333 1.333 0 012.666 14V8M8 9.334V12M5.332 9.334V12M10.666 9.334V12M15.333 3.333H.666V6h14.667V3.333z"
      ></path>
    </svg>
  );
}

export default Trash;
