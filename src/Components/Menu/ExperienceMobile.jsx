import React, { useState } from "react"; 
import ExperienceMobileSub from "./ExperienceMobileSub";
export default function ExperienceMobile({ isExperience, CloseExperienceMenu }) {
  let [index, setIndex] = useState(0);
  const CloseExperienceSubMenu = () => {
    setIndex(0);
  };
  return (
    <div
      className={
        "fixed z-40 w-full top-0 bottom-0 bg-white lg:hidden transition-all duration-300 " +
        (isExperience ? "right-0" : "-right-[999px]")
      }
    >
      <div className="px-4 py-6 shadow-md ">
        <button type="button" onClick={() => CloseExperienceMenu()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="stroke-brand-dark"
          >
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </button>
      </div>
      <div className="overflow-y-auto h-full">
        <ul className="pb-20">
          <li
            className="cursor-pointer group-custom"
            onClick={() => setIndex(1)}
          >
            <div className="flex items-center justify-between py-3 rounded-md px-4 ">
              <span className="text-lg font-semibold uppercase text-brand-blue-dark group-custom-hover:text-brand-red">
                WHO
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="stroke-brand-blue-dark group-custom-hover:stroke-brand-red"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
          </li>
          <li
            className="cursor-pointer group-custom"
            onClick={() => setIndex(2)}
          >
            <div className="flex items-center justify-between py-3 rounded-md px-4">
              <span className="text-lg font-semibold uppercase text-brand-blue-dark group-custom-hover:text-brand-red">
                WHAT
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="stroke-brand-blue-dark group-custom-hover:stroke-brand-red"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
          </li>
          <li
            className="cursor-pointer group-custom"
            onClick={() => setIndex(3)}
          >
            <div className="flex items-center justify-between py-3 rounded-md px-4">
              <span className="text-lg font-semibold uppercase text-brand-blue-dark group-custom-hover:text-brand-red">
                UNIQUE EXPERIENCES
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="stroke-brand-blue-dark group-custom-hover:stroke-brand-red"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
          </li>
          <li
            className="cursor-pointer group-custom"
            onClick={() => setIndex(4)}
          >
            <div className="flex items-center justify-between py-3 rounded-md px-4">
              <span className="text-lg font-semibold uppercase text-brand-blue-dark group-custom-hover:text-brand-red">
                COLLABORATIONS
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="stroke-brand-blue-dark group-custom-hover:stroke-brand-red"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
          </li>
          <li
            className="cursor-pointer group-custom"
            onClick={() => setIndex(5)}
          >
            <div className="flex items-center justify-between py-3 rounded-md px-4">
              <span className="text-lg font-semibold uppercase text-brand-blue-dark group-custom-hover:text-brand-red">
                VIEW ALL
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="stroke-brand-blue-dark group-custom-hover:stroke-brand-red"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
          </li> 
        </ul>
        <ExperienceMobileSub
          index={index}
          CloseExperienceSubMenu={CloseExperienceSubMenu}
        />
      </div>
    </div>
  );
}
