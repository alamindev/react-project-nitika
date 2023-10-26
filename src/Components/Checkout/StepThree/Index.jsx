import React from "react";
import ContactDetails from "./ContactDetails";
import ContactInformation from "./ContactInformation";
import IncludedBaggage from "./IncludedBaggage";
import IncludedBaggageTwo from "./IncludedBaggageTwo";
import InsuranceDetails from "./InsuranceDetails";
import MonthlyPayment from "./MonthlyPayment";
import PaymentDetails from "./PaymentDetails";
import Reviews from "./Reviews";
import SeatDetails from "./SeatDetails";

export default function Index() {
  return (
    <>
      <ContactDetails />
      <IncludedBaggage />
      <IncludedBaggageTwo />
      <SeatDetails />
      <InsuranceDetails />
      <PaymentDetails />
      <MonthlyPayment />
      <ContactInformation />
      <div className="sm:block hidden">
        <Reviews />
      </div>
    </>
  );
}
