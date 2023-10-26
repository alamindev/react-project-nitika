import React, { useEffect, useState } from "react";
import spirit from "../../../assets/images/checkout/spirit-airlines-lg.png";
import ArrowRight from "../../Svg/ArrowRight";
import Play from "../../Svg/Play";
import FareLoader from "./FareLoader";
import FareTable from "./FareTable";
export default function FareSelection() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <div className=" bg-white lg:rounded-xl px-4 py-6 xl:p-6 w-full">
      <div className="space-y-3">
        <h2 className="text-xl md:text-2xl text-dark font-medium">
          Fare Selection
        </h2>
        {!isLoading ? (
          <>
            <div className="flex flex-wrap items-stretch gap-2.5">
              <div className="group active">
                <div className="rounded-xl border border-dashed border-brand-gray-light p-2 flex gap-4 items-center  group-[.active]:bg-brand-blue-600 group-hover:bg-brand-blue-600 group-[.active]:border-brand-blue-600 group-hover:border-brand-blue-600">
                  <figure className="shrink-0">
                    <img src={spirit} alt="spirit-airlines" />
                  </figure>
                  <div className="pr-5">
                    <h3 className="text-sm md:text-base font-medium text-brand-blue-600/50 group-[.active]:text-white/50 group-hover:text-white/50">
                      Flight 1
                    </h3>
                    <div className="flex gap-1 items-center">
                      <p className="font-medium text-base md:text-xl text-brand-blue-600 group-[.active]:text-white group-hover:text-white  uppercase">
                        JFK
                      </p>
                      <ArrowRight classes="stroke-brand-blue-600 group-hover:stroke-white group-[.active]:stroke-white" />
                      <p className="font-medium text-base md:text-xl text-brand-blue-600 group-[.active]:text-white group-hover:text-white  uppercase">
                        IGI
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group">
                <div className="rounded-xl border border-dashed border-brand-gray-light p-2 flex gap-4 items-center  group-[.active]:bg-brand-blue-600 group-hover:bg-brand-blue-600 group-[.active]:border-brand-blue-600 group-hover:border-brand-blue-600">
                  <figure className="shrink-0">
                    <img src={spirit} alt="spirit-airlines" />
                  </figure>
                  <div className="pr-5">
                    <h3 className="text-sm md:text-base font-medium text-brand-blue-600/50 group-[.active]:text-white/50 group-hover:text-white/50">
                      Flight 2
                    </h3>
                    <div className="flex gap-1 items-center">
                      <p className="font-medium text-base md:text-xl text-brand-blue-600 group-[.active]:text-white group-hover:text-white  uppercase">
                        IGI
                      </p>
                      <ArrowRight classes="stroke-brand-blue-600 group-hover:stroke-white group-[.active]:stroke-white" />
                      <p className="font-medium text-base md:text-xl text-brand-blue-600 group-[.active]:text-white group-hover:text-white  uppercase">
                        JFK
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <FareTable />
          </>
        ) : (
          <div className="space-y-3">
            <div className="flex gap-3 ">
              <div className=" rounded bg-brand-gray-light h-[75px] shadow-inner w-[190px] shrink-0 animate-pulse"></div>
              <div className=" rounded bg-brand-gray-100 h-[75px] shadow-inner w-[190px] shrink-0 animate-pulse"></div>
              <div className=" rounded bg-brand-gray-100 h-[75px] shadow-inner w-[190px] shrink-0 animate-pulse"></div>
              <div className=" rounded bg-brand-gray-100 h-[75px] shadow-inner w-[190px] shrink-0 animate-pulse"></div>
            </div>
            <FareLoader />
          </div>
        )}
      </div>
      <div className="max-w-[275px] mx-auto pt-5 sm:pt-10 pb-2">
        <div className="flex w-full justify-between gap-8 items-center">
          <div className="group  ">
            <button
              type="button"
              className="bg-brand-gray-600 w-12 h-12 group-[.active]:bg-brand-blue-500 flex justify-center items-center rounded-full"
            >
              <Play clasess="fill-brand-blue-dark group-[.active]:fill-white rotate-180" />
            </button>
          </div>
          <ul className="flex gap-2">
            <li className="group ">
              <div className="w-3 h-3 rounded-full bg-brand-gray-600 group-[.active]:bg-brand-blue-500"></div>
            </li>
            <li className="group">
              <div className="w-3 h-3 rounded-full bg-brand-gray-600 group-[.active]:bg-brand-blue-500"></div>
            </li>
            <li className="group">
              <div className="w-3 h-3 rounded-full bg-brand-gray-600 group-[.active]:bg-brand-blue-500"></div>
            </li>
            <li className="group active">
              <div className="w-3 h-3 rounded-full bg-brand-gray-600 group-[.active]:bg-brand-blue-500"></div>
            </li>
            <li className="group">
              <div className="w-3 h-3 rounded-full bg-brand-gray-600 group-[.active]:bg-brand-blue-500"></div>
            </li>
            <li className="group">
              <div className="w-3 h-3 rounded-full bg-brand-gray-600 group-[.active]:bg-brand-blue-500"></div>
            </li>
          </ul>
          <div className="group active">
            <button
              type="button"
              className="bg-brand-gray-600 w-12 h-12 group-[.active]:bg-brand-blue-500 flex justify-center items-center rounded-full"
            >
              <Play clasess="fill-brand-blue-dark group-[.active]:fill-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
