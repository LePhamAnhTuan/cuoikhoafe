import React from "react";
import Header from "../Component/Header/Header";
import Footer from "../Component/Footer/Footer";
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
