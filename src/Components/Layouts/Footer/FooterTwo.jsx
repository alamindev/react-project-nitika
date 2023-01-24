import React from "react";
import amazon from "../../../assets/images/amazon.png";
import amex from "../../../assets/images/amex.png";
import appstore from "../../../assets/images/appstore.png";
import logo from "../../../assets/images/footer-two/logo-two.svg";
import googleplay from "../../../assets/images/googleplay.png";
import master from "../../../assets/images/master.png";
import paypal from "../../../assets/images/paypal.png";
import visa from "../../../assets/images/visa.png";
export default function Footer() {
  return (
    <footer className="bg-brand-blue-100 px-4 pt-14 pb-10">
      <div className="container mx-auto">
        <div className="flex justify-between pb-8 sm:pb-20 gap-10 flex-wrap xl:flex-nowrap">
          <div className="xl:w-[200px] 2xl:w-[274px] shrink-0 max-w-full">
            <figure>
              <img src={logo} alt="logo" />
            </figure>
            <ul className="flex xl:flex-col gap-5 mt-16">
              <li className="space-y-1">
                <p className="text-base sm:text-lg font-medium text-white ">
                  +1 833 895 6770
                </p>
                <span className="uppercase text-sm text-white text-opacity-50">
                  United States & Canada
                </span>
              </li>
              <li className="space-y-1">
                <p className="text-base sm:text-lg font-medium text-white ">
                  +44 800 802 1046
                </p>
                <span className="uppercase text-sm text-white text-opacity-50">
                  Great Britain
                </span>
              </li>
              <li className="space-y-1">
                <p className="text-base sm:text-lg font-medium text-white ">
                  +61 7 3106 8663
                </p>
                <span className="uppercase text-sm text-white text-opacity-50">
                  Australia
                </span>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 w-full place-content-start  gap-y-10 gap-x-3 sm:gap-x-5">
            <div className="order-1  row-span-1 md:row-auto">
              <h3 className="text-xl sm:text-2xl text-brand-blue-dark font-bold">
                Company
              </h3>
              <ul className="grid gap-4 mt-7">
                <li>
                  <a
                    href="#"
                    target="_blank"
                    className="text-base 2xl:text-lg inline-block text-white hover:underline hover:text-brand-red"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                    className="text-base 2xl:text-lg inline-block text-white hover:underline hover:text-brand-red"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div className="order-5 md:order-2 row-span-3 md:row-auto">
              <h3 className="text-xl sm:text-2xl text-brand-blue-dark font-bold">
                Travel Advisors
              </h3>

              <ul className="grid gap-4 mt-7">
                <li>
                  <a
                    href="#"
                    target="_blank"
                    className="text-base 2xl:text-lg inline-block text-white hover:underline hover:text-brand-red"
                  >
                    Travel Advisors / Agents
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                    className="text-base 2xl:text-lg inline-block text-white hover:underline hover:text-brand-red"
                  >
                    Advisor Log In
                  </a>
                </li>
              </ul>
            </div>
            <div className="order-4 md:order-3 row-span-1">
              <h3 className="text-xl sm:text-2xl text-brand-blue-dark font-bold">
                Tour Operators
              </h3>

              <ul className="grid gap-4 mt-7">
                <li>
                  <a
                    href="#"
                    target="_blank"
                    className="text-base 2xl:text-lg inline-block text-white hover:underline hover:text-brand-red"
                  >
                    Working With TourRadar
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                    className="text-base 2xl:text-lg inline-block text-white hover:underline hover:text-brand-red"
                  >
                    Operator Log In
                  </a>
                </li>
              </ul>
            </div>
            <div className="order-3 md:order-4 row-span-3 md:row-auto">
              <h3 className="text-xl sm:text-2xl text-brand-blue-dark font-bold">
                Travelers
              </h3>

              <ul className="grid gap-4 mt-7">
                <li>
                  <a
                    href="#"
                    target="_blank"
                    className="text-base 2xl:text-lg inline-block text-white hover:underline hover:text-brand-red"
                  >
                    Days to Come Magazine
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                    className="text-base 2xl:text-lg inline-block text-white hover:underline hover:text-brand-red"
                  >
                    Win an Adventure Enter Now!
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                    className="text-base 2xl:text-lg inline-block text-white hover:underline hover:text-brand-red"
                  >
                    After Your Booking
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                    className="text-base 2xl:text-lg inline-block text-white hover:underline hover:text-brand-red"
                  >
                    Cancellation Policy
                  </a>
                </li>
              </ul>
            </div>
            <div className="order-2 md:order-5 row-span-2 md:row-auto">
              <h3 className="text-xl sm:text-2xl text-brand-blue-dark font-bold">
                Partners
              </h3>

              <ul className="grid gap-4 mt-7">
                <li>
                  <a
                    href="#"
                    target="_blank"
                    className="text-base 2xl:text-lg inline-block text-white hover:underline hover:text-brand-red"
                  >
                    Distribution Partner Solutions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                    className="text-base 2xl:text-lg inline-block text-white hover:underline hover:text-brand-red"
                  >
                    Partner Log In
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                    className="text-base 2xl:text-lg inline-block text-white hover:underline hover:text-brand-red"
                  >
                    Marketing Solutions
                  </a>
                </li>
              </ul>
            </div>
            <div className="order-6 row-span-2 md:row-auto">
              <h3 className="text-xl sm:text-2xl text-brand-blue-dark font-bold">
                Support
              </h3>

              <ul className="grid gap-4 mt-7">
                <li>
                  <a
                    href="#"
                    target="_blank"
                    className="text-base 2xl:text-lg inline-block text-white hover:underline hover:text-brand-red"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                    className="text-base 2xl:text-lg inline-block text-white hover:underline hover:text-brand-red"
                  >
                    Help Center
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="xl:w-[300px] 2xl:w-[368px] shrink-0 max-w-full space-y-7 sm:space-y-10">
            <div className="space-y-5 xl:space-y-7">
              <h3 className="text-xl sm:text-2xl text-brand-blue-dark font-bold">
                Social
              </h3>
              <ul className="flex gap-3 items-center">
                <li>
                  <a href="#" target="_blank">
                    <svg
                      className="fill-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="16.8"
                      viewBox="0 0 24 16.8"
                    >
                      <g
                        id="Group_96"
                        dataname="Group 96"
                        transform="translate(0 -3.6)"
                      >
                        <g id="Group_95" dataname="Group 95">
                          <path
                            id="Path_15"
                            dataname="Path 15"
                            d="M23.8,7.2a4.541,4.541,0,0,0-1-2.4,2.949,2.949,0,0,0-2.4-1C17,3.6,12,3.6,12,3.6h0s-5,0-8.4.2a3.825,3.825,0,0,0-2.4,1,5.643,5.643,0,0,0-1,2.4S0,9.1,0,11.1v1.8c0,1.9.2,3.9.2,3.9a4.541,4.541,0,0,0,1,2.4,3.723,3.723,0,0,0,2.6,1c1.9.2,8.2.2,8.2.2s5,0,8.4-.3a3.825,3.825,0,0,0,2.4-1,5.643,5.643,0,0,0,1-2.4s.2-1.9.2-3.9V11C24,9.1,23.8,7.2,23.8,7.2ZM9.5,15.1V8.4L16,11.8Z"
                          />
                        </g>
                      </g>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <svg
                      className="fill-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="19.4"
                      viewBox="0 0 24 19.4"
                    >
                      <g
                        id="Group_97"
                        dataname="Group 97"
                        transform="translate(0 -2.3)"
                      >
                        <path
                          id="Path_16"
                          dataname="Path 16"
                          d="M24,4.6a9.006,9.006,0,0,1-2.8.8,5.324,5.324,0,0,0,2.2-2.7,9.078,9.078,0,0,1-3.1,1.2,4.841,4.841,0,0,0-3.6-1.6,4.908,4.908,0,0,0-4.9,4.9,3.75,3.75,0,0,0,.1,1.1A13.807,13.807,0,0,1,1.7,3.1,4.514,4.514,0,0,0,1,5.6,5.021,5.021,0,0,0,3.2,9.7,4.032,4.032,0,0,1,1,9.1v.1A4.85,4.85,0,0,0,4.9,14a5.067,5.067,0,0,1-1.3.2,2.769,2.769,0,0,1-.9-.1,4.741,4.741,0,0,0,4.6,3.4,10,10,0,0,1-6.1,2.1A4.869,4.869,0,0,1,0,19.5a14,14,0,0,0,7.5,2.2,13.874,13.874,0,0,0,14-14V7.1A11.849,11.849,0,0,0,24,4.6Z"
                        />
                      </g>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <svg
                      className="fill-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      width="13.75"
                      height="22"
                      viewBox="0 0 13.75 22"
                    >
                      <g
                        id="Group_100"
                        dataname="Group 100"
                        transform="translate(-5 -1)"
                      >
                        <g id="Group_99" dataname="Group 99">
                          <path
                            id="Path_17"
                            dataname="Path 17"
                            d="M9.032,23,9,13H5V9H9V6.5C9,2.789,11.3,1,14.609,1a30.723,30.723,0,0,1,3.346.171V5.049h-2.3c-1.8,0-2.149.856-2.149,2.111V9h5.24l-2,4H13.51V23Z"
                          />
                        </g>
                      </g>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <svg
                      className="fill-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                    >
                      <g
                        id="Group_102"
                        dataname="Group 102"
                        transform="translate(-1 -1)"
                      >
                        <g id="Group_101" dataname="Group 101">
                          <path
                            id="Path_18"
                            dataname="Path 18"
                            d="M12,2.982c2.937,0,3.285.011,4.445.064a6.072,6.072,0,0,1,2.042.379,3.4,3.4,0,0,1,1.265.823,3.4,3.4,0,0,1,.823,1.265,6.072,6.072,0,0,1,.379,2.042c.053,1.16.064,1.508.064,4.445s-.011,3.285-.064,4.445a6.072,6.072,0,0,1-.379,2.042,3.644,3.644,0,0,1-2.088,2.088,6.072,6.072,0,0,1-2.042.379c-1.16.053-1.508.064-4.445.064s-3.285-.011-4.445-.064a6.072,6.072,0,0,1-2.042-.379,3.4,3.4,0,0,1-1.265-.823,3.4,3.4,0,0,1-.823-1.265,6.072,6.072,0,0,1-.379-2.042c-.053-1.16-.064-1.508-.064-4.445s.011-3.285.064-4.445a6.072,6.072,0,0,1,.379-2.042,3.4,3.4,0,0,1,.823-1.265,3.4,3.4,0,0,1,1.265-.823,6.072,6.072,0,0,1,2.042-.379c1.16-.053,1.508-.064,4.445-.064M12,1c-2.987,0-3.362.013-4.535.066a8.108,8.108,0,0,0-2.67.511A5.625,5.625,0,0,0,1.577,4.8a8.108,8.108,0,0,0-.511,2.67C1.013,8.638,1,9.013,1,12s.013,3.362.066,4.535a8.108,8.108,0,0,0,.511,2.67A5.625,5.625,0,0,0,4.8,22.423a8.108,8.108,0,0,0,2.67.511C8.638,22.987,9.013,23,12,23s3.362-.013,4.535-.066a8.108,8.108,0,0,0,2.67-.511A5.625,5.625,0,0,0,22.423,19.2a8.108,8.108,0,0,0,.511-2.67C22.987,15.362,23,14.987,23,12s-.013-3.362-.066-4.535a8.108,8.108,0,0,0-.511-2.67A5.625,5.625,0,0,0,19.2,1.577a8.108,8.108,0,0,0-2.67-.511C15.362,1.013,14.987,1,12,1Z"
                          />
                          <path
                            id="Path_19"
                            dataname="Path 19"
                            d="M12,6.351A5.649,5.649,0,1,0,17.649,12,5.649,5.649,0,0,0,12,6.351Zm0,9.316A3.667,3.667,0,1,1,15.667,12,3.667,3.667,0,0,1,12,15.667Z"
                          />
                          <circle
                            id="Ellipse_10"
                            dataname="Ellipse 10"
                            cx="1.32"
                            cy="1.32"
                            r="1.32"
                            transform="translate(16.552 4.808)"
                          />
                        </g>
                      </g>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <svg
                      className="fill-gray-300"
                      id="Group_104"
                      dataname="Group 104"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g id="Group_103" dataname="Group 103">
                        <path
                          id="Path_20"
                          dataname="Path 20"
                          d="M12,0A12.021,12.021,0,0,0,7.6,23.2a12.9,12.9,0,0,1,0-3.4c.2-.9,1.4-6,1.4-6A5.685,5.685,0,0,1,8.7,12c0-1.7,1-2.9,2.2-2.9a1.526,1.526,0,0,1,1.5,1.7,29.037,29.037,0,0,1-1,4A1.762,1.762,0,0,0,13.2,17c2.1,0,3.8-2.2,3.8-5.5a4.752,4.752,0,0,0-5-4.9,5.208,5.208,0,0,0-5.4,5.2,4.592,4.592,0,0,0,.9,2.7.367.367,0,0,1,.1.3,12.083,12.083,0,0,0-.3,1.4c-.1.2-.2.3-.4.2-1.5-.7-2.4-2.9-2.4-4.6,0-3.8,2.8-7.3,7.9-7.3,4.2,0,7.4,3,7.4,6.9,0,4.1-2.6,7.5-6.2,7.5a3.225,3.225,0,0,1-2.8-1.4s-.6,2.3-.7,2.9a14.843,14.843,0,0,1-1.5,3.1A11.976,11.976,0,0,0,24,12,12.035,12.035,0,0,0,12,0Z"
                        />
                      </g>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <svg
                      className="fill-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="16.8"
                      viewBox="0 0 24 16.8"
                    >
                      <g
                        id="Group_96"
                        dataname="Group 96"
                        transform="translate(0 -3.6)"
                      >
                        <g id="Group_95" dataname="Group 95">
                          <path
                            id="Path_15"
                            dataname="Path 15"
                            d="M23.8,7.2a4.541,4.541,0,0,0-1-2.4,2.949,2.949,0,0,0-2.4-1C17,3.6,12,3.6,12,3.6h0s-5,0-8.4.2a3.825,3.825,0,0,0-2.4,1,5.643,5.643,0,0,0-1,2.4S0,9.1,0,11.1v1.8c0,1.9.2,3.9.2,3.9a4.541,4.541,0,0,0,1,2.4,3.723,3.723,0,0,0,2.6,1c1.9.2,8.2.2,8.2.2s5,0,8.4-.3a3.825,3.825,0,0,0,2.4-1,5.643,5.643,0,0,0,1-2.4s.2-1.9.2-3.9V11C24,9.1,23.8,7.2,23.8,7.2ZM9.5,15.1V8.4L16,11.8Z"
                          />
                        </g>
                      </g>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-5 xl:space-y-7">
              <h3 className="text-xl sm:text-2xl text-brand-blue-dark font-bold">
                Payment Methods
              </h3>
              <ul className="flex items-center gap-2">
                <li>
                  <a href="#">
                    <img src={master} alt="master card" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={paypal} alt="master card" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={visa} alt="master card" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={amex} alt="master card" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={amazon} alt="master card" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-5 xl:space-y-7">
              <h3 className="text-xl sm:text-2xl text-brand-blue-dark font-bold">
                Download Our App
              </h3>
              <ul className="flex items-center gap-2">
                <li>
                  <a href="#">
                    <img src={appstore} alt="app store" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={googleplay} alt="google play" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-6 sm:pt-8 border-t border-gray-600 flex flex-col lg:flex-row gap-4 lg:gap-8 lg:divide-x divide-gray-600 ">
          <p className="text-base text-white text-center sm:text-left">
            Copyright © TourRadar. All Rights Reserved
          </p>
          <ul className="flex items-center flex-wrap md:flex-nowrap gap-3 justify-center">
            <li className="first:pl-0 lg:first:pl-7 px-4 sm:px-7 border-r border-gray-600 last:border-0">
              <a
                href="#"
                target="_blank"
                className="text-base 2xl:text-lg inline-block text-white hover:underline hover:text-brand-red"
              >
                Legal Notice
              </a>
            </li>
            <li className="first:pl-0 lg:first:pl-7 px-4 sm:px-7 border-r border-gray-600 last:border-0">
              <a
                href="#"
                target="_blank"
                className="text-base 2xl:text-lg inline-block text-white hover:underline hover:text-brand-red"
              >
                Privacy Policy
              </a>
            </li>
            <li className="first:pl-0 lg:first:pl-7 px-4 sm:px-7 border-r border-gray-600 last:border-0">
              <a
                href="#"
                target="_blank"
                className="text-base 2xl:text-lg inline-block text-white hover:underline hover:text-brand-red"
              >
                Cookies
              </a>
            </li>
            <li className="first:pl-0 lg:first:pl-7 px-4 sm:px-7 border-r border-gray-600 last:border-0">
              <a
                href="#"
                target="_blank"
                className="text-base 2xl:text-lg inline-block text-white hover:underline hover:text-brand-red"
              >
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
