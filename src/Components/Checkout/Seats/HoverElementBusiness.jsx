import React, { useEffect, useRef, useState } from "react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import arrowLeft from "../../../assets/images/checkout/arrow-left.png";
import sliderOne from "../../../assets/images/checkout/slider-1.png";
import sliderTwo from "../../../assets/images/checkout/slider-2.png";
import sliderThree from "../../../assets/images/checkout/slider-3.png";
export default function HoverElementBusiness({ hidePopUp }) {
  const contentOneRef = useRef(null);
  const [isOneExpanded, setIsOneExpanded] = useState(false);
  const [contentOneHeight, setcontentOneHeight] = useState(0);
  const togglerOne = () => {
    setIsOneExpanded(!isOneExpanded);
    setcontentOneHeight(isOneExpanded ? 0 : contentOneRef.current.scrollHeight);
  };
  const contentTwoRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [contentTwoHeight, setcontentTwoHeight] = useState(0);
  const togglerTwo = () => {
    setIsExpanded(!isExpanded);
    setcontentTwoHeight(isExpanded ? 0 : contentTwoRef.current.scrollHeight);
  };
  useEffect(() => {
    setIsOneExpanded(true);
    setcontentOneHeight(contentTwoRef.current.scrollHeight);
  }, []);
  return (
    <>
      <div className="sm:absolute sm:w-[335px] sm:top-12 lg:-top-4  sm:opacity-0 sm:invisible max-lg:group-[.active]/seat:opacity-100 max-lg:group-[.active]/seat:visible lg:group-hover/seat:opacity-100 lg:group-hover/seat:visible sm:-left-[170px] lg:left-full sm:ml-4 fixed w-full max-sm:top-full max-sm:group-[.active]/seat:top-0  transition-all duration-300  max-sm:inset-x-0 max-sm:bg-white max-sm:z-[999] max-sm:mt-28 z-40 rounded-t-2xl  max-sm:min-h-[calc(100vh-115px)] max-sm:max-h-[calc(100vh-115px)] max-sm:overflow-y-auto">
        <figure className="absolute sm:block hidden left-1/2 -top-5 lg:-left-5 max-lg:-translate-x-1/2 lg:top-4 max-lg:rotate-90">
          <img src={arrowLeft} alt="arrow-left" />
        </figure>
        <div className="relative rounded-2xl border border-neutral-100 shadow-5xl bg-white">
          <div className="p-4 space-y-3">
            <div className="flex justify-between items-center">
              <h3 className="font-medium text-base text-brand-dark">
                Business Class Seat
              </h3>
              <h4 className="font-medium text-base text-brand-dark">6E</h4>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <h3 className="text-sm text-brand-dark font-medium">
                  $379<sup>.00</sup>{" "}
                </h3>
                <p className="text-brand-dark/75 text-sm">+ ESA fee applies</p>
              </div>
              <p className="text-brand-dark/75 text-sm">Preffered Seat</p>
            </div>
          </div>
          <div className="overflow-y-auto popuphover">
            <div className="relative">
              <Swiper
                slidesPerView={1}
                modules={[Navigation, Pagination]}
                spaceBetween={15}
                pagination={{ clickable: true }}
                navigation={{
                  nextEl: ".touring-next",
                  prevEl: ".touring-prev",
                }}
              >
                <SwiperSlide className="">
                  <figure>
                    <img
                      className="h-[230px] w-full object-cover"
                      src={sliderOne}
                      alt="slider one"
                    />
                  </figure>
                </SwiperSlide>
                <SwiperSlide className="">
                  <figure>
                    <img
                      className="h-[230px] w-full object-cover"
                      src={sliderTwo}
                      alt="slider two"
                    />
                  </figure>
                </SwiperSlide>
                <SwiperSlide className="">
                  <figure>
                    <img
                      className="h-[230px] w-full object-cover"
                      src={sliderThree}
                      alt="slider three"
                    />
                  </figure>
                </SwiperSlide>
              </Swiper>
              <div className="flex z-20 px-4 justify-between items-center absolute w-full top-[50%] left-0 translate-y-[-50%]">
                <button type="button" className="touring-prev">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#fff"
                      d="M11.992 0a12 12 0 1012 12 12.013 12.013 0 00-12-12zm2 15.5a.5.5 0 01-.787.409l-5-3.5a.518.518 0 010-.818l5-3.5a.5.5 0 01.787.409v7z"
                    ></path>
                  </svg>
                </button>
                <button type="button" className="touring-next">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#fff"
                      d="M11.992 0a12 12 0 11-12 12 12.013 12.013 0 0112-12zm-2 15.5a.5.5 0 00.787.409l5-3.5a.518.518 0 000-.818l-5-3.5a.5.5 0 00-.787.409v7z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-4 space-y-1">
              <h3 className="font-medium text-brand-dark text-xl">
                Comfortable Seats
              </h3>
              <p className="text-base text-brand-dark">
                Settle in with comfortable seats and an ecoTHREAD blanket made
                from 100% recycled plastic bottles.",
              </p>
            </div>
            <div className="border-t border-brand-gray-80 pb-3 divide-y divide-brand-gray-80">
              <div className="px-4">
                <button
                  type="button"
                  onClick={togglerOne}
                  className="flex w-full justify-between items-center gap-2 font-medium text-lg text-brand-dark py-3"
                >
                  <span>Seat Details</span>
                  <svg
                    className={`transition-all duration-300 ${
                      isOneExpanded ? "rotate-180" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="8"
                    fill="none"
                    viewBox="0 0 12 8"
                  >
                    <path
                      stroke="#001140"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10.992 1.5l-5 5-5-5"
                    ></path>
                  </svg>
                </button>
                <div
                  className="w-full max-h-0 overflow-hidden transition-all duration-300 ease-in-out"
                  style={{ maxHeight: contentOneHeight }}
                  ref={contentOneRef}
                >
                  <ul className="divide-y divide-brand-gray-80 pt-1">
                    <li className="flex justify-between items-center py-2">
                      <p className="text-base text-brand-dark/75">Leg Space</p>
                      <p className="text-base font-medium text-brand-dark">
                        29 Inches
                      </p>
                    </li>
                    <li className="flex justify-between items-center py-2">
                      <p className="text-base text-brand-dark/75">Tilt</p>
                      <p className="text-base font-medium text-brand-dark">
                        Normal
                      </p>
                    </li>
                    <li className="flex justify-between items-center py-2">
                      <p className="text-base text-brand-dark/75">Tilt</p>
                      <p className="text-base font-medium text-brand-dark">
                        Normal
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="px-4">
                <button
                  type="button"
                  onClick={togglerTwo}
                  className="flex w-full justify-between items-center gap-2 font-medium text-lg text-brand-dark py-3"
                >
                  <span>Selected Seats</span>
                  <svg
                    className={`transition-all duration-300 ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="8"
                    fill="none"
                    viewBox="0 0 12 8"
                  >
                    <path
                      stroke="#001140"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10.992 1.5l-5 5-5-5"
                    ></path>
                  </svg>
                </button>
                <div
                  className="w-full max-h-0 overflow-hidden transition-all duration-300 ease-in-out"
                  style={{ maxHeight: contentTwoHeight }}
                  ref={contentTwoRef}
                >
                  <ul className="divide-y divide-brand-gray-80 pt-1">
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
                    <li className="flex justify-between items-center py-2">
                      <p className="text-base text-brand-dark font-medium">
                        4. Terrence Doe
                      </p>
                      <button
                        type="button"
                        className="px-3 py-0.5 text-sm font-medium rounded-full bg-brand-blue-400 text-white"
                      >
                        Select
                      </button>
                    </li>
                    <li className="flex justify-between items-center py-2">
                      <p className="text-base text-brand-dark font-medium">
                        5. Claire Doe
                      </p>
                      <button
                        type="button"
                        className="px-3 py-0.5 text-sm font-medium rounded-full bg-brand-blue-400 text-white"
                      >
                        Select
                      </button>
                    </li>
                    <li className="flex justify-between items-center py-2">
                      <p className="text-base text-brand-dark font-medium">
                        6. Christine Smith
                      </p>
                      <button
                        type="button"
                        className="px-3 py-0.5 text-sm font-medium rounded-full bg-brand-blue-400 text-white"
                      >
                        Select
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 shadow-3xl space-y-3">
            <div className="rounded-lg border px-3 py-2.5 border-brand-red-50 bg-brand-red-20 flex gap-4 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 16 16"
              >
                <path
                  fill="#B92313"
                  d="M15.791 13.026L9.474 1.38A1.668 1.668 0 008.791.7a1.693 1.693 0 00-2.284.68L.191 13.026A1.678 1.678 0 001.677 15.5h12.628a1.7 1.7 0 001.308-.615 1.673 1.673 0 00.178-1.859zm-7.8.474a1 1 0 110-2 1 1 0 010 2zm1-3.5a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v4z"
                ></path>
              </svg>
              <p className="text-brand-red-800 text-base">
                This is a windowsless seat
              </p>
            </div>
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
