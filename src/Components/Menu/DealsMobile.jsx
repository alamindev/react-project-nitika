import React from 'react'
import IconOne from "../../assets/images/icon-1.png";
import IconTwo from "../../assets/images/icon-2.png";
export default function DealsMobile({ isDeals, CloseDealsMenu }) {
  return (
    <div
      className={
        "fixed z-40 w-full top-0 bottom-0 bg-white lg:hidden transition-all duration-300 " +
        (isDeals ? "right-0" : "-right-[999px]")
      }
    >
      <div className="px-4 py-6 shadow-md ">
        <button type="button" onClick={() => CloseDealsMenu()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="stroke-brand-dark"
          >
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </button>
      </div>
      <div className="overflow-y-auto h-full">
        <div className="flex flex-col gap-6 px-4 pb-24 pt-8">
          <div className="w-full">
            <div className="rounded-lg p-6 shadow-[0_8px_16px_0_rgba(25,30,55,0.08)] space-y-4 bg-[#FCF2F7]">
              <h3 className="text-lg font-semibold text-brand-blue-100">
                Deal
              </h3>
              <p className="text-base text-brand-blue-100">
                Find Somethings that suits your pocket or adventure type, and
                check in weekly for fresh new deals
              </p>
            </div>
          </div>
          <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="py-3 px-5 border border-neutral-200 bg-white flex gap-3 items-center rounded-lg">
                <figure>
                  <img src={IconOne} alt="icon" />
                </figure>
                <p className="text-base text-brand-blue-100">All Deals</p>
              </div>
              <div className="py-3 px-5 border border-neutral-200 bg-white flex gap-3 items-center rounded-lg">
                <figure>
                  <img src={IconTwo} alt="icon" />
                </figure>
                <p className="text-base text-brand-blue-100">
                  Private Tour Deals
                </p>
              </div>
              <div className="py-3 px-5 border border-neutral-200 bg-white flex gap-3 items-center rounded-lg">
                <figure>
                  <img src={IconOne} alt="icon" />
                </figure>
                <p className="text-base text-brand-blue-100">
                  Last Mintue Deals
                </p>
              </div>
              <div className="py-3 px-5 border border-neutral-200 bg-white flex gap-3 items-center rounded-lg">
                <figure>
                  <img src={IconTwo} alt="icon" />
                </figure>
                <p className="text-base text-brand-blue-100">
                  Early Birf Deals
                </p>
              </div>
              <div className="py-3 px-5 border border-neutral-200 bg-white flex gap-3 items-center rounded-lg">
                <figure>
                  <img src={IconOne} alt="icon" />
                </figure>
                <p className="text-base text-brand-blue-100">2 for 1 Deals</p>
              </div>
              <div className="py-3 px-5 border border-neutral-200 bg-white flex gap-3 items-center rounded-lg">
                <figure>
                  <img src={IconTwo} alt="icon" />
                </figure>
                <p className="text-base text-brand-blue-100">2 for 1 Deals</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
