import React from "react";
import treasureMap from "../../assets/images/treasure-map.svg";
export default function DiscountAlert() {
  return (
    <div className="bg-brand-blue-dark shadow-custom py-2.5 px-4 flex justify-center">
      <div className="flex gap-4 items-center">
        <img src={treasureMap} alt="treasure-map.svg" />
        <a href="#" className="text-white sm:text-base text-sm font-normal underline">
          Add to Cart now and save 50% in your trip
        </a>
      </div>
    </div>
  );
}
