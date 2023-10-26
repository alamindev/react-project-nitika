import React, { useEffect, useState } from "react";
import info from "../../assets/images/checkout/info.svg";
import MoneyTime from "../../assets/images/checkout/money-time.png";
import Sidebar from "../Checkout/StepThree/SideBar/Index";
export default function Aside({ step }) {
  let [isPromo, setPromo] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const ShowPromo = () => {
    setPromo(true);
  };
  const HidePromo = (event) => {
    event.stopPropagation();
    setPromo(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <aside className="w-full lg:w-[32%] xl:w-[30%] 2xl:w-[23%] shrink-0 bg-white lg:bg-transparent pb-4 sticky top-36">
      <div
        className={` overflow-y-auto lg:rounded-xl  hide-scroll lg:pb-20 ${
          step === 3 ? " lg:max-h-[800px]" : "max-h-full"
        }`}
      >
        {step === 3 && <Sidebar />}
        <div className="px-4 2xl:px-6 pt-6 pb-7 lg:rounded-xl bg-white relative">
          <h2 className="text-2xl font-medium text-dark">Price Summary</h2>
        </div>
        <div
          className={` overflow-y-auto lg:rounded-xl space-y-3 -mt-3 hide-scroll ${
            step === 3 ? "max-h-full" : "lg:max-h-[800px]  lg:pb-20"
          }`}
        >
          <div className="rounded-xl bg-white ">
            {!isLoading ? (
              <div className="space-y-3 p-4 2xl:p-6 ">
                <div className="space-y-2">
                  <div className="flex justify-between items-center gap-2">
                    <h2 className="text-base md:text-lg text-brand-blue-100 font-medium">
                      Traveler 1: Adult
                    </h2>
                    <p className="text-base md:text-lg text-brand-blue-100 font-medium">
                      $212.80
                    </p>
                  </div>
                  <ul className="grid gap-2">
                    <li className="flex justify-between items-center">
                      <h2 className="text-base md:text-lg text-brand-blue-100 ">
                        Flight
                      </h2>
                      <p className="text-base md:text-lg text-brand-blue-100 ">
                        $170.23
                      </p>
                    </li>
                    <li className="flex justify-between items-center">
                      <div className="relative">
                        <div className="flex gap-2 items-center">
                          <h2 className="text-base md:text-lg text-brand-blue-100 ">
                            Taxes & Fees
                          </h2>
                          <div className="group">
                            <img src={info} alt="info" />
                            <div className="hidden group-hover:block z-20 transition-all absolute w-[280px] xl:w-[310px] border space-y-3 pb-3 border-brand-gray-20 top-full left-0 bg-white shadow-md rounded-xl">
                              <h3 className="pt-3 px-4 2xl:px-6 font-medium text-dark text-lg">
                                A breakdown of taxes, fees and charges
                              </h3>
                              <ul className="border-t border-brand-gray-light divide-y divide-brand-gray-light">
                                <li className="px-4 2xl:px-6 flex gap-8 items-start justify-between py-2">
                                  <p className="text-base text-brand-blue-100">
                                    US - Transportation tax
                                  </p>
                                  <p className="shrink-0 text-base text-brand-blue-100">
                                    $12.77
                                  </p>
                                </li>
                                <li className="px-4 2xl:px-6 flex gap-8 items-start justify-between py-2">
                                  <p className="text-base text-brand-blue-100">
                                    AY - PAssenger Civil Aviation Security
                                    Service Fee
                                  </p>
                                  <p className="shrink-0 text-base text-brand-blue-100">
                                    $11.20
                                  </p>
                                </li>
                                <li className="px-4 2xl:px-6 flex gap-8 items-start justify-between py-2">
                                  <p className="text-base text-brand-blue-100">
                                    ZP - Flight Segment Tax
                                  </p>
                                  <p className="shrink-0 text-base text-brand-blue-100">
                                    $9.60
                                  </p>
                                </li>
                                <li className="px-4 2xl:px-6 flex gap-8 items-start justify-between py-2">
                                  <p className="text-base text-brand-blue-100">
                                    XF - Passenger Facility Charge
                                  </p>
                                  <p className="shrink-0 text-base text-brand-blue-100">
                                    $9.00
                                  </p>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="text-base md:text-lg text-brand-blue-100 ">
                        $170.23
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center gap-2">
                    <h2 className="text-base md:text-lg text-brand-blue-100 font-medium">
                      Traveler 2: Adult
                    </h2>
                    <p className="text-base md:text-lg text-brand-blue-100 font-medium">
                      $212.80
                    </p>
                  </div>
                  <ul className="grid gap-2">
                    <li className="flex justify-between items-center">
                      <h2 className="text-base md:text-lg text-brand-blue-100 ">
                        Flight
                      </h2>
                      <p className="text-base md:text-lg text-brand-blue-100 ">
                        $170.23
                      </p>
                    </li>
                    <li className="flex justify-between items-center">
                      <div className="relative">
                        <div className="flex gap-2 items-center">
                          <h2 className="text-base md:text-lg text-brand-blue-100 ">
                            Taxes & Fees
                          </h2>
                          <div className="group">
                            <img src={info} alt="info" />
                            <div className="hidden group-hover:block z-20 transition-all absolute w-[280px] xl:w-[310px] border space-y-3 pb-3 border-brand-gray-20 top-full left-0 bg-white shadow-md rounded-xl">
                              <h3 className="pt-3 px-4 2xl:px-6 font-medium text-dark text-lg">
                                A breakdown of taxes, fees and charges
                              </h3>
                              <ul className="border-t border-brand-gray-light divide-y divide-brand-gray-light">
                                <li className="px-4 2xl:px-6 flex gap-8 items-start justify-between py-2">
                                  <p className="text-base text-brand-blue-100">
                                    US - Transportation tax
                                  </p>
                                  <p className="shrink-0 text-base text-brand-blue-100">
                                    $12.77
                                  </p>
                                </li>
                                <li className="px-4 2xl:px-6 flex gap-8 items-start justify-between py-2">
                                  <p className="text-base text-brand-blue-100">
                                    AY - PAssenger Civil Aviation Security
                                    Service Fee
                                  </p>
                                  <p className="shrink-0 text-base text-brand-blue-100">
                                    $11.20
                                  </p>
                                </li>
                                <li className="px-4 2xl:px-6 flex gap-8 items-start justify-between py-2">
                                  <p className="text-base text-brand-blue-100">
                                    ZP - Flight Segment Tax
                                  </p>
                                  <p className="shrink-0 text-base text-brand-blue-100">
                                    $9.60
                                  </p>
                                </li>
                                <li className="px-4 2xl:px-6 flex gap-8 items-start justify-between py-2">
                                  <p className="text-base text-brand-blue-100">
                                    XF - Passenger Facility Charge
                                  </p>
                                  <p className="shrink-0 text-base text-brand-blue-100">
                                    $9.00
                                  </p>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="text-base md:text-lg text-brand-blue-100 ">
                        $170.23
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center gap-2">
                    <h2 className="text-base md:text-lg text-brand-blue-100 font-medium">
                      Traveler 3: Child
                    </h2>
                    <p className="text-base md:text-lg text-brand-blue-100 font-medium">
                      $212.80
                    </p>
                  </div>
                  <ul className="grid gap-2">
                    <li className="flex justify-between items-center">
                      <h2 className="text-base md:text-lg text-brand-blue-100 ">
                        Flight
                      </h2>
                      <p className="text-base md:text-lg text-brand-blue-100 ">
                        $170.23
                      </p>
                    </li>
                    <li className="flex justify-between items-center">
                      <div className="relative">
                        <div className="flex gap-2 items-center">
                          <h2 className="text-base md:text-lg text-brand-blue-100 ">
                            Taxes & Fees
                          </h2>
                          <div className="group">
                            <img src={info} alt="info" />
                            <div className="hidden group-hover:block z-20 transition-all absolute w-[280px] xl:w-[310px] border space-y-3 pb-3 border-brand-gray-20 top-full left-0 bg-white shadow-md rounded-xl">
                              <h3 className="pt-3 px-4 2xl:px-6 font-medium text-dark text-lg">
                                A breakdown of taxes, fees and charges
                              </h3>
                              <ul className="border-t border-brand-gray-light divide-y divide-brand-gray-light">
                                <li className="px-4 2xl:px-6 flex gap-8 items-start justify-between py-2">
                                  <p className="text-base text-brand-blue-100">
                                    US - Transportation tax
                                  </p>
                                  <p className="shrink-0 text-base text-brand-blue-100">
                                    $12.77
                                  </p>
                                </li>
                                <li className="px-4 2xl:px-6 flex gap-8 items-start justify-between py-2">
                                  <p className="text-base text-brand-blue-100">
                                    AY - PAssenger Civil Aviation Security
                                    Service Fee
                                  </p>
                                  <p className="shrink-0 text-base text-brand-blue-100">
                                    $11.20
                                  </p>
                                </li>
                                <li className="px-4 2xl:px-6 flex gap-8 items-start justify-between py-2">
                                  <p className="text-base text-brand-blue-100">
                                    ZP - Flight Segment Tax
                                  </p>
                                  <p className="shrink-0 text-base text-brand-blue-100">
                                    $9.60
                                  </p>
                                </li>
                                <li className="px-4 2xl:px-6 flex gap-8 items-start justify-between py-2">
                                  <p className="text-base text-brand-blue-100">
                                    XF - Passenger Facility Charge
                                  </p>
                                  <p className="shrink-0 text-base text-brand-blue-100">
                                    $9.00
                                  </p>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="text-base md:text-lg text-brand-blue-100 ">
                        $170.23
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center gap-2">
                    <h2 className="text-base md:text-lg text-brand-blue-100 font-medium">
                      Add ons
                    </h2>
                  </div>
                  <ul className="grid gap-2">
                    <li className="flex justify-between items-center">
                      <h2 className="text-base md:text-lg text-brand-blue-100 ">
                        Total seat choice fees
                      </h2>
                      <p className="text-base md:text-lg text-brand-blue-100">
                        $232.8
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="pt-10 pb-8 px-6">
                <ul className="grid gap-5">
                  <li className="flex justify-between items-center">
                    <div className="rounded bg-brand-gray-light h-6 shadow-inner w-[90px] animate-pulse"></div>
                    <div className="rounded bg-brand-gray-light h-6 shadow-inner w-[54px] animate-pulse"></div>
                  </li>
                  <li className="flex justify-between items-center">
                    <div className="rounded bg-brand-gray-100 h-6 shadow-inner w-[120px] animate-pulse"></div>
                    <div className="rounded bg-brand-gray-100 h-6 shadow-inner w-[54px] animate-pulse"></div>
                  </li>
                  <li className="flex justify-between items-center">
                    <div className="rounded bg-brand-gray-100 h-6 shadow-inner w-[120px] animate-pulse"></div>
                    <div className="rounded bg-brand-gray-100 h-6 shadow-inner w-[54px] animate-pulse"></div>
                  </li>
                  <li className="flex justify-between items-center">
                    <div className="rounded bg-brand-gray-light h-6 shadow-inner w-[90px] animate-pulse"></div>
                    <div className="rounded bg-brand-gray-light h-6 shadow-inner w-[54px] animate-pulse"></div>
                  </li>
                  <li className="flex justify-between items-center">
                    <div className="rounded bg-brand-gray-100 h-6 shadow-inner w-[120px] animate-pulse"></div>
                    <div className="rounded bg-brand-gray-100 h-6 shadow-inner w-[54px] animate-pulse"></div>
                  </li>
                  <li className="flex justify-between items-center">
                    <div className="rounded bg-brand-gray-100 h-6 shadow-inner w-[120px] animate-pulse"></div>
                    <div className="rounded bg-brand-gray-100 h-6 shadow-inner w-[54px] animate-pulse"></div>
                  </li>
                  <li className="flex justify-between items-center">
                    <div className="rounded bg-brand-gray-light h-6 shadow-inner w-[90px] animate-pulse"></div>
                    <div className="rounded bg-brand-gray-light h-6 shadow-inner w-[54px] animate-pulse"></div>
                  </li>
                  <li className="flex justify-between items-center">
                    <div className="rounded bg-brand-gray-100 h-6 shadow-inner w-[120px] animate-pulse"></div>
                    <div className="rounded bg-brand-gray-100 h-6 shadow-inner w-[54px] animate-pulse"></div>
                  </li>
                  <li className="flex justify-between items-center">
                    <div className="rounded bg-brand-gray-100 h-6 shadow-inner w-[120px] animate-pulse"></div>
                    <div className="rounded bg-brand-gray-100 h-6 shadow-inner w-[54px] animate-pulse"></div>
                  </li>
                </ul>
              </div>
            )}
            <div className="p-4 2xl:p-6 border-y border-brand-gray-light space-y-3">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-medium text-dark">Trip Total</h2>
                {!isLoading ? (
                  <p className="text-2xl font-medium text-dark">$871.20</p>
                ) : (
                  <div className="rounded bg-brand-gray-light h-6 shadow-inner w-[90px] animate-pulse"></div>
                )}
              </div>
              {!isLoading ? (
                <p className="text-base md:text-lg text-dark">
                  All fares are quoted in USD. Some airlines may charge baggage
                  fees. Your credit/debit card may be billed in multiple charges
                  totaling the final total price. Promo Code is off our service
                  fees.
                </p>
              ) : (
                <ul className="grid gap-4 w-full">
                  <li className="rounded bg-brand-gray-100 h-6 shadow-inner w-full animate-pulse"></li>
                  <li className="rounded bg-brand-gray-100 h-6 shadow-inner w-full animate-pulse"></li>
                  <li className="rounded bg-brand-gray-100 h-6 shadow-inner w-full animate-pulse"></li>
                </ul>
              )}
            </div>
            <div className="p-4 2xl:p-6">
              <div
                onClick={ShowPromo}
                className="rounded-lg cursor-pointer bg-brand-blue-20 border border-dashed border-brand-gray-light px-4  2xl:px-6 py-4"
              >
                {!isLoading ? (
                  <>
                    <div className="flex gap-8  w-full justify-between">
                      <h2 className="text-lg font-medium text-brand-blue-100 leading-tight">
                        Enter promo code or gift card number:
                      </h2>
                      <button
                        type="button"
                        className={`shrink-0 p-2 -mr-2 ${
                          isPromo ? "block" : "hidden"
                        }`}
                        onClick={HidePromo}
                      >
                        <svg
                          width="12"
                          height="11"
                          viewBox="0 0 12 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.025 0.475C10.725 0.175 10.275 0.175 9.975 0.475L6 4.45L2.025 0.475C1.725 0.175 1.275 0.175 0.975 0.475C0.675 0.775 0.675 1.225 0.975 1.525L4.95 5.5L0.975 9.475C0.675 9.775 0.675 10.225 0.975 10.525C1.125 10.675 1.275 10.75 1.5 10.75C1.725 10.75 1.875 10.675 2.025 10.525L6 6.55L9.975 10.525C10.125 10.675 10.35 10.75 10.5 10.75C10.65 10.75 10.875 10.675 11.025 10.525C11.325 10.225 11.325 9.775 11.025 9.475L7.05 5.5L11.025 1.525C11.325 1.225 11.325 0.775 11.025 0.475Z"
                            fill="#001140"
                          />
                        </svg>
                      </button>
                    </div>
                    <div
                      className={`max-h-0 overflow-hidden transition-all ${
                        isPromo ? "max-h-[150px]" : ""
                      }`}
                    >
                      <div className="pt-4 space-y-2">
                        {/* add error class to show error  */}
                        <div className="group error">
                          <div className="relative after:top-4 after:absolute after:right-3 group-[.error]:after:content-error">
                            <input
                              id="promo"
                              type="text"
                              value="AOLIGRFASKL23"
                              name="promo"
                              className="peer w-full  text-sm group-[.error]:!border-brand-red bg-transparent h-[48px] hover:border-brand-blue-100 rounded-[5px] pb-2 border border-brand-gray-light text-brand-gray-500 placeholder-transparent focus:outline-none focus:border-brand-blue-400 pt-5 px-3"
                              placeholder="Promo Code or Gift Card"
                            />
                            <label
                              htmlFor="promo"
                              className="after:absolute after:right-3 group-[.error]:after:content-none after:transition-all after:opacity-100 peer-focus:after:opacity-100 peer-placeholder-shown:after:opacity-0 after:content-check absolute left-0 pl-3 top-1  text-gray-600  transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:top-1 peer-focus:text-gray-600 peer-focus:text-xs text-xs w-full"
                            >
                              Promo Code or Gift Card
                            </label>
                          </div>
                          <p className="text-xs text-brand-red-100 pt-2 group-[.error]:block hidden">
                            Promo code or Gift card is invalid.
                          </p>
                        </div>
                        <button className="w-full text-center rounded-full font-medium text-white hover:bg-opacity-80 bg-brand-blue px-4 py-2.5 text-lg">
                          Apply
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <ul className="grid gap-4 w-full">
                    <li className="rounded bg-brand-gray-100 h-6 shadow-inner w-full animate-pulse"></li>
                    <li className="rounded bg-brand-gray-100 h-6 shadow-inner w-full animate-pulse"></li>
                    <li className="rounded bg-brand-gray-100 h-6 shadow-inner w-full animate-pulse"></li>
                    <li className="rounded bg-brand-gray-100 h-6 shadow-inner w-full animate-pulse"></li>
                  </ul>
                )}
              </div>
            </div>
          </div>
          <div className="px-4 lg:px-0">
            <div className="rounded-xl bg-brand-blue-600 p-4 2xl:p-6 flex gap-4 items-center">
              <img src={MoneyTime} alt="money-time" />
              <div className="space-y-4">
                <h3 className="text-white text-lg font-medium">
                  Free Cancellation
                </h3>
                <p className="text-base text-brand-blue-50">
                  There’s no fee to cancel within 24 hours of booking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
