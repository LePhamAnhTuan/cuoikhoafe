import React, { useEffect, useState } from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import AfterRegister from "./AfterRegister";
import HeaderModal from "../HeaderModal/HeaderModal";
import "./Header.scss";
import { Drawer } from "antd";
import { useDispatch } from "react-redux";

const Header = () => {
  // const [open, setOpen] = useState(false);
  const [active, setactive] = useState(true);
  // const changeInput = () => {
  //   setactive(false);
  // };
  // const closeInput = () => {
  //   setactive(false);
  // };
  return (
    <div className="header">
      <div className="container-lg ">
        <div className="bg-white drop-shadow-md fixed w-full z-999">
          <nav className="drop-shadow border-gray-200 ">
            <div className="header_content max-w-screen-xl flex items-center justify-between  p-4 sm:flex sm:justify-between ">
              <NavLink to="/" className="logo flex items-center sm:text-sm ">
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

      </div>
    </div>
  );
};

export default Header;
