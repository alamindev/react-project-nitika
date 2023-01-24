import React from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import next from "../../assets/images/next.png";
import prev from "../../assets/images/prev.png";
import product1 from "../../assets/images/product-img-1.png";
import product2 from "../../assets/images/product-img-2.png";
import product3 from "../../assets/images/product-img-3.png";
import product4 from "../../assets/images/product-img-4.png";
import Hearth from "../Svg/Hearth";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
export default function Adventures() {
  return (
    <section className="pt-5 pb-10 sm:py-8 px-4">
      <div className="container mx-auto">
        <div className="flex justify-between flex-col sm:flex-row gap-5 items-center mb-4 ">
          <h2 className="text-2xl md:text-[40px] font-poppins leading-[1.2] text-brand-blue-dark">
            Recently Viewed
            <span className="font-satisfy text-brand-red font-black"> Adventures</span>
          </h2>
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
              1280: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
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
                    src={product1}
                    className="w-full h-full object-center object-cover "
                    alt="touring img"
                  />
                  <div className="flex justify-between items-center absolute w-full top-5 left-0 px-4">
                    <p className="px-2 py-1 bg-brand-red text-white rounded-full font-bold text-lg">
                      -10% OFF
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
                  <h2 className="text-xl font-medium sm:text-2xl text-brand-dark  font-poppins truncate ">
                    Europe Escape
                  </h2>
                  <div className="flex divide-x  space-x-5 divide-brand-gray-light">
                    <p className="text-brand-dark text-base md:text-lg">
                      12 Days
                    </p>
                    <div className="flex items-center gap-3 pl-5">
                      <span className="text-brand-dark text-base md:text-lg">
                        4.4
                      </span>
                      <svg
                        id="Group_63"
                        dataname="Group 63"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="19.06"
                        viewBox="0 0 20 19.06"
                      >
                        <path
                          id="Path_13"
                          dataname="Path 13"
                          d="M19.284,7.215l-5.9-.857L10.749,1.014a.867.867,0,0,0-1.495,0L6.613,6.357l-5.9.857A.833.833,0,0,0,.25,8.635L4.52,12.8,3.513,18.673a.833.833,0,0,0,1.209.878L10,16.778l5.277,2.774a.833.833,0,0,0,1.209-.878L15.477,12.8l4.27-4.161a.833.833,0,0,0-.462-1.421Z"
                          transform="translate(0.001 -0.587)"
                          fill="#f79707"
                        />
                      </svg>
                      <span className="text-brand-dark text-base md:text-lg">
                        (653)
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-6 items-center">
                    <p className="text-lg">
                      <span className="pr-2">From</span>
                      <del>$2000</del>
                    </p>
                    <span className="text-xl md:text-2xl text-brand-red">
                      $1,799
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="pb-12">
              <div className="relative rounded-3xl overflow-hidden">
                <figure className="w-full h-[300px] 2xl:h-[390px] relative">
                  <img
                    src={product2}
                    className="w-full h-full object-center object-cover "
                    alt="touring img"
                  />
                  <div className="flex justify-between items-center absolute w-full top-5 left-0 px-4">
                    <p className="px-2 py-1 bg-brand-red text-white rounded-full font-bold text-lg">
                      -50% OFF
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
                  <h2 className="text-xl font-medium sm:text-2xl text-brand-dark  font-poppins truncate ">
                    Southern Treasures
                  </h2>
                  <div className="flex divide-x  space-x-5 divide-brand-gray-light">
                    <p className="text-brand-dark text-base md:text-lg">
                      12 Days
                    </p>
                    <div className="flex items-center gap-3 pl-5">
                      <span className="text-brand-dark text-base md:text-lg">
                        4.4
                      </span>
                      <svg
                        id="Group_63"
                        dataname="Group 63"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="19.06"
                        viewBox="0 0 20 19.06"
                      >
                        <path
                          id="Path_13"
                          dataname="Path 13"
                          d="M19.284,7.215l-5.9-.857L10.749,1.014a.867.867,0,0,0-1.495,0L6.613,6.357l-5.9.857A.833.833,0,0,0,.25,8.635L4.52,12.8,3.513,18.673a.833.833,0,0,0,1.209.878L10,16.778l5.277,2.774a.833.833,0,0,0,1.209-.878L15.477,12.8l4.27-4.161a.833.833,0,0,0-.462-1.421Z"
                          transform="translate(0.001 -0.587)"
                          fill="#f79707"
                        />
                      </svg>
                      <span className="text-brand-dark text-base md:text-lg">
                        (653)
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-6 items-center">
                    <p className="text-lg">
                      <span className="pr-2">From</span>
                      <del>$1599</del>
                    </p>
                    <span className="text-xl md:text-2xl text-brand-red">
                      $799
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="pb-12">
              <div className="relative rounded-3xl overflow-hidden">
                <figure className="w-full h-[300px] 2xl:h-[390px] relative">
                  <img
                    src={product3}
                    className="w-full h-full object-center object-cover "
                    alt="touring img"
                  />
                  <div className="flex justify-between items-center absolute w-full top-5 left-0 px-4">
                    <p className="px-2 py-1 opacity-0 bg-brand-red text-white rounded-full font-bold text-lg">
                      -50% OFF
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
                  <h2 className="text-xl font-medium sm:text-2xl text-brand-dark  font-poppins truncate ">
                    Island Hopping
                  </h2>
                  <div className="flex divide-x  space-x-5 divide-brand-gray-light">
                    <p className="text-brand-dark text-base md:text-lg">
                      12 Days
                    </p>
                    <div className="flex items-center gap-3 pl-5">
                      <span className="text-brand-dark text-base md:text-lg">
                        4.4
                      </span>
                      <svg
                        id="Group_63"
                        dataname="Group 63"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="19.06"
                        viewBox="0 0 20 19.06"
                      >
                        <path
                          id="Path_13"
                          dataname="Path 13"
                          d="M19.284,7.215l-5.9-.857L10.749,1.014a.867.867,0,0,0-1.495,0L6.613,6.357l-5.9.857A.833.833,0,0,0,.25,8.635L4.52,12.8,3.513,18.673a.833.833,0,0,0,1.209.878L10,16.778l5.277,2.774a.833.833,0,0,0,1.209-.878L15.477,12.8l4.27-4.161a.833.833,0,0,0-.462-1.421Z"
                          transform="translate(0.001 -0.587)"
                          fill="#f79707"
                        />
                      </svg>
                      <span className="text-brand-dark text-base md:text-lg">
                        (653)
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-6 items-center">
                    <p className="text-lg">
                      <span className="pr-2">From</span>
                      <del>$1,257</del>
                    </p>
                    <span className="text-xl hidden md:text-2xl text-brand-red">
                      $799
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="pb-12">
              <div className="relative rounded-3xl overflow-hidden">
                <figure className="w-full h-[300px] 2xl:h-[390px] relative">
                  <img
                    src={product4}
                    className="w-full h-full object-center object-cover "
                    alt="touring img"
                  />
                  <div className="flex justify-between items-center absolute w-full top-5 left-0 px-4">
                    <p className="px-2 py-1 bg-brand-red text-white rounded-full font-bold text-lg">
                      -50% OFF
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
                  <h2 className="text-xl font-medium sm:text-2xl text-brand-dark  font-poppins truncate ">
                    Rockies Adventure Vancouver
                  </h2>
                  <div className="flex divide-x  space-x-5 divide-brand-gray-light">
                    <p className="text-brand-dark text-base md:text-lg">
                      12 Days
                    </p>
                    <div className="flex items-center gap-3 pl-5">
                      <span className="text-brand-dark text-base md:text-lg">
                        4.4
                      </span>
                      <svg
                        id="Group_63"
                        dataname="Group 63"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="19.06"
                        viewBox="0 0 20 19.06"
                      >
                        <path
                          id="Path_13"
                          dataname="Path 13"
                          d="M19.284,7.215l-5.9-.857L10.749,1.014a.867.867,0,0,0-1.495,0L6.613,6.357l-5.9.857A.833.833,0,0,0,.25,8.635L4.52,12.8,3.513,18.673a.833.833,0,0,0,1.209.878L10,16.778l5.277,2.774a.833.833,0,0,0,1.209-.878L15.477,12.8l4.27-4.161a.833.833,0,0,0-.462-1.421Z"
                          transform="translate(0.001 -0.587)"
                          fill="#f79707"
                        />
                      </svg>
                      <span className="text-brand-dark text-base md:text-lg">
                        (653)
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-6 items-center">
                    <p className="text-lg">
                      <span className="pr-2">From</span>
                      <del>$1599</del>
                    </p>
                    <span className="text-xl md:text-2xl text-brand-red">
                      $799
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
