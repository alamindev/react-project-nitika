import React, { useRef, useState } from "react";
import check from "../../../assets/images/checkout/check-red.svg";
import doller from "../../../assets/images/checkout/doller.svg";
import logo from "../../../assets/images/checkout/spirit-airlines.png";
export default function PriceArea() {
  const scrollableRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setStartX(event.clientX - scrollableRef.current.offsetLeft);
    setScrollLeft(scrollableRef.current.scrollLeft);
  };

  const handleMouseMove = (event) => {
    if (!isDragging) return;
    const x = event.clientX - scrollableRef.current.offsetLeft;
    const scroll = x - startX;
    scrollableRef.current.scrollLeft = scrollLeft - scroll;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };
  return (
    <div className="w-full ">
      <div className="flex  rounded-tl-[24px] rounded-bl-[24px] -mr-2">
        <div className="w-[125px] sm:w-[235px] border-r  shrink-0 divide-y divide-brand-blue-50 border-y border-l border-brand-blue-50 ">
          <div className="h-72 pt-6 px-6">
            <h3 className="text-base font-medium text-brand-blue-600/50">
              Travelers:
            </h3>
          </div>
          <div className="h-20  flex flex-col justify-center sm:flex-row sm:justify-between px-5 sm:items-center ">
            <h3 className="text-brand-blue-100 text-base sm:text-lg">
              Adult 1:
            </h3>
            <p className="text-brand-blue-100/75 text-base sm:text-lg">
              John Doe
            </p>
          </div>
          <div className="h-20  flex flex-col justify-center sm:flex-row sm:justify-between px-5 sm:items-center ">
            <h3 className="text-brand-blue-100 text-base sm:text-lg">
              Adult 2:
            </h3>
            <p className="text-brand-blue-100/75 text-base sm:text-lg">
              John Doe
            </p>
          </div>
          <div className="h-20  flex flex-col justify-center sm:flex-row sm:justify-between px-5 sm:items-center ">
            <h3 className="text-brand-blue-100 text-base sm:text-lg">
              Child 1:
            </h3>
            <p className="text-brand-blue-100/75 text-base sm:text-lg">
              Bill Joe
            </p>
          </div>
        </div>
        <div
          className="overflow-x-auto hide-scroll w-full  "
          ref={scrollableRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          <div className="flex divide-x divide-brand-blue-50 ">
            <div className="divide-y divide-brand-blue-50 shrink-0 last:!border-r border-t border-b border-brand-blue-50 last:rounded-r-[24px] ">
              <div className="shrink-0 h-72 divide-y divide-brand-blue-50">
                <div className="px-4 md:px-6 pt-6 pb-4 space-y-2">
                  <figure>
                    <img src={logo} alt="Budget Comfort" />
                  </figure>
                  <h2 className="text-xl md:text-2xl font-medium text-dark">
                    Budget <br /> Comfort
                  </h2>
                </div>
                <div className="px-4 md:px-6 py-4 space-y-2">
                  <h5 className="text-base font-medium text-brand-blue-600/50">
                    Inclusions:
                  </h5>
                  <ul className="grid gap-0.5">
                    <li className="flex gap-2 items-center group active">
                      <figure className="shrink-0">
                        <img
                          className="group-[.active]:block hidden"
                          src={check}
                          alt="check"
                        />
                        <img
                          className="group-[.active]:hidden block opacity-60"
                          src={doller}
                          alt="doller"
                        />
                      </figure>
                      <p className="text-base md:text-lg text-brand-blue-100/50 group-[.active]:text-brand-blue-100">
                        Charges
                      </p>
                    </li>
                    <li className="flex gap-2 items-center group ">
                      <figure className="shrink-0">
                        <img
                          className="group-[.active]:block hidden"
                          src={check}
                          alt="check"
                        />
                        <img
                          className="group-[.active]:hidden block opacity-60"
                          src={doller}
                          alt="doller"
                        />
                      </figure>
                      <p className="text-base md:text-lg text-brand-blue-100/50 group-[.active]:text-brand-blue-100">
                        Seat Selection
                      </p>
                    </li>
                    <li className="flex gap-2 items-center group">
                      <figure className="shrink-0">
                        <img
                          className="group-[.active]:block hidden"
                          src={check}
                          alt="check"
                        />
                        <img
                          className="group-[.active]:hidden block opacity-60"
                          src={doller}
                          alt="doller"
                        />
                      </figure>
                      <p className="text-base md:text-lg text-brand-blue-100/50 group-[.active]:text-brand-blue-100">
                        Cancellation
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center gap-4 sm:gap-14 h-20 px-4 sm:px-6">
                <div className="w-28">
                  <button
                    type="button"
                    className="border border-brand-blue-50 px-5 py-2 rounded-full text-base text-brand-blue-100"
                  >
                    Select
                  </button>
                </div>
                <p className="text-base text-brand-blue-100">$100.57</p>
              </div>
              <div className="flex items-center gap-4 sm:gap-14 h-20 px-4 sm:px-6">
                <div className="w-28">
                  <button
                    type="button"
                    className="border border-brand-blue-50 px-5 py-2 rounded-full text-base text-brand-blue-100"
                  >
                    Select
                  </button>
                </div>
                <p className="text-base text-brand-blue-100">$100.57</p>
              </div>
              <div className="flex items-center gap-4 sm:gap-14 h-20 px-4 sm:px-6">
                <div className="w-28">
                  <button
                    type="button"
                    className="border border-brand-red bg-brand-red text-white px-5 py-2 rounded-full text-base"
                  >
                    Selected
                  </button>
                </div>
                <p className="text-base text-brand-blue-100">$100.57</p>
              </div>
            </div>
            <div className="divide-y divide-brand-blue-50 shrink-0 last:!border-r border-t border-b border-brand-blue-50 last:rounded-r-[24px] ">
              <div className="shrink-0 h-72 divide-y divide-brand-blue-50">
                <div className="px-4 md:px-6 pt-6 pb-4 space-y-2">
                  <figure>
                    <img src={logo} alt="Budget Comfort" />
                  </figure>
                  <h2 className="text-xl md:text-2xl font-medium text-dark">
                    Economy <br /> Convenience
                  </h2>
                </div>
                <div className="px-4 md:px-6 py-4 space-y-2">
                  <h5 className="text-base font-medium text-brand-blue-600/50">
                    Inclusions:
                  </h5>
                  <ul className="grid gap-0.5">
                    <li className="flex gap-2 items-center group active">
                      <figure className="shrink-0">
                        <img
                          className="group-[.active]:block hidden"
                          src={check}
                          alt="check"
                        />
                        <img
                          className="group-[.active]:hidden block opacity-60"
                          src={doller}
                          alt="doller"
                        />
                      </figure>
                      <p className="text-base md:text-lg text-brand-blue-100/50 group-[.active]:text-brand-blue-100">
                        Charges
                      </p>
                    </li>
                    <li className="flex gap-2 items-center group active">
                      <figure className="shrink-0">
                        <img
                          className="group-[.active]:block hidden"
                          src={check}
                          alt="check"
                        />
                        <img
                          className="group-[.active]:hidden block opacity-60"
                          src={doller}
                          alt="doller"
                        />
                      </figure>
                      <p className="text-base md:text-lg text-brand-blue-100/50 group-[.active]:text-brand-blue-100">
                        Seat Selection
                      </p>
                    </li>
                    <li className="flex gap-2 items-center group">
                      <figure className="shrink-0">
                        <img
                          className="group-[.active]:block hidden"
                          src={check}
                          alt="check"
                        />
                        <img
                          className="group-[.active]:hidden block opacity-60"
                          src={doller}
                          alt="doller"
                        />
                      </figure>
                      <p className="text-base md:text-lg text-brand-blue-100/50 group-[.active]:text-brand-blue-100">
                        Cancellation
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center gap-4 sm:gap-14 h-20 px-4 sm:px-6">
                <div className="w-28">
                  <button
                    type="button"
                    className="border border-brand-blue-50 px-5 py-2 rounded-full text-base text-brand-blue-100"
                  >
                    Select
                  </button>
                </div>
                <p className="text-base text-brand-blue-100">$100.57</p>
              </div>
              <div className="flex items-center gap-4 sm:gap-14 h-20 px-4 sm:px-6">
                <div className="w-28">
                  <button
                    type="button"
                    className="border border-brand-blue-50 px-5 py-2 rounded-full text-base text-brand-blue-100"
                  >
                    Select
                  </button>
                </div>
                <p className="text-base text-brand-blue-100">$100.57</p>
              </div>
              <div className="flex items-center gap-4 sm:gap-14 h-20 px-4 sm:px-6">
                <div className="w-28">
                  <button
                    type="button"
                    className="border border-brand-blue-50 px-5 py-2 rounded-full text-base text-brand-blue-100"
                  >
                    Select
                  </button>
                </div>
                <p className="text-base text-brand-blue-100">$100.57</p>
              </div>
            </div>
            <div className="divide-y divide-brand-blue-50 shrink-0 last:!border-r border-t border-b border-brand-blue-50 last:rounded-r-[24px] ">
              <div className="shrink-0 h-72 divide-y divide-brand-blue-50">
                <div className="px-4 md:px-6 pt-6 pb-4 space-y-2">
                  <figure>
                    <img src={logo} alt="Budget Comfort" />
                  </figure>
                  <h2 className="text-xl md:text-2xl font-medium text-dark">
                    Economy <br /> Comfort
                  </h2>
                </div>
                <div className="px-4 md:px-6 py-4 space-y-2">
                  <h5 className="text-base font-medium text-brand-blue-600/50">
                    Inclusions:
                  </h5>
                  <ul className="grid gap-0.5">
                    <li className="flex gap-2 items-center group active">
                      <figure className="shrink-0">
                        <img
                          className="group-[.active]:block hidden"
                          src={check}
                          alt="check"
                        />
                        <img
                          className="group-[.active]:hidden block opacity-60"
                          src={doller}
                          alt="doller"
                        />
                      </figure>
                      <p className="text-base md:text-lg text-brand-blue-100/50 group-[.active]:text-brand-blue-100">
                        Charges
                      </p>
                    </li>
                    <li className="flex gap-2 items-center group active">
                      <figure className="shrink-0">
                        <img
                          className="group-[.active]:block hidden"
                          src={check}
                          alt="check"
                        />
                        <img
                          className="group-[.active]:hidden block opacity-60"
                          src={doller}
                          alt="doller"
                        />
                      </figure>
                      <p className="text-base md:text-lg text-brand-blue-100/50 group-[.active]:text-brand-blue-100">
                        Seat Selection
                      </p>
                    </li>
                    <li className="flex gap-2 items-center group active">
                      <figure className="shrink-0">
                        <img
                          className="group-[.active]:block hidden"
                          src={check}
                          alt="check"
                        />
                        <img
                          className="group-[.active]:hidden block opacity-60"
                          src={doller}
                          alt="doller"
                        />
                      </figure>
                      <p className="text-base md:text-lg text-brand-blue-100/50 group-[.active]:text-brand-blue-100">
                        Cancellation
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center gap-4 sm:gap-14 h-20 px-4 sm:px-6">
                <div className="w-28">
                  <button
                    type="button"
                    className="border border-brand-blue-50 px-5 py-2 rounded-full text-base text-brand-blue-100"
                  >
                    Select
                  </button>
                </div>
                <p className="text-base text-brand-blue-100">$100.57</p>
              </div>
              <div className="flex items-center gap-4 sm:gap-14 h-20 px-4 sm:px-6">
                <div className="w-28">
                  <button
                    type="button"
                    className="border border-brand-red bg-brand-red text-white px-5 py-2 rounded-full text-base"
                  >
                    Selected
                  </button>
                </div>
                <p className="text-base text-brand-blue-100">$100.57</p>
              </div>
              <div className="flex items-center gap-4 sm:gap-14 h-20 px-4 sm:px-6">
                <div className="w-28">
                  <button
                    type="button"
                    className="border border-brand-red bg-brand-red text-white px-5 py-2 rounded-full text-base"
                  >
                    Selected
                  </button>
                </div>
                <p className="text-base text-brand-blue-100">$100.57</p>
              </div>
            </div>
            <div className="divide-y divide-brand-blue-50 shrink-0 last:!border-r border-t border-b border-brand-blue-50 last:rounded-r-[24px] ">
              <div className="shrink-0 h-72 divide-y divide-brand-blue-50">
                <div className="px-4 md:px-6 pt-6 pb-4 space-y-2">
                  <figure>
                    <img src={logo} alt="Budget Comfort" />
                  </figure>
                  <h2 className="text-xl md:text-2xl font-medium text-dark">
                    Budget <br /> Comfort
                  </h2>
                </div>
                <div className="px-4 md:px-6 py-4 space-y-2">
                  <h5 className="text-base font-medium text-brand-blue-600/50">
                    Inclusions:
                  </h5>
                  <ul className="grid gap-0.5">
                    <li className="flex gap-2 items-center group active">
                      <figure className="shrink-0">
                        <img
                          className="group-[.active]:block hidden"
                          src={check}
                          alt="check"
                        />
                        <img
                          className="group-[.active]:hidden block opacity-60"
                          src={doller}
                          alt="doller"
                        />
                      </figure>
                      <p className="text-base md:text-lg text-brand-blue-100/50 group-[.active]:text-brand-blue-100">
                        Charges
                      </p>
                    </li>
                    <li className="flex gap-2 items-center group ">
                      <figure className="shrink-0">
                        <img
                          className="group-[.active]:block hidden"
                          src={check}
                          alt="check"
                        />
                        <img
                          className="group-[.active]:hidden block opacity-60"
                          src={doller}
                          alt="doller"
                        />
                      </figure>
                      <p className="text-base md:text-lg text-brand-blue-100/50 group-[.active]:text-brand-blue-100">
                        Seat Selection
                      </p>
                    </li>
                    <li className="flex gap-2 items-center group">
                      <figure className="shrink-0">
                        <img
                          className="group-[.active]:block hidden"
                          src={check}
                          alt="check"
                        />
                        <img
                          className="group-[.active]:hidden block opacity-60"
                          src={doller}
                          alt="doller"
                        />
                      </figure>
                      <p className="text-base md:text-lg text-brand-blue-100/50 group-[.active]:text-brand-blue-100">
                        Cancellation
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center gap-4 sm:gap-14 h-20 px-4 sm:px-6">
                <div className="w-28">
                  <button
                    type="button"
                    className="border border-brand-blue-50 px-5 py-2 rounded-full text-base text-brand-blue-100"
                  >
                    Select
                  </button>
                </div>
                <p className="text-base text-brand-blue-100">$100.57</p>
              </div>
              <div className="flex items-center gap-4 sm:gap-14 h-20 px-4 sm:px-6">
                <div className="w-28">
                  <button
                    type="button"
                    className="border border-brand-blue-50 px-5 py-2 rounded-full text-base text-brand-blue-100"
                  >
                    Select
                  </button>
                </div>
                <p className="text-base text-brand-blue-100">$100.57</p>
              </div>
              <div className="flex items-center gap-4 sm:gap-14 h-20 px-4 sm:px-6">
                <div className="w-28">
                  <button
                    type="button"
                    className="border border-brand-red bg-brand-red text-white px-5 py-2 rounded-full text-base"
                  >
                    Selected
                  </button>
                </div>
                <p className="text-base text-brand-blue-100">$100.57</p>
              </div>
            </div>
            <div className="divide-y divide-brand-blue-50 shrink-0 last:!border-r border-t border-b border-brand-blue-50 last:rounded-r-[24px] ">
              <div className="shrink-0 h-72 divide-y divide-brand-blue-50">
                <div className="px-4 md:px-6 pt-6 pb-4 space-y-2">
                  <figure>
                    <img src={logo} alt="Budget Comfort" />
                  </figure>
                  <h2 className="text-xl md:text-2xl font-medium text-dark">
                    Budget <br /> Comfort
                  </h2>
                </div>
                <div className="px-4 md:px-6 py-4 space-y-2">
                  <h5 className="text-base font-medium text-brand-blue-600/50">
                    Inclusions:
                  </h5>
                  <ul className="grid gap-0.5">
                    <li className="flex gap-2 items-center group active">
                      <figure className="shrink-0">
                        <img
                          className="group-[.active]:block hidden"
                          src={check}
                          alt="check"
                        />
                        <img
                          className="group-[.active]:hidden block opacity-60"
                          src={doller}
                          alt="doller"
                        />
                      </figure>
                      <p className="text-base md:text-lg text-brand-blue-100/50 group-[.active]:text-brand-blue-100">
                        Charges
                      </p>
                    </li>
                    <li className="flex gap-2 items-center group ">
                      <figure className="shrink-0">
                        <img
                          className="group-[.active]:block hidden"
                          src={check}
                          alt="check"
                        />
                        <img
                          className="group-[.active]:hidden block opacity-60"
                          src={doller}
                          alt="doller"
                        />
                      </figure>
                      <p className="text-base md:text-lg text-brand-blue-100/50 group-[.active]:text-brand-blue-100">
                        Seat Selection
                      </p>
                    </li>
                    <li className="flex gap-2 items-center group">
                      <figure className="shrink-0">
                        <img
                          className="group-[.active]:block hidden"
                          src={check}
                          alt="check"
                        />
                        <img
                          className="group-[.active]:hidden block opacity-60"
                          src={doller}
                          alt="doller"
                        />
                      </figure>
                      <p className="text-base md:text-lg text-brand-blue-100/50 group-[.active]:text-brand-blue-100">
                        Cancellation
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center gap-4 sm:gap-14 h-20 px-4 sm:px-6">
                <div className="w-28">
                  <button
                    type="button"
                    className="border border-brand-blue-50 px-5 py-2 rounded-full text-base text-brand-blue-100"
                  >
                    Select
                  </button>
                </div>
                <p className="text-base text-brand-blue-100">$100.57</p>
              </div>
              <div className="flex items-center gap-4 sm:gap-14 h-20 px-4 sm:px-6">
                <div className="w-28">
                  <button
                    type="button"
                    className="border border-brand-blue-50 px-5 py-2 rounded-full text-base text-brand-blue-100"
                  >
                    Select
                  </button>
                </div>
                <p className="text-base text-brand-blue-100">$100.57</p>
              </div>
              <div className="flex items-center gap-4 sm:gap-14 h-20 px-4 sm:px-6">
                <div className="w-28">
                  <button
                    type="button"
                    className="border border-brand-red bg-brand-red text-white px-5 py-2 rounded-full text-base"
                  >
                    Selected
                  </button>
                </div>
                <p className="text-base text-brand-blue-100">$100.57</p>
              </div>
            </div>
            <div className="divide-y divide-brand-blue-50 shrink-0 last:!border-r border-t border-b border-brand-blue-50 last:rounded-r-[24px] ">
              <div className="shrink-0 h-72 divide-y divide-brand-blue-50">
                <div className="px-4 md:px-6 pt-6 pb-4 space-y-2">
                  <figure>
                    <img src={logo} alt="Budget Comfort" />
                  </figure>
                  <h2 className="text-xl md:text-2xl font-medium text-dark">
                    Budget <br /> Comfort
                  </h2>
                </div>
                <div className="px-4 md:px-6 py-4 space-y-2">
                  <h5 className="text-base font-medium text-brand-blue-600/50">
                    Inclusions:
                  </h5>
                  <ul className="grid gap-0.5">
                    <li className="flex gap-2 items-center group active">
                      <figure className="shrink-0">
                        <img
                          className="group-[.active]:block hidden"
                          src={check}
                          alt="check"
                        />
                        <img
                          className="group-[.active]:hidden block opacity-60"
                          src={doller}
                          alt="doller"
                        />
                      </figure>
                      <p className="text-base md:text-lg text-brand-blue-100/50 group-[.active]:text-brand-blue-100">
                        Charges
                      </p>
                    </li>
                    <li className="flex gap-2 items-center group ">
                      <figure className="shrink-0">
                        <img
                          className="group-[.active]:block hidden"
                          src={check}
                          alt="check"
                        />
                        <img
                          className="group-[.active]:hidden block opacity-60"
                          src={doller}
                          alt="doller"
                        />
                      </figure>
                      <p className="text-base md:text-lg text-brand-blue-100/50 group-[.active]:text-brand-blue-100">
                        Seat Selection
                      </p>
                    </li>
                    <li className="flex gap-2 items-center group">
                      <figure className="shrink-0">
                        <img
                          className="group-[.active]:block hidden"
                          src={check}
                          alt="check"
                        />
                        <img
                          className="group-[.active]:hidden block opacity-60"
                          src={doller}
                          alt="doller"
                        />
                      </figure>
                      <p className="text-base md:text-lg text-brand-blue-100/50 group-[.active]:text-brand-blue-100">
                        Cancellation
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center gap-4 sm:gap-14 h-20 px-4 sm:px-6">
                <div className="w-28">
                  <button
                    type="button"
                    className="border border-brand-blue-50 px-5 py-2 rounded-full text-base text-brand-blue-100"
                  >
                    Select
                  </button>
                </div>
                <p className="text-base text-brand-blue-100">$100.57</p>
              </div>
              <div className="flex items-center gap-4 sm:gap-14 h-20 px-4 sm:px-6">
                <div className="w-28">
                  <button
                    type="button"
                    className="border border-brand-blue-50 px-5 py-2 rounded-full text-base text-brand-blue-100"
                  >
                    Select
                  </button>
                </div>
                <p className="text-base text-brand-blue-100">$100.57</p>
              </div>
              <div className="flex items-center gap-4 sm:gap-14 h-20 px-4 sm:px-6">
                <div className="w-28">
                  <button
                    type="button"
                    className="border border-brand-red bg-brand-red text-white px-5 py-2 rounded-full text-base"
                  >
                    Selected
                  </button>
                </div>
                <p className="text-base text-brand-blue-100">$100.57</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
