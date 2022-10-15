import React from "react";
import { Outlet } from "react-router";
import Footer from "../components/layout/footer";
import Header from "../components/layout/header";

const MainPage = () => {
  return (
    <>
      <Header />
      <div className="h-16 bg-blue-400">
        Banner
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default MainPage;
