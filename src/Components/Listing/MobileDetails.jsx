import React from "react";
import { Link } from "react-router-dom";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import remove from "../../assets/images/listing/e-remove.svg";
import listImgTwo from "../../assets/images/listing/list-img-2.png";
import Love from "../Svg/Love";
import Details from "./Details";
export default function MobileDetails() {
  return (
    <div className="w-full lg:w-[calc(100vw-330px)] space-y-4 mx-auto 2xl:w-[calc(100vw-388px)] 3xl:w-[60%]">
      <div className="relative bg-white rounded-xl overflow-hidden">
        <div className="relative">
          <div className="w-[60px] h-[60px] hidden md:block rounded-full bg-brand-gray-600 top-1/2 -translate-y-1/2 -left-8 absolute"></div>
          <div className="w-[60px] h-[60px] hidden md:block rounded-full bg-brand-gray-600 top-1/2 -translate-y-1/2 -right-8 absolute"></div>
          <div className="flex md:divide-x max-[400px]:gap-2 gap-8 md:gap-0 px-4 pb-4 md:px-6 xl:px-14 ">
            <div className="md:pr-6 xl:pr-14 xl:pl-5 lg:relative pt-20 w-full">
              <div className="uppercase text-brand-blue-100 bg-[#E6EBEF]  px-6 py-3 rounded-b-xl absolute top-0">
                no change fees
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
                          SPIRIT
                        </p>
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
                        src={listImgTwo}
                        alt="list-img-one"
                      />
                      <div className="space-y-1">
                        <h3 className="text-base xl:text-xl font-bold text-brand-blue-100">
                          9:30 pm - 1:10 am+2
                        </h3>
                        <p className="uppercase text-brand-dark text-opacity-75 ">
                          SPIRIT
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
            </div>
            <div className="md:pl-4 xl:pl-8 xl:pr-4 py-8 space-y-10 flex justify-center items-center max-[400px]:w-[120px] w-[170px] sm:w-auto md:block">
              <div className="space-y-3">
                <h2 className="text-brand-blue-100 text-xl md:text-[32px] leading-none font-bold">
                  $897
                </h2>
                <p className="text-12 md:text-sm sm:text-base text-brand-dark">
                  Price per person (incl. taxes & fees)
                </p>
                <a
                  href="#"
                  className="md:inline-block hidden px-10 py-2.5 bg-brand-red rounded-full text-white hover:bg-opacity-90 transition-all  "
                >
                  Select Deal
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg">
        <div className="flex justify-center pt-8">
          <Link
            to={`/listing`}
            className="w-[32px] h-[32px] rounded-full flex justify-center items-center border border-brand-gray-light"
          >
            <img src={remove} alt="remove" />
          </Link>
        </div>
        <Details border="!border-0" />
      </div>
    </div>
  );
}
