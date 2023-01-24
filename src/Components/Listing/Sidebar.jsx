import React, { useState } from "react";
import { getTrackBackground, Range } from "react-range";
import arrowDown from "../../assets/images/listing/chevron-down.svg";
import remove from "../../assets/images/listing/e-remove.svg";
import info from "../../assets/images/listing/info-circle.svg";
import ranking from "../../assets/images/listing/ranking.svg";
import search from "../../assets/images/listing/search.svg";

export default function Sidebar({ open, removeFilter }) {
  let [trackPrice, setTrackPrice] = useState(false);
  let [flight, setFlight] = useState([50, 100]);
  let [layover, setLayover] = useState([10, 150]);
  let [price, setPrice] = useState([100, 12000]);
  return (
    <aside
      className={
        "fixed top-0 z-30 left-0 w-full transition-all duration-200 pt-36 lg:pt-0 lg:static lg:w-[315px] lg:w-[280px] 2xl:w-[315px]  shrink-0 bg-white rounded-2xl overflow-hidden px-4 xl:px-6 py-8 " +
        (open ? " translate-y-0" : "-translate-y-full lg:translate-y-0")
      }
    >
      <div className="pb-7 border-b border-brand-gray-25">
        <div className="flex gap-4 justify-between">
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-lg bg-[#ECECEC] bg-opacity-50 flex justify-center items-center">
              <img src={ranking} alt="statistics" />
            </div>
            <div className="">
              <h4 className="text-brand-dark text-base">Our Advice</h4>
              <h2 className="text-brand-dark font-medium text-[21px] ">
                Our Advice
              </h2>
            </div>
          </div>
          <button
            type="button"
            onClick={removeFilter}
            className="md:hidden w-[32px] h-[32px] rounded-full flex justify-center items-center border border-brand-gray-light"
          >
            <img src={remove} alt="remove" />
          </button>
        </div>
        <div className="pt-5 space-y-1">
          <p className="text-base text-brand-dark text-opacity-70">
            Prices are likely to fall within
          </p>
          <div className="flex gap-2 items-center">
            <p className="text-base text-brand-dark text-opacity-70">7 days</p>
            <img src={info} alt="info" />
          </div>
        </div>
      </div>
      <div className="py-7 border-b border-brand-gray-25 space-y-3">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-medium text-brand-dark">Track Prices</h2>
          <div
            className={
              "flex items-center group gap-2 " + (trackPrice ? "active" : "")
            }
          >
            <span className="ml-3" id="annual-billing-label">
              <span className="text-sm font-medium text-gray-900">
                {trackPrice ? "On" : "Off"}
              </span>
            </span>
            <button
              type="button"
              onClick={() => setTrackPrice((state) => !state)}
              className="bg-brand-gray-light group-[.active]:bg-indigo-600 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-0 focus:ring-offset-2"
              role="switch"
              aria-checked="false"
              aria-labelledby="annual-billing-label"
            >
              <span className="absolute right-1 -top-0.5 text-2xl leading-none text-white">
                -
              </span>
              <span
                aria-hidden="true"
                className="translate-x-0 group-[.active]:translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
              ></span>
            </button>
          </div>
        </div>
        <p className="text-lg font-medium text-brand-dark">
          2049 of <span className="text-brand-red">2509 flights</span>
        </p>
      </div>
      <div className="pt-5 xl:pt-9 pb-4 xl:pb-7 border-b border-brand-gray-25 space-y-2 xl:space-y-4">
        <h2 className="text-xl font-medium text-brand-dark">Stops</h2>
        <ul className="grid gap-2">
          <li className="custom-checkbox">
            <input
              type="checkbox"
              id="nonstop"
              name="stops"
              className="hidden"
              checked
            />
            <label
              htmlFor="nonstop"
              className="text-lg select-none cursor-pointer text-brand-blue-100 relative w-full flex justify-between items-center"
            >
              <span className="ml-2 w-full truncate ">Nonstop</span>
              <span className="ml-2 text-gray-500 shrink-0">$1,877</span>
            </label>
          </li>
          <li className="custom-checkbox">
            <input
              type="checkbox"
              id="nonstop1"
              name="stops1"
              className="hidden"
              checked
            />
            <label
              htmlFor="nonstop1"
              className="text-lg select-none cursor-pointer text-brand-blue-100 relative w-full flex justify-between items-center"
            >
              <span className="ml-2 w-full truncate ">1 Stop</span>
              <span className="ml-2 text-gray-500 shrink-0">$897</span>
            </label>
          </li>
          <li className="custom-checkbox">
            <input
              type="checkbox"
              name="stops2"
              id="nonstop2"
              className="hidden"
            />
            <label
              htmlFor="nonstop2"
              className="text-lg select-none cursor-pointer text-brand-blue-100 relative w-full flex justify-between items-center"
            >
              <span className="ml-2 w-full truncate ">2+ Stops</span>
              <span className="ml-2 text-gray-500 shrink-0">$923</span>
            </label>
          </li>
        </ul>
      </div>
      <div className="pt-5 xl:pt-9 pb-4 xl:pb-7 border-b border-brand-gray-25 space-y-2 xl:space-y-4">
        <h2 className="text-xl font-medium text-brand-dark">Airports</h2>
        <ul className="grid gap-2">
          <li className="custom-checkbox">
            <input
              type="checkbox"
              id="Airports"
              name="Airports"
              className="hidden"
              checked
            />
            <label
              htmlFor="Airports"
              className="text-lg select-none cursor-pointer text-brand-blue-100 relative w-full flex justify-between items-center"
            >
              <span className="ml-2 w-full truncate ">Depart/return same</span>
            </label>
          </li>
        </ul>
        <div className="space-y-4 pt-4">
          <h2 className="text-xl font-medium text-brand-dark">New York</h2>
          <ul className="grid gap-2">
            <li className="custom-checkbox">
              <input
                type="checkbox"
                id="newwork"
                name="newwork"
                className="hidden"
                checked
              />
              <label
                htmlFor="newwork"
                className="text-lg select-none cursor-pointer text-brand-blue-100 relative w-full flex justify-between items-center"
              >
                <span className="ml-2 w-full truncate ">Nonstop</span>
                <span className="ml-2 text-gray-500 shrink-0">$897</span>
              </label>
            </li>
            <li className="custom-checkbox">
              <input
                type="checkbox"
                id="newwork"
                name="newwork"
                className="hidden"
                checked
              />
              <label
                htmlFor="newwork"
                className="text-lg select-none cursor-pointer text-brand-blue-100 relative w-full flex justify-between items-center"
              >
                <span className="ml-2 w-full truncate ">
                  JFK: John F Kenned...
                </span>
                <span className="ml-2 text-gray-500 shrink-0">$897</span>
              </label>
            </li>
            <li className="custom-checkbox">
              <input
                type="checkbox"
                id="newwork"
                name="newwork"
                className="hidden"
                checked
              />
              <label
                htmlFor="newwork"
                className="text-lg select-none cursor-pointer text-brand-blue-100 relative w-full flex justify-between items-center"
              >
                <span className="ml-2 w-full truncate ">EWR: Newark</span>
                <span className="ml-2 text-gray-500 shrink-0">$1,004</span>
              </label>
            </li>
            <li className="custom-checkbox">
              <input
                type="checkbox"
                id="newwork"
                name="newwork"
                className="hidden"
                checked
              />
              <label
                htmlFor="newwork"
                className="text-lg select-none cursor-pointer text-brand-blue-100 relative w-full flex justify-between items-center"
              >
                <span className="ml-2 w-full truncate ">LGA: LaGuardia</span>
                <span className="ml-2 text-gray-500 shrink-0">$923</span>
              </label>
            </li>
            <li className="custom-checkbox">
              <input
                type="checkbox"
                id="newwork"
                name="newwork"
                className="hidden"
                checked
              />
              <label
                htmlFor="newwork"
                className="text-lg select-none cursor-pointer text-brand-blue-100 relative w-full flex justify-between items-center"
              >
                <span className="ml-2 w-full truncate ">
                  HPN: Westchester...
                </span>
              </label>
            </li>
          </ul>
        </div>
        <div className="space-y-4 pt-4">
          <h2 className="text-xl font-medium text-brand-dark">New Delhi</h2>
          <ul className="grid gap-2">
            <li className="custom-checkbox">
              <input
                type="checkbox"
                id="newwork"
                name="newwork"
                className="hidden"
                checked
              />
              <label
                htmlFor="newwork"
                className="text-lg select-none cursor-pointer text-brand-blue-100 relative w-full flex justify-between items-center"
              >
                <span className="ml-2 w-full truncate ">
                  DEL: Indira Gandhi I...
                </span>
                <span className="ml-2 text-gray-500 shrink-0">$897</span>
              </label>
            </li>
          </ul>
        </div>
      </div>
      <div className="pt-5 xl:pt-9 pb-4 xl:pb-7 border-b border-brand-gray-25 space-y-2 xl:space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-medium text-brand-dark">Duration</h2>
          <img src={arrowDown} alt="arrow-down" />
        </div>
        <div className="">
          <div className="pb-2">
            <h4 className="text-lg text-brand-dark">Flight leg</h4>
            <div className="space-y-2">
              <p className="text-base text-brand-dark">
                <span>15h 20m</span> - <span>61h 15m</span>
              </p>
              <Range
                values={flight}
                step={0.1}
                min={0}
                max={200}
                onChange={(values) => {
                  setFlight(values);
                }}
                renderTrack={({ props, children }) => (
                  <div
                    onMouseDown={props.onMouseDown}
                    onTouchStart={props.onTouchStart}
                    style={{
                      ...props.style,
                    }}
                    className="py-3 px-4"
                  >
                    <div
                      ref={props.ref}
                      style={{
                        height: "2px",
                        width: "100%",
                        background: getTrackBackground({
                          values: flight,
                          colors: ["#C6C6C6", "#FC1A02", "#ccc"],
                          min: 0,
                          max: 200,
                        }),
                        alignSelf: "center",
                      }}
                    >
                      {children}
                    </div>
                  </div>
                )}
                renderThumb={({ props, isDragged }) => (
                  <div
                    {...props}
                    className="w-7 h-7 border border-[#C6C6C6] rounded-full bg-white focus:outline-none"
                  ></div>
                )}
              />
            </div>
          </div>
          <div className="">
            <h4 className="text-lg text-brand-dark">Layover</h4>
            <div className="space-y-2">
              <p className="text-base text-brand-dark">
                <span>0h 30m </span> - <span>30h 30m</span>
              </p>
              <Range
                values={layover}
                step={0.1}
                min={0}
                max={200}
                onChange={(values) => {
                  setLayover(values);
                }}
                renderTrack={({ props, children }) => (
                  <div
                    onMouseDown={props.onMouseDown}
                    onTouchStart={props.onTouchStart}
                    style={{
                      ...props.style,
                    }}
                    className="py-3 px-4"
                  >
                    <div
                      ref={props.ref}
                      style={{
                        height: "2px",
                        width: "100%",
                        background: getTrackBackground({
                          values: layover,
                          colors: ["#C6C6C6", "#FC1A02", "#ccc"],
                          min: 0,
                          max: 200,
                        }),
                        alignSelf: "center",
                      }}
                    >
                      {children}
                    </div>
                  </div>
                )}
                renderThumb={({ props, isDragged }) => (
                  <div
                    {...props}
                    className="w-7 h-7 border border-[#C6C6C6] rounded-full bg-white focus:outline-none"
                  ></div>
                )}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="pt-5 xl:pt-9 pb-4 xl:pb-7 border-b border-brand-gray-25 space-y-2 xl:space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-medium text-brand-dark">Price</h2>
          <img src={arrowDown} alt="arrow-down" />
        </div>
        <div className="">
          <div className="pb-2">
            <h4 className="text-lg text-brand-dark">Flight leg</h4>
            <div className="space-y-2">
              <p className="text-base text-brand-dark">
                <span>$897 </span> - <span>$12,081</span>
              </p>
              <Range
                values={price}
                step={0.1}
                min={100}
                max={20000}
                onChange={(values) => {
                  setPrice(values);
                }}
                renderTrack={({ props, children }) => (
                  <div
                    onMouseDown={props.onMouseDown}
                    onTouchStart={props.onTouchStart}
                    style={{
                      ...props.style,
                    }}
                    className="py-3 px-4"
                  >
                    <div
                      ref={props.ref}
                      style={{
                        height: "2px",
                        width: "100%",
                        background: getTrackBackground({
                          values: price,
                          colors: ["#C6C6C6", "#FC1A02", "#ccc"],
                          min: 100,
                          max: 20000,
                        }),
                        alignSelf: "center",
                      }}
                    >
                      {children}
                    </div>
                  </div>
                )}
                renderThumb={({ props, isDragged }) => (
                  <div
                    {...props}
                    className="w-7 h-7 border border-[#C6C6C6] rounded-full bg-white focus:outline-none"
                  ></div>
                )}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="pt-5 xl:pt-9 pb-4 xl:pb-7 border-b border-brand-gray-25 space-y-2 xl:space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-medium text-brand-dark">
            Layover airports
          </h2>
          <img src={arrowDown} alt="arrow-down" />
        </div>
        <div className="flex gap-2 pb-2 border-b border-[#C6C6C6]">
          <img src={search} alt="search" />
          <input
            type="text"
            name="search"
            placeholder="Airports"
            className="px-1 py-1 w-full text-brand-blue-100 text-opacity-50 focus:outline-none focus:ring-0"
          />
          <button type="button" className="text-brand-red text-lg">
            Search
          </button>
        </div>
      </div>
      <div className="pt-5 xl:pt-9 pb-4 xl:pb-7 border-b border-brand-gray-25 space-y-2 xl:space-y-4">
        <h2 className="text-xl font-medium text-brand-dark">Azerbaijan</h2>
        <ul className="grid gap-2">
          <li className="custom-checkbox">
            <input type="checkbox" id="baku" name="stops" className="hidden" />
            <label
              htmlFor="baku"
              className="text-lg select-none cursor-pointer text-brand-blue-100 relative w-full flex justify-between items-center"
            >
              <span className="ml-2 w-full truncate ">Baku (GYD)</span>
            </label>
          </li>
        </ul>
        <div className="pt-4 space-y-3">
          <h2 className="text-xl font-medium text-brand-dark">Bahrain</h2>
          <ul className="grid gap-2">
            <li className="custom-checkbox">
              <input
                type="checkbox"
                id="manama"
                name="manama"
                className="hidden"
              />
              <label
                htmlFor="manama"
                className="text-lg select-none cursor-pointer text-brand-blue-100 relative w-full flex justify-between items-center"
              >
                <span className="ml-2 w-full truncate ">Manama (BAH)</span>
              </label>
            </li>
          </ul>
        </div>
        <div className="pt-4 space-y-3">
          <h2 className="text-xl font-medium text-brand-dark">Belgium</h2>
          <ul className="grid gap-2">
            <li className="custom-checkbox">
              <input
                type="checkbox"
                id="Brussels"
                name="Brussels"
                className="hidden"
              />
              <label
                htmlFor="Brussels"
                className="text-lg select-none cursor-pointer text-brand-blue-100 relative w-full flex justify-between items-center"
              >
                <span className="ml-2 w-full truncate ">Brussels (BRU)</span>
              </label>
            </li>
          </ul>
        </div>
        <div className="pt-4 space-y-3">
          <h2 className="text-xl font-medium text-brand-dark">Canada</h2>
          <ul className="grid gap-2">
            <li className="custom-checkbox">
              <input type="checkbox" id="1" name="1" className="hidden" />
              <label
                htmlFor="1"
                className="text-lg select-none cursor-pointer text-brand-blue-100 relative w-full flex justify-between items-center"
              >
                <span className="ml-2 w-full truncate ">Calgary (YYC)</span>
              </label>
            </li>
            <li className="custom-checkbox">
              <input type="checkbox" id="2" name="2" className="hidden" />
              <label
                htmlFor="2"
                className="text-lg select-none cursor-pointer text-brand-blue-100 relative w-full flex justify-between items-center"
              >
                <span className="ml-2 w-full truncate ">Montreal (YUL)</span>
              </label>
            </li>
            <li className="custom-checkbox">
              <input type="checkbox" id="3" name="3" className="hidden" />
              <label
                htmlFor="3"
                className="text-lg select-none cursor-pointer text-brand-blue-100 relative w-full flex justify-between items-center"
              >
                <span className="ml-2 w-full truncate ">Toronto (YYZ)</span>
              </label>
            </li>
            <li className="custom-checkbox">
              <input type="checkbox" id="4" name="4" className="hidden" />
              <label
                htmlFor="4"
                className="text-lg select-none cursor-pointer text-brand-blue-100 relative w-full flex justify-between items-center"
              >
                <span className="ml-2 w-full truncate ">Vancouver (YVR)</span>
              </label>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center pt-6">
        <a href="#" className="text-center underline text-brand-blue-100">
          Show more
        </a>
      </div>
    </aside>
  );
}
