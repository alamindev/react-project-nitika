import React from "react";
import "swiper/css";
import "swiper/css/scrollbar";
import arrowLeft from "../../../assets/images/checkout/arrow-left.png";
export default function HoverElementBusiness({ hidePopUp }) {
  return (
    <>
      <div className="sm:absolute sm:w-[335px] sm:top-12 lg:-top-4 sm:opacity-0 sm:invisible max-lg:group-[.active]/seat:opacity-100 max-lg:group-[.active]/seat:visible lg:group-hover/seat:opacity-100 lg:group-hover/seat:visible sm:-left-[170px] lg:left-full sm:ml-4 fixed w-full max-sm:-bottom-full max-sm:group-[.active]/seat:bottom-0  transition-all duration-300  max-sm:inset-x-0 max-sm:bg-white max-sm:z-[999] max-sm:mt-28 z-40 rounded-t-2xl max-sm:max-h-[calc(100vh-115px)] max-sm:overflow-y-auto">
        <figure className="absolute sm:block hidden left-1/2 -top-5 lg:-left-5 max-lg:-translate-x-1/2 lg:top-4 max-lg:rotate-90">
          <img src={arrowLeft} alt="arrow-left" />
        </figure>
        <div className="relative rounded-2xl shadow-5xl bg-white">
          <div className="p-4 space-y-1.5">
            <h3 className="font-medium text-base text-center text-brand-dark">
              Assign Seat 21G to
            </h3>
            <div className="flex items-center justify-center gap-2">
              <h3 className="text-sm text-brand-dark font-medium">
                $109<sup>.00</sup>
              </h3>
              <p className="text-brand-dark/75 text-sm">+ ESA fee applies</p>
            </div>
          </div>
          <div className="px-4 space-y-4 pb-4">
            <ul className="divide-y divide-brand-gray-80 pt-1  border-t border-brand-gray-80">
              <li className="flex justify-between items-center py-2">
                <p className="text-base text-brand-dark font-medium">
                  1. John Doe
                </p>
                <button
                  type="button"
                  className="px-3 py-0.5 text-sm font-medium rounded-full bg-brand-blue-50 text-brand-blue-600"
                >
                  Change
                </button>
              </li>
              <li className="flex justify-between items-center py-2">
                <p className="text-base text-brand-dark font-medium">
                  2. Jane Doe
                </p>
                <button
                  type="button"
                  className="px-3 py-0.5 text-sm font-medium rounded-full bg-brand-blue-50 text-brand-blue-600"
                >
                  Change
                </button>
              </li>
              <li className="flex justify-between items-center py-2">
                <p className="text-base text-brand-dark font-medium">
                  3. Bill Doe
                </p>
                <button
                  type="button"
                  className="px-3 py-0.5 text-sm font-medium rounded-full bg-brand-blue-50 text-brand-blue-600"
                >
                  Change
                </button>
              </li>
            </ul>
            <button
              type="button"
              className="inline-block w-full rounded-full px-4 py-2.5 text-brand-dark text-lg font-medium bg-brand-gray-30"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
      <div
        onClick={hidePopUp}
        className="max-sm:fixed sm:hidden opacity-0 invisible max-sm:group-[.active]/seat:opacity-100 max-sm:group-[.active]/seat:visible  transition-all duration-300 max-sm:inset-0 max-sm:bg-black/50 max-sm:z-50   "
      ></div>
    </>
  );
}
