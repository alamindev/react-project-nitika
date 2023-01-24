import React, { useRef, useState } from "react";
import logo_1 from "../../assets/images/listing/logo-1.png";
import logo_2 from "../../assets/images/listing/logo-2.png";
import Arrow from "../Svg/Arrow";
export default function PriceArea() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  const handleNextClick = () => {
    if (currentIndex < containerRef.current.children.length - 1) {
      setCurrentIndex(currentIndex + 1);
      containerRef.current.scrollLeft += containerRef.current.offsetWidth;
    }
  };

  const handlePreviousClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      containerRef.current.scrollLeft -= containerRef.current.offsetWidth;
    }
  };

  return (
    <div className="relative bg-white rounded-xl overflow-hidden">
      <div className="flex">
        <div className="w-[100px] sm:w-[141px] border-r px-4 shrink-0 divide-y">
          <div className="h-32 flex justify-center items-center ">
            <a href="#" className="text-center text-sm text-brand-dark">
              See all Airlines
            </a>
          </div>
          <div className="h-14 flex justify-center items-center ">
            <a href="#" className="text-center text-sm text-brand-dark">
              Non stop
            </a>
          </div>
          <div className="h-14 flex justify-center items-center ">
            <a href="#" className="text-center text-sm text-brand-dark">
              1+ stops
            </a>
          </div>
        </div>
        <div
          className="overflow-x-auto flex divide-x hide-scroll"
          ref={containerRef}
        >
          <div className="divide-y w-[130px] sm:w-[194px] shrink-0">
            <div className="shrink-0 h-32 flex  px-4 sm:px-12 justify-center items-center flex-col gap-2">
              <img src={logo_1} className="w-[85px]" alt="logo 1" />
              <p className="text-sm text-brand-dark text-center">
                Spirit Airlines (with others)
              </p>
            </div>
            <div className="flex justify-center items-center h-14">
              <h3 className="text-xl font-medium">
                USD 93<sup>.88</sup>
              </h3>
            </div>
            <div className="flex justify-center items-center h-14">
              <h3 className="text-xl font-medium">
                USD 113<sup>.99</sup>
              </h3>
            </div>
          </div>
          <div className="divide-y w-[130px] sm:w-[194px] shrink-0">
            <div className="shrink-0 h-32 flex  px-4 sm:px-12 justify-center items-center flex-col gap-2">
              <img src={logo_2} className="w-[85px]" alt="logo 1" />
              <p className="text-sm text-brand-dark text-center">
                Frontier Airlines (with others)
              </p>
            </div>
            <div className="flex justify-center items-center h-14">
              <h3 className="text-xl font-medium">
                USD 93<sup>.88</sup>
              </h3>
            </div>
            <div className="flex justify-center items-center h-14">
              <h3 className="text-xl font-medium">
                USD 113<sup>.99</sup>
              </h3>
            </div>
          </div>
          <div className="divide-y w-[130px] sm:w-[194px] shrink-0">
            <div className="shrink-0 h-32 flex  px-4 sm:px-12 justify-center items-center flex-col gap-2">
              <img src={logo_2} className="w-[85px]" alt="logo 1" />
              <p className="text-sm text-brand-dark text-center">
                Frontier Airlines (with others)
              </p>
            </div>
            <div className="flex justify-center items-center h-14">
              <h3 className="text-xl font-medium">
                USD 93<sup>.88</sup>
              </h3>
            </div>
            <div className="flex justify-center items-center h-14">
              <h3 className="text-xl font-medium">
                USD 113<sup>.99</sup>
              </h3>
            </div>
          </div>
          <div className="divide-y w-[130px] sm:w-[194px] shrink-0">
            <div className="shrink-0 h-32 flex  px-4 sm:px-12 justify-center items-center flex-col gap-2">
              <img src={logo_2} className="w-[85px]" alt="logo 1" />
              <p className="text-sm text-brand-dark text-center">
                Frontier Airlines (with others)
              </p>
            </div>
            <div className="flex justify-center items-center h-14">
              <h3 className="text-xl font-medium">
                USD 93<sup>.88</sup>
              </h3>
            </div>
            <div className="flex justify-center items-center h-14">
              <h3 className="text-xl font-medium">
                USD 113<sup>.99</sup>
              </h3>
            </div>
          </div>
          <div className="divide-y w-[130px] sm:w-[194px] shrink-0">
            <div className="shrink-0 h-32 flex  px-4 sm:px-12 justify-center items-center flex-col gap-2">
              <img src={logo_2} className="w-[85px]" alt="logo 1" />
              <p className="text-sm text-brand-dark text-center">
                Frontier Airlines (with others)
              </p>
            </div>
            <div className="flex justify-center items-center h-14">
              <h3 className="text-xl font-medium">
                USD 93<sup>.88</sup>
              </h3>
            </div>
            <div className="flex justify-center items-center h-14">
              <h3 className="text-xl font-medium">
                USD 113<sup>.99</sup>
              </h3>
            </div>
          </div>
          <div className="divide-y w-[130px] sm:w-[194px] shrink-0">
            <div className="shrink-0 h-32 flex  px-4 sm:px-12 justify-center items-center flex-col gap-2">
              <img src={logo_2} className="w-[85px]" alt="logo 1" />
              <p className="text-sm text-brand-dark text-center">
                Frontier Airlines (with others)
              </p>
            </div>
            <div className="flex justify-center items-center h-14">
              <h3 className="text-xl font-medium">
                USD 93<sup>.88</sup>
              </h3>
            </div>
            <div className="flex justify-center items-center h-14">
              <h3 className="text-xl font-medium">
                USD 113<sup>.99</sup>
              </h3>
            </div>
          </div>
          <div className="divide-y w-[130px] sm:w-[194px] shrink-0">
            <div className="shrink-0 h-32 flex  px-4 sm:px-12 justify-center items-center flex-col gap-2">
              <img src={logo_2} className="w-[85px]" alt="logo 1" />
              <p className="text-sm text-brand-dark text-center">
                Frontier Airlines (with others)
              </p>
            </div>
            <div className="flex justify-center items-center h-14">
              <h3 className="text-xl font-medium">
                USD 93<sup>.88</sup>
              </h3>
            </div>
            <div className="flex justify-center items-center h-14">
              <h3 className="text-xl font-medium">
                USD 113<sup>.99</sup>
              </h3>
            </div>
          </div>
        </div>
        <div className="w-[40px] sm:w-[60px] shrink-0 flex flex-col  items-center  divide-y">
          <div className="group h-[50%] w-full">
            <button
              className="py-6 w-full flex justify-center items-center h-full hover:bg-brand-red"
              type="button"
              onClick={handleNextClick}
            >
              <Arrow color="fill-current group-hover:fill-white" />
            </button>
          </div>
          <div className="group h-[50%] w-full">
            <button
              className="py-6 w-full flex justify-center items-center h-full hover:bg-brand-red"
              type="button"
              onClick={handlePreviousClick}
            >
              <Arrow color="fill-current group-hover:fill-white rotate-180" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
