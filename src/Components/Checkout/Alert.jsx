import React from "react";
import Warning from "../../assets/images/checkout/warning-sign.svg";
export default function Alert() {
  return (
    <div className="flex gap-2 items-center px-3 py-2.5 rounded-lg bg-brand-blue-20 border border-brand-blue-30">
      <img src={Warning} alt="warning-sign" />
      <p className="text-brand-blue-200 text-base font-segoe">
        Price confirmed. It’s time to book!
      </p>
    </div>
  );
}
