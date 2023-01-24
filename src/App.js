import { Route, Routes } from "react-router-dom";

import Home from "./views/Home";
import Inactivity from "./views/inactivity";
import Listing from "./views/Listing";
import ListingDetails from "./views/Listing/details";
import Loading from "./views/Loading";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/listing/details" element={<ListingDetails />} />
        <Route path="/listing/loading" element={<Loading />} />
        <Route path="/listing/inactivity" element={<Inactivity />} />
      </Routes>
    </>
  );
}

export default App;
