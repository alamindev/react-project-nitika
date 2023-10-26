import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import arrowRight from "../../assets/images/listing/arrow-right.svg";
import iconOne from "../../assets/images/listing/icon-1.svg";
import iconTwo from "../../assets/images/listing/icon-2.svg";
import iconThree from "../../assets/images/listing/icon-3.svg";
import iconFour from "../../assets/images/listing/icon-4.svg";
import iconFive from "../../assets/images/listing/icon-5.svg";
import iconSix from "../../assets/images/listing/icon-6.svg";
import iconSeven from "../../assets/images/listing/icon-7.svg";
import info from "../../assets/images/listing/info-circle.svg";
import listImgOne from "../../assets/images/listing/list-img-1.png";
import paper from "../../assets/images/listing/paper-diploma.svg";
import planeDown from "../../assets/images/listing/plane-f.svg";
import plane from "../../assets/images/listing/plane.svg";
import slideImgOne from "../../assets/images/listing/slide-img-1.png";
import slideImgTwo from "../../assets/images/listing/slide-img-2.png";
import slideImgThree from "../../assets/images/listing/slide-img-3.png";
import slideImgFour from "../../assets/images/listing/slide-img-4.png";
import slideImgFive from "../../assets/images/listing/slide-img-5.png";
import slideImgSix from "../../assets/images/listing/slide-img-6.png";
import slideImgSeven from "../../assets/images/listing/slide-img-7.png";
export default function Details({ border }) {
  return (
    <div className={"sm:border-t  px-3 sm:px-6 xl:px-20 " + border}>
      <div className="divide-y">
        <div className="space-y-4 py-10">
          <div className="space-y-2">
            <h2 className="text-2xl font-medium text-brand-dark">Departure</h2>
            <div className="flex divide-x items-center">
              <div className="flex gap-1 pr-2 items-center">
                <p className="uppercase text-brand-dark">NYC</p>
                <img src={plane} alt="plane" />
                <p className="uppercase text-brand-dark">DEL</p>
              </div>
              <p className="pl-2 text-brand-dark text-opacity-75">17h 10m</p>
            </div>
          </div>
          <div className="flex gap-14 flex-col">
            <div className="flex justify-between">
              <div className="w-[580px] max-w-full">
                <div className="flow-root">
                  <ul role="list" className="-mb-8">
                    <li>
                      <div className="relative pb-5 sm:pb-8">
                        <span
                          className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                          aria-hidden="true"
                        ></span>
                        <div className="relative flex items-start space-x-2 sm:space-x-3">
                          <div className="relative pb-4 bg-white">
                            <img
                              className="w-[36px] h-[36px] sm:w-auto sm:h0auto"
                              src={listImgOne}
                              alt="list-img-one"
                            />
                          </div>
                          <div className="min-w-0 flex-1 space-y-2">
                            <div className="flex flex-wrap xl:flex-nowrap items-center  gap-1.5 xl:gap-5">
                              <p className="text-brand-dark text-opacity-75 xl:w-auto w-full text-base">
                                <strong className="text-brand-blue-100 font-medium sm:font-semibold">
                                  9:30 pm
                                </strong>
                                <span className="pl-2 text-sm sm:text-base">
                                  Feb. 15 (Wed)
                                </span>
                              </p>
                              <div className="flex gap-2 sm:gap-5">
                                <img
                                  src={arrowRight}
                                  className=""
                                  alt="arrow-right"
                                />
                                <div className="flex flex-wrap md:flex-nowrap items-center gap-2">
                                  <p className="text-brand-dark text-opacity-75 text-sm sm:text-base">
                                    <strong className="text-brand-blue-100 font-medium sm:font-semibold">
                                      10:30 am
                                    </strong>
                                    <span className="pl-2  text-sm sm:text-base">
                                      Feb. 16 (Thu)
                                    </span>
                                  </p>
                                </div>
                              </div>
                              <button
                                type="button"
                                className="px-3 rounded-md py-1.5 text-sm text-brand-blue-100 bg-brand-dark bg-opacity-5"
                              >
                                Next day
                              </button>
                            </div>
                            <ul className="flex divide-x items-center ">
                              <li className="pr-3 text-brand-dark text-sm sm:text-base font-medium">
                                7h
                              </li>
                              <li className="pl-3 text-brand-dark text-sm sm:text-base font-medium">
                                Flight 9392
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="relative pb-5 sm:pb-8">
                        <span
                          className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                          aria-hidden="true"
                        ></span>
                        <div className="relative flex items-start space-x-3">
                          <div>
                            <div className="relative px-1">
                              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white ring-8 ring-white">
                                <img src={planeDown} alt="plane" />
                              </div>
                            </div>
                          </div>
                          <div className="min-w-0 flex-1 space-y-2">
                            <p className="text-sm sm:text-base text-brand-dark sm:leading-none">
                              Spirit Airlines
                            </p>
                            <p className="text-sm sm:text-base text-brand-dark sm:leading-none">
                              John F. Kennedy International Airport
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="relative pb-5 sm:pb-8">
                        <span
                          className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                          aria-hidden="true"
                        ></span>
                        <div className="relative flex items-start space-x-3">
                          <div>
                            <div className="relative px-1">
                              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white ring-8 ring-white">
                                <div className="w-3 h-3 rounded-full bg-brand-blue-25"></div>
                              </div>
                            </div>
                          </div>
                          <div className="min-w-0 flex-1 py-0">
                            <div className="w-full rounded-md flex-col md:flex-row border border-brand-blue-25 px-4 py-2 bg-brand-gray-10 flex justify-between md:items-center">
                              <p className="text-brand-blue-100 text-sm">
                                Stop at AMS
                              </p>
                              <p className="text-sm font-medium text-brand-blue-100">
                                1h 55m layover in Amsterdam
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="shrink-0 w-[116px] sm:w-[230px] sm:px-5 flex flex-col justify-between">
                <div className="space-y-2">
                  <ul className="divide-x flex items-center ">
                    <li className="text-brand-dark pr-2 text-xs sm:text-base">
                      Coach
                    </li>
                    <li className="text-brand-dark pl-2 text-xs sm:text-base">
                      Main Cabin
                    </li>
                  </ul>
                  <div className="group relative">
                    <ul className="flex flex-wrap gap-2 justify-end sm:justify-start">
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
                    <div className="group-hover:translate-y-0 top-0 translate-y-10 transition-all group-hover:opacity-100 opacity-0 invisible group-hover:visible absolute right-full bg-white z-30 w-[250px] rounded-lg p-5 shadow-4xl">
                      <h3 className="text-base font-medium text-brand-dark pb-1 ">
                        Price Breakdown
                      </h3>
                      <ul className="grid gap-1.5 mt-2 pb-3">
                        <li className="space-y-2">
                          <div className="flex gap-2 items-center justify-between text-sm">
                            <div className="flex gap-2 items-center">
                              <img src={iconSeven} alt="icon" />
                              <span className="text-brand-blue-dark">
                                Ticket Price
                              </span>
                            </div>
                            <p className="text-brand-blue-dark text-opacity-75">
                              $4,082
                            </p>
                          </div>
                        </li>
                        <li className="space-y-2">
                          <div className="flex gap-2 items-center justify-between text-sm">
                            <div className="flex gap-2 items-center">
                              <img src={iconSeven} alt="icon" />
                              <span className="text-brand-blue-dark">
                                Checked bag (2)
                              </span>
                            </div>
                            <p className="text-brand-blue-dark text-opacity-75">
                              Included
                            </p>
                          </div>
                        </li>
                        <li className="space-y-2">
                          <div className="flex gap-2 items-center justify-between text-sm">
                            <div className="flex gap-2 items-center">
                              <img src={iconSeven} alt="icon" />
                              <span className="text-brand-blue-dark">
                                Carry-on bag (3)
                              </span>
                            </div>
                            <p className="text-brand-blue-dark text-opacity-75">
                              Included
                            </p>
                          </div>
                          <p className="text-xs text-brand-blue-dark text-opacity-75">
                            Up to 50lbs per bag, and 62in total
                          </p>
                        </li>
                        <li className="space-y-2">
                          <div className="flex gap-2 items-center justify-between text-sm">
                            <div className="flex gap-2 items-center">
                              <img src={iconSeven} alt="icon" />
                              <span className="text-brand-blue-dark">
                                1 Meal (3)
                              </span>
                            </div>
                            <p className="text-brand-blue-dark text-opacity-75">
                              Included
                            </p>
                          </div>
                        </li>
                        <li className="space-y-2">
                          <div className="flex gap-2 items-center justify-between text-sm">
                            <div className="flex gap-2 items-center">
                              <img src={iconSeven} alt="icon" />
                              <span className="text-brand-blue-dark">
                                Seats (3)
                              </span>
                            </div>
                            <p className="text-brand-blue-dark text-opacity-75">
                              Included
                            </p>
                          </div>
                        </li>
                        <li className="space-y-2">
                          <div className="flex gap-2 items-center justify-between text-sm">
                            <div className="flex gap-2 items-center">
                              <img src={iconSeven} alt="icon" />
                              <span className="text-brand-blue-dark">
                                Outlets
                              </span>
                            </div>
                            <p className="text-brand-blue-dark text-opacity-75">
                              Included
                            </p>
                          </div>
                        </li>
                        <li className="space-y-2">
                          <div className="flex gap-2 items-center justify-between text-sm">
                            <div className="flex gap-2 items-center">
                              <img src={iconSeven} alt="icon" />
                              <span className="text-brand-blue-dark">
                                Movie Library
                              </span>
                            </div>
                            <p className="text-brand-blue-dark text-opacity-75">
                              Included
                            </p>
                          </div>
                        </li>
                      </ul>
                      <div className="flex justify-between items-center pt-2 border-t">
                        <h3 className="font-medium text-brand-blue-dark ">
                          Total
                        </h3>
                        <p className=" text-brand-blue-dark font-medium">
                          $4,082
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between relative">
              <div className="w-[580px] max-w-full">
                <div className="flow-root">
                  <ul role="list" className="-mb-8">
                    <li>
                      <div className="relative pb-5 sm:pb-8">
                        <span
                          className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                          aria-hidden="true"
                        ></span>
                        <div className="relative flex items-start space-x-2 sm:space-x-3">
                          <div className="relative pb-4 bg-white">
                            <img
                              className="w-[36px] h-[36px] sm:w-auto sm:h0auto"
                              src={listImgOne}
                              alt="list-img-one"
                            />
                          </div>
                          <div className="min-w-0 flex-1 space-y-2">
                            <div className="flex flex-wrap xl:flex-nowrap items-center  gap-1.5 xl:gap-5">
                              <p className="text-brand-dark text-opacity-75 xl:w-auto w-full text-base">
                                <strong className="text-brand-blue-100 font-medium sm:font-semibold">
                                  9:30 pm
                                </strong>
                                <span className="pl-2 text-sm sm:text-base">
                                  Feb. 15 (Wed)
                                </span>
                              </p>
                              <div className="flex gap-2 sm:gap-5">
                                <img
                                  src={arrowRight}
                                  className=""
                                  alt="arrow-right"
                                />
                                <div className="flex flex-wrap md:flex-nowrap items-center gap-2">
                                  <p className="text-brand-dark text-opacity-75 text-sm sm:text-base">
                                    <strong className="text-brand-blue-100 font-medium sm:font-semibold">
                                      10:30 am
                                    </strong>
                                    <span className="pl-2  text-sm sm:text-base">
                                      Feb. 16 (Thu)
                                    </span>
                                  </p>
                                </div>
                              </div>
                              <button
                                type="button"
                                className="px-3 rounded-md py-1.5 text-sm text-brand-blue-100 bg-brand-dark bg-opacity-5"
                              >
                                Next day
                              </button>
                            </div>
                            <ul className="flex divide-x items-center ">
                              <li className="pr-3 text-brand-dark text-sm sm:text-base font-medium">
                                7h
                              </li>
                              <li className="pl-3 text-brand-dark text-sm sm:text-base font-medium">
                                Flight 9392
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="relative pb-5 sm:pb-8">
                        <span
                          className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                          aria-hidden="true"
                        ></span>
                        <div className="relative flex items-start space-x-3">
                          <div>
                            <div className="relative px-1">
                              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white ring-8 ring-white">
                                <img src={planeDown} alt="plane" />
                              </div>
                            </div>
                          </div>
                          <div className="min-w-0 flex-1 space-y-2">
                            <p className="text-sm sm:text-base text-brand-dark sm:leading-none">
                              Spirit Airlines
                            </p>
                            <p className="text-sm sm:text-base text-brand-dark sm:leading-none">
                              John F. Kennedy International Airport
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="relative pb-5 sm:pb-8">
                        <div className="relative flex items-start space-x-3">
                          <div>
                            <div className="relative px-1">
                              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white ring-8 ring-white">
                                <div className="w-3 h-3 rounded-full bg-brand-blue-25"></div>
                              </div>
                            </div>
                          </div>
                          <div className="min-w-0 flex-1 py-0">
                            <div className="w-full rounded-md flex-col md:flex-row border border-brand-dark px-4 py-2 bg-brand-dark flex justify-between md:items-center">
                              <p className="text-white text-sm">Stop at AMS</p>
                              <p className="text-sm font-medium text-white">
                                1h 55m layover in Amsterdam
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="shrink-0 w-[116px] sm:w-[230px] sm:px-5 flex flex-col justify-between">
                <div className="space-y-2">
                  <ul className="divide-x flex items-center ">
                    <li className="text-brand-dark pr-2 text-xs sm:text-base">
                      Coach
                    </li>
                    <li className="text-brand-dark pl-2 text-xs sm:text-base">
                      Main Cabin
                    </li>
                  </ul>
                  <div className="group relative">
                    <ul className="flex flex-wrap gap-2 justify-end sm:justify-start">
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
                    <div className="group-hover:translate-y-0 top-0 translate-y-10 transition-all group-hover:opacity-100 opacity-0 invisible group-hover:visible absolute right-full bg-white z-30 w-[250px] rounded-lg p-5 shadow-4xl">
                      <h3 className="text-base font-medium text-brand-dark pb-1 ">
                        Price Breakdown
                      </h3>
                      <ul className="grid gap-1.5 mt-2 pb-3">
                        <li className="space-y-2">
                          <div className="flex gap-2 items-center justify-between text-sm">
                            <div className="flex gap-2 items-center">
                              <img src={iconSeven} alt="icon" />
                              <span className="text-brand-blue-dark">
                                Ticket Price
                              </span>
                            </div>
                            <p className="text-brand-blue-dark text-opacity-75">
                              $4,082
                            </p>
                          </div>
                        </li>
                        <li className="space-y-2">
                          <div className="flex gap-2 items-center justify-between text-sm">
                            <div className="flex gap-2 items-center">
                              <img src={iconSeven} alt="icon" />
                              <span className="text-brand-blue-dark">
                                Checked bag (2)
                              </span>
                            </div>
                            <p className="text-brand-blue-dark text-opacity-75">
                              Included
                            </p>
                          </div>
                        </li>
                        <li className="space-y-2">
                          <div className="flex gap-2 items-center justify-between text-sm">
                            <div className="flex gap-2 items-center">
                              <img src={iconSeven} alt="icon" />
                              <span className="text-brand-blue-dark">
                                Carry-on bag (3)
                              </span>
                            </div>
                            <p className="text-brand-blue-dark text-opacity-75">
                              Included
                            </p>
                          </div>
                          <p className="text-xs text-brand-blue-dark text-opacity-75">
                            Up to 50lbs per bag, and 62in total
                          </p>
                        </li>
                        <li className="space-y-2">
                          <div className="flex gap-2 items-center justify-between text-sm">
                            <div className="flex gap-2 items-center">
                              <img src={iconSeven} alt="icon" />
                              <span className="text-brand-blue-dark">
                                1 Meal (3)
                              </span>
                            </div>
                            <p className="text-brand-blue-dark text-opacity-75">
                              Included
                            </p>
                          </div>
                        </li>
                        <li className="space-y-2">
                          <div className="flex gap-2 items-center justify-between text-sm">
                            <div className="flex gap-2 items-center">
                              <img src={iconSeven} alt="icon" />
                              <span className="text-brand-blue-dark">
                                Seats (3)
                              </span>
                            </div>
                            <p className="text-brand-blue-dark text-opacity-75">
                              Included
                            </p>
                          </div>
                        </li>
                        <li className="space-y-2">
                          <div className="flex gap-2 items-center justify-between text-sm">
                            <div className="flex gap-2 items-center">
                              <img src={iconSeven} alt="icon" />
                              <span className="text-brand-blue-dark">
                                Outlets
                              </span>
                            </div>
                            <p className="text-brand-blue-dark text-opacity-75">
                              Included
                            </p>
                          </div>
                        </li>
                        <li className="space-y-2">
                          <div className="flex gap-2 items-center justify-between text-sm">
                            <div className="flex gap-2 items-center">
                              <img src={iconSeven} alt="icon" />
                              <span className="text-brand-blue-dark">
                                Movie Library
                              </span>
                            </div>
                            <p className="text-brand-blue-dark text-opacity-75">
                              Included
                            </p>
                          </div>
                        </li>
                      </ul>
                      <div className="flex justify-between items-center pt-2 border-t">
                        <h3 className="font-medium text-brand-blue-dark ">
                          Total
                        </h3>
                        <p className=" text-brand-blue-dark font-medium">
                          $4,082
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4 py-10">
          <div className="space-y-2">
            <h2 className="text-2xl font-medium text-brand-dark">Return</h2>
            <div className="flex divide-x items-center">
              <div className="flex gap-1 pr-2 items-center">
                <p className="uppercase text-brand-dark">NYC</p>
                <img src={plane} alt="plane" />
                <p className="uppercase text-brand-dark">DEL</p>
              </div>
              <p className="pl-2 text-brand-dark text-opacity-75">17h 10m</p>
            </div>
          </div>
          <div className="flex gap-14 flex-col">
            <div className="flex justify-between">
              <div className="w-[580px] max-w-full">
                <div className="flow-root">
                  <ul role="list" className="-mb-8">
                    <li>
                      <div className="relative pb-5 sm:pb-8">
                        <span
                          className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                          aria-hidden="true"
                        ></span>
                        <div className="relative flex items-start space-x-2 sm:space-x-3">
                          <div className="relative pb-4 bg-white">
                            <img
                              className="w-[36px] h-[36px] sm:w-auto sm:h0auto"
                              src={listImgOne}
                              alt="list-img-one"
                            />
                          </div>
                          <div className="min-w-0 flex-1 space-y-2">
                            <div className="flex flex-wrap xl:flex-nowrap items-center  gap-1.5 xl:gap-5">
                              <p className="text-brand-dark text-opacity-75 xl:w-auto w-full text-base">
                                <strong className="text-brand-blue-100 font-medium sm:font-semibold">
                                  12:25 pm
                                </strong>
                                <span className="pl-2 text-sm sm:text-base">
                                  Mar. 01 (Wed)
                                </span>
                              </p>
                              <div className="flex gap-2 sm:gap-5">
                                <img
                                  src={arrowRight}
                                  className=""
                                  alt="arrow-right"
                                />
                                <div className="flex flex-wrap md:flex-nowrap items-center gap-2">
                                  <p className="text-brand-dark text-opacity-75 text-sm sm:text-base">
                                    <strong className="text-brand-blue-100 font-medium sm:font-semibold">
                                      1:10 am
                                    </strong>
                                    <span className="pl-2  text-sm sm:text-base">
                                      Mar. 02 (Thu)
                                    </span>
                                  </p>
                                </div>
                              </div>
                              <button
                                type="button"
                                className="px-3 rounded-md py-1.5 text-sm text-brand-blue-100 bg-brand-dark bg-opacity-5"
                              >
                                Next day
                              </button>
                            </div>
                            <ul className="flex divide-x items-center ">
                              <li className="pr-3 text-brand-dark text-sm sm:text-base font-medium">
                                8h 15m
                              </li>
                              <li className="pl-3 text-brand-dark text-sm sm:text-base font-medium">
                                Flight 9574
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="relative pb-5 sm:pb-8">
                        <span
                          className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                          aria-hidden="true"
                        ></span>
                        <div className="relative flex items-start space-x-3">
                          <div>
                            <div className="relative px-1">
                              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white ring-8 ring-white">
                                <img src={planeDown} alt="plane" />
                              </div>
                            </div>
                          </div>
                          <div className="min-w-0 flex-1 space-y-2">
                            <p className="text-sm sm:text-base text-brand-dark sm:leading-none">
                              Spirit Airlines
                            </p>
                            <p className="text-sm sm:text-base text-brand-dark sm:leading-none">
                              John F. Kennedy International Airport
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="relative pb-5 sm:pb-8">
                        <span
                          className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                          aria-hidden="true"
                        ></span>
                        <div className="relative flex items-start space-x-3">
                          <div>
                            <div className="relative px-1">
                              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white ring-8 ring-white">
                                <div className="w-3 h-3 rounded-full bg-brand-blue-25"></div>
                              </div>
                            </div>
                          </div>
                          <div className="min-w-0 flex-1 py-0">
                            <div className="w-full rounded-md flex-col md:flex-row border border-brand-blue-25 px-4 py-2 bg-brand-gray-10 flex justify-between md:items-center">
                              <p className="text-brand-blue-100 text-sm">
                                Stop at AMS
                              </p>
                              <p className="text-sm font-medium text-brand-blue-100">
                                1h 55m layover in Amsterdam
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="shrink-0 w-[116px] sm:w-[230px] sm:px-5 flex flex-col justify-between">
                <div className="space-y-2">
                  <ul className="divide-x flex items-center ">
                    <li className="text-brand-dark pr-2 text-xs sm:text-base">
                      Coach
                    </li>
                    <li className="text-brand-dark pl-2 text-xs sm:text-base">
                      Main Cabin
                    </li>
                  </ul>
                  <div className="group relative">
                    <ul className="flex flex-wrap gap-2 justify-end sm:justify-start">
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
                    <div className="group-hover:translate-y-0 top-0 translate-y-10 transition-all group-hover:opacity-100 opacity-0 invisible group-hover:visible absolute right-full bg-white z-30 w-[250px] rounded-lg p-5 shadow-4xl">
                      <h3 className="text-base font-medium text-brand-dark pb-1 ">
                        Price Breakdown
                      </h3>
                      <ul className="grid gap-1.5 mt-2 pb-3">
                        <li className="space-y-2">
                          <div className="flex gap-2 items-center justify-between text-sm">
                            <div className="flex gap-2 items-center">
                              <img src={iconSeven} alt="icon" />
                              <span className="text-brand-blue-dark">
                                Ticket Price
                              </span>
                            </div>
                            <p className="text-brand-blue-dark text-opacity-75">
                              $4,082
                            </p>
                          </div>
                        </li>
                        <li className="space-y-2">
                          <div className="flex gap-2 items-center justify-between text-sm">
                            <div className="flex gap-2 items-center">
                              <img src={iconSeven} alt="icon" />
                              <span className="text-brand-blue-dark">
                                Checked bag (2)
                              </span>
                            </div>
                            <p className="text-brand-blue-dark text-opacity-75">
                              Included
                            </p>
                          </div>
                        </li>
                        <li className="space-y-2">
                          <div className="flex gap-2 items-center justify-between text-sm">
                            <div className="flex gap-2 items-center">
                              <img src={iconSeven} alt="icon" />
                              <span className="text-brand-blue-dark">
                                Carry-on bag (3)
                              </span>
                            </div>
                            <p className="text-brand-blue-dark text-opacity-75">
                              Included
                            </p>
                          </div>
                          <p className="text-xs text-brand-blue-dark text-opacity-75">
                            Up to 50lbs per bag, and 62in total
                          </p>
                        </li>
                        <li className="space-y-2">
                          <div className="flex gap-2 items-center justify-between text-sm">
                            <div className="flex gap-2 items-center">
                              <img src={iconSeven} alt="icon" />
                              <span className="text-brand-blue-dark">
                                1 Meal (3)
                              </span>
                            </div>
                            <p className="text-brand-blue-dark text-opacity-75">
                              Included
                            </p>
                          </div>
                        </li>
                        <li className="space-y-2">
                          <div className="flex gap-2 items-center justify-between text-sm">
                            <div className="flex gap-2 items-center">
                              <img src={iconSeven} alt="icon" />
                              <span className="text-brand-blue-dark">
                                Seats (3)
                              </span>
                            </div>
                            <p className="text-brand-blue-dark text-opacity-75">
                              Included
                            </p>
                          </div>
                        </li>
                        <li className="space-y-2">
                          <div className="flex gap-2 items-center justify-between text-sm">
                            <div className="flex gap-2 items-center">
                              <img src={iconSeven} alt="icon" />
                              <span className="text-brand-blue-dark">
                                Outlets
                              </span>
                            </div>
                            <p className="text-brand-blue-dark text-opacity-75">
                              Included
                            </p>
                          </div>
                        </li>
                        <li className="space-y-2">
                          <div className="flex gap-2 items-center justify-between text-sm">
                            <div className="flex gap-2 items-center">
                              <img src={iconSeven} alt="icon" />
                              <span className="text-brand-blue-dark">
                                Movie Library
                              </span>
                            </div>
                            <p className="text-brand-blue-dark text-opacity-75">
                              Included
                            </p>
                          </div>
                        </li>
                      </ul>
                      <div className="flex justify-between items-center pt-2 border-t">
                        <h3 className="font-medium text-brand-blue-dark ">
                          Total
                        </h3>
                        <p className=" text-brand-blue-dark font-medium">
                          $4,082
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between relative">
              <div className="w-[580px] max-w-full">
                <div className="flow-root">
                  <ul role="list" className="-mb-8">
                    <li>
                      <div className="relative pb-5 sm:pb-8">
                        <span
                          className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                          aria-hidden="true"
                        ></span>
                        <div className="relative flex items-start space-x-2 sm:space-x-3">
                          <div className="relative pb-4 bg-white">
                            <img
                              className="w-[36px] h-[36px] sm:w-auto sm:h0auto"
                              src={listImgOne}
                              alt="list-img-one"
                            />
                          </div>
                          <div className="min-w-0 flex-1 space-y-2">
                            <div className="flex flex-wrap xl:flex-nowrap items-center  gap-1.5 xl:gap-5">
                              <p className="text-brand-dark text-opacity-75 xl:w-auto w-full text-base">
                                <strong className="text-brand-blue-100 font-medium sm:font-semibold">
                                  9:30 pm
                                </strong>
                                <span className="pl-2 text-sm sm:text-base">
                                  Feb. 15 (Wed)
                                </span>
                              </p>
                              <div className="flex gap-2 sm:gap-5">
                                <img
                                  src={arrowRight}
                                  className=""
                                  alt="arrow-right"
                                />
                                <div className="flex flex-wrap md:flex-nowrap items-center gap-2">
                                  <p className="text-brand-dark text-opacity-75 text-sm sm:text-base">
                                    <strong className="text-brand-blue-100 font-medium sm:font-semibold">
                                      10:30 am
                                    </strong>
                                    <span className="pl-2  text-sm sm:text-base">
                                      Feb. 16 (Thu)
                                    </span>
                                  </p>
                                </div>
                              </div>
                              <button
                                type="button"
                                className="px-3 rounded-md py-1.5 text-sm text-brand-blue-100 bg-brand-dark bg-opacity-5"
                              >
                                Next day
                              </button>
                            </div>
                            <ul className="flex divide-x items-center ">
                              <li className="pr-3 text-brand-dark text-sm sm:text-base font-medium">
                                7h
                              </li>
                              <li className="pl-3 text-brand-dark text-sm sm:text-base font-medium">
                                Flight 9392
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="relative pb-5 sm:pb-8">
                        <span
                          className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                          aria-hidden="true"
                        ></span>
                        <div className="relative flex items-start space-x-3">
                          <div>
                            <div className="relative px-1">
                              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white ring-8 ring-white">
                                <img src={planeDown} alt="plane" />
                              </div>
                            </div>
                          </div>
                          <div className="min-w-0 flex-1 space-y-2">
                            <p className="text-sm sm:text-base text-brand-dark sm:leading-none">
                              Spirit Airlines
                            </p>
                            <p className="text-sm sm:text-base text-brand-dark sm:leading-none">
                              John F. Kennedy International Airport
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="relative pb-5 sm:pb-8">
                        <div className="relative flex items-start space-x-3">
                          <div>
                            <div className="relative px-1">
                              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white ring-8 ring-white">
                                <div className="w-3 h-3 rounded-full bg-brand-blue-25"></div>
                              </div>
                            </div>
                          </div>
                          <div className="min-w-0 flex-1 py-0">
                            <div className="w-full rounded-md flex-col md:flex-row border border-brand-dark px-4 py-2 bg-brand-dark flex justify-between md:items-center">
                              <p className="text-white text-sm">Stop at AMS</p>
                              <p className="text-sm font-medium text-white">
                                1h 55m layover in Amsterdam
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="shrink-0 w-[116px] sm:w-[230px] sm:px-5 flex flex-col justify-between">
                <div className="space-y-2">
                  <ul className="divide-x flex items-center ">
                    <li className="text-brand-dark pr-2 text-xs sm:text-base">
                      Coach
                    </li>
                    <li className="text-brand-dark pl-2 text-xs sm:text-base">
                      Main Cabin
                    </li>
                  </ul>
                  <div className="group relative">
                    <ul className="flex flex-wrap gap-2 justify-end sm:justify-start">
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
                    <div className="group-hover:translate-y-0 top-0 translate-y-10 transition-all group-hover:opacity-100 opacity-0 invisible group-hover:visible absolute right-full bg-white z-30 w-[250px] rounded-lg p-5 shadow-4xl">
                      <h3 className="text-base font-medium text-brand-dark pb-1 ">
                        Price Breakdown
                      </h3>
                      <ul className="grid gap-1.5 mt-2 pb-3">
                        <li className="space-y-2">
                          <div className="flex gap-2 items-center justify-between text-sm">
                            <div className="flex gap-2 items-center">
                              <img src={iconSeven} alt="icon" />
                              <span className="text-brand-blue-dark">
                                Ticket Price
                              </span>
                            </div>
                            <p className="text-brand-blue-dark text-opacity-75">
                              $4,082
                            </p>
                          </div>
                        </li>
                        <li className="space-y-2">
                          <div className="flex gap-2 items-center justify-between text-sm">
                            <div className="flex gap-2 items-center">
                              <img src={iconSeven} alt="icon" />
                              <span className="text-brand-blue-dark">
                                Checked bag (2)
                              </span>
                            </div>
                            <p className="text-brand-blue-dark text-opacity-75">
                              Included
                            </p>
                          </div>
                        </li>
                        <li className="space-y-2">
                          <div className="flex gap-2 items-center justify-between text-sm">
                            <div className="flex gap-2 items-center">
                              <img src={iconSeven} alt="icon" />
                              <span className="text-brand-blue-dark">
                                Carry-on bag (3)
                              </span>
                            </div>
                            <p className="text-brand-blue-dark text-opacity-75">
                              Included
                            </p>
                          </div>
                          <p className="text-xs text-brand-blue-dark text-opacity-75">
                            Up to 50lbs per bag, and 62in total
                          </p>
                        </li>
                        <li className="space-y-2">
                          <div className="flex gap-2 items-center justify-between text-sm">
                            <div className="flex gap-2 items-center">
                              <img src={iconSeven} alt="icon" />
                              <span className="text-brand-blue-dark">
                                1 Meal (3)
                              </span>
                            </div>
                            <p className="text-brand-blue-dark text-opacity-75">
                              Included
                            </p>
                          </div>
                        </li>
                        <li className="space-y-2">
                          <div className="flex gap-2 items-center justify-between text-sm">
                            <div className="flex gap-2 items-center">
                              <img src={iconSeven} alt="icon" />
                              <span className="text-brand-blue-dark">
                                Seats (3)
                              </span>
                            </div>
                            <p className="text-brand-blue-dark text-opacity-75">
                              Included
                            </p>
                          </div>
                        </li>
                        <li className="space-y-2">
                          <div className="flex gap-2 items-center justify-between text-sm">
                            <div className="flex gap-2 items-center">
                              <img src={iconSeven} alt="icon" />
                              <span className="text-brand-blue-dark">
                                Outlets
                              </span>
                            </div>
                            <p className="text-brand-blue-dark text-opacity-75">
                              Included
                            </p>
                          </div>
                        </li>
                        <li className="space-y-2">
                          <div className="flex gap-2 items-center justify-between text-sm">
                            <div className="flex gap-2 items-center">
                              <img src={iconSeven} alt="icon" />
                              <span className="text-brand-blue-dark">
                                Movie Library
                              </span>
                            </div>
                            <p className="text-brand-blue-dark text-opacity-75">
                              Included
                            </p>
                          </div>
                        </li>
                      </ul>
                      <div className="flex justify-between items-center pt-2 border-t">
                        <h3 className="font-medium text-brand-blue-dark ">
                          Total
                        </h3>
                        <p className=" text-brand-blue-dark font-medium">
                          $4,082
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4 py-10">
          <div className="space-y-6">
            <h2 className="text-2xl font-medium text-brand-dark">
              Booking options
            </h2>
            <div className="overflow-x-auto hide-scroll">
              <ul className="flex items-center gap-6">
                <li className="custom-radio shrink-0">
                  <input type="radio" id="trip" name="booking" checked />
                  <label
                    htmlFor="trip"
                    className="text-sm sm:text-lg text-brand-gray-500"
                  >
                    Main Cabin
                  </label>
                </li>
                <li className="custom-radio shrink-0">
                  <input type="radio" id="triptwo" name="booking" />
                  <label
                    htmlFor="triptwo"
                    className="text-sm sm:text-lg text-brand-gray-500"
                  >
                    Refundable Main Cabin
                  </label>
                </li>
                <li className="custom-radio shrink-0">
                  <input type="radio" id="tripthree" name="booking" />
                  <label
                    htmlFor="tripthree"
                    className="text-sm sm:text-lg text-brand-gray-500"
                  >
                    Premium
                  </label>
                </li>
                <li className="custom-radio shrink-0">
                  <input type="radio" id="tripfour" name="booking" />
                  <label
                    htmlFor="tripfour"
                    className="text-sm sm:text-lg text-brand-gray-500"
                  >
                    Refundable Premium
                  </label>
                </li>
                <li className="custom-radio shrink-0">
                  <input type="radio" id="tripfive" name="booking" />
                  <label
                    htmlFor="tripfive"
                    className="text-sm sm:text-lg text-brand-gray-500"
                  >
                    Spirit Business
                  </label>
                </li>
              </ul>
            </div>
            <div className="xl:-mr-20">
              <Swiper
                spaceBetween={15}
                slidesPerView={2.3}
                breakpoints={{
                  1400: {
                    slidesPerView: 7.2,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 4.6,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 5.2,
                    spaceBetween: 20,
                  },
                  540: {
                    slidesPerView: 4.2,
                    spaceBetween: 20,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="flex flex-col justify-center items-center gap-4">
                    <img
                      className="w-[120px] h-[120px]  rounded-full object-cover"
                      src={slideImgOne}
                      alt="slide-img-1"
                    />
                    <p className="text-center text-brand-blue-100 text-sm font-medium">
                      Spacious Terminal C
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex flex-col justify-center items-center gap-4">
                    <img
                      className="w-[120px] h-[120px]  rounded-full object-cover"
                      src={slideImgTwo}
                      alt="slide-img-2"
                    />
                    <p className="text-center text-brand-blue-100 text-sm font-medium">
                      Decarbonizing air travel
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex flex-col justify-center items-center gap-4">
                    <img
                      className="w-[120px] h-[120px]  rounded-full object-cover"
                      src={slideImgThree}
                      alt="slide-img-3"
                    />
                    <p className="text-center text-brand-blue-100 text-sm font-medium">
                      Recline into more legroom
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex flex-col justify-center items-center gap-4">
                    <img
                      className="w-[120px] h-[120px]  rounded-full object-cover"
                      src={slideImgFour}
                      alt="slide-img-4"
                    />
                    <p className="text-center text-brand-blue-100 text-sm font-medium">
                      Charging Areas
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex flex-col justify-center items-center gap-4">
                    <img
                      className="w-[120px] h-[120px]  rounded-full object-cover"
                      src={slideImgFive}
                      alt="slide-img-5"
                    />
                    <p className="text-center text-brand-blue-100 text-sm font-medium">
                      One-time lounge pass
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex flex-col justify-center items-center gap-4">
                    <img
                      className="w-[120px] h-[120px]  rounded-full object-cover"
                      src={slideImgSix}
                      alt="slide-img-6"
                    />
                    <p className="text-center text-brand-blue-100 text-sm font-medium">
                      Surf the web at 30,000 ft.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex flex-col justify-center items-center gap-4">
                    <img
                      className="w-[120px] h-[120px]  rounded-full object-cover"
                      src={slideImgSeven}
                      alt="slide-img-7"
                    />
                    <p className="text-center text-brand-blue-100 text-sm font-medium">
                      787 Dreamliner
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex flex-col justify-center items-center gap-4">
                    <img
                      className="w-[120px] h-[120px]  rounded-full object-cover"
                      src={slideImgTwo}
                      alt="slide-img-2"
                    />
                    <p className="text-center text-brand-blue-100 text-sm font-medium">
                      Decarbonizing air travel
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex flex-col justify-center items-center gap-4">
                    <img
                      className="w-[120px] h-[120px]  rounded-full object-cover"
                      src={slideImgThree}
                      alt="slide-img-3"
                    />
                    <p className="text-center text-brand-blue-100 text-sm font-medium">
                      Recline into more legroom
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex flex-col justify-center items-center gap-4">
                    <img
                      className="w-[120px] h-[120px]  rounded-full object-cover"
                      src={slideImgFour}
                      alt="slide-img-4"
                    />
                    <p className="text-center text-brand-blue-100 text-sm font-medium">
                      Charging Areas
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex flex-col justify-center items-center gap-4">
                    <img
                      className="w-[120px] h-[120px]  rounded-full object-cover"
                      src={slideImgTwo}
                      alt="slide-img-2"
                    />
                    <p className="text-center text-brand-blue-100 text-sm font-medium">
                      Decarbonizing air travel
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex flex-col justify-center items-center gap-4">
                    <img
                      className="w-[120px] h-[120px]  rounded-full object-cover"
                      src={slideImgThree}
                      alt="slide-img-3"
                    />
                    <p className="text-center text-brand-blue-100 text-sm font-medium">
                      Recline into more legroom
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex flex-col justify-center items-center gap-4">
                    <img
                      className="w-[120px] h-[120px]  rounded-full object-cover"
                      src={slideImgFour}
                      alt="slide-img-4"
                    />
                    <p className="text-center text-brand-blue-100 text-sm font-medium">
                      Charging Areas
                    </p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="pt-4 space-y-3">
              <div className="border border-brand-gray-light rounded-md divide-y divide-brand-gray-light">
                <div className="flex justify-between py-6 px-3 sm:px-5">
                  <div className="flex gap-3 sm:gap-5 w-full">
                    <img
                      className="w-12 h-12 md:w-16 md:h-16"
                      src={listImgOne}
                      alt="list img"
                    />
                    <div className="space-y-1">
                      <div className="flex gap-3 items-center">
                        <h2 className="text-base sm:text-lg font-medium text-brand-blue-100">
                          Spirit Airlines
                        </h2>
                        <img src={paper} alt="paper" />
                      </div>
                      <ul className="xl:divide-x divide-brand-gray-25 flex flex-col xl:flex-row gap-2">
                        <li className="text-brand-dark text-opacity-75 text-base leading-none font-medium xl:pr-4">
                          Book with airline
                        </li>
                        <li className="text-brand-dark text-opacity-75 text-base leading-none xl:pl-4">
                          Free 24h cancellation
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex gap-2 md:gap-4 items-center justify-center shrink-0 flex-col md:flex-row">
                    <div className="flex gap-2 sm:gap-4 items-center">
                      <h3 className="text-xl sm:text-2xl font-medium text-brand-blue-100">
                        $1,068
                      </h3>
                      <img
                        className="w-4 sm:w-6 h-4 sm:h-6"
                        src={info}
                        alt="info"
                      />
                    </div>
                    <a
                      href="#"
                      className="px-4 py-3 sm:px-8 sm:py-3 rounded-full bg-brand-red text-white font-medium text-base sm:text-lg leading-none"
                    >
                      Veiw Deal
                    </a>
                  </div>
                </div>
                <div className="flex justify-between py-6 px-3 sm:px-5">
                  <div className="flex gap-3 sm:gap-5 w-full">
                    <img
                      className="w-12 h-12 md:w-16 md:h-16"
                      src={listImgOne}
                      alt="list img"
                    />
                    <div className="space-y-1">
                      <div className="flex gap-3 items-center">
                        <h2 className="text-base sm:text-lg font-medium text-brand-blue-100">
                          Spirit Airlines
                        </h2>
                        <img src={paper} alt="paper" />
                      </div>
                      <ul className="xl:divide-x divide-brand-gray-25 flex flex-col xl:flex-row gap-2">
                        <li className="text-brand-dark text-opacity-75 text-base leading-none font-medium xl:pr-4">
                          Book with airline
                        </li>
                        <li className="text-brand-dark text-opacity-75 text-base leading-none xl:pl-4">
                          Free 24h cancellation
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex gap-2 md:gap-4 items-center justify-center shrink-0 flex-col md:flex-row">
                    <div className="flex gap-2 sm:gap-4 items-center">
                      <h3 className="text-xl sm:text-2xl font-medium text-brand-blue-100">
                        $1,068<sup>.99</sup>
                      </h3>
                      <img
                        className="w-4 sm:w-6 h-4 sm:h-6"
                        src={info}
                        alt="info"
                      />
                    </div>
                    <a
                      href="#"
                      className="px-4 py-3 sm:px-8 sm:py-3 rounded-full bg-brand-red text-white font-medium text-base sm:text-lg leading-none"
                    >
                      Veiw Deal
                    </a>
                  </div>
                </div>
              </div>
              <p className="text-brand-dark text-base text-opacity-75">
                All details are based on the policies, customer feedback and
                price reliability of each booking site.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
