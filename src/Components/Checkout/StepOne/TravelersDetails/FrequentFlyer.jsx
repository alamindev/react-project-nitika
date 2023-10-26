import React, { useEffect, useRef, useState } from "react";

export default function FrequentFlyer() {
  const [isLoading, setIsLoading] = useState(true);
  const contentRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
    setContentHeight(isExpanded ? 0 : contentRef.current.scrollHeight);
  };
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {!isLoading ? (
        <div className="space-y-1">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={toggleAccordion}
          >
            <h2 className="text-dark font-medium text-xl md:text-2xl">
              Frequent Flyer & Optional Request
            </h2>
            <button
              type="button"
              className="w-6 sm:w-12 h-6 sm:h-12 flex justify-center items-center"
            >
              <svg
                className={`transition-all shrink-0 ${
                  isExpanded ? "rotate-180" : ""
                }`}
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
            style={{ maxHeight: contentHeight }}
            className="max-h-0 overflow-hidden transition-all w-full"
            ref={contentRef}
          >
            <div className="w-full">
              <div className="space-y-5">
                <div className="flex flex-col md:flex-row gap-2">
                  <p className="text-sm 2xl:text-base text-dark shrink-0 w-14 sm:mt-4">
                    Adult 1
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-2 w-full">
                    <div className="group error w-full">
                      <div className="relative group-[.error]:before:content-none before:top-4 before:absolute before:right-3 before:content-arrow-down after:top-5 after:absolute after:right-3 group-[.error]:after:content-error">
                        <select
                          name="service-1"
                          id="service-1"
                          placeholder="Last name"
                          className="peer w-full appearance-none bg-none text-sm group-[.error]:!border-brand-red bg-transparent h-[48px] hover:border-brand-blue-100 rounded-[5px] pb-2 border border-brand-gray-light text-brand-gray-500 placeholder-transparent focus:outline-none focus:border-brand-blue-400 pt-5 pl-3 pr-7"
                        >
                          <option value="">-</option>
                          <option value="">Special Services 1</option>
                          <option value="">Special Services 2</option>
                        </select>
                        <label htmlFor="service-1" className="labels-select">
                          Special Services<sup>*</sup>
                        </label>
                      </div>
                      <p className="text-xs text-brand-red-100 pt-2 group-[.error]:block hidden">
                        Please select special services
                      </p>
                    </div>
                    <div className="group error  w-full ">
                      <div className="relative after:top-5 after:absolute after:right-3 group-[.error]:after:content-error">
                        <input
                          id="redress-1"
                          type="text"
                          value="--"
                          name="redress-1"
                          className="peer w-full text-sm group-[.error]:!border-brand-red bg-transparent h-[48px] hover:border-brand-blue-100 rounded-[5px] pb-2 border border-brand-gray-light text-brand-gray-500 placeholder-transparent focus:outline-none focus:border-brand-blue-400 pt-5 pl-3 pr-7"
                          placeholder="Redress"
                        />
                        <label htmlFor="redress-1" className="labels-info">
                          Redress
                        </label>
                      </div>
                      <p className="text-xs text-brand-red-100 pt-2 group-[.error]:block hidden">
                        Please enter redress number
                      </p>
                    </div>
                    <div className="group error  w-full ">
                      <div className="relative after:top-5 after:absolute after:right-3 group-[.error]:after:content-error">
                        <input
                          id="known-1"
                          type="text"
                          value="--"
                          name="known-1"
                          className="peer w-full text-sm group-[.error]:!border-brand-red bg-transparent h-[48px] hover:border-brand-blue-100 rounded-[5px] pb-2 border border-brand-gray-light text-brand-gray-500 placeholder-transparent focus:outline-none focus:border-brand-blue-400 pt-5 pl-3 pr-7"
                          placeholder="Known Traveler"
                        />
                        <label htmlFor="known-1" className="labels-info">
                          Known Traveler
                        </label>
                      </div>
                      <p className="text-xs text-brand-red-100 pt-2 group-[.error]:block hidden">
                        Please enter known traveler number
                      </p>
                    </div>
                    <div className="group error  w-full ">
                      <div className="relative after:top-5 after:absolute after:right-3 group-[.error]:after:content-error">
                        <input
                          id="frequent-1"
                          type="text"
                          value="--"
                          name="frequent-1"
                          className="peer w-full text-sm group-[.error]:!border-brand-red bg-transparent h-[48px] hover:border-brand-blue-100 rounded-[5px] pb-2 border border-brand-gray-light text-brand-gray-500 placeholder-transparent focus:outline-none focus:border-brand-blue-400 pt-5 pl-3 pr-7"
                          placeholder="Frequent Flyer #"
                        />
                        <label htmlFor="frequent-1" className="labels-info">
                          Frequent Flyer #
                        </label>
                      </div>
                      <p className="text-xs text-brand-red-100 pt-2 group-[.error]:block hidden">
                        Please enter frequent flyer number
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-2">
                  <p className="text-sm 2xl:text-base text-dark shrink-0 w-14 sm:mt-4">
                    Adult 2
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-2 w-full">
                    <div className="group w-full">
                      <div className="relative group-[.error]:before:content-none before:top-4 before:absolute before:right-3 before:content-arrow-down after:top-5 after:absolute after:right-3 group-[.error]:after:content-error">
                        <select
                          name="service-2"
                          id="service-2"
                          placeholder="Last name"
                          className="peer w-full appearance-none bg-none text-sm group-[.error]:!border-brand-red bg-transparent h-[48px] hover:border-brand-blue-100 rounded-[5px] pb-2 border border-brand-gray-light text-brand-gray-500 placeholder-transparent focus:outline-none focus:border-brand-blue-400 pt-5 pl-3 pr-7"
                        >
                          <option value="">Special Services 1</option>
                          <option value="">Special Services 2</option>
                        </select>
                        <label htmlFor="service-2" className="labels-select">
                          Special Services<sup>*</sup>
                        </label>
                      </div>
                      <p className="text-xs text-brand-red-100 pt-2 group-[.error]:block hidden">
                        Please select special services
                      </p>
                    </div>
                    <div className="group  w-full ">
                      <div className="relative after:top-5 after:absolute after:right-3 group-[.error]:after:content-error">
                        <input
                          id="redress-2"
                          type="text"
                          name="redress-2"
                          className="peer w-full text-sm group-[.error]:!border-brand-red bg-transparent h-[48px] hover:border-brand-blue-100 rounded-[5px] pb-2 border border-brand-gray-light text-brand-gray-500 placeholder-transparent focus:outline-none focus:border-brand-blue-400 pt-5 pl-3 pr-7"
                          placeholder="Redress"
                        />
                        <label htmlFor="redress-2" className="labels-info">
                          Redress
                        </label>
                      </div>
                      <p className="text-xs text-brand-red-100 pt-2 group-[.error]:block hidden">
                        Please enter redress number
                      </p>
                    </div>
                    <div className="group  w-full ">
                      <div className="relative after:top-5 after:absolute after:right-3 group-[.error]:after:content-error">
                        <input
                          id="known-2"
                          type="text"
                          name="known-2"
                          className="peer w-full text-sm group-[.error]:!border-brand-red bg-transparent h-[48px] hover:border-brand-blue-100 rounded-[5px] pb-2 border border-brand-gray-light text-brand-gray-500 placeholder-transparent focus:outline-none focus:border-brand-blue-400 pt-5 pl-3 pr-7"
                          placeholder="Known Traveler"
                        />
                        <label htmlFor="known-2" className="labels-info">
                          Known Traveler
                        </label>
                      </div>
                      <p className="text-xs text-brand-red-100 pt-2 group-[.error]:block hidden">
                        Please enter known traveler number
                      </p>
                    </div>
                    <div className="group  w-full ">
                      <div className="relative after:top-5 after:absolute after:right-3 group-[.error]:after:content-error">
                        <input
                          id="frequent-2"
                          type="text"
                          name="frequent-2"
                          className="peer w-full text-sm group-[.error]:!border-brand-red bg-transparent h-[48px] hover:border-brand-blue-100 rounded-[5px] pb-2 border border-brand-gray-light text-brand-gray-500 placeholder-transparent focus:outline-none focus:border-brand-blue-400 pt-5 pl-3 pr-7"
                          placeholder="Frequent Flyer #"
                        />
                        <label htmlFor="frequent-2" className="labels-info">
                          Frequent Flyer #
                        </label>
                      </div>
                      <p className="text-xs text-brand-red-100 pt-2 group-[.error]:block hidden">
                        Please enter frequent flyer number
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-2">
                  <p className="text-sm 2xl:text-base text-dark shrink-0 w-14 sm:mt-4">
                    Child 1
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-2 w-full">
                    <div className="group w-full">
                      <div className="relative group-[.error]:before:content-none before:top-4 before:absolute before:right-3 before:content-arrow-down after:top-5 after:absolute after:right-3 group-[.error]:after:content-error">
                        <select
                          name="service-3"
                          id="service-3"
                          placeholder="Last name"
                          className="peer w-full appearance-none bg-none text-sm group-[.error]:!border-brand-red bg-transparent h-[48px] hover:border-brand-blue-100 rounded-[5px] pb-2 border border-brand-gray-light text-brand-gray-500 placeholder-transparent focus:outline-none focus:border-brand-blue-400 pt-5 pl-3 pr-7"
                        >
                          <option value="">Special Services 1</option>
                          <option value="">Special Services 2</option>
                        </select>
                        <label htmlFor="service-3" className="labels-select">
                          Special Services<sup>*</sup>
                        </label>
                      </div>
                      <p className="text-xs text-brand-red-100 pt-2 group-[.error]:block hidden">
                        Please select special services
                      </p>
                    </div>
                    <div className="group  w-full ">
                      <div className="relative after:top-5 after:absolute after:right-3 group-[.error]:after:content-error">
                        <input
                          id="redress-3"
                          type="text"
                          name="redress-3"
                          className="peer w-full text-sm group-[.error]:!border-brand-red bg-transparent h-[48px] hover:border-brand-blue-100 rounded-[5px] pb-2 border border-brand-gray-light text-brand-gray-500 placeholder-transparent focus:outline-none focus:border-brand-blue-400 pt-5 pl-3 pr-7"
                          placeholder="Redress"
                        />
                        <label htmlFor="redress-3" className="labels-info">
                          Redress
                        </label>
                      </div>
                      <p className="text-xs text-brand-red-100 pt-2 group-[.error]:block hidden">
                        Please enter redress number
                      </p>
                    </div>
                    <div className="group  w-full ">
                      <div className="relative after:top-5 after:absolute after:right-3 group-[.error]:after:content-error">
                        <input
                          id="known-3"
                          type="text"
                          name="known-3"
                          className="peer w-full text-sm group-[.error]:!border-brand-red bg-transparent h-[48px] hover:border-brand-blue-100 rounded-[5px] pb-2 border border-brand-gray-light text-brand-gray-500 placeholder-transparent focus:outline-none focus:border-brand-blue-400 pt-5 pl-3 pr-7"
                          placeholder="Known Traveler"
                        />
                        <label htmlFor="known-3" className="labels-info">
                          Known Traveler
                        </label>
                      </div>
                      <p className="text-xs text-brand-red-100 pt-2 group-[.error]:block hidden">
                        Please enter known traveler number
                      </p>
                    </div>
                    <div className="group  w-full ">
                      <div className="relative after:top-5 after:absolute after:right-3 group-[.error]:after:content-error">
                        <input
                          id="frequent-4"
                          type="text"
                          name="frequent-4"
                          className="peer w-full text-sm group-[.error]:!border-brand-red bg-transparent h-[48px] hover:border-brand-blue-100 rounded-[5px] pb-2 border border-brand-gray-light text-brand-gray-500 placeholder-transparent focus:outline-none focus:border-brand-blue-400 pt-5 pl-3 pr-7"
                          placeholder="Frequent Flyer #"
                        />
                        <label htmlFor="frequent-4" className="labels-info">
                          Frequent Flyer #
                        </label>
                      </div>
                      <p className="text-xs text-brand-red-100 pt-2 group-[.error]:block hidden">
                        Please enter frequent flyer number
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-2">
          <div className="flex justify-between items-center cursor-pointer">
            <h2 className="text-dark font-medium text-xl md:text-2xl">
              Frequent Flyer & Optional Request
            </h2>
            <button
              type="button"
              className="w-6 sm:w-12 h-6 sm:h-12 flex justify-center items-center"
            >
              <svg
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
          <div className="space-y-6">
            <div className="flex gap-2">
              <div className=" rounded bg-brand-gray-100 h-6 shadow-inner w-16 shrink-0 animate-pulse"></div>
              <div className=" rounded bg-brand-gray-100 h-6 shadow-inner w-full animate-pulse"></div>
              <div className=" rounded bg-brand-gray-100 h-6 shadow-inner w-full animate-pulse"></div>
              <div className=" rounded bg-brand-gray-100 h-6 shadow-inner w-full animate-pulse"></div>
              <div className=" rounded bg-brand-gray-100 h-6 shadow-inner w-full animate-pulse"></div>
              <div className=" rounded bg-brand-gray-100 h-6 shadow-inner w-24 shrink-0 animate-pulse"></div>
              <div className=" rounded bg-brand-gray-100 h-6 shadow-inner w-10 shrink-0 animate-pulse"></div>
            </div>
            <div className="flex gap-2">
              <div className=" rounded bg-brand-gray-100 h-6 shadow-inner w-16 shrink-0 animate-pulse"></div>
              <div className=" rounded bg-brand-gray-100 h-6 shadow-inner w-full animate-pulse"></div>
              <div className=" rounded bg-brand-gray-100 h-6 shadow-inner w-full animate-pulse"></div>
              <div className=" rounded bg-brand-gray-100 h-6 shadow-inner w-full animate-pulse"></div>
              <div className=" rounded bg-brand-gray-100 h-6 shadow-inner w-full animate-pulse"></div>
              <div className=" rounded bg-brand-gray-100 h-6 shadow-inner w-24 shrink-0 animate-pulse"></div>
              <div className=" rounded bg-brand-gray-100 h-6 shadow-inner w-10 shrink-0 animate-pulse"></div>
            </div>
            <div className="flex gap-2">
              <div className=" rounded bg-brand-gray-100 h-6 shadow-inner w-16 shrink-0 animate-pulse"></div>
              <div className=" rounded bg-brand-gray-100 h-6 shadow-inner w-full animate-pulse"></div>
              <div className=" rounded bg-brand-gray-100 h-6 shadow-inner w-full animate-pulse"></div>
              <div className=" rounded bg-brand-gray-100 h-6 shadow-inner w-full animate-pulse"></div>
              <div className=" rounded bg-brand-gray-100 h-6 shadow-inner w-full animate-pulse"></div>
              <div className=" rounded bg-brand-gray-100 h-6 shadow-inner w-24 shrink-0 animate-pulse"></div>
              <div className=" rounded bg-brand-gray-100 h-6 shadow-inner w-10 shrink-0 animate-pulse"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
