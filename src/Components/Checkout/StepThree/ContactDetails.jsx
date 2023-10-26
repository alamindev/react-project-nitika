import React from "react";

export default function ContactDetails() {
  return (
    <div className=" bg-white lg:rounded-xl px-4 py-6 xl:p-6 w-full space-y-4">
      <h2 className="font-medium text-xl sm:text-2xl text-dark">
        Contact Details
      </h2>
      <div className="border border-brand-gray-light bg-white rounded-lg flex justify-between items-center px-4 sm:px-5 py-3">
        <div className="w-[175px] space-y-0.5">
          <h2 className="font-bold text-xl text-brand-blue-100">John Doe</h2>
          <p className="text-brand-gray-700 text-base">+1234-567-890</p>
          <p className="text-brand-gray-700 text-base">john.doe@gmail.com</p>
        </div>
        <p className="text-base text-brand-dark/50 font-medium ">Selected</p>
      </div>
    </div>
  );
}
