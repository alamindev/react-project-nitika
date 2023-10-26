import React, { useEffect, useState } from "react";
import Plus from "../../../Svg/Plus";
import Trash from "../../../Svg/Trash";
import DateOfBirth from "./DateOfBirth";
export default function AddTraveler() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="pt-7 pb-3 space-y-3">
      {!isLoading ? (
        <>
          <ul className="grid gap-6 sm:gap-4">
            <li className="flex flex-col sm:flex-row gap-2 items-start">
              <div className="flex justify-between items-center w-full sm:w-14 sm:shrink-0">
                <p className="text-sm 2xl:text-base text-dark  mt-4">Adult 1</p>
                <div className="mt-4 group   sm:hidden">
                  <button
                    type="button"
                    className="w-8 h-8 flex justify-center rounded-lg border items-center border-brand-red group-hover:bg-brand-red bg-white transition-all"
                  >
                    <Trash classes="stroke-brand-red group-hover:stroke-white" />
                  </button>
                </div>
              </div>
              <div className="flex gap-2 flex-col xl:flex-row items-start w-full sm:w-auto">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 items-start  w-full sm:w-auto">
                  <div className="group error ">
                    <div className="relative after:top-5 after:absolute after:right-3 group-[.error]:after:content-error">
                      <input
                        id="first_name"
                        type="text"
                        value="--"
                        name="first_name"
                        className="peer w-full text-sm group-[.error]:!border-brand-red bg-transparent h-[48px] hover:border-brand-blue-100 rounded-[5px] pb-2 border border-brand-gray-light text-brand-gray-500 placeholder-transparent focus:outline-none focus:border-brand-blue-400 pt-5 pl-3 pr-7"
                        placeholder="first name"
                      />
                      <label htmlFor="first_name" className="labels">
                        First name<sup>*</sup>
                      </label>
                    </div>
                    <p className="text-xs text-brand-red-100 pt-2 group-[.error]:block hidden">
                      Please enter first name
                    </p>
                  </div>
                  <div className="group error ">
                    <div className="relative after:top-5 after:absolute after:right-3 group-[.error]:after:content-error">
                      <input
                        id="middle_name"
                        type="text"
                        value="--"
                        name="middle_name"
                        className="peer w-full text-sm group-[.error]:!border-brand-red bg-transparent h-[48px] hover:border-brand-blue-100 rounded-[5px] pb-2 border border-brand-gray-light text-brand-gray-500 placeholder-transparent focus:outline-none focus:border-brand-blue-400 pt-5 pl-3 pr-7"
                        placeholder="Middle name"
                      />
                      <label htmlFor="middle_name" className="labels-info">
                        Middle name
                      </label>
                    </div>
                    <p className="text-xs text-brand-red-100 pt-2 group-[.error]:block hidden">
                      Please enter Middle name
                    </p>
                  </div>
                  <div className="group error ">
                    <div className="relative after:top-5 after:absolute after:right-3 group-[.error]:after:content-error">
                      <input
                        id="last_name"
                        type="text"
                        value="--"
                        name="last_name"
                        className="peer w-full text-sm group-[.error]:!border-brand-red bg-transparent h-[48px] hover:border-brand-blue-100 rounded-[5px] pb-2 border border-brand-gray-light text-brand-gray-500 placeholder-transparent focus:outline-none focus:border-brand-blue-400 pt-5 pl-3 pr-7"
                        placeholder="Last name"
                      />
                      <label htmlFor="last_name" className="labels-info">
                        Last name<sup>*</sup>
                      </label>
                    </div>
                    <p className="text-xs text-brand-red-100 pt-2 group-[.error]:block hidden">
                      Please enter letters, space, dash, or apostrophe only.
                      (Minimum of 2 characters)
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 items-start w-full sm:w-auto">
                  <DateOfBirth classes="error" />
                  <div className="group error w-[196px] sm:w-[120px] xl:w-[90px] 2xl:w-[110px]  max-w-full">
                    <div className="relative group-[.error]:before:content-none before:top-4 before:absolute before:right-3 before:content-arrow-down after:top-5 after:absolute after:right-3 group-[.error]:after:content-error">
                      <select
                        name="gender"
                        id="gender"
                        placeholder="Last name"
                        className="peer w-full appearance-none bg-none text-sm group-[.error]:!border-brand-red bg-transparent h-[48px] hover:border-brand-blue-100 rounded-[5px] pb-2 border border-brand-gray-light text-brand-gray-500 placeholder-transparent focus:outline-none focus:border-brand-blue-400 pt-5 pl-3 pr-7"
                      >
                        <option value="">-</option>
                        <option value="">Male</option>
                        <option value="">Female</option>
                      </select>
                      <label htmlFor="last_name" className="labels-select">
                        Gender<sup>*</sup>
                      </label>
                    </div>
                    <p className="text-xs text-brand-red-100 pt-2 group-[.error]:block hidden">
                      Please select your gender
                    </p>
                  </div>
                  <div className="mt-4 group hidden sm:block">
                    <button
                      type="button"
                      className="w-8 h-8 flex justify-center rounded-lg border items-center border-brand-red group-hover:bg-brand-red bg-white transition-all"
                    >
                      <Trash classes="stroke-brand-red group-hover:stroke-white" />
                    </button>
                  </div>
                </div>
              </div>
            </li>
            <li className="flex flex-col sm:flex-row gap-2 items-start">
              <div className="flex justify-between items-center w-full sm:w-14 sm:shrink-0">
                <p className="text-sm 2xl:text-base text-dark mt-4">Adult 2</p>
                <div className="mt-4 group   sm:hidden">
                  <button
                    type="button"
                    className="w-8 h-8 flex justify-center rounded-lg border items-center border-brand-red group-hover:bg-brand-red bg-white transition-all"
                  >
                    <Trash classes="stroke-brand-red group-hover:stroke-white" />
                  </button>
                </div>
              </div>
              <div className="flex gap-2 flex-col xl:flex-row items-start w-full">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 items-start w-full">
                  <div className="group">
                    <div className="relative after:top-5 after:absolute after:right-3 group-[.error]:after:content-error">
                      <input
                        id="first_name_1"
                        type="text"
                        name="first_name_1"
                        className="peer w-full text-sm group-[.error]:!border-brand-red bg-transparent h-[48px] hover:border-brand-blue-100 rounded-[5px] pb-2 border border-brand-gray-light text-brand-gray-500 placeholder-transparent focus:outline-none focus:border-brand-blue-400 pt-5 pl-3 pr-7"
                        placeholder="first name"
                      />
                      <label htmlFor="first_name_1" className="labels">
                        First name<sup>*</sup>
                      </label>
                    </div>
                    <p className="text-xs text-brand-red-100 pt-2 group-[.error]:block hidden">
                      Please enter first name
                    </p>
                  </div>
                  <div className="group">
                    <div className="relative after:top-5 after:absolute after:right-3 group-[.error]:after:content-error">
                      <input
                        id="middle_name_1"
                        type="text"
                        name="middle_name_1"
                        className="peer w-full text-sm group-[.error]:!border-brand-red bg-transparent h-[48px] hover:border-brand-blue-100 rounded-[5px] pb-2 border border-brand-gray-light text-brand-gray-500 placeholder-transparent focus:outline-none focus:border-brand-blue-400 pt-5 pl-3 pr-7"
                        placeholder="Middle name"
                      />
                      <label htmlFor="middle_name_1" className="labels-info">
                        Middle name
                      </label>
                    </div>
                    <p className="text-xs text-brand-red-100 pt-2 group-[.error]:block hidden">
                      Please enter Middle name
                    </p>
                  </div>
                  <div className="group">
                    <div className="relative after:top-5 after:absolute after:right-3 group-[.error]:after:content-error">
                      <input
                        id="last_name_1"
                        type="text"
                        name="last_name_1"
                        className="peer w-full text-sm group-[.error]:!border-brand-red bg-transparent h-[48px] hover:border-brand-blue-100 rounded-[5px] pb-2 border border-brand-gray-light text-brand-gray-500 placeholder-transparent focus:outline-none focus:border-brand-blue-400 pt-5 pl-3 pr-7"
                        placeholder="Last name"
                      />
                      <label htmlFor="last_name_1" className="labels">
                        Last name<sup>*</sup>
                      </label>
                    </div>
                    <p className="text-xs text-brand-red-100 pt-2 group-[.error]:block hidden">
                      Please enter letters, space, dash, or apostrophe only.
                      (Minimum of 2 characters)
                    </p>
                  </div>
                </div>
                <div className="shrink-0 flex flex-col sm:flex-row gap-2 items-start w-full sm:w-auto">
                  <DateOfBirth />
                  <div className="group w-[196px] sm:w-[120px] xl:w-[90px] 2xl:w-[110px]  max-w-full">
                    <div className="relative group-[.error]:before:content-none before:top-4 before:absolute before:right-3 before:content-arrow-down after:top-5 after:absolute after:right-3 group-[.error]:after:content-error">
                      <select
                        name="gender_1"
                        id="gender_1"
                        placeholder="Last name"
                        className="peer w-full appearance-none bg-none text-sm group-[.error]:!border-brand-red bg-transparent h-[48px] hover:border-brand-blue-100 rounded-[5px] pb-2 border border-brand-gray-light text-brand-gray-500 placeholder-transparent focus:outline-none focus:border-brand-blue-400 pt-5 pl-3 pr-7"
                      >
                        <option value="">-</option>
                        <option value="">Male</option>
                        <option value="">Female</option>
                      </select>
                      <label htmlFor="gender_1" className="labels-select">
                        Gender<sup>*</sup>
                      </label>
                    </div>
                    <p className="text-xs text-brand-red-100 pt-2 group-[.error]:block hidden">
                      Please select your gender
                    </p>
                  </div>
                  <div className="mt-4 group hidden sm:block">
                    <button
                      type="button"
                      className="w-8 h-8 flex justify-center rounded-lg border items-center border-brand-red group-hover:bg-brand-red bg-white transition-all"
                    >
                      <Trash classes="stroke-brand-red group-hover:stroke-white" />
                    </button>
                  </div>
                </div>
              </div>
            </li>
            <li className="flex flex-col sm:flex-row gap-2 items-start">
              <div className="flex justify-between items-center w-full sm:w-14 sm:shrink-0">
                <p className="text-sm 2xl:text-base text-dark mt-4">Child 1</p>
                <div className="mt-4 group   sm:hidden">
                  <button
                    type="button"
                    className="w-8 h-8 flex justify-center rounded-lg border items-center border-brand-red group-hover:bg-brand-red bg-white transition-all"
                  >
                    <Trash classes="stroke-brand-red group-hover:stroke-white" />
                  </button>
                </div>
              </div>
              <div className="flex gap-2 flex-col xl:flex-row items-start w-full">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 items-start w-full">
                  <div className="group">
                    <div className="relative after:top-5 after:absolute after:right-3 group-[.error]:after:content-error">
                      <input
                        id="first_name_2"
                        type="text"
                        name="first_name_2"
                        className="peer w-full text-sm group-[.error]:!border-brand-red bg-transparent h-[48px] hover:border-brand-blue-100 rounded-[5px] pb-2 border border-brand-gray-light text-brand-gray-500 placeholder-transparent focus:outline-none focus:border-brand-blue-400 pt-5 pl-3 pr-7"
                        placeholder="first name"
                      />
                      <label htmlFor="first_name_2" className="labels">
                        First name<sup>*</sup>
                      </label>
                    </div>
                    <p className="text-xs text-brand-red-100 pt-2 group-[.error]:block hidden">
                      Please enter first name
                    </p>
                  </div>
                  <div className="group">
                    <div className="relative after:top-5 after:absolute after:right-3 group-[.error]:after:content-error">
                      <input
                        id="middle_name_2"
                        type="text"
                        name="middle_name_2"
                        className="peer w-full text-sm group-[.error]:!border-brand-red bg-transparent h-[48px] hover:border-brand-blue-100 rounded-[5px] pb-2 border border-brand-gray-light text-brand-gray-500 placeholder-transparent focus:outline-none focus:border-brand-blue-400 pt-5 pl-3 pr-7"
                        placeholder="Middle name"
                      />
                      <label htmlFor="middle_name_2" className="labels-info">
                        Middle name
                      </label>
                    </div>
                    <p className="text-xs text-brand-red-100 pt-2 group-[.error]:block hidden">
                      Please enter Middle name
                    </p>
                  </div>
                  <div className="group">
                    <div className="relative after:top-5 after:absolute after:right-3 group-[.error]:after:content-error">
                      <input
                        id="last_name_2"
                        type="text"
                        name="last_name_2"
                        className="peer w-full text-sm group-[.error]:!border-brand-red bg-transparent h-[48px] hover:border-brand-blue-100 rounded-[5px] pb-2 border border-brand-gray-light text-brand-gray-500 placeholder-transparent focus:outline-none focus:border-brand-blue-400 pt-5 pl-3 pr-7"
                        placeholder="Last name"
                      />
                      <label htmlFor="last_name_2" className="labels">
                        Last name<sup>*</sup>
                      </label>
                    </div>
                    <p className="text-xs text-brand-red-100 pt-2 group-[.error]:block hidden">
                      Please enter letters, space, dash, or apostrophe only.
                      (Minimum of 2 characters)
                    </p>
                  </div>
                </div>
                <div className="shrink-0 flex flex-col sm:flex-row gap-2 items-start w-full sm:w-auto">
                  <DateOfBirth />
                  <div className="group w-[196px] sm:w-[120px] xl:w-[90px] 2xl:w-[110px]  max-w-full">
                    <div className="relative group-[.error]:before:content-none before:top-4 before:absolute before:right-3 before:content-arrow-down after:top-5 after:absolute after:right-3 group-[.error]:after:content-error">
                      <select
                        name="gender_2"
                        id="gender_2"
                        placeholder="Last name"
                        className="peer w-full appearance-none bg-none text-sm group-[.error]:!border-brand-red bg-transparent h-[48px] hover:border-brand-blue-100 rounded-[5px] pb-2 border border-brand-gray-light text-brand-gray-500 placeholder-transparent focus:outline-none focus:border-brand-blue-400 pt-5 pl-3 pr-7"
                      >
                        <option value="">-</option>
                        <option value="">Male</option>
                        <option value="">Female</option>
                      </select>
                      <label htmlFor="gender_2" className="labels-select">
                        Gender<sup>*</sup>
                      </label>
                    </div>
                    <p className="text-xs text-brand-red-100 pt-2 group-[.error]:block hidden">
                      Please select your gender
                    </p>
                  </div>
                  <div className="mt-4 group hidden sm:block">
                    <button
                      type="button"
                      className="w-8 h-8 flex justify-center rounded-lg border items-center border-brand-red group-hover:bg-brand-red bg-white transition-all"
                    >
                      <Trash classes="stroke-brand-red group-hover:stroke-white" />
                    </button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div className="flex justify-end">
            <div className="group">
              <button
                type="button"
                className="px-5 flex gap-2.5 border border-brand-blue-600 text-base sm:text-lg font-medium items-center rounded-full py-2.5 text-brand-blue-600 group-hover:bg-brand-blue-600 group-hover:text-white"
              >
                <Plus classes="stroke-brand-blue-600 group-hover:stroke-white" />
                Add Traveler
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="space-y-6">
            <div className="flex gap-2">
              <div className=" rounded bg-brand-gray-100 h-6 shadow-inner w-16 shrink-0 animate-pulse"></div>
              <div className=" rounded bg-brand-gray-100 h-6 shadow-inner w-full animate-pulse"></div>
              <div className=" rounded bg-brand-gray-100 h-6 shadow-inner w-full animate-pulse"></div>
              <div className=" rounded bg-brand-gray-100 h-6 shadow-inner w-full animate-pulse"></div>
              <div className=" rounded bg-brand-gray-100 h-6 shadow-inner w-full animate-pulse"></div>
              <div className=" rounded bg-brand-gray-100 h-6 shadow-inner w-24 shrink-0 animate-pulse"></div>
              <div className=" rounded bg-brand-gray-100 h-6 shadow-inner w-10 shrink-0 animate-pulse"></div>
            </div>
            <div className="flex gap-2">
              <div className=" rounded bg-brand-gray-100 h-6 shadow-inner w-16 shrink-0 animate-pulse"></div>
              <div className=" rounded bg-brand-gray-100 h-6 shadow-inner w-full animate-pulse"></div>
              <div className=" rounded bg-brand-gray-100 h-6 shadow-inner w-full animate-pulse"></div>
              <div className=" rounded bg-brand-gray-100 h-6 shadow-inner w-full animate-pulse"></div>
              <div className=" rounded bg-brand-gray-100 h-6 shadow-inner w-full animate-pulse"></div>
              <div className=" rounded bg-brand-gray-100 h-6 shadow-inner w-24 shrink-0 animate-pulse"></div>
              <div className=" rounded bg-brand-gray-100 h-6 shadow-inner w-10 shrink-0 animate-pulse"></div>
            </div>
            <div className="flex gap-2">
              <div className=" rounded bg-brand-gray-100 h-6 shadow-inner w-16 shrink-0 animate-pulse"></div>
              <div className=" rounded bg-brand-gray-100 h-6 shadow-inner w-full animate-pulse"></div>
              <div className=" rounded bg-brand-gray-100 h-6 shadow-inner w-full animate-pulse"></div>
              <div className=" rounded bg-brand-gray-100 h-6 shadow-inner w-full animate-pulse"></div>
              <div className=" rounded bg-brand-gray-100 h-6 shadow-inner w-full animate-pulse"></div>
              <div className=" rounded bg-brand-gray-100 h-6 shadow-inner w-24 shrink-0 animate-pulse"></div>
              <div className=" rounded bg-brand-gray-100 h-6 shadow-inner w-10 shrink-0 animate-pulse"></div>
            </div>
          </div>
          <div className="flex justify-end pt-4">
            <div className=" rounded bg-brand-gray-light h-12 shadow-inner w-[140px] animate-pulse"></div>
          </div>
        </>
      )}
    </div>
  );
}
