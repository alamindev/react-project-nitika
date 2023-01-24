import React, { useState } from "react";
import calendar from "../../assets/images/calendar.svg";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
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
    <div className="flex flex-col lg:flex-row gap-3.5 items-end relative">
      <div className="w-full lg:w-[400px] max-w-full">
        <label htmlFor="to" className="inline-block text-sm ">
          Pickup:
        </label>
        <div className="flex  border-b  border-brand-gray-light gap-5 divide-x divide-brand-gray-light">
          <div className="flex items-center gap-3">
            <img src={calendar} className="-mr-8 relative" alt="calendar" />
            <input
              type="text"
              onClick={() => setValue((state) => !state)}
              placeholder="Select Date"
              className="w-full border-0  py-1.5 focus:ring-0 pl-8 border-b-brand-gray-light focus:outline-none font-normal text-lg 2xl:text-2xl placeholder:text-brand-gray-500"
            />
          </div>
          <div className="flex items-center gap-3 pl-4">
            <img src={calendar} className="  relative" alt="calendar" />
            <select
              name="couch"
              id=""
              className="bg-transparent w-full border-0 py-1.5 focus:ring-0 pr-10  border-b-brand-gray-light focus:outline-none font-normal text-lg 2xl:text-2xl placeholder:text-brand-gray-500"
            >
              <option value="1">10:00AM</option>
              <option value="1">get new code</option>
              <option value="1">code </option>
            </select>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[400px] max-w-full">
        <label htmlFor="to" className="inline-block text-sm ">
          Drop-off
        </label>
        <div className="flex  border-b  border-brand-gray-light gap-5 divide-x divide-brand-gray-light">
          <div className="flex items-center gap-3">
            <img src={calendar} className="-mr-8 relative" alt="calendar" />
            <input
              type="text"
              onClick={() => setValue((state) => !state)}
              placeholder="Select Date"
              className="w-full border-0  py-1.5 focus:ring-0 pl-8 border-b-brand-gray-light focus:outline-none font-normal text-lg 2xl:text-2xl placeholder:text-brand-gray-500"
            />
          </div>
          <div className="flex items-center gap-3 pl-4">
            <img src={calendar} className="  relative" alt="calendar" />
            <select
              name="couch"
              id=""
              className="bg-transparent w-full border-0 py-1.5 focus:ring-0 pr-10  border-b-brand-gray-light focus:outline-none font-normal text-lg 2xl:text-2xl placeholder:text-brand-gray-500"
            >
              <option value="1">10:00AM</option>
              <option value="1">get new code</option>
              <option value="1">code </option>
            </select>
          </div>
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
