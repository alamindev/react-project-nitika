import React from "react";
import BusinessSeat from "../Seats/BusinessSeat";
import EconomySeat from "../Seats/EconomySeat";
import EconomySeatLegRoom from "../Seats/EconomySeatLegRoom";
import EmptySeat from "../Seats/EmptySeat";
export default function PlaneSeat() {
  return (
    <>
      <div className="space-y-3 sm:space-y-5">
        <div className="flex justify-between items-center  ">
          <div className="w-[130px] py-2.5 flex justify-center items-center rounded rounded-tl-2xl bg-brand-blue-40">
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
          </div>
          <div className="rounded bg-brand-blue-40 w-full sm:w-[130px] py-2.5">
            <p className="text-base text-center leading-none font-medium text-brand-blue-600">
              Bulk Head
            </p>
          </div>
          <div className="w-[130px] py-2.5 flex justify-center items-center rounded rounded-tr-2xl bg-brand-blue-40">
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
          </div>
        </div>
        <div className="flex justify-between items-center">
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
            <p className="text-[11px] font-medium text-brand-red-500">Exit</p>
          </div>
          <div className="flex gap-1.5 items-center">
            <p className="text-[11px] font-medium text-brand-red-500">Exit</p>
            <svg
              className="rotate-180"
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
          </div>
        </div>
        {/* for seat main cabin  */}

        <div className="space-y-3 sm:space-y-5">
          <h3 className="text-center font-medium text-base text-brand-blue-600">
            Main Cabin
          </h3>
          <div className="flex justify-between items-center ">
            <div className="space-y-2 w-32">
              <div className="grid grid-cols-2">
                <p className="uppercase text-base font-medium text-center text-brand-dark/50">
                  A
                </p>
                <p className="uppercase text-base font-medium text-center text-brand-dark/50">
                  B
                </p>
              </div>
              <div className="grid grid-cols-2">
                <div className="flex justify-center">
                  <BusinessSeat status="unavailable" is_red />
                </div>
                <div className="flex justify-center">
                  <EmptySeat
                    classes={
                      "w-[28px] h-[28px] sm:w-[35px] sm:h-[36px] bg-brand-red-40"
                    }
                  />
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="flex justify-center">
                  <BusinessSeat status="unavailable" />
                </div>
                <div className="flex justify-center">
                  <BusinessSeat status="available" is_crown />
                </div>
              </div>
              <div className="grid grid-cols-1 pt-2">
                <div className="py-2.5 flex gap-4 px-2 sm:px-4 justify-center items-center rounded  bg-brand-blue-40">
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
                </div>
              </div>
            </div>
            <div className="space-y-6 pb-6">
              <p className="uppercase text-xs sm:text-base font-medium text-center text-brand-dark/50">
                1
              </p>
              <p className="uppercase text-xs sm:text-base font-medium text-center text-brand-dark/50">
                2
              </p>
            </div>
            <div className="space-y-2 w-32">
              <div className="grid grid-cols-2">
                <p className="uppercase text-base font-medium text-center text-brand-dark/50">
                  C
                </p>
                <p className="uppercase text-base font-medium text-center text-brand-dark/50">
                  D
                </p>
              </div>
              <div className="grid grid-cols-2">
                <div className="flex justify-center">
                  <BusinessSeat status="unavailable" is_red />
                </div>
                <div className="flex justify-center">
                  <BusinessSeat status="unavailable" is_red />
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="flex justify-center">
                  <BusinessSeat status="unavailable" />
                </div>
                <div className="flex justify-center">
                  <BusinessSeat status="unavailable" />
                </div>
              </div>
              <div className="grid grid-cols-1  pt-2">
                <div className="py-2.5 flex gap-4 px-2 sm:px-4 justify-center items-center rounded  bg-brand-blue-40">
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
                </div>
              </div>
            </div>
            <div className="space-y-6 pb-6">
              <p className="uppercase text-xs sm:text-base font-medium text-center text-brand-dark/50">
                1
              </p>
              <p className="uppercase text-xs sm:text-base font-medium text-center text-brand-dark/50">
                2
              </p>
            </div>
            <div className="space-y-2 w-32">
              <div className="grid grid-cols-2">
                <p className="uppercase text-base font-medium text-center text-brand-dark/50">
                  e
                </p>
                <p className="uppercase text-base font-medium text-center text-brand-dark/50">
                  F
                </p>
              </div>
              <div className="grid grid-cols-2">
                <div className="flex justify-center">
                  <BusinessSeat status="available" is_red is_crown />
                </div>
                <div className="flex justify-center">
                  <BusinessSeat status="available" is_red is_crown />
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="flex justify-center">
                  <BusinessSeat status="available" is_crown />
                </div>
                <div className="flex justify-center">
                  <BusinessSeat status="unavailable" />
                </div>
              </div>
              <div className="grid grid-cols-1  pt-2">
                <div className="py-2.5 flex gap-4 px-2 sm:px-4 justify-center items-center rounded  bg-brand-blue-40">
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
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* for seat business cabin  */}

        <div className="space-y-3 sm:space-y-5">
          <h3 className="text-center font-medium text-base text-brand-blue-600">
            Business Class
          </h3>
          <div className="relative">
            <svg
              className="absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2"
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="13"
              fill="none"
              viewBox="0 0 10 13"
            >
              <path
                fill="#CA1502"
                d="M9.415.99a.75.75 0 00-.776.05l-7.5 5.25a.75.75 0 000 1.23l7.5 5.25a.75.75 0 001.18-.615v-10.5A.75.75 0 009.416.99z"
              ></path>
            </svg>
            <div className="flex justify-between items-center ">
              <div className="space-y-2 w-32">
                <div className="grid grid-cols-2">
                  <p className="uppercase text-base font-medium text-center text-brand-dark/50">
                    A
                  </p>
                  <p className="uppercase text-base font-medium text-center text-brand-dark/50">
                    B
                  </p>
                </div>
                <div className="grid grid-cols-2">
                  <div className="flex justify-center">
                    <BusinessSeat status="unavailable" is_red />
                  </div>
                  <div className="flex justify-center">
                    <EmptySeat
                      classes={
                        "w-[28px] h-[28px] sm:w-[35px] sm:h-[36px] bg-brand-red-40"
                      }
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="flex justify-center">
                    <BusinessSeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <BusinessSeat status="available" is_star />
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="flex justify-center">
                    <BusinessSeat status="available" is_star />
                  </div>
                  <div className="flex justify-center">
                    <BusinessSeat status="available" is_star />
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="flex justify-center">
                    <BusinessSeat status="available" is_star />
                  </div>
                  <div className="flex justify-center">
                    <BusinessSeat status="available" is_star />
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="flex justify-center">
                    <BusinessSeat status="available" is_star />
                  </div>
                  <div className="flex justify-center">
                    <BusinessSeat status="available" is_star />
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="flex justify-center">
                    <BusinessSeat status="available" is_red is_star />
                  </div>
                  <div className="flex justify-center">
                    <BusinessSeat status="available" is_red is_star />
                  </div>
                </div>
                <div className="grid grid-cols-1 pt-2">
                  <div className="py-2.5 flex gap-4 px-2 sm:px-4 justify-center items-center rounded  bg-brand-blue-40">
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
                  </div>
                </div>
              </div>
              <div className="space-y-6 pb-6">
                <p className="uppercase text-xs sm:text-base font-medium text-center text-brand-dark/50">
                  3
                </p>
                <p className="uppercase text-xs sm:text-base font-medium text-center text-brand-dark/50">
                  4
                </p>
                <p className="uppercase text-xs sm:text-base font-medium text-center text-brand-dark/50">
                  5
                </p>
                <p className="uppercase text-xs sm:text-base font-medium text-center text-brand-dark/50">
                  6
                </p>
                <p className="uppercase text-xs sm:text-base font-medium text-center text-brand-dark/50">
                  7
                </p>
                <p className="uppercase text-xs sm:text-base font-medium text-center text-brand-dark/50">
                  8
                </p>
              </div>
              <div className="space-y-2 w-32">
                <div className="grid grid-cols-2">
                  <p className="uppercase text-base font-medium text-center text-brand-dark/50">
                    C
                  </p>
                  <p className="uppercase text-base font-medium text-center text-brand-dark/50">
                    D
                  </p>
                </div>
                <div className="grid grid-cols-2">
                  <div className="flex justify-center">
                    <BusinessSeat status="unavailable" is_red />
                  </div>
                  <div className="flex justify-center">
                    <EmptySeat
                      classes={
                        "w-[28px] h-[28px] sm:w-[35px] sm:h-[36px] bg-brand-red-40"
                      }
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="flex justify-center">
                    <BusinessSeat status="available" is_star />
                  </div>
                  <div className="flex justify-center">
                    <BusinessSeat status="available" is_star />
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="flex justify-center">
                    <BusinessSeat status="selected" />
                  </div>
                  <div className="flex justify-center">
                    <BusinessSeat status="unavailable" />
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="flex justify-center">
                    <BusinessSeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <BusinessSeat status="unavailable" />
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="flex justify-center">
                    <BusinessSeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <BusinessSeat status="selected" />
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="flex justify-center">
                    <BusinessSeat status="unavailable" is_red />
                  </div>
                  <div className="flex justify-center">
                    <BusinessSeat status="unavailable" is_red />
                  </div>
                </div>
                <div className="grid grid-cols-1  pt-2">
                  <div className="py-2.5 flex gap-4 px-2 sm:px-4 justify-center items-center rounded  bg-brand-blue-40">
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
                  </div>
                </div>
              </div>
              <div className="space-y-6 pb-6">
                <p className="uppercase text-xs sm:text-base font-medium text-center text-brand-dark/50">
                  3
                </p>
                <p className="uppercase text-xs sm:text-base font-medium text-center text-brand-dark/50">
                  4
                </p>
                <p className="uppercase text-xs sm:text-base font-medium text-center text-brand-dark/50">
                  5
                </p>
                <p className="uppercase text-xs sm:text-base font-medium text-center text-brand-dark/50">
                  6
                </p>
                <p className="uppercase text-xs sm:text-base font-medium text-center text-brand-dark/50">
                  7
                </p>
                <p className="uppercase text-xs sm:text-base font-medium text-center text-brand-dark/50">
                  8
                </p>
              </div>
              <div className="space-y-2 w-32">
                <div className="grid grid-cols-2">
                  <p className="uppercase text-base font-medium text-center text-brand-dark/50">
                    e
                  </p>
                  <p className="uppercase text-base font-medium text-center text-brand-dark/50">
                    F
                  </p>
                </div>
                <div className="grid grid-cols-2">
                  <div className="flex justify-center">
                    <BusinessSeat
                      status="selected"
                      is_red
                      is_crown
                      is_selected
                      user_short_name="JD"
                    />
                  </div>
                  <div className="flex justify-center">
                    <BusinessSeat
                      status="selected"
                      is_red
                      is_star
                      is_selected
                      user_short_name="TD"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="flex justify-center">
                    <BusinessSeat status="available" is_star />
                  </div>
                  <div className="flex justify-center">
                    <BusinessSeat status="available" is_star />
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="flex justify-center">
                    <BusinessSeat status="selected" />
                  </div>
                  <div className="flex justify-center">
                    <BusinessSeat status="unavailable" />
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="flex justify-center">
                    <BusinessSeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <BusinessSeat status="unavailable" />
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="flex justify-center">
                    <BusinessSeat status="selected" />
                  </div>
                  <div className="flex justify-center">
                    <BusinessSeat status="unavailable" />
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="flex justify-center">
                    <BusinessSeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <BusinessSeat status="unavailable" />
                  </div>
                </div>
                <div className="grid grid-cols-1 pt-2">
                  <div className="py-2.5 flex gap-4 px-2 sm:px-4 justify-center items-center rounded  bg-brand-blue-40">
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
                  </div>
                </div>
              </div>
            </div>
            <svg
              className="absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="13"
              fill="none"
              viewBox="0 0 10 13"
            >
              <path
                fill="#CA1502"
                d="M9.415.99a.75.75 0 00-.776.05l-7.5 5.25a.75.75 0 000 1.23l7.5 5.25a.75.75 0 001.18-.615v-10.5A.75.75 0 009.416.99z"
              ></path>
            </svg>
          </div>
        </div>

        {/* for exit  */}
        <div className="flex justify-between items-center">
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
            <p className="text-[11px] font-medium text-brand-red-500">Exit</p>
          </div>
          <div className="flex gap-1.5 items-center">
            <p className="text-[11px] font-medium text-brand-red-500">Exit</p>
            <svg
              className="rotate-180"
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
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="space-y-2">
            <div className="w-full sm:w-[130px] py-1.5 flex justify-center items-center rounded   bg-brand-blue-40">
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
            </div>
            <div className="py-1.5 flex gap-4 px-4 justify-center items-center rounded  bg-brand-blue-40">
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
            </div>
          </div>
          <div className="space-y-2">
            <div className="w-full sm:w-[130px] py-1.5 flex justify-center items-center rounded   bg-brand-blue-40">
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
            </div>
            <div className="py-1.5 flex gap-4 px-4 justify-center items-center rounded  bg-brand-blue-40">
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
            </div>
          </div>
          <div className="space-y-2">
            <div className="w-full sm:w-[130px] py-1.5 flex justify-center items-center rounded   bg-brand-blue-40">
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
            </div>
            <div className="py-1.5 flex gap-4 px-4 justify-center items-center rounded  bg-brand-blue-40">
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
            </div>
          </div>
        </div>

        {/* for Economy seat  */}
        <div className="space-y-3 sm:space-y-5 ">
          <h3 className="text-center font-medium text-base text-brand-blue-600">
            Economy
          </h3>
          <div className="relative">
            <svg
              className="absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2"
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="13"
              fill="none"
              viewBox="0 0 10 13"
            >
              <path
                fill="#CA1502"
                d="M9.415.99a.75.75 0 00-.776.05l-7.5 5.25a.75.75 0 000 1.23l7.5 5.25a.75.75 0 001.18-.615v-10.5A.75.75 0 009.416.99z"
              ></path>
            </svg>
            <div className="flex justify-between items-center ">
              <div className="space-y-2 w-32">
                <div className="grid grid-cols-3">
                  <p className="uppercase text-base font-medium text-center text-brand-dark/50">
                    A
                  </p>
                  <p className="uppercase text-base font-medium text-center text-brand-dark/50">
                    B
                  </p>
                  <p className="uppercase text-base font-medium text-center text-brand-dark/50">
                    C
                  </p>
                </div>
                <div className="grid grid-cols-3">
                  <div className="flex justify-center">
                    <EconomySeatLegRoom status="available" is_star is_red />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeatLegRoom status="available" is_star is_red />
                  </div>
                  <div className="flex justify-center">
                    <EmptySeat
                      classes={
                        " w-[27px] h-[24px] sm:w-[35px] sm:h-[31px] bg-brand-red-40"
                      }
                    />
                  </div>
                </div>
                <div className="grid grid-cols-3">
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="available" is_star />
                  </div>
                </div>
                <div className="grid grid-cols-3">
                  <div className="flex justify-center">
                    <EconomySeat status="available" is_star />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="available" is_star />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="available" is_star />
                  </div>
                </div>
                <div className="grid grid-cols-3">
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="available" is_star />
                  </div>
                </div>
                <div className="grid grid-cols-3">
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                </div>
                <div className="grid grid-cols-3">
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                </div>
                <div className="grid grid-cols-3">
                  <div className="flex justify-center">
                    <EconomySeat status="available" is_crown />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                </div>
                <div className="grid grid-cols-3">
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="available" is_crown />
                  </div>
                </div>
                <div className="grid grid-cols-3">
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="selected" />
                  </div>
                </div>
                <div className="grid grid-cols-3">
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" is_red />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" is_red />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" is_red />
                  </div>
                </div>
                <div className="grid grid-cols-1 pt-2">
                  <div className="py-1.5 flex gap-4 px-4 justify-center items-center rounded  bg-brand-blue-40">
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
                  </div>
                </div>
              </div>
              <div className="space-y-4 sm:space-y-[15px] pt-2 sm:pt-3  pb-6">
                <p className="uppercase text-xs sm:text-base font-medium text-center text-brand-dark/50">
                  9
                </p>
                <p className="uppercase text-xs sm:text-base font-medium text-center text-brand-dark/50">
                  10
                </p>
                <p className="uppercase text-xs sm:text-base font-medium text-center text-brand-dark/50">
                  11
                </p>
                <p className="uppercase text-xs sm:text-base font-medium text-center text-brand-dark/50">
                  12
                </p>
                <p className="uppercase text-xs sm:text-base font-medium text-center text-brand-dark/50">
                  13
                </p>
                <p className="uppercase text-xs sm:text-base font-medium text-center text-brand-dark/50">
                  14
                </p>
                <p className="uppercase text-xs sm:text-base font-medium text-center text-brand-dark/50">
                  15
                </p>
                <p className="uppercase text-xs sm:text-base font-medium text-center text-brand-dark/50">
                  16
                </p>
                <p className="uppercase text-xs sm:text-base font-medium text-center text-brand-dark/50">
                  17
                </p>
                <p className="uppercase text-xs sm:text-base font-medium text-center text-brand-dark/50">
                  18
                </p>
              </div>
              <div className="space-y-2 w-32">
                <div className="grid grid-cols-3">
                  <p className="uppercase text-base font-medium text-center text-brand-dark/50">
                    A
                  </p>
                  <p className="uppercase text-base font-medium text-center text-brand-dark/50">
                    B
                  </p>
                  <p className="uppercase text-base font-medium text-center text-brand-dark/50">
                    C
                  </p>
                </div>
                <div className="grid grid-cols-3">
                  <div className="flex justify-center">
                    <EconomySeatLegRoom status="available" is_star is_red />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeatLegRoom status="available" is_star is_red />
                  </div>
                  <div className="flex justify-center">
                    <EmptySeat
                      classes={
                        " w-[27px] h-[24px] sm:w-[35px] sm:h-[31px] bg-brand-red-40"
                      }
                    />
                  </div>
                </div>
                <div className="grid grid-cols-3">
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="available" is_star />
                  </div>
                </div>
                <div className="grid grid-cols-3">
                  <div className="flex justify-center">
                    <EconomySeat status="available" is_crown />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="available" is_star />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="available" is_crown />
                  </div>
                </div>
                <div className="grid grid-cols-3">
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="available" is_star />
                  </div>
                </div>
                <div className="grid grid-cols-3">
                  <div className="flex justify-center">
                    <EconomySeat status="available" is_crown />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="available" is_crown />
                  </div>
                </div>
                <div className="grid grid-cols-3">
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                </div>
                <div className="grid grid-cols-3">
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                </div>
                <div className="grid grid-cols-3">
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                </div>
                <div className="grid grid-cols-3">
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="selected" />
                  </div>
                </div>
                <div className="grid grid-cols-3">
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" is_red />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" is_red />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" is_red />
                  </div>
                </div>
                <div className="grid grid-cols-1 pt-2">
                  <div className="py-1.5 flex gap-4 px-4 justify-center items-center rounded  bg-brand-blue-40">
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
                  </div>
                </div>
              </div>
              <div className="space-y-4 sm:space-y-[15px] pt-2 sm:pt-3  pb-6">
                <p className="uppercase text-xs sm:text-base font-medium text-center text-brand-dark/50">
                  9
                </p>
                <p className="uppercase text-xs sm:text-base font-medium text-center text-brand-dark/50">
                  10
                </p>
                <p className="uppercase text-xs sm:text-base font-medium text-center text-brand-dark/50">
                  11
                </p>
                <p className="uppercase text-xs sm:text-base font-medium text-center text-brand-dark/50">
                  12
                </p>
                <p className="uppercase text-xs sm:text-base font-medium text-center text-brand-dark/50">
                  13
                </p>
                <p className="uppercase text-xs sm:text-base font-medium text-center text-brand-dark/50">
                  14
                </p>
                <p className="uppercase text-xs sm:text-base font-medium text-center text-brand-dark/50">
                  15
                </p>
                <p className="uppercase text-xs sm:text-base font-medium text-center text-brand-dark/50">
                  16
                </p>
                <p className="uppercase text-xs sm:text-base font-medium text-center text-brand-dark/50">
                  17
                </p>
                <p className="uppercase text-xs sm:text-base font-medium text-center text-brand-dark/50">
                  18
                </p>
              </div>
              <div className="space-y-2 w-32">
                <div className="grid grid-cols-3">
                  <p className="uppercase text-base font-medium text-center text-brand-dark/50">
                    A
                  </p>
                  <p className="uppercase text-base font-medium text-center text-brand-dark/50">
                    B
                  </p>
                  <p className="uppercase text-base font-medium text-center text-brand-dark/50">
                    C
                  </p>
                </div>
                <div className="grid grid-cols-3">
                  <div className="flex justify-center">
                    <EconomySeatLegRoom status="available" is_star is_red />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeatLegRoom status="available" is_star is_red />
                  </div>
                  <div className="flex justify-center">
                    <EmptySeat
                      classes={
                        " w-[27px] h-[24px] sm:w-[35px] sm:h-[31px] bg-brand-red-40"
                      }
                    />
                  </div>
                </div>
                <div className="grid grid-cols-3">
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="available" is_star />
                  </div>
                </div>
                <div className="grid grid-cols-3">
                  <div className="flex justify-center">
                    <EconomySeat status="available" is_star />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="available" is_star />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="available" is_star />
                  </div>
                </div>
                <div className="grid grid-cols-3">
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="available" is_star />
                  </div>
                </div>
                <div className="grid grid-cols-3">
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                </div>
                <div className="grid grid-cols-3">
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                </div>
                <div className="grid grid-cols-3">
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                </div>
                <div className="grid grid-cols-3">
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                </div>
                <div className="grid grid-cols-3">
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="selected" is_crown is_selected />
                  </div>
                </div>
                <div className="grid grid-cols-3">
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" is_red />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" is_red />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" is_red />
                  </div>
                </div>
                <div className="grid grid-cols-1 pt-2">
                  <div className="py-1.5 flex gap-4 px-4 justify-center items-center rounded  bg-brand-blue-40">
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
                  </div>
                </div>
              </div>
            </div>
            <svg
              className="absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="13"
              fill="none"
              viewBox="0 0 10 13"
            >
              <path
                fill="#CA1502"
                d="M9.415.99a.75.75 0 00-.776.05l-7.5 5.25a.75.75 0 000 1.23l7.5 5.25a.75.75 0 001.18-.615v-10.5A.75.75 0 009.416.99z"
              ></path>
            </svg>
          </div>
        </div>
        {/* for exit  */}
        <div className="flex justify-between items-center pt-2 pb-1">
          <div className="flex gap-1.5 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="16"
              fill="none"
              viewBox="0 0 21 16"
            >
              <path
                stroke="#CA1502"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.196"
                d="M19.481 7.784H5.221M10.568 3.503l-5.347 4.28 5.347 4.28M.766.65v14.268"
              ></path>
            </svg>
            <p className="text-[11px] font-medium text-brand-red-500">Exit</p>
          </div>
          <div className="flex gap-1.5 items-center">
            <p className="text-[11px] font-medium text-brand-red-500">Exit</p>
            <svg
              className="rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="16"
              fill="none"
              viewBox="0 0 21 16"
            >
              <path
                stroke="#CA1502"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.196"
                d="M19.481 7.784H5.221M10.568 3.503l-5.347 4.28 5.347 4.28M.766.65v14.268"
              ></path>
            </svg>
          </div>
        </div>
        {/* for Economy seat  */}
        <div className="space-y-6 ">
          <div className="relative">
            <svg
              className="absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2"
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="13"
              fill="none"
              viewBox="0 0 10 13"
            >
              <path
                fill="#CA1502"
                d="M9.415.99a.75.75 0 00-.776.05l-7.5 5.25a.75.75 0 000 1.23l7.5 5.25a.75.75 0 001.18-.615v-10.5A.75.75 0 009.416.99z"
              ></path>
            </svg>
            <div className="flex justify-between items-center ">
              <div className="space-y-2 w-32">
                <div className="grid grid-cols-3">
                  <p className="uppercase text-base font-medium text-center text-brand-dark/50">
                    A
                  </p>
                  <p className="uppercase text-base font-medium text-center text-brand-dark/50">
                    B
                  </p>
                  <p className="uppercase text-base font-medium text-center text-brand-dark/50">
                    C
                  </p>
                </div>
                <div className="grid grid-cols-3">
                  <div className="flex justify-center">
                    <EconomySeatLegRoom status="available" is_star is_red />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeatLegRoom status="available" is_star is_red />
                  </div>
                  <div className="flex justify-center">
                    <EmptySeat
                      classes={
                        " w-[27px] h-[24px] sm:w-[35px] sm:h-[31px] bg-brand-red-40"
                      }
                    />
                  </div>
                </div>
                <div className="grid grid-cols-3">
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="available" is_star />
                  </div>
                </div>
                <div className="grid grid-cols-3">
                  <div className="flex justify-center">
                    <EconomySeat status="available" is_star />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="available" is_star />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="available" is_star />
                  </div>
                </div>
                <div className="grid grid-cols-3">
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="available" is_star />
                  </div>
                </div>
                <div className="grid grid-cols-3">
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                </div>
                <div className="grid grid-cols-3">
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                </div>
                <div className="grid grid-cols-3">
                  <div className="flex justify-center">
                    <EconomySeat status="available" is_crown />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                </div>
                <div className="grid grid-cols-3">
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="available" is_crown />
                  </div>
                </div>
                <div className="grid grid-cols-3">
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="selected" />
                  </div>
                </div>
                <div className="grid grid-cols-3">
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" is_red />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" is_red />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" is_red />
                  </div>
                </div>
                <div className="grid grid-cols-1 pt-2">
                  <div className=" py-2.5 flex gap-4 px-2 sm:px-4 justify-center items-center rounded rounded-bl-3xl bg-brand-blue-40">
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
                  </div>
                </div>
              </div>
              <div className="space-y-4 sm:space-y-[15px] pt-2 sm:pt-3  pb-6">
                <p className="uppercase text-xs sm:text-base font-medium text-center text-brand-dark/50">
                  9
                </p>
                <p className="uppercase text-xs sm:text-base font-medium text-center text-brand-dark/50">
                  10
                </p>
                <p className="uppercase text-xs sm:text-base font-medium text-center text-brand-dark/50">
                  11
                </p>
                <p className="uppercase text-xs sm:text-base font-medium text-center text-brand-dark/50">
                  12
                </p>
                <p className="uppercase text-xs sm:text-base font-medium text-center text-brand-dark/50">
                  13
                </p>
                <p className="uppercase text-xs sm:text-base font-medium text-center text-brand-dark/50">
                  14
                </p>
                <p className="uppercase text-xs sm:text-base font-medium text-center text-brand-dark/50">
                  15
                </p>
                <p className="uppercase text-xs sm:text-base font-medium text-center text-brand-dark/50">
                  16
                </p>
                <p className="uppercase text-xs sm:text-base font-medium text-center text-brand-dark/50">
                  17
                </p>
                <p className="uppercase text-xs sm:text-base font-medium text-center text-brand-dark/50">
                  18
                </p>
              </div>
              <div className="space-y-2 w-32">
                <div className="grid grid-cols-3">
                  <p className="uppercase text-base font-medium text-center text-brand-dark/50">
                    A
                  </p>
                  <p className="uppercase text-base font-medium text-center text-brand-dark/50">
                    B
                  </p>
                  <p className="uppercase text-base font-medium text-center text-brand-dark/50">
                    C
                  </p>
                </div>
                <div className="grid grid-cols-3">
                  <div className="flex justify-center">
                    <EconomySeatLegRoom status="available" is_star is_red />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeatLegRoom status="available" is_star is_red />
                  </div>
                  <div className="flex justify-center">
                    <EmptySeat
                      classes={
                        " w-[27px] h-[24px] sm:w-[35px] sm:h-[31px] bg-brand-red-40"
                      }
                    />
                  </div>
                </div>
                <div className="grid grid-cols-3">
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="available" is_star />
                  </div>
                </div>
                <div className="grid grid-cols-3">
                  <div className="flex justify-center">
                    <EconomySeat status="available" is_crown />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="available" is_star />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="available" is_crown />
                  </div>
                </div>
                <div className="grid grid-cols-3">
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="available" is_star />
                  </div>
                </div>
                <div className="grid grid-cols-3">
                  <div className="flex justify-center">
                    <EconomySeat status="available" is_crown />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="available" is_crown />
                  </div>
                </div>
                <div className="grid grid-cols-3">
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                </div>
                <div className="grid grid-cols-3">
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                </div>
                <div className="grid grid-cols-3">
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                </div>
                <div className="grid grid-cols-3">
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="selected" />
                  </div>
                </div>
                <div className="grid grid-cols-3">
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" is_red />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" is_red />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" is_red />
                  </div>
                </div>
                <div className="grid grid-cols-1 pt-2">
                  <div className="rounded bg-brand-blue-40 w-full sm:w-[130px] py-2.5">
                    <p className="text-base text-center leading-none font-medium text-brand-blue-600">
                      Bulk Head
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4 sm:space-y-[15px] pt-2 sm:pt-3 pb-6">
                <p className="uppercase text-xs sm:text-base font-medium text-center text-brand-dark/50">
                  9
                </p>
                <p className="uppercase text-xs sm:text-base font-medium text-center text-brand-dark/50">
                  10
                </p>
                <p className="uppercase text-xs sm:text-base font-medium text-center text-brand-dark/50">
                  11
                </p>
                <p className="uppercase text-xs sm:text-base font-medium text-center text-brand-dark/50">
                  12
                </p>
                <p className="uppercase text-xs sm:text-base font-medium text-center text-brand-dark/50">
                  13
                </p>
                <p className="uppercase text-xs sm:text-base font-medium text-center text-brand-dark/50">
                  14
                </p>
                <p className="uppercase text-xs sm:text-base font-medium text-center text-brand-dark/50">
                  15
                </p>
                <p className="uppercase text-xs sm:text-base font-medium text-center text-brand-dark/50">
                  16
                </p>
                <p className="uppercase text-xs sm:text-base font-medium text-center text-brand-dark/50">
                  17
                </p>
                <p className="uppercase text-xs sm:text-base font-medium text-center text-brand-dark/50">
                  18
                </p>
              </div>
              <div className="space-y-2 w-32">
                <div className="grid grid-cols-3">
                  <p className="uppercase text-base font-medium text-center text-brand-dark/50">
                    A
                  </p>
                  <p className="uppercase text-base font-medium text-center text-brand-dark/50">
                    B
                  </p>
                  <p className="uppercase text-base font-medium text-center text-brand-dark/50">
                    C
                  </p>
                </div>
                <div className="grid grid-cols-3">
                  <div className="flex justify-center">
                    <EconomySeatLegRoom status="available" is_star is_red />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeatLegRoom status="available" is_star is_red />
                  </div>
                  <div className="flex justify-center">
                    <EmptySeat
                      classes={
                        " w-[27px] h-[24px] sm:w-[35px] sm:h-[31px] bg-brand-red-40"
                      }
                    />
                  </div>
                </div>
                <div className="grid grid-cols-3">
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="available" is_star />
                  </div>
                </div>
                <div className="grid grid-cols-3">
                  <div className="flex justify-center">
                    <EconomySeat status="available" is_star />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="available" is_star />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="available" is_star />
                  </div>
                </div>
                <div className="grid grid-cols-3">
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="available" is_star />
                  </div>
                </div>
                <div className="grid grid-cols-3">
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                </div>
                <div className="grid grid-cols-3">
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                </div>
                <div className="grid grid-cols-3">
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                </div>
                <div className="grid grid-cols-3">
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                </div>
                <div className="grid grid-cols-3">
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="selected" is_crown is_selected />
                  </div>
                </div>
                <div className="grid grid-cols-3">
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" is_red />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" is_red />
                  </div>
                  <div className="flex justify-center">
                    <EconomySeat status="unavailable" is_red />
                  </div>
                </div>
                <div className="grid grid-cols-1 pt-2">
                  <div className="w-[130px] py-2.5 flex justify-center items-center rounded rounded-br-3xl bg-brand-blue-40">
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
                  </div>
                </div>
              </div>
            </div>
            <svg
              className="absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="13"
              fill="none"
              viewBox="0 0 10 13"
            >
              <path
                fill="#CA1502"
                d="M9.415.99a.75.75 0 00-.776.05l-7.5 5.25a.75.75 0 000 1.23l7.5 5.25a.75.75 0 001.18-.615v-10.5A.75.75 0 009.416.99z"
              ></path>
            </svg>
          </div>
        </div>
        <div className="flex px-5 justify-between items-center pt-2 pb-1">
          <div className="flex gap-1.5 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="16"
              fill="none"
              viewBox="0 0 21 16"
            >
              <path
                stroke="#CA1502"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.196"
                d="M19.481 7.784H5.221M10.568 3.503l-5.347 4.28 5.347 4.28M.766.65v14.268"
              ></path>
            </svg>
            <p className="text-[11px] font-medium text-brand-red-500">Exit</p>
          </div>
          <div className="flex gap-1.5 items-center">
            <p className="text-[11px] font-medium text-brand-red-500">Exit</p>
            <svg
              className="rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="16"
              fill="none"
              viewBox="0 0 21 16"
            >
              <path
                stroke="#CA1502"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.196"
                d="M19.481 7.784H5.221M10.568 3.503l-5.347 4.28 5.347 4.28M.766.65v14.268"
              ></path>
            </svg>
          </div>
        </div>
        <div className="px-4 sm:px-8">
          <div className="w-full py-3.5 flex justify-center items-center rounded rounded-b-[40px] bg-brand-blue-40">
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
          </div>
        </div>
      </div>
    </>
  );
}
