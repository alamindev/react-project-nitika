import React from "react";
import briefcase from "../../../assets/images/checkout/briefcase.png";
import luggage from "../../../assets/images/checkout/luggage.svg";
export default function IncludedBaggageTwo() {
  return (
    <div className=" bg-white lg:rounded-xl px-4 py-6 xl:p-6 w-full space-y-4">
      <div className="space-y-1">
        <h2 className="font-medium text-xl sm:text-2xl text-dark">
          Included Baggage
        </h2>
        <p className="text-lg text-brand-gray-700">
          The total baggage included in the price
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex gap-4 items-start p-3 rounded-lg bg-white border border-brand-gray-light">
          <div className="shrink-0 w-10 h-10 rounded-[6px] bg-brand-gray-60 flex justify-center items-center">
            <img src={briefcase} alt="briefcase" />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg sm:text-xl font-bold text-brand-blue-100">
              2 personal items
            </h3>
            <p className="text-base text-brand-dark">
              Must go under the seat in front of you
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-start p-3 rounded-lg bg-white border border-brand-gray-light">
          <div className="shrink-0 w-10 h-10 rounded-[6px] bg-brand-gray-60 flex justify-center items-center">
            <img src={luggage} alt="man-1" />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg sm:text-xl font-bold text-brand-blue-100">
              3 luggage's
            </h3>
            <p className="text-base text-brand-dark">
              Must checked-in in the counter
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
