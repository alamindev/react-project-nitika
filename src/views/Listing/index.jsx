import React, { useState } from "react";
import LayoutTwo from "../../Components/Layouts/LayoutTwo";
import Ads from "../../Components/Listing/Ads";
import Filter from "../../Components/Listing/Filter";
import Main from "../../Components/Listing/Main";
import Sidebar from "../../Components/Listing/Sidebar";

function Index() {
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
      </LayoutTwo>
    </>
  );
}
export default Index;
