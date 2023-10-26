import React from "react";
import check from "../../../assets/images/checkout/check-red.svg";
import security from "../../../assets/images/checkout/security.png";
export default function TravelProtection() {
  return (
    <div className=" bg-white lg:rounded-xl px-4 py-6 xl:p-6 w-full space-y-4">
      <div className="flex items-center gap-2 justify-between w-full">
        <h2 className="font-medium text-xl sm:text-2xl text-dark">
          Travel Protection
        </h2>
        <div className="flex gap-1 items-end">
          <p className="text-xl sm:text-2xl  text-brand-dark font-medium">
            $9.<sup>95</sup>
          </p>
          <p className="text-base text-brand-dark font-normal">/Person</p>
        </div>
      </div>
      <div className="">
        <div className="flex items-start gap-4">
          <figure className="shrink-0">
            <img src={security} alt="security" />
          </figure>
          <p className="text-base sm:text-lg text-black">
            Reasons you might need travel protection.
          </p>
        </div>
        <div className="w-full   xl:pl-16 mt-3 xl:-mt-2">
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 max-w-[796px] gap-x-6 sm:gap-x-12 gap-y-3">
            <li className="flex gap-2 items-center">
              <figure>
                <img src={check} alt="check" />
              </figure>
              <p className="text-base text-dark">Trip cancellation</p>
            </li>
            <li className="flex gap-2 items-center">
              <figure>
                <img src={check} alt="check" />
              </figure>
              <p className="text-base text-dark">Travel delay</p>
            </li>
            <li className="flex gap-2 items-center">
              <figure>
                <img src={check} alt="check" />
              </figure>
              <p className="text-base text-dark">Baggage delay</p>
            </li>
            <li className="flex gap-2 items-center">
              <figure>
                <img src={check} alt="check" />
              </figure>
              <p className="text-base text-dark">Trip interruption</p>
            </li>
            <li className="flex gap-2 items-center">
              <figure>
                <img src={check} alt="check" />
              </figure>
              <p className="text-base text-dark">Inclement Weather</p>
            </li>
            <li className="flex gap-2 items-center">
              <figure>
                <img src={check} alt="check" />
              </figure>
              <p className="text-base text-dark">Airline bankruptcy</p>
            </li>
            <li className="flex gap-2 items-center">
              <figure>
                <img src={check} alt="check" />
              </figure>
              <p className="text-base text-dark">Mechanical issues</p>
            </li>
          </ul>
          <div className="grid grid-cols-1 2xl:grid-cols-2 justify-center sm:justify-start gap-4 2xl:gap-7 mt-3 sm:mt-8">
            <div className="bg-brand-red-200 py-3 px-3 sm:px-4 rounded-[6px]">
              <div className="custom-checkbox checkbox-three">
                <input
                  type="checkbox"
                  id="protection"
                  name="protection"
                  className="hidden"
                />
                <label
                  htmlFor="protection"
                  className="text-base sm:text-lg select-none cursor-pointer text-brand-blue-100 relative w-full"
                >
                  <span className="ml-1 w-full truncate mt-0.5 ">
                    <strong>Yes</strong>, I want travel protection for my trip
                  </span>
                </label>
              </div>
            </div>
            <div className="sm:divide-x divide-brand-gray-light flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
              <a
                href="#"
                className="text-brand-blue-500 max-[405px]:text-sm text-base underline "
              >
                View plan details and important disclaimers
              </a>
              <a className="max-[405px]:text-sm text-base text-brand-blue-500 pl-2 sm:pl-3">
                Terms and Conditions Apply
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
