import { HashRouter, Route } from "react-router-dom";

import Checkout from "./views/Checkout";
import Home from "./views/Home";
import Listing from "./views/Listing";
import ListingDetails from "./views/Listing/details";
import Loading from "./views/Loading";
import Inactivity from "./views/inactivity";

function App() {
  return (
    <>
    <HashRouter>
        <Route path="/" element={<Home />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/listing/details" element={<ListingDetails />} />
        <Route path="/listing/loading" element={<Loading />} />
        <Route path="/listing/inactivity" element={<Inactivity />} />
        <Route path="/checkout" element={<Checkout />} />
      </HashRouter>
    </>
  );
}

export default App;
