import React from "react";
import privacy from "../../assets/images/checkout/privacy.svg";
import security from "../../assets/images/checkout/security.svg";
import time_machine from "../../assets/images/checkout/time-machine.svg";
export default function Info() {
  return (
    <div className="bg-brand-blue-50 py-3">
      <ul className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 md:gap-10 lg:gap-16">
        <li className="flex gap-2 sm:gap-3.5 items-center">
          <img src={privacy} alt="privacy" />
          <p className="font-medium text-sm sm:text-base text-brand-blue-600">
            Secure Transactions
          </p>
        </li>
        <li className="flex gap-2 sm:gap-3.5 items-center">
          <img src={time_machine} alt="privacy" />
          <p className="font-medium text-sm sm:text-base text-brand-blue-600">
            24 Hour Service
          </p>
        </li>
        <li className="flex gap-2 sm:gap-3.5 items-center">
          <img src={security} alt="privacy" />
          <p className="font-medium text-sm sm:text-base text-brand-blue-600">
            Trusted Payments
          </p>
        </li>
      </ul>
    </div>
  );
}
