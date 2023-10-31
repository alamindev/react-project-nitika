import React from "react";
import AddBaggage from "./AddBaggage";
import SelectSeats from "./SelectSeats";
import SelectYourSeats from "./SelectYourSeats";
import TravelProtection from "./TravelProtection";

export default function Index() {
  return (
    <>
      <AddBaggage />
      <TravelProtection />
      <SelectYourSeats />
      <SelectSeats />
    </>
  );
}
