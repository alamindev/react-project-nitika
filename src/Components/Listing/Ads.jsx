import React from "react";
import ads1 from "../../assets/images/listing/ads-1.png";
import ads2 from "../../assets/images/listing/ads-2.png";
export default function Ads() {
  return (
    <div className="w-[280px] 2xl:w-[315px] max-w-full shrink-0 space-y-6 hidden 3xl:block">
      <figure>
        <img src={ads1} alt="ads one" />
      </figure>
      <figure>
        <img src={ads2} alt="ads two" />
      </figure>
    </div>
  );
}
