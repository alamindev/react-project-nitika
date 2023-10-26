import React, { useEffect, useRef, useState } from "react";
import plane from "../../../assets/images/checkout/plane.svg";
import refresh from "../../../assets/images/checkout/refrash.svg";
import logo from "../../../assets/images/checkout/spirit-airlines.png";

export default function Departure() {
  const contentRef = useRef(null);
  const contentMainRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const [contentMainHeight, setcontentMainHeight] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
    setContentHeight(isExpanded ? 0 : contentRef.current.scrollHeight);
    setcontentMainHeight(isExpanded ? 0 : contentMainRef.current.scrollHeight);
  };
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="space-y-4 ">
      <h2 className="font-medium text-xl sm:text-2xl text-dark">
        Departure Information
      </h2>
      <div className="space-y-3">
        <div className="rounded-xl border border-brand-gray-light">
          <div className="px-4 py-6 xl:p-6 flex items-center sm:gap-4 justify-between">
            {!isLoading ? (
              <div className="w-[325px] max-w-full space-y-2">
                <ul className="divide-x divide-brand-gray-light flex items-center">
                  <li className="px-3 first:pl-0 last:pr-0 text-sm sm:text-base text-dark">
                    Feb. 15 (Wed)
                  </li>
                  <li className="px-3 first:pl-0 last:pr-0 text-sm sm:text-base text-dark">
                    1:10 am - 9:30 pm
                  </li>
                </ul>
                <ul className="flex gap-2 items-center">
                  <li>
                    <h3 className="max-[400px]:text-sm text-base xl:text-lg font-medium text-dark">
                      New York City (JFK)
                    </h3>
                  </li>
                  <li className="shrink-0">
                    <img src={plane} alt="plane" />
                  </li>
                  <li>
                    <h3 className="max-[400px]:text-sm text-base xl:text-lg font-medium text-dark">
                      New Delhi (IGI)
                    </h3>
                  </li>
                </ul>
                <ul className="divide-x divide-brand-gray-light flex items-center">
                  <li className="px-2.5 first:pl-0 last:pr-0 flex gap-2 ">
                    <img src={logo} alt="Spirit Airlines" />
                    <p className="text-sm sm:text-base text-dark">
                      Spirit Airlines
                    </p>
                  </li>
                  <li className="px-2.5 first:pl-0 last:pr-0 text-sm sm:text-base text-dark">
                    1 Stop
                  </li>
                  <li className="px-2.5 first:pl-0 last:pr-0 text-sm sm:text-base text-dark">
                    17h 10m
                  </li>
                </ul>
              </div>
            ) : (
              <div className="w-[260px] sm:w-[325px] space-y-2 sm:space-y-3">
                <ul className="divide-x divide-brand-gray-light flex w-full items-center">
                  <li className="first:pl-0 px-3 last:pr-0 w-full">
                    <div className=" rounded bg-brand-gray-100 h-6 shadow-inner w-full animate-pulse"></div>
                  </li>
                  <li className="first:pl-0 px-3 last:pr-0 w-full ">
                    <div className=" rounded bg-brand-gray-100 h-6 shadow-inner w-full animate-pulse"></div>
                  </li>
                </ul>
                <ul className="flex w-full items-center gap-3">
                  <li className="rounded bg-brand-gray-100 h-6 shadow-inner w-full animate-pulse"></li>
                  <li className="rounded bg-brand-gray-100 h-6 shadow-inner shrink-0 w-6 animate-pulse"></li>
                  <li className="rounded bg-brand-gray-100 h-6 shadow-inner w-full animate-pulse"></li>
                </ul>
                <ul className="divide-x divide-brand-gray-light flex w-full items-center pr-6">
                  <li className="first:pl-0 px-2 last:pr-0 w-[40%] flex gap-2">
                    <div className=" rounded bg-brand-gray-100 h-6 shadow-inner w-6 shrink-0 animate-pulse"></div>
                    <div className=" rounded bg-brand-gray-100 h-6 shadow-inner w-full animate-pulse"></div>
                  </li>
                  <li className="first:pl-0 px-2 last:pr-0 w-[30%] ">
                    <div className=" rounded bg-brand-gray-100 h-6 shadow-inner w-full animate-pulse"></div>
                  </li>
                  <li className="first:pl-0 px-2 last:pr-0 w-[30%]">
                    <div className=" rounded bg-brand-gray-100 h-6 shadow-inner w-full animate-pulse"></div>
                  </li>
                </ul>
              </div>
            )}
            <button
              onClick={toggleAccordion}
              type="button"
              className="w-6 sm:w-12 h-6 sm:h-12 flex justify-center items-center"
            >
              <svg
                className={`${isExpanded ? "rotate-180" : ""}`}
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 1L7 7L1 1"
                  stroke="#00113F"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div
            className="w-full max-h-0 overflow-hidden transition-all duration-300 ease-in-out"
            style={{ maxHeight: contentMainHeight }}
            ref={contentMainRef}
          >
            <div className="first:border-t first:border-brand-gray-light">
              <div className="w-full flex items-center justify-between px-4 xl:px-6 py-3 bg-brand-blue-10  ">
                <h2 className="font-bold text-lg sm:text-xl text-brand-blue-100">
                  JFK to AAS
                </h2>
                <time
                  dateTime=""
                  className="text-lg sm:text-xl text-brand-blue-100"
                >
                  Feb. 15 (Wed)
                </time>
              </div>
              <div className="px-4 py-6 xl:p-6 w-full divide-y">
                <div className="flex justify-between items-center py-4 first:pt-0 last:pb-0">
                  <div className="w-[200px] sm:w-[300px] max-w-full gap-3 flex items-start">
                    <figure>
                      <img src={logo} alt="Spirit Airlines" />
                    </figure>
                    <div className="space-y-1">
                      <h3 className="text-lg font-medium text-dark">
                        Spirit Airlines
                      </h3>
                      <p className="text-dark text-base">Economy</p>
                    </div>
                  </div>
                  <h3 className="text-lg font-medium text-dark">SA 1234</h3>
                </div>
                <div className="flex flex-wrap gap-5 md:gap-2 justify-between md:items-center py-4 first:pt-0 last:pb-0">
                  <div className="w-full sm:w-[48%] md:w-[210px] xl:w-[250px] 2xl:w-[360px] max-w-full flex gap-3">
                    <figure className="shrink-0 mt-2">
                      <img src={plane} alt="plane" />
                    </figure>
                    <div className="space-y-1">
                      <h3 className="text-base xl:text-lg font-medium text-dark">
                        9:30pm
                      </h3>
                      <p className="text-sm sm:text-base text-dark">JFK</p>
                    </div>
                    <div className="space-y-1 overflow-hidden">
                      <h3 className="text-base xl:text-lg font-medium text-dark">
                        New York
                      </h3>
                      <p className="text-sm sm:text-base text-dark truncate ">
                        John F. Kennedy International Airport
                      </p>
                    </div>
                  </div>
                  <div className="w-full sm:w-[48%] md:w-[210px] xl:w-[250px] 2xl:w-[360px] max-w-full flex gap-3">
                    <figure className="shrink-0 mt-2">
                      <img src={plane} alt="plane" />
                    </figure>
                    <div className="space-y-1">
                      <h3 className="text-base xl:text-lg font-medium text-dark">
                        10:30am
                      </h3>
                      <p className="text-sm sm:text-base text-dark">AAS</p>
                    </div>
                    <div className="space-y-1 overflow-hidden">
                      <h3 className="text-base xl:text-lg font-medium text-dark">
                        Amsterdam
                      </h3>
                      <p className="text-sm sm:text-base text-dark truncate ">
                        Amsterdam Airport Schiphol
                      </p>
                    </div>
                  </div>
                  <div className="w-full sm:w-[300px] md:w-[175px] xl:w-[200px] 2xl:w-[300px] max-w-full space-y-2">
                    <div className="rounded-full bg-brand-blue-60 flex justify-between items-center px-4 py-1">
                      <h4 className="text-sm xl:text-base font-medium text-dark">
                        Flight Time
                      </h4>
                      <time
                        dateTime=""
                        className="text-sm xl:text-base text-dark"
                      >
                        17h 10m
                      </time>
                    </div>
                    <div className="rounded-full bg-brand-red-60 flex justify-between items-center px-4 py-1">
                      <h4 className="text-sm xl:text-base font-medium text-dark">
                        Layover
                      </h4>
                      <time
                        dateTime=""
                        className="text-sm xl:text-base text-dark"
                      >
                        1st Stop 38m
                      </time>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="first:border-t first:border-brand-gray-light">
              <div className="w-full flex items-center justify-between px-4 xl:px-6 py-3 bg-brand-blue-10 ">
                <h2 className="font-bold text-lg sm:text-xl text-brand-blue-100">
                  AAS to IGI
                </h2>
                <time
                  dateTime=""
                  className="text-lg sm:text-xl text-brand-blue-100"
                >
                  Feb. 15 (Wed)
                </time>
              </div>
              <div className="px-4 py-6 xl:p-6 w-full divide-y">
                <div className="flex justify-between items-center py-4 first:pt-0 last:pb-0">
                  <div className="w-[200px] sm:w-[300px] max-w-full gap-3 flex items-start">
                    <figure>
                      <img src={logo} alt="Spirit Airlines" />
                    </figure>
                    <div className="space-y-1">
                      <h3 className="text-lg font-medium text-dark">
                        Spirit Airlines
                      </h3>
                      <p className="text-dark text-base">Economy</p>
                    </div>
                  </div>
                  <h3 className="text-lg font-medium text-dark">SA 1234</h3>
                </div>
                <div className="flex flex-wrap gap-5 md:gap-2 justify-between md:items-center py-4 first:pt-0 last:pb-0">
                  <div className="w-full sm:w-[48%] md:w-[210px] xl:w-[250px] 2xl:w-[360px] max-w-full flex gap-3">
                    <figure className="shrink-0 mt-2">
                      <img src={plane} alt="plane" />
                    </figure>
                    <div className="space-y-1">
                      <h3 className="text-base xl:text-lg font-medium text-dark">
                        12:25pm
                      </h3>
                      <p className="text-sm sm:text-base text-dark">AAS</p>
                    </div>
                    <div className="space-y-1 overflow-hidden">
                      <h3 className="text-base xl:text-lg font-medium text-dark">
                        Amsterdam
                      </h3>
                      <p className="text-sm sm:text-base text-dark truncate ">
                        Amsterdam Airport Schiphol
                      </p>
                    </div>
                  </div>
                  <div className="w-full sm:w-[48%] md:w-[210px] xl:w-[250px] 2xl:w-[360px] max-w-full flex gap-3">
                    <figure className="shrink-0 mt-2">
                      <img src={plane} alt="plane" />
                    </figure>
                    <div className="space-y-1">
                      <h3 className="text-base xl:text-lg font-medium text-dark">
                        1:10am
                      </h3>
                      <p className="text-sm sm:text-base text-dark">IGI</p>
                    </div>
                    <div className="space-y-1 overflow-hidden">
                      <h3 className="text-base xl:text-lg font-medium text-dark">
                        Dubai
                      </h3>
                      <p className="text-sm sm:text-base text-dark truncate ">
                        Indira Gandhi International Airport
                      </p>
                    </div>
                  </div>
                  <div className="w-full sm:w-[300px] md:w-[175px] xl:w-[200px] 2xl:w-[300px] max-w-full space-y-2">
                    <div className="rounded-full bg-brand-blue-60 flex justify-between items-center px-4 py-1">
                      <h4 className="text-sm xl:text-base font-medium text-dark">
                        Flight Time
                      </h4>
                      <time
                        dateTime=""
                        className="text-sm xl:text-base text-dark"
                      >
                        17h 10m
                      </time>
                    </div>
                    <div className="rounded-full bg-brand-red-60 flex justify-between items-center px-4 py-1">
                      <h4 className="text-sm xl:text-base font-medium text-dark">
                        Layover
                      </h4>
                      <time
                        dateTime=""
                        className="text-sm xl:text-base text-dark"
                      >
                        1st Stop 38m
                      </time>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {!isLoading ? (
          <div className="rounded-xl w-full p-4 xl:px-6 xl:py-4 border border-brand-gray-light bg-brand-blue-20">
            <div
              onClick={toggleAccordion}
              className="flex justify-between items-center cursor-pointer"
            >
              <p className="text-base text-brand-blue-200">
                Close Departure Policies
              </p>
              <div className="pr-1 md:pr-4">
                <svg
                  className={`${isExpanded ? "rotate-180" : ""}`}
                  width="14"
                  height="8"
                  viewBox="0 0 14 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 1L7 7L1 1"
                    stroke="#00113F"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div
              className="w-full max-h-0 overflow-hidden transition-all duration-300 ease-in-out"
              style={{ maxHeight: contentHeight }}
              ref={contentRef}
            >
              <div className="pt-6 flex gap-3 sm:gap-4 items-start">
                <div className="w-[56px] shrink-0 bg-white border border-brand-gray-light rounded-xl h-[56px] flex justify-center items-center">
                  <img src={refresh} alt="refresh" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-brand-dark text-base xl:text-lg font-medium">
                    Cancellation Details
                  </h3>
                  <p className="text-sm xl:text-base text-dark">
                    The flight is
                    <strong className="text-brand-blue-dark">
                      fully refundable
                    </strong>
                    If cancelled within
                    <strong className="text-brand-blue-dark">85 hours</strong>
                    after booking
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="rounded-xl w-full p-4 xl:px-6 xl:py-4 border border-brand-gray-light ">
            <div className="flex justify-between items-center cursor-pointer">
              <div className="w-[270px] sm:w-[325px] rounded bg-brand-gray-100 h-6 shadow-inner   animate-pulse"></div>
              <div className="pr-1 md:pr-4">
                <svg
                  className={`${isExpanded ? "rotate-180" : ""}`}
                  width="14"
                  height="8"
                  viewBox="0 0 14 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 1L7 7L1 1"
                    stroke="#00113F"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
