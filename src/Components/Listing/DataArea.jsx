import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import adsThree from "../../assets/images/listing/ads-3.png";
import adsFour from "../../assets/images/listing/ads-4.png";
import iconOne from "../../assets/images/listing/icon-1.svg";
import iconTwo from "../../assets/images/listing/icon-2.svg";
import iconThree from "../../assets/images/listing/icon-3.svg";
import iconFour from "../../assets/images/listing/icon-4.svg";
import iconFive from "../../assets/images/listing/icon-5.svg";
import {
  default as icon,
  default as iconSix,
} from "../../assets/images/listing/icon-6.svg";
import listImgOne from "../../assets/images/listing/list-img-1.png";
import listImgTwo from "../../assets/images/listing/list-img-2.png";
import Love from "../Svg/Love";
import Details from "./Details";
import Fees from "./Fees";
export default function DataArea() {
  const [isVisible, setIsVisible] = useState(false);
  const handleButtonClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="space-y-8 mt-8">
      <div className="relative bg-white rounded-xl overflow-hidden">
        <div className="relative">
          <div className="w-[60px] h-[60px] hidden md:block rounded-full bg-brand-gray-600 top-1/2 -translate-y-1/2 -left-8 absolute"></div>
          <div className="w-[60px] h-[60px] hidden md:block rounded-full bg-brand-gray-600 top-1/2 -translate-y-1/2 -right-8 absolute"></div>
          <div className="flex md:divide-x max-[400px]:gap-2 gap-8 md:gap-0 px-4 md:px-6 xl:px-14 ">
            <div className="md:pr-6 xl:pr-10 xl:pl-5 lg:relative pt-20 w-full">
              <div className="uppercase text-brand-blue-100 bg-brand-teal px-6 py-3 rounded-b-xl absolute top-0">
                cheapest
              </div>
              <button type="button" className="absolute top-5 right-5 group">
                <Love color="stroke-brand-gray-800 fill-none group-hover:fill-brand-red group-hover:stroke-brand-red" />
              </button>
              <ul className="relative grid max-[400px]:gap-1 gap-5">
                <li className="flex flex-wrap sm:flex-nowrap gap-y-2 gap-x-7 sm:justify-between">
                  <div className="custom-checkbox flex  gap-4 items-center w-full sm:w-auto">
                    <input
                      type="checkbox"
                      id="aa"
                      name="list"
                      className="hidden"
                    />
                    <label
                      htmlFor="aa"
                      className="relative md:block hidden"
                    ></label>
                    <div className="flex items-center gap-4 sm:gap-3">
                      <img
                        className="w-12 h-12 md:w-14 md:h-14"
                        src={listImgOne}
                        alt="list-img-one"
                      />
                      <div className="space-y-1">
                        <h3 className="text-base xl:text-xl font-bold text-brand-blue-100">
                          9:30 pm - 1:10 am+2
                        </h3>
                        <div className="relative group">
                          <p className="uppercase text-brand-dark text-opacity-75 ">
                            SPIRIT
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1 pl-16 sm:pl-0">
                    <h3 className="text-base xl:text-xl font-bold text-brand-blue-100">
                      1 stop
                    </h3>
                    <ReactTooltip
                      anchorId="app-title"
                      place="top"
                      content="4h 20m layover, Amsterdam Airport Schiphol"
                    />
                    <p
                      id="app-title"
                      className="uppercase text-brand-dark text-opacity-75 "
                    >
                      AMS
                    </p>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base xl:text-xl font-bold text-brand-blue-100">
                      17h 10m
                    </h3>
                    <p className="uppercase text-brand-dark text-opacity-75 ">
                      JFK - DEL
                    </p>
                  </div>
                </li>
                <li className="flex flex-wrap sm:flex-nowrap gap-y-2 gap-x-7 sm:justify-between">
                  <div className="custom-checkbox flex  gap-4 items-center w-full sm:w-auto">
                    <input
                      type="checkbox"
                      id="aa"
                      name="list"
                      className="hidden"
                    />
                    <label
                      htmlFor="aa"
                      className="relative md:block hidden"
                    ></label>
                    <div className="flex items-center gap-4 sm:gap-3">
                      <img
                        className="w-12 h-12 md:w-14 md:h-14"
                        src={listImgOne}
                        alt="list-img-one"
                      />
                      <div className="space-y-1">
                        <h3 className="text-base xl:text-xl font-bold text-brand-blue-100">
                          9:30 pm - 1:10 am+2
                        </h3>

                        <p className="uppercase text-brand-dark text-opacity-75 ">
                          AMS
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1 pl-16 sm:pl-0">
                    <h3 className="text-base xl:text-xl font-bold text-brand-blue-100">
                      1 stop
                    </h3>
                    <ReactTooltip
                      anchorId="app-title2"
                      place="top"
                      content="4h 20m layover, Amsterdam Airport Schiphol"
                    />
                    <p
                      id="app-title2"
                      className="uppercase text-brand-dark text-opacity-75 "
                    >
                      AMS
                    </p>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base xl:text-xl font-bold text-brand-blue-100">
                      17h 10m
                    </h3>
                    <p className="uppercase text-brand-dark text-opacity-75 ">
                      JFK - DEL
                    </p>
                  </div>
                </li>
              </ul>
              <div className="hidden md:flex justify-between items-center py-5">
                <button type="button" className="underline text-brand-blue-100">
                  Show flight details
                </button>
                <p className="text-sm sm:text-base text-brand-dark text-opacity-75">
                  Operated by Virgin Atlantic
                </p>
              </div>
            </div>
            <div className="md:pl-4 xl:pl-8 xl:pr-4 py-8 space-y-10 flex justify-center items-center md:items-start max-[400px]:w-[120px] w-[170px] sm:w-[260px] md:flex-col md:justify-between">
              <div className="group relative hidden md:block">
                <ul className="flex flex-wrap gap-2">
                  <li className="px-1.5 sm:px-2 rounded-md py-0.5 sm:py-1 flex gap-1 sm:gap-2 text-[10px] sm:text-xs font-medium text-brand-blue-100 border border-brand-gray-800">
                    <img src={iconOne} alt="iconone" />
                    <span>2</span>
                  </li>
                  <li className="px-1.5 sm:px-2 rounded-md py-0.5 sm:py-1 flex gap-1 sm:gap-2 text-[10px] sm:text-xs font-medium text-brand-blue-100 border border-brand-gray-800">
                    <img src={iconTwo} alt="iconTwo" />
                    <span>3</span>
                  </li>
                </ul>
                <div className="group-hover:translate-y-0  translate-y-10 transition-all group-hover:opacity-100 opacity-0 invisible group-hover:visible absolute right-full bg-white z-30 w-[250px] rounded-lg p-4 shadow-4xl">
                  <h3 className="text-base font-medium text-brand-dark pb-1 ">
                    Price Breakdown
                  </h3>
                  <ul className="grid gap-1.5 mt-2">
                    <li className="flex gap-2 items-center text-sm text-brand-gray">
                      <img src={icon} alt="icon" />
                      <span>Ticket Price</span>
                    </li>
                    <li className="flex gap-2 items-center text-sm text-brand-gray">
                      <img src={icon} alt="icon" />
                      <span>Ticket Price</span>
                    </li>
                    <li className="flex gap-2 items-center text-sm text-brand-gray">
                      <img src={icon} alt="icon" />
                      <span>Ticket Price</span>
                    </li>
                    <li className="flex gap-2 items-center text-sm text-brand-gray">
                      <img src={icon} alt="icon" />
                      <span>Ticket Price</span>
                    </li>
                    <li className="flex gap-2 items-center text-sm text-brand-gray">
                      <img src={icon} alt="icon" />
                      <span>Ticket Price</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="space-y-3">
                <h2 className="text-brand-blue-100 text-xl md:text-[32px] leading-none font-bold">
                  $897
                </h2>
                <p className="text-12 md:text-sm sm:text-base text-brand-dark">
                  Price per person (incl. taxes & fees)
                </p>
                <a
                  href="#"
                  className="md:inline-block hidden px-7 py-2.5 bg-brand-red rounded-full text-white hover:bg-opacity-90 transition-all  "
                >
                  Select Deal
                </a>
              </div>
            </div>
          </div>
          <div className="md:hidden flex px-4 py-3 border-t justify-between items-center mt-4">
            <Link
              to={`/listing/details`}
              className="underline text-brand-blue-100 text-sm"
            >
              Show flight details
            </Link>
            <p className="text-sm   sm:text-base text-brand-dark text-opacity-75">
              Operated by Virgin Atlantic
            </p>
          </div>
        </div>
        <div className="hidden">
          <Details />
        </div>
      </div>
      <div className="relative bg-white rounded-xl overflow-hidden">
        <div className="relative">
          <div className="w-[60px] h-[60px] hidden md:block rounded-full bg-brand-gray-600 top-1/2 -translate-y-1/2 -left-8 absolute"></div>
          <div className="w-[60px] h-[60px] hidden md:block rounded-full bg-brand-gray-600 top-1/2 -translate-y-1/2 -right-8 absolute"></div>
          <div className="flex md:divide-x max-[400px]:gap-2 gap-8 md:gap-0 px-4 md:px-6 xl:px-14 ">
            <div className="md:pr-6 xl:pr-10 xl:pl-5 lg:relative pt-20 w-full">
              <div className="uppercase text-brand-blue-100  bg-[#CCFEFF] px-6 py-3 rounded-b-xl absolute top-0">
                Best
              </div>
              <button type="button" className="absolute top-5 right-5 group">
                <Love color="stroke-brand-gray-800 fill-none group-hover:fill-brand-red group-hover:stroke-brand-red" />
              </button>
              <ul className="relative grid max-[400px]:gap-1 gap-5">
                <li className="flex flex-wrap sm:flex-nowrap gap-y-2 gap-x-7 sm:justify-between">
                  <div className="custom-checkbox flex  gap-4 items-center w-full sm:w-auto">
                    <input
                      type="checkbox"
                      id="aa"
                      name="list"
                      className="hidden"
                    />
                    <label
                      htmlFor="aa"
                      className="relative md:block hidden"
                    ></label>
                    <div className="flex items-center gap-4 sm:gap-3">
                      <img
                        className="w-12 h-12 md:w-14 md:h-14"
                        src={listImgOne}
                        alt="list-img-one"
                      />
                      <div className="space-y-1">
                        <h3 className="text-base xl:text-xl font-bold text-brand-blue-100">
                          9:30 pm - 1:10 am+2
                        </h3>

                        <p className="uppercase text-brand-dark text-opacity-75 ">
                          AMS
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1 pl-16 sm:pl-0">
                    <h3 className="text-base xl:text-xl font-bold text-brand-blue-100">
                      1 stop
                    </h3>
                    <ReactTooltip
                      anchorId="app-title3"
                      place="top"
                      content="4h 20m layover, Amsterdam Airport Schiphol"
                    />
                    <p
                      id="app-title3"
                      className="uppercase text-brand-dark text-opacity-75 "
                    >
                      AMS
                    </p>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base xl:text-xl font-bold text-brand-blue-100">
                      17h 10m
                    </h3>
                    <p className="uppercase text-brand-dark text-opacity-75 ">
                      JFK - DEL
                    </p>
                  </div>
                </li>
                <li className="flex flex-wrap sm:flex-nowrap gap-y-2 gap-x-7 sm:justify-between">
                  <div className="custom-checkbox flex  gap-4 items-center w-full sm:w-auto">
                    <input
                      type="checkbox"
                      id="aa"
                      name="list"
                      className="hidden"
                    />
                    <label
                      htmlFor="aa"
                      className="relative md:block hidden"
                    ></label>
                    <div className="flex items-center gap-4 sm:gap-3">
                      <img
                        className="w-12 h-12 md:w-14 md:h-14"
                        src={listImgOne}
                        alt="list-img-one"
                      />
                      <div className="space-y-1">
                        <h3 className="text-base xl:text-xl font-bold text-brand-blue-100">
                          9:30 pm - 1:10 am+2
                        </h3>

                        <p className="uppercase text-brand-dark text-opacity-75 ">
                          AMS
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1 pl-16 sm:pl-0">
                    <h3 className="text-base xl:text-xl font-bold text-brand-blue-100">
                      1 stop
                    </h3>
                    <ReactTooltip
                      anchorId="app-title4"
                      place="top"
                      content="4h 20m layover, Amsterdam Airport Schiphol"
                    />
                    <p
                      id="app-title4"
                      className="uppercase text-brand-dark text-opacity-75 "
                    >
                      AMS
                    </p>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base xl:text-xl font-bold text-brand-blue-100">
                      17h 10m
                    </h3>
                    <p className="uppercase text-brand-dark text-opacity-75 ">
                      JFK - DEL
                    </p>
                  </div>
                </li>
              </ul>
              <div className="hidden md:flex justify-between items-center py-5">
                <button type="button" className="underline text-brand-blue-100">
                  Show flight details
                </button>
                <p className="text-sm sm:text-base text-brand-dark text-opacity-75">
                  Operated by Virgin Atlantic
                </p>
              </div>
            </div>
            <div className="md:pl-4 xl:pl-8 xl:pr-4 py-8 space-y-10 flex justify-center items-center md:items-start max-[400px]:w-[120px] w-[170px] sm:w-[260px] md:flex-col md:justify-between">
              <div className="group relative hidden md:block">
                <ul className="flex flex-wrap gap-2">
                  <li className="px-1.5 sm:px-2 rounded-md py-0.5 sm:py-1 flex gap-1 sm:gap-2 text-[10px] sm:text-xs font-medium text-brand-blue-100 border border-brand-gray-800">
                    <img src={iconOne} alt="iconone" />
                    <span>2</span>
                  </li>
                  <li className="px-1.5 sm:px-2 rounded-md py-0.5 sm:py-1 flex gap-1 sm:gap-2 text-[10px] sm:text-xs font-medium text-brand-blue-100 border border-brand-gray-800">
                    <img src={iconTwo} alt="iconTwo" />
                    <span>3</span>
                  </li>
                </ul>
                <div className="group-hover:translate-y-0  translate-y-10 transition-all group-hover:opacity-100 opacity-0 invisible group-hover:visible absolute right-full bg-white z-30 w-[250px] rounded-lg p-4 shadow-4xl">
                  <h3 className="text-base font-medium text-brand-dark pb-1 ">
                    Price Breakdown
                  </h3>
                  <ul className="grid gap-1.5 mt-2">
                    <li className="flex gap-2 items-center text-sm text-brand-gray">
                      <img src={icon} alt="icon" />
                      <span>Ticket Price</span>
                    </li>
                    <li className="flex gap-2 items-center text-sm text-brand-gray">
                      <img src={icon} alt="icon" />
                      <span>Ticket Price</span>
                    </li>
                    <li className="flex gap-2 items-center text-sm text-brand-gray">
                      <img src={icon} alt="icon" />
                      <span>Ticket Price</span>
                    </li>
                    <li className="flex gap-2 items-center text-sm text-brand-gray">
                      <img src={icon} alt="icon" />
                      <span>Ticket Price</span>
                    </li>
                    <li className="flex gap-2 items-center text-sm text-brand-gray">
                      <img src={icon} alt="icon" />
                      <span>Ticket Price</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="space-y-3">
                <h2 className="text-brand-blue-100 text-xl md:text-[32px] leading-none font-bold">
                  $897
                </h2>
                <p className="text-12 md:text-sm sm:text-base text-brand-dark">
                  Price per person (incl. taxes & fees)
                </p>
                <a
                  href="#"
                  className="md:inline-block hidden px-7 py-2.5 bg-brand-red rounded-full text-white hover:bg-opacity-90 transition-all  "
                >
                  Select Deal
                </a>
              </div>
            </div>
          </div>
          <div className="md:hidden flex px-4 py-3 border-t justify-between items-center mt-4">
            <Link
              to={`/listing/details`}
              className="underline text-brand-blue-100 text-sm"
            >
              Show flight details
            </Link>
            <p className="text-sm   sm:text-base text-brand-dark text-opacity-75">
              Operated by Virgin Atlantic
            </p>
          </div>
        </div>
        <div className="hidden">
          <Details />
        </div>
      </div>
      <div className="">
        <figure>
          <img src={adsFour} alt="ads" />
        </figure>
      </div>
      <div className="relative bg-white rounded-xl overflow-hidden">
        <div className="relative">
          <div className="w-[60px] h-[60px] hidden md:block rounded-full bg-brand-gray-600 top-1/2 -translate-y-1/2 -left-8 absolute"></div>
          <div className="w-[60px] h-[60px] hidden md:block rounded-full bg-brand-gray-600 top-1/2 -translate-y-1/2 -right-8 absolute"></div>
          <div className="flex md:divide-x max-[400px]:gap-2 gap-8 md:gap-0 px-4 md:px-6 xl:px-14 ">
            <div className="md:pr-6 xl:pr-10 xl:pl-5 lg:relative pt-20 w-full">
              <div className="uppercase text-brand-blue-100 bg-[#FFE2CC]  px-6 py-3 rounded-b-xl absolute top-0">
                Quickest
              </div>
              <button type="button" className="absolute top-5 right-5 group">
                <Love color="stroke-brand-gray-800 fill-none group-hover:fill-brand-red group-hover:stroke-brand-red" />
              </button>
              <ul className="relative grid max-[400px]:gap-1 gap-5">
                <li className="flex flex-wrap sm:flex-nowrap gap-y-2 gap-x-7 sm:justify-between">
                  <div className="custom-checkbox flex  gap-4 items-center w-full sm:w-auto">
                    <input
                      type="checkbox"
                      id="aa"
                      name="list"
                      className="hidden"
                    />
                    <label
                      htmlFor="aa"
                      className="relative md:block hidden"
                    ></label>
                    <div className="flex items-center gap-4 sm:gap-3">
                      <img
                        className="w-12 h-12 md:w-14 md:h-14"
                        src={listImgTwo}
                        alt="list-img-one"
                      />
                      <div className="space-y-1">
                        <h3 className="text-base xl:text-xl font-bold text-brand-blue-100">
                          9:30 pm - 1:10 am+2
                        </h3>

                        <p className="uppercase text-brand-dark text-opacity-75 ">
                          AMS
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1 pl-16 sm:pl-0">
                    <h3 className="text-base xl:text-xl font-bold text-brand-blue-100">
                      1 stop
                    </h3>
                    <ReactTooltip
                      anchorId="app-title5"
                      place="top"
                      content="4h 20m layover, Amsterdam Airport Schiphol"
                    />
                    <p
                      id="app-title5"
                      className="uppercase text-brand-dark text-opacity-75 "
                    >
                      AMS
                    </p>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base xl:text-xl font-bold text-brand-blue-100">
                      17h 10m
                    </h3>
                    <p className="uppercase text-brand-dark text-opacity-75 ">
                      JFK - DEL
                    </p>
                  </div>
                </li>
                <li className="flex flex-wrap sm:flex-nowrap gap-y-2 gap-x-7 sm:justify-between">
                  <div className="custom-checkbox flex  gap-4 items-center w-full sm:w-auto">
                    <input
                      type="checkbox"
                      id="aa"
                      name="list"
                      className="hidden"
                    />
                    <label
                      htmlFor="aa"
                      className="relative md:block hidden"
                    ></label>
                    <div className="flex items-center gap-4 sm:gap-3">
                      <img
                        className="w-12 h-12 md:w-14 md:h-14"
                        src={listImgTwo}
                        alt="list-img-one"
                      />
                      <div className="space-y-1">
                        <h3 className="text-base xl:text-xl font-bold text-brand-blue-100">
                          9:30 pm - 1:10 am+2
                        </h3>

                        <p className="uppercase text-brand-dark text-opacity-75 ">
                          AMS
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1 pl-16 sm:pl-0">
                    <h3 className="text-base xl:text-xl font-bold text-brand-blue-100">
                      1 stop
                    </h3>
                    <ReactTooltip
                      anchorId="app-title6"
                      place="top"
                      content="4h 20m layover, Amsterdam Airport Schiphol"
                    />
                    <p
                      id="app-title6"
                      className="uppercase text-brand-dark text-opacity-75 "
                    >
                      AMS
                    </p>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base xl:text-xl font-bold text-brand-blue-100">
                      17h 10m
                    </h3>
                    <p className="uppercase text-brand-dark text-opacity-75 ">
                      JFK - DEL
                    </p>
                  </div>
                </li>
              </ul>
              <div className="hidden md:flex justify-between items-center py-5">
                <button type="button" className="underline text-brand-blue-100">
                  Show flight details
                </button>
                <p className="text-sm sm:text-base text-brand-dark text-opacity-75">
                  Operated by Virgin Atlantic
                </p>
              </div>
            </div>
            <div className="md:pl-4 xl:pl-8 xl:pr-4 py-8 space-y-10 flex justify-center items-center md:items-start max-[400px]:w-[120px] w-[170px] sm:w-[260px] md:flex-col md:justify-between">
              <div className="group relative hidden md:block">
                <ul className="flex flex-wrap gap-2">
                  <li className="px-1.5 sm:px-2 rounded-md py-0.5 sm:py-1 flex gap-1 sm:gap-2 text-[10px] sm:text-xs font-medium text-brand-blue-100 border border-brand-gray-800">
                    <img src={iconOne} alt="iconone" />
                    <span>2</span>
                  </li>
                  <li className="px-1.5 sm:px-2 rounded-md py-0.5 sm:py-1 flex gap-1 sm:gap-2 text-[10px] sm:text-xs font-medium text-brand-blue-100 border border-brand-gray-800">
                    <img src={iconTwo} alt="iconTwo" />
                    <span>3</span>
                  </li>
                </ul>
                <div className="group-hover:translate-y-0  translate-y-10 transition-all group-hover:opacity-100 opacity-0 invisible group-hover:visible absolute right-full bg-white z-30 w-[250px] rounded-lg p-4 shadow-4xl">
                  <h3 className="text-base font-medium text-brand-dark pb-1 ">
                    Price Breakdown
                  </h3>
                  <ul className="grid gap-1.5 mt-2">
                    <li className="flex gap-2 items-center text-sm text-brand-gray">
                      <img src={icon} alt="icon" />
                      <span>Ticket Price</span>
                    </li>
                    <li className="flex gap-2 items-center text-sm text-brand-gray">
                      <img src={icon} alt="icon" />
                      <span>Ticket Price</span>
                    </li>
                    <li className="flex gap-2 items-center text-sm text-brand-gray">
                      <img src={icon} alt="icon" />
                      <span>Ticket Price</span>
                    </li>
                    <li className="flex gap-2 items-center text-sm text-brand-gray">
                      <img src={icon} alt="icon" />
                      <span>Ticket Price</span>
                    </li>
                    <li className="flex gap-2 items-center text-sm text-brand-gray">
                      <img src={icon} alt="icon" />
                      <span>Ticket Price</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="space-y-3">
                <h2 className="text-brand-blue-100 text-xl md:text-[32px] leading-none font-bold">
                  $897
                </h2>
                <p className="text-12 md:text-sm sm:text-base text-brand-dark">
                  Price per person (incl. taxes & fees)
                </p>
                <a
                  href="#"
                  className="md:inline-block hidden px-7 py-2.5 bg-brand-red rounded-full text-white hover:bg-opacity-90 transition-all  "
                >
                  Select Deal
                </a>
              </div>
            </div>
          </div>
          <div className="md:hidden flex px-4 py-3 border-t justify-between items-center mt-4">
            <Link
              to={`/listing/details`}
              className="underline text-brand-blue-100 text-sm"
            >
              Show flight details
            </Link>
            <p className="text-sm   sm:text-base text-brand-dark text-opacity-75">
              Operated by Virgin Atlantic
            </p>
          </div>
        </div>
        <div className="hidden">
          <Details />
        </div>
      </div>
      <div className="relative bg-white rounded-xl overflow-hidden">
        <div className="relative">
          <div className="w-[60px] h-[60px] hidden md:block rounded-full bg-brand-gray-600 top-1/2 -translate-y-1/2 -left-8 absolute"></div>
          <div className="w-[60px] h-[60px] hidden md:block rounded-full bg-brand-gray-600 top-1/2 -translate-y-1/2 -right-8 absolute"></div>
          <div className="flex md:divide-x max-[400px]:gap-2 gap-8 md:gap-0 px-4 md:px-6 xl:px-14 ">
            <div className="md:pr-6 xl:pr-10 xl:pl-5 lg:relative pt-20 w-full">
              <div className="uppercase text-brand-blue-100 bg-[#E6EBEF]  px-6 py-3 rounded-b-xl absolute top-0">
                no change fees
              </div>
              <button type="button" className="absolute top-5 right-5 group">
                <Love color="stroke-brand-gray-800 fill-none group-hover:fill-brand-red group-hover:stroke-brand-red" />
              </button>
              <Fees />
              <ul className="relative grid max-[400px]:gap-1 gap-5">
                <li className="flex flex-wrap sm:flex-nowrap gap-y-2 gap-x-7 sm:justify-between">
                  <div className="custom-checkbox flex  gap-4 items-center w-full sm:w-auto">
                    <input
                      type="checkbox"
                      id="aa"
                      name="list"
                      className="hidden"
                    />
                    <label
                      htmlFor="aa"
                      className="relative md:block hidden"
                    ></label>
                    <div className="flex items-center gap-4 sm:gap-3">
                      <img
                        className="w-12 h-12 md:w-14 md:h-14"
                        src={listImgTwo}
                        alt="list-img-one"
                      />
                      <div className="space-y-1">
                        <h3 className="text-base xl:text-xl font-bold text-brand-blue-100">
                          9:30 pm - 1:10 am+2
                        </h3>

                        <p className="uppercase text-brand-dark text-opacity-75 ">
                          AMS
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1 pl-16 sm:pl-0">
                    <h3 className="text-base xl:text-xl font-bold text-brand-blue-100">
                      1 stop
                    </h3>
                    <ReactTooltip
                      anchorId="app-title7"
                      place="top"
                      content="4h 20m layover, Amsterdam Airport Schiphol"
                    />
                    <p
                      id="app-title7"
                      className="uppercase text-brand-dark text-opacity-75 "
                    >
                      AMS
                    </p>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base xl:text-xl font-bold text-brand-blue-100">
                      17h 10m
                    </h3>
                    <p className="uppercase text-brand-dark text-opacity-75 ">
                      JFK - DEL
                    </p>
                  </div>
                </li>
                <li className="flex flex-wrap sm:flex-nowrap gap-y-2 gap-x-7 sm:justify-between">
                  <div className="custom-checkbox flex  gap-4 items-center w-full sm:w-auto">
                    <input
                      type="checkbox"
                      id="aa"
                      name="list"
                      className="hidden"
                    />
                    <label
                      htmlFor="aa"
                      className="relative md:block hidden"
                    ></label>
                    <div className="flex items-center gap-4 sm:gap-3">
                      <img
                        className="w-12 h-12 md:w-14 md:h-14"
                        src={listImgTwo}
                        alt="list-img-one"
                      />
                      <div className="space-y-1">
                        <h3 className="text-base xl:text-xl font-bold text-brand-blue-100">
                          9:30 pm - 1:10 am+2
                        </h3>

                        <p className="uppercase text-brand-dark text-opacity-75 ">
                          AMS
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1 pl-16 sm:pl-0">
                    <h3 className="text-base xl:text-xl font-bold text-brand-blue-100">
                      1 stop
                    </h3>
                    <ReactTooltip
                      anchorId="app-title8"
                      place="top"
                      content="4h 20m layover, Amsterdam Airport Schiphol"
                    />
                    <p
                      id="app-title8"
                      className="uppercase text-brand-dark text-opacity-75 "
                    >
                      AMS
                    </p>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base xl:text-xl font-bold text-brand-blue-100">
                      17h 10m
                    </h3>
                    <p className="uppercase text-brand-dark text-opacity-75 ">
                      JFK - DEL
                    </p>
                  </div>
                </li>
              </ul>
              <div className="hidden md:flex justify-between items-center py-5">
                <button
                  type="button"
                  onClick={handleButtonClick}
                  className="underline text-brand-blue-100"
                >
                  Show flight details
                </button>
                <p className="text-sm sm:text-base text-brand-dark text-opacity-75">
                  Operated by Virgin Atlantic
                </p>
              </div>
            </div>
            <div className="md:pl-4 xl:pl-8 xl:pr-4 py-8 space-y-10 flex justify-center items-center md:items-start max-[400px]:w-[120px] w-[170px] sm:w-[260px] md:flex-col md:justify-between">
              <div className="group relative hidden md:block">
                <ul className="flex flex-wrap gap-2">
                  <li className="px-1.5 sm:px-2 rounded-md py-0.5 sm:py-1 flex gap-1 sm:gap-2 text-[10px] sm:text-xs font-medium text-brand-blue-100 border border-brand-gray-800">
                    <img src={iconOne} alt="iconone" />
                    <span>2</span>
                  </li>
                  <li className="px-1.5 sm:px-2 rounded-md py-0.5 sm:py-1 flex gap-1 sm:gap-2 text-[10px] sm:text-xs font-medium text-brand-blue-100 border border-brand-gray-800">
                    <img src={iconTwo} alt="iconTwo" />
                    <span>3</span>
                  </li>
                  <li className="px-1.5 sm:px-2 rounded-md py-0.5 sm:py-1 flex gap-1 sm:gap-2 text-[10px] sm:text-xs font-medium text-brand-blue-100 border border-brand-gray-800">
                    <img src={iconThree} alt="iconThree" />
                    <span>3</span>
                  </li>
                  <li className="px-1.5 sm:px-2 rounded-md py-0.5 sm:py-1 flex gap-1 sm:gap-2 text-[10px] sm:text-xs font-medium text-brand-blue-100 border border-brand-gray-800">
                    <img src={iconFour} alt="iconFour" />
                    <span>3</span>
                  </li>
                  <li className="px-1.5 sm:px-2 rounded-md py-0.5 sm:py-1 flex gap-1 sm:gap-2 text-[10px] sm:text-xs font-medium text-brand-blue-100 border border-brand-gray-800">
                    <img src={iconFive} alt="iconFive" />
                    <span>3</span>
                  </li>
                  <li className="px-1.5 sm:px-2 rounded-md py-0.5 sm:py-1 flex gap-1 sm:gap-2 text-[10px] sm:text-xs font-medium text-brand-blue-100 border border-brand-gray-800">
                    <img src={iconSix} alt="iconSix" />
                    <span>3</span>
                  </li>
                </ul>
                <div className="group-hover:translate-y-0  translate-y-10 transition-all group-hover:opacity-100 opacity-0 invisible group-hover:visible absolute right-full bg-white z-30 w-[250px] rounded-lg p-4 shadow-4xl">
                  <h3 className="text-base font-medium text-brand-dark pb-1 ">
                    Price Breakdown
                  </h3>
                  <ul className="grid gap-1.5 mt-2">
                    <li className="flex gap-2 items-center text-sm text-brand-gray">
                      <img src={icon} alt="icon" />
                      <span>Ticket Price</span>
                    </li>
                    <li className="flex gap-2 items-center text-sm text-brand-gray">
                      <img src={icon} alt="icon" />
                      <span>Ticket Price</span>
                    </li>
                    <li className="flex gap-2 items-center text-sm text-brand-gray">
                      <img src={icon} alt="icon" />
                      <span>Ticket Price</span>
                    </li>
                    <li className="flex gap-2 items-center text-sm text-brand-gray">
                      <img src={icon} alt="icon" />
                      <span>Ticket Price</span>
                    </li>
                    <li className="flex gap-2 items-center text-sm text-brand-gray">
                      <img src={icon} alt="icon" />
                      <span>Ticket Price</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="space-y-3">
                <h2 className="text-brand-blue-100 text-xl md:text-[32px] leading-none font-bold">
                  $897
                </h2>
                <p className="text-12 md:text-sm sm:text-base text-brand-dark">
                  Price per person (incl. taxes & fees)
                </p>
                <a
                  href="#"
                  className="md:inline-block hidden px-7 py-2.5 bg-brand-red rounded-full text-white hover:bg-opacity-90 transition-all  "
                >
                  Select Deal
                </a>
              </div>
            </div>
          </div>
          <div className="md:hidden flex px-4 py-3 border-t justify-between items-center mt-4">
            <Link
              to={`/listing/details`}
              className="underline text-brand-blue-100 text-sm"
            >
              Show flight details
            </Link>
            <p className="text-sm   sm:text-base text-brand-dark text-opacity-75">
              Operated by Virgin Atlantic
            </p>
          </div>
        </div>
        {isVisible && <Details />}
      </div>
      <div className="flex justify-center">
        <div className="w-[660px] max-w-full mx-auto bg-white rounded-full p-4 flex justify-between">
          <button
            type="button"
            className="px-5 py-2 rounded-full border border-brand-dark"
          >
            Prev
          </button>
          <ul className="flex gap-3 items-center">
            <li className="active group">
              <a
                href="#"
                className="w-[48px] group-[.active]:bg-brand-dark group-[.active]:text-white hover:bg-brand-dark hover:text-white   h-[48px] flex justify-center items-center text-lg font-medium rounded-md border border-brand-gray-light"
              >
                1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="w-[48px]  group-[.active]:bg-brand-dark group-[.active]:text-white hover:bg-brand-dark hover:text-white h-[48px] flex justify-center items-center text-lg font-medium rounded-md border border-brand-gray-light"
              >
                2
              </a>
            </li>
            <li>
              <a
                href="#"
                className="w-[48px]  group-[.active]:bg-brand-dark group-[.active]:text-white hover:bg-brand-dark hover:text-white h-[48px] flex justify-center items-center text-lg font-medium rounded-md border border-brand-gray-light"
              >
                3
              </a>
            </li>
            <li>
              <a
                href="#"
                className="w-[48px]  group-[.active]:bg-brand-dark group-[.active]:text-white hover:bg-brand-dark hover:text-white h-[48px] flex justify-center items-center text-lg font-medium rounded-md border border-brand-gray-light"
              >
                4
              </a>
            </li>
            <li>
              <a
                href="#"
                className="w-[48px]  group-[.active]:bg-brand-dark group-[.active]:text-white hover:bg-brand-dark hover:text-white h-[48px] flex justify-center items-center text-lg font-medium rounded-md border border-brand-gray-light"
              >
                5..
              </a>
            </li>
          </ul>
          <button
            type="button"
            className="px-5 py-2 rounded-full border border-brand-dark"
          >
            Next
          </button>
        </div>
      </div>
      <div className="sm:block hidden">
        <figure>
          <img src={adsThree} alt="adds three" />
        </figure>
      </div>
    </div>
  );
}
