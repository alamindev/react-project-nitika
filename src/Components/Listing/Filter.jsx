import React, { useState } from "react";
import LeftRight from "../../assets/images/left-right.svg";
import conversion from "../../assets/images/listing/conversion.svg";
import pen from "../../assets/images/listing/pen.svg";
import usersignle from "../../assets/images/listing/single-05.svg";
import warning from "../../assets/images/listing/warning-sign.svg";
import Datepiker from "./Datepicker";
import Travelers from "./Travelers";
export default function Filter() {
  let [popup, setPopup] = useState(false);

  return (
    <section className="md:px-4 border-t pb-4 md:pb-10 md:pt-20 border-brand-gray-light relative z-10">
      <div className="max-w-screen-3xl mx-auto">
        <div className="w-full z-20 md:rounded-2xl  px-4 py-8 sm:py-14 sm:px-12 bg-white rounded-bl-lg rounded-br-lg lg:rounded-tr-lg">
          <div className="rounded-md border border-brand-red-50 bg-brand-red-25 px-4 sm:px-6 py-4 mb-6 sm:mb-8">
            <ul className="grid gap-1">
              <li className="flex gap-4 items-start">
                <img src={warning} className="mt-1" alt="warning" />
                <p className="text-brand-red-100 text-sm md:text-base">
                  Please enter a different From and To city or Airport.
                </p>
              </li>
              <li className="flex gap-4 items-start">
                <img src={warning} className="mt-1" alt="warning" />
                <p className="text-brand-red-100 text-sm md:text-base">
                  Return date must be later than current date, and within 360
                  days from today's date.
                </p>
              </li>
            </ul>
          </div>
          <div
            className={
              "fixed z-30 top-0 left-0 right-0 pb-4 md:pb-0 px-5 md:px-0 pt-40 md:pt-0 md:static bg-white md:bg-transparent transition-all duration-200 " +
              (popup ? "translate-y-0" : "-translate-y-full md:translate-y-0")
            }
          >
            <div className="flex flex-col md:flex-row md:items-center gap-3 sm:gap-10">
              <ul className="flex gap-2 sm:gap-4 lg:gap-8 items-center">
                <li className="checkbox-black">
                  <input type="radio" id="rountip" name="type" checked />
                  <label
                    for="rountip"
                    className="text-sm sm:text-lg text-brand-gray-500"
                  >
                    Round Trip
                  </label>
                </li>
                <li className="checkbox-black">
                  <input type="radio" id="oneway" name="type" />
                  <label
                    for="oneway"
                    className="text-sm sm:text-lg text-brand-gray-500"
                  >
                    One Way
                  </label>
                </li>
                <li className="checkbox-black">
                  <input type="radio" id="multicity" name="type" />
                  <label
                    for="multicity"
                    className="text-sm sm:text-lg text-brand-gray-500"
                  >
                    Multi CIty
                  </label>
                </li>
              </ul>
              <div className="flex gap-3 md:gap-8 w-full md:w-auto">
                <div className="md:border-l border-gray-300  w-full">
                  <select
                    name="couch"
                    id=""
                    className="bg-transparent md:pl-5 w-full md:w-auto pb-3 border-b border-brand-gray-light md:pb-0 md:border-b-0 text-brand-gray"
                  >
                    <option value="1">Couch 1 </option>
                    <option value="1">Couch 2 </option>
                    <option value="1">Couch 3 </option>
                  </select>
                </div>
                <div className="border-l border-gray-300 pl-4 sm:pl-6 md:pl-0 w-full">
                  <select
                    name="couch"
                    id=""
                    className="bg-transparent md:pl-6 w-full md:w-auto pb-3 border-b border-brand-gray-light md:pb-0 md:border-b-0 text-brand-gray"
                  >
                    <option value="1">3 bags</option>
                    <option value="1">3 bags</option>
                    <option value="1">3 bags </option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap xl:flex-nowrap pt-3 md:pt-8 items-end gap-3.5">
              <div className="w-full md:w-[340px]  max-w-full  ">
                <label htmlFor="from" className="inline-block text-sm ">
                  From
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    placeholder="From"
                    className="w-full border-0  py-1.5 border-b focus:ring-0 border-b-brand-gray-light focus:outline-none font-normal text-lg 2xl:text-2xl placeholder:text-brand-gray-500"
                    value="Anywhere"
                  />
                  <img src={LeftRight} className="" alt="left-right" />
                </div>
              </div>
              <div className="w-full md:w-[292px] max-w-full">
                <label htmlFor="to" className="inline-block text-sm ">
                  To:
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    placeholder="Where?"
                    className="w-full border-0  py-1.5 border-b focus:ring-0 border-b-brand-gray-light focus:outline-none font-normal text-lg 2xl:text-2xl placeholder:text-brand-gray-500"
                  />
                </div>
              </div>
              <Datepiker />
              <div className="w-full md:w-[260px] max-w-full">
                <label htmlFor="to" className="inline-block text-sm ">
                  Travelers:
                </label>
                <div className="flex items-center gap-3">
                  <Travelers />
                </div>
              </div>
              <div className="w-full sm:w-auto   max-w-full shrink-0">
                <button
                  type="button"
                  className="rounded-full px-6  w-full md:w-auto  text-center 2xl:px-10 py-3 bg-brand-red hover:bg-opacity-80 text-white text-lg 2xl:text-2xl"
                >
                  Search Flight
                </button>
              </div>
            </div>
          </div>
          <div className="md:hidden space-y-4">
            <div className="flex justify-center items-center divide-x divide-gray-300">
              <div className="flex gap-3 px-2">
                <p className="uppercase text-base text-brand-dark">LAX</p>
                <img src={conversion} alt="conversion" />
                <p className="uppercase text-base text-brand-dark">DEL</p>
              </div>
              <p className="text-brand-dark px-2">Coach</p>
              <div className="flex gap-3 px-2">
                <p className="text-brand-dark text-base">3</p>
                <img src={usersignle} alt="user single" />
              </div>
              <button
                type="button"
                onClick={() => setPopup((state) => !state)}
                className="flex gap-3 px-2"
              >
                <img src={pen} alt="user single" />
                <p className="text-brand-dark text-base">Edit</p>
              </button>
            </div>
            <div className="flex gap-6 items-center w-full">
              <div className="border-b border-brand-dark pb-3 flex justify-between items-center w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="5.207"
                  height="9.414"
                  viewBox="0 0 5.207 9.414"
                >
                  <path
                    id="Path_9"
                    dataName="Path 9"
                    d="M8,0,4,4,0,0"
                    transform="translate(4.5 0.707) rotate(90)"
                    fill="none"
                    stroke="#1f2937"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                  />
                </svg>
                <h2 className="font-bold text-lg text-brand-dark text-center">
                  Feb 15 (Wed)
                </h2>
                <svg
                  className="rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  width="5.207"
                  height="9.414"
                  viewBox="0 0 5.207 9.414"
                >
                  <path
                    id="Path_9"
                    dataName="Path 9"
                    d="M8,0,4,4,0,0"
                    transform="translate(4.5 0.707) rotate(90)"
                    fill="none"
                    stroke="#1f2937"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                  />
                </svg>
              </div>
              <div className="border-b border-brand-dark pb-3 flex justify-between items-center  w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="5.207"
                  height="9.414"
                  viewBox="0 0 5.207 9.414"
                >
                  <path
                    id="Path_9"
                    dataName="Path 9"
                    d="M8,0,4,4,0,0"
                    transform="translate(4.5 0.707) rotate(90)"
                    fill="none"
                    stroke="#1f2937"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                  />
                </svg>
                <h2 className="font-bold text-lg text-brand-dark text-center">
                  Mar 1 (Wed)
                </h2>
                <svg
                  className="rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  width="5.207"
                  height="9.414"
                  viewBox="0 0 5.207 9.414"
                >
                  <path
                    id="Path_9"
                    dataName="Path 9"
                    d="M8,0,4,4,0,0"
                    transform="translate(4.5 0.707) rotate(90)"
                    fill="none"
                    stroke="#1f2937"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() => setPopup(false)}
        className={
          "fixed z-20 inset-0 bg-brand-dark bg-opacity-70 md:hidden transition-all duration-200" +
          (popup ? "opacity-100 visible" : "opacity-0 invisible")
        }
      ></div>
    </section>
  );
}
