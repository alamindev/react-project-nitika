import React from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import next from "../../assets/images/next.png";
import prev from "../../assets/images/prev.png";
import touring1 from "../../assets/images/touring-img-1.png";
import touring2 from "../../assets/images/touring-img-2.png";
import touring3 from "../../assets/images/touring-img-3.png";
import touring4 from "../../assets/images/touring-img-4.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
export default function Touring() {
  return (
    <section className="pt-5 pb-10 sm:py-10  px-4 2xl:px-0">
      <div className="container mx-auto">
        <div className="flex justify-between flex-col sm:flex-row gap-5 items-center mb-4 ">
          <h2 className="text-2xl md:text-[40px] font-poppins leading-[1.2] text-brand-blue-dark">
            Popular Touring
            <span className="font-satisfy text-brand-red font-black"> Destinations</span>
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
              <div className="relative rounded-3xl overflow-hidden group">
                <figure className="w-full aspect-h-4 aspect-w-3 ">
                  <img
                    src={touring1}
                    className="w-full h-full object-center object-cover transition-all duration-300 group-hover:scale-110 "
                    alt="touring img"
                  />
                </figure>
                <div className="absolute z-20 bottom-0 left-0 w-full pb-12 h-[265px] flex justify-end items-center flex-col bg-g4">
                  <h2 className="text-2xl sm:!leading-[1.1] sm:text-[32px] text-white text-center">
                    Barcelona, Spain
                  </h2>
                  <p className="uppercase text-base sm:text-lg text-center text-white">
                    Europe
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="pb-12">
              <div className="relative rounded-3xl overflow-hidden group">
                <figure className="w-full aspect-h-4 aspect-w-3 ">
                  <img
                    src={touring2}
                    className="w-full h-full object-center object-cover transition-all duration-300 group-hover:scale-110 "
                    alt="touring img"
                  />
                </figure>
                <div className="absolute z-20 bottom-0 left-0 w-full pb-12 h-[265px] flex justify-end items-center flex-col bg-g4">
                  <h2 className="text-2xl sm:!leading-[1.1] sm:text-[32px] text-white text-center">
                    Dubai, UAE
                  </h2>
                  <p className="uppercase text-base sm:text-lg text-center text-white">
                    ASIA
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="pb-12">
              <div className="relative rounded-3xl overflow-hidden group">
                <figure className="w-full aspect-h-4 aspect-w-3 ">
                  <img
                    src={touring3}
                    className="w-full h-full object-center object-cover transition-all duration-300 group-hover:scale-110 "
                    alt="touring img"
                  />
                </figure>
                <div className="absolute z-20 bottom-0 left-0 w-full pb-12 h-[265px] flex justify-end items-center flex-col bg-g4">
                  <h2 className="text-2xl sm:!leading-[1.1] sm:text-[32px] text-white text-center">
                    London, UK
                  </h2>
                  <p className="uppercase text-base sm:text-lg text-center text-white">
                    Europe
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="pb-12">
              <div className="relative rounded-3xl overflow-hidden group">
                <figure className="w-full aspect-h-4 aspect-w-3 ">
                  <img
                    src={touring4}
                    className="w-full h-full object-center object-cover transition-all duration-300 group-hover:scale-110 "
                    alt="touring img"
                  />
                </figure>
                <div className="absolute z-20 bottom-0 left-0 w-full pb-12 h-[265px] flex justify-end items-center flex-col bg-g4">
                  <h2 className="text-2xl sm:!leading-[1.1] sm:text-[32px] text-white text-center">
                    Cancún, Mexico
                  </h2>
                  <p className="uppercase text-base sm:text-lg text-center text-white">
                    North America
                  </p>
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
