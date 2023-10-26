import React from "react";
import check from "../../../assets/images/checkout/c-check.png";
import logo from "../../../assets/images/checkout/spirit-airlines.png";
import Plane from "../../Svg/Plane";
export default function ContactInformation() {
  return (
    <div className=" bg-white lg:rounded-xl">
      <div className=" px-4 pt-6 xl:px-6 w-full space-y-2.5">
        <h2 className="font-medium text-xl sm:text-2xl text-dark">
          Policies and Reviews
        </h2>
        <div className="px-5 py-3.5 border bg-brand-blue-20 border-brand-gray-light rounded-lg flex gap-3 items-start">
          <figure className="shrink-0">
            <img src={check} alt="check-round" />
          </figure>
          <p className="text-base text-brand-blue-200">
            Please confirm that the <strong>date(s)</strong> and
            <strong>time(s)</strong> of flights and <strong>name(s)</strong> of
            travelers in your booking are accurate. <br />
            <strong>
              Each traveler's name and date of birth must be exactly as shown on
              the passport (for international flights) or valid
              government-issued photo ID (for domestic flights) to be used on
              this trip. Tickets are non-transferable and name changes are not
              permitted after booking
            </strong>
          </p>
        </div>
      </div>
      <div className="px-4 py-6 xl:p-6">
        <ul className="grid gap-4 sm:gap-3">
          <li className="flex items-center gap-3">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2">
              <div className="flex gap-3 items-center">
                <p className="text-lg text-brand-gray-700">Traveler 1:</p>
                <h3 className="font-bold text-base text-brand-blue-100">
                  John Doe
                </h3>
              </div>
              <ul className="divide-x divide-brand-gray-light flex  sm:justify-start flex-wrap items-center">
                <li className="px-2 sm:px-3.5 first:pl-0 last:pr-0 text-dark text-base">
                  Male
                </li>
                <li className="px-2 sm:px-3.5 first:pl-0 last:pr-0 text-dark text-base">
                  Sept. 10, 1968
                </li>
              </ul>
            </div>
            <button
              type="button"
              className="shrink-0 text-brand-blue-500 text-base font-medium"
            >
              make changes
            </button>
          </li>
          <li className="flex items-center gap-3">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2">
              <div className="flex gap-3 items-center">
                <p className="text-lg text-brand-gray-700">Traveler 1:</p>
                <h3 className="font-bold text-base text-brand-blue-100">
                  John Doe
                </h3>
              </div>
              <ul className="divide-x divide-brand-gray-light flex  sm:justify-start flex-wrap items-center">
                <li className="px-2 sm:px-3.5 first:pl-0 last:pr-0 text-dark text-base">
                  Male
                </li>
                <li className="px-2 sm:px-3.5 first:pl-0 last:pr-0 text-dark text-base">
                  Sept. 10, 1968
                </li>
              </ul>
            </div>
            <button
              type="button"
              className="shrink-0 text-brand-blue-500 text-base font-medium"
            >
              make changes
            </button>
          </li>
          <li className="flex items-center gap-3">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2">
              <div className="flex gap-3 items-center">
                <p className="text-lg text-brand-gray-700">Traveler 1:</p>
                <h3 className="font-bold text-base text-brand-blue-100">
                  John Doe
                </h3>
              </div>
              <ul className="divide-x divide-brand-gray-light flex  sm:justify-start flex-wrap items-center">
                <li className="px-2 sm:px-3.5 first:pl-0 last:pr-0 text-dark text-base">
                  Male
                </li>
                <li className="px-2 sm:px-3.5 first:pl-0 last:pr-0 text-dark text-base">
                  Sept. 10, 1968
                </li>
              </ul>
            </div>
            <button
              type="button"
              className="shrink-0 text-brand-blue-500 text-base font-medium"
            >
              make changes
            </button>
          </li>
        </ul>
      </div>
      <div className="py-6 px-4 xl:px-6 border-y border-brand-gray-light space-y-6 sm:space-y-8">
        <div className="flex flex-col sm:flex-row gap-2 w-full items-start justify-between">
          <div className="space-y-1">
            <div className="flex gap-1.5 items-center ">
              <h3 className="text-base xl:text-lg text-brand-blue-100 font-medium shrink-0">
                New Delhi (IGI)
              </h3>
              <Plane classes="fill-black" />
              <h3 className="text-base xl:text-lg text-brand-blue-100 font-medium">
                New York City (JFK)
              </h3>
            </div>
            <ul className="divide-x divide-brand-gray-light flex items-center">
              <li className="px-2  first:pl-0 last:pr-0 flex gap-2 ">
                <img src={logo} alt="Spirit Airlines" />
                <p className="text-sm sm:text-base text-dark">
                  Spirit Airlines
                </p>
              </li>
              <li className="px-2 first:pl-0 last:pr-0 text-sm sm:text-base text-dark">
                1 Stop
              </li>
              <li className="px-2 first:pl-0 last:pr-0 text-sm sm:text-base text-dark">
                17h 10m
              </li>
            </ul>
          </div>
          <ul className="divide-x divide-brand-gray-light flex items-center">
            <li className="px-2.5 first:pl-0 last:pr-0 text-sm sm:text-base text-dark">
              Mar. 01 (Wed)
            </li>
            <li className="px-2.5 first:pl-0 last:pr-0 text-sm sm:text-base text-dark">
              12:25 pm - 10:30 am
            </li>
          </ul>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 w-full items-start justify-between">
          <div className="space-y-1">
            <div className="flex gap-1.5 items-center ">
              <h3 className="text-base xl:text-lg text-brand-blue-100 font-medium shrink-0">
                New Delhi (IGI)
              </h3>
              <Plane classes="fill-black" />
              <h3 className="text-base xl:text-lg text-brand-blue-100 font-medium">
                New York City (JFK)
              </h3>
            </div>
            <ul className="divide-x divide-brand-gray-light flex items-center">
              <li className="px-2  first:pl-0 last:pr-0 flex gap-2 ">
                <img src={logo} alt="Spirit Airlines" />
                <p className="text-sm sm:text-base text-dark">
                  Spirit Airlines
                </p>
              </li>
              <li className="px-2 first:pl-0 last:pr-0 text-sm sm:text-base text-dark">
                1 Stop
              </li>
              <li className="px-2 first:pl-0 last:pr-0 text-sm sm:text-base text-dark">
                17h 10m
              </li>
            </ul>
          </div>
          <ul className="divide-x divide-brand-gray-light flex items-center">
            <li className="px-2.5 first:pl-0 last:pr-0 text-sm sm:text-base text-dark">
              Feb. 15 (Wed)
            </li>
            <li className="px-2.5 first:pl-0 last:pr-0 text-sm sm:text-base text-dark">
              1:10 am - 9:30 pm
            </li>
          </ul>
        </div>
      </div>
      <div className="px-4 py-6 xl:p-6">
        <p>
          By clicking{" "}
          <a href="#" className="font-medium  text-brand-blue-400">
            “Pay Now”
          </a>{" "}
          you agree in the{" "}
          <a href="#" className="text-brand-blue-400 underline">
            terms and conditions and privacy policies
          </a>{" "}
          &npsp of TripKart.com, and with the Fare rules.
        </p>
      </div>
    </div>
  );
}
