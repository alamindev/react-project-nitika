import React from "react";
import calendar from "../../../assets/images/checkout/calendar.png";
import lock from "../../../assets/images/checkout/lock.png";
import security from "../../../assets/images/checkout/security.svg";
import tripLogo from "../../../assets/images/checkout/trip-logo.png";
export default function MonthlyPayment() {
  return (
    <div className=" bg-white lg:rounded-xl px-4 py-6 xl:p-6 w-full space-y-4">
      <div className="space-y-1">
        <div className="custom-radio shrink-0">
          <input type="radio" id="credit" name="card" checked />
          <label htmlFor="credit" className="text-xl sm:text-2xl text-dark">
            Monthly Payment
          </label>
        </div>
        <p className="text-lg text-brand-gray-700">
          The total baggage included in the price
          <img className="inline" src={tripLogo} alt="tripLogo" />
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex gap-4 items-start p-4 xl:p-5 rounded-lg bg-white border border-brand-gray-light">
          <div className="shrink-0 w-10 h-10 rounded-[6px] bg-brand-gray-60 flex justify-center items-center">
            <img src={security} alt="security" />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg sm:text-xl font-bold text-brand-blue-100">
              SIMPLE. SAFE. CONVENIENT.
            </h3>
            <p className="text-base text-brand-dark">
              It's easy to check if you qualify - you'll get a quick, real-time
              decision and It won't affect your credit score.
            </p>
            <a
              href="#"
              className="font-medium inline-block text-base text-brand-blue-500"
            >
              Learn more
            </a>
          </div>
        </div>
        <div className="flex gap-4 items-start p-4 xl:p-5 rounded-lg bg-white border border-brand-gray-light">
          <div className="shrink-0 w-10 h-10 rounded-[6px] bg-brand-gray-60 flex justify-center items-center">
            <img src={calendar} alt="calendar" />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg sm:text-xl font-bold text-brand-blue-100">
              FLEXIBLE OPTIONS
            </h3>
            <p className="text-base text-brand-dark">
              Choose the payment plan that works best for you. Pay over 3, 6, 12
              months. You will be redirected to Affirm to complete the
              application process.
            </p>
          </div>
        </div>
      </div>
      <ul className="divide-x divide-brand-gray-light flex justify-center sm:justify-start flex-wrap items-center">
        <li className="px-2 sm:px-3.5 first:pl-0 last:pr-0 max-sm:last:!border-l-0">
          <a
            href="#"
            className="inline-block font-medium text-brand-blue-500 underline text-sm sm:text-base"
          >
            Payment Acceptance Policy
          </a>
        </li>
        <li className="px-2 sm:px-3.5 first:pl-0 last:pr-0 max-sm:last:!border-l-0">
          <a
            href="#"
            className="inline-block font-medium text-brand-blue-500 underline text-sm sm:text-base"
          >
            <img src={lock} alt="lock" className="inline pr-1.5" />
            Privacy Policy
          </a>
        </li>
        <li className="px-2 sm:px-3.5 first:pl-0 last:pr-0 max-sm:last:!border-l-0">
          <a
            href="#"
            className="inline-block font-medium text-brand-blue-500 underline text-sm sm:text-base"
          >
            Safe Shopping Guarantee
          </a>
        </li>
      </ul>
    </div>
  );
}
