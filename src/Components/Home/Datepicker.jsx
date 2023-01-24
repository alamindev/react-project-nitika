import React, { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";
import calendar from "../../assets/images/calendar.svg";
export default function Datepicker() {
  const [value, setValue] = useState(false);
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);
  return (
    <div className="flex flex-row gap-3.5 items-end relative w-full md:w-auto">
      <div className="w-full md:w-[200px] 2xl:w-[240px] max-w-full">
        <label htmlFor="to" className="inline-block text-sm ">
          Depart:
        </label>
        <div className="flex items-center gap-3">
          <img src={calendar} className="-mr-8 relative" alt="calendar" />
          <input
            type="text"
            onClick={() => setValue((state) => !state)}
            placeholder="Select Date"
            className="w-full border-0  py-1.5 focus:ring-0 pl-8 border-b  border-brand-gray-light focus:outline-none font-normal text-lg 2xl:text-2xl placeholder:text-brand-gray-500"
          />
        </div>
      </div>
      <div className="w-full md:w-[200px] 2xl:w-[240px] max-w-full">
        <label htmlFor="to" className="inline-block text-sm ">
          Return:
        </label>
        <div className="flex items-center gap-3">
          <img src={calendar} className="-mr-8 relative" alt="calendar" />
          <input
            type="text"
            onClick={() => setValue((state) => !state)}
            placeholder="Select Date"
            className="w-full border-0  py-1.5 focus:ring-0 pl-8  border-b  border-brand-gray-light focus:outline-none font-normal text-lg 2xl:text-2xl placeholder:text-brand-gray-500"
          />
        </div>
      </div>
      {value && (
        <div className="absolute top-20 z-30">
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setState([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={state}
          />
        </div>
      )}
    </div>
  );
}
