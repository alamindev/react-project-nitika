import React, { useRef, useState } from "react";
import arrowDown from "../../../../assets/images/checkout/arrow-sm-down.svg";
import plane from "../../../../assets/images/checkout/plane-two.svg";
import logo from "../../../../assets/images/checkout/spirit-airlines.png";
import clock from "../../../../assets/images/checkout/time-clock.svg";
import ArrowRight from "../../../Svg/ArrowRight";
export default function Info() {
  const contentRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
    setContentHeight(isExpanded ? 0 : contentRef.current.scrollHeight);
  };
  const contentTwoRef = useRef(null);
  const [isExpandedTwo, setIsExpandedTwo] = useState(false);
  const [contentTwoHeight, setContentTwoHeight] = useState(0);
  const toggleTwoAccordion = () => {
    setIsExpandedTwo(!isExpandedTwo);
    setContentTwoHeight(isExpandedTwo ? 0 : contentTwoRef.current.scrollHeight);
  };
  return (
    <div className=" lg:rounded-xl bg-white px-4 py-6 xl:p-6 space-y-6">
      <div className="flex gap-3">
        <figure className="shrink-0">
          <img src={plane} alt="plane" />
        </figure>
        <h2 className="text-xl 2xl:text-2xl font-medium text-dark 2xl:pr-10">
          Roundtrip: New York City (JFK) - New Delhi (IGI)
        </h2>
      </div>
      <div className="">
        <div className="flex gap-5 justify-between items-start">
          <div className="space-y-1 lg:w-[270px]">
            <div className="flex gap-1.5 items-center ">
              <h3 className="text-base xl:text-lg text-brand-blue-100 font-medium shrink-0">
                New York City (JFK)
              </h3>
              <ArrowRight classes="stroke-brand-blue-100" />
              <h3 className="text-base xl:text-lg text-brand-blue-100 font-medium line-clamp-1">
                New Delhi (IGI)
              </h3>
            </div>
            <ul className="divide-x divide-brand-gray-light flex items-center">
              <li className="px-2 first:pl-0 last:pr-0  text-sm sm:text-base text-dark">
                Feb. 15 (Wed)
              </li>
              <li className="px-2 first:pl-0 last:pr-0 text-sm sm:text-base text-dark">
                1 Stop
              </li>
              <li className="px-2 first:pl-0 last:pr-0 text-sm sm:text-base text-dark">
                17h 10m
              </li>
            </ul>
          </div>
          <button
            onClick={toggleAccordion}
            type="button"
            className="w-6 h-6 flex justify-center items-center"
          >
            <img
              src={arrowDown}
              alt="arrow-down"
              className={`transition-all shrink-0 ${
                isExpanded ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
        <div
          style={{ maxHeight: contentHeight }}
          className="max-h-0 overflow-hidden transition-all w-full"
          ref={contentRef}
        >
          <div className="pt-4">
            <div className="flex items-center gap-5 justify-between w-full ">
              <div className="flex gap-2 items-start">
                <figure className="shrink-0 mt-1">
                  <img src={logo} alt="logo" />
                </figure>
                <div className="space-y-1">
                  <h3 className="text-base xl:text-lg font-medium text-brand-blue-100">
                    Spirit Airlines
                  </h3>
                  <p className="text-sm xl:text-base text-dark">Main Cabin</p>
                  <p className="text-sm xl:text-base text-dark">SA123</p>
                </div>
              </div>
              <div className="flex gap-1 items-center">
                <figure className="shrink-0">
                  <img src={clock} alt="clock" />
                </figure>
                <time dateTime="" className="text-dark text-sm xl:text-base ">
                  7h 30m
                </time>
              </div>
            </div>
            <div className="pl-8 pt-3 space-y-3">
              <div className="flex gap-2 items-start ">
                <time
                  dateTime="9:30 pm"
                  className="font-medium shrink-0 text-base md:text-lg lg:text-base text-brand-blue-100"
                >
                  9:30 pm
                </time>
                <div className="">
                  <h4 className="text-base md:text-lg lg:text-base text-brand-blue-100 font-medium line-clamp-1">
                    New York City
                  </h4>
                  <p className="text-sm md:text-base lg:text-sm font-medium text-dark line-clamp-1">
                    John F. Kennedy International Airport
                  </p>
                </div>
              </div>
              <div className="flex gap-2 items-start ">
                <time
                  dateTime="10:30 am"
                  className="font-medium shrink-0 text-base md:text-lg lg:text-base text-brand-blue-100"
                >
                  10:30 am
                </time>
                <div className="">
                  <h4 className="text-base md:text-lg lg:text-base text-brand-blue-100 font-medium line-clamp-1">
                    Amsterdam
                  </h4>
                  <p className="text-sm md:text-base lg:text-sm font-medium text-dark line-clamp-1">
                    Amsterdam Airport Schiphol
                  </p>
                </div>
              </div>
            </div>
            <div className="border-y border-brand-gray-light py-2 mt-3">
              <p className="text-center text-sm md:text-base lg:text-sm">
                1h 55m layover in Amsterdam
              </p>
            </div>
            <div className="pl-8 pt-3 space-y-3">
              <div className="flex gap-2 items-start ">
                <time
                  dateTime="10:30 am"
                  className="font-medium shrink-0 text-base md:text-lg lg:text-base text-brand-blue-100"
                >
                  10:30 am
                </time>
                <div className="">
                  <h4 className="text-base md:text-lg lg:text-base text-brand-blue-100 font-medium line-clamp-1">
                    Amsterdam
                  </h4>
                  <p className="text-sm md:text-base lg:text-sm font-medium text-dark line-clamp-1">
                    Amsterdam Airport Schiphol
                  </p>
                </div>
              </div>
              <div className="flex gap-2 items-start ">
                <time
                  dateTime="10:30 am"
                  className="font-medium shrink-0 text-base md:text-lg lg:text-base text-brand-blue-100"
                >
                  10:30 am
                </time>
                <div className="">
                  <h4 className="text-base md:text-lg lg:text-base text-brand-blue-100 font-medium line-clamp-1">
                    New Delhi
                  </h4>
                  <p className="text-sm md:text-base lg:text-sm font-medium text-dark line-clamp-1">
                    Indira Gandhi International Airport
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex gap-5 justify-between items-start">
          <div className="space-y-1 lg:w-[270px]">
            <div className="flex gap-1.5 items-center ">
              <h3 className="text-base xl:text-lg text-brand-blue-100 font-medium shrink-0">
                New Delhi (IGI)
              </h3>
              <ArrowRight classes="stroke-brand-blue-100" />
              <h3 className="text-base xl:text-lg text-brand-blue-100 font-medium line-clamp-1">
                New York City (JFK)
              </h3>
            </div>
            <ul className="divide-x divide-brand-gray-light flex items-center">
              <li className="px-2 first:pl-0 last:pr-0  text-sm sm:text-base text-dark">
                Mar. 01 (Wed)
              </li>
              <li className="px-2 first:pl-0 last:pr-0 text-sm sm:text-base text-dark">
                1 Stop
              </li>
              <li className="px-2 first:pl-0 last:pr-0 text-sm sm:text-base text-dark">
                18h 30m
              </li>
            </ul>
          </div>
          <button
            onClick={toggleTwoAccordion}
            type="button"
            className="w-6 h-6 flex justify-center items-center"
          >
            <img
              src={arrowDown}
              alt="arrow-down"
              className={`transition-all shrink-0 ${
                isExpandedTwo ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
        <div
          style={{ maxHeight: contentTwoHeight }}
          className="max-h-0 overflow-hidden transition-all w-full"
          ref={contentTwoRef}
        >
          <div className="pt-4">
            <div className="flex items-center gap-5 justify-between w-full ">
              <div className="flex gap-2 items-start">
                <figure className="shrink-0 mt-1">
                  <img src={logo} alt="logo" />
                </figure>
                <div className="space-y-1">
                  <h3 className="text-base xl:text-lg font-medium text-brand-blue-100">
                    Spirit Airlines
                  </h3>
                  <p className="text-sm xl:text-base text-dark">Main Cabin</p>
                  <p className="text-sm xl:text-base text-dark">SA123</p>
                </div>
              </div>
              <div className="flex gap-1 items-center">
                <figure className="shrink-0">
                  <img src={clock} alt="clock" />
                </figure>
                <time dateTime="" className="text-dark text-sm xl:text-base ">
                  7h 30m
                </time>
              </div>
            </div>
            <div className="pl-8 pt-3 space-y-3">
              <div className="flex gap-2 items-start ">
                <time
                  dateTime="9:30 pm"
                  className="font-medium shrink-0 text-base md:text-lg lg:text-base text-brand-blue-100"
                >
                  9:30 pm
                </time>
                <div className="">
                  <h4 className="text-base md:text-lg lg:text-base text-brand-blue-100 font-medium line-clamp-1">
                    New York City
                  </h4>
                  <p className="text-sm md:text-base lg:text-sm font-medium text-dark line-clamp-1">
                    John F. Kennedy International Airport
                  </p>
                </div>
              </div>
              <div className="flex gap-2 items-start ">
                <time
                  dateTime="10:30 am"
                  className="font-medium shrink-0 text-base md:text-lg lg:text-base text-brand-blue-100"
                >
                  10:30 am
                </time>
                <div className="">
                  <h4 className="text-base md:text-lg lg:text-base text-brand-blue-100 font-medium line-clamp-1">
                    Amsterdam
                  </h4>
                  <p className="text-sm md:text-base lg:text-sm font-medium text-dark line-clamp-1">
                    Amsterdam Airport Schiphol
                  </p>
                </div>
              </div>
            </div>
            <div className="border-y border-brand-gray-light py-2 mt-3">
              <p className="text-center text-sm md:text-base lg:text-sm">
                1h 55m layover in Amsterdam
              </p>
            </div>
            <div className="pl-8 pt-3 space-y-3">
              <div className="flex gap-2 items-start ">
                <time
                  dateTime="10:30 am"
                  className="font-medium shrink-0 text-base md:text-lg lg:text-base text-brand-blue-100"
                >
                  10:30 am
                </time>
                <div className="">
                  <h4 className="text-base md:text-lg lg:text-base text-brand-blue-100 font-medium line-clamp-1">
                    Amsterdam
                  </h4>
                  <p className="text-sm md:text-base lg:text-sm font-medium text-dark line-clamp-1">
                    Amsterdam Airport Schiphol
                  </p>
                </div>
              </div>
              <div className="flex gap-2 items-start ">
                <time
                  dateTime="10:30 am"
                  className="font-medium shrink-0 text-base md:text-lg lg:text-base text-brand-blue-100"
                >
                  10:30 am
                </time>
                <div className="">
                  <h4 className="text-base md:text-lg lg:text-base text-brand-blue-100 font-medium line-clamp-1">
                    New Delhi
                  </h4>
                  <p className="text-sm md:text-base lg:text-sm font-medium text-dark line-clamp-1">
                    Indira Gandhi International Airport
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
