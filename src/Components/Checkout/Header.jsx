import React, { useState } from "react";
import { Link } from "react-router-dom";
import InOut from "../Svg/InOut";
export default function Header() {
  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => {
    setIsLoading(false);
  }, 2000);
  return (
    <div className="">
      <Link
        to="/listing"
        className="flex gap-3 items-center text-brand-gray-500 text-base md:text-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="13"
          fill="none"
          viewBox="0 0 8 13"
        >
          <path stroke="#00113F" d="M7 12.5l-6-6 6-6"></path>
        </svg>{" "}
        <span>Back to listings</span>
      </Link>
      <div className="flex justify-start md:justify-center items-center md:-mt-7  pt-4 md:pt-0 px-4 sm:px-0">
        {!isLoading ? (
          <ul className="flex divide-x divide-brand-gray-light items-center">
            <li className="flex gap-1 items-center pr-6">
              <p className="max-[400px]:text-sm text-base md:text-lg text-black">
                LAX
              </p>
              <InOut />
              <p className="max-[400px]:text-sm text-base md:text-lg text-black">
                LAX
              </p>
            </li>
            <li className="flex gap-1 items-center pl-6">
              <p className="max-[400px]:text-sm text-base md:text-lg text-black">
                Feb 15 (Wed){" "}
              </p>
              <span> - </span>
              <p className="max-[400px]:text-sm text-base md:text-lg text-black">
                Mar 1 (Wed)
              </p>
            </li>
          </ul>
        ) : (
          <ul className="flex gap-5 items-center w-full sm:w-auto">
            <li className="rounded-full sm:rounded bg-brand-gray-light h-6 shadow-inner w-full  sm:w-[150px] md:w-[120px] animate-pulse"></li>
            <li className="w-[1px] bg-brand-gray-light h-6 shrink-0"></li>
            <li className="rounded-full sm:rounded bg-brand-gray-light h-6 shadow-inner w-full sm:w-[150px] md:w-[120px] animate-pulse"></li>
          </ul>
        )}
      </div>
    </div>
  );
}
