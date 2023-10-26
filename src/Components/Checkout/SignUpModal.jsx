import React from "react";
import logo from "../../assets/images/checkout/logo.png";
import remove from "../../assets/images/checkout/remove.png";
export default function SignUpModal({ modal, closeModal, handlePopup }) {
  return (
    <div
      className={`fixed inset-0 w-full bg-black/60 z-50 transition-all duration-200 ${
        modal ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div className="h-screen overflow-y-auto sm:flex  items-center">
        <div
          className={`w-[510px] h-full sm:h-auto max-w-full mx-auto  px-6 pt-12 pb-6 sm:p-10  sm:my-10 sm:mt-8 sm:mb-0 bg-white sm:rounded-[24px] relative
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
          <div className="space-y-10">
            <figure>
              <img src={logo} alt="logo" />
            </figure>
            <div className="space-y-4">
              <h2 className="text-[40px] leading-none font-medium text-dark">
                Sign Up Now!
              </h2>
              <div className="flex gap-3 items-center pt-4">
                <button
                  type="button"
                  className="flex justify-center gap-3 w-full items-start px-6 text-white py-2.5 rounded-full bg-facebook hover:bg-opacity-80 transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="19"
                    fill="none"
                    viewBox="0 0 12 19"
                  >
                    <path
                      fill="#fff"
                      d="M3.526 18.667l-.027-8.334H.166V7h3.333V4.917C3.5 1.824 5.415.333 8.174.333c1.321 0 2.457.099 2.788.143v3.232H9.05c-1.5 0-1.791.714-1.791 1.76V7h4.366l-1.666 3.333h-2.7v8.334H3.526z"
                    ></path>
                  </svg>
                  <span>Facebook</span>
                </button>
                <button
                  type="button"
                  className="flex justify-center gap-3 w-full items-start px-6 text-white py-2.5 rounded-full bg-google hover:bg-opacity-80 transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    fill="none"
                    viewBox="0 0 21 21"
                  >
                    <path
                      fill="#fff"
                      d="M20.09 8.682h-9.547v4.09h5.41c-.864 2.728-3 3.637-5.453 3.637a5.91 5.91 0 113.794-10.433l2.973-2.833A10 10 0 1010.5 20.5c5.514 0 10.5-3.637 9.59-11.818z"
                    ></path>
                  </svg>
                  <span>Google</span>
                </button>
              </div>
              <div className="flex gap-3 items-center">
                <div className="w-full h-[1px] bg-brand-gray-light"></div>
                <p className="shrink-0 text-dark/50 text-base">Or</p>
                <div className="w-full h-[1px] bg-brand-gray-light"></div>
              </div>
              <div className="space-y-3">
                <div className="group">
                  <div className="relative after:top-5 after:absolute after:right-3 group-[.error]:after:content-error">
                    <input
                      id="email_address"
                      type="text"
                      value="..."
                      name="email_address"
                      className="peer w-full text-sm group-[.error]:!border-brand-red bg-transparent h-[48px] hover:border-brand-blue-100 rounded-[5px] pb-2 border border-brand-gray-light text-brand-gray-500 placeholder-transparent focus:outline-none focus:border-brand-blue-400 pt-5 pl-3 pr-7"
                      placeholder="Email address"
                    />
                    <label htmlFor="email_address" className="labels">
                      Email address
                    </label>
                  </div>
                  <p className="text-xs text-brand-red-100 pt-2 group-[.error]:block hidden">
                    Please enter Email address
                  </p>
                </div>
                <div className="group">
                  <div className="relative after:top-5 after:absolute after:right-3 group-[.error]:after:content-error">
                    <input
                      id="first_name"
                      type="text"
                      name="first_name"
                      className="peer w-full text-sm group-[.error]:!border-brand-red bg-transparent h-[48px] hover:border-brand-blue-100 rounded-[5px] pb-2 border border-brand-gray-light text-brand-gray-500 placeholder-transparent focus:outline-none focus:border-brand-blue-400 pt-5 pl-3 pr-7"
                      placeholder="First name*"
                    />
                    <label htmlFor="first_name" className="labels">
                      First name<sup>*</sup>
                    </label>
                  </div>
                  <p className="text-xs text-brand-red-100 pt-2 group-[.error]:block hidden">
                    Please enter First name
                  </p>
                </div>
                <div className="group">
                  <div className="relative after:top-5 after:absolute after:right-3 group-[.error]:after:content-error">
                    <input
                      id="last_name"
                      type="text"
                      name="last_name"
                      className="peer w-full text-sm group-[.error]:!border-brand-red bg-transparent h-[48px] hover:border-brand-blue-100 rounded-[5px] pb-2 border border-brand-gray-light text-brand-gray-500 placeholder-transparent focus:outline-none focus:border-brand-blue-400 pt-5 pl-3 pr-7"
                      placeholder="Last name*"
                    />
                    <label htmlFor="last_name" className="labels">
                      Last name<sup>*</sup>
                    </label>
                  </div>
                  <p className="text-xs text-brand-red-100 pt-2 group-[.error]:block hidden">
                    Please enter Last name
                  </p>
                </div>
                <div className="group">
                  <div className="relative after:top-5 after:absolute after:right-3 group-[.error]:after:content-error">
                    <input
                      id="password"
                      type="text"
                      name="password"
                      className="peer w-full text-sm group-[.error]:!border-brand-red bg-transparent h-[48px] hover:border-brand-blue-100 rounded-[5px] pb-2 border border-brand-gray-light text-brand-gray-500 placeholder-transparent focus:outline-none focus:border-brand-blue-400 pt-5 pl-3 pr-7"
                      placeholder="password"
                    />
                    <label htmlFor="password" className="labels-password">
                      Password
                    </label>
                  </div>
                  <p className="text-xs text-brand-red-100 pt-2 group-[.error]:block hidden">
                    Please enter Password
                  </p>
                </div>
                <p className="text-sm text-dark">
                  By creating an account with TripKart, you agree to our{" "}
                  <a href="#" className="font-bold underline">
                    Terms & Conditions
                  </a>{" "}
                  and{" "}
                  <a href="#" className="font-bold underline">
                    Privacy Policy
                  </a>
                  , including receiving marketing emails and having your
                  information used for marketing purposes.
                </p>
              </div>
              <div className="flex justify-center">
                <button
                  type="button"
                  className="w-auto sm:w-full px-8 py-2.5 text-lg font-medium text-center text-white rounded-full bg-brand-blue-500 hover:bg-opacity-80 transition-all"
                >
                  Sign up now
                </button>
              </div>
              <p className="text-center text-base text-dark">
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={handlePopup}
                  className="underline font-bold"
                >
                  Log in
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
