import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div className="container-lg">
      <div className="bg-white drop-shadow-md">
        <nav className="drop-shadow border-gray-200 ">
          <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4 sm:flex sm:justify-between ">
            <a href="#" className="flex items-center sm:text-sm ">
              <i
                className="fa-brands fa-airbnb sm:text-sm"
                style={{ color: "#ff5a1f", fontSize: "40px" }}
              />

              <span className="self-center font-bold text-orange-500 text-3xl whitespace-nowrap ml-3 sm:text-sm">
                airbnb
              </span>
            </a>
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
              <div className="btn_dropdown border-orange-500 rounded-2xl border-2 border-solid ">
                <button
                  type="button"
                  className="flex py-2 px-5   rounded-xl md:mr-0  "
                  id="user-menu-button"
                  aria-expanded="false"
                  data-dropdown-toggle="user-dropdown"
                  data-dropdown-placement="bottom"
                >
                  {" "}
                  <div className="btn_dropdown_menu flex items-center">
                    <i
                      className="fa-solid fa-bars text-lg mr-3"
                      style={{ color: "#e15f1f" }}
                    />
                    <i
                      className="fa-solid fa-user text-lg"
                      style={{ color: "#e15f1f" }}
                    />
                  </div>
                </button>
              </div>

              {/* Dropdown menu */}
              <div
                className="z-50 hidden my-4 text-base list-none bg-white divide-y rounded-lg drop-shadow-md dark:divide-gray-600"
                id="user-dropdown"
              >
                <div className="px-4 py-3">
                  <span className="block text-sm text-gray-900 dark:text-white">
                    Bonnie Green
                  </span>
                  <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                    name@flowbite.com
                  </span>
                </div>
                <ul className="py-2" aria-labelledby="user-menu-button">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Earnings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="icon_datphong  drop-shadow-md">
        <button className="px-5">
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
        </button>
        {/* <a href="#" className="table:text-red-400">
          123
        </a> */}
      </div>
    </div>
  );
};

export default Header;
