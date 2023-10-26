import React, { useEffect, useState } from "react";
import alert from "../../assets/images/checkout/alert.png";
import remove from "../../assets/images/checkout/remove.png";
export default function SoldOutModal() {
  let [modal, setModal] = useState(false);

  const closeModal = () => {
    setModal(false);
  };
  useEffect(() => {
    setTimeout(() => {
      setModal(true);
    }, 2000);
  }, []);
  return (
    <div
      className={`fixed inset-0 w-full bg-black/60 z-50 transition-all duration-200 ${
        modal ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div className="h-screen overflow-y-auto flex  items-center">
        <div
          className={`w-[932px] max-w-full mx-auto p-6 sm:p-10  my-10 sm:mt-8 sm:mb-0 bg-white rounded-[24px] relative
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
              <h2 className="text-center sm:text-left text-black font-medium text-2xl">
                We’re sorry. We just sold out of the flight you selected.
              </h2>
              <p className="text-base sm:text-lg text-center sm:text-left text-black">
                Availability can change quickly based on demand. But don't
                worry, we have found some great deals on similar flights. Select
                a new flight to complete your trip.
              </p>
              <div className="flex justify-center sm:justify-start ">
                <button
                  type="button"
                  className="w-auto px-8 py-2.5 text-lg font-medium text-center text-white rounded-full bg-brand-blue-500 hover:bg-opacity-80 transition-all"
                >
                  View Flight
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
