import React from "react";
import alert from "../../assets/images/checkout/alert.png";
import remove from "../../assets/images/checkout/remove.png";
export default function MissedASeatModal({ modal, closeModal, handlePopup }) {
  return (
    <div
      className={`fixed inset-0 w-full bg-black/60 z-50 transition-all duration-200 ${
        modal ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div className="h-screen overflow-y-auto flex  items-center px-4 sm:px-0">
        <div
          className={`w-[732px] max-w-full mx-auto p-4 sm:p-10  my-10 sm:mt-8 sm:mb-0 bg-white rounded-[24px] relative
           transition-all duration-300 ${
             modal ? "translate-y-0" : "-translate-y-full"
           }`}
        >
          <button
            type="button"
            className="w-5 h-5 absolute top-8 right-8"
            onClick={closeModal}
          >
            <img src={remove} alt="remove" />
          </button>
          <div className="flex items-center sm:items-start flex-col  sm:flex-row gap-6">
            <figure className="shrink-0">
              <img src={alert} alt="alert" />
            </figure>
            <div className="space-y-4">
              <h2 className="text-center sm:text-left text-black font-medium text-xl sm:text-2xl">
                You didn't pick a seat for 1 passengers
              </h2>
              <p className="text-base sm:text-lg text-center sm:text-left text-black">
                Do you want to keep your current selection and continue anyway?
              </p>
              <div className="flex justify-center gap-3 sm:gap-4 sm:justify-start ">
                <button
                  onClick={closeModal}
                  type="button"
                  className="rounded-full px-8 py-2.5 md:py-3.5 hover:bg-opacity-90 transition-all bg-brand-blue-50 text-lg font-medium text-brand-blue-600"
                >
                  Back
                </button>
                <button
                  onClick={closeModal}
                  type="button"
                  className="rounded-full px-8 py-2.5 md:py-3.5 hover:bg-opacity-90 transition-all text-white bg-brand-blue-500  text-lg font-medium"
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
