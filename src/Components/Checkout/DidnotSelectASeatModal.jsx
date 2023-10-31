import React from "react";
import alert from "../../assets/images/checkout/alert.png";
import remove from "../../assets/images/checkout/remove.png";
export default function DidnotSelectASeatModal({ modal, closeModal }) {
  return (
    <div
      className={`fixed inset-0 w-full bg-black/60 z-50 transition-all duration-200 ${
        modal ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div className="h-screen overflow-y-auto flex  items-center px-4 sm:px-0">
        <div
          className={`w-[932px] max-w-full mx-auto p-4 sm:p-10  my-10 sm:mt-8 sm:mb-0 bg-white rounded-[24px] relative
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
                Are you sure that you don't want to select seats for your
                flights?
              </h2>
              <ul className="grid gap-1.5">
                <li className="flex gap-2.5 items-start">
                  <svg
                    className="mt-0.5 shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="#CCD9FE"
                      d="M10 0C8.641 0 7.462.652 6.531 1.625c-1.354-.03-2.672.328-3.625 1.281-.953.953-1.311 2.271-1.281 3.625C.652 7.462 0 8.641 0 10s.652 2.538 1.625 3.469c-.03 1.354.328 2.672 1.281 3.625.953.953 2.271 1.312 3.625 1.281C7.462 19.348 8.641 20 10 20s2.538-.652 3.469-1.625c1.354.03 2.672-.328 3.625-1.281.953-.953 1.311-2.271 1.281-3.625C19.348 12.538 20 11.359 20 10s-.652-2.538-1.625-3.469c.03-1.354-.328-2.672-1.281-3.625-.953-.953-2.271-1.312-3.625-1.281C12.538.652 11.359 0 10 0z"
                    ></path>
                    <path
                      fill="#3569FA"
                      fillRule="evenodd"
                      d="M13.708 7.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 111.414-1.414L9 10.586l3.293-3.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <p>
                    Enjoy the company of your family or friends and avoid being
                    separated.
                  </p>
                </li>
                <li className="flex gap-2.5 items-start">
                  <svg
                    className="mt-0.5  shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="#CCD9FE"
                      d="M10 0C8.641 0 7.462.652 6.531 1.625c-1.354-.03-2.672.328-3.625 1.281-.953.953-1.311 2.271-1.281 3.625C.652 7.462 0 8.641 0 10s.652 2.538 1.625 3.469c-.03 1.354.328 2.672 1.281 3.625.953.953 2.271 1.312 3.625 1.281C7.462 19.348 8.641 20 10 20s2.538-.652 3.469-1.625c1.354.03 2.672-.328 3.625-1.281.953-.953 1.311-2.271 1.281-3.625C19.348 12.538 20 11.359 20 10s-.652-2.538-1.625-3.469c.03-1.354-.328-2.672-1.281-3.625-.953-.953-2.271-1.312-3.625-1.281C12.538.652 11.359 0 10 0z"
                    ></path>
                    <path
                      fill="#3569FA"
                      fillRule="evenodd"
                      d="M13.708 7.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 111.414-1.414L9 10.586l3.293-3.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <p>
                    Save money: adding seats after booking is usually more
                    expensive.
                  </p>
                </li>
              </ul>
              <div className="flex justify-center gap-4 flex-col md:flex-row sm:justify-start ">
                <button
                  onClick={closeModal}
                  type="button"
                  className="rounded-full px-8 py-2.5 hover:bg-opacity-90 transition-all bg-brand-blue-50 text-sm sm:text-lg font-medium text-brand-blue-600"
                >
                  Skip Seat Selection
                </button>
                <button
                  onClick={closeModal}
                  type="button"
                  className="rounded-full px-8 py-2.5 hover:bg-opacity-90 transition-all text-white bg-brand-blue-500 text-sm sm:text-lg font-medium"
                >
                  Continue with Seat Selection
                </button>
              </div>
              <p className="text-sm sm:text-lg text-black/50">
                (You'll be assigned random seating for free if you skip seat
                selection.)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
