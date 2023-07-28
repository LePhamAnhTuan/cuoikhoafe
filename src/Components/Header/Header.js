import React, { useState } from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import AfterRegister from "./AfterRegister";
const Header = () => {
  return (
    <div className="container-lg">
      <div className="bg-white drop-shadow-md">
        <nav className="drop-shadow border-gray-200 ">
          <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4 sm:flex sm:justify-between ">
            <NavLink to="/" className="flex items-center sm:text-sm ">
              <i
                className="fa-brands fa-airbnb sm:text-sm"
                style={{ color: "#ff5a1f", fontSize: "40px" }}
              />
              <span className="self-center font-bold text-orange-500 text-3xl whitespace-nowrap ml-3 sm:text-sm">
                airbnb
              </span>
            </NavLink>
            <button
              className="block px-3 py- rounded-2xl w-auto md:flex md:w-auto lg:flex sm:flex sm:w-auto "
              id="navbar-user"
            >
              <ul className="flex justify-center font-medium md:p-0 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
                <li className="btn_header">
                  <a
                    href="#"
                    className="btn_header_navbar block py-2 pl-3 pr-4 text-black rounded md:p-0 hover:text-white duration-200"
                    aria-current="page"
                  >
                    Địa chỉ bất kỳ
                  </a>
                </li>
                <li className="btn_header">
                  <a
                    href="#"
                    className="btn_header_navbar block py-2 pl-3 pr-4 text-black rounded md:p-0 hover:text-white duration-200"
                  >
                    Tuần bất kỳ
                  </a>
                </li>
                <li className="flex items-center">
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-black rounded  md:p-0 hover:text-white duration-200"
                  >
                    Thêm khách hàng
                    <i className="fa-solid fa-magnifying-glass text-white ml-4"></i>
                  </a>
                </li>
              </ul>
            </button>
            <div className="flex items-center">
              <AfterRegister />
            </div>
          </div>
        </nav>
      </div>
      <div className="icon_datphong  drop-shadow-md">
        {/* <button className="px-5">
          <i className="fa-solid fa-house-flag text-3xl"></i>
        </button>
        <button className="px-5">
          <i className="fa-solid fa-house-flag text-3xl"></i>
        </button>
        <button className="px-5">
          <i className="fa-solid fa-house-flag text-3xl"></i>
        </button>
        <button className="px-5">
          <i className="fa-solid fa-house-flag text-3xl"></i>
        </button> */}
        {/* <a href="#" className="table:text-red-400">
          123
        </a> */}
      </div>
    </div>
  );
};

export default Header;
