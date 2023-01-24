import React from 'react'
import africa from "../../assets/images/africa.png";
export default function Month() {
  return (
    <div className="absolute left-0 2xl:-left-10 opacity-0 invisible border-t-4 border-brand-red  group-hover:opacity-100 group-hover:visible transition-all w-[1080px]  px-10 py-8 bg-white shadow-md">
      <div className="grid grid-cols-4 gap-4 xl:gap-10 w-full">
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
          <p className="text-base text-brand-blue-dark px-8 py-4">September</p>
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
  );
}
