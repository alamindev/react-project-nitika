import React, { useState } from "react";

export default function DateOfBirth({ classes }) {
  const [isInputActive, setIsInputActive] = useState(false);

  const handleInputFocus = () => {
    setIsInputActive(true);
  };

  const handleInputBlur = () => {
    setIsInputActive(false);
  };

  return (
    <div
      className={`group w-full sm:w-auto  ${classes}  ${
        isInputActive ? "active" : ""
      }`}
    >
      <div className="relative w-full sm:w-[215px] 2xl:w-[240px] h-[48px] border border-brand-gray-light group-[.active]:border-brand-blue-400 group-hover:border-brand-blue-100  group-[.error]:border-brand-red rounded px-2 after:top-5 after:absolute after:right-3 group-[.error]:after:content-error">
        <label htmlFor="date" className="text-xs text-brand-dark/50  ">
          Date of Birth<sup>*</sup>
        </label>
        <div className="flex divide-x -mt-1 h-5 items-center">
          <div className="relative w-[90px] 2xl:w-[110px] shrink-0 px-3 h-5 first:pl-0 last:pr-0 before:top-0 before:absolute before:right-1.5 before:content-arrow-down ">
            <select
              name="month"
              id=""
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              className="w-full h-5 appearance-none bg-transparent focus:border-none focus:outline-none text-sm 2xl:text-base focus:ring-0"
            >
              <option value="January">-</option>
              <option value="January">January</option>
              <option value="January">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>
          </div>
          <div className="px-2 first:pl-0 h-5 last:pr-0">
            <input
              type="text"
              className="w-5  h-4 text-base bg-transparent focus:border-none focus:outline-none focus:ring-0"
              name="day"
              maxLength={2}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              value="--"
            />
          </div>
          <div className="px-2 first:pl-0 h-5 last:pr-0">
            <input
              type="text"
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              className="w-full  h-4 text-base bg-transparent focus:border-none focus:outline-none focus:ring-0"
              name="year"
              maxLength={4}
              value="----"
            />
          </div>
        </div>
      </div>
      <p className="text-xs text-brand-red-100 pt-2 group-[.error]:block hidden">
        Please enter your birthday
      </p>
    </div>
  );
}
