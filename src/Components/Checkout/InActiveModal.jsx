import React, { useEffect, useState } from "react";
import invert_process from "../../assets/images/checkout/invert-process.png";
import remove from "../../assets/images/checkout/remove.png";
export default function InActiveModal() {
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
      <div className="h-screen overflow-y-auto flex  items-center px-4 sm:px-0">
        <div
          className={`w-[396px] max-w-full mx-auto p-6 sm:p-10  my-10 sm:mt-8 sm:mb-0 bg-white rounded-[24px] relative
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
          <div className="space-y-4 sm:space-y-6">
            <figure className="flex justify-center">
              <img src={invert_process} alt="invert process" />
            </figure>
            <h2 className="text-center text-black text-2xl">
              Your results need to be refreshed
            </h2>
            <p className="text-base sm:text-lg text-center text-black">
              Refresh your search to get the latest pricing and availability.
            </p>
            <div className="flex justify-center">
              <button
                type="button"
                className="w-auto sm:w-full px-8 py-2.5 text-lg font-medium text-center text-white rounded-full bg-brand-blue-500 hover:bg-opacity-80 transition-all"
              >
                Refresh Results
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
