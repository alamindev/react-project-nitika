import React from "react";
import remove from "../../assets/images/checkout/remove.png";
import plane from "../../assets/images/checkout/take-off.png";
export default function BookingSuccess({ popup, closeModal, goToHome }) {
  return (
    <div
      className={`fixed inset-0 w-full bg-black/60 z-50 transition-all duration-200 ${
        popup ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div className="max-h-screen overflow-y-auto">
        <div
          className={`w-[625px] max-w-full mx-auto p-6 sm:p-10  my-10 sm:mt-8 sm:mb-0 bg-white rounded-[24px] relative
           transition-all duration-300 ${
             popup ? "translate-y-0" : "-translate-y-full"
           }`}
        >
          <button
            type="button"
            className="w-5 h-5 absolute top-8 right-8"
            onClick={closeModal}
          >
            <img src={remove} alt="remove" />
          </button>
          <div className="space-y-4 sm:space-y-12">
            <figure className="flex justify-center">
              <img src={plane} alt="plane" />
            </figure>
            <div className="space-y-1">
              <h2 className="text-center text-black text-2xl">
                Congratulations! Your flight has been successfully booked.
              </h2>
              <p className="text-base sm:text-lg text-center text-black">
                Your flight details are as follows:
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-base sm:text-lg text-black text-center">
                You can view your flight details and make any changes to your
                reservation by logging into your account at
                <a href="#" className="text-brand-blue-500">
                  Tripkart.com
                </a>
              </p>
              <div className="overflow-hidden rounded-[24px] border">
                <table className="w-full ">
                  <tbody className="divide-y">
                    <tr className="divide-x">
                      <td className="py-3.5 px-4 sm:px-6  w-1/2 ">
                        <p className="text-brand-blue-600/50 text-sm sm:text-base font-medium line-clamp-1">
                          Flight Number:
                        </p>
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 w-full ">
                        <p className="text-brand-blue-600 text-sm text-center sm:text-base font-medium line-clamp-1">
                          SA123
                        </p>
                      </td>
                    </tr>
                    <tr className="divide-x">
                      <td className="py-3.5 px-4 sm:px-6  w-1/2 ">
                        <p className="text-brand-blue-600/50 text-sm sm:text-base font-medium line-clamp-1">
                          Departure Airport:
                        </p>
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 w-full">
                        <p className=" text-brand-blue-600 text-sm text-center sm:text-base font-medium line-clamp-1 ">
                          John F. Kennedy International Airport
                        </p>
                      </td>
                    </tr>
                    <tr className="divide-x">
                      <td className="py-3.5 px-4 sm:px-6  w-1/2 ">
                        <p className="text-brand-blue-600/50 text-sm sm:text-base font-medium line-clamp-1">
                          Arrival Airport:
                        </p>
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 w-full">
                        <p className=" text-brand-blue-600 text-sm text-center sm:text-base font-medium line-clamp-1">
                          Indira Gandhi International Airport
                        </p>
                      </td>
                    </tr>
                    <tr className="divide-x">
                      <td className="py-3.5 px-4 sm:px-6  w-1/2 ">
                        <p className="text-brand-blue-600/50 text-sm sm:text-base font-medium line-clamp-1">
                          Departure Date & Time:
                        </p>
                      </td>
                      <td className="py-3.5 px-4 sm:px-6  w-full">
                        <p className="text-brand-blue-600 text-sm text-center sm:text-base font-medium line-clamp-1">
                          Feb. 15 (Wed) , 9:30 pm
                        </p>
                      </td>
                    </tr>
                    <tr className="divide-x">
                      <td className="py-3.5 px-4 sm:px-6  w-1/2  ">
                        <p className="text-brand-blue-600/50 text-sm sm:text-base font-medium line-clamp-1">
                          Arrival Date & Time:
                        </p>
                      </td>
                      <td className="py-3.5 px-4 sm:px-6  w-full">
                        <p className="text-brand-blue-600 text-sm text-center sm:text-base font-medium line-clamp-1">
                          Feb. 17 (Fri) , 10:30 am
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-base sm:text-lg text-black text-center">
                We hope you have a safe and enjoyable flight!
              </p>
            </div>
            <div className="flex justify-center">
              <button
                type="button"
                onClick={goToHome}
                className="w-auto sm:w-full px-8 py-2.5 text-lg font-medium text-center text-white rounded-full bg-brand-blue-500 hover:bg-opacity-80 transition-all"
              >
                Go backto Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
