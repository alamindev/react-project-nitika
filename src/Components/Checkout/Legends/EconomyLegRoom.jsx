import React, { useState } from "react";
import Times from "../../Svg/Times";

export default function EconomyLegRoom({
  status = "available",
  is_crown = false,
  is_star = false,
  is_red = false,
  is_selected = false,
  user_short_name = "AB",
}) {
  let className = null;
  if (is_red) {
    if (status === "unavailable") {
      className = "fill-brand-red-40 stroke-brand-red-40";
    } else if (status === "available") {
      className =
        "stroke-brand-red-300 group-hover/seat:fill-brand-red group-hover/seat:stroke-brand-red";
    } else if (status === "selected") {
      className = "fill-brand-red stroke-brand-red";
    }
  } else {
    if (status === "unavailable") {
      className = "fill-brand-blue-50 stroke-brand-blue-50";
    } else if (status === "available") {
      className =
        " stroke-brand-blue-300 group-hover/seat:fill-brand-blue-400 group-hover/seat:stroke-brand-blue-400";
    } else if (status === "selected") {
      className = "fill-brand-blue-400 stroke-brand-blue-400";
    }
  }

  const [clickable, setClickable] = useState(is_selected);
  const [clickMobile, setClickMobile] = useState(false);

  const ShowSeatNumber = () => {
    if (status === "selected" || status === "available") {
      setClickable(true);
      setClickMobile(true);
    }
  };

  const HideSeatNumber = () => {
    setClickable(false);
    setClickMobile(false);
  };

  const StarElement = () => {
    if (is_star === true && status !== "unavailable") {
      return (
        <>
          <svg
            className={`group-[.active-seat]/seat:w-2.5 hidden sm:block  duration-500 transition-all group-[.active-seat]/seat:top-4 group-[.active-seat]/seat:left-[28px] fill-white  absolute left-1/2 -translate-x-[7px] top-1.5 w-[15px] ${
              is_red ? "stroke-brand-red-300" : " stroke-brand-blue-300"
            }   `}
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="16"
            fill="none"
            viewBox="0 0 17 16"
          >
            <path
              strokeWidth="1.355"
              d="M5.616 14.83l2.655-1.397a.226.226 0 01.21 0l2.656 1.396c1.16.61 2.515-.375 2.293-1.666l-.508-2.957a.226.226 0 01.065-.2l2.149-2.093c.938-.915.42-2.508-.876-2.697l-2.969-.431a.226.226 0 01-.17-.124l-1.328-2.69c-.58-1.175-2.255-1.175-2.835 0L5.63 4.66a.226.226 0 01-.17.124l-2.969.431c-1.296.189-1.814 1.782-.875 2.697l2.148 2.093a.226.226 0 01.065.2l-.507 2.957c-.221 1.291 1.134 2.276 2.294 1.666z"
            ></path>
          </svg>
          <div
            className={`${
              is_red ? "bg-brand-red-300" : " bg-brand-blue-400"
            } w-[14px] h-[14px] absolute right-0 top-3 flex justify-center items-center rounded-md  sm:hidden`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="9"
              fill="none"
              viewBox="0 0 10 9"
            >
              <path
                fill="#fff"
                d="M4.919 6.864L2.312 8.235l.498-2.904L.7 3.275l2.915-.423L4.919.209l1.304 2.643 2.915.423-2.11 2.056.499 2.904-2.608-1.37z"
              ></path>
            </svg>
          </div>
        </>
      );
    }
  };
  const CrownElement = () => {
    if (is_crown === true && status !== "unavailable") {
      return (
        <>
          <svg
            className={`sm:block hidden group-[.active-seat]/seat:w-3 transition-all duration-500 group-[.active-seat]/seat:top-[18px] group-[.active-seat]/seat:left-[28px] fill-white absolute left-1/2 -translate-x-[7px] top-2 w-[15px] ${
              is_red ? "stroke-brand-red-300" : " stroke-brand-blue-300"
            }   `}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="14"
            fill="none"
            viewBox="0 0 16 14"
          >
            <path
              strokeWidth="1.084"
              d="M6.727 1.512h0a1.218 1.218 0 011.907.02s0 0 0 0l1.836 2.36 2.224-1.923h0a1.218 1.218 0 012.002 1.096h0l-1.014 6.996-.067.464h-.005v.81a1.218 1.218 0 01-1.218 1.218H2.926a1.218 1.218 0 01-1.218-1.218V10.38l-.047-.317L.631 3.1s0 0 0 0h0l.537-.08 5.56-1.507zm0 0L4.79 3.896m1.937-2.384L4.79 3.896m0 0l-2.149-1.89s0 0 0 0 0 0 0 0l2.15 1.89z"
            ></path>
          </svg>
          <div
            className={`${
              is_red ? "bg-brand-red-300" : " bg-brand-blue-400"
            } w-[14px] h-[14px] absolute right-0 top-3 flex justify-center items-center rounded-md  sm:hidden`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="9"
              height="7"
              fill="none"
              viewBox="0 0 9 7"
            >
              <path
                fill="#fff"
                d="M1.026.766l1.67 1.47L4.184.403a.439.439 0 01.687.008l1.42 1.824L8.016.745a.439.439 0 01.72.395l-.658 4.542H.97L.302 1.16a.439.439 0 01.724-.394zm-.022 5.355h7.024v.439a.439.439 0 01-.439.439H1.443a.439.439 0 01-.439-.44v-.438z"
              ></path>
            </svg>
          </div>
        </>
      );
    }
  };

  return (
    <div
      className={`relative flex leading-none group/seat  w-[27px] sm:w-[35px] h-[24px] sm:h-[31px] ${
        clickable && "active-seat"
      } ${clickMobile && "active"}`}
    >
      <button
        type="button"
        onClick={ShowSeatNumber}
        disabled={
          status === "selected" || status === "available" ? false : true
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="35"
          fill="none"
          viewBox="0 0 33 32"
          className={`w-[27px] sm:w-auto h-[24px] sm:h-auto ${
            is_red
              ? "group-[.active-seat]/seat:fill-brand-red group-[.active-seat]/seat:stroke-brand-red"
              : "group-[.active-seat]/seat:fill-brand-blue-400 group-[.active-seat]/seat:stroke-brand-blue-400"
          } ${className} `}
        >
          <path
            strokeWidth="1.2"
            d="M10.6 4.673h10.995c.981 0 1.824.699 2.006 1.663l2.536 13.45a2.041 2.041 0 01-2.006 2.419H8.54a2.041 2.041 0 01-2.018-2.35l2.06-13.45A2.041 2.041 0 0110.6 4.673z"
          ></path>
          <rect
            width="2.744"
            height="11.734"
            x="28.657"
            y="7.573"
            strokeWidth="1.2"
            rx="1.372"
          ></rect>
          <rect
            width="2.744"
            height="11.734"
            x="0.6"
            y="7.573"
            strokeWidth="1.2"
            rx="1.372"
          ></rect>
          <rect
            width="2.814"
            height="11.509"
            x="21.757"
            y="25.635"
            strokeWidth="1.2"
            rx="1.407"
            transform="rotate(90 21.757 25.635)"
          ></rect>
          <rect
            width="1.171"
            height="12.098"
            x="22.049"
            y="0.756"
            strokeWidth="1.171"
            rx="0.585"
            transform="rotate(90 22.05 .756)"
          ></rect>
        </svg>
        {!is_crown && <StarElement />}
        {is_crown && <CrownElement />}
      </button>
      {clickable && (
        <>
          <span className="text-[7px] sm:text-[11px] m-0 p-0 absolute top-1/2 left-1/2  text-white uppercase -translate-y-[7px] -translate-x-1/2">
            {user_short_name}
          </span>
          <span
            onClick={HideSeatNumber}
            className="absolute  sm:-top-1.5 -top-1.5 right-0 cursor-pointer"
          >
            <Times />
          </span>
        </>
      )}
    </div>
  );
}
