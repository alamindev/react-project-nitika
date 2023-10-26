import React from "react";
import AddBaggage from "./AddBaggage";
import SelectSeats from "./SelectSeats";
import TravelProtection from "./TravelProtection";

export default function Index() {
  return (
    <>
      <AddBaggage />
      <TravelProtection />
      <SelectSeats />
    </>
  );
}
