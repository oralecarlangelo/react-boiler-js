import React from "react";
import { Outlet } from "react-router";
import MarketHeader from "../components/layout/market-header";

const MarketingPage = () => {
  return (
    <div>
      <MarketHeader/>
      <div>
        <h1 className="text-6xl h-24">Marketing</h1>
        <Outlet />
      </div>
    </div>
  );
};

export default MarketingPage;
