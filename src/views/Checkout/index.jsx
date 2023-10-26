import React, { useEffect, useRef, useState } from "react";
import Alert from "../../Components/Checkout/Alert";
import Aside from "../../Components/Checkout/Aside";
import BookingSuccess from "../../Components/Checkout/BookingSuccess";
import Header from "../../Components/Checkout/Header";
import InActiveModal from "../../Components/Checkout/InActiveModal";
import Info from "../../Components/Checkout/Info";
import SoldOutModal from "../../Components/Checkout/SoldOutModal";
import StepOne from "../../Components/Checkout/StepOne/Index";
import StepThree from "../../Components/Checkout/StepThree/Index";
import ReviewsPlicies from "../../Components/Checkout/StepThree/Reviews";
import StepTwo from "../../Components/Checkout/StepTwo/Index";
import Steps from "../../Components/Checkout/Steps";
import LayoutTwo from "../../Components/Layouts/LayoutTwo";

function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentStep, setCurrentStep] = useState(1);
  const [popUp, setPopUp] = useState(false);
  const contentRef = useRef(null);

  const handleNextStep = () => {
    setTimeout(() => {
      contentRef.current.scrollIntoView({ behavior: "smooth" });
    }, 100);

    setCurrentStep(currentStep + 1);
  };
  const handlePrevStep = () => {
    setTimeout(() => {
      contentRef.current.scrollIntoView({ behavior: "smooth" });
    }, 100);
    setCurrentStep(currentStep - 1);
  };
  const handlePopup = () => {
    setPopUp(true);
  };
  const closeModal = () => {
    setPopUp(false);
  };
  const goToHome = () => {
    setCurrentStep(1);
    setPopUp(false);
    setTimeout(() => {
      contentRef.current.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      <LayoutTwo>
        <div
          className="space-y-7 md:space-y-10 overflow-x-clip pb-10"
          ref={contentRef}
        >
          <Info />
          <div className="px-4 pb-12">
            <div className="max-w-screen-3xl mx-auto space-y-3 md:space-y-6">
              <Steps step={currentStep} />
              {currentStep === 1 && (
                <div className="space-y-3 md:space-y-6">
                  <Header />
                  <div className="px-2 sm:px-0">
                    <Alert />
                  </div>
                </div>
              )}
              {currentStep === 2 && (
                <button
                  onClick={handlePrevStep}
                  type="button"
                  className="flex gap-3 items-center text-brand-gray-500 text-base md:text-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="13"
                    fill="none"
                    viewBox="0 0 8 13"
                  >
                    <path stroke="#00113F" d="M7 12.5l-6-6 6-6"></path>
                  </svg>
                  <span>Back to Travel & Fare</span>
                </button>
              )}
              {currentStep === 3 && (
                <button
                  onClick={handlePrevStep}
                  type="button"
                  className="flex gap-3 items-center text-brand-gray-500 text-base md:text-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="13"
                    fill="none"
                    viewBox="0 0 8 13"
                  >
                    <path stroke="#00113F" d="M7 12.5l-6-6 6-6"></path>
                  </svg>
                  <span>Back to Add-ons</span>
                </button>
              )}
              <div className="flex flex-col items-start justify-between lg:flex-row gap-4 xl:gap-7 -mx-4 lg:-mx-0">
                <div className="space-y-4 w-full lg:w-[66%] xl:w-[67%] 2xl:w-[75%]">
                  {currentStep === 1 && <StepOne />}
                  {currentStep === 2 && <StepTwo />}
                  {currentStep === 3 && <StepThree />}
                </div>
                <Aside step={currentStep} />
              </div>
              {currentStep === 3 && (
                <div className="sm:hidden -mx-4">
                  <ReviewsPlicies />
                </div>
              )}
              <div className="flex justify-end w-full lg:w-[66%] xl:w-[67%] 2xl:w-[75%]">
                {!isLoading ? (
                  <div className="fixed shadow-inner sm:shadow-none bottom-0 left-0 w-full sm:w-auto px-4 pt-3 pb-5 bg-white sm:static sm:!p-0 sm:bg-transparent">
                    {currentStep === 1 && (
                      <button
                        onClick={handleNextStep}
                        type="button"
                        className="px-8 py-3 sm:py-4 rounded-full text-center w-full sm:w-auto text-white bg-brand-red  text-lg sm:text-xl lg:text-2xl font-medium hover:bg-opacity-80 transition-all"
                      >
                        Continue to Add ons
                      </button>
                    )}
                    {currentStep === 2 && (
                      <button
                        onClick={handleNextStep}
                        type="button"
                        className="px-8 py-3 sm:py-4 rounded-full text-center w-full sm:w-auto text-white bg-brand-red  text-lg sm:text-xl lg:text-2xl font-medium hover:bg-opacity-80 transition-all"
                      >
                        Continue with Payment
                      </button>
                    )}
                    {currentStep === 3 && (
                      <button
                        onClick={handlePopup}
                        type="button"
                        className="px-8 py-3 sm:py-4 rounded-full text-center w-full sm:w-auto text-white bg-brand-red  text-lg sm:text-xl lg:text-2xl font-medium hover:bg-opacity-80 transition-all"
                      >
                        Pay Now
                      </button>
                    )}
                  </div>
                ) : (
                  <div className="rounded-full sm:rounded bg-brand-gray-light h-12 shadow-inner w-[240px] animate-pulse"></div>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* start coding for booking successfull popup  */}
        <BookingSuccess
          popup={popUp}
          goToHome={goToHome}
          closeModal={closeModal}
        />
        {currentStep === 2 && <InActiveModal />}
        {currentStep === 3 && <SoldOutModal />}
      </LayoutTwo>
    </>
  );
}
export default Index;
