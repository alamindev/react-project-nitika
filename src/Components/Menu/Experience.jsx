import React, { useState } from "react";
import africa from "../../assets/images/africa.png";
export default function Experience() {
  let [index, setIndex] = useState(1);
   const menu = (id) => {
     setIndex(id);
   };
  return (
    <div className="absolute top-20 w-full bg-white left-0 border-t-4 border-brand-red shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
      <div className="container mx-auto">
        <div className="flex">
          <div className="w-3/12 py-8 px-6 xl:px-12  shadow-[8px_0_16px_0_rgba(0,0,0,0.08)]">
            <ul>
              <li
                className={` cursor-pointer ${
                  index === 1 ? "menu-active" : "group-custom"
                }`}
                onClick={() => menu(1)}
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
                className={` cursor-pointer ${
                  index === 2 ? "menu-active" : "group-custom"
                }`}
                onClick={() => menu(2)}
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
                className={` cursor-pointer ${
                  index === 3 ? "menu-active" : "group-custom"
                }`}
                onClick={() => menu(3)}
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
                className={` cursor-pointer ${
                  index === 4 ? "menu-active" : "group-custom"
                }`}
                onClick={() => menu(4)}
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
                className={` cursor-pointer ${
                  index === 4 ? "menu-active" : "group-custom"
                }`}
                onClick={() => menu(4)}
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
          </div>
          <div className="w-9/12">
            {index === 1 && (
              <div className=" px-12 py-10">
                <div className="grid grid-cols-4 gap-4 xl:gap-10">
                  <a
                    href="#"
                    className="flex border rounded-lg hover:bg-brand-red/10"
                  >
                    <img
                      src={africa}
                      alt="africa"
                      className="w-[60px] h-[60px] object-cover"
                    />
                    <p className="text-base text-brand-blue-dark px-8 py-4">
                      Family Holiday
                    </p>
                  </a>
                  <a
                    href="#"
                    className="flex border rounded-lg hover:bg-brand-red/10"
                  >
                    <img
                      src={africa}
                      alt="africa"
                      className="w-[60px] h-[60px] object-cover"
                    />
                    <p className="text-base text-brand-blue-dark px-8 py-4">
                      Honeymoons
                    </p>
                  </a>
                  <a
                    href="#"
                    className="flex border rounded-lg hover:bg-brand-red/10"
                  >
                    <img
                      src={africa}
                      alt="africa"
                      className="w-[60px] h-[60px] object-cover"
                    />
                    <p className="text-base text-brand-blue-dark px-8 py-4">
                      Solo Holidays
                    </p>
                  </a>
                  <a
                    href="#"
                    className="flex border rounded-lg hover:bg-brand-red/10"
                  >
                    <img
                      src={africa}
                      alt="africa"
                      className="w-[60px] h-[60px] object-cover"
                    />
                    <p className="text-base text-brand-blue-dark px-8 py-4">
                      Couples Holidays
                    </p>
                  </a>
                  <a
                    href="#"
                    className="flex border rounded-lg hover:bg-brand-red/10"
                  >
                    <img
                      src={africa}
                      alt="africa"
                      className="w-[60px] h-[60px] object-cover"
                    />
                    <p className="text-base text-brand-blue-dark px-8 py-4">
                      Group Holidays
                    </p>
                  </a>
                </div>
              </div>
            )}
            {index === 2 && (
              <div className=" px-12 py-10">More menu Will Come (WHat)</div>
            )}
            {index === 3 && (
              <div className=" px-12 py-10">
                More menu Will Come (UNIQUE EXPERIENCES)
              </div>
            )}
            {index === 4 && (
              <div className=" px-12 py-10">
                More menu Will Come (COLLABORATIONS)
              </div>
            )}
            {index === 5 && (
              <div className=" px-12 py-10">More menu Will Come (VIEW ALL)</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
