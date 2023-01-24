import React, { useState } from "react";

export default function Travelers() {
  let [child, setChild] = useState(1);
  let [adult, setAdult] = useState(1);

  const decrementAdult = () => {
    if (child > 1) {
      setChild(child - 1);
    }
  };
  const incrementAdult = () => {
    setChild(Number(child) + 1);
  };
  const decrementChild = () => {
    if (adult > 1) {
      setAdult(adult - 1);
    }
  };
  const incrementChild = () => {
    setAdult(Number(adult) + 1);
  };

  return (
    <div className="relative group w-full">
      <div className="border-b border-b-brand-gray-light pb-2 w-full">
        <h3 className="text-[22px]">
          {" "}
          {adult} Adults, {child} Children
        </h3>
      </div>
      <div className="absolute bg-white shadow-lg px-5 py-6 w-72 opacity-0 translate-y-10 transition-all duration-200 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible">
        <ul className="grid gap-2">
          <li className="flex justify-between">
            <h4 className="text-xl text-brand-dark w-full font-medium">
              Adults
            </h4>
            <div className="shrink-0 flex gap-1 ">
              <button
                type="button"
                className="w-8 h-8 rounded-md bg-blue-500 hover:bg-blue-400 text-white"
                onClick={decrementAdult}
              >
                -
              </button>
              <input
                type="text"
                className="readonly w-8 py-1 text-center border border-gray-300 rounded-md"
                value={child}
              />
              <button
                type="button"
                className="w-8 h-8 rounded-md bg-blue-500 hover:bg-blue-400 text-white"
                onClick={incrementAdult}
              >
                +
              </button>
            </div>
          </li>
          <li className="flex justify-between">
            <h4 className="text-xl text-brand-dark w-full font-medium">
              Children
            </h4>
            <div className="shrink-0 flex gap-1 ">
              <button
                type="button"
                className="w-8 h-8 rounded-md bg-blue-500 hover:bg-blue-400 text-white"
                onClick={decrementChild}
              >
                -
              </button>
              <input
                type="text"
                className="readonly w-8 py-1 text-center border border-gray-300 rounded-md"
                value={adult}
              />
              <button
                type="button"
                className="w-8 h-8 rounded-md bg-blue-500 hover:bg-blue-400 text-white"
                onClick={incrementChild}
              >
                +
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
