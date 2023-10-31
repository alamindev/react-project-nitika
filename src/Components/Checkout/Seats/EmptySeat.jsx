import React from "react";

export default function EmptySeat({ classes }) {
  return (
    <div className={`${classes} flex justify-center items-center rounded-lg`}>
      <svg
        className="sm:w-auto w-3.5"
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        fill="none"
        viewBox="0 0 18 18"
      >
        <path
          stroke="#320500"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.196"
          d="M7.872 4.327c.985 0 1.783-.639 1.783-1.426 0-.787-.798-1.426-1.783-1.426-.984 0-1.782.639-1.782 1.426 0 .787.798 1.426 1.782 1.426zM15.887 17.167c.493 0 .892-.318.892-.711 0-.393-.4-.712-.892-.712s-.89.319-.89.712c0 .393.398.711.89.711zM4.983 10.429c-2.194.884-3.077 3.025-1.97 4.78 1.104 1.757 3.78 2.463 5.973 1.578 1.503-.607 2.45-1.838 2.447-3.185M15.895 13.602v-1.427c0-.394-.4-.713-.891-.713H9.42c-.887 0-1.639-.522-1.765-1.225l-.673-3.768"
        ></path>
        <path
          stroke="#320500"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.196"
          d="M11.053 9.321l-.4-2.24c-.062-.351-.438-.612-.882-.612H7.068l-.178.014-3.94.628c-.27.042-.5.183-.623.38L.74 10.034"
        ></path>
      </svg>
    </div>
  );
}
