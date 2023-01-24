import React from 'react'
import africa from "../../assets/images/africa.png";
export default function MonthMobile({ ismonth, CloseMonthMenu }) {
  return (
    <div
      className={
        "fixed z-40 w-full top-0 bottom-0 bg-white lg:hidden transition-all duration-300 " +
        (ismonth ? "right-0" : "-right-[999px]")
      }
    >
      <div className="px-4 py-6 shadow-md ">
        <button type="button" onClick={() => CloseMonthMenu()}>
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
        <div className="grid grid-cols-2 gap-2 px-4 xl:gap-10 w-full pb-20 pt-8">
          <a href="#" className="flex border rounded-lg hover:bg-brand-red/10">
            <img
              src={africa}
              alt="africa"
              className="w-[60px] h-[60px] object-cover"
            />
            <p className="text-base text-brand-blue-dark px-8 py-4">January</p>
          </a>
          <a href="#" className="flex border rounded-lg hover:bg-brand-red/10">
            <img
              src={africa}
              alt="africa"
              className="w-[60px] h-[60px] object-cover"
            />
            <p className="text-base text-brand-blue-dark px-8 py-4">February</p>
          </a>
          <a href="#" className="flex border rounded-lg hover:bg-brand-red/10">
            <img
              src={africa}
              alt="africa"
              className="w-[60px] h-[60px] object-cover"
            />
            <p className="text-base text-brand-blue-dark px-8 py-4">March</p>
          </a>
          <a href="#" className="flex border rounded-lg hover:bg-brand-red/10">
            <img
              src={africa}
              alt="africa"
              className="w-[60px] h-[60px] object-cover"
            />
            <p className="text-base text-brand-blue-dark px-8 py-4">April</p>
          </a>
          <a href="#" className="flex border rounded-lg hover:bg-brand-red/10">
            <img
              src={africa}
              alt="africa"
              className="w-[60px] h-[60px] object-cover"
            />
            <p className="text-base text-brand-blue-dark px-8 py-4">May</p>
          </a>
          <a href="#" className="flex border rounded-lg hover:bg-brand-red/10">
            <img
              src={africa}
              alt="africa"
              className="w-[60px] h-[60px] object-cover"
            />
            <p className="text-base text-brand-blue-dark px-8 py-4">June</p>
          </a>
          <a href="#" className="flex border rounded-lg hover:bg-brand-red/10">
            <img
              src={africa}
              alt="africa"
              className="w-[60px] h-[60px] object-cover"
            />
            <p className="text-base text-brand-blue-dark px-8 py-4">July</p>
          </a>
          <a href="#" className="flex border rounded-lg hover:bg-brand-red/10">
            <img
              src={africa}
              alt="africa"
              className="w-[60px] h-[60px] object-cover"
            />
            <p className="text-base text-brand-blue-dark px-8 py-4">August</p>
          </a>
          <a href="#" className="flex border rounded-lg hover:bg-brand-red/10">
            <img
              src={africa}
              alt="africa"
              className="w-[60px] h-[60px] object-cover"
            />
            <p className="text-base text-brand-blue-dark px-8 py-4">
              September
            </p>
          </a>
          <a href="#" className="flex border rounded-lg hover:bg-brand-red/10">
            <img
              src={africa}
              alt="africa"
              className="w-[60px] h-[60px] object-cover"
            />
            <p className="text-base text-brand-blue-dark px-8 py-4">October</p>
          </a>
          <a href="#" className="flex border rounded-lg hover:bg-brand-red/10">
            <img
              src={africa}
              alt="africa"
              className="w-[60px] h-[60px] object-cover"
            />
            <p className="text-base text-brand-blue-dark px-8 py-4">November</p>
          </a>
          <a href="#" className="flex border rounded-lg hover:bg-brand-red/10">
            <img
              src={africa}
              alt="africa"
              className="w-[60px] h-[60px] object-cover"
            />
            <p className="text-base text-brand-blue-dark px-8 py-4">December</p>
          </a>
        </div>
      </div>
    </div>
  );
}
