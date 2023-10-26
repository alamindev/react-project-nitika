import React, { useState } from "react";
import SignInModal from "../SignInModal";
import SignUpModal from "../SignUpModal";
import Departure from "./Departure";
import FareSelection from "./FareSelection";
import ReturnInformation from "./ReturnInformation";
import TravelersDetails from "./TravelersDetails/Index";
export default function Index() {
  let [signUpModal, setSignUpModal] = useState(false);
  let [signInModal, setSignInModal] = useState(false);
  const handleSignUpPopup = () => {
    setSignUpModal(true);
    setSignInModal(false);
  };
  const handleSignInPopup = () => {
    setSignInModal(true);
    setSignUpModal(false);
  };
  const closeSignUpModal = () => {
    setSignInModal(false);
    setSignUpModal(false);
  };
  const closeSignInModal = () => {
    setSignInModal(false);
    setSignUpModal(false);
  };
  return (
    <>
      <div className="w-full bg-white lg:rounded-xl px-4 py-6 xl:p-6 space-y-8">
        <Departure />
        <ReturnInformation />
      </div>
      <TravelersDetails handlePopup={handleSignInPopup} />
      <FareSelection />
      <div>
        <SignUpModal
          handlePopup={handleSignInPopup}
          modal={signUpModal}
          closeModal={closeSignUpModal}
        />
        <SignInModal
          handlePopup={handleSignUpPopup}
          modal={signInModal}
          closeModal={closeSignInModal}
        />
      </div>
    </>
  );
}
