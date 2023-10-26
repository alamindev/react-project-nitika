import React from "react";
import amex from "../../../assets/images/checkout/amex.png";
import citi from "../../../assets/images/checkout/citi.png";
import master from "../../../assets/images/checkout/master.png";
import paypal from "../../../assets/images/checkout/paypal.png";
import security from "../../../assets/images/checkout/security-lock.svg";
import stripe from "../../../assets/images/checkout/stripe.png";
import visa from "../../../assets/images/checkout/visa.png";
export default function PaymentDetails() {
  return (
    <div className=" bg-white lg:rounded-xl px-4 py-6 xl:p-6 w-full space-y-4">
      <div className="flex flex-col md:flex-row md:divide-x divide-brand-gray-light">
        <div className="md:w-[310px] xl:w-[400px] md:pr-4 xl:pr-6 md:shrink-0 space-y-3">
          <h2 className="font-medium text-xl sm:text-2xl text-dark">
            Your Payment
          </h2>
          <div className="flex rounded-full px-2 py-1 bg-brand-teal items-center gap-2">
            <img src={security} alt="security-lock" />
            <p>Secure SSL Encrypted Transaction</p>
          </div>
          <div className="space-y-4 pt-3">
            <h2 className="font-bold text-xl text-dark">
              How do you want to pay?
            </h2>
            <ul className="grid gap-5 pb-4">
              <li className="space-y-1.5">
                <div className="custom-radio shrink-0">
                  <input type="radio" id="credit" name="card" checked />
                  <label
                    htmlFor="credit"
                    className="text-base text-brand-blue-100"
                  >
                    Credit Cards
                  </label>
                </div>
                <ul className="flex gap-2 items-center pl-8">
                  <li>
                    <img src={visa} alt="visa" />
                  </li>
                  <li>
                    <img src={stripe} alt="stripe" />
                  </li>
                  <li>
                    <img src={master} alt="master" />
                  </li>
                  <li>
                    <img src={citi} alt="citi" />
                  </li>
                  <li>
                    <img src={amex} alt="amex" />
                  </li>
                </ul>
              </li>
              <li className="space-y-1.5">
                <div className="custom-radio shrink-0">
                  <input type="radio" id="paypal" name="card" />
                  <label
                    htmlFor="paypal"
                    className="text-base text-brand-blue-100"
                  >
                    Paypal
                  </label>
                </div>
                <ul className="flex gap-2 items-center pl-8">
                  <li>
                    <img src={paypal} alt="paypal" />
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="md:pl-4 xl:px-6 w-full space-y-3">
          <h2 className="font-bold text-dark text-xl">Payment Details</h2>
          <form action="" className="w-full">
            <div className="grid max-[540px]:grid-cols-1 grid-cols-2 gap-2">
              <div className="group error min-[541px]:col-span-2 ">
                <div className="relative after:top-5 after:absolute after:right-3 group-[.error]:after:content-error">
                  <input
                    id="cardholder_name"
                    type="text"
                    value="John Doe"
                    name="cardholder_name"
                    className="peer w-full text-sm group-[.error]:!border-brand-red bg-transparent h-[48px] hover:border-brand-blue-100 rounded-[5px] pb-2 border border-brand-gray-light text-brand-gray-500 placeholder-transparent focus:outline-none focus:border-brand-blue-400 pt-5 pl-3 pr-7"
                    placeholder="Cardholder’s Name"
                  />
                  <label htmlFor="cardholder_name" className="labels">
                    Cardholder’s Name<sup>*</sup>
                  </label>
                </div>
                <p className="text-xs text-brand-red-100 pt-2 group-[.error]:block hidden">
                  Please provide cardholder’s name
                </p>
              </div>
              <div className="group error  min-[541px]:col-span-2">
                <div className="relative after:top-5 after:absolute after:right-3 group-[.error]:after:content-error">
                  <input
                    id="cardholder_number"
                    type="text"
                    value="1234 5678 9012 346"
                    name="cardholder_number"
                    className="peer w-full text-sm group-[.error]:!border-brand-red bg-transparent h-[48px] hover:border-brand-blue-100 rounded-[5px] pb-2 border border-brand-gray-light text-brand-gray-500 placeholder-transparent focus:outline-none focus:border-brand-blue-400 pt-5 pl-3 pr-7"
                    placeholder="Card Number*"
                  />
                  <label htmlFor="cardholder_number" className="labels">
                    Card Number<sup>*</sup>
                  </label>
                </div>
                <p className="text-xs text-brand-red-100 pt-2 group-[.error]:block hidden">
                  Please provide valid card number
                </p>
              </div>
              <div className="group">
                <div className="relative after:top-5 after:absolute after:right-3 group-[.error]:after:content-error">
                  <input
                    id="exp_date"
                    type="text"
                    name="exp_date"
                    className="peer w-full text-sm group-[.error]:!border-brand-red bg-transparent h-[48px] hover:border-brand-blue-100 rounded-[5px] pb-2 border border-brand-gray-light text-brand-gray-500 placeholder-transparent focus:outline-none focus:border-brand-blue-400 pt-5 pl-3 pr-7"
                    placeholder="Expiration Date"
                  />
                  <label htmlFor="exp_date" className="labels">
                    Expiration Date<sup>*</sup>
                  </label>
                </div>
                <p className="text-xs text-brand-red-100 pt-2 group-[.error]:block hidden">
                  Please provide valid Date
                </p>
              </div>
              <div className="group">
                <div className="relative after:top-5 after:absolute after:right-3 group-[.error]:after:content-error">
                  <input
                    id="cvc"
                    type="text"
                    name="cvc"
                    className="peer w-full text-sm group-[.error]:!border-brand-red bg-transparent h-[48px] hover:border-brand-blue-100 rounded-[5px] pb-2 border border-brand-gray-light text-brand-gray-500 placeholder-transparent focus:outline-none focus:border-brand-blue-400 pt-5 pl-3 pr-7"
                    placeholder="CVC"
                  />
                  <label htmlFor="cvc" className="labels">
                    CVC<sup>*</sup>
                  </label>
                </div>
                <p className="text-xs text-brand-red-100 pt-2 group-[.error]:block hidden">
                  Please provide valid CVC
                </p>
              </div>
              <div className="pt-2">
                <button
                  type="button"
                  className="px-8 py-3 rounded-full bg-brand-blue-200 text-white  text-lg font-medium hover:bg-opacity-80"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
