import React, { useState } from "react";
import MonthMobile from "./MonthMobile";
import DestinationMobile from "./DestinationMobile";
import ExperienceMobile from "./ExperienceMobile";
import DealsMobile from "./DealsMobile";
export default function MobileMenu(props) {
  const [ismonth, setIsmonth] = useState(false);
  const [isDestination, setIsDestination] = useState(false);
  const [isExperience, setIsExperience] = useState(false);
  const [isDeals, setIsDeals] = useState(false);
  const CloseMonthMenu = () => {
    setIsmonth(false);
  }
  const CloseDestinationMenu = () => {
    setIsDestination(false);
  };
  const CloseExperienceMenu = () => {
    setIsExperience(false);
  };
  const CloseDealsMenu = () => {
    setIsDeals(false);
  };
  return (
    <>
      <div
        className={
          "fixed bg-white inset-x-0 bottom-0 lg:hidden border-t  top-[7.5rem] z-20 transition-all duration-300 " +
          (props.open ? "opacity-100 visible" : "opacity-0 invisible")
        }
      >
        <ul className="grid gap-8 mt-20 px-4">
          <li
            className="text-brand-dark text-[28px] cursor-pointer flex justify-between group items-center"
            onClick={() => setIsDestination((prev) => !prev)}
          >
            <span className="group-hover:text-brand-red">Destinations</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="stroke-brand-blue-dark group-hover:stroke-brand-red"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </li>
          <li
            className="text-brand-dark text-[28px] cursor-pointer flex justify-between group items-center"
            onClick={() => setIsmonth((prev) => !prev)}
          >
            <span className="group-hover:text-brand-red">By Month</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="stroke-brand-blue-dark group-hover:stroke-brand-red"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </li>
          <li
            className="text-brand-dark text-[28px] cursor-pointer flex justify-between group items-center"
            onClick={() => setIsExperience((prev) => !prev)}
          >
            <span className="group-hover:text-brand-red">Experiences</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="stroke-brand-blue-dark group-hover:stroke-brand-red"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </li>
          <li
            className="text-brand-dark text-[28px] cursor-pointer flex justify-between group items-center"
            onClick={() => setIsDeals((prev) => !prev)}
          >
            <span className="group-hover:text-brand-red">Deals</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="stroke-brand-blue-dark group-hover:stroke-brand-red"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </li>
          <li className="flex items-center gap-6">
            <a href="#" className="text-lg text-brand-gray-500">
              Login
            </a>
            <a
              href="#"
              className="py-2 px-6 rounded-full border border-brand-gray-500 text-lg inline-block text-brand-gray-500 hover:text-white hover:bg-brand-dark transition-all"
            >
              Sign up
            </a>
          </li>
        </ul>
      </div>
      <MonthMobile ismonth={ismonth} CloseMonthMenu={CloseMonthMenu} />
      <DestinationMobile
        isDestination={isDestination}
        CloseDestinationMenu={CloseDestinationMenu}
      />
      <ExperienceMobile
        isExperience={isExperience}
        CloseExperienceMenu={CloseExperienceMenu}
      />
      <DealsMobile isDeals={isDeals} CloseDealsMenu={CloseDealsMenu} />
    </>
  );
}
