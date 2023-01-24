import React, { useState } from "react";
import icon from "../../assets/images/listing/icon-6.svg";
export default function Fees() {
  const [selectedOption, setSelectedOption] = useState("option1");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="pb-8 flex-wrap flex gap-3">
      <div
        className={
          "w-[100px] sm:w-[116px] h-[100px] sm:h-[116px] group relative   " +
          (selectedOption === "option1" ? "active" : "")
        }
      >
        <input
          type="radio"
          name="options"
          id="option1"
          value="option1"
          className="hidden"
          checked={selectedOption === "option1"}
          onChange={handleOptionChange}
        />
        <label
          htmlFor="option1"
          className="group-[.active]:bg-brand-dark flex justify-between flex-col   group-[.active]:border-brand-dark w-full h-full rounded-lg bg-white border border-dashed border-brand-gray-light p-2.5"
        >
          <span className="group-[.active]:text-white text-brand-dark !leading-none text-sm sm:text-base uppercase">
            main
          </span>
          <span className="flex flex-col gap-1">
            <span className="group-[.active]:text-white text-sm sm:text-base uppercase font-medium text-brand-dark text-opacity-75 !leading-none">
              USD
            </span>
            <span className="group-[.active]:text-white font-medium !leading-none text-base sm:text-xl text-brand-dark">
              $4,082
            </span>
          </span>
        </label>
        <div className="group-hover:translate-y-0 group-[.active]:!opacity-0 group-[.active]:!invisible  translate-y-10 transition-all group-hover:opacity-100 opacity-0 invisible group-hover:visible absolute top-full bg-white z-30 w-[250px] rounded-lg p-4 shadow-4xl">
          <h3 className="text-base font-medium text-brand-dark pb-1 border-b">
            Refundable Main Cabin
          </h3>
          <ul className="grid gap-1 mt-2">
            <li className="flex gap-2 items-center text-sm text-brand-gray">
              <img src={icon} alt="icon" />
              <span>Ticket Price</span>
            </li>
            <li className="flex gap-2 items-center text-sm text-brand-gray">
              <img src={icon} alt="icon" />
              <span>Ticket Price</span>
            </li>
            <li className="flex gap-2 items-center text-sm text-brand-gray">
              <img src={icon} alt="icon" />
              <span>Ticket Price</span>
            </li>
            <li className="flex gap-2 items-center text-sm text-brand-gray">
              <img src={icon} alt="icon" />
              <span>Ticket Price</span>
            </li>
            <li className="flex gap-2 items-center text-sm text-brand-gray">
              <img src={icon} alt="icon" />
              <span>Ticket Price</span>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={
          "w-[100px] sm:w-[116px] h-[100px] sm:h-[116px] group relative " +
          (selectedOption === "option2" ? "active" : "")
        }
      >
        <input
          type="radio"
          name="options"
          id="option2"
          value="option2"
          className="hidden"
          checked={selectedOption === "option2"}
          onChange={handleOptionChange}
        />
        <label
          htmlFor="option2"
          className="group-[.active]:bg-brand-dark flex justify-between flex-col   group-[.active]:border-brand-dark w-full h-full rounded-lg bg-white border border-dashed border-brand-gray-light p-2.5"
        >
          <span className="group-[.active]:text-white text-brand-dark !leading-none text-sm sm:text-base uppercase">
            Refundable Main Cabin
          </span>
          <span className="flex flex-col gap-1">
            <span className="group-[.active]:text-white text-sm sm:text-base uppercase font-medium text-brand-dark text-opacity-75 !leading-none">
              USD
            </span>
            <span className="group-[.active]:text-white font-medium !leading-none text-base sm:text-xl text-brand-dark">
              $2,044<sup>.99</sup>
            </span>
          </span>
        </label>
        <div className="group-hover:translate-y-0 group-[.active]:!opacity-0 group-[.active]:!invisible  translate-y-10 transition-all group-hover:opacity-100 opacity-0 invisible group-hover:visible absolute top-full bg-white z-30 w-[250px] rounded-lg p-4 shadow-4xl">
          <h3 className="text-base font-medium text-brand-dark pb-1 border-b">
            Refundable Main Cabin
          </h3>
          <ul className="grid gap-1 mt-2">
            <li className="flex gap-2 items-center text-sm text-brand-gray">
              <img src={icon} alt="icon" />
              <span>Ticket Price</span>
            </li>
            <li className="flex gap-2 items-center text-sm text-brand-gray">
              <img src={icon} alt="icon" />
              <span>Ticket Price</span>
            </li>
            <li className="flex gap-2 items-center text-sm text-brand-gray">
              <img src={icon} alt="icon" />
              <span>Ticket Price</span>
            </li>
            <li className="flex gap-2 items-center text-sm text-brand-gray">
              <img src={icon} alt="icon" />
              <span>Ticket Price</span>
            </li>
            <li className="flex gap-2 items-center text-sm text-brand-gray">
              <img src={icon} alt="icon" />
              <span>Ticket Price</span>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={
          "w-[100px] sm:w-[116px] h-[100px] sm:h-[116px] group relative " +
          (selectedOption === "option3" ? "active" : "")
        }
      >
        <input
          type="radio"
          name="options"
          id="option3"
          value="option3"
          className="hidden"
          checked={selectedOption === "option3"}
          onChange={handleOptionChange}
        />
        <label
          htmlFor="option3"
          className="group-[.active]:bg-brand-dark flex justify-between flex-col   group-[.active]:border-brand-dark w-full h-full rounded-lg bg-white border border-dashed border-brand-gray-light p-2.5"
        >
          <span className="group-[.active]:text-white text-brand-dark !leading-none text-sm sm:text-base uppercase">
            Refundable Main Cabin
          </span>
          <span className="flex flex-col gap-1">
            <span className="group-[.active]:text-white text-sm sm:text-base uppercase font-medium text-brand-dark text-opacity-75 !leading-none">
              USD
            </span>
            <span className="group-[.active]:text-white font-medium !leading-none text-base sm:text-xl text-brand-dark">
              $2,044<sup>.99</sup>
            </span>
          </span>
        </label>
        <div className="group-hover:translate-y-0 group-[.active]:!opacity-0 group-[.active]:!invisible  translate-y-10 transition-all group-hover:opacity-100 opacity-0 invisible group-hover:visible absolute top-full bg-white z-30 w-[250px] rounded-lg p-4 shadow-4xl">
          <h3 className="text-base font-medium text-brand-dark pb-1 border-b">
            Refundable Main Cabin
          </h3>
          <ul className="grid gap-1 mt-2">
            <li className="flex gap-2 items-center text-sm text-brand-gray">
              <img src={icon} alt="icon" />
              <span>Ticket Price</span>
            </li>
            <li className="flex gap-2 items-center text-sm text-brand-gray">
              <img src={icon} alt="icon" />
              <span>Ticket Price</span>
            </li>
            <li className="flex gap-2 items-center text-sm text-brand-gray">
              <img src={icon} alt="icon" />
              <span>Ticket Price</span>
            </li>
            <li className="flex gap-2 items-center text-sm text-brand-gray">
              <img src={icon} alt="icon" />
              <span>Ticket Price</span>
            </li>
            <li className="flex gap-2 items-center text-sm text-brand-gray">
              <img src={icon} alt="icon" />
              <span>Ticket Price</span>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={
          "w-[100px] sm:w-[116px] h-[100px] sm:h-[116px] group relative " +
          (selectedOption === "option4" ? "active" : "")
        }
      >
        <input
          type="radio"
          name="options"
          id="option4"
          value="option4"
          className="hidden"
          checked={selectedOption === "option4"}
          onChange={handleOptionChange}
        />
        <label
          htmlFor="option4"
          className="group-[.active]:bg-brand-dark flex justify-between flex-col   group-[.active]:border-brand-dark w-full h-full rounded-lg bg-white border border-dashed border-brand-gray-light p-2.5"
        >
          <span className="group-[.active]:text-white text-brand-dark !leading-none text-sm sm:text-base uppercase">
            Refundable Main Cabin
          </span>
          <span className="flex flex-col gap-1">
            <span className="group-[.active]:text-white text-sm sm:text-base uppercase font-medium text-brand-dark text-opacity-75 !leading-none">
              USD
            </span>
            <span className="group-[.active]:text-white font-medium !leading-none text-base sm:text-xl text-brand-dark">
              $2,044<sup>.99</sup>
            </span>
          </span>
        </label>
        <div className="group-hover:translate-y-0 group-[.active]:!opacity-0 group-[.active]:!invisible  translate-y-10 transition-all group-hover:opacity-100 opacity-0 invisible group-hover:visible absolute top-full bg-white z-30 w-[250px] rounded-lg p-4 shadow-4xl">
          <h3 className="text-base font-medium text-brand-dark pb-1 border-b">
            Refundable Main Cabin
          </h3>
          <ul className="grid gap-1 mt-2">
            <li className="flex gap-2 items-center text-sm text-brand-gray">
              <img src={icon} alt="icon" />
              <span>Ticket Price</span>
            </li>
            <li className="flex gap-2 items-center text-sm text-brand-gray">
              <img src={icon} alt="icon" />
              <span>Ticket Price</span>
            </li>
            <li className="flex gap-2 items-center text-sm text-brand-gray">
              <img src={icon} alt="icon" />
              <span>Ticket Price</span>
            </li>
            <li className="flex gap-2 items-center text-sm text-brand-gray">
              <img src={icon} alt="icon" />
              <span>Ticket Price</span>
            </li>
            <li className="flex gap-2 items-center text-sm text-brand-gray">
              <img src={icon} alt="icon" />
              <span>Ticket Price</span>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={
          "w-[100px] sm:w-[116px] h-[100px] sm:h-[116px] group relative " +
          (selectedOption === "option5" ? "active" : "")
        }
      >
        <input
          type="radio"
          name="options"
          id="option5"
          value="option5"
          className="hidden"
          checked={selectedOption === "option5"}
          onChange={handleOptionChange}
        />
        <label
          htmlFor="option5"
          className="group-[.active]:bg-brand-dark flex justify-between flex-col   group-[.active]:border-brand-dark w-full h-full rounded-lg bg-white border border-dashed border-brand-gray-light p-2.5"
        >
          <span className="group-[.active]:text-white text-brand-dark !leading-none text-sm sm:text-base uppercase">
            Refundable Main Cabin
          </span>
          <span className="flex flex-col gap-1">
            <span className="group-[.active]:text-white text-sm sm:text-base uppercase font-medium text-brand-dark text-opacity-75 !leading-none">
              USD
            </span>
            <span className="group-[.active]:text-white font-medium !leading-none text-base sm:text-xl text-brand-dark">
              $2,044<sup>.99</sup>
            </span>
          </span>
        </label>
        <div className="group-hover:translate-y-0 group-[.active]:!opacity-0 group-[.active]:!invisible  translate-y-10 transition-all group-hover:opacity-100 opacity-0 invisible group-hover:visible absolute top-full bg-white z-30 w-[250px] rounded-lg p-4 shadow-4xl">
          <h3 className="text-base font-medium text-brand-dark pb-1 border-b">
            Refundable Main Cabin
          </h3>
          <ul className="grid gap-1 mt-2">
            <li className="flex gap-2 items-center text-sm text-brand-gray">
              <img src={icon} alt="icon" />
              <span>Ticket Price</span>
            </li>
            <li className="flex gap-2 items-center text-sm text-brand-gray">
              <img src={icon} alt="icon" />
              <span>Ticket Price</span>
            </li>
            <li className="flex gap-2 items-center text-sm text-brand-gray">
              <img src={icon} alt="icon" />
              <span>Ticket Price</span>
            </li>
            <li className="flex gap-2 items-center text-sm text-brand-gray">
              <img src={icon} alt="icon" />
              <span>Ticket Price</span>
            </li>
            <li className="flex gap-2 items-center text-sm text-brand-gray">
              <img src={icon} alt="icon" />
              <span>Ticket Price</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
