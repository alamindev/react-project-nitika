import React, { useState } from "react";
import banner from "../../assets/images/banner.png";
import LeftRight from "../../assets/images/left-right.svg";
import zoom from "../../assets/images/zoom.svg";
import Airplane from "../Svg/Airplane";
import Car from "../Svg/Car";
import Hotel from "../Svg/Hotel";
import Map from "../Svg/Map";
import Packages from "../Svg/Packages";
import Datepiker from "./Datepicker";
import DatepickerCar from "./DatepickerCar";
import DatepickerHotel from "./DatepickerHotel";
export default function Filter() {
  let [index, setIndex] = useState(4);
  const tab = (id) => {
    setIndex(id);
  };

  return (
    <section
      className="bg-no-repeat bg-cover bg-center px-4"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="container mx-auto">
        <div className="pt-20 sm:pt-24 pb-[18rem] lg:pb-[35rem] xl:pb-[29rem]">
          <div className="min-h-[380px]">
            <ul className="rounded-tl-md rounded-tr-md bg-brand-blue-dark  2xl:w-[815px] max-w-full grid grid-cols-12 md:inline-flex overflow-hidden">
              <li
                className="cursor-pointer group col-span-4"
                onClick={() => tab(1)}
              >
                <div
                  className={`flex gap-3 py-5 justify-center items-center group-hover:bg-white  relative px-4 sm:px-6 lg:px-8 group-last:after:content-none after:absolute after:right-0 after:bg-opacity-50 after:h-[32px] after:w-[1px] after:bg-[#DBDBDB] ${
                    index === 1 ? "bg-white" : ""
                  }`}
                >
                  <Map
                    color={` ${
                      index === 1
                        ? "fill-brand-blue-dark shrink-0"
                        : "fill-white group-hover:fill-brand-blue-dark shrink-0"
                    }`}
                  />
                  <span
                    className={`text-sm sm:text-lg xl:text-2xl group-hover:text-brand-blue-dark ${
                      index === 1 ? "text-brand-blue-dark" : "text-white"
                    }`}
                  >
                    Tours
                  </span>
                </div>
              </li>
              <li
                className="cursor-pointer group col-span-4"
                onClick={() => tab(2)}
              >
                <div
                  className={`flex gap-3 py-5 justify-center items-center group-hover:bg-white  relative px-4 sm:px-6 lg:px-8 group-last:after:content-none after:absolute after:right-0 after:bg-opacity-50 after:h-[32px] after:w-[1px] after:bg-[#DBDBDB] ${
                    index === 2 ? "bg-white" : ""
                  }`}
                >
                  <Packages
                    color={` ${
                      index === 2
                        ? "fill-brand-blue-dark shrink-0"
                        : "fill-white group-hover:fill-brand-blue-dark shrink-0"
                    }`}
                  />
                  <span
                    className={`text-sm sm:text-lg xl:text-2xl group-hover:text-brand-blue-dark ${
                      index === 2 ? "text-brand-blue-dark" : "text-white"
                    }`}
                  >
                    Packages
                  </span>
                </div>
              </li>
              <li
                className="cursor-pointer group col-span-4"
                onClick={() => tab(3)}
              >
                <div
                  className={`flex gap-3 py-5 justify-center items-center group-hover:bg-white  relative px-4 sm:px-6 lg:px-8 group-last:after:content-none after:absolute after:right-0 after:bg-opacity-50 after:h-[32px] after:w-[1px] after:bg-[#DBDBDB] ${
                    index === 3 ? "bg-white" : ""
                  }`}
                >
                  <Hotel
                    color={` ${
                      index === 3
                        ? "fill-brand-blue-dark shrink-0"
                        : "fill-white group-hover:fill-brand-blue-dark shrink-0"
                    }`}
                  />
                  <span
                    className={`text-sm sm:text-lg xl:text-2xl group-hover:text-brand-blue-dark ${
                      index === 3 ? "text-brand-blue-dark" : "text-white"
                    }`}
                  >
                    Hotels
                  </span>
                </div>
              </li>
              <li
                className="cursor-pointer group col-span-6"
                onClick={() => tab(4)}
              >
                <div
                  className={`flex gap-3 py-5 justify-center items-center group-hover:bg-white  relative px-4 sm:px-6 lg:px-8 group-last:after:content-none after:absolute after:right-0 after:bg-opacity-50 after:h-[32px] after:w-[1px] after:bg-[#DBDBDB] ${
                    index === 4 ? "bg-white" : ""
                  }`}
                >
                  <Car
                    color={` ${
                      index === 4
                        ? "fill-brand-blue-dark"
                        : "fill-white group-hover:fill-brand-blue-dark"
                    }`}
                  />
                  <span
                    className={`text-sm sm:text-lg xl:text-2xl group-hover:text-brand-blue-dark ${
                      index === 4 ? "text-brand-blue-dark" : "text-white"
                    }`}
                  >
                    Cars
                  </span>
                </div>
              </li>
              <li
                className="cursor-pointer group col-span-6"
                onClick={() => tab(5)}
              >
                <div
                  className={`flex gap-3 py-5 justify-center items-center group-hover:bg-white  relative px-4 sm:px-6 lg:px-8 group-last:after:content-none after:absolute after:right-0 after:bg-opacity-50 after:h-[32px] after:w-[1px] after:bg-[#DBDBDB] ${
                    index === 5 ? "bg-white" : ""
                  }`}
                >
                  <Airplane
                    color={` ${
                      index === 5
                        ? "fill-brand-blue-dark"
                        : "fill-white group-hover:fill-brand-blue-dark"
                    }`}
                  />
                  <span
                    className={`text-sm sm:text-lg xl:text-2xl group-hover:text-brand-blue-dark ${
                      index === 5 ? "text-brand-blue-dark" : "text-white"
                    }`}
                  >
                    Flights
                  </span>
                </div>
              </li>
            </ul>
            <div className="relative min-h-[315px]">
              {index === 1 && (
                <div className="w-full absolute top-0 left-0 z-20 shadow-lg  px-4 py-8 sm:py-14 sm:px-12 bg-white rounded-bl-lg rounded-br-lg lg:rounded-tr-lg">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10">
                    <ul className="flex gap-2 sm:gap-8 items-center">
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
                    <div className="sm:border-l border-brand-gray-500">
                      <select
                        name="couch"
                        id=""
                        className="bg-transparent sm:pl-5 w-full sm:w-auto pb-3 border-b border-brand-gray-light sm:pb-0 sm:border-b-0 text-brand-gray"
                      >
                        <option value="1">Couch 1 </option>
                        <option value="1">Couch 2 </option>
                        <option value="1">Couch 3 </option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-wrap xl:flex-nowrap pt-5 sm:pt-10 items-end gap-3.5">
                    <div className="w-full md:w-[340px]  max-w-full  ">
                      <label htmlFor="from" className="inline-block text-sm ">
                        From
                      </label>
                      <div className="flex items-center gap-3">
                        <input
                          type="text"
                          placeholder="From"
                          className="w-full border-0 border-b  py-1.5 focus:ring-0 border-b-black focus:outline-none font-bold text-lg 2xl:text-2xl"
                          value="Anywhere"
                        />
                        <img
                          src={LeftRight}
                          className="rotate-90 md:rotate-0"
                          alt="left-right"
                        />
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
                        <select
                          name="travelers"
                          id=""
                          placeholder="Select Travelers"
                          className="w-full border-0 border-b text-brand-gray-500 focus:ring-0  border-b-brand-gray-light bg-transparent appearance-none focus:outline-none font-normal text-lg 2xl:text-2xl placeholder:text-brand-gray-500"
                        >
                          <option value="1">Select Travelers</option>
                          <option value="1">Select Travelers</option>
                          <option value="1">Select Travelers</option>
                        </select>
                      </div>
                    </div>
                    <div className="w-full sm:w-auto   max-w-full shrink-0">
                      <button
                        type="button"
                        className="rounded-full px-6  w-full md:w-auto  text-center 2xl:px-10 py-3 bg-brand-red hover:bg-opacity-80 text-white text-lg 2xl:text-2xl"
                      >
                        Search Tours
                      </button>
                    </div>
                  </div>
                  <div className="pt-5 sm:pt-10 flex gap-5 md:gap-8 flex-wrap items-center">
                    <div className="w-full md:w-[260px] max-w-full">
                      <div className="flex items-center gap-4">
                        <img
                          src={zoom}
                          className="-mr-10 relative"
                          alt="search"
                        />
                        <input
                          type="text"
                          placeholder="Search preferred airline "
                          className="w-full border-0 border-b focus:ring-0 pl-8 border-b-brand-gray-light focus:outline-none font-normal text-sm placeholder:text-brand-gray-500 py-2.5"
                        />
                      </div>
                    </div>
                    <div className="w-[370px] max-w-full">
                      <div className="flex items-center gap-4 custom-checkbox">
                        <input type="checkbox" id="return" className="hidden" />
                        <label
                          htmlFor="return"
                          className="text-lg text-brand-gray-500 relative"
                        >
                          <span className="ml-2 ">
                            Return to or from another city/airport?
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="w-full md:w-[370px] max-w-full">
                      <div className="flex items-center gap-4 custom-checkbox">
                        <input type="checkbox" id="flight" className="hidden" />
                        <label
                          htmlFor="flight"
                          className="text-lg text-brand-gray-500 relative"
                        >
                          <span className="ml-2 ">Direct Flights</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {index === 2 && (
                <div className="w-full absolute top-0 left-0 z-20 shadow-lg  px-4 py-8 sm:py-14 sm:px-12 bg-white rounded-bl-lg rounded-br-lg lg:rounded-tr-lg">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10">
                    <ul className="flex gap-2 sm:gap-8 items-center">
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
                    <div className="sm:border-l border-brand-gray-500">
                      <select
                        name="couch"
                        id=""
                        className="bg-transparent sm:pl-5 w-full sm:w-auto pb-3 border-b border-brand-gray-light sm:pb-0 sm:border-b-0 text-brand-gray"
                      >
                        <option value="1">Couch 1 </option>
                        <option value="1">Couch 2 </option>
                        <option value="1">Couch 3 </option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-wrap xl:flex-nowrap pt-5 sm:pt-10 items-end gap-3.5">
                    <div className="w-full md:w-[340px]  max-w-full  ">
                      <label htmlFor="from" className="inline-block text-sm ">
                        From
                      </label>
                      <div className="flex items-center gap-3">
                        <input
                          type="text"
                          placeholder="From"
                          className="w-full border-0 border-b  py-1.5 focus:ring-0 border-b-black focus:outline-none font-bold text-lg 2xl:text-2xl"
                          value="Anywhere"
                        />
                        <img
                          src={LeftRight}
                          className="rotate-90 md:rotate-0"
                          alt="left-right"
                        />
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
                        <select
                          name="travelers"
                          id=""
                          placeholder="Select Travelers"
                          className="w-full border-0 border-b text-brand-gray-500 focus:ring-0  border-b-brand-gray-light bg-transparent appearance-none focus:outline-none font-normal text-lg 2xl:text-2xl placeholder:text-brand-gray-500"
                        >
                          <option value="1">Select Travelers</option>
                          <option value="1">Select Travelers</option>
                          <option value="1">Select Travelers</option>
                        </select>
                      </div>
                    </div>
                    <div className=" w-full sm:w-auto  max-w-full shrink-0">
                      <button
                        type="button"
                        className="rounded-full px-6  w-full md:w-auto  text-center 2xl:px-10 py-3 bg-brand-red hover:bg-opacity-80 text-white text-lg 2xl:text-2xl"
                      >
                        Search Packages
                      </button>
                    </div>
                  </div>
                  <div className="pt-5 sm:pt-10 flex gap-5 md:gap-8 flex-wrap items-center">
                    <div className="w-full md:w-[260px] max-w-full">
                      <div className="flex items-center gap-4">
                        <img
                          src={zoom}
                          className="-mr-10 relative"
                          alt="search"
                        />
                        <input
                          type="text"
                          placeholder="Search preferred airline "
                          className="w-full border-0 border-b focus:ring-0 pl-8 border-b-brand-gray-light focus:outline-none font-normal text-sm placeholder:text-brand-gray-500 py-2.5"
                        />
                      </div>
                    </div>
                    <div className="w-[370px] max-w-full">
                      <div className="flex items-center gap-4 custom-checkbox">
                        <input type="checkbox" id="return" className="hidden" />
                        <label
                          htmlFor="return"
                          className="text-lg text-brand-gray-500 relative"
                        >
                          <span className="ml-2 ">
                            Return to or from another city/airport?
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="w-full md:w-[370px] max-w-full">
                      <div className="flex items-center gap-4 custom-checkbox">
                        <input type="checkbox" id="flight" className="hidden" />
                        <label
                          htmlFor="flight"
                          className="text-lg text-brand-gray-500 relative"
                        >
                          <span className="ml-2 ">Direct Flights</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {index === 3 && (
                <div className="w-full absolute top-0 left-0 z-20 shadow-lg  px-4 py-8 sm:py-14 sm:px-12 bg-white rounded-bl-lg rounded-br-lg lg:rounded-tr-lg">
                  <div className="flex flex-wrap xl:flex-nowrap items-end gap-3.5">
                    <div className="sm:w-[500px] w-full max-w-full  ">
                      <label htmlFor="from" className="inline-block text-sm ">
                        Destination
                      </label>
                      <div className="flex items-center gap-3">
                        <input
                          type="text"
                          placeholder="From"
                          className="w-full border-0 border-b  py-1.5 focus:ring-0 border-b-black focus:outline-none font-bold text-lg 2xl:text-2xl"
                          value="Anywhere"
                        />
                      </div>
                    </div>
                    <DatepickerHotel />
                    <div className="sm:w-[260px] w-full max-w-full">
                      <label htmlFor="to" className="inline-block text-sm ">
                        Room
                      </label>
                      <div className="flex items-center gap-3">
                        <input
                          type="text"
                          placeholder="1"
                          className="w-full border-0 border-b  py-1.5 focus:ring-0 border-brand-gray-light focus:outline-none font-normal text-lg 2xl:text-2xl"
                        />
                      </div>
                    </div>
                    <div className="sm:w-[260px] w-full max-w-full">
                      <label htmlFor="to" className="inline-block text-sm ">
                        Travelers:
                      </label>
                      <div className="flex items-center gap-3">
                        <select
                          name="travelers"
                          id=""
                          placeholder="Select Travelers"
                          className="w-full border-0 border-b text-brand-gray-500 focus:ring-0  border-b-brand-gray-light bg-transparent appearance-none focus:outline-none font-normal text-lg 2xl:text-2xl placeholder:text-brand-gray-500"
                        >
                          <option value="1">Select Travelers</option>
                          <option value="1">Select Travelers</option>
                          <option value="1">Select Travelers</option>
                        </select>
                      </div>
                    </div>
                    <div className="max-w-full  w-full sm:w-auto  shrink-0">
                      <button
                        type="button"
                        className="rounded-full px-6  w-full md:w-auto  text-center 2xl:px-10 py-3 bg-brand-red hover:bg-opacity-80 text-white text-lg 2xl:text-2xl"
                      >
                        Search Hotels
                      </button>
                    </div>
                  </div>
                  <div className="pt-5 sm:pt-10 flex gap-5 md:gap-8 flex-wrap items-center">
                    <div className="w-[260px] max-w-full">
                      <div className="flex items-center gap-4">
                        <img
                          src={zoom}
                          className="-mr-10 relative"
                          alt="search"
                        />
                        <input
                          type="text"
                          placeholder="Search preferred Hotel "
                          className="w-full border-0 border-b focus:ring-0 pl-8 border-b-brand-gray-light focus:outline-none font-normal text-sm placeholder:text-brand-gray-500 py-2.5"
                        />
                      </div>
                    </div>
                    <div className=" max-w-full">
                      <div className="flex items-center gap-4 custom-checkbox">
                        <input type="checkbox" id="return" className="hidden" />
                        <label
                          htmlFor="return"
                          className="text-lg text-brand-gray-500 relative"
                        >
                          <span className="ml-2 ">Add a car</span>
                        </label>
                      </div>
                    </div>
                    <div className=" max-w-full">
                      <div className="sm:border-l border-brand-gray-500">
                        <select
                          name="couch"
                          id=""
                          className="bg-transparent sm:pl-5 w-full sm:w-auto pb-3 border-b border-brand-gray-light sm:pb-0 sm:border-b-0 text-brand-gray"
                        >
                          <option value="1"> Hotel Rating </option>
                          <option value="1">Hotel Rating 2 </option>
                          <option value="1">Hotel Rating 3 </option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {index === 4 && (
                <div className="w-full absolute top-0 left-0 z-20 shadow-lg  px-4 py-8 sm:py-14 sm:px-12 bg-white rounded-bl-lg rounded-br-lg lg:rounded-tr-lg">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10 sm:divide-x divide-brand-gray-light">
                    <div className="">
                      <select
                        name="couch"
                        id=""
                        className="bg-transparent  w-full sm:w-auto pb-3 border-b border-brand-gray-light text-brand-gray sm:pb-0 sm:border-b-0"
                      >
                        <option value="1">All car rental campanies</option>
                        <option value="1">Couch 2 </option>
                        <option value="1">Couch 3 </option>
                      </select>
                    </div>
                    <div className="">
                      <select
                        name="couch"
                        id=""
                        className="bg-transparent sm:pl-5 w-full sm:w-auto pb-3 border-b text-brand-gray border-brand-gray-light sm:pb-0 sm:border-b-0"
                      >
                        <option value="1">All Car sizes</option>
                        <option value="1">Size 1</option>
                        <option value="1">Size 2</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-wrap 2xl:flex-nowrap pt-5 sm:pt-10 items-end gap-3.5">
                    <div className="sm:w-[340px] w-full  max-w-full  ">
                      <label htmlFor="from" className="inline-block text-sm ">
                        Pickup Location
                      </label>
                      <div className="flex items-center gap-3">
                        <input
                          type="text"
                          placeholder="Where"
                          className="w-full border-0 border-b  py-1.5 focus:ring-0 border-b-black focus:outline-none font-bold text-lg 2xl:text-2xl"
                          value="Where  "
                        />
                      </div>
                    </div>
                    <div className="sm:w-[292px] w-full   max-w-full">
                      <label htmlFor="to" className="inline-block text-sm ">
                        Different Dropoff location? (optional)
                      </label>
                      <div className="flex items-center gap-3">
                        <input
                          type="text"
                          placeholder="Dropoff Location"
                          className="w-full border-0  py-1.5 border-b focus:ring-0 border-b-brand-gray-light focus:outline-none font-normal text-lg 2xl:text-2xl placeholder:text-brand-gray-500"
                        />
                      </div>
                    </div>
                    <DatepickerCar />
                    <div className="max-w-full  w-full sm:w-auto  shrink-0">
                      <button
                        type="button"
                        className="rounded-full px-6  w-full md:w-auto  text-center 2xl:px-10 py-3 bg-brand-red hover:bg-opacity-80 text-white text-lg 2xl:text-2xl"
                      >
                        Search Cars
                      </button>
                    </div>
                  </div>
                  <div className="pt-5 sm:pt-10 flex gap-5 md:gap-8 sm:divide-x divide-brand-gray-light flex-wrap items-center">
                    <div className=" ">
                      <div className="flex items-center gap-4 custom-checkbox">
                        <input type="checkbox" id="return" className="hidden" />
                        <label
                          htmlFor="return"
                          className="text-lg text-brand-gray-500 relative"
                        >
                          <span className="ml-2 ">Add a car</span>
                        </label>
                      </div>
                    </div>
                    <div className=" ">
                      <div className="">
                        <select
                          name="couch"
                          id=""
                          className="bg-transparent sm:pl-5 w-full sm:w-auto pb-3 border-b border-brand-gray-light sm:pb-0 sm:border-b-0 text-brand-gray"
                        >
                          <option value="1">
                            I don't Have a discount code
                          </option>
                          <option value="1">get new code</option>
                          <option value="1">code </option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {index === 5 && (
                <div className="w-full absolute top-0 left-0 z-20 shadow-lg  px-4 py-8 sm:py-14 sm:px-12 bg-white rounded-bl-lg rounded-br-lg lg:rounded-tr-lg">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10">
                    <ul className="flex gap-2 sm:gap-8 items-center">
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
                    <div className="sm:border-l border-brand-gray-500">
                      <select
                        name="couch"
                        id=""
                        className="bg-transparent sm:pl-5 w-full sm:w-auto pb-3 border-b border-brand-gray-light sm:pb-0 sm:border-b-0 text-brand-gray"
                      >
                        <option value="1">Couch 1 </option>
                        <option value="1">Couch 2 </option>
                        <option value="1">Couch 3 </option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-wrap xl:flex-nowrap pt-5 sm:pt-10 items-end gap-3.5">
                    <div className="w-full md:w-[340px]  max-w-full  ">
                      <label htmlFor="from" className="inline-block text-sm ">
                        From
                      </label>
                      <div className="flex items-center gap-3">
                        <input
                          type="text"
                          placeholder="From"
                          className="w-full border-0 border-b  py-1.5 focus:ring-0 border-b-black focus:outline-none font-bold text-lg 2xl:text-2xl"
                          value="Anywhere"
                        />
                        <img
                          src={LeftRight}
                          className="rotate-90 md:rotate-0"
                          alt="left-right"
                        />
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
                        <select
                          name="travelers"
                          id=""
                          placeholder="Select Travelers"
                          className="w-full border-0 border-b text-brand-gray-500 focus:ring-0  border-b-brand-gray-light bg-transparent appearance-none focus:outline-none font-normal text-lg 2xl:text-2xl placeholder:text-brand-gray-500"
                        >
                          <option value="1">Select Travelers</option>
                          <option value="1">Select Travelers</option>
                          <option value="1">Select Travelers</option>
                        </select>
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
                  <div className="pt-5 sm:pt-10 flex gap-5 md:gap-8 flex-wrap items-center">
                    <div className="w-full md:w-[260px] max-w-full">
                      <div className="flex items-center gap-4">
                        <img
                          src={zoom}
                          className="-mr-10 relative"
                          alt="search"
                        />
                        <input
                          type="text"
                          placeholder="Search preferred airline "
                          className="w-full border-0 border-b focus:ring-0 pl-8 border-b-brand-gray-light focus:outline-none font-normal text-sm placeholder:text-brand-gray-500 py-2.5"
                        />
                      </div>
                    </div>
                    <div className="w-[370px] max-w-full">
                      <div className="flex items-center gap-4 custom-checkbox">
                        <input type="checkbox" id="return" className="hidden" />
                        <label
                          htmlFor="return"
                          className="text-lg text-brand-gray-500 relative"
                        >
                          <span className="ml-2 ">
                            Return to or from another city/airport?
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="w-full md:w-[370px] max-w-full">
                      <div className="flex items-center gap-4 custom-checkbox">
                        <input type="checkbox" id="flight" className="hidden" />
                        <label
                          htmlFor="flight"
                          className="text-lg text-brand-gray-500 relative"
                        >
                          <span className="ml-2 ">Direct Flights</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
