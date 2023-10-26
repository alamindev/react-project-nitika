import React, { useEffect, useState } from "react";
import usaFlag from "../../../../assets/images/checkout/usa-flag.svg";
export default function Details({ handlePopup }) {
  const [isInputActive, setIsInputActive] = useState(false);
  const [phone, setPhone] = useState("622-1963");
  const [isLoading, setIsLoading] = useState(true);

  const handleInputFocus = () => {
    setIsInputActive(true);
  };

  const handleInputBlur = () => {
    setIsInputActive(phone !== "");
  };

  const handleInputChange = (event) => {
    setPhone(event.target.value);
  };
  useEffect(() => {
    setIsInputActive(phone !== "");
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="space-y-3">
      <div className="flex max-[400px]:flex-col gap-2 justify-between sm:items-center">
        <h2 className="text-xl lg:text-2xl font-medium text-dark">
          Travelers Details
        </h2>
        {!isLoading ? (
          <div className="flex items-center gap-2">
            <p className="text-base lg:text-lg text-black ">
              Already a member?
            </p>
            <button
              onClick={handlePopup}
              type="button"
              className="text-base lg:text-lg text-brand-blue-200"
            >
              Sign In
            </button>
          </div>
        ) : (
          <div className=" rounded bg-brand-gray-100 h-6 shadow-inner w-[205px] animate-pulse"></div>
        )}
      </div>
      {!isLoading ? (
        <>
          <div className="bg-brand-blue-20 px-4 lg:px-6 py-3 border border-brand-gray-light rounded-xl">
            <p className="text-brand-blue-200 text-sm lg:text-base">
              Please enter the traveler’s name and date of birth exactly as
              shown on the passport (for international flight) or valid
              government-issued ID (for domestic flights) to be used on this
              trip. Name changes are not permitted after booking.
            </p>
          </div>
          <div className="py-1.5 sm:py-8 grid  gap-4 md:gap-8 grid-cols-1 sm:grid-cols-2">
            {/* add error class then error will show  */}
            <div className="group">
              <div className="relative after:top-4 after:absolute after:right-3 group-[.error]:after:content-error">
                <input
                  id="email"
                  type="text"
                  name="email"
                  className="peer w-full text-sm group-[.error]:!border-brand-red bg-transparent h-[48px] hover:border-brand-blue-100 rounded-[5px] pb-2 border border-brand-gray-light text-brand-gray-500 placeholder-transparent focus:outline-none focus:border-brand-blue-400 pt-5 pl-3 pr-7"
                  placeholder="Email Address*"
                />
                <label htmlFor="email" className="labels-info">
                  Email Address<sup>*</sup>
                </label>
              </div>
              <p className="text-xs text-brand-red-100 pt-2 group-[.error]:block hidden">
                Email is invalid.
              </p>
            </div>
            {/* add error and active class then error and flag will show  */}
            <div
              className={`group overflow-hidden ${
                isInputActive ? "active" : ""
              }`}
            >
              <div className="relative after:top-4 after:absolute after:right-3 group-[.error]:after:content-error">
                <input
                  id="phone"
                  type="text"
                  name="phone"
                  className="peer w-full text-base lg:text-lg group-[.error]:!border-brand-red bg-transparent h-[48px] hover:border-brand-blue-100 rounded-[5px] pb-2 border border-brand-gray-light text-brand-gray-500 placeholder-transparent focus:outline-none focus:border-brand-blue-400 pt-5 pl-24 pr-7"
                  placeholder="Phone Number"
                  value={phone}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                  onChange={handleInputChange}
                />
                <label htmlFor="phone" className="labels-info">
                  Phone Number<sup>*</sup>
                </label>
                <div className="absolute top-12 opacity-0 h-5 group-[.active]:top-5 group-[.active]:opacity-100 transition-all left-3 flex gap-1 items-center pr-1 border-r ">
                  <img src={usaFlag} alt="flag" />
                  <p className="text-base lg:text-lg text-brand-gray-500">
                    +646
                  </p>
                </div>
              </div>
              <p className="text-xs text-brand-red-100 pt-2 group-[.error]:block hidden">
                Phone Number is invalid.
              </p>
            </div>
          </div>
          <div className="pb-7 border-b border-brand-gray-25">
            <ul className="grid gap-2">
              <li className="custom-checkbox">
                <input type="checkbox" id="1" name="1" className="hidden" />
                <label
                  htmlFor="1"
                  className="text-lg select-none cursor-pointer text-brand-blue-100 relative w-full flex justify-between items-start"
                >
                  <span className="ml-2 w-full text-base lg:text-lg  text-brand-gray-700">
                    I consent to recieve marketing email from TripKart
                  </span>
                </label>
              </li>
              <li className="custom-checkbox">
                <input type="checkbox" id="2" name="2" className="hidden" />
                <label
                  htmlFor="2"
                  className="text-lg select-none cursor-pointer text-brand-blue-100 relative w-full flex justify-between items-start"
                >
                  <span className="ml-2 w-full text-base lg:text-lg  text-brand-gray-700">
                    Receive text alerts about this trip. Message and data rates
                    may apply.
                  </span>
                </label>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <>
          <div className="bg-white px-4 lg:px-6 py-3 border border-brand-gray-light rounded-xl space-y-3">
            <div className=" rounded bg-brand-gray-100 h-6 shadow-inner w-full animate-pulse"></div>
            <div className=" rounded bg-brand-gray-100 h-6 shadow-inner w-1/2 animate-pulse"></div>
          </div>
          <div className="py-1.5 sm:py-8 grid  gap-4 md:gap-8 grid-cols-1 sm:grid-cols-2">
            <div className=" rounded bg-brand-gray-100 h-11 shadow-inner w-full animate-pulse"></div>
            <div className=" rounded bg-brand-gray-100 h-11 shadow-inner w-full animate-pulse"></div>
          </div>
          <div className="pb-7 border-b border-brand-gray-25">
            <ul className="grid gap-2 max-w-[415px]">
              <li className="flex gap-2">
                <div className=" rounded bg-brand-gray-100 h-6 shadow-inner w-6 shrink-0 animate-pulse"></div>
                <div className=" rounded bg-brand-gray-100 h-6 shadow-inner w-full animate-pulse"></div>
              </li>
              <li className="flex gap-2">
                <div className=" rounded bg-brand-gray-100 h-6 shadow-inner w-6 shrink-0 animate-pulse"></div>
                <div className=" rounded bg-brand-gray-100 h-6 shadow-inner w-full animate-pulse"></div>
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
