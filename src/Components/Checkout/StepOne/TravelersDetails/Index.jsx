import React from "react";
import AddTraveler from "./AddTraveler";
import Details from "./Details";
import FrequentFlyer from "./FrequentFlyer";
export default function Index({ handlePopup }) {
  return (
    <div className="w-full bg-white lg:rounded-xl px-4 py-6 xl:p-6 ">
      <Details handlePopup={handlePopup} />
      <AddTraveler />
      <FrequentFlyer />
    </div>
  );
}
