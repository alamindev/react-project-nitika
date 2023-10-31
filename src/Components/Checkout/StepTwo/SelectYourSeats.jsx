import React, { useState } from "react";
import airplaneMobile from "../../../assets/images/checkout/airplane-mobile.svg";
import airplane from "../../../assets/images/checkout/airplane.svg";
import checkRed from "../../../assets/images/checkout/check-red.svg";
import iconOne from "../../../assets/images/checkout/icon-1.svg";
import iconTwo from "../../../assets/images/checkout/icon-2.svg";
import iconThree from "../../../assets/images/checkout/icon-3.svg";
import iconFour from "../../../assets/images/checkout/icon-4.svg";
import iconFive from "../../../assets/images/checkout/icon-5.svg";
import iconSix from "../../../assets/images/checkout/icon-6.svg";
import OfficeChair from "../../../assets/images/checkout/office-chair.svg";
import spirit from "../../../assets/images/checkout/spirit-airlines.png";
import MissedASeatModal from "../../Checkout/MissedASeatModal";
import ArrowRight from "../../Svg/ArrowRight";
import PlaneSeat from "./PlaneSeat";
import PlaneTopArea from "./PlaneTopArea";
export default function SelectYourSeats() {
  let [missedASeatModal, setmissedASeatModal] = useState(false);

  const handleMissedSeatPopup = () => {
    setmissedASeatModal(true);
  };

  const closeMissedSeatModal = () => {
    setmissedASeatModal(false);
  };
  return (
    <>
      <div className=" bg-white lg:rounded-xl px-4 py-6 xl:p-6 w-full space-y-6">
        <div className="flex gap-4 items-start">
          <figure className="shrink-0">
            <img src={OfficeChair} alt="office chair" />
          </figure>
          <div className="space-y-2">
            <h2 className="font-medium text-xl sm:text-2xl text-dark">
              Select your seats
            </h2>
            <ul className="grid grid-cols-1 gap-2">
              <li className="flex gap-2 items-center">
                <figure className="shrink-0">
                  <img src={checkRed} alt="check-red" />
                </figure>
                <p className="text-base text-dark !leading-tight">
                  Find the most comfortable seats for your group.
                </p>
              </li>
              <li className="flex gap-2 items-center">
                <figure className="shrink-0">
                  <img src={checkRed} alt="check-red" />
                </figure>
                <p className="text-base text-dark !leading-tight">
                  Ge the additional legroom you need.
                </p>
              </li>
              <li className="flex gap-2 items-center">
                <figure className="shrink-0">
                  <img src={checkRed} alt="check-red" />
                </figure>
                <p className="text-base text-dark !leading-tight">
                  Save money - adding seats after booking is usually more
                  expensive.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex -mx-4 sm:mx-0 items-stretch divide-x gap-2.5 py-4   border-y relative border-brand-gray-50">
          <div className="group cursor-pointer active px-4 sm:px-5 sm:first:pl-3 max-sm:w-full">
            <div className=" flex gap-3 items-start max-sm:justify-center   relative group-[.active]:after:opacity-100    after:opacity-0 after:absolute after:w-full after:left-0 after:-bottom-[16px] after:h-1 after:rounded-t-lg after:bg-brand-blue-500">
              <figure className="shrink-0">
                <img className="w-6 h-6" src={spirit} alt="spirit-airlines" />
              </figure>
              <div className="sm:pr-5  ">
                <h3 className="max-[380px]:text-sm text-base md:text-lg font-medium text-dark group-[.active]:text-brand-blue-500 group-hover:text-brand-blue-500">
                  Flight 934
                </h3>
                <div className="flex gap-1 items-center">
                  <p className="font-medium text-base text-dark group-[.active]:text-brand-blue-500 group-hover:text-brand-blue-500  uppercase">
                    JFK
                  </p>
                  <ArrowRight classes="stroke-brand-dark group-hover:stroke-brand-blue-500 group-[.active]:stroke-brand-blue-500" />
                  <p className="font-medium text-base text-dark group-[.active]:text-brand-blue-500 group-hover:text-brand-blue-500  uppercase">
                    IGI
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="group cursor-pointer px-5 first:pl-3 max-sm:w-full">
            <div className=" max-sm:justify-center  flex gap-3 items-start relative group-[.active]:after:opacity-100  after:opacity-0 after:absolute after:w-full after:left-0 after:-bottom-[16px] after:h-1 after:rounded-t-lg after:bg-brand-blue-500">
              <figure className="shrink-0">
                <img className="w-6 h-6" src={spirit} alt="spirit-airlines" />
              </figure>
              <div className="sm:pr-5 ">
                <h3 className="max-[380px]:text-sm text-base md:text-lg font-medium text-dark group-[.active]:text-brand-blue-500 group-hover:text-brand-blue-500">
                  Flight 934
                </h3>
                <div className="flex gap-1 items-center">
                  <p className="font-medium text-base text-dark group-[.active]:text-brand-blue-500 group-hover:text-brand-blue-500  uppercase">
                    JFK
                  </p>
                  <ArrowRight classes="stroke-brand-dark group-hover:stroke-brand-blue-500 group-[.active]:stroke-brand-blue-500" />
                  <p className="font-medium text-base text-dark group-[.active]:text-brand-blue-500 group-hover:text-brand-blue-500  uppercase">
                    IGI
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-stretch gap-2 sm:gap-4">
          <div className="group active cursor-pointer select-none max-sm:w-full">
            <div className="rounded-lg sm:rounded-xl border  border-brand-gray-light px-3 py-2.5 sm:py-2 flex gap-4 items-center   group-[.active]:border-brand-blue-500 group-hover:border-brand-blue-500">
              <figure className="shrink-0">
                <img
                  src={iconOne}
                  className="h-6 sm:h-10 w-6 sm:w-10"
                  alt="spirit-airlines"
                />
              </figure>
              <div className="sm:pr-5 max-sm:w-full max-sm:flex justify-between">
                <h3 className="max-[380px]:text-sm text-base md:text-lg !leading-[1.4] font-medium text-brand-dark">
                  1. John Doe
                </h3>
                <div className="flex gap-1 items-center  ">
                  <p className="text-brand-blue-400 max-[380px]:text-sm text-base font-medium  ">
                    4E
                  </p>
                  <p className="max-[380px]:text-sm text-base text-brand-dark">
                    - $379.<sup>00</sup>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="group cursor-pointer select-none max-sm:w-full">
            <div className="rounded-lg sm:rounded-xl border  border-brand-gray-light px-3 py-2.5 sm:py-2 flex gap-4 items-center   group-[.active]:border-brand-blue-500 group-hover:border-brand-blue-500">
              <figure className="shrink-0">
                <img
                  src={iconTwo}
                  className="h-6 sm:h-10 w-6 sm:w-10"
                  alt="icon two"
                />
              </figure>
              <div className="sm:pr-5 max-sm:w-full max-sm:flex justify-between">
                <h3 className="max-[380px]:text-sm text-base md:text-lg !leading-[1.4] font-medium text-brand-dark">
                  1. John Doe
                </h3>
                <div className="flex gap-1 items-center  ">
                  <p className="text-brand-blue-400 max-[380px]:text-sm text-base font-medium  ">
                    3E
                  </p>
                  <p className="max-[380px]:text-sm text-base text-brand-dark">
                    - $450.<sup>39</sup>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="group cursor-pointer select-none max-sm:w-full">
            <div className="rounded-lg sm:rounded-xl border  border-brand-gray-light px-3 py-2.5 sm:py-2 flex gap-4 items-center   group-[.active]:border-brand-blue-500 group-hover:border-brand-blue-500">
              <figure className="shrink-0">
                <img
                  src={iconThree}
                  className="h-6 sm:h-10 w-6 sm:w-10"
                  alt="Icon three"
                />
              </figure>
              <div className="sm:pr-5 max-sm:w-full max-sm:flex justify-between">
                <h3 className="max-[380px]:text-sm text-base md:text-lg !leading-[1.4] font-medium text-brand-dark">
                  3. Bill Doe
                </h3>
                <div className="flex gap-1 items-center  ">
                  <p className="text-brand-blue-400 max-[380px]:text-sm text-base font-medium  ">
                    3E
                  </p>
                  <p className="max-[380px]:text-sm text-base text-brand-dark">
                    - $0.<sup>00</sup>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="group cursor-pointer select-none max-sm:w-full">
            <div className="rounded-lg sm:rounded-xl border  border-brand-gray-light px-3 py-2.5 sm:py-2 flex gap-4 items-center   group-[.active]:border-brand-blue-500 group-hover:border-brand-blue-500">
              <figure className="shrink-0">
                <img
                  src={iconFour}
                  className="h-6 sm:h-10 w-6 sm:w-10"
                  alt="Icon four"
                />
              </figure>
              <div className="sm:pr-5 max-sm:w-full max-sm:flex justify-between">
                <h3 className="max-[380px]:text-sm text-base md:text-lg !leading-[1.4] font-medium text-brand-dark">
                  4. Terrence Doe
                </h3>
                <div className="flex gap-1 items-center  ">
                  <p className="text-brand-blue-400 max-[380px]:text-sm text-base font-medium  ">
                    Bassinet Area
                  </p>
                  <p className="max-[380px]:text-sm text-base text-brand-dark">
                    - $0.<sup>00</sup>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="group cursor-pointer select-none max-sm:w-full">
            <div className="rounded-lg sm:rounded-xl border  border-brand-gray-light px-3 py-2.5 sm:py-2 flex gap-4 items-center   group-[.active]:border-brand-blue-500 group-hover:border-brand-blue-500">
              <figure className="shrink-0">
                <img
                  src={iconFive}
                  className="h-6 sm:h-10 w-6 sm:w-10"
                  alt="spirit-airlines"
                />
              </figure>
              <div className="sm:pr-5 max-sm:w-full max-sm:flex justify-between">
                <h3 className="max-[380px]:text-sm text-base md:text-lg !leading-[1.4] font-medium text-brand-dark">
                  5. Claire Doe
                </h3>
                <div className="flex gap-1 items-center">
                  <p className="max-[380px]:text-sm text-base text-brand-dark">
                    Select Seat
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="group cursor-pointer select-none max-sm:w-full">
            <div className="rounded-lg sm:rounded-xl border  border-brand-gray-light px-3 py-2.5 sm:py-2 flex gap-4 items-center   group-[.active]:border-brand-blue-500 group-hover:border-brand-blue-500">
              <figure className="shrink-0">
                <img
                  src={iconSix}
                  className="h-6 sm:h-10 w-6 sm:w-10"
                  alt="icon six"
                />
              </figure>
              <div className="sm:pr-5 max-sm:w-full max-sm:flex justify-between">
                <h3 className="max-[380px]:text-sm text-base md:text-lg !leading-[1.4] font-medium text-brand-dark">
                  6. Christine Smith
                </h3>
                <div className="flex gap-1 items-center">
                  <p className="max-[380px]:text-sm text-base text-brand-dark/70">
                    Select Seat
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative bg-brand-blue-10 -mx-4 xl:-mx-6   h-[2000px] sm:min-h-[2350px] overflow-hidden">
          <figure className="absolute w-full left-0 top-0 right-0  ">
            <img
              className="w-full sm:block hidden h-[2000px] sm:h-[2500px] object-cover object-top "
              src={airplane}
              alt="airplane"
            />
            <img
              className="w-full h-[2000px]  sm:hidden sm:h-[2500px] object-cover object-top "
              src={airplaneMobile}
              alt="airplane"
            />
          </figure>
          <PlaneTopArea />
          <div className="relative px-1 min-[400px]:px-3 sm:!px-0 md:pt-72">
            <div className="max-w-[420px] sm:max-w-[500px] mx-auto ">
              <div className="px-3 md:px-6 pt-6 sm:pt-10 pb-6">
                <PlaneSeat />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 justify-between items-center ">
          <button
            type="button"
            className="flex max-w-[200px] sm:max-w-full w-full sm:w-auto justify-center gap-2 sm:gap-4 items-center rounded-full px-5 sm:px-8 py-3 sm:py-3.5 hover:bg-opacity-90 transition-all bg-brand-blue-50 text-base sm:text-lg font-medium text-brand-blue-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="15"
              fill="none"
              viewBox="0 0 8 15"
            >
              <path
                stroke="#001140"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 1.5l-6 6 6 6"
              ></path>
            </svg>
            <span>Previous seating</span>
          </button>
          <button
            onClick={handleMissedSeatPopup}
            type="button"
            className="flex gap-2 sm:gap-4 shrink-0 justify-center items-center rounded-full px-10 sm:px-8 py-3 sm:py-3.5 hover:bg-opacity-90 transition-all text-white bg-brand-blue-500 text-base sm:text-lg font-medium"
          >
            <span>Next</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="15"
              fill="none"
              viewBox="0 0 8 15"
            >
              <path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1.5l6 6-6 6"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <MissedASeatModal
        modal={missedASeatModal}
        closeModal={closeMissedSeatModal}
      />
    </>
  );
}
