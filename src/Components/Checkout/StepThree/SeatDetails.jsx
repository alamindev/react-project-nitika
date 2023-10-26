import React from "react";
import ArrowRight from "../../Svg/ArrowRight";
export default function SeatDetails() {
  return (
    <div className=" bg-white lg:rounded-xl px-4 py-6 xl:p-6 w-full space-y-4">
      <div className="space-y-1">
        <h2 className="font-medium text-xl sm:text-2xl text-dark">
          Seat Details
        </h2>
        <p className="text-lg text-brand-gray-700">
          Your seats have been selected. Please review and confirm your
          selection.
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
              <p className="text-center text-lg text-brand-blue-100">
                10A Aisle
              </p>
            </div>
            <div className="flex items-center justify-center gap-4 sm:gap-14 h-20 px-2 sm:px-6">
              <p className="text-center text-lg text-brand-blue-100">
                10B Aisle
              </p>
            </div>
            <div className="flex items-center justify-center gap-4 sm:gap-14 h-20 px-2 sm:px-6">
              <p className="text-center text-lg text-brand-blue-100">
                10C Aisle
              </p>
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
              <p className="text-center text-lg text-brand-blue-100">
                10A Aisle
              </p>
            </div>
            <div className="flex items-center justify-center gap-4 sm:gap-14 h-20 px-2 sm:px-6">
              <p className="text-center text-lg text-brand-blue-100">
                12B Aisle
              </p>
            </div>
            <div className="flex items-center justify-center gap-4 sm:gap-14 h-20 px-2 sm:px-6">
              <p className="text-center text-lg text-brand-blue-100">
                12C Aisle
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
