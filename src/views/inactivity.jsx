import React, { useState } from "react";
import LayoutTwo from "../Components/Layouts/LayoutTwo";
import Ads from "../Components/Listing/Ads";
import Filter from "../Components/Listing/Filter";
import Main from "../Components/Listing/Main";
import Sidebar from "../Components/Listing/Sidebar";
import userAvatar from "../assets/images/listing/user-avatar.png";
function Inactivity() {
  let [open, setOpen] = useState(false);
  const openFilter = () => {
    setOpen(true);
  };
  const removeFilter = () => {
    setOpen(false);
  };
  return (
    <>
      <LayoutTwo>
        <Filter />
        <section className="max-[400px]:px-3 px-4 pb-20 overflow-x-auto">
          <div className="max-w-screen-3xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-4 2xl:gap-10 items-start justify-between">
              <Sidebar open={open} removeFilter={removeFilter} />
              <div className="block md:hidden rounded-xl bg-white shadow-4xl w-full border border-brand-gray-5 px-5 py-3.5">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium text-[21px] text-brand-blue-100">
                    Filter
                  </h3>
                  <button
                    type="button"
                    className="flex items-center gap-2"
                    onClick={openFilter}
                  >
                    <p className="text-brand-gray-500 font-base ">
                      12 filters selected
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12.707"
                      height="7.061"
                      viewBox="0 0 12.707 7.061"
                    >
                      <g
                        id="Group_21"
                        dataName="Group 21"
                        transform="translate(0.354 0.354)"
                      >
                        <path
                          id="Path_5"
                          dataName="Path 5"
                          d="M12,0,6,6,0,0"
                          fill="none"
                          stroke="#00113f"
                          strokWidth="1"
                        />
                      </g>
                    </svg>
                  </button>
                </div>
              </div>
              <Main />
              <Ads />
            </div>
          </div>
        </section>

        <div className="fixed  z-40 inset-0  bg-brand-dark bg-opacity-80 flex justify-center items-center">
          <div className="w-[1140px] max-w-full mx-auto pt-40 space-y-12 max-h-full overflow-y-auto px-6 pb-5">
            <div className=" relative overflow-hidden rounded-2xl bg-white">
              <div className="w-20 h-20 bg-opacity-80 bg-brand-dark rounded-full absolute -left-10 top-[34rem] sm:top-[33rem] md:-top-10 md:left-[19rem] lg:left-[25rem]"></div>
              <div className="w-20 h-20 bg-opacity-80 bg-brand-dark rounded-full absolute  -right-10 top-[34rem] sm:top-[33rem]  md:-bottom-10 md:left-[19rem] lg:left-[25rem]"></div>
              <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x items-center">
                <div className="w-full md:w-[350px] lg:w-[440px] shrink-0 flex justify-center flex-col items-center py-10 px-4 lg:px-12 space-y-6">
                  <div className="flex flex-col items-center gap-6">
                    <div className="relative w-[118px] h-[118px]">
                      <img
                        className="w-full h-full object-cover rounded-full"
                        src={userAvatar}
                        alt="avatar"
                      />
                      <div className="border-white border bg-brand-blue rounded-full w-4 h-4 absolute bottom-0 right-5"></div>
                    </div>
                    <div className="px-5 rounded-full py-2.5 bg-brand-blue bg-opacity-10 font-medium text-brand-blue text-sm">
                      Available Now
                    </div>
                  </div>
                  <div className="space-y-4 pb-5">
                    <h3 className="text-2xl md:text-[32px] font-medium text-center text-brand-blue-dark">
                      Speak to travel now
                    </h3>
                    <p className="text-lg md:text-xl font-medium text-center text-brand-blue-dark">
                      Call us to get up to 40% OFF our fees learn more
                    </p>
                  </div>
                  <div className="flex flex-col gap-4">
                    <p className="px-5 py-2.5 rounded-lg border border-dashed border-brand-gray bg-[#F0F0F0]">
                      Use promo code HOLIDAYS
                    </p>
                    <h2 className="text-center text-lg pb-6">
                      Use promo code
                      <span className="font-medium">HOLIDAYS</span>
                    </h2>
                    <p className="text-center text-xl text-brand-blue-100">
                      1-646-738-4832
                    </p>
                  </div>
                </div>
                <div className="w-full  px-6 lg:px-20 py-12 space-y-8">
                  <div className="space-y-4">
                    <h1 className="text-2xl md:text-[40px] font-medium text-brand-blue-100">
                      Get Fare Alerts!
                    </h1>
                    <p className=" text-brand-blue-100">
                      Be the first to know when fares drop for the route &nbsp;
                      <span className="font-medium">
                        {" "}
                        &nbsp; NYC - New York All Airports
                      </span>
                      &nbsp; to &nbsp;
                      <span className="font-medium">DEL - New Delhi IGI</span>
                    </p>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-xs text-brand-blue-100 block"
                    >
                      Enter email address:
                    </label>
                    <input
                      type="text"
                      className="border-b block border-0 border-brand-gray-light w-full focus:ring-0 focus:outline-none text-brand-blue-100 px-4 py-2"
                    />
                    <div className="py-4">
                      <button
                        type="button"
                        className="px-6 py-2.5 bg-brand-red text-white font-medium text-lg md:text-xl rounded-full"
                      >
                        Get Fare Alerts
                      </button>
                    </div>
                    <p className="text-sm text-brand-dark  ">
                      By entering your email address you agree to TripKart's
                      &nbsp;
                      <a href="#" className="underline text-brand-blue">
                        Terms & Conditions
                      </a>
                      &nbsp; ,&nbsp;
                      <a href="#" className="underline text-brand-blue">
                        Privacy Policy
                      </a>
                      , and to receive email marketing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutTwo>
    </>
  );
}
export default Inactivity;
