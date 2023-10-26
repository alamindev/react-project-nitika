import React from "react";

export default function Alert() {
  return (
    <div className="border border-brand-green-light lg:rounded-xl bg-brand-green-50 p-4 xl:px-6 xl:py-[18px] space-y-1.5">
      <h2 className="text-base xl:text-lg font-bold text-brand-green">
        Keep up the good work!
      </h2>
      <p className="text-base text-brand-green">
        You’re on your way to getting a great deal.
      </p>
    </div>
  );
}
