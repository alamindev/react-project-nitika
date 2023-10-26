import React from "react";
import ImageOne from "../../assets/images/image-1.png";
import ImageTwo from "../../assets/images/image-2.png";
export default function SectionOne() {
  return (
    <section className="px-4 pt-32 md:pt-16 lg:pt-0 pb-10 lg:-mt-[20rem]  xl:-mt-[22rem] 2xl:-mt-[25rem] relative ">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-8">
          <div
            className="w-full lg:col-span-1 rounded-xl sm:rounded-3xl overflow-hidden min-h-[400px] md:min-w-[465px] bg-cover bg-no-repeat bg-[35%_center] md:bg-center  py-14 sm:min-h-[465px] relative flex flex-col items-center md:items-end justify-center px-5 sm:px-12"
            style={{ backgroundImage: `url(${ImageOne})` }}
          >
            <div className="absolute inset-0 bg-g1"></div>
            <div className="relative w-[425px] max-w-full  space-y-3 ">
              <h2 className="font-poppins text-white text-center font-medium text-[28px] sm:text-[32px]  leading-[1.2]">
                Give $100 to a Friend
              </h2>
              <p className="text-center text-white text-base sm:text-lg">
                and get $100 off your next trip
              </p>
              <div className="flex pt-5 justify-center">
                <a
                  href="#"
                  className="rounded-full px-8 py-3 bg-brand-red hover:bg-opacity-80 text-white text-lg md:text-2xl"
                >
                  Refer a friend now!
                </a>
              </div>
            </div>
          </div>
          <div className="md:rounded-3xl lg:col-span-1 flex justify-center items-center rounded-xl w-full bg-brand-blue-100 min-h-[400px] md:min-w-[465px] px-5 py-6 sm:p-8">
            <div className="w-[465px] max-w-full mx-auto space-y-3">
              <h2 className="font-poppins text-white text-center font-medium text-[28px] sm:text-[32px] leading-[1.5] sm:leading-[1.2]">
                Sign Up and Save Up to $15 off our fees.
              </h2>
              <p className="text-center text-white text-base sm:text-lg">
                on selected regions with a promo code!
              </p>
              <div className="sm:pt-5">
                <input
                  type="text"
                  placeholder="Enter email address"
                  className="text-center w-full bg-transparent text-brand-gray-500 border-0 border-b border-brand-gray-light py-2.5 px-4 focus:ring-0 focus:outline-none"
                />
              </div>
              <div className="flex pt-4 sm:pt-7 justify-center">
                <a
                  href="#"
                  className="rounded-full px-8 py-3 bg-brand-red hover:bg-opacity-80 text-white text-lg md:text-2xl"
                >
                  Get Promo Code!
                </a>
              </div>
              <p className="text-sm text-white sm:hidden pt-4 text-opacity-50">
                Expires Sep 30, 2022. Restrictions apply.
                <a href="#" className="underline">
                  Learn more
                </a>
                |
                <a href="#" className="underline">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${ImageTwo})` }}
            className="md:rounded-3xl bg-no-repeat flex items-end justify-center lg:justify-start lg:items-center  bg-top lg:bg-[200px_top] xl:bg-[400px_top] 2xl:bg-right-top lg:col-span-2 overflow-hidden  rounded-xl w-full relative min-h-[550px] lg:min-h-[400px] px-4 lg:py-5 pb-8 pt-40 lg:pt-0 sm:px-32"
          >
            <div className="absolute inset-0 bg-g3 lg:bg-g2   w-full"></div>
            <div className="relative w-[450px] xl:w-[570px] max-w-full  space-y-3  ">
              <h2 className="font-poppins text-white text-center lg:text-left font-medium text-[28px] sm:text-[32px]  leading-[1.2]">
                24/7 Customer
                <span className="font-satisfy text-brand-red font-black ">
                  {" "}
                  Support
                </span>
              </h2>
              <p className="text-center lg:text-left text-white text-base sm:text-lg">
                Our team of experienced tour specialists have travelled to
                hundreds of countries around the globe and have decades of
                first-hand travel experience to share.
              </p>
              <div className="flex pt-5 justify-center lg:justify-start">
                <a
                  href="#"
                  className="rounded-full px-8 py-3 bg-brand-red hover:bg-opacity-80 text-white text-lg md:text-2xl"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
          <div className="md:rounded-3xl lg:col-span-2 rounded-xl w-full bg-brand-gray-50  py-8 md:py-14">
            <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 md:gap-6">
              <div className="group px-6 xl:px-10 [&:nth-child(2)]:after:content-none after:content-none md:after:content-[''] 2xl:[&:nth-child(2)]:after:content-[''] relative after:absolute after:right-0 after:h-20 after:w-px after:bg-black after:bg-opacity-50 after:top-[50%] after:translate-y-[-50%] last:after:content-none">
                <div className="space-y-2  sm:space-y-3 group-last:border-none  border-b border-black border-opacity-25 md:border-0 py-6">
                  <h3 className="font-poppins text-black text-center md:text-left md:text-xl text-lg ">
                    Unbelievable Prices
                  </h3>
                  <p className="sm:text-lg text-base text-center md:text-left text-brand-dark text-opacity-75 ">
                    Save when buying your next trip thanks to super discounted
                    prices.
                  </p>
                </div>
              </div>
              <div className="group px-6 xl:px-10 [&:nth-child(2)]:after:content-none after:content-none md:after:content-[''] 2xl:[&:nth-child(2)]:after:content-[''] relative after:absolute after:right-0 after:h-20 after:w-px after:bg-black after:bg-opacity-50 after:top-[50%] after:translate-y-[-50%] last:after:content-none">
                <div className="space-y-2  sm:space-y-3 group-last:border-none  border-b border-black border-opacity-25 md:border-0 py-6">
                  <h3 className="font-poppins text-black text-center md:text-left md:text-xl text-lg ">
                    Travel Protection Included
                  </h3>
                  <p className="sm:text-lg text-base text-center md:text-left text-brand-dark text-opacity-75 ">
                    Protection against cancellations due to COVID-19 and much
                    more.
                  </p>
                </div>
              </div>
              <div className="group px-6 xl:px-10 [&:nth-child(2)]:after:content-none after:content-none md:after:content-[''] 2xl:[&:nth-child(2)]:after:content-[''] relative after:absolute after:right-0 after:h-20 after:w-px after:bg-black after:bg-opacity-50 after:top-[50%] after:translate-y-[-50%] last:after:content-none">
                <div className="space-y-2  sm:space-y-3 group-last:border-none  border-b border-black border-opacity-25 md:border-0 py-6">
                  <h3 className="font-poppins text-black text-center md:text-left md:text-xl text-lg ">
                    Hand-Crafted By Experts
                  </h3>
                  <p className="sm:text-lg text-base text-center md:text-left text-brand-dark text-opacity-75 ">
                    Itineraries are designed to ensure you have the best
                    possible experience.
                  </p>
                </div>
              </div>
              <div className="group px-6 xl:px-10 [&:nth-child(2)]:after:content-none after:content-none md:after:content-[''] 2xl:[&:nth-child(2)]:after:content-[''] relative after:absolute after:right-0 after:h-20 after:w-px after:bg-black after:bg-opacity-50 after:top-[50%] after:translate-y-[-50%] last:after:content-none">
                <div className="space-y-2  sm:space-y-3 group-last:border-none  border-b border-black border-opacity-25 md:border-0 py-6">
                  <h3 className="font-poppins text-black text-center md:text-left md:text-xl text-lg ">
                    Our Guaranties
                  </h3>
                  <p className="sm:text-lg text-base text-center md:text-left text-brand-dark text-opacity-75 ">
                    Our membership means we adhere to ASTA's code of ethics, and
                    quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
