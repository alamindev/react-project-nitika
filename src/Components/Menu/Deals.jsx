import React from 'react'
import IconOne from "../../assets/images/icon-1.png";
import IconTwo from "../../assets/images/icon-2.png";
export default function Deals() {
  return (
    <div className="absolute left-5 2xl:-left-10 opacity-0 invisible border-t-4 border-brand-red  group-hover:opacity-100 group-hover:visible transition-all w-[800px]  px-6 py-8 bg-white shadow-md">
      <div className="flex gap-6">
        <div className="w-4/12">
          <div className="rounded-lg p-6 shadow-[0_8px_16px_0_rgba(25,30,55,0.08)] space-y-4 bg-[#FCF2F7]">
            <h3 className="text-lg font-semibold text-brand-blue-100">Deal</h3>
            <p className="text-base text-brand-blue-100">
              Find Somethings that suits your pocket or adventure type, and
              check in weekly for fresh new deals
            </p>
          </div>
        </div>
        <div className="w-8/12">
          <div className="grid grid-cols-2 gap-5">
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
              <p className="text-base text-brand-blue-100">Last Mintue Deals</p>
            </div>
            <div className="py-3 px-5 border border-neutral-200 bg-white flex gap-3 items-center rounded-lg">
              <figure>
                <img src={IconTwo} alt="icon" />
              </figure>
              <p className="text-base text-brand-blue-100">Early Birf Deals</p>
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
  );
}
