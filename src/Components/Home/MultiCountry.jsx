import React from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import next from "../../assets/images/next.png";
import prev from "../../assets/images/prev.png";
import product10 from "../../assets/images/product-img-10.png";
import product8 from "../../assets/images/product-img-8.png";
import product9 from "../../assets/images/product-img-9.png";
import Hearth from "../Svg/Hearth";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
export default function MultiCountry() {
  return (
    <section className="pt-10 pb-10 sm:py-20 px-4 2xl:px-0">
      <div className="container mx-auto">
        <div className="flex justify-between  flex-col sm:flex-row gap-5 items-center mb-4 ">
          <div className="space-y-3">
            <h2 className="text-2xl md:text-[40px] text-center sm:text-left font-poppins leading-[1.2] text-brand-blue-dark">
              Multi-Country
              <span className="font-satisfy text-brand-red font-black"> Tours</span>
            </h2>
            <p className="text-base md:text-lg text-center sm:text-left text-brand-dark text-opacity-75">
              Explore our multi-country tours. Let yourself be surprised by our
              extended version top sellers.
            </p>
          </div>
          <a
            href="#"
            className="px-10 py-3 rounded-full border border-brand-gray-light text-lg md:text-2xl hover:bg-brand-blue-dark hover:text-white"
          >
            View all
          </a>
        </div>
      </div>
      <div className="w-[1890px] max-w-full mx-auto relative mt-8">
        <div className="container mx-auto">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={15}
            loop
            slidesPerView={1.3}
            navigation={{
              nextEl: ".touring-next",
              prevEl: ".touring-prev",
            }}
            breakpoints={{
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            <SwiperSlide className="pb-12">
              <div className="relative rounded-3xl overflow-hidden">
                <figure className="w-full h-[300px] 2xl:h-[390px] relative">
                  <img
                    src={product8}
                    className="w-full h-full object-center object-cover "
                    alt="touring img"
                  />
                  <div className="flex justify-between items-center absolute w-full top-5 left-0 px-4">
                    <p className="px-2 py-1 bg-brand-red text-white rounded-full font-bold text-lg">
                      -44% OFF
                    </p>
                    <button
                      type="button"
                      className="group bg-transparent focus:ring-0 focus:outline-0"
                    >
                      <Hearth classes="stroke-white fill-[rgba(37,37,37,0.10)] group-hover:fill-brand-red group-hover:stroke-brand-red" />
                    </button>
                  </div>
                </figure>
                <div className="px-6  py-8 space-y-3 border-x border-brand-gray-light border-b rounded-bl-3xl rounded-br-3xl">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-medium sm:text-2xl text-brand-dark  font-poppins truncate ">
                      Southeast Asian
                    </h2>
                    <p className="text-brand-dark text-base md:text-lg">
                      12 Days
                    </p>
                  </div>
                  <div className="flex divide-x  space-x-5 divide-brand-gray-light">
                    <p className="text-brand-dark text-base md:text-lg">
                      Thailand, Indonesia, Vietnam
                    </p>
                  </div>
                  <div className="flex gap-6 items-center">
                    <p className="text-lg">
                      <span className="pr-2">From</span>
                      <del>$4299</del>
                    </p>
                    <span className="text-xl md:text-2xl text-brand-red">
                      $2,399
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="pb-12">
              <div className="relative rounded-3xl overflow-hidden">
                <figure className="w-full h-[300px] 2xl:h-[390px] relative">
                  <img
                    src={product9}
                    className="w-full h-full object-center object-cover "
                    alt="touring img"
                  />
                  <div className="flex justify-between items-center absolute w-full top-5 left-0 px-4">
                    <p className="px-2 py-1 bg-brand-red text-white rounded-full font-bold text-lg">
                      -44% OFF
                    </p>
                    <button
                      type="button"
                      className="group bg-transparent focus:ring-0 focus:outline-0"
                    >
                      <Hearth classes="stroke-white fill-[rgba(37,37,37,0.10)] group-hover:fill-brand-red group-hover:stroke-brand-red" />
                    </button>
                  </div>
                </figure>
                <div className="px-6  py-8 space-y-3 border-x border-brand-gray-light border-b rounded-bl-3xl rounded-br-3xl">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-medium sm:text-2xl text-brand-dark  font-poppins truncate ">
                      Southern Africa
                    </h2>
                    <p className="text-brand-dark text-base md:text-lg">
                      12 Days
                    </p>
                  </div>
                  <div className="flex divide-x  space-x-5 divide-brand-gray-light">
                    <p className="text-brand-dark text-base md:text-lg">
                      South Africa, Zimbabwe, Botswana
                    </p>
                  </div>
                  <div className="flex gap-6 items-center">
                    <p className="text-lg">
                      <span className="pr-2">From</span>
                      <del>$4299</del>
                    </p>
                    <span className="text-xl md:text-2xl text-brand-red">
                      $2,399
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="pb-12">
              <div className="relative rounded-3xl overflow-hidden">
                <figure className="w-full h-[300px] 2xl:h-[390px] relative">
                  <img
                    src={product10}
                    className="w-full h-full object-center object-cover "
                    alt="touring img"
                  />
                  <div className="flex justify-between items-center absolute w-full top-5 left-0 px-4">
                    <p className="px-2 py-1 bg-brand-red text-white rounded-full font-bold text-lg">
                      -44% OFF
                    </p>
                    <button
                      type="button"
                      className="group bg-transparent focus:ring-0 focus:outline-0"
                    >
                      <Hearth classes="stroke-white fill-[rgba(37,37,37,0.10)] group-hover:fill-brand-red group-hover:stroke-brand-red" />
                    </button>
                  </div>
                </figure>
                <div className="px-6  py-8 space-y-3 border-x border-brand-gray-light border-b rounded-bl-3xl rounded-br-3xl">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-medium sm:text-2xl text-brand-dark  font-poppins truncate ">
                      Central Europe
                    </h2>
                    <p className="text-brand-dark text-base md:text-lg">
                      12 Days
                    </p>
                  </div>
                  <div className="flex divide-x  space-x-5 divide-brand-gray-light">
                    <p className="text-brand-dark text-base md:text-lg">
                      Germany, Czech Republic, Austria, Hungary
                    </p>
                  </div>
                  <div className="flex gap-6 items-center">
                    <p className="text-lg">
                      <span className="pr-2">From</span>
                      <del>$4299</del>
                    </p>
                    <span className="text-xl md:text-2xl text-brand-red">
                      $2,399
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="flex z-20 justify-between items-center absolute w-full top-[50%] left-0 translate-y-[-50%]">
          <button type="button" className="touring-prev">
            <img src={prev} alt="prev" />
          </button>
          <button type="button" className="touring-next">
            <img src={next} alt="next" />
          </button>
        </div>
      </div>
    </section>
  );
}
