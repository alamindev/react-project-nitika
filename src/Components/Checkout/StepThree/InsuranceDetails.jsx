import React from "react";
import checkBlue from "../../../assets/images/checkout/check-blue.svg";
import checkRed from "../../../assets/images/checkout/check-red.svg";
import contact from "../../../assets/images/checkout/contact.svg";
import security from "../../../assets/images/checkout/security.svg";
export default function InsuranceDetails() {
  return (
    <div className=" bg-white lg:rounded-xl px-4 py-6 xl:p-6 w-full space-y-4">
      <div className="space-y-1">
        <h2 className="font-medium text-xl sm:text-2xl text-dark">
          Insurance Details
        </h2>
        <p className="text-lg text-brand-gray-700">
          Flight insurance protects you in case of unexpected events.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        <div className="flex gap-4 items-start p-3 rounded-lg bg-white border border-brand-gray-light">
          <div className="shrink-0 w-10 h-10 rounded-[6px] bg-brand-gray-60 flex justify-center items-center">
            <img src={security} alt="security" />
          </div>
          <div className="space-y-1 w-full">
            <h3 className="text-lg sm:text-xl font-bold text-brand-blue-100">
              Insurance
            </h3>
            <ul className="grid max-[410px]:grid-cols-1 grid-cols-2 gap-1.5">
              <li className="flex gap-2 items-center">
                <img src={checkRed} alt="check red" />
                <p className="text-dark text-sm sm:text-base">
                  Trip cancellation
                </p>
              </li>
              <li className="flex gap-2 items-center">
                <img src={checkRed} alt="check red" />
                <p className="text-dark text-sm sm:text-base">Baggage delay</p>
              </li>
              <li className="flex gap-2 items-center">
                <img src={checkRed} alt="check red" />
                <p className="text-dark text-sm sm:text-base">
                  Inclement Weather
                </p>
              </li>
              <li className="flex gap-2 items-center">
                <img src={checkRed} alt="check red" />
                <p className="text-dark text-sm sm:text-base">
                  Mechanical issues
                </p>
              </li>
              <li className="flex gap-2 items-center">
                <img src={checkRed} alt="check red" />
                <p className="text-dark text-sm sm:text-base">Travel delay</p>
              </li>
              <li className="flex gap-2 items-center">
                <img src={checkRed} alt="check red" />
                <p className="text-dark text-sm sm:text-base">
                  Trip interruption
                </p>
              </li>
              <li className="flex gap-2 items-center">
                <img src={checkRed} alt="check red" />
                <p className="text-dark text-sm sm:text-base">
                  Airline bankruptcy
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex gap-4 items-start p-3 rounded-lg bg-white border border-brand-gray-light">
          <div className="shrink-0 w-10 h-10 rounded-[6px] bg-brand-gray-60 flex justify-center items-center">
            <img src={contact} alt="contact" />
          </div>
          <div className="space-y-1 w-full">
            <h3 className="text-lg sm:text-xl font-bold text-brand-blue-100">
              Person Insured
            </h3>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-1.5 max-w-[220px] sm:max-w-full">
              <li className="flex gap-2 items-center">
                <img src={checkBlue} alt="check red" />
                <p className="text-dark text-sm sm:text-base">John Doe</p>
              </li>
              <li className="flex gap-2 items-center">
                <img src={checkBlue} alt="check red" />
                <p className="text-dark text-sm sm:text-base">Jane Doe</p>
              </li>
              <li className="flex gap-2 items-center">
                <img src={checkBlue} alt="check red" />
                <p className="text-dark text-sm sm:text-base">Bill Doe</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
