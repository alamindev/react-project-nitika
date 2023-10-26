import React from "react";

export default function ContactInformation() {
  return (
    <div className=" bg-white lg:rounded-xl px-4 py-6 xl:p-6 w-full space-y-4">
      <h2 className="font-medium text-xl sm:text-2xl text-dark">
        Billing and Contact Information
      </h2>
      <form action="" className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5 pb-2 md:pb-0 ">
          <div className="grid grid-cols-1 gap-2">
            <div className="">
              <div className="group error">
                <div className="relative after:top-5 after:absolute after:right-3 group-[.error]:after:content-error">
                  <input
                    id="country"
                    type="text"
                    value="United St_"
                    name="country"
                    className="peer w-full text-sm group-[.error]:!border-brand-red bg-transparent h-[48px] hover:border-brand-blue-100 rounded-[5px] pb-2 border border-brand-gray-light text-brand-gray-500 placeholder-transparent focus:outline-none focus:border-brand-blue-400 pt-5 pl-3 pr-7"
                    placeholder="Country*"
                  />
                  <label htmlFor="country" className="labels">
                    Country<sup>*</sup>
                  </label>
                </div>
                <p className="text-xs text-brand-red-100 pt-2 group-[.error]:block hidden">
                  The country must be selected from the list of available
                  countries.
                </p>
              </div>
            </div>
            <div className="">
              <div className="group error">
                <div className="relative after:top-5 after:absolute after:right-3 group-[.error]:after:content-error">
                  <input
                    id="address"
                    type="text"
                    value="_"
                    name="address"
                    className="peer w-full text-sm group-[.error]:!border-brand-red bg-transparent h-[48px] hover:border-brand-blue-100 rounded-[5px] pb-2 border border-brand-gray-light text-brand-gray-500 placeholder-transparent focus:outline-none focus:border-brand-blue-400 pt-5 pl-3 pr-7"
                    placeholder="address*"
                  />
                  <label htmlFor="address" className="labels">
                    Address<sup>*</sup>
                  </label>
                </div>
                <p className="text-xs text-brand-red-100 pt-2 group-[.error]:block hidden">
                  Please enter valid address
                </p>
              </div>
            </div>
            <div className="">
              <div className="group error">
                <div className="relative after:top-5 after:absolute after:right-3 group-[.error]:after:content-error">
                  <input
                    id="City"
                    type="text"
                    value="Au_"
                    name="City"
                    className="peer w-full text-sm group-[.error]:!border-brand-red bg-transparent h-[48px] hover:border-brand-blue-100 rounded-[5px] pb-2 border border-brand-gray-light text-brand-gray-500 placeholder-transparent focus:outline-none focus:border-brand-blue-400 pt-5 pl-3 pr-7"
                    placeholder="City*"
                  />
                  <label htmlFor="City" className="labels">
                    City<sup>*</sup>
                  </label>
                </div>
                <p className="text-xs text-brand-red-100 pt-2 group-[.error]:block hidden">
                  The city must be at least 2 characters long.
                </p>
              </div>
            </div>
            <div className="">
              <div className="group error">
                <div className="relative after:top-5 after:absolute after:right-3 group-[.error]:after:content-error">
                  <input
                    id="State"
                    type="text"
                    value="Tex_"
                    name="State"
                    className="peer w-full text-sm group-[.error]:!border-brand-red bg-transparent h-[48px] hover:border-brand-blue-100 rounded-[5px] pb-2 border border-brand-gray-light text-brand-gray-500 placeholder-transparent focus:outline-none focus:border-brand-blue-400 pt-5 pl-3 pr-7"
                    placeholder="State*"
                  />
                  <label htmlFor="State" className="labels">
                    State<sup>*</sup>
                  </label>
                </div>
                <div className=" gap-2 items-center group-[.error]:flex hidden pt-2">
                  <div className="w-1 h-1 rounded-full bg-brand-red-100"></div>
                  <p className="text-xs text-brand-red-100  ">
                    The state must be selected from the list of available
                    states.
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="group error">
                <div className="relative after:top-5 after:absolute after:right-3 group-[.error]:after:content-error">
                  <input
                    id="zip_code"
                    type="text"
                    value="78753000"
                    name="zip_code"
                    className="peer w-full text-sm group-[.error]:!border-brand-red bg-transparent h-[48px] hover:border-brand-blue-100 rounded-[5px] pb-2 border border-brand-gray-light text-brand-gray-500 placeholder-transparent focus:outline-none focus:border-brand-blue-400 pt-5 pl-3 pr-7"
                    placeholder="Zip Code*"
                  />
                  <label htmlFor="zip_code" className="labels">
                    Zip Code<sup>*</sup>
                  </label>
                </div>
                <p className="text-xs text-brand-red-100 pt-2 group-[.error]:block hidden">
                  The zip code must be a valid zip code for the selected
                  country.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5">
          <div className="">
            <div className="group error">
              <div className="relative after:top-5 after:absolute after:right-3 group-[.error]:after:content-error">
                <input
                  id="phone_number"
                  type="text"
                  value="+123 456 7890"
                  name="phone_number"
                  className="peer w-full text-sm group-[.error]:!border-brand-red bg-transparent h-[48px] hover:border-brand-blue-100 rounded-[5px] pb-2 border border-brand-gray-light text-brand-gray-500 placeholder-transparent focus:outline-none focus:border-brand-blue-400 pt-5 pl-3 pr-7"
                  placeholder="phone_number*"
                />
                <label htmlFor="phone_number" className="labels">
                  Contact Phone<sup>*</sup>
                </label>
              </div>
              <div className=" gap-2 items-center group-[.error]:flex hidden pt-2">
                <div className="w-1 h-1 rounded-full bg-brand-red-100"></div>
                <p className="text-xs text-brand-red-100 ">
                  The phone number must be a valid phone number for the selected
                  country.
                </p>
              </div>
            </div>
          </div>
          <div className="md:pt-3 pb-1.5 md:pb-0">
            <div className="custom-checkbox checkbox-three">
              <input type="checkbox" id="1" name="1" className="hidden" />
              <label
                htmlFor="1"
                className="text-lg select-none cursor-pointer text-brand-blue-100 relative w-full flex justify-between items-start"
              >
                <span className="ml-2 w-full text-sm sm:text-base text-brand-blue-100">
                  I agree to share this contact information with the airline(s)
                  associated with this booking
                </span>
              </label>
            </div>
          </div>
          <div className="group error">
            <div className="relative after:top-5 after:absolute after:right-3 group-[.error]:after:content-error">
              <input
                id="email"
                type="text"
                value="+123 456 7890"
                name="email"
                className="peer w-full text-sm group-[.error]:!border-brand-red bg-transparent h-[48px] hover:border-brand-blue-100 rounded-[5px] pb-2 border border-brand-gray-light text-brand-gray-500 placeholder-transparent focus:outline-none focus:border-brand-blue-400 pt-5 pl-3 pr-7"
                placeholder="email*"
              />
              <label htmlFor="email" className="labels">
                Confirm Email Address<sup>*</sup>
              </label>
            </div>
            <p className="text-xs text-brand-red-100 pt-2 ">
              Please enter calid email address
            </p>
          </div>
          <div className="md:pt-3">
            <p className="text-sm sm:text-base text-brand-blue-100">
              Booking confirmation will be sent to this email address.
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
