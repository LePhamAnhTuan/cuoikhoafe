import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { Outlet } from "react-router-dom";

const UserTemplate = () => {
  return (
    <div className="flex flex-col min-h-screen  justify-between">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default UserTemplate;
