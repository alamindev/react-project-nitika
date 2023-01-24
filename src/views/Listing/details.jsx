import React from "react";
import LayoutTwo from "../../Components/Layouts/LayoutTwo";
import MobileDetails from "../../Components/Listing/MobileDetails";

function Details() {
  return (
    <>
      <LayoutTwo>
        <section className="max-[400px]:px-3 px-4 py-10 overflow-x-auto">
          <div className="max-w-screen-3xl mx-auto">
            <MobileDetails />
          </div>
        </section>
      </LayoutTwo>
    </>
  );
}
export default Details;
