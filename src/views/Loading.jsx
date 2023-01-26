import { Player } from "@lottiefiles/react-lottie-player";
import React, { useEffect, useState } from "react";
import loadingBg from "../assets/images/listing/loading-bg.png";
import LayoutTwo from "../Components/Layouts/LayoutTwo";
import Ads from "../Components/Listing/Ads";
import Filter from "../Components/Listing/Filter";
import Main from "../Components/Listing/Main";
import Sidebar from "../Components/Listing/Sidebar";
function Loading() {
  let [open, setOpen] = useState(false);
  const openFilter = () => {
    setOpen(true);
  };
  const removeFilter = () => {
    setOpen(false);
  };
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
  });
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
        <div className="fixed bg-[#1d1e26] z-40 inset-0 ">
          <div className="max-w-[960px] mx-auto pt-32 space-y-8 max-h-full hide-scroll overflow-y-auto px-6 pb-5">
            <div className="flex justify-center">
              <div className="relative">
                <Player
                  src="https://assets9.lottiefiles.com/packages/lf20_wleeph0w.json"
                  speed={1}
                  className="w-[200px] h-[200px] "
                  loop
                  controls
                  autoplay
                />
                <p className="text-center text-white w-[200px] absolute top-40 left-1/2 -translate-x-1/2">
                  Loading you results...
                </p>
              </div>
            </div>
            <div className="w-full rounded-2xl overflow-hidden flex-col md:flex-row bg-brand-red flex items-center">
              <div className="w-full md:w-8/12">
                <img
                  className="h-full w-full object-cover"
                  src={loadingBg}
                  alt="loadingBg"
                />
              </div>
              <div className="w-full md:w-4/12 flex items-center px-8">
                <div className="bg-white p-5 md:p-12 rounded-lg space-y-10 lg:space-y-20  mb-10 -mt-20 md:-mt-0 md:-mb-0 md:-ml-20 md:mr-20">
                  <h1 className="text-2xl sm:text-[40px] sm:leading-[52px] font-medium text-brand-dark">
                    Free Messaging in the Air
                  </h1>
                  <p className="text-base text-brand-dark opacity-75">
                    Stay connected with free in-flight messaging through
                    iMessage, Facebook, Messenger, and WhatsApp.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutTwo>
    </>
  );
}
export default Loading;
