import React, { useRef, useState } from "react";
import { Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import Business from "../Legends/Business";
import Economy from "../Legends/Economy";
import EconomyLegRoom from "../Legends/EconomyLegRoom";
export default function PlaneTopArea() {
  const contentRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
    setContentHeight(isExpanded ? 0 : contentRef.current.scrollHeight);
  };
  const CloseAccordion = () => {
    setIsExpanded(false);
    setContentHeight(0);
  };
  return (
    <>
      <div className="max-md:flex relative flex-col items-center">
        <div className="relative md:absolute max-md:w-full  md:z-40 top-0 left-0  p-4 xl:p-6 ">
          <div className="flex gap-2  items-center p-1 rounded-xl bg-white border border-brand-blue-50">
            <div className="group active max-md:w-full ">
              <button
                type="button"
                className="px-4 sm:px-6 py-3 w-full justify-center rounded-lg text-base sm:text-lg font-medium group-hover:!bg-blue-600 group-[.active]:text-white group-[.active]:bg-brand-blue-500 text-brand-dark bg-white  flex gap-2 items-center"
              >
                <svg
                  className="group-hover:fill-white fill-brand-dark group-[.active]:fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="17"
                  fill="none"
                  viewBox="0 0 16 17"
                >
                  <g fill="#fff" clipPath="url(#clip0_436_9893)">
                    <path d="M0 12.5h4v-4h4v-4h4v-4h4v16H0v-4z"></path>
                    <path d="M.75 1a.75.75 0 01.75.75v2.69l3.22-3.22a.75.75 0 011.06 1.06L2.56 5.5h2.69a.75.75 0 010 1.5H.75A.75.75 0 010 6.25v-4.5A.75.75 0 01.75 1z"></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_436_9893">
                      <path
                        fill="#fff"
                        d="M0 0H16V16H0z"
                        transform="translate(0 .5)"
                      ></path>
                    </clipPath>
                  </defs>
                </svg>
                <span>Lower deck</span>
              </button>
            </div>
            <div className="group  max-md:w-full">
              <button
                type="button"
                className="px-4 sm:px-6 py-3 w-full justify-center rounded-lg text-base sm:text-lg font-medium group-hover:!bg-blue-600  group-[.active]:text-white group-[.active]:bg-brand-blue-500 group-hover:text-white  bg-white text-brand-dark  flex gap-2 items-center"
              >
                <svg
                  className="group-hover:fill-white fill-brand-dark group-[.active]:fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="17"
                  fill="none"
                  viewBox="0 0 16 17"
                >
                  <g clipPath="url(#clip0_436_9900)">
                    <path d="M16 12.5h-4v-4H8v-4H4v-4H0v16h16v-4z"></path>
                    <path d="M10.75 7a.75.75 0 00.75-.75V3.56l3.22 3.22a.75.75 0 001.06-1.06L12.56 2.5h2.69a.75.75 0 100-1.5h-4.5a.75.75 0 00-.75.75v4.5a.75.75 0 00.75.75z"></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_436_9900">
                      <path
                        fill="#fff"
                        d="M0 0H16V16H0z"
                        transform="matrix(-1 0 0 1 16 .5)"
                      ></path>
                    </clipPath>
                  </defs>
                </svg>
                <span>Upper deck</span>
              </button>
            </div>
          </div>
        </div>
        <div className="relative  md:absolute  md:z-40 top-0 lg:top-16  xl:top-0 right-0   px-4 md:p-4 xl:p-6 ">
          <div className="w-[380px] max-w-full md:w-[325px]  rounded-xl shadow-5.5xl sm:shadow-5xl border  border-brand-blue-50  bg-white">
            <div className="p-4 sm:p-6 space-y-2">
              <h3 className="font-medium text-lg !leading-snug text-brand-dark">
                Spirit Airlines Boeing 240 Passengers 285-305
              </h3>
              <p className="text-base text-brand-dark">STD SEATS</p>
            </div>
            <div className={`group ${isExpanded && "active"}`}>
              <div className="fixed sm:relative max-sm:top-full transition-all duration-300 max-sm:group-[.active]:top-0 max-sm:inset-x-0 max-sm:bg-white max-sm:z-[999] max-sm:mt-28 max-sm:pt-6 rounded-t-2xl  max-sm:min-h-[calc(100vh-115px)] max-sm:max-h-[calc(100vh-115px)] max-sm:overflow-y-auto">
                <div className="border-b pb-2 border-brand-blue-50 space-y-1 px-3 sm:hidden">
                  <h4 className="font-medium max-[380px]:text-sm text-base !leading-snug text-brand-dark">
                    Spirit Airlines Boeing 240 Passengers 285-305
                  </h4>
                  <p className="text-base text-brand-dark">STD SEATS</p>
                </div>
                <div
                  style={{ maxHeight: contentHeight }}
                  className="max-sm:!max-h-full sm:max-h-0 overflow-hidden transition-all duration-500"
                  ref={contentRef}
                >
                  <div className="py-4 border-y border-brand-blue-50 px-4 sm:pl-6 space-y-4">
                    <h3 className="text-lg font-medium text-brand-dark">
                      Legend
                    </h3>
                    <div className="flex  gap-2 justify-between">
                      <div className="space-y-4 shrink-0">
                        <h4 className="uppercase text-xs sm:text-sm font-medium text-brand-dark/50">
                          status
                        </h4>
                        <p className="text-xs sm:text-base text-dark">
                          Unavailable
                        </p>
                        <p className="text-xs sm:text-base text-dark">
                          Selected
                        </p>
                        <p className="text-xs sm:text-base text-dark">
                          Available
                        </p>
                      </div>
                      <div className="w-[80%] sm:w-[210px] -mt-4 sm:-mt-5 legend">
                        <Swiper
                          slidesPerView={4}
                          modules={[Scrollbar]}
                          scrollbar={{ draggable: true }}
                          spaceBetween={5}
                          breakpoints={{
                            640: {
                              slidesPerView: "auto",
                              spaceBetween: 20,
                              slidesOffsetAfter: 25,
                              spaceBetween: 25,
                            },
                          }}
                        >
                          <SwiperSlide className="sm:!w-[70px] pt-4 sm:pt-5 pb-4">
                            <div className="space-y-2 w-full">
                              <h4 className="text-xs sm:text-sm text-center uppercase font-medium text-brand-dark/50">
                                Business
                              </h4>
                              <ul className="space-y-2 grid justify-center">
                                <li>
                                  <Business status={"unavailable"} />
                                </li>
                                <li>
                                  <Business status={"selected"} />
                                </li>
                                <li>
                                  <Business status={"available"} />
                                </li>
                              </ul>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide className="sm:!w-[70px] pt-4 sm:pt-5 pb-4">
                            <div className="space-y-2 w-full ">
                              <h4 className="text-xs sm:text-sm text-center uppercase font-medium text-brand-dark/50">
                                economy
                              </h4>
                              <ul className="space-y-3 grid justify-center">
                                <li>
                                  <Economy status={"unavailable"} />
                                </li>
                                <li>
                                  <Economy status={"selected"} />
                                </li>
                                <li>
                                  <Economy status={"available"} />
                                </li>
                              </ul>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide className="sm:!w-[70px]  pt-5 pb-2">
                            <div className="space-y-2 w-full">
                              <h4 className="text-xs sm:text-sm -mt-5 text-center uppercase font-medium text-brand-dark/50">
                                Extra <br /> Legroom
                              </h4>
                              <ul className="space-y-3 grid justify-center">
                                <li>
                                  <EconomyLegRoom status={"unavailable"} />
                                </li>
                                <li>
                                  <EconomyLegRoom status={"selected"} />
                                </li>
                                <li>
                                  <EconomyLegRoom status={"available"} />
                                </li>
                              </ul>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide className="sm:!w-[70px] pt-4 sm:pt-5 pb-4">
                            <div className="space-y-2 w-full">
                              <h4 className="text-xs sm:text-sm  text-center uppercase font-medium text-brand-dark/50">
                                Exit row
                              </h4>
                              <ul className="space-y-2 grid justify-center">
                                <li className="flex gap-2 items-center">
                                  <Business status={"unavailable"} is_red />
                                  <Economy status={"unavailable"} is_red />
                                </li>
                                <li className="flex gap-2 items-center">
                                  <Business status={"selected"} is_red />
                                  <Economy status={"selected"} is_red />
                                </li>
                                <li className="flex gap-2 items-center">
                                  <Business status={"available"} is_red />
                                  <Economy status={"available"} is_red />
                                </li>
                              </ul>
                            </div>
                          </SwiperSlide>
                        </Swiper>
                      </div>
                    </div>
                  </div>
                  <div className="py-4 px-4 sm:px-6 space-y-2">
                    <h3 className="text-lg font-medium text-brand-dark">
                      Others
                    </h3>
                    <ul className="border-y border-brand-blue-50 divide-y divide-brand-blue-50">
                      <li className="flex justify-between items-center py-2 px-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="13"
                          fill="none"
                          viewBox="0 0 22 13"
                        >
                          <path
                            stroke="#001140"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.196"
                            d="M13.477 1.15c1.89 0 3.704.601 5.041 1.671 1.337 1.07 2.089 2.521 2.089 4.035h-7.13V1.15zM2.78 6.858h17.825v2.14c0 .756-.376 1.482-1.045 2.017-.668.535-1.575.835-2.52.835H6.344c-.945 0-1.852-.3-2.52-.835-.67-.535-1.045-1.26-1.045-2.017v-2.14zM1 2.578c.473 0 .926.15 1.26.418.335.267.523.63.523 1.008v2.853"
                          ></path>
                        </svg>
                        <p className="text-base text-brand-dark">
                          Bassinet Area
                        </p>
                      </li>
                      <li className="flex justify-between items-center py-2 px-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="17"
                          fill="none"
                          viewBox="0 0 22 17"
                        >
                          <path
                            stroke="#001140"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.196"
                            d="M9.021.651v1.424M4.566 1.365V2.79M13.477 1.365v1.423M17.043 5.647h3.565v2.852c0 .785-.802 1.427-1.782 1.427h-2.228"
                          ></path>
                          <path
                            stroke="#001140"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.196"
                            d="M9.021 14.206C4.565 14.206 1 11.353 1 7.786V5.648h16.043v2.14c0 3.566-3.565 6.42-8.022 6.42zM1 16.349h16.043"
                          ></path>
                        </svg>
                        <p className="text-base text-brand-dark">Galley</p>
                      </li>
                      <li className="flex justify-between items-center py-2 px-2">
                        <div className="flex gap-1.5 items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="6"
                            height="9"
                            fill="none"
                            viewBox="0 0 6 9"
                          >
                            <path
                              fill="#CA1502"
                              d="M5.73.557a.5.5 0 00-.516.033l-5 3.5a.5.5 0 000 .82l5 3.5A.5.5 0 006 8V1a.5.5 0 00-.27-.443z"
                            ></path>
                          </svg>
                          <p className="text-[11px] font-medium text-brand-red-500">
                            Exit
                          </p>
                        </div>
                        <p className="text-base text-brand-dark">Exit way</p>
                      </li>
                      <li className="flex justify-between items-center py-2 px-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="48"
                          height="19"
                          fill="none"
                          viewBox="0 0 48 19"
                        >
                          <path
                            stroke="#001140"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.196"
                            d="M4.562 4.504c.984 0 1.782-.638 1.782-1.426 0-.787-.798-1.425-1.782-1.425-.985 0-1.783.638-1.783 1.425 0 .788.798 1.426 1.783 1.426zM15.26 4.504c.984 0 1.782-.638 1.782-1.425 0-.788-.798-1.426-1.783-1.426-.984 0-1.782.638-1.782 1.426 0 .787.798 1.425 1.782 1.425zM13.478 13.78H11.25l1.496-5.986c.081-.324.3-.615.618-.824.319-.21.718-.323 1.13-.324h1.533c.412 0 .812.115 1.13.324.319.21.537.5.618.824l1.496 5.986h-2.228l-.445 3.567h-2.674l-.446-3.567zM2.783 6.647c-.473 0-.927.15-1.26.418-.335.267-.523.63-.523 1.008v4.28l1.783.714v4.28h3.565v-4.28l1.782-.714v-4.28c0-.378-.188-.74-.522-1.008a2.03 2.03 0 00-1.26-.418H2.783z"
                          ></path>
                          <path
                            stroke="#001140"
                            strokeWidth="0.797"
                            d="M25.271.939v17.122"
                            opacity="0.1"
                          ></path>
                          <path
                            stroke="#232323"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.196"
                            d="M38.404 4.505c.984 0 1.782-.639 1.782-1.426 0-.787-.798-1.426-1.782-1.426-.985 0-1.783.639-1.783 1.426 0 .787.798 1.426 1.783 1.426zM46.419 17.345c.492 0 .89-.318.89-.711 0-.393-.398-.712-.89-.712-.493 0-.892.319-.892.712 0 .393.4.711.892.711zM35.514 10.607c-2.194.884-3.077 3.025-1.97 4.78 1.105 1.756 3.78 2.463 5.974 1.578 1.502-.607 2.449-1.838 2.446-3.185M46.426 13.78v-1.427c0-.394-.399-.713-.89-.713H39.95c-.886 0-1.639-.522-1.764-1.225l-.673-3.768"
                          ></path>
                          <path
                            stroke="#232323"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.196"
                            d="M41.584 9.499l-.399-2.24c-.062-.351-.439-.612-.882-.612H37.6l-.179.014-3.94.628c-.27.042-.5.183-.623.38l-1.586 2.543"
                          ></path>
                        </svg>
                        <p className="text-base text-brand-dark">
                          Handicap Lavatory
                        </p>
                      </li>
                      <li className="flex justify-between items-center py-2 px-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="17"
                          fill="none"
                          viewBox="0 0 20 17"
                        >
                          <path
                            stroke="#001140"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.196"
                            d="M4.562 3.504c.984 0 1.782-.638 1.782-1.425 0-.788-.798-1.426-1.782-1.426-.985 0-1.783.638-1.783 1.426 0 .787.798 1.425 1.783 1.425zM15.26 3.505c.984 0 1.782-.639 1.782-1.426 0-.787-.798-1.426-1.783-1.426-.984 0-1.782.639-1.782 1.426 0 .787.798 1.426 1.782 1.426zM13.478 12.78H11.25l1.496-5.986c.081-.324.3-.615.618-.824.319-.209.718-.323 1.13-.323h1.533c.412 0 .812.114 1.13.323.319.21.537.5.618.824l1.496 5.986h-2.228l-.445 3.567h-2.674l-.446-3.567zM2.783 5.647c-.473 0-.927.15-1.26.418-.335.267-.523.63-.523 1.009v4.28l1.783.713v4.28h3.565v-4.28l1.782-.713v-4.28c0-.379-.188-.742-.522-1.01a2.03 2.03 0 00-1.26-.417H2.783z"
                          ></path>
                        </svg>
                        <p className="text-base text-brand-dark">Lavatory </p>
                      </li>
                      <li className="flex justify-between items-center py-2 px-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="26"
                          height="24"
                          fill="none"
                          viewBox="0 0 26 24"
                        >
                          <path
                            stroke="#001140"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.131 5.499h-4.625a4 4 0 00-3.948 3.362l-.808 5a4 4 0 003.948 4.638h6.428a4 4 0 003.923-4.78l-.994-5a4 4 0 00-3.924-3.22z"
                          ></path>
                          <rect
                            width="2.958"
                            height="9.7"
                            x="22.559"
                            y="6.388"
                            stroke="#001140"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            rx="1.479"
                            transform="rotate(6 22.559 6.388)"
                          ></rect>
                          <rect
                            width="2.958"
                            height="9.7"
                            x="0.502"
                            y="6.698"
                            stroke="#001140"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            rx="1.479"
                            transform="rotate(-6 .502 6.698)"
                          ></rect>
                          <rect
                            width="3.01"
                            height="9.532"
                            x="17.768"
                            y="20.063"
                            stroke="#001140"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            rx="1.505"
                            transform="rotate(90 17.768 20.063)"
                          ></rect>
                          <rect
                            width="1.756"
                            height="9.951"
                            x="17.977"
                            y="1.415"
                            stroke="#001140"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            rx="0.878"
                            transform="rotate(90 17.977 1.415)"
                          ></rect>
                        </svg>
                        <p className="text-base text-brand-dark">Lavatory </p>
                      </li>
                      <li className="flex justify-between items-center py-2 px-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          fill="none"
                          viewBox="0 0 18 18"
                        >
                          <path
                            stroke="#232323"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.196"
                            d="M8.132 3.578c.985 0 1.783-.638 1.783-1.426 0-.787-.798-1.425-1.783-1.425-.984 0-1.782.638-1.782 1.425 0 .788.798 1.426 1.782 1.426zM16.147 16.419c.492 0 .891-.319.891-.712 0-.393-.399-.712-.89-.712-.493 0-.892.319-.892.712 0 .393.399.712.891.712zM5.243 9.68c-2.195.885-3.077 3.026-1.97 4.78 1.104 1.757 3.78 2.463 5.973 1.578 1.503-.607 2.45-1.838 2.447-3.185M16.155 12.853v-1.427c0-.393-.4-.713-.891-.713H9.68c-.887 0-1.64-.522-1.765-1.225L7.242 5.72"
                          ></path>
                          <path
                            stroke="#232323"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.196"
                            d="M11.313 8.572l-.4-2.24c-.062-.35-.438-.612-.882-.612H7.328l-.178.014-3.94.628c-.27.043-.5.183-.624.38L1 9.285"
                          ></path>
                        </svg>
                        <p className="text-base text-brand-dark">
                          Handicap Seat{" "}
                        </p>
                      </li>
                      <li className="flex justify-between items-center py-2 px-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="15"
                          fill="none"
                          viewBox="0 0 18 15"
                        >
                          <path
                            fill="#fff"
                            stroke="#0243F9"
                            strokeWidth="1.2"
                            d="M12.308 4.345l-2.034-2.613s0 0 0 0a1.35 1.35 0 00-.465-.38l-.267.538.267-.538a1.348 1.348 0 00-1.645.358h0L6.018 4.35 3.64 2.256s0 0 0 0 0 0 0 0a1.349 1.349 0 00-1.535-.172l.287.527-.287-.527c-.243.132-.44.335-.563.583l.538.267-.538-.267a1.349 1.349 0 00-.126.8h0l10.893.878zm0 0l2.462-2.13h0a1.349 1.349 0 012.216 1.214h0l-1.123 7.746-.074.514h-.006v.897a1.349 1.349 0 01-1.348 1.348H3.955a1.349 1.349 0 01-1.348-1.348v-1.059l-.052-.35-1.14-7.71 10.893.878z"
                          ></path>
                        </svg>
                        <p className="text-base text-brand-dark">
                          Preffered Seat
                        </p>
                      </li>
                      <li className="flex justify-between items-center py-2 px-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="19"
                          height="18"
                          fill="none"
                          viewBox="0 0 19 18"
                        >
                          <path
                            fill="#fff"
                            stroke="#0243F9"
                            strokeWidth="1.5"
                            d="M6.357 16.294l2.94-1.545a.25.25 0 01.232 0l2.94 1.545c1.284.675 2.785-.415 2.54-1.845l-.563-3.273a.25.25 0 01.072-.221l2.379-2.318c1.038-1.013.465-2.777-.97-2.985l-3.287-.478a.25.25 0 01-.188-.137l-1.47-2.979c-.642-1.3-2.497-1.3-3.139 0l-1.47 2.98a.25.25 0 01-.189.136l-3.286.478c-1.436.208-2.009 1.972-.97 2.985l2.38 2.318a.25.25 0 01.071.221l-.561 3.274c-.246 1.429 1.255 2.52 2.539 1.844z"
                          ></path>
                        </svg>
                        <p className="text-base text-brand-dark">
                          {" "}
                          Main Cabin Extra
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="pb-6 pt-2 px-4 sm:px-6 space-y-2">
                    <h3 className="text-lg font-medium text-brand-dark">
                      Amenities
                    </h3>
                    <ul className="border-y border-brand-blue-50 divide-y divide-brand-blue-50">
                      <li className="flex justify-between items-center py-2 px-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="15"
                          fill="none"
                          viewBox="0 0 20 15"
                        >
                          <path
                            fill="#2C2C2C"
                            d="M19.167 10.907h-.833V4.24h.833c.46 0 .834.374.834.834v5c0 .46-.374.833-.834.833zM15 .907H2.5a2.503 2.503 0 00-2.5 2.5v8.333c0 1.378 1.122 2.5 2.5 2.5H15c1.378 0 2.5-1.122 2.5-2.5V3.407c0-1.379-1.122-2.5-2.5-2.5zm-1.725 8.13a.416.416 0 01-.513.173L9.167 7.772v2.718a.417.417 0 01-.683.32l-5-4.167a.417.417 0 01.422-.706L7.5 7.375V4.657a.417.417 0 01.683-.32l5 4.166c.157.131.196.358.091.534z"
                          ></path>
                        </svg>
                        <p className="text-base text-brand-dark">Power</p>
                      </li>
                      <li className="flex justify-between items-center py-2 px-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="21"
                          fill="none"
                          viewBox="0 0 20 21"
                        >
                          <path
                            fill="#2C2C2C"
                            d="M5 .573A4.172 4.172 0 00.835 4.74v1.667a4.167 4.167 0 003.277 4.065l-.65 8.441a1.543 1.543 0 103.079 0l-.65-8.44a4.166 4.166 0 003.277-4.066V4.74A4.172 4.172 0 005.001.573zM18.334.573a.833.833 0 00-.833.834v6.666a.833.833 0 01-.834.834h-3.333a.833.833 0 01-.833-.834V1.407a.833.833 0 10-1.667 0v6.666a2.5 2.5 0 002.5 2.5h.77l-.643 8.34a1.543 1.543 0 103.079 0l-.642-8.34h.77a2.5 2.5 0 002.5-2.5V1.407a.833.833 0 00-.834-.834z"
                          ></path>
                          <path
                            fill="#2C2C2C"
                            d="M15.835 1.407a.834.834 0 00-1.667 0V7.24h1.667V1.407z"
                          ></path>
                        </svg>
                        <p className="text-base text-brand-dark">Foods</p>
                      </li>
                      <li className="flex justify-between items-center py-2 px-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="21"
                          fill="none"
                          viewBox="0 0 16 21"
                        >
                          <path
                            fill="#2C2C2C"
                            d="M4.616 19.163l-.02-.256H2.442c-.155 0-.275-.214-.275-.398.022-.264.08-.524.171-.772a6.603 6.603 0 00.351-2.057c-.01-.582-.06-1.162-.15-1.736a23.396 23.396 0 01-.24-3.432c.08-1.524.412-3.023.982-4.439.291-.69.478-1.42.553-2.166v-.834h1.667v.834c.075.745.262 1.476.553 2.166l.121.352c.053 0 .105-.017.16-.017h1.592c-.102-.31-.204-.608-.298-.88a7.823 7.823 0 01-.461-1.621v-2.5a.833.833 0 00-.834-.834H3.001a.833.833 0 00-.833.834v2.5a7.824 7.824 0 01-.462 1.619 15.43 15.43 0 00-1.074 4.986c-.005 1.222.08 2.442.255 3.652.08.502.125 1.008.135 1.516a5.039 5.039 0 01-.279 1.574 4.263 4.263 0 00-.242 1.255 2.008 2.008 0 001.942 2.064h2.629a3.275 3.275 0 01-.456-1.41z"
                          ></path>
                          <path
                            fill="#2C2C2C"
                            d="M15.279 8.34a.834.834 0 00-.612-.267H6.334a.833.833 0 00-.833.898l.774 10.064a1.675 1.675 0 001.664 1.538h5.123a1.673 1.673 0 001.662-1.538L15.5 8.97a.833.833 0 00-.222-.631z"
                          ></path>
                        </svg>
                        <p className="text-base text-brand-dark">Beverages</p>
                      </li>
                      <li className="flex justify-between items-center py-2 px-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="21"
                          fill="none"
                          viewBox="0 0 16 21"
                        >
                          <path
                            fill="#2C2C2C"
                            d="M15.5 8.073h-5v5h1.667v1.221l-3.334 2.223V4.74h2.5L8.035.573 4.667 4.74h2.5v10.943l-3.334-2.222v-2.208a2.494 2.494 0 001.618-2.846A2.51 2.51 0 003.47 6.45 2.504 2.504 0 00.5 8.907c0 1.085.7 2.001 1.667 2.346v2.654c0 .278.139.539.37.693l4.63 3.086v2.887h1.666V18.52l4.63-3.086a.833.833 0 00.37-.693v-1.667H15.5v-5z"
                          ></path>
                        </svg>
                        <p className="text-base text-brand-dark">USB Port</p>
                      </li>
                      <li className="flex justify-between items-center py-2 px-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="16"
                          fill="none"
                          viewBox="0 0 20 16"
                        >
                          <path
                            fill="#2C2C2C"
                            d="M10 15.073a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM10 5.073A7.45 7.45 0 004.697 7.27l-.59.59 1.179 1.177.589-.589A5.797 5.797 0 0110 6.74c1.558 0 3.022.607 4.125 1.708l.59.59 1.177-1.179-.589-.59A7.45 7.45 0 0010 5.074z"
                          ></path>
                          <path
                            fill="#2C2C2C"
                            d="M18.838 3.735A12.416 12.416 0 0010 .073C6.66.073 3.52 1.374 1.16 3.735l-.589.59 1.179 1.177.589-.589A10.758 10.758 0 0110 1.74c2.894 0 5.614 1.127 7.66 3.173l.589.59 1.178-1.179-.589-.59z"
                          ></path>
                        </svg>
                        <p className="text-base text-brand-dark">Wi-Fi</p>
                      </li>
                      <li className="flex justify-between items-center py-2 px-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="21"
                          fill="none"
                          viewBox="0 0 20 21"
                        >
                          <path
                            fill="#2C2C2C"
                            d="M18.334 7.24H1.667a.833.833 0 00-.833.834V19.74c0 .461.373.834.833.834h16.667c.46 0 .833-.373.833-.834V8.074a.833.833 0 00-.833-.834zm-10.833 10v-6.666l5.833 3.333-5.833 3.333zM17.736.542L.018 4.157.35 5.79 18.07 2.175 17.736.542z"
                          ></path>
                        </svg>
                        <p className="text-base text-brand-dark">
                          Entertainment
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                onClick={CloseAccordion}
                className="max-sm:fixed transition-all duration-300 max-sm:inset-0 max-sm:bg-black/50 max-sm:z-50 max-sm:group-[.active]:opacity-100 max-sm:group-[.active]:visible invisible opacity-0"
              ></div>
            </div>
            <button
              onClick={toggleAccordion}
              className="w-full border-t border-brand-blue-50 flex gap-3 items-center px-4 justify-center py-3 font-medium text-brand-dark/60 "
              type="button"
            >
              {!isExpanded && <span>View Legends</span>}
              {isExpanded && <span>Show less</span>}
              <svg
                className={`transition-all shrink-0 stroke-brand-dark/60 ${
                  isExpanded ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="7"
                fill="none"
                viewBox="0 0 11 7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M1 1l4.5 4.5L10 1"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
