import React from "react";

function Plane({classes}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="14"
          fill="none"
          className={classes}
      viewBox="0 0 16 14"
    >
      <path 
        d="M15.964 6.066A2.588 2.588 0 0013.39 4H3.809l-.862-1.724A.5.5 0 002.5 2h-2a.5.5 0 00-.475.658l1.658 4.974A2 2 0 003.58 9h3.036L4.07 13.243A.5.5 0 004.5 14h3.15a2.01 2.01 0 001.715-.971L11.783 9H13.5a2.5 2.5 0 002.463-2.934z"
      ></path>
      <path 
        d="M6.052 2.724A.5.5 0 006.5 3h3a.5.5 0 00.447-.724l-.586-1.171A1.989 1.989 0 007.572 0H5.5a.5.5 0 00-.447.724l.999 2z"
      ></path>
    </svg>
  );
}

export default Plane;
