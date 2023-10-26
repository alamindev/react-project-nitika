import React from "react";

export default function Steps({ step }) {
  return (
    <div className="w-full lg:w-[960px] mx-auto pt-7 md:pt-9 pb-4 ">
      <div
        id="step"
        className={`group relative ${
          (step === 2 || step === 3) && "step-two"
        } ${step === 3 && "step-three"}`}
      >
        <div className="px-20 sm:px-32 md:px-36  lg:px-40  -mb-9">
          <div className="relative">
            <div className="w-full h-2 bg-brand-gray-100 ">
              <span className="sr-only">line progress</span>
            </div>
            <div className="group-[.step-two]:w-1/2 w-0 group-[.step-three]:!w-full h-2 absolute inset-0 bg-brand-blue-50">
              <span className="sr-only">line progress overlay</span>
            </div>
          </div>
        </div>
        <ul className="flex justify-between max-w-full relative">
          <li className="flex gap-3 flex-col justify-start w-[320px] items-center">
            <div className="w-[60px] h-[60px] rounded-full border-[8px] border-brand-blue-50 group-[.step-two]:bg-brand-blue-50 bg-white flex justify-center items-center">
              <p className="text-2xl font-bold text-brand-blue-600 group-[.step-two]:text-brand-blue-600/50 ">
                1
              </p>
            </div>
            <p className="text-center text-sm md:text-lg text-brand-blue-600 group-[.step-two]:text-brand-blue-600/50 ">
              Traveler & Fare
            </p>
          </li>
          <li className="flex gap-3 flex-col justify-start w-[320px] items-center">
            <div className="w-[60px] h-[60px] rounded-full border-[8px] group-[.step-two]:border-brand-blue-50 group-[.step-three]:bg-brand-blue-50 border-brand-gray-100  bg-white flex justify-center items-center">
              <p className="text-2xl font-bold text-brand-blue-600/50 group-[.step-two]:text-brand-blue-600 group-[.step-three]:text-brand-blue-600/50">
                2
              </p>
            </div>
            <p className="text-center text-sm md:text-lg text-brand-blue-600/50 group-[.step-two]:text-brand-blue-600 group-[.step-three]:text-brand-blue-600/50">
              Add-Ons
            </p>
          </li>
          <li className="flex gap-3 flex-col justify-start w-[320px] items-center">
            <div className="w-[60px] h-[60px] rounded-full border-[8px] border-brand-gray-100  bg-white flex justify-center items-center group-[.step-three]:border-brand-blue-50">
              <p className="text-2xl font-bold text-brand-blue-600/50 group-[.step-three]:text-brand-blue-600">
                3
              </p>
            </div>
            <p className="text-center text-sm md:text-lg text-brand-blue-600/50 group-[.step-three]:text-brand-blue-600 ">
              Payment & Overview
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
