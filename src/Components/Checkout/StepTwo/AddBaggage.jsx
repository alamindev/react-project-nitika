import React, { useRef, useState } from "react";
import ArrowRed from "../../../assets/images/checkout/arrow-sm-down-red.svg";
import Briefcase from "../../../assets/images/checkout/briefcase.png";
import check from "../../../assets/images/checkout/check.svg";
import Baggage from "../../../assets/images/checkout/find-baggage.png";
import luggage from "../../../assets/images/checkout/luggage.svg";
import logo from "../../../assets/images/checkout/spirit-airlines.png";
import ArrowRight from "../../Svg/ArrowRight";
export default function AddBaggage() {
  const contentRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
    setContentHeight(isExpanded ? 0 : contentRef.current.scrollHeight);
  };
  const contentTwoRef = useRef(null);
  const [isExpandedTwo, setIsExpandedTwo] = useState(false);
  const [contentTwoHeight, setContentTwoHeight] = useState(0);
  const toggleTwoAccordion = () => {
    setIsExpandedTwo(!isExpandedTwo);
    setContentTwoHeight(isExpandedTwo ? 0 : contentTwoRef.current.scrollHeight);
  };
  return (
    <div className=" bg-white lg:rounded-xl px-4 py-6 xl:p-6 w-full space-y-4">
      <h2 className="font-medium text-xl sm:text-2xl text-dark">
        Return Information
      </h2>
      <div className="pb-4">
        <div className="flex items-start gap-4">
          <figure className="shrink-0">
            <img src={Baggage} alt="baggege" />
          </figure>
          <p className="text-base sm:text-lg text-black">
            Save time by buying bags now instead of at the airport.
          </p>
        </div>
        <div className="w-full grid gap-5 grid-cols-1  lg:gap-2.5 xl:gap-7 md:grid-cols-2 xl:pl-16 mt-4 xl:-mt-4">
          <div className="space-y-3">
            <h4 className="text-base sm:text-lg text-black">
              Departure Flight
            </h4>
            <div className="">
              <ul className="divide-x divide-brand-gray-light flex items-center">
                <li className="px-2.5 first:pl-0 last:pr-0 flex gap-2 ">
                  <img src={logo} alt="Spirit Airlines" />
                  <p className="text-sm sm:text-base text-dark">
                    Spirit Airlines
                  </p>
                </li>
                <li className="px-2.5 first:pl-0 last:pr-0 flex gap-1 items-center">
                  <p className="text-base text-brand-dark uppercase">IGI</p>
                  <ArrowRight classes="stroke-brand-dark" />
                  <p className="text-base text-brand-dark uppercase">JFK</p>
                </li>
              </ul>
            </div>
            <div className="grid gap-3 w-full">
              <div className="border border-brand-gray-light rounded">
                <div className="px-3 py-3  flex items-center justify-between ">
                  <div className="flex gap-1.5 xl:gap-3 items-center">
                    <figure>
                      <img src={luggage} alt="luggage" />
                    </figure>
                    <p className="text-base lg:text-sm xl:text-base text-brand-blue-100">
                      Personal Items
                    </p>
                  </div>
                  <div className="flex gap-1.5 xl:gap-3 items-center">
                    <figure className="shrink-0">
                      <img
                        src={check}
                        className="grayscale opacity-70"
                        alt="check"
                      />
                    </figure>
                    <p className="text-sm text-dark text-brand-dark/50">
                      Included
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="border border-brand-gray-light rounded"
                onClick={toggleAccordion}
              >
                <div className="flex items-center justify-between px-3 py-3 cursor-pointer">
                  <div className="flex gap-1.5 xl:gap-3 items-center">
                    <figure>
                      <img src={Briefcase} alt="briefcase" />
                    </figure>
                    <p className="text-base lg:text-sm xl:text-base text-brand-blue-100">
                      Carry-on bag ($55<sup>.00</sup> each)
                    </p>
                  </div>
                  <div className="flex gap-1.5 xl:gap-3 items-center">
                    <p className="text-sm text-dark text-brand-red">1 bag</p>
                    <figure
                      className={`transition-all shrink-0 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    >
                      <img src={ArrowRed} alt="arrow red" />
                    </figure>
                  </div>
                </div>
                <div
                  style={{ maxHeight: contentHeight }}
                  className="max-h-0 overflow-hidden transition-all"
                  ref={contentRef}
                >
                  <div className="py-3 px-3 border-t border-brand-gray-light">
                    <ul className="flex gap-6 items-center flex-wrap">
                      <li className="custom-checkbox checkbox-two">
                        <input
                          type="checkbox"
                          id="adult"
                          name="bag"
                          className="hidden"
                        />
                        <label
                          htmlFor="adult"
                          className="text-lg select-none cursor-pointer text-brand-blue-100 relative w-full"
                        >
                          <span className="ml-1 w-full truncate mt-0.5 ">
                            Adult 1
                          </span>
                        </label>
                      </li>
                      <li className="custom-checkbox checkbox-two">
                        <input
                          type="checkbox"
                          id="adult-2"
                          name="bag"
                          className="hidden"
                        />
                        <label
                          htmlFor="adult-2"
                          className="text-lg select-none cursor-pointer text-brand-blue-100 relative w-full"
                        >
                          <span className="ml-1 w-full truncate mt-0.5 ">
                            Adult 2
                          </span>
                        </label>
                      </li>
                      <li className="custom-checkbox checkbox-two">
                        <input
                          type="checkbox"
                          id="adult-3"
                          name="bag"
                          className="hidden"
                        />
                        <label
                          htmlFor="adult-3"
                          className="text-lg select-none cursor-pointer text-brand-blue-100 relative w-full"
                        >
                          <span className="ml-1 w-full truncate mt-0.5 ">
                            Child
                          </span>
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="border border-brand-gray-light rounded"
                onClick={toggleTwoAccordion}
              >
                <div className="flex items-center justify-between px-3 py-3 cursor-pointer">
                  <div className="flex gap-1.5 xl:gap-3 items-center">
                    <figure>
                      <img src={Briefcase} alt="briefcase" />
                    </figure>
                    <p className="text-base lg:text-sm xl:text-base text-brand-blue-100">
                      Carry-on bag ($55<sup>.00</sup> each)
                    </p>
                  </div>
                  <div className="flex gap-1.5 xl:gap-3 items-center">
                    <p className="text-sm text-dark text-brand-red">2 bags</p>
                    <figure
                      className={`transition-all shrink-0 ${
                        isExpandedTwo ? "rotate-180" : ""
                      }`}
                    >
                      <img src={ArrowRed} alt="arrow red" />
                    </figure>
                  </div>
                </div>
                <div
                  style={{ maxHeight: contentTwoHeight }}
                  className="max-h-0 overflow-hidden transition-all"
                  ref={contentTwoRef}
                >
                  <div className="py-3 px-3 border-t border-brand-gray-light">
                    <ul className="flex gap-6 items-center flex-wrap">
                      <li className="custom-checkbox checkbox-two">
                        <input
                          type="checkbox"
                          id="adult"
                          name="bag"
                          className="hidden"
                        />
                        <label
                          htmlFor="adult"
                          className="text-lg select-none cursor-pointer text-brand-blue-100 relative w-full"
                        >
                          <span className="ml-1 w-full truncate mt-0.5 ">
                            Adult 1
                          </span>
                        </label>
                      </li>
                      <li className="custom-checkbox checkbox-two">
                        <input
                          type="checkbox"
                          id="adult-2"
                          name="bag"
                          className="hidden"
                        />
                        <label
                          htmlFor="adult-2"
                          className="text-lg select-none cursor-pointer text-brand-blue-100 relative w-full"
                        >
                          <span className="ml-1 w-full truncate mt-0.5 ">
                            Adult 2
                          </span>
                        </label>
                      </li>
                      <li className="custom-checkbox checkbox-two">
                        <input
                          type="checkbox"
                          id="adult-3"
                          name="bag"
                          className="hidden"
                        />
                        <label
                          htmlFor="adult-3"
                          className="text-lg select-none cursor-pointer text-brand-blue-100 relative w-full"
                        >
                          <span className="ml-1 w-full truncate mt-0.5 ">
                            Child
                          </span>
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="text-base sm:text-lg text-black">Return Flight</h4>
            <div className="">
              <ul className="divide-x divide-brand-gray-light flex items-center">
                <li className="px-2.5 first:pl-0 last:pr-0 flex gap-2 ">
                  <img src={logo} alt="Spirit Airlines" />
                  <p className="text-sm sm:text-base text-dark">
                    Spirit Airlines
                  </p>
                </li>
                <li className="px-2.5 first:pl-0 last:pr-0 flex gap-1 items-center">
                  <p className="text-base text-brand-dark uppercase">IGI</p>
                  <ArrowRight classes="stroke-brand-dark" />
                  <p className="text-base text-brand-dark uppercase">JFK</p>
                </li>
              </ul>
            </div>
            <div className="grid gap-3 w-full">
              <div className="border border-brand-gray-light rounded">
                <div className="px-3 py-3  flex items-center justify-between ">
                  <div className="flex gap-1.5 xl:gap-3 items-center">
                    <figure>
                      <img src={luggage} alt="luggage" />
                    </figure>
                    <p className="text-base lg:text-sm xl:text-base text-brand-blue-100">
                      Personal Items
                    </p>
                  </div>
                  <div className="flex gap-1.5 xl:gap-3 items-center">
                    <figure className="shrink-0">
                      <img
                        src={check}
                        className="grayscale opacity-70"
                        alt="check"
                      />
                    </figure>
                    <p className="text-sm text-dark text-brand-dark/50">
                      Included
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="border border-brand-gray-light rounded"
                onClick={toggleAccordion}
              >
                <div className="flex items-center justify-between px-3 py-3 cursor-pointer">
                  <div className="flex gap-1.5 xl:gap-3 items-center">
                    <figure>
                      <img src={Briefcase} alt="briefcase" />
                    </figure>
                    <p className="text-base lg:text-sm xl:text-base text-brand-blue-100">
                      Carry-on bag ($55<sup>.00</sup> each)
                    </p>
                  </div>
                  <div className="flex gap-1.5 xl:gap-3 items-center">
                    <p className="text-sm text-dark text-brand-red">Select</p>
                    <figure
                      className={`transition-all shrink-0 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    >
                      <img src={ArrowRed} alt="arrow red" />
                    </figure>
                  </div>
                </div>
                <div
                  style={{ maxHeight: contentHeight }}
                  className="max-h-0 overflow-hidden transition-all"
                  ref={contentRef}
                >
                  <div className="py-3 px-3 border-t border-brand-gray-light">
                    <ul className="flex gap-6 items-center flex-wrap">
                      <li className="custom-checkbox checkbox-two">
                        <input
                          type="checkbox"
                          id="adult"
                          name="bag"
                          className="hidden"
                        />
                        <label
                          htmlFor="adult"
                          className="text-lg select-none cursor-pointer text-brand-blue-100 relative w-full"
                        >
                          <span className="ml-1 w-full truncate mt-0.5 ">
                            Adult 1
                          </span>
                        </label>
                      </li>
                      <li className="custom-checkbox checkbox-two">
                        <input
                          type="checkbox"
                          id="adult-2"
                          name="bag"
                          className="hidden"
                        />
                        <label
                          htmlFor="adult-2"
                          className="text-lg select-none cursor-pointer text-brand-blue-100 relative w-full"
                        >
                          <span className="ml-1 w-full truncate mt-0.5 ">
                            Adult 2
                          </span>
                        </label>
                      </li>
                      <li className="custom-checkbox checkbox-two">
                        <input
                          type="checkbox"
                          id="adult-3"
                          name="bag"
                          className="hidden"
                        />
                        <label
                          htmlFor="adult-3"
                          className="text-lg select-none cursor-pointer text-brand-blue-100 relative w-full"
                        >
                          <span className="ml-1 w-full truncate mt-0.5 ">
                            Child
                          </span>
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="border border-brand-gray-light rounded"
                onClick={toggleTwoAccordion}
              >
                <div className="flex items-center justify-between px-3 py-3 cursor-pointer">
                  <div className="flex gap-1.5 xl:gap-3 items-center">
                    <figure>
                      <img src={Briefcase} alt="briefcase" />
                    </figure>
                    <p className="text-base lg:text-sm xl:text-base text-brand-blue-100">
                      Carry-on bag ($55<sup>.00</sup> each)
                    </p>
                  </div>
                  <div className="flex gap-1.5 xl:gap-3 items-center">
                    <p className="text-sm text-dark text-brand-red">Select</p>
                    <figure
                      className={`transition-all shrink-0 ${
                        isExpandedTwo ? "rotate-180" : ""
                      }`}
                    >
                      <img src={ArrowRed} alt="arrow red" />
                    </figure>
                  </div>
                </div>
                <div
                  style={{ maxHeight: contentTwoHeight }}
                  className="max-h-0 overflow-hidden transition-all"
                  ref={contentTwoRef}
                >
                  <div className="py-3 px-3 border-t border-brand-gray-light">
                    <ul className="flex gap-6 items-center flex-wrap">
                      <li className="custom-checkbox checkbox-two">
                        <input
                          type="checkbox"
                          id="adult"
                          name="bag"
                          className="hidden"
                        />
                        <label
                          htmlFor="adult"
                          className="text-lg select-none cursor-pointer text-brand-blue-100 relative w-full"
                        >
                          <span className="ml-1 w-full truncate mt-0.5 ">
                            Adult 1
                          </span>
                        </label>
                      </li>
                      <li className="custom-checkbox checkbox-two">
                        <input
                          type="checkbox"
                          id="adult-2"
                          name="bag"
                          className="hidden"
                        />
                        <label
                          htmlFor="adult-2"
                          className="text-lg select-none cursor-pointer text-brand-blue-100 relative w-full"
                        >
                          <span className="ml-1 w-full truncate mt-0.5 ">
                            Adult 2
                          </span>
                        </label>
                      </li>
                      <li className="custom-checkbox checkbox-two">
                        <input
                          type="checkbox"
                          id="adult-3"
                          name="bag"
                          className="hidden"
                        />
                        <label
                          htmlFor="adult-3"
                          className="text-lg select-none cursor-pointer text-brand-blue-100 relative w-full"
                        >
                          <span className="ml-1 w-full truncate mt-0.5 ">
                            Child
                          </span>
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="-mx-4 xl:-mx-6 border-t border-brand-gray-25 pt-6 flex flex-col md:flex-row gap-2 justify-between items-center px-4 xl:px-6">
        <div className="divide-x flex items-center gap-2 sm:gap-3">
          <a
            href="#"
            className="text-brand-blue-400 max-[405px]:text-sm text-base underline "
          >
            Baggage Policy
          </a>
          <p className="max-[405px]:text-sm text-base font-medium text-brand-dark/80 pl-2 sm:pl-3">
            $10.00 TripKart our service fees
          </p>
        </div>
        <p className="max-[405px]:text-sm text-base font-medium text-brand-dark/80">
          Baggage Subtotal: $155<sup>.00</sup>
        </p>
      </div>
    </div>
  );
}
