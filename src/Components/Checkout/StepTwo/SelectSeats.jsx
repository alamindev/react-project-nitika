import React from "react";
import check from "../../../assets/images/checkout/c-check.png";
import pen from "../../../assets/images/checkout/pen.svg";
import ArrowRight from "../../Svg/ArrowRight";
import Play from "../../Svg/Play";
export default function SelectYourSeats() {
  return (
    <div className=" bg-white lg:rounded-xl px-4 py-6 xl:p-6 w-full space-y-4">
      <h2 className="font-medium text-xl sm:text-2xl text-dark">
        Select Seats
      </h2>
      <div className="px-5 py-3.5 border bg-brand-blue-20 border-brand-gray-light rounded-lg flex gap-2 items-center">
        <figure>
          <img src={check} alt="check-round" />
        </figure>
        <p className="text-base text-brand-blue-200">
          Your seats have been selected
        </p>
      </div>
      <div className="flex border-y border-x border-brand-blue-50 rounded-[24px] sm:rounded-tr-none overflow-hidden sm:rounded-br-none sm:rounded-tl-[24px] sm:rounded-bl-[24px]">
        <div className="w-[100px] sm:w-[235px] border-r shrink-0 divide-y divide-brand-blue-50">
          <div className="h-[105px] pt-6 px-2 sm:px-5">
            <h3 className="text-base font-medium text-brand-blue-600/50">
              Travelers:
            </h3>
          </div>
          <div className="h-20  flex flex-col justify-center sm:flex-row sm:justify-between max-[400px]:px-2 px-3 sm:px-5 sm:items-center ">
            <h3 className="text-brand-blue-100 text-base sm:text-lg">
              Adult 1:
            </h3>
            <p className="text-brand-blue-100/75 text-base sm:text-lg">
              John Doe
            </p>
          </div>
          <div className="h-20  flex flex-col justify-center sm:flex-row sm:justify-between max-[400px]:px-2 px-3 sm:px-5 sm:items-center ">
            <h3 className="text-brand-blue-100 text-base sm:text-lg">
              Adult 2:
            </h3>
            <p className="text-brand-blue-100/75 text-base sm:text-lg">
              John Doe
            </p>
          </div>
          <div className="h-20  flex flex-col justify-center sm:flex-row sm:justify-between max-[400px]:px-2 px-3 sm:px-5 sm:items-center ">
            <h3 className="text-brand-blue-100 text-base sm:text-lg">
              Child 1:
            </h3>
            <p className="text-brand-blue-100/75 text-base sm:text-lg">
              Bill Joe
            </p>
          </div>
        </div>
        <div className="flex divide-x divide-brand-blue-50 w-full">
          <div className="divide-y divide-brand-blue-50 shrink-0 w-1/2">
            <div className="shrink-0 h-[105px] px-2 sm:px-4 py-2 flex flex-col justify-center items-center">
              <h3 className="text-base lg:text-lg text-center font-medium text-brand-dark/50">
                Depart
              </h3>
              <div className="flex gap-1 items-center">
                <p className="font-medium text-xl md:text-2xl text-brand-dark  uppercase">
                  JFK
                </p>
                <ArrowRight classes="stroke-brand-dark " />
                <p className="font-medium text-xl md:text-2xl text-brand-dark  uppercase">
                  IGI
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 sm:gap-14 h-20 px-2 sm:px-6">
              <button
                type="button"
                className="border border-brand-blue-50 max-[400px]:px-2.5 px-4 sm:px-5 py-2 rounded-full max-[400px]:text-sm text-base text-brand-blue-100"
              >
                Select Seat
              </button>
            </div>
            <div className="flex items-center justify-center gap-4 sm:gap-14 h-20 px-2 sm:px-6">
              <button
                type="button"
                className="border border-brand-blue-50 max-[400px]:px-2.5 px-4 sm:px-5 py-2 rounded-full max-[400px]:text-sm text-base text-brand-blue-100"
              >
                Select Seat
              </button>
            </div>
            <div className="flex items-center justify-center gap-4 sm:gap-14 h-20 px-2 sm:px-6">
              <div className="flex gap-2 items-center">
                <button type="button">
                  <img src={pen} alt="pen" />
                </button>
                <p className="text-base lg:text-lg text-brand-blue-100">
                  10C Aisle
                </p>
              </div>
            </div>
          </div>
          <div className="divide-y divide-brand-blue-50 shrink-0 w-1/2">
            <div className="shrink-0 h-[105px]   px-2 sm:px-4 py-2 flex flex-col justify-center items-center">
              <h3 className="text-base lg:text-lg text-center font-medium text-brand-dark/50">
                Return
              </h3>
              <div className="flex gap-1 items-center">
                <p className="font-medium text-xl md:text-2xl text-brand-dark  uppercase">
                  IGI
                </p>
                <ArrowRight classes="stroke-brand-dark " />
                <p className="font-medium text-xl md:text-2xl text-brand-dark  uppercase">
                  JFK
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 sm:gap-14 h-20 px-2 sm:px-6">
              <button
                type="button"
                className="border border-brand-blue-50 max-[400px]:px-2.5 px-4 sm:px-5 py-2 rounded-full max-[400px]:text-sm text-base text-brand-blue-100"
              >
                Select Seat
              </button>
            </div>
            <div className="flex items-center justify-center gap-4 sm:gap-14 h-20 px-2 sm:px-6">
              <button
                type="button"
                className="border border-brand-blue-50 max-[400px]:px-2.5 px-4 sm:px-5 py-2 rounded-full max-[400px]:text-sm text-base text-brand-blue-100"
              >
                Select Seat
              </button>
            </div>
            <div className="flex items-center justify-center gap-4 sm:gap-14 h-20 px-2 sm:px-6">
              <div className="flex gap-2 items-center">
                <button type="button">
                  <img src={pen} alt="pen" />
                </button>
                <p className="text-base lg:text-lg text-brand-blue-100">
                  12A Aisle
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[275px] mx-auto pt-5 sm:pt-10 pb-2 sm:hidden">
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
