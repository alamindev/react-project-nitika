import React, { useState } from "react";
import calendar from "../../assets/images/calendar.svg";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
export default function DatepickerHotel() {
  const [value, setValue] = useState(false);
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);
  return (
    <div className="flex gap-3.5 items-end relative">
      <div className="xl:w-[260px] max-w-full">
        <label htmlFor="to" className="inline-block text-sm ">
          Check in:
        </label>
        <div className="flex items-center gap-3">
          <img src={calendar} className="-mr-8 relative" alt="calendar" />
          <input
            type="text"
            onClick={() => setValue((state) => !state)}
            placeholder="Select Date"
            className="w-full border-0 border-b py-1.5 focus:ring-0 pl-8 border-b-brand-gray-light focus:outline-none font-normal text-lg 2xl:text-2xl placeholder:text-brand-gray-500"
          />
        </div>
      </div>
      <div className="xl:w-[260px] max-w-full">
        <label htmlFor="to" className="inline-block text-sm ">
          Check out:
        </label>
        <div className="flex items-center gap-3">
          <img src={calendar} className="-mr-8 relative" alt="calendar" />
          <input
            type="text"
            placeholder="Select Date"
            onClick={() => setValue((state) => !state)}
            className="w-full border-0  py-1.5 border-b focus:ring-0 pl-8 border-b-brand-gray-light focus:outline-none font-normal text-lg 2xl:text-2xl placeholder:text-brand-gray-500"
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
