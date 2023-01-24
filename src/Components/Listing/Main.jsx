import React, { useState } from "react";
import info from "../../assets/images/listing/info-circle.svg";
import SortImg from "../../assets/images/listing/sort.svg";
import times from "../../assets/images/listing/times.svg";
import DataArea from "./DataArea";
import Price from "./PriceArea";
export default function Main() {
  let [sort, setSort] = useState(false);
  return (
    <div className="w-full lg:w-[calc(100vw-330px)] 2xl:w-[calc(100vw-388px)] 3xl:w-[60%]">
      <Price />
      <div className="py-3">
        <p className="text-xs sm:text-base text-brand-dark">
          Fares for our
          <a href="#" className="text-brand-blue underline">
            carriers
          </a>
          are round trip, incl.
          <a href="#" className="text-brand-blue underline">
            taxes & fees
          </a>
          and
          <a href="#" className="text-brand-blue underline">
            our service fees
          </a>
          . Airfares include applied Booking Bonus. Additional
          <a href="#" className="text-brand-blue underline">
            baggage fees
          </a>
          may apply. ~Some flights displayed may be for alternate dates and/or
          airports. Certain results may be outside your search criteria.
        </p>
      </div>
      <div className="py-5 flex gap-3 sm:flex-wrap overflow-x-auto hide-scroll">
        <a
          href="#"
          className="flex gap-4 shrink-0 items-center text-xs sm:text-base text-brand-dark rounded-full border px-4 py-2 hover:border-brand-gray-light bg-white border-brand-gray-25 hover:bg-brand-gray-25"
        >
          <span>30m-20h 30min layover</span>
          <img src={times} alt="cross" />
        </a>
        <a
          href="#"
          className="flex gap-4  shrink-0 items-center text-xs sm:text-base text-brand-dark rounded-full border px-4 py-2 hover:border-brand-gray-light bg-white border-brand-gray-25 hover:bg-brand-gray-25"
        >
          <span>Nonstop & 1 stop</span>
          <img src={times} alt="cross" />
        </a>
      </div>
      <div className="rounded-xl bg-white flex flex-wrap md:flex-nowrap justify-between divide-x">
        <div className="flex justify-between w-full  divide-x">
          <div className="px-2 sm:px-4 xl:px-5 group w-full">
            <a
              href="#"
              className="w-full inline-block group-hover:before:opacity-100 before:opacity-0 relative space-y-2 py-4 before:h-1.5 before:bg-brand-red before:absolute before:w-full before:bottom-0 before:left-0 before:rounded-t-md"
            >
              <h2 className="text-base sm:text-[21px] font-medium text-brand-dark">
                Cheapest
              </h2>
              <ul className="flex gap-2 items-center">
                <li className="text-xs sm:text-base text-brand-gray-700">
                  $897
                </li>
                <li className="w-2.5 h-2.5 rounded-full bg-brand-gray-light"></li>
                <li className="text-xs sm:text-base text-brand-gray-700">
                  33h 22m
                </li>
              </ul>
            </a>
          </div>
          <div className="px-2 sm:px-4 xl:px-5 group w-full">
            <a
              href="#"
              className="w-full inline-block relative space-y-2 group-hover:before:opacity-100 before:opacity-0   py-4 before:h-1.5 before:bg-brand-red before:absolute before:w-full before:bottom-0 before:left-0 before:rounded-t-md"
            >
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-[21px] font-medium text-brand-dark">
                  Best
                </h2>
                <img src={info} alt="info" />
              </div>
              <ul className="flex gap-2 items-center">
                <li className="text-xs sm:text-base text-brand-gray-700">
                  $916
                </li>
                <li className="w-2.5 h-2.5 rounded-full bg-brand-gray-light"></li>
                <li className="text-xs sm:text-base text-brand-gray-700">
                  18h 42m
                </li>
              </ul>
            </a>
          </div>
          <div className="px-2 sm:px-4 xl:px-5 group w-full">
            <a
              href="#"
              className="w-full inline-block group-hover:before:opacity-100 before:opacity-0 relative space-y-2 py-4 before:h-1.5 before:bg-brand-red before:absolute before:w-full before:bottom-0 before:left-0 before:rounded-t-md"
            >
              <h2 className="text-base sm:text-[21px] font-medium text-brand-dark">
                Quickest
              </h2>
              <ul className="flex gap-2 items-center">
                <li className="text-xs sm:text-base text-brand-gray-700">
                  $1,877
                </li>
                <li className="w-2.5 h-2.5 rounded-full bg-brand-gray-light"></li>
                <li className="text-xs sm:text-base text-brand-gray-700">
                  14h 35m
                </li>
              </ul>
            </a>
          </div>
        </div>
        <div className="w-full border-t shrink-0 md:w-[160px] xl:w-[186px] flex justify-center items-center relative ">
          <button
            type="button"
            onClick={() => setSort((state) => !state)}
            className="flex justify-center w-full md:w-auto px-4 py-3 rounded-lg gap-2 xl:gap-4 items-center md:hover:bg-brand-gray-600"
          >
            <img src={SortImg} alt="sort" />
            <span>Other sort</span>
          </button>
          <div
            className={
              "bg-white rounded-md overflow-hidden shadow-lg absolute top-full z-30 right-0 3xl:left-0 w-full md:w-[230px] transition-all " +
              (sort
                ? "opacity-100 visible translate-y-0"
                : "opacity-0 invisible translate-y-10")
            }
          >
            <ul className="divide-y w-full max-h-[180px] overflow-y-auto ">
              <li className="text-sm text-brand-dark cursor-pointer py-2 hover:bg-brand-gray-50 px-4">
                Least Co <sup>2</sup>
              </li>
              <li className="text-sm text-brand-dark cursor-pointer py-2 hover:bg-brand-gray-50 px-4">
                Earlient take-off (NYC)
              </li>
              <li className="text-sm text-brand-dark cursor-pointer py-2 hover:bg-brand-gray-50 px-4">
                Earlient take-off (NYC)
              </li>
              <li className="text-sm text-brand-dark cursor-pointer py-2 hover:bg-brand-gray-50 px-4">
                Earlient take-off (NYC)
              </li>
              <li className="text-sm text-brand-dark cursor-pointer py-2 hover:bg-brand-gray-50 px-4">
                Earlient take-off (NYC)
              </li>
              <li className="text-sm text-brand-dark cursor-pointer py-2 hover:bg-brand-gray-50 px-4">
                Earlient take-off (NYC)
              </li>
              <li className="text-sm text-brand-dark cursor-pointer py-2 hover:bg-brand-gray-50 px-4">
                Earlient take-off (NYC)
              </li>
              <li className="text-sm text-brand-dark cursor-pointer py-2 hover:bg-brand-gray-50 px-4">
                Earlient take-off (NYC)
              </li>
            </ul>
          </div>
        </div>
      </div>
      <DataArea />
    </div>
  );
}
