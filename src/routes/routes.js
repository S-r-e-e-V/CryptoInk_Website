import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../components/LandingPage";
import CryptoWhale from "../components/CryptoWhale";
import InfluenceExplorer from "../components/InfluenceExplorer";
import CryptoValuationHub from "../components/CryptoValuationHub";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/crypto-whale" element={<CryptoWhale />} />
        <Route
          exact
          path="/influence-explorer"
          element={<InfluenceExplorer />}
        />
        <Route
          exact
          path="/crypto-valuation-hub"
          element={<CryptoValuationHub />}
        />
        <Route exact path="/" element={<LandingPage />} />
        {/* <Route path="*" element={<NoResult />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
